'use client';

import { FormChangeType } from '@/types/formChangeTypes';
import { QueryModifiers } from '@/types/queryModifiers';
import { QueryModifierResponse } from '@/types/queryResponseTypes';
import { tryCatch } from '@/utils/tryCatch';
import { Level } from '@prisma/client';
import { useState } from 'react';
import { isSubGroupCollision, isVisible } from '../../utils/filterScopeAndVisibilityUtils';
import SortMenu from '../components/topBar/SortMenu';
import { useReferenceContext } from '../context/referenceContext';
import { useVisualContext } from '../context/visualContextProvider';
import useFilterMap from '../hooks/useFilterMap';
import useHydrateApiData from '../hooks/useHydrateApiData';
import { VisualizationRouteService } from '../services/visualizationRouteService';
import CancelButton from '../sharedComponents/buttons/CancelButton';
import PrimaryButton from '../sharedComponents/buttons/PrimaryButton';
import ActiveFilterPill from '../sharedComponents/pills/ActiveFilterPill';
import OptionsPopover from '../sharedComponents/popovers/OptionsPopover';
import { UserNavigation } from './Main';
import TopBarMobile from './TopBarMobile';

type Props = {
    userNavigation: UserNavigation[];
    setSidebarOpen: (state: boolean) => void;
};

export type GroupedFilter = {
    id: string;
    key: string;
    name: string;
    groupOptions: GroupOption[];
};

export type Filter = {
    id: string;
    key: string;
    name: string;
    options: FilterOption[] | null;
    groupOptions: GroupOption[] | null;
    type: 'singleFilterType' | 'groupedFilterType';
};

export type GroupOption = {
    groupType: string; // This will be 'schoolLevel', 'gradeLevel', 'subGroupType'
    groupId: number; // This will be like a levelId for schools and grades or a subGroupTypeId
    groupLabel: string; // This will be like 'Race' or 'High School'
    options: FilterOption[];
};

export type FilterOption = {
    value: number;
    label: string;
    checked: boolean;
    onCheck: (e: FormChangeType) => void;
    show: boolean;
    disabled: boolean;
};

export type SortOption = {
    name: string;
    href: string;
    current: boolean;
};

export type ActiveFilter = {
    id: number;
    title: string;
    label: string;
};

const sortOptions: SortOption[] = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
];

export type FilterKeys = 'dataSets' | 'years' | 'schools' | 'subGroups' | 'grades';
export type FilterSelection = Map<FilterKeys, Set<number>>;

const initialFilterSelectionMap: FilterSelection = new Map([
    ['dataSets', new Set()],
    ['years', new Set()],
    ['schools', new Set()],
    ['subGroups', new Set()],
    ['grades', new Set()],
]);

const initialNotify: Record<FilterKeys, boolean> = {
    dataSets: false,
    years: false,
    schools: false,
    subGroups: false,
    grades: false,
};

const TopBar = ({}: Props) => {
    const [open, setOpen] = useState(false);
    const { state } = useReferenceContext();
    const { dispatch: visualDispatch } = useVisualContext();
    const { hydrateGradePopulationData, hydrateSubGroupPopulationData } = useHydrateApiData();
    const [filterSelectionsMap, setFilterSelectionsMap] =
        useState<FilterSelection>(initialFilterSelectionMap);
    const activeFilters: ActiveFilter[] = [];
    const handleClose = () => {
        setOpen(false);
    };
    const [notify, setNotify] = useState(initialNotify);
    const { mapFilterMapToQueryModifiers } = useFilterMap();
    const selectedSchoolIds = filterSelectionsMap.get('schools');
    const selectedDataSetIds = filterSelectionsMap.get('dataSets');
    const selectedSubgroupIds = filterSelectionsMap.get('subGroups') || new Set();
    const selectedGradeIds = filterSelectionsMap.get('grades') || new Set();
    const selectedYearIds = filterSelectionsMap.get('years');

    const handleNotify = (filterType: FilterKeys, value: boolean, timeOutValue: number = 0) => {
        if (timeOutValue > 0) {
            setTimeout(() => {
                setNotify(prev => ({
                    ...prev,
                    [filterType]: value,
                }));
            }, timeOutValue);
        } else {
            setNotify(prev => ({
                ...prev,
                [filterType]: value,
            }));
        }
    };

    const filterInRangeSubgroupsByDataSets = (
        newMap: Map<FilterKeys, Set<number>>,
        selectedDataSetIds: Set<number>
    ): void => {
        const selectedSubgroups = state.subGroups.filter(g => selectedSubgroupIds.has(g.id));
        selectedSubgroups?.forEach(group => {
            const subGroupInScope = isVisible(
                state.subGroupToDataSet,
                selectedDataSetIds,
                'subGroupId',
                group.id
            );

            if (!subGroupInScope) {
                handleNotify('subGroups', true);
                newMap.get('subGroups')?.delete(group.id);
                handleNotify('subGroups', false, 300);
            }
        });
    };

    const handleUpdateFilterSelectMap = (name: string, value: number) => {
        const key = name as FilterKeys;

        setFilterSelectionsMap(prevMap => {
            const newMap = new Map(prevMap);
            const currentSet = new Set(newMap.get(key));

            if (currentSet.has(value)) {
                currentSet.delete(value);

                // Remove pre-selected subGroups that were in range for the dataSet that was deselected
                if (key === 'dataSets' && selectedSubgroupIds.size > 0) {
                    const allSelectedDataSetIds = new Set(selectedDataSetIds);
                    allSelectedDataSetIds.delete(value);
                    filterInRangeSubgroupsByDataSets(newMap, allSelectedDataSetIds);
                }

                // Remove pre-selected grades that were in range for the school that was deselected
                if (key === 'schools' && selectedGradeIds?.size > 1) {
                    const targetLevelId = state.schools.filter(s => s.id === value)[0]['levelId'];

                    const selectedGrades = state.grades.filter(g => selectedGradeIds.has(g.id));
                    selectedGrades.forEach(g => {
                        if (g.levelId === targetLevelId) {
                            handleNotify('grades', true);
                            newMap.get('grades')?.delete(g.id);
                            handleNotify('grades', false, 300);
                        }
                    });
                }
            } else {
                currentSet.add(value);

                // Remove any pre-selected subGroups that are no longer in range for the selected dataType
                if (key === 'dataSets' && selectedSubgroupIds?.size > 0) {
                    const allSelectedDataSetIds = new Set(selectedDataSetIds);
                    allSelectedDataSetIds.add(value);
                    filterInRangeSubgroupsByDataSets(newMap, allSelectedDataSetIds);
                }

                // Remove any pre-selected grades that are no longer in range for the selected school
                if (key === 'schools' && selectedGradeIds?.size > 0) {
                    const allSelectedSchoolIds = new Set(selectedSchoolIds);
                    allSelectedSchoolIds.add(value);
                    const selectedSchoolLevelIds = new Set(
                        state.schools
                            .filter(s => allSelectedSchoolIds?.has(s.id))
                            .map(s => s.levelId)
                    );

                    const selectedGrades = state.grades.filter(g => selectedGradeIds.has(g.id));
                    selectedGrades.forEach(g => {
                        if (!selectedSchoolLevelIds.has(g.levelId)) {
                            handleNotify('grades', true);
                            newMap.get('grades')?.delete(g.id);
                            handleNotify('grades', false, 300);
                        }
                    });
                }
            }

            newMap.set(key, currentSet);

            return newMap;
        });
    };

    const handleChecked = (e: FormChangeType) => {
        const { name, value } = e.target;
        handleUpdateFilterSelectMap(name, +value);
    };

    // console.log('filterSelectionsMap', filterSelectionsMap);

    const handleFilterSubmit = async () => {
        const dataSets = filterSelectionsMap.get('dataSets');
        if (!dataSets) return;

        const payloadFilters: QueryModifiers = mapFilterMapToQueryModifiers(filterSelectionsMap);
        if (!payloadFilters) return;
        // console.log('payloadFilters', payloadFilters);

        const res: QueryModifierResponse[] = await tryCatch({
            tryFn: async () => {
                return await VisualizationRouteService.getVisualizationData(payloadFilters);
            },
            catchFn: (error: unknown) => {
                console.error('Error:', error);
                throw error;
            },
        });

        res.forEach(resGroup => {
            if (resGroup.type === 'population_grade') {
                const hydratedGradeData = hydrateGradePopulationData(resGroup);

                console.log('hydratedGradeData in pop grad', hydratedGradeData);
                if (hydratedGradeData && hydratedGradeData.type === 'population_grade') {
                    visualDispatch({ type: 'POPULATION_GRADE', payload: hydratedGradeData.data });
                }
            }

            if (resGroup.type === 'population_subgroup') {
                const hydratedSubGroupData = hydrateSubGroupPopulationData(resGroup);

                console.log('hydratedSubGroupData in sub pop', hydratedSubGroupData);
                if (hydratedSubGroupData && hydratedSubGroupData.type === 'population_subgroup') {
                    visualDispatch({
                        type: 'POPULATION_SUB_GROUP',
                        payload: hydratedSubGroupData.data,
                    });
                }
            }
            // console.log('res outside', res);
        });
    };

    console.log('state', state);

    const selectedLevelIds = state.schools
        .filter(s => selectedSchoolIds?.has(s.id))
        .map(s => s.levelId);
    const selectedYears = state.years
        .filter(y => selectedYearIds?.has(y.id))
        .sort((a, b) => +a.startYear - +b.startYear);

    const filters: Filter[] = [
        {
            id: 'dataSets',
            key: 'dataSets',
            name: 'Data Sets',
            options: state.dataSets
                .filter(ds => ds.label !== 'Other')
                .map(ds => {
                    return {
                        value: ds.id,
                        label: ds.label,
                        checked: filterSelectionsMap.get('dataSets')?.has(ds.id) || false,
                        onCheck: handleChecked,
                        show: true,
                        disabled: false,
                    };
                }),
            groupOptions: null,
            type: 'singleFilterType',
        },
        {
            id: 'year',
            key: 'years',
            name: 'Year',
            options: state.years.map(y => {
                return {
                    value: y.id,
                    label: y.schoolYear.replace('-', ' - '),
                    checked: filterSelectionsMap.get('years')?.has(y.id) || false,
                    onCheck: handleChecked,
                    show: true,
                    disabled: false,
                };
            }),
            groupOptions: null,
            type: 'singleFilterType',
        },
        {
            id: 'school',
            key: 'schools',
            name: 'School',
            options: null,
            groupOptions: (() => {
                const schoolLevels: Record<Level['id'], Level['name']> = {};
                state.levels.forEach(l => {
                    if (l.name.toLowerCase() !== 'unknown') {
                        schoolLevels[l.id] = l.name;
                    }
                });

                // Create initial group structure
                const levelGroups = Object.entries(schoolLevels).map(([levelId, label]) => ({
                    groupType: 'schoolLevel',
                    groupId: Number(levelId),
                    groupLabel: label,
                    options: [] as FilterOption[],
                }));

                const groupMap = new Map<number, (typeof levelGroups)[number]>();
                levelGroups.forEach(group => {
                    groupMap.set(group.groupId, group);
                });

                // Fill options into the correct group
                state.schools.forEach(s => {
                    const group = groupMap.get(s.levelId);
                    if (!group) return;

                    group.options.push({
                        value: s.id,
                        label: s.name,
                        checked: filterSelectionsMap.get('schools')?.has(s.id) || false,
                        onCheck: handleChecked,
                        show: true,
                        disabled: s.founded > +selectedYears[0]?.startYear,
                    });
                });

                return Array.from(groupMap.values());
            })(),
            type: 'groupedFilterType',
        },
        {
            id: 'subGroups',
            key: 'subGroups',
            name: 'Subgroups',
            options: state.subGroups.map(group => {
                const isCollision = isSubGroupCollision(
                    state.subGroupCollisions,
                    selectedSubgroupIds,
                    group.id
                );
                const visible = isVisible(
                    state.subGroupToDataSet,
                    selectedDataSetIds,
                    'subGroupId',
                    group.id
                );

                return {
                    value: group.id,
                    label: group.name,
                    checked: filterSelectionsMap.get('subGroups')?.has(group.id) || false,
                    onCheck: handleChecked,
                    show: true,
                    disabled: isCollision || !visible,
                };
            }),
            groupOptions: null,
            type: 'singleFilterType',
        },
        {
            id: 'grades',
            key: 'grades',
            name: 'Grades',
            options: state.grades.map(grade => {
                // Wrap in a useMemo
                const gradeIsVisibleByDataSet = isVisible(
                    state.gradeToDataSet,
                    selectedDataSetIds,
                    'gradeId',
                    grade.id
                );
                const gradeIsDisabledBySelectedSchool =
                    (selectedSchoolIds &&
                        selectedSchoolIds?.size > 0 &&
                        !selectedLevelIds.includes(grade.levelId)) ||
                    false;

                return {
                    value: grade.id,
                    label: grade.name,
                    checked: filterSelectionsMap.get('grades')?.has(grade.id) || false,
                    onCheck: handleChecked,
                    show: true,
                    disabled: !gradeIsVisibleByDataSet || gradeIsDisabledBySelectedSchool,
                };
            }),
            groupOptions: null,
            type: 'singleFilterType',
        },
    ];
    console.log('filters', filters);
    for (const [key, setValues] of filterSelectionsMap.entries()) {
        for (const value of setValues) {
            let label = '';
            switch (key) {
                case 'dataSets':
                    label = state.dataSets.find(dt => dt.id === value)?.label || '';
                    break;
                case 'schools':
                    label = state.schools.find(s => s.id === value)?.abbreviation || '';
                    break;
                case 'grades':
                    label = state.grades.find(g => g.id === value)?.name || '';
                    break;
                case 'subGroups':
                    label = state.subGroups.find(sg => sg.id === value)?.name || '';
                    break;
                case 'years':
                    label =
                        state.years.find(y => y.id === value)?.schoolYear.replace('-', ' - ') || '';
                    break;
            }
            activeFilters.push({ id: value, title: key, label });
        }
    }

    return (
        <div className="bg-white">
            {/* Mobile filter dialog */}
            <TopBarMobile filters={filters} open={open} handleClose={handleClose} />

            <div className="flex justify-between mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Durham Public Schools Data Graphics
                    </h1>
                    <p className="mt-4 max-w-xl text-sm text-gray-700">
                        All data sets are provided to the public by Durham Public Schools.
                    </p>
                </div>

                <div className="space-x-4">
                    <PrimaryButton size="xl" onClick={handleFilterSubmit}>
                        Filter
                    </PrimaryButton>
                    <CancelButton
                        size="xl"
                        onClick={() => setFilterSelectionsMap(initialFilterSelectionMap)}
                    >
                        Reset
                    </CancelButton>
                </div>
            </div>

            {/* Filters */}
            <section aria-labelledby="filter-heading">
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>

                <div className="border-b border-gray-200 bg-white pb-4">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <SortMenu sortOptions={sortOptions} />

                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                        >
                            Filters
                        </button>

                        <div className="hidden sm:block">
                            <div className="flow-root">
                                <OptionsPopover
                                    filters={filters}
                                    filterSelectionsMap={filterSelectionsMap}
                                    notify={notify}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active filters */}
                <div className="bg-gray-100">
                    <div className="mx-auto max-w-7xl min-h-16 px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
                        <h3 className="text-sm font-medium text-gray-600">
                            Filters
                            <span className="sr-only">, active</span>
                        </h3>

                        <div
                            aria-hidden="true"
                            className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
                        />

                        <div className="mt-2 sm:mt-0 sm:ml-4">
                            <div className="-m-1 flex flex-wrap items-center">
                                {activeFilters.map(activeFilter => (
                                    <ActiveFilterPill
                                        key={`${activeFilter.id}-${activeFilter.label}`}
                                        activeFilter={activeFilter}
                                        handleUpdateFilterSelectMap={handleUpdateFilterSelectMap}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopBar;
