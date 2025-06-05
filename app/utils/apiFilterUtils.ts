import { FilterCondition, QueryModifiers } from '@/types/queryModifiers';
import { getKeysFromDataSetIds } from '../enums/DataTypeEnums';
import { PopulationRouteService } from '../services/populationRouteService';
import { FilterSelection } from '../ui/TopBar';

new Map([
    ['dataTypes', {}],
    ['years', {}],
    ['schools', {}],
    ['subgroups', {}],
    ['grades', {}],
]);

export const mapFilterMapToQueryModifiers = (
    filterMap: FilterSelection
): { filters: QueryModifiers } => {
    const ret: QueryModifiers = {
        dataTypes: getKeysFromDataSetIds(filterMap.get('dataTypes')),
        globalFilters: {},
    };

    const scoped: FilterCondition = {};

    // consider doing map for the scoped filters

    // const filters: Partial<QueryModifiers['filters']> = {};
    for (const [key, setValues] of filterMap.entries()) {
        switch (key) {
            case 'schools':
                const schoolOp = createOperatorObject(setValues);
                if (schoolOp) ret.globalFilters['schoolId'] = schoolOp;
                break;
            case 'years':
                const yearOp = createOperatorObject(setValues);
                if (yearOp) ret.globalFilters['yearId'] = yearOp;
                break;
            case 'subgroups':
                const subgroupOp = createOperatorObject(setValues);
                if (subgroupOp) scoped[''] = subgroupOp;
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

    ret.globalFilters;

    return ret;
};

export const getDataSetApiFns = <T>(
    dataTypes: Set<number>
): Map<string, (payload: Partial<QueryModifiers>) => Promise<T>> => {
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

const createOperatorObject = (setValues: Set<number>): FilterCondition | null => {
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
