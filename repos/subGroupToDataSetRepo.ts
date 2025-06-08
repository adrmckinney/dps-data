import type { Prisma, SubGroupToDataSet } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';
import type { FlatSubGroupToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';

export const subGroupToDataSetRepo = {
    async getAllSubGroupToDataSetRecords(): Promise<SubGroupToDataSet[]> {
        try {
            return prisma.subGroupToDataSet.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all subGroupsToDataSet records', originalMsg);
        }
    },

    async getBySubGroupIdAndDataSetId(
        subGroupId: number,
        dataSetId: number
    ): Promise<SubGroupToDataSet | null> {
        try {
            return prisma.subGroupToDataSet.findUnique({
                where: { subGroupId_dataSetId: { subGroupId, dataSetId } },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(
                'DB error fetching subGroupToDataSet by subGroup and dataSet IDS',
                originalMsg
            );
        }
    },

    async createSubGroupToDataSetRecord(
        data: FlatSubGroupToDataSetCreateInput
    ): Promise<SubGroupToDataSet> {
        try {
            return await prisma.subGroupToDataSet.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating subGroupToDataSet record', originalMsg);
        }
    },

    async createSubGroupToDataSetRecords(
        data: Prisma.SubGroupToDataSetCreateManyInput
    ): Promise<{ count: number }> {
        try {
            return await prisma.subGroupToDataSet.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating subGroupToDataSet records', originalMsg);
        }
    },
};
