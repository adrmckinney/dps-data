'use client';

import { FormChangeType } from '@/types/formChangeTypes';
import { FilterOptions } from '@/types/queryModifiers';
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';

import { useState } from 'react';
import { Icon } from '../assets/icons';
import { useReferenceContext } from '../context/referenceContext';
import { applySubgroup, DataTypeEnums, getKeysFromDataSetIds } from '../enums/DataTypeEnums';
import { PopulationRouteService } from '../services/populationRouteService';
import CancelButton from '../sharedComponents/buttons/CancelButton';
import PrimaryButton from '../sharedComponents/buttons/PrimaryButton';
import { getDataSetApiFns } from '../utils/apiFilterUtils';
import { UserNavigation } from './Main';
import TopBarMobile from './TopBarMobile';

type Props = {
    userNavigation: UserNavigation[];
    setSidebarOpen: (state: boolean) => void;
};

export type Filter = {
    id: string;
    key: string;
    name: string;
    options: FilterSelectOptions[];
};

type FilterSelectOptions = {
    value: number;
    label: string;
    checked: boolean;
    onCheck: (e: FormChangeType) => void;
    show: boolean;
};

type SortOption = {
    name: string;
    href: string;
    current: boolean;
};

type ActiveFilter = {
    id: number;
    title: string;
    label: string;
};

const sortOptions: SortOption[] = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
];

export type FilterSelectionMap = Map<FilterOptions | 'dataTypes', Set<number>>;

const initialFilterSelectionMap: FilterSelectionMap = new Map([
    ['dataTypes', new Set()],
    ['yearIds', new Set()],
    ['schoolIds', new Set()],
    ['subgroupIds', new Set()],
    ['gradeIds', new Set()],
]);

type FilterKeys = 'dataTypes' | 'yearIds' | 'schoolIds' | 'subgroupIds' | 'gradeIds';
const initialNotify: Record<FilterKeys, boolean> = {
    dataTypes: false,
    yearIds: false,
    schoolIds: false,
    subgroupIds: false,
    gradeIds: false,
};

const TopBar = ({}: Props) => {
    const [open, setOpen] = useState(false);
    const { state } = useReferenceContext();
    const [filterSelectionsMap, setFilterSelectionsMap] =
        useState<FilterSelectionMap>(initialFilterSelectionMap);
    const activeFilters: ActiveFilter[] = [];
    const handleClose = () => {
        setOpen(false);
    };
    const [notify, setNotify] = useState(initialNotify);
    const selectedSchoolIds = filterSelectionsMap.get('schoolIds');
    const selectedDataSetIds = filterSelectionsMap.get('dataTypes');
    const selectedSubgroupIds = filterSelectionsMap.get('subgroupIds') || new Set();
    const selectedGradeIds = filterSelectionsMap.get('gradeIds') || new Set();

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
        const selectedCategoryKeys = getKeysFromDataSetIds(selectedDataSetIds);
        const selectedSubgroups = state.subgroups.filter(g => selectedSubgroupIds.has(g.id));

        selectedSubgroups?.forEach(group => {
            const subgroupIsAvailable = group.availableForDataTypes.some(key =>
                selectedCategoryKeys.includes(key)
            );

            if (!subgroupIsAvailable) {
                handleNotify('subgroupIds', true);
                newMap.get('subgroupIds')?.delete(group.id);
                handleNotify('subgroupIds', false, 300);
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

                // Remove pre-selected subgroups that were in range for the dataType that was deselected
                // Must be > 1 (not 0) because it is checking if the last one is being removed
                if (key === 'dataTypes' && selectedSubgroupIds.size > 1) {
                    const allSelectedDataSetIds = new Set(selectedDataSetIds);
                    allSelectedDataSetIds.delete(value);
                    filterInRangeSubgroupsByDataSets(newMap, allSelectedDataSetIds);
                }

                // Remove pre-selected grades that were in range for the school that was deselected
                if (key === 'schoolIds' && selectedGradeIds?.size > 1) {
                    const targetLevelId = state.schools.filter(s => s.id === value)[0]['levelId'];

                    const selectedGrades = state.grades.filter(g => selectedGradeIds.has(g.id));
                    selectedGrades.forEach(g => {
                        if (g.levelId === targetLevelId) {
                            handleNotify('gradeIds', true);
                            newMap.get('gradeIds')?.delete(g.id);
                            handleNotify('gradeIds', false, 300);
                        }
                    });
                }
            } else {
                currentSet.add(value);

                // Remove any pre-selected subgroups that are no longer in range for the selected dataType
                if (key === 'dataTypes' && selectedSubgroupIds?.size > 0) {
                    const allSelectedDataSetIds = new Set(selectedDataSetIds);
                    allSelectedDataSetIds.add(value);
                    filterInRangeSubgroupsByDataSets(newMap, allSelectedDataSetIds);
                }

                // Remove any pre-selected grades that are no longer in range for the selected school
                if (key === 'schoolIds' && selectedGradeIds?.size > 0) {
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
                            handleNotify('gradeIds', true);
                            newMap.get('gradeIds')?.delete(g.id);
                            handleNotify('gradeIds', false, 300);
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

    console.log('filterSelectionsMap', filterSelectionsMap);

    const handleFilterSubmit = async () => {
        // const queryModifiersPayload: QueryModifiers =
        //     mapFilterMapToQueryModifiers(filterSelectionsMap);

        // const payload: QueryModifiers = {
        //     dataTypes: getKeysFromDataSetIds(filterSelectionsMap.get('dataTypes')),
        //     filters: filterSelectionsMap,
        //     sort: {
        //         field: 'schoolId',
        //         direction: 'asc',
        //     },
        // };

        // console.log('payload in TopBar', payload);
        // const data = await getVisualizationData(filterSelectionsMap);
        // if (isLoading) return 'Loading...';
        // if (error) return `Error: ${error.message}`;

        // console.log('data', data);

        const dataTypes = filterSelectionsMap.get('dataTypes');
        if (!dataTypes) return;

        const dataTypeFns = getDataSetApiFns(dataTypes);
        const popFn = dataTypeFns.get('subgroupPopulation');
        if (!popFn) return;

        const res = await tryCatch({
            tryFn: async () => {
                // return await popFn(payloadFilters);
                return await PopulationRouteService.getSubgroupPopulation(
                    filters
                    //     {
                    //     filters: {
                    //         subgroupId: {
                    //             operator: 'in',
                    //             value: [12],
                    //         },
                    //         'school.levelId': {
                    //             operator: 'equals',
                    //             value: 3,
                    //         },
                    //     },
                    // }
                );
            },
            catchFn: (error: unknown) => {
                console.error('Error:', error);
                throw error;
            },
        });

        console.log('res', res);
    };

    const selectedLevelIds = state.schools
        .filter(s => selectedSchoolIds?.has(s.id))
        .map(s => s.levelId);
    const filters: Filter[] = [
        {
            id: 'dataTypes', // determines the api
            key: 'dataTypes',
            name: 'Data Sets',
            options: Object.values(DataTypeEnums)
                .filter(dt => dt.label !== 'Other')
                .map(dt => {
                    return {
                        value: dt.id,
                        label: dt.label,
                        checked: filterSelectionsMap.get('dataTypes')?.has(dt.id) || false,
                        onCheck: handleChecked,
                        show: true,
                    };
                }),
        },
        {
            id: 'year',
            key: 'years',
            name: 'Year',
            options: state.years.map(y => {
                return {
                    value: y.id,
                    label: y.schoolYear.replace('-', ' - '),
                    checked: filterSelectionsMap.get('yearIds')?.has(y.id) || false,
                    onCheck: handleChecked,
                    show: true,
                };
            }),
        },
        {
            id: 'school',
            key: 'schools',
            name: 'School',
            options: state.schools.map(s => {
                return {
                    value: s.id,
                    label: s.name,
                    checked: filterSelectionsMap.get('schoolIds')?.has(s.id) || false,
                    onCheck: handleChecked,
                    show: true,
                };
            }),
        },
        {
            id: 'subgroups',
            key: 'subgroups',
            name: 'Subgroups',
            options: state.subgroups.map(group => {
                return {
                    value: group.id,
                    label: group.name,
                    checked: filterSelectionsMap.get('subgroupIds')?.has(group.id) || false,
                    onCheck: handleChecked,
                    show: applySubgroup(group, selectedDataSetIds),
                };
            }),
        },
        {
            id: 'grades',
            key: 'grades',
            name: 'Grades',
            options: state.grades.map(grade => {
                return {
                    value: grade.id,
                    label: grade.name,
                    checked: filterSelectionsMap.get('gradeIds')?.has(grade.id) || false,
                    onCheck: handleChecked,
                    show:
                        selectedSchoolIds?.size === 0
                            ? true
                            : selectedLevelIds.includes(grade.levelId),
                };
            }),
        },
    ];

    for (const [key, setValues] of filterSelectionsMap.entries()) {
        for (const value of setValues) {
            let label = '';
            switch (key) {
                case 'dataTypes':
                    label = Object.values(DataTypeEnums).find(dt => dt.id === value)?.label || '';
                    break;
                case 'schoolIds':
                    label = state.schools.find(s => s.id === value)?.abbreviation || '';
                    break;
                case 'gradeIds':
                    label = state.grades.find(g => g.id === value)?.name || '';
                    break;
                case 'subgroupIds':
                    label = state.subgroups.find(sg => sg.id === value)?.name || '';
                    break;
                case 'yearIds':
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
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <Icon.chevronDown
                                        aria-hidden="true"
                                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <div className="py-1">
                                    {sortOptions.map(option => (
                                        <MenuItem key={option.name}>
                                            <a
                                                href={option.href}
                                                className={[
                                                    option.current
                                                        ? 'font-medium text-gray-900'
                                                        : 'text-gray-500',
                                                    'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                                                ].join(' ')}
                                            >
                                                {option.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>

                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                        >
                            Filters
                        </button>

                        <div className="hidden sm:block">
                            <div className="flow-root">
                                <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
                                    {filters.map(section => (
                                        <Popover
                                            key={section.name}
                                            className="relative inline-block px-4 text-left"
                                        >
                                            <PopoverButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                                <span>{section.name}</span>
                                                <span
                                                    className={[
                                                        'ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 tabular-nums',
                                                        notify[section.key as FilterKeys]
                                                            ? 'animate-ping'
                                                            : '',
                                                    ].join(' ')}
                                                >
                                                    {
                                                        filterSelectionsMap.get(
                                                            section.key as FilterKeys
                                                        )?.size
                                                    }
                                                </span>
                                                <Icon.chevronDown
                                                    aria-hidden="true"
                                                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                                />
                                            </PopoverButton>

                                            <PopoverPanel
                                                transition
                                                className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                            >
                                                <form className="space-y-4">
                                                    {section.options
                                                        .filter(o => o.show)
                                                        .map((option, optionIdx) => (
                                                            <div
                                                                key={option.value}
                                                                className="flex gap-3"
                                                            >
                                                                <div className="flex h-5 shrink-0 items-center">
                                                                    <div className="group grid size-4 grid-cols-1">
                                                                        <input
                                                                            defaultValue={
                                                                                option.value
                                                                            }
                                                                            defaultChecked={
                                                                                option.checked
                                                                            }
                                                                            id={`filter-${section.id}-${optionIdx}`}
                                                                            name={section.key}
                                                                            type="checkbox"
                                                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                            onChange={
                                                                                option.onCheck
                                                                            }
                                                                        />
                                                                        <svg
                                                                            fill="none"
                                                                            viewBox="0 0 14 14"
                                                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                        >
                                                                            <path
                                                                                d="M3 8L6 11L11 3.5"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="opacity-0 group-has-checked:opacity-100"
                                                                            />
                                                                            <path
                                                                                d="M3 7H11"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="opacity-0 group-has-indeterminate:opacity-100"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="pr-6 text-sm font-medium whitespace-nowrap text-gray-900"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                </form>
                                            </PopoverPanel>
                                        </Popover>
                                    ))}
                                </PopoverGroup>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active filters */}
                <div className="bg-gray-100">
                    <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
                        <h3 className="text-sm font-medium text-gray-500">
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
                                    <span
                                        key={`${activeFilter.id}-${activeFilter.title}-${activeFilter.label}`}
                                        className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pr-2 pl-3 text-sm font-medium text-gray-900"
                                    >
                                        <span className="flex flex-col px-0.5">
                                            <span className="text-xs">{activeFilter.title}</span>
                                            <span>{activeFilter.label}</span>
                                        </span>
                                        <button
                                            type="button"
                                            className="ml-1 inline-flex size-4 shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                                            onClick={() =>
                                                handleUpdateFilterSelectMap(
                                                    activeFilter.title,
                                                    activeFilter.id
                                                )
                                            }
                                        >
                                            <span className="sr-only">
                                                Remove filter for {activeFilter.label}
                                            </span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 8 8"
                                                className="size-2"
                                            >
                                                <path
                                                    d="M1 1l6 6m0-6L1 7"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </span>
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
