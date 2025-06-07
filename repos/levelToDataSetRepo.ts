import { DBError } from '@/errors/AppError.ts';
import { getOriginalErrorMessage } from '@/errors/errorHelpers.ts';
import type { LevelToDataSet, Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

export const LevelToDataSetRepo = {
    async getAllLevelToDataSetRecords(): Promise<LevelToDataSet[]> {
        try {
            return prisma.levelToDataSet.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all levelToDataSet records', originalMsg);
        }
    },

    async getByLevelIdAndDataSetId(
        levelId: number,
        dataSetId: number
    ): Promise<LevelToDataSet | null> {
        try {
            return prisma.levelToDataSet.findUnique({
                where: { levelId_dataSetId: { levelId, dataSetId } },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(
                'DB error fetching levelToDataSet by level and dataSet IDS',
                originalMsg
            );
        }
    },

    async createLevelToDataSetRecord(
        data: Prisma.LevelToDataSetCreateInput
    ): Promise<LevelToDataSet> {
        try {
            return await prisma.levelToDataSet.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating levelToDataSet', originalMsg);
        }
    },

    async createLevelToDataSetRecords(
        data: Prisma.LevelToDataSetCreateManyInput
    ): Promise<{ count: number }> {
        try {
            return await prisma.levelToDataSet.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating levelToDataSet records', originalMsg);
        }
    },
};
