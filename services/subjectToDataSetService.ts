import type { SubjectToDataSet } from '@prisma/client';
import {
    AppError,
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from '../errors/AppError.ts';
import { DataSetRepo } from '../repos/dataSetRepo.ts';
import { SubjectRepo } from '../repos/subjectRepo.ts';
import { SubjectToDataSetRepo } from '../repos/subjectToDataSetRepo.ts';
import type { FlatSubjectToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { DisciplineToDataSetSchema } from '../validations/disciplineToDataSet.schema.ts';

export const SubjectToDataSetService = {
    async getSubjectToDataSetRecords(): Promise<SubjectToDataSet[]> {
        const response = await tryCatch({
            tryFn: async () => {
                return SubjectToDataSetRepo.getAllSubjectToDataSetRecords();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubjectToDataSetService getSubjectToDataSetRecords',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('SubjectToDataSets not found. DB has likely not been seeded.');
        }

        return response;
    },

    async getSubjectToDataSetBySubGroupIdAndDataSetId(
        subjectId: number,
        dataSetId: number
    ): Promise<SubjectToDataSet> {
        const response = await tryCatch({
            tryFn: async () => {
                return SubjectToDataSetRepo.getBySubjectIdAndDataSetId(subjectId, dataSetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubjectToDataSetService getSubjectToDataSetRecords',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(
                `SubjectToDataSets not found for subjectId ${subjectId} and dataSetId ${dataSetId}.`
            );
        }

        return response;
    },

    async createDisciplineToDataSet(
        input: FlatSubjectToDataSetCreateInput
    ): Promise<SubjectToDataSet> {
        DisciplineToDataSetSchema.parse(input);

        const subjectId = input?.subjectId;
        const dataSetId = input?.dataSetId;

        if (!subjectId || !dataSetId) {
            throw new BadRequestError(
                `Missing subjectId ${subjectId} or dataSetId ${dataSetId} in input`
            );
        }

        const [subject, dataSet] = await Promise.all([
            SubjectRepo.getById(subjectId),
            DataSetRepo.getDataSetById(dataSetId),
        ]);

        if (!subject) {
            throw new NotFoundError(`Subject with ID ${subjectId} not found`);
        }

        if (!dataSet) {
            throw new NotFoundError(`DataSet with ID ${dataSetId} not found`);
        }

        const response = await tryCatch({
            tryFn: async () => {
                return SubjectToDataSetRepo.createSubjectToDataSetRecord(input);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubjectToDataSetService createSubjectToDataSet',
                    error
                );
            },
        });
        return response;
    },
};
