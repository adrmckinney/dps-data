import type { DataSetKeys } from '../types/dataSetKeys.ts';

type DataSet = {
    key: DataSetKeys;
    label: string;
    description: string;
};

export const DATA_SETS_SEED: DataSet[] = [
    {
        key: 'POPULATION_GRADE',
        label: 'Population - grade',
        description: 'Population by grade data set',
    },
    {
        key: 'POPULATION_SUBGROUP',
        label: 'Population - subGroup',
        description: 'Population by subGroup data set',
    },
    {
        key: 'DISCIPLINE_OVERALL',
        label: 'Discipline - overall',
        description: 'Discipline data for the school year overall',
    },
    {
        key: 'DISCIPLINE_SUBGROUPS',
        label: 'Discipline - subGroups',
        description: 'Discipline data by subGroups per school',
    },
    {
        key: 'ACHIEVEMENT_OVERALL',
        label: 'Achievement - overall',
        description: 'Achievement data for the school year overall',
    },
    {
        key: 'ACHIEVEMENT_SUBGROUPS',
        label: 'Achievement - subGroups',
        description: 'Achievement data by subgroup',
    },
];
