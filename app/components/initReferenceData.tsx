'use client';

import { useEffect } from 'react';
import { useReferenceContext } from '../context/referenceContext.tsx';
import { getAllReferenceData } from '../services/referenceService.ts';

export default function InitReferenceData() {
    const { dispatch } = useReferenceContext();

    useEffect(() => {
        (async () => {
            const {
                years,
                grades,
                levels,
                schools,
                disciplines,
                subjects,
                subgroupTypes,
                subgroups,
            } = await getAllReferenceData();

            dispatch({ type: 'SET_REFERENCE_DATA', key: 'years', payload: years });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'grades', payload: grades });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'levels', payload: levels });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'schools', payload: schools });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'disciplines', payload: disciplines });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'subjects', payload: subjects });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'subgroupTypes', payload: subgroupTypes });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'subgroups', payload: subgroups });
        })();
    }, [dispatch]);

    return null; // invisible helper component
}
