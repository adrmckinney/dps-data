import { DataType } from '@prisma/client';

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

type GlobalFiltersOptions = 'schoolId' | 'yearId';
type ScopedFiltersOptions = 'subgroupId' | 'gradeId' | 'levelId';
export type FilterOptions = GlobalFiltersOptions | ScopedFiltersOptions;

export type OrderDirection = 'asc' | 'desc';

export type GlobalFilters = {
    [field in GlobalFiltersOptions]?: FilterCondition;
};

export type ScopedFilters = {
    [key in DataType]: {
        filters?: FilterCondition;
        sort?: {
            field: string;
            direction: OrderDirection;
        };
    };
};

export type QueryModifiers = { dataTypes: DataType[] } & { globalFilters: GlobalFilters } & {
    scopedFilters: Partial<ScopedFilters>;
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
