import type { Prisma, SubjectToDataSet } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';
import type { FlatSubjectToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';

export const SubjectToDataSetRepo = {
    async getAllSubjectToDataSetRecords(): Promise<SubjectToDataSet[]> {
        try {
            return prisma.subjectToDataSet.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all subjectToDataSet records', originalMsg);
        }
    },

    async getBySubjectIdAndDataSetId(
        subjectId: number,
        dataSetId: number
    ): Promise<SubjectToDataSet | null> {
        try {
            return prisma.subjectToDataSet.findUnique({
                where: { subjectId_dataSetId: { subjectId, dataSetId } },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(
                'DB error fetching subjectToDataSet by subject and dataSet IDS',
                originalMsg
            );
        }
    },

    async createSubjectToDataSetRecord(
        data: FlatSubjectToDataSetCreateInput
    ): Promise<SubjectToDataSet> {
        try {
            return await prisma.subjectToDataSet.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating subjectToDataSet', originalMsg);
        }
    },

    async createSubjectToDataSetRecords(
        data: Prisma.SubjectToDataSetCreateManyInput
    ): Promise<{ count: number }> {
        try {
            return await prisma.subjectToDataSet.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating subjectToDataSet records', originalMsg);
        }
    },
};
