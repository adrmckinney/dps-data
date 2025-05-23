import type { DataSource, School, Year } from '@prisma/client';
import { DataType, DocType, Prisma } from '@prisma/client';
import { BadDataError } from '../../errors/BadData.ts';
import { DataSourceRepo } from '../../repos/dataSourceRepo.ts';
import { GradePopulationRepo } from '../../repos/gradePopulationRepo.ts';
import { GradeRepo } from '../../repos/gradeRepo.ts';
import { PopulationSnapshotRepo } from '../../repos/populationSnapshotRepo.ts';
import { SchoolRepo } from '../../repos/schoolRepo.ts';
import { SubgroupPopulationRepo } from '../../repos/subgroupPopulationRepo.ts';
import { SubgroupRepo } from '../../repos/subgroupRepo.ts';
import { YearRepo } from '../../repos/yearRepo.ts';
import type { RawPopulationData } from '../../types/population.ts';
import { tryCatch, tryCatchSync } from '../../utils/tryCatch.ts';
import { byGradeParser } from './parsers/byGradeParser.ts';
import { bySubgroupParser } from './parsers/bySubgroupParser.ts';
import { snapShotParser } from './parsers/snapshotParser.ts';

export const PopulationService = {
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
                    throw new BadDataError(`No year record found for date: ${date}`);
                }
                return response;
            },
            catchFn: error => {
                throw error;
            },
        });

        const dataSource: Prisma.DataSourceCreateInput = {
            url: linkData.url,
            localPath: null,
            title: `${tableOneTitle} and ${tableTwoTitle} - ${year.schoolYear}`,
            year: { connect: { id: year.id } },
            published: year.endYear,
            notes: 'Two tables in one PDF. The first is Membership by Grade and the second is Membership by School, Ethnicity, Gender',
            dataType: DataType.POPULATION,
            docType: DocType.PDF,
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
                return await DataSourceRepo.insert(dataSource);
            },
            catchFn: async error => {
                throw error;
            },
        });

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
        const subgroups = await tryCatch({
            tryFn: async () => {
                return await SubgroupRepo.getAllSubgroups();
            },
            catchFn: error => {
                throw error;
            },
        });
        const subgroupsMap = new Map(subgroups.map(sg => [sg.secondaryKey, sg]));

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

export async function getPopulationDataEntityIds(
    code: string,
    gradeAbbr: string,
    schoolYear: string
) {
    const [school, grade, year] = await Promise.all([
        SchoolRepo.getSchoolByCode(code),
        GradeRepo.getGradeByAbbreviation(gradeAbbr),
        YearRepo.getYearBySchoolYear(schoolYear),
    ]);

    if (!school) {
        throw new Error(`School not found for code: ${code}`);
    }

    if (!grade) {
        throw new Error(`Grade not found for abbreviation: ${gradeAbbr}`);
    }

    if (!year) {
        throw new Error(`Year not found for school year: ${schoolYear}`);
    }

    return { schoolId: school?.id, gradeId: grade.id, yearId: year?.id };
}
