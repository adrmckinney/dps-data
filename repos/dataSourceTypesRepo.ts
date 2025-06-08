import type { DataSourceType } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';

export const DataSourceTypesRepo = {
    async getAllDataSourceTypes(): Promise<DataSourceType[]> {
        try {
            return prisma.dataSourceType.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all data source types', originalMsg);
        }
    },
};
