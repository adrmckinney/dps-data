import { DataSet } from '@prisma/client';

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

type GlobalFiltersOptions = 'schoolIds' | 'yearIds';
type ScopedFiltersOptions = 'subgroupIds' | 'gradeIds' | 'levelIds';
export type FilterOptions = GlobalFiltersOptions | ScopedFiltersOptions;

export type OrderDirection = 'asc' | 'desc';

export type GlobalFilters = {
    [field in GlobalFiltersOptions]?: FilterCondition;
};

// export type ScopedFilters = {
//     [key in DataSet]: {
//         filters?: FilterCondition;
//         sort?: {
//             field: string;
//             direction: OrderDirection;
//         };
//     };
// };
export type ScopedFilters = {
    filters?: FilterCondition;
    sort?: {
        field: string;
        direction: OrderDirection;
    };
};

// export type QueryModifiers = { dataTypes: DataSet[] } & {
//     globalFilters: Partial<GlobalFilters>;
// } & {
//     scopedFilters: Partial<ScopedFilters>;
// };
export type QueryModifiers = {
    dataTypes: DataSet[];
    filters: Filters[];
    sort?: {
        field: string;
        direction: OrderDirection;
    };
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
