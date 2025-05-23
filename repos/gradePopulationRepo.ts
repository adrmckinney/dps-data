// repositories/populationRepository.ts
import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';
import type { BulkInsertResult } from '../types/repo.ts';

export const GradePopulationRepo = {
    async createBulk(records: Prisma.GradePopulationCreateManyInput[]): Promise<BulkInsertResult> {
        try {
            const result = await prisma.gradePopulation.createMany({
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
};
