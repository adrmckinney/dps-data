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

export type OrderDirection = 'asc' | 'desc';

export type FilterPayload = {
    filters?: Record<string, { operator: Operator; value: FilterValue }>;
    sort?: { field: string; direction: OrderDirection };
};

export type FilterCondition = {
    operator: Operator;
    value: string | number | boolean | (string | number)[];
};

export type QueryFilterPayload = {
    filters?: Record<string, FilterCondition>;
    sort?: {
        field: string;
        direction: OrderDirection;
    };
};
