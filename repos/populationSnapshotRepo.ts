import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';
import type { BulkInsertResult } from '../types/repo.ts';

export const PopulationSnapshotRepo = {
    async createBulk(
        records: Prisma.PopulationSnapshotCreateManyInput[]
    ): Promise<BulkInsertResult> {
        try {
            const result = await prisma.populationSnapshot.createMany({
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
            let message = `Failed to bulk insert into PopulationSnapshot table`;
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
};
