import type { DisciplineToDataSet, Prisma } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';
import type { FlatDisciplineToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';

export const DisciplineToDataSetRepo = {
    async getAllDisciplineToDataSetRecords(): Promise<DisciplineToDataSet[]> {
        try {
            return prisma.disciplineToDataSet.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all disciplineToDataSet records', originalMsg);
        }
    },

    async getByDisciplineIdAndDataSetId(
        disciplineId: number,
        dataSetId: number
    ): Promise<DisciplineToDataSet | null> {
        try {
            return prisma.disciplineToDataSet.findUnique({
                where: { disciplineId_dataSetId: { disciplineId, dataSetId } },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(
                'DB error fetching disciplineToDataSet by discipline and dataSet IDS',
                originalMsg
            );
        }
    },

    async createDisciplineToDataSetRecord(
        data: FlatDisciplineToDataSetCreateInput
    ): Promise<DisciplineToDataSet> {
        try {
            return await prisma.disciplineToDataSet.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating disciplineToDataSet', originalMsg);
        }
    },

    async createDisciplineToDataSetRecords(
        data: Prisma.DisciplineToDataSetCreateManyInput
    ): Promise<{ count: number }> {
        try {
            return await prisma.disciplineToDataSet.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating disciplineToDataSet records', originalMsg);
        }
    },
};
