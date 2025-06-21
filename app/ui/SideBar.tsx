'use client';

import { FormChangeType } from '@/types/formChangeTypes';
import { Cog6ToothIcon } from '@heroicons/react/20/solid';
import { AxisProps } from '@nivo/axes';
import Image from 'next/image';
import { useMemo } from 'react';
import {
    AxisPosition,
    DimensionKeys,
    GraphAction,
    GraphTypes,
    LegendPositions,
    TargetConfigKeys,
    useGraphContext,
} from '../context/graphContextProvider';
import { useVisualContext } from '../context/visualContextProvider';
import CheckBox from '../sharedComponents/inputs/CheckBox';
import SelectMenu, { SelectMenuOption } from '../sharedComponents/inputs/SelectMenu';
import TextInput from '../sharedComponents/inputs/TextInput';
import { Navigation, Teams } from './Main';

type Props = {
    navigation: Navigation[];
    teams: Teams[];
};

type GraphOptions = {
    id: number;
    key: GraphTypes;
    label: string;
    type: GraphAction['type'];
};

type InputTypes = 'number' | 'text' | 'selectMenu';

type TickSize = {
    label: 'Tick Size';
    name: keyof AxisProps;
    key: keyof AxisProps;
    value: number;
    inputType: InputTypes;
};
type TickPadding = {
    label: 'Tick Padding';
    name: keyof AxisProps;
    key: keyof AxisProps;
    value: number;
    inputType: InputTypes;
};
type TickRotation = {
    label: 'Tick Rotation';
    name: keyof AxisProps;
    key: keyof AxisProps;
    value: number;
    inputType: InputTypes;
};
type Legend = {
    label: 'Legend';
    name: keyof AxisProps;
    key: keyof AxisProps;
    value: string;
    inputType: InputTypes;
};
type LegendPosition = {
    label: 'Legend Position';
    name: keyof AxisProps;
    key: keyof AxisProps;
    value: LegendPositions;
    inputType: InputTypes;
};
type LegendOffset = {
    label: 'Legend Offset';
    name: keyof AxisProps;
    key: keyof AxisProps;
    value: number;
    inputType: InputTypes;
};

export type UiAxisConfig =
    | TickSize
    | TickPadding
    | TickRotation
    | Legend
    | LegendPosition
    | LegendOffset;

export type AxisOption = {
    key: string;
    value: AxisPosition;
    dimension: DimensionKeys;
    label: string;
    checked: boolean;
    onCheck: (e: FormChangeType) => void;
    show: boolean;
    disabled: boolean;
    axisConfig: UiAxisConfig[];
};

const graphOptions: GraphOptions[] = [
    {
        id: 1,
        key: 'bar',
        label: 'Bar',
        type: 'SET_GRAPH_TYPE',
    },
    {
        id: 2,
        key: 'line',
        label: 'Line',
        type: 'SET_GRAPH_TYPE',
    },
    {
        id: 3,
        key: 'pie',
        label: 'Pie',
        type: 'SET_GRAPH_TYPE',
    },
];

const defaultLeftAxisConfig: UiAxisConfig[] = [
    {
        key: 'tickSize',
        name: 'tickSize',
        label: 'Tick Size',
        value: 5,
        inputType: 'number',
    },
    {
        key: 'tickPadding',
        name: 'tickPadding',
        label: 'Tick Padding',
        value: 5,
        inputType: 'number',
    },
    {
        key: 'tickRotation',
        name: 'tickRotation',
        label: 'Tick Padding',
        value: 0,
        inputType: 'number',
    },
    {
        key: 'legend',
        name: 'legend',
        label: 'Legend',
        value: '',
        inputType: 'text',
    },
    {
        key: 'legendPosition',
        name: 'legendPosition',
        label: 'Legend Position',
        value: 'middle',
        inputType: 'text',
    },
    {
        key: 'legendOffset',
        name: 'legendOffset',
        label: 'Legend Offset',
        value: -40,
        inputType: 'number',
    },
];
const defaultBottomAxisConfig: UiAxisConfig[] = [
    {
        key: 'tickSize',
        name: 'tickSize',
        label: 'Tick Size',
        value: 5,
        inputType: 'number',
    },
    {
        key: 'tickPadding',
        name: 'tickPadding',
        label: 'Tick Padding',
        value: 5,
        inputType: 'number',
    },
    {
        key: 'tickRotation',
        name: 'tickRotation',
        label: 'Tick Padding',
        value: 0,
        inputType: 'number',
    },
    {
        key: 'legend',
        name: 'legend',
        label: 'Legend',
        value: '',
        inputType: 'text',
    },
    {
        key: 'legendPosition',
        name: 'legendPosition',
        label: 'Legend Position',
        value: 'middle',
        inputType: 'text',
    },
    {
        key: 'legendOffset',
        name: 'legendOffset',
        label: 'Legend Offset',
        value: 32,
        inputType: 'number',
    },
];

const defaultTopAxisConfig: UiAxisConfig[] = [
    {
        key: 'tickSize',
        name: 'tickSize',
        label: 'Tick Size',
        value: 5,
        inputType: 'number',
    },
    {
        key: 'tickPadding',
        name: 'tickPadding',
        label: 'Tick Padding',
        value: 5,
        inputType: 'number',
    },
    {
        key: 'tickRotation',
        name: 'tickRotation',
        label: 'Tick Padding',
        value: 0,
        inputType: 'number',
    },
    {
        key: 'legend',
        name: 'legend',
        label: 'Legend',
        value: '',
        inputType: 'text',
    },
    {
        key: 'legendPosition',
        name: 'legendPosition',
        label: 'Legend Position',
        value: 'middle',
        inputType: 'text',
    },
    {
        key: 'legendOffset',
        name: 'legendOffset',
        label: 'Legend Offset',
        value: -32,
        inputType: 'number',
    },
];
const defaultRightAxisConfig: UiAxisConfig[] = [
    {
        key: 'tickSize',
        name: 'tickSize',
        label: 'Tick Size',
        value: 5,
        inputType: 'number',
    },
    {
        key: 'tickPadding',
        name: 'tickPadding',
        label: 'Tick Padding',
        value: 5,
        inputType: 'number',
    },
    {
        key: 'tickRotation',
        name: 'tickRotation',
        label: 'Tick Padding',
        value: 0,
        inputType: 'number',
    },
    {
        key: 'legend',
        name: 'legend',
        label: 'Legend',
        value: '',
        inputType: 'text',
    },
    {
        key: 'legendPosition',
        name: 'legendPosition',
        label: 'Legend Position',
        value: 'middle',
        inputType: 'text',
    },
    {
        key: 'legendOffset',
        name: 'legendOffset',
        label: 'Legend Offset',
        value: 40,
        inputType: 'number',
    },
];

type UiGraphConfig = {
    label: 'Layout';
    name: string;
    key: string;
    value: string;
    inputType: InputTypes;
    options: SelectMenuOption[];
};

const graphLayouts: (SelectMenuOption & { targetConfig: TargetConfigKeys })[] = [
    {
        id: 1,
        label: 'Vertical',
        key: 'vertical',
        type: 'SET_GRAPH_CONFIG',
        targetConfig: 'layout',
    },
    {
        id: 2,
        label: 'Horizontal',
        key: 'horizontal',
        type: 'SET_GRAPH_CONFIG',
        targetConfig: 'layout',
    },
];

const graphConfig: UiGraphConfig[] = [
    {
        key: 'layout',
        name: 'layout',
        label: 'Layout',
        value: 'layout',
        inputType: 'selectMenu',
        options: graphLayouts,
    },
];

const SideBar = ({ teams }: Props) => {
    const { state: graphState, dispatch } = useGraphContext();
    const { state: visualState } = useVisualContext();
    const selectedGraphType = useMemo(() => {
        return graphOptions.find(o => o.key === graphState.type) || graphOptions[0];
    }, [graphState.type]);
    const selectedLayout = useMemo(() => {
        return graphLayouts.find(gc => gc.key === graphState.graphConfig.layout);
    }, [graphState.graphConfig.layout]);
    const currentLayout = graphState.graphConfig.layout;
    const typeIsBar = graphState.type === 'bar';
    const typeIsLine = graphState.type === 'line';
    const typeIsBarOrLine = typeIsBar || typeIsLine;

    const handleSelect = (
        option: SelectMenuOption,
        position: AxisPosition = 'bottom',
        dimension: DimensionKeys = 'primary',
        isAccessor: boolean = false
    ) => {
        switch (option.type) {
            case 'SET_GRAPH_TYPE':
                dispatch({ type: 'SET_GRAPH_TYPE', payload: option.key as GraphTypes });
                break;
            case 'SET_DIMENSION_FIELDS':
                dispatch({
                    type: 'SET_DIMENSION_FIELDS',
                    payload: {
                        dimension,
                        position,
                        targetField: isAccessor ? 'accessor' : 'entity',
                        value: option.key,
                        targetIndex: 0, // This will need to be dynamic when I implement stacking the keys
                    },
                });
                break;

            case 'SET_GRAPH_CONFIG':
                dispatch({
                    type: 'SET_GRAPH_CONFIG',
                    payload: {
                        targetConfig: option.targetConfig as TargetConfigKeys,
                        value: option.key,
                    },
                });
            default:
                break;
        }
    };

    const handleAxisChecked = (e: FormChangeType) => {
        const { name } = e.target;
        const key = name as AxisPosition;

        dispatch({
            type: 'SET_AXIS_ACTIVE',
            payload: {
                position: key,
            },
        });
    };

    const axisOptions: AxisOption[] = [
        {
            key: 'left',
            value: 'left',
            label: 'Left',
            checked: typeIsBarOrLine ? !!graphState.axes.left?.active : false,
            onCheck: handleAxisChecked,
            show: true,
            disabled: typeIsBarOrLine ? !!graphState.axes.right?.active : false,
            axisConfig: defaultLeftAxisConfig,
            dimension: currentLayout === 'vertical' ? 'secondary' : 'primary',
        },
        {
            key: 'top',
            value: 'top',
            label: 'Top',
            checked: typeIsBarOrLine ? !!graphState.axes.top?.active : false,
            onCheck: handleAxisChecked,
            show: true,
            disabled: typeIsBarOrLine ? !!graphState.axes.bottom?.active : false,
            axisConfig: defaultTopAxisConfig,
            dimension: currentLayout === 'vertical' ? 'primary' : 'secondary',
        },
        {
            key: 'right',
            value: 'right',
            label: 'Right',
            checked: typeIsBarOrLine ? !!graphState.axes.right?.active : false,
            onCheck: handleAxisChecked,
            show: true,
            disabled: typeIsBarOrLine ? !!graphState.axes.left?.active : false,
            axisConfig: defaultRightAxisConfig,
            dimension: currentLayout === 'vertical' ? 'secondary' : 'primary',
        },
        {
            key: 'bottom',
            value: 'bottom',
            label: 'Bottom',
            checked: typeIsBarOrLine ? !!graphState.axes.bottom?.active : false,
            onCheck: handleAxisChecked,
            show: true,
            disabled: typeIsBarOrLine ? !!graphState.axes.top?.active : false,
            axisConfig: defaultBottomAxisConfig,
            dimension: currentLayout === 'vertical' ? 'primary' : 'secondary',
        },
    ];
    console.log('graphState', graphState);

    const handleChange = (e: FormChangeType, position: AxisPosition) => {
        e.preventDefault();
        const { name, value } = e.target;

        if (graphState.type === 'bar') {
            dispatch({
                type: 'SET_AXIS_CONFIG',
                payload: {
                    position,
                    key: name as keyof AxisProps,
                    value,
                },
            });
        }
    };

    const preparedDataOptions: SelectMenuOption[] = [];
    let preparedAccessorOptions: { [key: string]: SelectMenuOption[] } = {};

    if (visualState.population_grade) {
        const plottable = visualState.population_grade?.plottableFields;
        Object.entries(plottable).forEach((entry, idx) => {
            const [parentField, nestedFieldValues] = entry;

            preparedDataOptions.push({
                id: idx + 1,
                key: parentField,
                label: parentField.charAt(0).toUpperCase() + parentField.slice(1),
                type: 'SET_DIMENSION_FIELDS',
            });

            const accessor: { [key: string]: SelectMenuOption[] } = { [parentField]: [] };

            nestedFieldValues.forEach((nestedField, nestedIdx) => {
                accessor[parentField].push({
                    id: nestedIdx + 1,
                    key: nestedField,
                    label: nestedField.charAt(0).toUpperCase() + nestedField.slice(1),
                    type: 'SET_DIMENSION_FIELDS',
                });
            });
            preparedAccessorOptions = { ...preparedAccessorOptions, ...accessor };
        });
    } else if (!visualState.population_grade) {
        preparedDataOptions.push({
            id: 1,
            key: 'select_data_set',
            label: 'No data',
            type: 'SET_DIMENSION_FIELDS',
        });
    }

    console.log('preparedDataOptions', preparedDataOptions);
    console.log('preparedAccessorOptions', preparedAccessorOptions);

    const getSelectedAccessor = (position: AxisPosition): SelectMenuOption => {
        const targetIndex = 0; // This will need to become dynamic when grouping is implemented
        const initialOption: SelectMenuOption = {
            id: 0,
            key: 'select',
            label: 'Select an Accessor',
            type: 'RESET',
        };
        if (typeIsBarOrLine) {
            const dimension = graphState.axes[position]?.dimension;
            if (!dimension) return initialOption;
            const selected = preparedAccessorOptions[
                graphState.axes[position]?.field as string
            ]?.find(ao => {
                if (dimension === 'primary') {
                    return ao.key === graphState.graphConfig[dimension].accessor;
                } else {
                    return ao.key === graphState.graphConfig[dimension][targetIndex].accessor;
                }
            });

            if (!selected) return initialOption;
            return selected;
        }

        return initialOption;
    };
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                    <Image
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="h-8 w-auto"
                        width={8}
                        height={8}
                    />
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className=" space-y-1">
                                {/* Graph Type Select Menu */}
                                <SelectMenu
                                    options={graphOptions}
                                    selected={selectedGraphType}
                                    handleSelect={handleSelect}
                                />

                                {/* Layout Select Menu */}
                                <SelectMenu
                                    options={graphConfig[0].options}
                                    selected={selectedLayout || graphLayouts[0]}
                                    handleSelect={handleSelect}
                                />
                                <div className="pt-10 space-y-8">
                                    {graphState.type === 'bar' || graphState.type === 'line' ? (
                                        <>
                                            <h3 className="block font-bold text-gray-100 uppercase">
                                                Axes
                                            </h3>
                                            {axisOptions.map(option => {
                                                const selectedTopLevelOption =
                                                    preparedDataOptions?.find(o => {
                                                        return (
                                                            o.key ===
                                                            graphState.axes[option.value]?.field
                                                        );
                                                    });
                                                return (
                                                    <div
                                                        key={option.value}
                                                        className="flex flex-col"
                                                    >
                                                        <div className="flex gap-3 pl-4">
                                                            <CheckBox
                                                                key={option.value}
                                                                option={option}
                                                                fontColor="text-gray-50"
                                                            />
                                                        </div>
                                                        {option.checked ? (
                                                            <div className="pt-4 space-y-8">
                                                                {/* Top Level Data Field */}
                                                                <SelectMenu
                                                                    options={preparedDataOptions}
                                                                    disabled={
                                                                        preparedDataOptions[0]
                                                                            .key ===
                                                                        'select_data_set'
                                                                    }
                                                                    selected={
                                                                        selectedTopLevelOption || {
                                                                            id: 0,
                                                                            key: 'select',
                                                                            label: 'Select',
                                                                            type: 'RESET',
                                                                        }
                                                                    }
                                                                    key={`${option.key}`}
                                                                    handleSelect={selectedOption =>
                                                                        handleSelect(
                                                                            selectedOption,
                                                                            option.value,
                                                                            option.dimension
                                                                        )
                                                                    }
                                                                />
                                                                {/* Accessor Data Field */}
                                                                {/* Ensuring that the value used as an index for graphState.axes is not undefined */}
                                                                {selectedTopLevelOption &&
                                                                selectedTopLevelOption.key !==
                                                                    'count' &&
                                                                option.value &&
                                                                graphState.axes[option.value] &&
                                                                graphState.axes[option.value]
                                                                    ?.field &&
                                                                graphState.axes[option.value]?.field
                                                                    .length ? (
                                                                    <SelectMenu
                                                                        options={
                                                                            preparedAccessorOptions[
                                                                                graphState.axes[
                                                                                    option.value
                                                                                ]?.field as string
                                                                            ] || []
                                                                        }
                                                                        selected={getSelectedAccessor(
                                                                            option.value
                                                                        )}
                                                                        handleSelect={selectedOption =>
                                                                            handleSelect(
                                                                                selectedOption,
                                                                                option.value,
                                                                                option.dimension,
                                                                                true
                                                                            )
                                                                        }
                                                                        disabled={
                                                                            !graphState.axes[
                                                                                option.value
                                                                            ]?.field.length
                                                                        }
                                                                    />
                                                                ) : null}

                                                                {option.axisConfig.map(config => (
                                                                    <TextInput
                                                                        key={config.key}
                                                                        name={config.name}
                                                                        type={config.inputType}
                                                                        label={config.label}
                                                                        value={
                                                                            graphState?.axes?.[
                                                                                option.value
                                                                            ]?.axisProps?.[
                                                                                config.name
                                                                            ]?.toString() ?? '0'
                                                                        }
                                                                        handleChange={(
                                                                            e: FormChangeType
                                                                        ) =>
                                                                            handleChange(
                                                                                e,
                                                                                option.value
                                                                            )
                                                                        }
                                                                    />
                                                                ))}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                );
                                            })}
                                        </>
                                    ) : null}
                                </div>
                                {/* {navigation.map(item => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className={[
                                                item.current
                                                    ? 'bg-gray-800 text-white'
                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                            ].join(' ')}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className="size-6 shrink-0"
                                            />
                                            {item.name}
                                        </a>
                                    </li>
                                ))} */}
                            </ul>
                        </li>
                        <li>
                            <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                {teams.map(team => (
                                    <li key={team.name}>
                                        <a
                                            href={team.href}
                                            className={[
                                                team.current
                                                    ? 'bg-gray-800 text-white'
                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                            ].join(' ')}
                                        >
                                            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                {team.initial}
                                            </span>
                                            <span className="truncate">{team.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="mt-auto">
                            <a
                                href="#"
                                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                            >
                                <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
