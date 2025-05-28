import { Prisma } from '@prisma/client';
import type { QueryFilterPayload } from '../types/queryFilters.ts';
import { buildSortOrder, buildWhereClause } from './Filter.ts';

export function buildGradePopulationWhereClause(
    filters: QueryFilterPayload['filters']
): Prisma.GradePopulationWhereInput {
    return buildWhereClause<Prisma.GradePopulationWhereInput>(filters ?? {});
}

export function buildGradePopulationSortOrder(
    sort?: QueryFilterPayload['sort']
): Prisma.GradePopulationOrderByWithRelationInput[] | undefined {
    return buildSortOrder<Prisma.GradePopulationOrderByWithRelationInput>(sort, {
        field: 'year.startYear',
        direction: 'asc',
    });
}
