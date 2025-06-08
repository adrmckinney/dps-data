import type { DataSource } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';

export const DataSourceRepo = {
    async insertOrFetch(dataSource: Prisma.DataSourceCreateInput): Promise<DataSource> {
        try {
            return await prisma.dataSource.create({ data: dataSource });
        } catch (error: unknown) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                return (await prisma.dataSource.findUnique({
                    where: { url: dataSource.url },
                })) as DataSource;
            }

            throw new DBError('Failed to create PDF source', error);
        }
    },

    async getById(id: number): Promise<DataSource | null> {
        try {
            return prisma.dataSource.findUnique({ where: { id } });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(`DB error fetching dataSource by ID ${id}`, originalMsg);
        }
    },
};
