import { DataSetRepo } from '@/repos/dataSetRepo.ts';
import { LevelRepo } from '@/repos/levelRepo.ts';
import { LevelToDataSetSchema } from '@/validations/levelToDataSet.schema.ts';
import type { LevelToDataSet, Prisma } from '@prisma/client';
import {
    AppError,
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from '../errors/AppError.ts';
import { LevelToDataSetRepo } from '../repos/levelToDataSetRepo.ts';
import { tryCatch } from '../utils/tryCatch.ts';

export const LevelToDataSetService = {
    async getLevelToDataSetRecords(): Promise<LevelToDataSet[]> {
        const response = await tryCatch({
            tryFn: async () => {
                return LevelToDataSetRepo.getAllLevelToDataSetRecords();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in LevelToDataSetService getLevelToDataSetRecords',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('LevelToDataSets not found. DB has likely not been seeded.');
        }

        return response;
    },

    async getLevelToDataSetByLevelIdAndDataSetId(
        levelId: number,
        dataSetId: number
    ): Promise<LevelToDataSet> {
        const response = await tryCatch({
            tryFn: async () => {
                return LevelToDataSetRepo.getByLevelIdAndDataSetId(levelId, dataSetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in LevelToDataSetService getLevelToDataSetRecords',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(
                `LevelToDataSets not found for levelId ${levelId} and dataSetId ${dataSetId}.`
            );
        }

        return response;
    },

    async createLevelToDataSet(
        dataSetInput: Prisma.LevelToDataSetCreateInput
    ): Promise<LevelToDataSet> {
        LevelToDataSetSchema.parse(dataSetInput);

        const levelId = dataSetInput.level?.connect?.id;
        const dataSetId = dataSetInput.dataSet?.connect?.id;

        if (!levelId || !dataSetId) {
            throw new BadRequestError('Missing levelId or dataSetId in input');
        }

        const [level, dataSet] = await Promise.all([
            LevelRepo.getById(levelId),
            DataSetRepo.getDataSetById(dataSetId),
        ]);

        if (!level) {
            throw new NotFoundError(`Level with ID ${levelId} not found`);
        }

        if (!dataSet) {
            throw new NotFoundError(`DataSet with ID ${dataSetId} not found`);
        }

        const response = await tryCatch({
            tryFn: async () => {
                return LevelToDataSetRepo.createLevelToDataSetRecord(dataSetInput);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in LevelToDataSetService createLevelToDataSet',
                    error
                );
            },
        });
        return response;
    },
};
