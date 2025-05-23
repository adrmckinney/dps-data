import type { DataSource } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { DBError } from '../errors/DBError.ts';
import { prisma } from '../lib/prisma.ts';

export const DataSourceRepo = {
    async insert(dataSource: Prisma.DataSourceCreateInput): Promise<DataSource> {
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
};
