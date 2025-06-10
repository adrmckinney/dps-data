import { getDataSetIdByKey } from '@/constants/DataSetList';
import { QueryModifiers } from '@/types/queryModifiers';
import { PopulationService } from './populationService/populationService';

export const VisualizationService = {
    async getVisualizeData(payload: QueryModifiers) {
        console.log('payload vis Service', payload);
        // Not sure I need this
        // const dataSetsDB = await tryCatch({
        //     tryFn: async () => {
        //         return await DataSetService.getDataSets();
        //     },
        //     catchFn: error => {
        //         if (error instanceof AppError) {
        //             throw error;
        //         }
        //         throw new InternalServerError(
        //             'Unexpected error in VisualizationService getDataSets',
        //             error
        //         );
        //     },
        // });
        // OnlrInternalServerError fetch data for selected data types

        const result = [];

        for (const filterGroup of payload.filterGroups) {
            if (filterGroup.dataSetId === getDataSetIdByKey('POPULATION_GRADE')) {
                const res = await PopulationService.getFilteredGradePopulation(filterGroup);
                console.log('res for pop grades', res);
                result.push({
                    dataSetId: filterGroup.dataSetId,
                    data: res,
                });
            }

            if (filterGroup.dataSetId === getDataSetIdByKey('POPULATION_SUBGROUP')) {
                const res = await PopulationService.getFilteredSubgroupPopulation(filterGroup);
                console.log('res for pop subgroups', res);
                result.push({
                    dataSetId: filterGroup.dataSetId,
                    data: res,
                });
            }
        }

        return result;

        // if (dataSets.includes('POPULATION_GRADE')) {
        //     const allFilters = {
        //         ...payload.scopedFilters['POPULATION_GRADE'].filters,
        //         ...payload.globalFilters,
        //     };
        //     console.log('allFilters', allFilters);
        //     const res = await PopulationService.getFilteredGradePopulation(allFilters);
        // }

        // if (dataSets.includes('POPULATION_SUBGROUP')) {
        //     const allFilters = {
        //         ...payload.scopedFilters['POPULATION_SUBGROUP'].filters,
        //         ...payload.globalFilters,
        //     };
        // }

        // if (dataSets.includes('POPULATION_GRADE') || dataSets.includes('POPULATION_SUBGROUP')) {
        //     const [
        //         subgroupData,
        //         gradeData,
        //         //  snapshotData
        //     ] = await Promise.all([
        //         PopulationService.getFilteredSubgroupPopulation(
        //             payload.filters?.POPULATION_SUBGROUP
        //         ),
        //         PopulationService.getFilteredGradePopulation(payload),
        //         // PopulationService.getSnapshots(),
        //     ]);

        //     result.population = {
        //         subgroupData,
        //         gradeData,
        //         // snapshotData,
        //     };
        // }

        // if (dataSets.includes('DISCIPLINE_OVERALL') || dataSets.includes('DISCIPLINE_SUBGROUPS')) {
        //     const [subgroupData, schoolData] = await Promise.all([
        //         DisciplineService.getFilteredSubgroupData(payload),
        //         DisciplineService.getFilteredSchoolData(payload),
        //     ]);

        //     result.discipline = {
        //         subgroupData,
        //         schoolData,
        //     };
        // }

        // if (
        //     dataSets.includes('ACHIEVEMENT_OVERALL') ||
        //     dataSets.includes('ACHIEVEMENT_SUBGROUPS')
        // ) {
        //     const [subgroupData, schoolData] = await Promise.all([
        //         AchievementService.getFilteredSubgroupData(payload),
        //         AchievementService.getFilteredSchoolData(payload),
        //     ]);

        //     result.achievement = {
        //         subgroupData,
        //         schoolData,
        //     };
        // }

        return result;
    },
};
