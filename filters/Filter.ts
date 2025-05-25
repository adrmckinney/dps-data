import { FilterCondition } from '@/types/queryFilters';

export function buildClause(condition: FilterCondition) {
    return {
        [condition.operator]: condition.value,
    };
}

export function setNested(obj: Record<string, unknown>, keys: string[], clause: object): void {
    const lastKey = keys.pop();
    if (!lastKey) return;

    let current: Record<string, unknown> = obj;

    for (const key of keys) {
        if (!current[key]) {
            current[key] = {};
        }
        current = current[key] as Record<string, unknown>;
    }

    current[lastKey] = clause;
}

/**
 * Builds a Prisma-compliant where clause with support for AND/OR logic.
 */
export function buildWhereClause<TWhereInput extends Record<string, unknown>>(
    filters: Record<string, FilterCondition>
): TWhereInput {
    const where: TWhereInput = {} as TWhereInput;

    for (const key in filters) {
        const condition = filters[key];
        const keys = key.split('.');
        const clause = buildClause(condition);
        setNested(where, keys, clause);
    }

    return where;
}

/**
 * Builds a Prisma-compliant sort clause, supporting nested fields and a fallback sort.
 */
export function buildSortOrder<TOrderByInput extends Record<string, unknown>>(
    sort?: { field: string; direction: 'asc' | 'desc' },
    defaultSort?: { field: string; direction: 'asc' | 'desc' }
): TOrderByInput[] | undefined {
    const sortToNested = (field: string, direction: 'asc' | 'desc'): TOrderByInput => {
        const keys = field.split('.');
        const result = keys.reverse().reduce<Record<string, unknown>>((acc, key, idx) => {
            return idx === 0 ? { [key]: direction } : { [key]: acc };
        }, {});
        return result as TOrderByInput;
    };

    if (sort) return [sortToNested(sort.field, sort.direction)];
    if (defaultSort) return [sortToNested(defaultSort.field, defaultSort.direction)];
    return undefined;
}
