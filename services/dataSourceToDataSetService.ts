import type { DataSourceToDataSet, Prisma } from '@prisma/client';
import {
    AppError,
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from '../errors/AppError.ts';
import { DataSetRepo } from '../repos/dataSetRepo.ts';
import { DataSourceRepo } from '../repos/dataSourceRepo.ts';
import { DataSourceToDataSetRepo } from '../repos/dataSourceToDataSetRepo.ts';
import type { FlatDataSourceToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { DataSourceToDataSetSchema } from '../validations/dataSourceToDataSet.schema.ts';

export const DataSourceToDataSetService = {
    async getDataSourceToDataSetRecords(): Promise<DataSourceToDataSet[]> {
        const response = await tryCatch({
            tryFn: async () => {
                return DataSourceToDataSetRepo.getAllDataSourceToDataSetRecords();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSourceToDataSetService getDataSourceToDataSetRecords',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError(
                'DataSourceToDataSets not found. DB has likely not been seeded.'
            );
        }

        return response;
    },

    async getDataSourceToDataSetByDataSourceIdAndDataSetId(
        dataSourceId: number,
        dataSetId: number
    ): Promise<DataSourceToDataSet> {
        const response = await tryCatch({
            tryFn: async () => {
                return DataSourceToDataSetRepo.getByDataSourceIdAndDataSetId(
                    dataSourceId,
                    dataSetId
                );
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSourceToDataSetService getDataSourceToDataSetByDataSourceIdAndDataSetId',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(
                `DataSourceToDataSets not found for dataSourceId ${dataSourceId} and dataSetId ${dataSetId}.`
            );
        }

        return response;
    },

    async createDataSourceToDataSet(
        input: FlatDataSourceToDataSetCreateInput
    ): Promise<DataSourceToDataSet> {
        DataSourceToDataSetSchema.parse(input);

        const dataSourceId = input?.dataSourceId;
        const dataSetId = input?.dataSetId;

        if (!dataSourceId || !dataSetId) {
            throw new BadRequestError(
                `Missing dataSourceId ${dataSourceId} or dataSetId ${dataSetId} in input`
            );
        }

        const [dataSource, dataSet] = await Promise.all([
            DataSourceRepo.getById(dataSourceId),
            DataSetRepo.getDataSetById(dataSetId),
        ]);

        if (!dataSource) {
            throw new NotFoundError(`DataSource with ID ${dataSourceId} not found`);
        }

        if (!dataSet) {
            throw new NotFoundError(`DataSet with ID ${dataSetId} not found`);
        }

        // Make sure the record doesn't already exist
        const dataSourceToDataSetExists = await tryCatch({
            tryFn: async () => {
                return DataSourceToDataSetRepo.getByDataSourceIdAndDataSetId(
                    dataSourceId,
                    dataSetId
                );
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSourceToDataSetService getByDataSourceIdAndDataSetId',
                    error
                );
            },
        });

        if (dataSourceToDataSetExists) {
            console.log(
                `DataSourceToDataSet with dataSourceId ${dataSourceId} and dataSetId ${dataSetId} already exists.\n Skipping create and returning existing...`
            );
            return dataSourceToDataSetExists;
        }

        const response = await tryCatch({
            tryFn: async () => {
                return DataSourceToDataSetRepo.createDataSourceToDataSetRecord(input);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSourceToDataSetService createDataSourceToDataSet',
                    error
                );
            },
        });
        return response;
    },

    async createDataSourceToDataSetRecords(
        input: Prisma.DataSourceToDataSetCreateManyInput[]
    ): Promise<DataSourceToDataSet[]> {
        const res = [];
        for (const entry of input) {
            const response = await this.createDataSourceToDataSet(entry);
            res.push(response);
        }
        return res;
    },
};
