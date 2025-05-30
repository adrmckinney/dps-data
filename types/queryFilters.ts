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

export type FilterPayloadKeys = 'subgroupId' | 'gradeId' | 'schoolId' | 'yearId' | 'levelId';
export type FilterOperatorObject = { operator: Operator; value: FilterValue };

export type FilterPayload = {
    filters?: Record<Partial<FilterPayloadKeys>, FilterOperatorObject>;
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
