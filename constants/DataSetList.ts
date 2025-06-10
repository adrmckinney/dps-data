import type { DataSetKeys } from '../types/dataSetKeys.ts';

type DataSet = {
    key: DataSetKeys;
    label: string;
    description: string;
};

export const dataSetEnums: (DataSet & { id: number })[] = [
    {
        id: 1,
        key: 'POPULATION_GRADE',
        label: 'Population - grade',
        description: 'Population by grade data set',
    },
    {
        id: 2,
        key: 'POPULATION_SUBGROUP',
        label: 'Population - subGroup',
        description: 'Population by subGroup data set',
    },
    {
        id: 3,
        key: 'DISCIPLINE_OVERALL',
        label: 'Discipline - overall',
        description: 'Discipline data for the school year overall',
    },
    {
        id: 4,
        key: 'DISCIPLINE_SUBGROUPS',
        label: 'Discipline - subGroups',
        description: 'Discipline data by subGroups per school',
    },
    {
        id: 5,
        key: 'ACHIEVEMENT_OVERALL',
        label: 'Achievement - overall',
        description: 'Achievement data for the school year overall',
    },
    {
        id: 6,
        key: 'ACHIEVEMENT_SUBGROUPS',
        label: 'Achievement - subGroups',
        description: 'Achievement data by subgroup',
    },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DATA_SETS_SEED: DataSet[] = dataSetEnums.map(({ id, ...rest }) => ({ ...rest }));

export const getDataSetIdByKey = (key: DataSetKeys) => {
    return dataSetEnums.find(ds => ds.key === key)?.id;
};
