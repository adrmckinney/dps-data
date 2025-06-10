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
                subGroupTypes,
                subGroups,
                dataSets,
                dataSourceToDataSet,
                disciplineToDataSet,
                gradeToDataSet,
                levelToDataSet,
                subGroupToDataSet,
                subjectToDataSet,
                dataSourceTypes,
            } = await getAllReferenceData();

            dispatch({ type: 'SET_REFERENCE_DATA', key: 'years', payload: years });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'grades', payload: grades });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'levels', payload: levels });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'schools', payload: schools });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'disciplines', payload: disciplines });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'subjects', payload: subjects });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'subGroupTypes', payload: subGroupTypes });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'subGroups', payload: subGroups });
            dispatch({ type: 'SET_REFERENCE_DATA', key: 'dataSets', payload: dataSets });
            dispatch({
                type: 'SET_REFERENCE_DATA',
                key: 'dataSourceToDataSet',
                payload: dataSourceToDataSet,
            });
            dispatch({
                type: 'SET_REFERENCE_DATA',
                key: 'disciplineToDataSet',
                payload: disciplineToDataSet,
            });
            dispatch({
                type: 'SET_REFERENCE_DATA',
                key: 'gradeToDataSet',
                payload: gradeToDataSet,
            });
            dispatch({
                type: 'SET_REFERENCE_DATA',
                key: 'levelToDataSet',
                payload: levelToDataSet,
            });
            dispatch({
                type: 'SET_REFERENCE_DATA',
                key: 'subGroupToDataSet',
                payload: subGroupToDataSet,
            });
            dispatch({
                type: 'SET_REFERENCE_DATA',
                key: 'subjectToDataSet',
                payload: subjectToDataSet,
            });
            dispatch({
                type: 'SET_REFERENCE_DATA',
                key: 'dataSourceTypes',
                payload: dataSourceTypes,
            });
        })();
    }, [dispatch]);

    return null; // invisible helper component
}
