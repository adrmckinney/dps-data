import { PopulationFilterPayload } from '@/types/queryFilters';
import { Prisma } from '@prisma/client';
import { buildSortOrder, buildWhereClause } from './Filter';

export function buildSubgroupPopulationWhereClause(
    filters: PopulationFilterPayload['filters']
): Prisma.SubgroupPopulationWhereInput {
    return buildWhereClause<Prisma.SubgroupPopulationWhereInput>(filters ?? {});
}

export function buildSubgroupPopulationSortOrder(
    sort?: PopulationFilterPayload['sort']
): Prisma.SubgroupPopulationOrderByWithRelationInput[] | undefined {
    return buildSortOrder<Prisma.SubgroupPopulationOrderByWithRelationInput>(
        sort
        //     {
        //     field: 'year.startYear',
        //     direction: 'asc',
        // }
    );
}

// export function buildSubgroupPopulationWhereClause(
//     filters: PopulationFilterPayload['filters']
// ): Prisma.SubgroupPopulationWhereInput {
//     return buildWhereClause<Prisma.SubgroupPopulationWhereInput>(filters ?? {});
// }

// export function buildSubgroupPopulationSortOrder(
//     sort?: PopulationFilterPayload['sort']
// ): Prisma.SubgroupPopulationOrderByWithRelationInput[] | undefined {
//     return buildSortOrder<Prisma.SubgroupPopulationOrderByWithRelationInput>(sort, {
//         field: 'year.startYear',
//         direction: 'asc',
//     });
// }
