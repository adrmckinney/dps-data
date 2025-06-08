import type { GradeToDataSet, Prisma } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';
import type { FlatGradeToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';

export const GradeToDataSetRepo = {
    async getAllGradeToDataSetRecords(): Promise<GradeToDataSet[]> {
        try {
            return prisma.gradeToDataSet.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all gradeToDataSet records', originalMsg);
        }
    },

    async getByGradeIdAndDataSetId(
        gradeId: number,
        dataSetId: number
    ): Promise<GradeToDataSet | null> {
        try {
            return prisma.gradeToDataSet.findUnique({
                where: { gradeId_dataSetId: { gradeId, dataSetId } },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(
                'DB error fetching gradeToDataSet by level and dataSet IDS',
                originalMsg
            );
        }
    },

    async createGradeToDataSetRecord(data: FlatGradeToDataSetCreateInput): Promise<GradeToDataSet> {
        try {
            return await prisma.gradeToDataSet.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating gradeToDataSet', originalMsg);
        }
    },

    async createGradeToDataSetRecords(
        data: Prisma.GradeToDataSetCreateManyInput
    ): Promise<{ count: number }> {
        try {
            return await prisma.gradeToDataSet.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating gradeToDataSet records', originalMsg);
        }
    },
};
