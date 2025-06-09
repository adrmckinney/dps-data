import type { DataSet, Level, LevelToDataSet, Prisma } from '@prisma/client';
import type { Level as ConstLevelType } from '../constants/LevelList.ts';
import { levels as ls } from '../constants/LevelList.ts';
import {
    AppError,
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from '../errors/AppError.ts';
import { DataSetRepo } from '../repos/dataSetRepo.ts';
import { LevelRepo } from '../repos/levelRepo.ts';
import { LevelToDataSetRepo } from '../repos/levelToDataSetRepo.ts';
import type { FlatLevelToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';
import { generateDataSetPivotInput } from '../utils/pivotHelpers.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { LevelToDataSetSchema } from '../validations/levelToDataSet.schema.ts';

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

    async createLevelToDataSet(input: FlatLevelToDataSetCreateInput): Promise<LevelToDataSet> {
        LevelToDataSetSchema.parse(input);

        const levelId = input?.levelId;
        const dataSetId = input?.dataSetId;

        if (!levelId || !dataSetId) {
            throw new BadRequestError(
                `Missing levelId ${levelId} or dataSetId ${dataSetId} in input`
            );
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

        // Make sure the record doesn't already exist
        const levelToDataSetExists = await tryCatch({
            tryFn: async () => {
                return LevelToDataSetRepo.getByLevelIdAndDataSetId(levelId, dataSetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in LevelToDataSetService getByLevelIdAndDataSetId',
                    error
                );
            },
        });

        if (levelToDataSetExists) {
            console.log(
                `LevelToDataSet with levelId ${levelId} and dataSetId ${dataSetId} already exists.\n Skipping create and returning existing...`
            );
            return levelToDataSetExists;
        }

        const response = await tryCatch({
            tryFn: async () => {
                return LevelToDataSetRepo.createLevelToDataSetRecord(input);
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

    async createLevelToDataSetRecords(
        dataSets: DataSet[],
        levels: Level[]
    ): Promise<LevelToDataSet[]> {
        const constLevels: ConstLevelType[] = Object.values(ls);
        const input = generateDataSetPivotInput<Prisma.LevelToDataSetCreateManyInput>(
            dataSets,
            levels,
            constLevels,
            'levelId'
        );

        const res = [];
        for (const entry of input) {
            const response = await this.createLevelToDataSet(entry);
            res.push(response);
        }
        return res;
    },
};
