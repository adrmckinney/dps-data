import { getDataSetIdByKey } from '@/constants/DataSetList';
import type { QueryModifiers } from '@/types/queryModifiers';
import type { QueryModifierResponse } from '@/types/queryResponseTypes';
import { PopulationService } from './populationService/populationService';

export const VisualizationService = {
    async getVisualizeData(payload: QueryModifiers) {
        const result: QueryModifierResponse[] = [];

        for (const filterGroup of payload.filterGroups) {
            if (filterGroup.dataSetId === getDataSetIdByKey('POPULATION_GRADE')) {
                const res = await PopulationService.getFilteredGradePopulation(filterGroup);

                result.push({
                    dataSetId: filterGroup.dataSetId,
                    type: 'population_grade',
                    data: res,
                });
            }

            if (filterGroup.dataSetId === getDataSetIdByKey('POPULATION_SUBGROUP')) {
                const res = await PopulationService.getFilteredSubgroupPopulation(filterGroup);

                result.push({
                    dataSetId: filterGroup.dataSetId,
                    type: 'population_subgroup',
                    data: res,
                });
            }
        }

        return result;
    },
};
