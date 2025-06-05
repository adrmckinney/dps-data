import { DataType, SubGroup } from '@prisma/client';

type DataTypeEnum = Record<DataType, DataTypeEnumObjects>;
type DataTypeEnumObjects = {
    id: number;
    key: DataType;
    label: string;
};

export const DataTypeEnums: DataTypeEnum = {
    POPULATION_GRADE: {
        id: 1,
        key: 'POPULATION_GRADE',
        label: 'Population - grades',
    },
    POPULATION_SUBGROUP: {
        id: 2,
        key: 'POPULATION_SUBGROUP',
        label: 'Population - subgroups',
    },
    DISCIPLINE_OVERALL: {
        id: 3,
        key: 'DISCIPLINE_OVERALL',
        label: 'Discipline - overall',
    },
    DISCIPLINE_SUBGROUPS: {
        id: 4,
        key: 'DISCIPLINE_SUBGROUPS',
        label: 'Discipline - subgroups',
    },
    ACHIEVEMENT_OVERALL: {
        id: 5,
        key: 'ACHIEVEMENT_OVERALL',
        label: 'Achievement - overall',
    },
    ACHIEVEMENT_SUBGROUPS: {
        id: 6,
        key: 'ACHIEVEMENT_SUBGROUPS',
        label: 'Achievement - subgroups',
    },
    OTHER: {
        id: 7,
        key: 'OTHER',
        label: 'Other',
    },
};

export const getKeyFromDataSetId = (dataSetId: number): DataType => {
    let returnKey: DataType = 'OTHER';
    Object.entries(DataTypeEnums).forEach(entry => {
        const [key, value] = entry;
        if (value.id === dataSetId) {
            returnKey = key as DataType;
            return;
        }
    });
    return returnKey;
};

export const getKeysFromDataSetIds = (dataSetIds: Set<number> | undefined): DataType[] => {
    const returnKeys: DataType[] = [];
    if (!dataSetIds) return returnKeys;

    dataSetIds.forEach(id => {
        const key = getKeyFromDataSetId(id);
        returnKeys.push(key);
    });
    return returnKeys;
};

export const applySubgroup = (
    subgroup: SubGroup,
    selectedCategoryIds: Set<number> | undefined
): boolean => {
    if (!selectedCategoryIds || selectedCategoryIds.size === 0) {
        return true; // Show all if no filter is selected
    }

    const availableTypes = subgroup.availableForDataTypes;
    if (!availableTypes || availableTypes.length === 0) {
        return false; // Hide if nothing is available
    }

    // Convert DataType[] to the corresponding enum numeric IDs
    const availableTypeIds = availableTypes.map(type => DataTypeEnums[type].id);

    return availableTypeIds.some(id => selectedCategoryIds.has(id));
};
