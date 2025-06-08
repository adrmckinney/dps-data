import type { GradeToDataSet } from '@prisma/client';
import {
    AppError,
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from '../errors/AppError.ts';
import { DataSetRepo } from '../repos/dataSetRepo.ts';
import { GradeRepo } from '../repos/gradeRepo.ts';
import { GradeToDataSetRepo } from '../repos/gradeToDataSetRepo.ts';
import type { FlatGradeToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { GradeToDataSetSchema } from '../validations/gradeToDataSet.schema.ts';

export const GradeToDataSetService = {
    async getGradeToDataSetRecords(): Promise<GradeToDataSet[]> {
        const response = await tryCatch({
            tryFn: async () => {
                return GradeToDataSetRepo.getAllGradeToDataSetRecords();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in GradeToDataSetService getGradeToDataSetRecords',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('GradesToDataSets not found. DB has likely not been seeded.');
        }

        return response;
    },

    async getGradeToDataSetBySubGroupIdAndDataSetId(
        gradeId: number,
        dataSetId: number
    ): Promise<GradeToDataSet> {
        const response = await tryCatch({
            tryFn: async () => {
                return GradeToDataSetRepo.getByGradeIdAndDataSetId(gradeId, dataSetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in GradeToDataSetService getGradeToDataSetRecords',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(
                `GradeToDataSets not found for gradeId ${gradeId} and dataSetId ${dataSetId}.`
            );
        }

        return response;
    },

    async createGradeToDataSet(input: FlatGradeToDataSetCreateInput): Promise<GradeToDataSet> {
        GradeToDataSetSchema.parse(input);

        const gradeId = input?.gradeId;
        const dataSetId = input?.dataSetId;

        if (!gradeId || !dataSetId) {
            throw new BadRequestError(
                `Missing gradeId ${gradeId} or dataSetId ${dataSetId} in input`
            );
        }

        const [grade, dataSet] = await Promise.all([
            GradeRepo.getById(gradeId),
            DataSetRepo.getDataSetById(dataSetId),
        ]);

        if (!grade) {
            throw new NotFoundError(`Grade with ID ${gradeId} not found`);
        }

        if (!dataSet) {
            throw new NotFoundError(`DataSet with ID ${dataSetId} not found`);
        }

        const response = await tryCatch({
            tryFn: async () => {
                return GradeToDataSetRepo.createGradeToDataSetRecord(input);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in GradeToDataSetService createGradeToDataSet',
                    error
                );
            },
        });
        return response;
    },
};
