import { FilterOperatorObject, FilterPayload } from '@/types/queryFilters';
import { PopulationRouteService } from '../services/populationRouteService';
import { FilterSelection } from '../ui/TopBar';

new Map([
    ['dataTypes', {}],
    ['years', {}],
    ['schools', {}],
    ['subgroups', {}],
    ['grades', {}],
]);

export const mapFilterMapToFilterPayload = (
    filterMap: FilterSelection
): { filters: Partial<FilterPayload['filters']> } => {
    const filters: Partial<FilterPayload['filters']> = {};
    for (const [key, setValues] of filterMap.entries()) {
        switch (key) {
            case 'years':
                const yearOp = createOperatorObject(setValues);
                if (yearOp) filters.schoolId = yearOp;
                break;
            case 'subgroups':
                const subgroupOp = createOperatorObject(setValues);
                if (subgroupOp) filters.subgroupId = subgroupOp;
                break;
            case 'schools':
                const schoolOp = createOperatorObject(setValues);
                if (schoolOp) filters.schoolId = schoolOp;
                break;
            case 'grades':
                const gradeOp = createOperatorObject(setValues);
                if (gradeOp) filters.gradeId = gradeOp;
                break;
            // case 'levels':
            //     const levelOp = createOperatorObject(setValues);
            //     if (levelOp) filters.levelId = levelOp;
            //     break;
        }
    }
    return { filters };
};

export const getDataSetApiFns = <T>(
    dataTypes: Set<number>
): Map<string, (payload: Partial<FilterPayload>) => Promise<T>> => {
    const apiFnMap = new Map();
    for (const typeId of dataTypes) {
        switch (typeId) {
            case 1: // population
                apiFnMap.set('subgroupPopulation', PopulationRouteService.getSubgroupPopulation);
                break;
        }
    }
    return apiFnMap;
};

const createOperatorObject = (setValues: Set<number>): FilterOperatorObject | null => {
    if (setValues.size === 0) {
        return null;
    } else if (setValues.size === 1) {
        const value = setValues.values().next().value;
        if (!value) return null;
        return {
            operator: 'equals',
            value,
        };
    } else {
        return {
            operator: 'in',
            value: [...setValues],
        };
    }
};
