import type { DataSet } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { AppError, InternalServerError, NotFoundError } from '../errors/AppError.ts';
import { DataSetRepo } from '../repos/dataSetRepo.ts';
import type { DataSetKeys } from '../types/dataSetKeys.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { DataSetArraySchema, DataSetSchema } from '../validations/dataSet.schema.ts';

export const DataSetService = {
    async getDataSets(): Promise<DataSet[]> {
        const response = await tryCatch({
            tryFn: async () => {
                return DataSetRepo.getAllDataSets();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSetService getDataSets',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('DataSets not found. DB has likely not been seeded.');
        }

        return response;
    },

    async getDataSetById(id: number): Promise<DataSet> {
        const response = await tryCatch({
            tryFn: async () => {
                return DataSetRepo.getDataSetById(id);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSetService getDataSetById',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(`DataSet ID ${id} not found.`);
        }

        return response;
    },

    async getDataSetByKey(key: DataSetKeys): Promise<DataSet> {
        const response = await tryCatch({
            tryFn: async () => {
                return DataSetRepo.getDataSetByKey(key);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSetService getDataSetByKey',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(`DataSet key ${key} not found.`);
        }

        return response;
    },

    async createDataSet(dataSetInput: Prisma.DataSetCreateInput): Promise<DataSet> {
        DataSetSchema.parse(dataSetInput);

        const response = await tryCatch({
            tryFn: async () => {
                return DataSetRepo.createDataSet(dataSetInput);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSetService createDataSet',
                    error
                );
            },
        });
        return response;
    },

    async createDataSets(dataSetInput: Prisma.DataSetCreateManyInput[]) {
        DataSetArraySchema.parse(dataSetInput);

        const response = await tryCatch({
            tryFn: async () => {
                return DataSetRepo.createDataSets(dataSetInput);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSetService createDataSets',
                    error
                );
            },
        });
        return response;
    },
};
