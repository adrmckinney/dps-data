import { QueryModifiers } from '@/types/queryModifiers';
import { AchievementService } from './achievementService/achievementService';
import { DisciplineService } from './disciplineService/disciplineService';
import { PopulationService } from './populationService/populationService';

export const VisualizationService = {
    async getVisualizeData(payload: QueryModifiers) {
        console.log('payload vis Service', payload);
        // Only fetch data for selected data types
        const dataTypes = payload.dataTypes || [];

        const result: { [key: string]: unknown } = {};

        if (dataTypes.includes('POPULATION_GRADE')) {
            const allFilters = {
                ...payload.scopedFilters['POPULATION_GRADE'].filters,
                ...payload.globalFilters,
            };
            console.log('allFilters', allFilters);
            const res = await PopulationService.getFilteredGradePopulation(allFilters);
            console.log('res for pop grades', res);
        }

        if (dataTypes.includes('POPULATION_SUBGROUP')) {
            const allFilters = {
                ...payload.scopedFilters['POPULATION_SUBGROUP'].filters,
                ...payload.globalFilters,
            };
            const res = await PopulationService.getFilteredSubgroupPopulation(allFilters);
            console.log('res for pop grades', res);
        }

        if (dataTypes.includes('POPULATION_GRADE') || dataTypes.includes('POPULATION_SUBGROUP')) {
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

        if (
            dataTypes.includes('DISCIPLINE_OVERALL') ||
            dataTypes.includes('DISCIPLINE_SUBGROUPS')
        ) {
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
            dataTypes.includes('ACHIEVEMENT_OVERALL') ||
            dataTypes.includes('ACHIEVEMENT_SUBGROUPS')
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
