import type { DataSet, Prisma } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';
import type { DataSetKeys } from '../types/dataSetKeys.ts';

export const DataSetRepo = {
    async getAllDataSets(): Promise<DataSet[]> {
        try {
            return prisma.dataSet.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all data sets', originalMsg);
        }
    },

    async getDataSetById(id: number): Promise<DataSet | null> {
        try {
            return prisma.dataSet.findUnique({ where: { id } });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(`DB error fetching data set by ID ${id}`, originalMsg);
        }
    },

    async getDataSetByKey(key: DataSetKeys): Promise<DataSet | null> {
        try {
            return prisma.dataSet.findUnique({ where: { key } });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching data set by key', originalMsg);
        }
    },

    async createDataSet(data: Prisma.DataSetCreateInput): Promise<DataSet> {
        try {
            return await prisma.dataSet.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating dataSet', originalMsg);
        }
    },

    async createDataSets(data: Prisma.DataSetCreateManyInput[]): Promise<{ count: number }> {
        try {
            return await prisma.dataSet.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating dataSets', originalMsg);
        }
    },
};
