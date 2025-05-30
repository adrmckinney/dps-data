import { DataType, SubGroup } from '@prisma/client';

type DataTypeEnum = Record<DataType, DataTypeEnumObjects>;
type DataTypeEnumObjects = {
    id: number;
    label: string;
};

export const DataTypeEnums: DataTypeEnum = {
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

export const getKeyFromCategoryId = (categoryIds: number): DataType => {
    let returnKey: DataType = 'OTHER';
    Object.entries(DataTypeEnums).forEach(entry => {
        const [key, value] = entry;
        if (value.id === categoryIds) {
            returnKey = key as DataType;
            return;
        }
    });
    return returnKey;
};

export const getKeysFromCategoryIds = (subgroupIds: Set<number> | undefined): DataType[] => {
    const returnKeys: DataType[] = [];
    if (!subgroupIds) return returnKeys;

    subgroupIds.forEach(id => {
        const key = getKeyFromCategoryId(id);
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
