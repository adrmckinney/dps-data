import type { DataSet } from '@prisma/client';

export type Operator =
    | 'equals'
    | 'in'
    | 'notIn'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'contains'
    | 'startsWith'
    | 'endsWith'
    | 'not';

export type FilterValue = string | number | boolean | string[] | number[];
export type FilterScope = 'global' | 'scoped';

type GlobalFiltersOptions = 'schoolId' | 'yearId';
export type ScopedFiltersOptions = 'subGroupId' | 'gradeId' | 'levelId';
export type FilterOptions = GlobalFiltersOptions | ScopedFiltersOptions;

export type OrderDirection = 'asc' | 'desc';

export type GlobalFilters = {
    key: GlobalFiltersOptions;
    condition: FilterCondition;
};

export type ScopedFilters = {
    key: ScopedFiltersOptions;
    condition: FilterCondition;
};

export type ScopedDataSetFilterGroup = {
    dataSetId: DataSet['id'];
    filters: Partial<ScopedFilters[]>;
};

export type DataSetFilter = {
    key: FilterOptions;
    scopeType: FilterScope;
    condition: FilterCondition;
};

export type DataSetFilterGroup = {
    dataSetId: DataSet['id'];
    filters: DataSetFilter[];
};

export type QueryModifiers = {
    dataSetIds: DataSet['id'][];
    filterGroups: DataSetFilterGroup[];
    // sort?: {
    //     field: string;
    //     direction: OrderDirection;
    // };
};

export type Filters = {
    [field in FilterOptions]: FilterCondition;
};

export type FilterCondition = {
    operator: Operator;
    value: string | number | boolean | (string | number)[];
};

export type QueryFilterSort = {
    filters?: Partial<Record<string, FilterCondition>>;
    sort?: {
        field: string;
        direction: OrderDirection;
    };
};
