import { Prisma } from '@prisma/client';
import type { QueryFilterPayload } from '../types/queryFilters.ts';
import { buildSortOrder, buildWhereClause } from './Filter.ts';

export function buildSubgroupPopulationWhereClause(
    filters: QueryFilterPayload['filters']
): Prisma.SubgroupPopulationWhereInput {
    return buildWhereClause<Prisma.SubgroupPopulationWhereInput>(filters ?? {});
}

export function buildSubgroupPopulationSortOrder(
    sort?: QueryFilterPayload['sort']
): Prisma.SubgroupPopulationOrderByWithRelationInput[] | undefined {
    return buildSortOrder<Prisma.SubgroupPopulationOrderByWithRelationInput>(sort, {
        field: 'year.startYear',
        direction: 'asc',
    });
}
