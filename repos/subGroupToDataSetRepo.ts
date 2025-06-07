import { DBError } from '@/errors/AppError.ts';
import { getOriginalErrorMessage } from '@/errors/errorHelpers.ts';
import type { Prisma, SubGroupToDataSet } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

export const subGroupToDataSetRepo = {
    async getAllSubGroupToDataSetRecords(): Promise<SubGroupToDataSet[]> {
        try {
            return prisma.subGroupToDataSet.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all subGroupsToDataSet records', originalMsg);
        }
    },

    async createSubGroupToDataSetRecord(
        data: Prisma.SubGroupToDataSetCreateInput
    ): Promise<SubGroupToDataSet> {
        try {
            return await prisma.subGroupToDataSet.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating year', originalMsg);
        }
    },

    async createSubGroupToDataSetRecords(
        data: Prisma.SubGroupToDataSetCreateManyInput
    ): Promise<{ count: number }> {
        try {
            return await prisma.subGroupToDataSet.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating year', originalMsg);
        }
    },
};
