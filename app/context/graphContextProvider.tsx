'use client';

import { AxisProps } from '@nivo/axes';
import { BarDatum } from '@nivo/bar';
import { LineSeries } from '@nivo/line';
// import { PieSvgProps } from '@nivo/pie';
import { createContext, ReactNode, useContext, useReducer } from 'react';

export interface MyPieDatum {
    id: string;
    label?: string;
    value: number;
    color?: string;
}

// Field from filter results that user can select for axes/slices
type EntityField = 'year' | 'grade' | 'subGroup' | 'school' | 'count' | (string & {}); // This is the parent level key that hold the meta data object of that value.
type Accessor = string;
export type LegendPositions = 'end' | 'middle' | 'start';
export type AxisPosition = 'top' | 'right' | 'bottom' | 'left';

type AxisConfig = {
    field: EntityField;
    active: boolean; // All the axes positions have default data so we need this flag
    dimension: DimensionKeys;
    axisProps?: Partial<AxisProps>; // optional override props
};

export type AxesConfig = {
    [K in AxisPosition]?: AxisConfig;
};

type SliceConfig = {
    field: EntityField;
    legendField?: EntityField; // optional label
};

export type GraphTypes = 'bar' | 'line' | 'pie';

type BaseGraphState = {
    type: GraphTypes;
    graphConfig: GraphConfig;
};

type BarGraphState = BaseGraphState & {
    type: 'bar';
    axes: AxesConfig;
    data: BarDatum[];
};

type LineGraphState = BaseGraphState & {
    type: 'line';
    axes: AxesConfig;
    data: LineSeries[];
};

type PieGraphState = BaseGraphState & {
    type: 'pie';
    slices: SliceConfig;
    data: MyPieDatum[];
};

type GraphState = BarGraphState | LineGraphState | PieGraphState;

type DimensionGroups = {
    entity: EntityField; // Entity represents the top-level object key and will be provided to nivo indexBy or keys[]
    accessor: Accessor; // Accessor is the nested object inside entity that is used to get the correct selected data
};

export type GraphDimensions = {
    primary: DimensionGroups; // Entity will be assigned to `indexBy`
    secondary: DimensionGroups[]; // Entity will be assigned to `keys`
};

export type GraphConfig = {
    layout: 'vertical' | 'horizontal' | undefined;
} & GraphDimensions;

export type DimensionKeys = 'primary' | 'secondary';

export type TargetConfigKeys = 'layout' | DimensionKeys;

type GraphConfigPayload = {
    targetConfig: TargetConfigKeys;
    value: string | string[];
};

const initialAxes: Record<AxisPosition, AxisConfig> = {
    left: {
        field: '',
        active: false,
        dimension: 'secondary',
        axisProps: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40,
        },
    },
    bottom: {
        field: '',
        active: false,
        dimension: 'primary',
        axisProps: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
        },
    },
    top: {
        field: '',
        active: false,
        dimension: 'primary',
        axisProps: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -32,
        },
    },
    right: {
        field: '',
        active: false,
        dimension: 'secondary',
        axisProps: {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 40,
        },
    },
};

export const initialGraphConfig: GraphConfig = {
    layout: 'vertical',
    primary: { entity: '', accessor: '' },
    secondary: [{ entity: '', accessor: '' }],
};

const initialState: GraphState = {
    type: 'bar',
    axes: initialAxes,
    data: [],
    graphConfig: initialGraphConfig,
};

export type GraphAction =
    | { type: 'SET_GRAPH_TYPE'; payload: GraphTypes }
    | {
          type: 'SET_AXIS_CONFIG';
          payload: {
              position: AxisPosition;
              key: keyof AxisProps;
              value: AxisProps[keyof AxisProps];
          };
      }
    | {
          type: 'SET_DIMENSION_FIELDS';
          payload: {
              position: AxisPosition;
              targetField: 'entity' | 'accessor';
              value: EntityField | Accessor;
              dimension: DimensionKeys;
              targetIndex: number;
          };
      }
    | {
          type: 'SET_AXIS_DATA_FIELD';
          payload: {
              position: AxisPosition;
              field: EntityField;
          };
      }
    | {
          type: 'SET_AXIS_ACTIVE';
          payload: {
              position: AxisPosition;
          };
      }
    | { type: 'SET_GRAPH_CONFIG'; payload: GraphConfigPayload }
    | { type: 'SET_SLICES'; payload: SliceConfig }
    | { type: 'SET_DATA'; payload: BarDatum[] | MyPieDatum[] | LineSeries[] }
    | { type: 'RESET' };

function graphReducer(state: GraphState, action: GraphAction): GraphState {
    switch (action.type) {
        case 'SET_GRAPH_TYPE':
            switch (action.payload) {
                case 'bar':
                case 'line':
                    return {
                        type: action.payload,
                        axes: {},
                        data: [],
                        graphConfig: initialGraphConfig,
                    };
                case 'pie':
                    return {
                        type: 'pie',
                        slices: { field: '' },
                        data: [],
                        graphConfig: initialGraphConfig,
                    };
                default:
                    return state;
            }

        case 'SET_AXIS_CONFIG':
            if (state.type === 'bar' || state.type === 'line') {
                const prevAxis = state.axes[action.payload.position] || {
                    field: '', // default field if not initialized
                    accessor: '',
                    active: false,
                };

                const updatedAxisConfig: AxisConfig = {
                    ...prevAxis,
                    axisProps: {
                        ...prevAxis.axisProps,
                        [action.payload.key]: action.payload.value,
                    },
                };
                return {
                    ...state,
                    axes: {
                        ...state.axes,
                        [action.payload.position]: updatedAxisConfig,
                    },
                };
            }
            return state;

        case 'SET_AXIS_DATA_FIELD':
            if (state.type === 'bar' || state.type === 'line') {
                const prevAxis = state.axes[action.payload.position];

                return {
                    ...state,
                    axes: {
                        ...state.axes,
                        [action.payload.position]: {
                            ...prevAxis,
                            field: action.payload.field,
                        },
                    },
                };
            }
            return state;

        case 'SET_AXIS_ACTIVE':
            if (state.type === 'bar' || state.type === 'line') {
                const prevAxis = state.axes[action.payload.position];

                return {
                    ...state,
                    axes: {
                        ...state.axes,
                        [action.payload.position]: {
                            ...prevAxis,
                            active: !prevAxis?.active,
                        },
                    },
                };
            }
            return state;

        // Handles setting the state for axis.field and graphConfig.primary or graphConfig.secondary
        case 'SET_DIMENSION_FIELDS':
            if (state.type === 'bar' || state.type === 'line') {
                const { dimension, targetField, value, targetIndex } = action.payload;

                if (dimension === 'primary') {
                    const { position, value, targetField } = action.payload;

                    const axisPayload = { position, field: value };

                    // First update axes using helper if targetField is Entity
                    const stateWithUpdatedAxis =
                        targetField === 'entity'
                            ? updateAxisDimensionField(state, axisPayload)
                            : state;

                    // Then return a new state with both axes and graphConfig.primary updated
                    return {
                        ...stateWithUpdatedAxis,
                        graphConfig: {
                            ...stateWithUpdatedAxis.graphConfig,
                            primary: {
                                ...stateWithUpdatedAxis.graphConfig.primary,
                                [targetField]: value,
                            },
                        },
                    };
                }

                if (dimension === 'secondary') {
                    const { position } = action.payload;
                    const axisPayload = { position, field: value };

                    // First update axes using helper if targetField is Entity
                    const stateWithUpdatedAxis =
                        targetField === 'entity'
                            ? updateAxisDimensionField(state, axisPayload)
                            : state;

                    const updatedSecondary = [...state.graphConfig.secondary];
                    const existing = updatedSecondary[targetIndex] || {};

                    updatedSecondary[targetIndex] = {
                        ...existing,
                        [targetField]: value,
                    };

                    return {
                        ...stateWithUpdatedAxis,
                        graphConfig: {
                            ...state.graphConfig,
                            secondary: updatedSecondary,
                        },
                    };
                }
            }

            return state;

        case 'SET_GRAPH_CONFIG':
            if (state.type === 'bar' || state.type === 'line') {
                const valueIsArray = Array.isArray(action.payload.value);

                return {
                    ...state,
                    graphConfig: {
                        ...state.graphConfig,
                        [action.payload.targetConfig]: valueIsArray
                            ? [...state.graphConfig.secondary, ...action.payload.value]
                            : action.payload.value,
                    },
                };
            }
            return state;

        case 'SET_SLICES':
            if (state.type === 'pie') {
                return {
                    ...state,
                    slices: action.payload,
                };
            }
            return state;

        case 'SET_DATA':
            return {
                ...state,
                data: action.payload as never,
            };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

const updateAxisDimensionField = (
    state: GraphState,
    payload: {
        position: AxisPosition;
        field: EntityField;
    }
) => {
    if (state.type === 'bar' || state.type === 'line') {
        const prevAxis = state.axes[payload.position];

        return {
            ...state,
            axes: {
                ...state.axes,
                [payload.position]: {
                    ...prevAxis,
                    field: payload.field,
                },
            },
        };
    }
    return state;
};

const GraphContext = createContext<
    | {
          state: GraphState;
          dispatch: React.Dispatch<GraphAction>;
      }
    | undefined
>(undefined);

export const GraphProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(graphReducer, initialState);

    return <GraphContext.Provider value={{ state, dispatch }}>{children}</GraphContext.Provider>;
};

export const useGraphContext = () => {
    const context = useContext(GraphContext);
    if (!context) throw new Error('useGraphContext must be used within GraphProvider');
    return context;
};

export const useBarGraphState = () => {
    const { state } = useGraphContext();
    if (state.type !== 'bar') throw new Error('Expected bar graph state');
    return state;
};

export const useLineGraphState = () => {
    const { state } = useGraphContext();
    if (state.type !== 'line') throw new Error('Expected bar graph state');
    return state;
};

export const usePieGraphState = () => {
    const { state } = useGraphContext();
    if (state.type !== 'pie') throw new Error('Expected pie graph state');
    return state;
};
