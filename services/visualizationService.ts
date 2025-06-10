import { QueryModifiers } from '@/types/queryModifiers';
import { AppError, InternalServerError } from '../errors/AppError';
import { tryCatch } from '../utils/tryCatch';
import { AchievementService } from './achievementService/achievementService';
import { DataSetService } from './dataSetService';
import { DisciplineService } from './disciplineService/disciplineService';
import { PopulationService } from './populationService/populationService';

export const VisualizationService = {
    async getVisualizeData(payload: QueryModifiers) {
        console.log('payload vis Service', payload);
        const dataSetsDB = await tryCatch({
            tryFn: async () => {
                return await DataSetService.getDataSets();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in VisualizationService getDataSets',
                    error
                );
            },
        });
        // OnlrInternalServerError fetch data for selected data types
        const dataSets = payload.dataSetIds || [];

        const result: { [key: string]: unknown } = {};

        if (dataSets.includes('POPULATION_GRADE')) {
            const allFilters = {
                ...payload.scopedFilters['POPULATION_GRADE'].filters,
                ...payload.globalFilters,
            };
            console.log('allFilters', allFilters);
            const res = await PopulationService.getFilteredGradePopulation(allFilters);
            console.log('res for pop grades', res);
        }

        if (dataSets.includes('POPULATION_SUBGROUP')) {
            const allFilters = {
                ...payload.scopedFilters['POPULATION_SUBGROUP'].filters,
                ...payload.globalFilters,
            };
            const res = await PopulationService.getFilteredSubgroupPopulation(allFilters);
            console.log('res for pop grades', res);
        }

        if (dataSets.includes('POPULATION_GRADE') || dataSets.includes('POPULATION_SUBGROUP')) {
            const [
                subgroupData,
                gradeData,
                //  snapshotData
            ] = await Promise.all([
                PopulationService.getFilteredSubgroupPopulation(
                    payload.filters?.POPULATION_SUBGROUP
                ),
                PopulationService.getFilteredGradePopulation(payload),
                // PopulationService.getSnapshots(),
            ]);

            result.population = {
                subgroupData,
                gradeData,
                // snapshotData,
            };
        }

        if (dataSets.includes('DISCIPLINE_OVERALL') || dataSets.includes('DISCIPLINE_SUBGROUPS')) {
            const [subgroupData, schoolData] = await Promise.all([
                DisciplineService.getFilteredSubgroupData(payload),
                DisciplineService.getFilteredSchoolData(payload),
            ]);

            result.discipline = {
                subgroupData,
                schoolData,
            };
        }

        if (
            dataSets.includes('ACHIEVEMENT_OVERALL') ||
            dataSets.includes('ACHIEVEMENT_SUBGROUPS')
        ) {
            const [subgroupData, schoolData] = await Promise.all([
                AchievementService.getFilteredSubgroupData(payload),
                AchievementService.getFilteredSchoolData(payload),
            ]);

            result.achievement = {
                subgroupData,
                schoolData,
            };
        }

        return result;
    },
};
