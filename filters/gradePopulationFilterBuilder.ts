import { Prisma } from '@prisma/client';
import type { QueryFilterPayload } from '../types/queryFilters.ts';
import type { DataSetFilter } from '../types/queryModifiers.ts';
import { buildSortOrder, buildWhereClause } from './Filter.ts';

export function buildGradePopulationWhereClause(
    filters: DataSetFilter[]
): Prisma.GradePopulationWhereInput {
    if (!filters?.length) return {};

    // Convert array of filters to Prisma where input
    return buildWhereClause<Prisma.GradePopulationWhereInput>(filters);
}

export function buildGradePopulationSortOrder(
    sort?: QueryFilterPayload['sort']
): Prisma.GradePopulationOrderByWithRelationInput[] | undefined {
    return buildSortOrder<Prisma.GradePopulationOrderByWithRelationInput>(sort, {
        field: 'year.startYear',
        direction: 'asc',
    });
}
