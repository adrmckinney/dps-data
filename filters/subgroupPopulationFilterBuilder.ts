import { Prisma } from '@prisma/client';
import type { QueryFilterPayload } from '../types/queryFilters.ts';
import type { DataSetFilter } from '../types/queryModifiers.ts';
import { buildSortOrder, buildWhereClause } from './Filter.ts';

export function buildSubgroupPopulationWhereClause(
    filters: DataSetFilter[]
): Prisma.SubGroupPopulationWhereInput {
    if (!filters?.length) return {};

    // Convert array of filters to Prisma where input
    return buildWhereClause<Prisma.SubGroupPopulationWhereInput>(filters);
}

export function buildSubgroupPopulationSortOrder(
    sort?: QueryFilterPayload['sort']
): Prisma.SubGroupPopulationOrderByWithRelationInput[] | undefined {
    return buildSortOrder<Prisma.SubGroupPopulationOrderByWithRelationInput>(sort, {
        field: 'year.startYear',
        direction: 'asc',
    });
}
