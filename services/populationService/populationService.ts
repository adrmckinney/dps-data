import type { DataSource, DataSourceType, School, Year } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { AppError, InternalServerError, NotFoundError } from '../../errors/AppError.ts';
import {
    buildGradePopulationSortOrder,
    buildGradePopulationWhereClause,
} from '../../filters/gradePopulationFilterBuilder.ts';
import {
    buildSubgroupPopulationSortOrder,
    buildSubgroupPopulationWhereClause,
} from '../../filters/subgroupPopulationFilterBuilder.ts';
import { DataSourceRepo } from '../../repos/dataSourceRepo.ts';
import { DataSourceTypesRepo } from '../../repos/dataSourceTypesRepo.ts';
import { GradePopulationRepo } from '../../repos/gradePopulationRepo.ts';
import { GradeRepo } from '../../repos/gradeRepo.ts';
import { PopulationSnapshotRepo } from '../../repos/populationSnapshotRepo.ts';
import { SchoolRepo } from '../../repos/schoolRepo.ts';
import { SubgroupPopulationRepo } from '../../repos/subgroupPopulationRepo.ts';
import { SubgroupRepo } from '../../repos/subgroupRepo.ts';
import { YearRepo } from '../../repos/yearRepo.ts';
import type { RawPopulationData } from '../../types/population.ts';
import type { DataSetFilterGroup } from '../../types/queryModifiers.ts';
import { GradePopulationResponse } from '../../types/queryResponseTypes.ts';
import { tryCatch, tryCatchSync } from '../../utils/tryCatch.ts';
import { DataSetService } from '../dataSetService.ts';
import { DataSourceToDataSetService } from '../dataSourceToDataSetService.ts';
import { byGradeParser } from './parsers/byGradeParser.ts';
import { bySubgroupParser } from './parsers/bySubgroupParser.ts';
import { snapShotParser } from './parsers/snapshotParser.ts';

export const PopulationService = {
    async getSnapshots() {
        console.log('The get snapshot route ran');
        return;
    },

    async getFilteredSubgroupPopulation(filterGroup: DataSetFilterGroup) {
        const where = buildSubgroupPopulationWhereClause(filterGroup.filters ?? {});
        const orderBy = buildSubgroupPopulationSortOrder();
        return SubgroupPopulationRepo.getFilteredSubgroupPopulation({ where, orderBy });
    },

    async getFilteredGradePopulation(
        filterGroup: DataSetFilterGroup
    ): Promise<GradePopulationResponse[]> {
        if (!filterGroup.filters) return [];
        const where = buildGradePopulationWhereClause(filterGroup.filters);
        const orderBy = buildGradePopulationSortOrder();
        return GradePopulationRepo.getFilteredGradePopulation({ where, orderBy });
    },

    async processPopulationPdf(pdfRecords: RawPopulationData[], linkData: { url: string }) {
        const date = pdfRecords[0].metadata.date.split(' ')[0];
        const tableOneTitle = pdfRecords[0].metadata.title;
        const tableTwoTitle = pdfRecords[1].metadata.title;
        let targetGradeListIdx = 0;
        let targetSubgroupListIdx = 0;

        if (tableOneTitle.includes('Grade')) {
            targetSubgroupListIdx = 1;
        } else {
            targetGradeListIdx = 1;
        }

        const year = await tryCatch<Year>({
            tryFn: async () => {
                const response = await YearRepo.getYearBySchoolYear(date);
                if (!response) {
                    throw new NotFoundError(
                        `No year record found for date: ${date}. DB has likely not been seeded.`
                    );
                }
                return response;
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in PopulationService getSubgroups',
                    error
                );
            },
        });

        const dataTypes = await tryCatch<DataSourceType[]>({
            tryFn: async () => {
                const response = await DataSourceTypesRepo.getAllDataSourceTypes();
                if (!response) {
                    throw new NotFoundError(
                        `No dataSourceTypes record found. DB has likely not been seeded.`
                    );
                }
                return response;
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in PopulationService fetching dataSourceTypes',
                    error
                );
            },
        });

        const dataSource: Prisma.DataSourceCreateInput = {
            url: linkData.url,
            localPath: null,
            title: `${tableOneTitle} and ${tableTwoTitle} - ${year.schoolYear}`,
            year: { connect: { id: year.id } },
            published: year.endYear,
            notes: 'Two tables in one PDF. One table is Membership by Grade and the other is Membership by School, Ethnicity, Gender',
            dataType: { connect: { id: dataTypes.find(dt => dt.type === 'PDF')?.id } },
        };

        const schools = await tryCatch<School[]>({
            tryFn: async () => {
                return await SchoolRepo.getAllSchools();
            },
            catchFn: async error => {
                throw error;
            },
        });
        const schoolMap = new Map(schools.map(s => [s.code, s]));

        const dataSourceResponse = await tryCatch<DataSource>({
            tryFn: async () => {
                return await DataSourceRepo.insertOrFetch(dataSource);
            },
            catchFn: async error => {
                throw error;
            },
        });

        const targetDataSets = await DataSetService.getDataSetsByKeys([
            'POPULATION_GRADE',
            'POPULATION_SUBGROUP',
        ]);
        const input: Prisma.DataSourceToDataSetCreateManyInput[] = targetDataSets.map(ds => {
            return {
                dataSetId: ds.id,
                dataSourceId: dataSourceResponse.id,
            };
        });
        await DataSourceToDataSetService.createDataSourceToDataSetRecords(input);

        const preparedSnapshotData = tryCatchSync({
            tryFn: () => {
                return snapShotParser(
                    pdfRecords[targetGradeListIdx].data,
                    year,
                    dataSourceResponse,
                    schoolMap
                );
            },
            catchFn: error => {
                throw error;
            },
        });

        const snapshotResponse = await tryCatch({
            tryFn: async () => {
                const res = await PopulationSnapshotRepo.createBulk(preparedSnapshotData);
                res.message =
                    res.insertedCount === 0
                        ? `No new records inserted into PopulationSnapshot from PDF "${dataSource.title}" of school year ${date}. All entries were duplicates and were skipped.`
                        : `${res.insertedCount} new records inserted into PopulationSnapshot from PDF "${dataSource.title}" of school year ${date}. ${res.skippedCount} duplicates skipped.`;
                return res;
            },
            catchFn: error => {
                throw error;
            },
        });

        const grades = await tryCatch({
            tryFn: async () => {
                return await GradeRepo.getAllGrades();
            },
            catchFn: error => {
                throw error;
            },
        });
        const gradesMap = new Map(grades.map(g => [g.abbreviation, g]));

        const preparedByGradeData = tryCatchSync({
            tryFn: () => {
                return byGradeParser(
                    pdfRecords[targetGradeListIdx].data,
                    year,
                    dataSourceResponse,
                    schoolMap,
                    gradesMap
                );
            },
            catchFn: error => {
                throw error;
            },
        });

        const byGradeResponse = await tryCatch({
            tryFn: async () => {
                const res = await GradePopulationRepo.createBulk(preparedByGradeData);
                res.message =
                    res.insertedCount === 0
                        ? `No new records inserted into GradePopulation from PDF "${dataSource.title}" of school year ${date}. All entries were duplicates and were skipped.`
                        : `${res.insertedCount} new records inserted into GradePopulation from PDF "${dataSource.title}" of school year ${date}. ${res.skippedCount} duplicates skipped.`;
                return res;
            },
            catchFn: error => {
                throw error;
            },
        });

        // Subgroups
        const subGroups = await tryCatch({
            tryFn: async () => {
                return await SubgroupRepo.getAllSubgroups();
            },
            catchFn: error => {
                throw error;
            },
        });
        const subgroupsMap = new Map(subGroups.map(sg => [sg.secondaryKey, sg]));

        const preparedSubgroupData = tryCatchSync({
            tryFn: () => {
                return bySubgroupParser(
                    pdfRecords[targetSubgroupListIdx].data,
                    year,
                    dataSourceResponse,
                    schoolMap,
                    subgroupsMap
                );
            },
            catchFn: error => {
                throw error;
            },
        });

        const bySubgroupResponse = await tryCatch({
            tryFn: async () => {
                const res = await SubgroupPopulationRepo.createBulk(preparedSubgroupData);
                res.message =
                    res.insertedCount === 0
                        ? `No new records inserted into SubgroupPopulation from PDF "${dataSource.title}" of school year ${date}. All entries were duplicates and were skipped.`
                        : `${res.insertedCount} new records inserted into SubgroupPopulation from PDF "${dataSource.title}" of school year ${date}. ${res.skippedCount} duplicates skipped.`;
                return res;
            },
            catchFn: error => {
                throw error;
            },
        });

        return [snapshotResponse, byGradeResponse, bySubgroupResponse];
    },
};
