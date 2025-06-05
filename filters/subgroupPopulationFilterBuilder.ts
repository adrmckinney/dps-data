import { Prisma } from '@prisma/client';
import type { QueryFilterSort } from '../types/queryModifiers.ts';
import { buildSortOrder, buildWhereClause } from './Filter.ts';

export function buildSubgroupPopulationWhereClause(
    filters: QueryFilterSort['filters']
): Prisma.SubgroupPopulationWhereInput {
    return buildWhereClause<Prisma.SubgroupPopulationWhereInput>(filters ?? {});
}

export function buildSubgroupPopulationSortOrder(
    sort?: QueryFilterSort['sort']
): Prisma.SubgroupPopulationOrderByWithRelationInput[] | undefined {
    return buildSortOrder<Prisma.SubgroupPopulationOrderByWithRelationInput>(sort, {
        field: 'year.startYear',
        direction: 'asc',
    });
}
