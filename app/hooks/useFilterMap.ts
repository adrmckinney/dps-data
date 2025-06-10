import { DataSetFilterGroup, FilterCondition, QueryModifiers } from '@/types/queryModifiers';
import { isFilterInScope } from '@/utils/filterScopeAndVisibilityUtils';
import { DataSet } from '@prisma/client';
import { useReferenceContext } from '../context/referenceContext';
import { FilterSelection } from '../ui/TopBar';

new Map([
    ['dataSets', {}],
    ['years', {}],
    ['schools', {}],
    ['subGroups', {}],
    ['grades', {}],
]);

const useFilterMap = () => {
    const { state } = useReferenceContext();

    const mapFilterMapToQueryModifiers = (filterMap: FilterSelection): QueryModifiers => {
        const dataSetIds: DataSet['id'][] = [];
        const set = filterMap.get('dataSets');
        if (set) {
            dataSetIds.push(...set);
        }
        const filterGroups: DataSetFilterGroup[] = [];

        for (const dataSetId of dataSetIds) {
            const filters: DataSetFilterGroup['filters'] = [];
            for (const [key, setValues] of filterMap.entries()) {
                switch (key) {
                    case 'years':
                        const yearCondition = createOperatorObject(setValues);
                        if (yearCondition)
                            filters.push({
                                key: 'yearId',
                                scopeType: 'global',
                                condition: yearCondition,
                            });
                        break;
                    case 'schools':
                        const schoolCondition = createOperatorObject(setValues);
                        if (schoolCondition)
                            filters.push({
                                key: 'schoolId',
                                scopeType: 'global',
                                condition: schoolCondition,
                            });
                        break;
                    case 'subGroups':
                        const isSubGroupInScope = isFilterInScope(
                            state.subGroupToDataSet,
                            dataSetId,
                            setValues,
                            'subGroupId'
                        );
                        if (!isSubGroupInScope) break;

                        const subGroupCondition = createOperatorObject(setValues);
                        if (subGroupCondition)
                            filters.push({
                                key: 'subGroupId',
                                scopeType: 'scoped',
                                condition: subGroupCondition,
                            });
                        break;
                    case 'grades':
                        const isGradeInScope = isFilterInScope(
                            state.gradeToDataSet,
                            dataSetId,
                            setValues,
                            'gradeId'
                        );
                        if (!isGradeInScope) break;

                        const gradeCondition = createOperatorObject(setValues);
                        if (gradeCondition)
                            filters.push({
                                key: 'gradeId',
                                scopeType: 'scoped',
                                condition: gradeCondition,
                            });
                        break;
                    // case 'levels':
                    //     const levelCondition = createOperatorObject(setValues);
                    //     if (levelCondition)
                    //         filters.push({
                    //             key: 'levelId',
                    //             scopeType: 'scoped',
                    //             condition: levelCondition,
                    //         });
                    //     break;
                }
            }
            filterGroups.push({ dataSetId, filters });
        }

        return {
            dataSetIds,
            filterGroups,
        };
    };
    return { mapFilterMapToQueryModifiers };
};

export default useFilterMap;

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
