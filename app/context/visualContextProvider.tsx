'use client';

import { HydratedGradePopulation, HydratedSubGroupPopulation } from '@/types/queryResponseTypes';
import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type VisualizationState = {
    population_grade: HydratedGradePopulation[] | null;
    population_subgroup: HydratedSubGroupPopulation[] | null;
};

type VisualizationAction =
    | { type: 'POPULATION_GRADE'; payload: HydratedGradePopulation[] }
    | { type: 'POPULATION_SUB_GROUP'; payload: HydratedSubGroupPopulation[] };

function visualizationReducer(
    state: VisualizationState,
    action: VisualizationAction
): VisualizationState {
    switch (action.type) {
        case 'POPULATION_GRADE':
            return { ...state, population_grade: action.payload };
        case 'POPULATION_SUB_GROUP':
            return { ...state, population_subgroup: action.payload };
        default:
            return state;
    }
}

const VisualContext = createContext<{
    state: VisualizationState;
    dispatch: Dispatch<VisualizationAction>;
} | null>(null);

const initialState: VisualizationState = {
    population_grade: null,
    population_subgroup: null,
};

export const VisualProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(visualizationReducer, initialState);

    return <VisualContext.Provider value={{ state, dispatch }}>{children}</VisualContext.Provider>;
};

export const useVisualContext = () => {
    const ctx = useContext(VisualContext);
    if (!ctx) throw new Error('useVisualContext must be used within VisualProvider');
    return ctx;
};
