import type { DataSourceToDataSet, Prisma } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';
import type { FlatDataSourceToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';

export const DataSourceToDataSetRepo = {
    async getAllDataSourceToDataSetRecords(): Promise<DataSourceToDataSet[]> {
        try {
            return prisma.dataSourceToDataSet.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all dataSourceToDataSet records', originalMsg);
        }
    },

    async getByDataSourceIdAndDataSetId(
        dataSourceId: number,
        dataSetId: number
    ): Promise<DataSourceToDataSet | null> {
        try {
            return prisma.dataSourceToDataSet.findUnique({
                where: { dataSetId_dataSourceId: { dataSourceId, dataSetId } },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(
                'DB error fetching dataSourceToDataSet by dataSource and dataSet IDS',
                originalMsg
            );
        }
    },

    async createDataSourceToDataSetRecord(
        data: FlatDataSourceToDataSetCreateInput
    ): Promise<DataSourceToDataSet> {
        try {
            return await prisma.dataSourceToDataSet.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating dataSourceToDataSet', originalMsg);
        }
    },

    async createDataSourceToDataSetRecords(
        data: Prisma.DataSourceToDataSetCreateManyInput
    ): Promise<{ count: number }> {
        try {
            return await prisma.dataSourceToDataSet.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating dataSourceToDataSet records', originalMsg);
        }
    },
};
