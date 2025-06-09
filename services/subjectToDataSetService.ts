import type { DataSet, Prisma, Subject, SubjectToDataSet } from '@prisma/client';
import { subjectList } from '../constants/SubjectList.ts';
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
import { generateDataSetPivotInput } from '../utils/pivotHelpers.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { SubjectToDataSetSchema } from '../validations/subjectToDataSet.schema.ts';

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

    async createSubjectToDataSet(
        input: FlatSubjectToDataSetCreateInput
    ): Promise<SubjectToDataSet> {
        SubjectToDataSetSchema.parse(input);

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

        // Make sure the record doesn't already exist
        const subjectToDataSetExists = await tryCatch({
            tryFn: async () => {
                return SubjectToDataSetRepo.getBySubjectIdAndDataSetId(subjectId, dataSetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubjectToDataSetService getBySubjectIdAndDataSetId',
                    error
                );
            },
        });

        if (subjectToDataSetExists) {
            console.log(
                `SubjectToDataSet with subjectId ${subjectId} and dataSetId ${dataSetId} already exists.\n Skipping create and returning existing...`
            );
            return subjectToDataSetExists;
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

    async createSubjectToDataSetRecords(
        dataSets: DataSet[],
        subjects: Subject[]
    ): Promise<SubjectToDataSet[]> {
        const input = generateDataSetPivotInput<Prisma.SubjectToDataSetCreateManyInput>(
            dataSets,
            subjects,
            subjectList,
            'subjectId'
        );

        const res = [];
        for (const entry of input) {
            const response = await this.createSubjectToDataSet(entry);
            res.push(response);
        }
        return res;
    },
};
