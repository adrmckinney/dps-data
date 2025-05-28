'use client';

import type {
    Discipline,
    Grade,
    Level,
    School,
    SubGroup,
    SubGroupType,
    Subject,
    Year,
} from '@prisma/client';
import React, { createContext, useContext, useReducer } from 'react';

// Define types
type ReferenceState = {
    years: Year[];
    grades: Grade[];
    levels: Level[];
    schools: School[];
    disciplines: Discipline[];
    subjects: Subject[];
    subgroupTypes: SubGroupType[];
    subgroups: SubGroup[];
};

type Action = { type: 'SET_REFERENCE_DATA'; key: keyof ReferenceState; payload: unknown };

const initialState: ReferenceState = {
    years: [],
    grades: [],
    levels: [],
    schools: [],
    disciplines: [],
    subjects: [],
    subgroupTypes: [],
    subgroups: [],
};

const ReferenceContext = createContext<{
    state: ReferenceState;
    dispatch: React.Dispatch<Action>;
} | null>(null);

function reducer(state: ReferenceState, action: Action): ReferenceState {
    switch (action.type) {
        case 'SET_REFERENCE_DATA':
            return { ...state, [action.key]: action.payload };
        default:
            return state;
    }
}

export const ReferenceProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ReferenceContext.Provider value={{ state, dispatch }}>
            {children}
        </ReferenceContext.Provider>
    );
};

export function useReferenceContext() {
    const context = useContext(ReferenceContext);
    if (!context) throw new Error('useReferenceContext must be used within ReferenceProvider');
    return context;
}
