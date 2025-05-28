import { DataType, SubGroup } from '@prisma/client';

type DataTypeEnumKeys = Record<DataType, DataTypeEnumObjects>;
type DataTypeEnumObjects = {
    id: number;
    label: string;
};

export const DataTypeEnums: DataTypeEnumKeys = {
    POPULATION: {
        id: 1,
        label: 'Population',
    },
    DISCIPLINE_OVERALL: {
        id: 2,
        label: 'Discipline - overall',
    },
    DISCIPLINE_SUBGROUPS: {
        id: 3,
        label: 'Discipline - subgroups',
    },
    ACHIEVEMENT_OVERALL: {
        id: 4,
        label: 'Achievement - overall',
    },
    ACHIEVEMENT_SUBGROUPS: {
        id: 5,
        label: 'Achievement - subgroups',
    },
    OTHER: {
        id: 6,
        label: 'Other',
    },
};

export const applySubgroup = (subgroup: SubGroup) => {
    console.log('subgroup', subgroup);

    const availableTypes = subgroup.availableForDataTypes;
    console.log('availableTypes', availableTypes);
    if (!availableTypes) return true;

    const targetEnum = Object.entries(DataTypeEnums).find(entry => {
        return availableTypes.includes(entry[0] as DataType);
    });
    console.log('targetEnum', targetEnum);
    return true;
};
