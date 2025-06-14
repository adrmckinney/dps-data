import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';
import type { BulkInsertResult } from '../types/repo.ts';

export const SubgroupPopulationRepo = {
    async createBulk(
        records: Prisma.SubGroupPopulationCreateManyInput[]
    ): Promise<BulkInsertResult> {
        try {
            const result = await prisma.subGroupPopulation.createMany({
                data: records,
                skipDuplicates: true,
            });

            return {
                success: result.count > 0 || (result.count === 0 && records.length > 0),
                message: '', // Will be handled in the Service layer
                insertedCount: result.count,
                skippedCount: records.length - result.count,
                attemptedCount: records.length,
                timestamp: new Date().toISOString(),
            };
        } catch (error) {
            let message = `Failed to bulk insert into GradePopulation table`;
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                message = `${message}: ${error.message}`;
            }
            return {
                success: false,
                message,
                insertedCount: 0,
                skippedCount: 0,
                attemptedCount: records.length,
                timestamp: new Date().toISOString(),
                error,
            };
        }
    },

    async getFilteredSubgroupPopulation(params: {
        where: Prisma.SubGroupPopulationWhereInput;
        orderBy?: Prisma.SubGroupPopulationOrderByWithRelationInput[];
    }) {
        return prisma.subGroupPopulation.findMany({
            where: params.where,
            orderBy: params.orderBy,
        });
    },
};
