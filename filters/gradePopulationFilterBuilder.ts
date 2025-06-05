import { Prisma } from '@prisma/client';
import type { QueryFilterSort } from '../types/queryModifiers.ts';
import { buildSortOrder, buildWhereClause } from './Filter.ts';

export function buildGradePopulationWhereClause(
    filters: QueryFilterSort['filters']
): Prisma.GradePopulationWhereInput {
    return buildWhereClause<Prisma.GradePopulationWhereInput>(filters ?? {});
}

export function buildGradePopulationSortOrder(
    sort?: QueryFilterSort['sort']
): Prisma.GradePopulationOrderByWithRelationInput[] | undefined {
    return buildSortOrder<Prisma.GradePopulationOrderByWithRelationInput>(sort, {
        field: 'year.startYear',
        direction: 'asc',
    });
}
