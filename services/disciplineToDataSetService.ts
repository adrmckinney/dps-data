import type { DataSet, Discipline, DisciplineToDataSet, Prisma } from '@prisma/client';
import { disciplines as disciplineList } from '../constants/DisciplineList.ts';
import {
    AppError,
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from '../errors/AppError.ts';
import { DataSetRepo } from '../repos/dataSetRepo.ts';
import { DisciplineRepo } from '../repos/disciplineRepo.ts';
import { DisciplineToDataSetRepo } from '../repos/disciplineToDataSetRepo.ts';
import type { FlatDisciplineToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';
import { generateDataSetPivotInput } from '../utils/pivotHelpers.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { DisciplineToDataSetSchema } from '../validations/disciplineToDataSet.schema.ts';

export const DisciplineToDataSetService = {
    async getDisciplineToDataSetRecords(): Promise<DisciplineToDataSet[]> {
        const response = await tryCatch({
            tryFn: async () => {
                return DisciplineToDataSetRepo.getAllDisciplineToDataSetRecords();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DisciplineToDataSetService getDisciplineToDataSetRecords',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError(
                'DisciplineToDataSets not found. DB has likely not been seeded.'
            );
        }

        return response;
    },

    async getDisciplineToDataSetBySubGroupIdAndDataSetId(
        disciplineId: number,
        dataSetId: number
    ): Promise<DisciplineToDataSet> {
        const response = await tryCatch({
            tryFn: async () => {
                return DisciplineToDataSetRepo.getByDisciplineIdAndDataSetId(
                    disciplineId,
                    dataSetId
                );
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DisciplineToDataSetService getDisciplineToDataSetRecords',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(
                `DisciplineToDataSets not found for disciplineId ${disciplineId} and dataSetId ${dataSetId}.`
            );
        }

        return response;
    },

    async createDisciplineToDataSet(
        input: FlatDisciplineToDataSetCreateInput
    ): Promise<DisciplineToDataSet> {
        DisciplineToDataSetSchema.parse(input);

        const disciplineId = input?.disciplineId;
        const dataSetId = input?.dataSetId;

        if (!disciplineId || !dataSetId) {
            throw new BadRequestError(
                `Missing disciplineId ${disciplineId} or dataSetId ${dataSetId} in input`
            );
        }

        const [discipline, dataSet] = await Promise.all([
            DisciplineRepo.getById(disciplineId),
            DataSetRepo.getDataSetById(dataSetId),
        ]);

        if (!discipline) {
            throw new NotFoundError(`Discipline with ID ${disciplineId} not found`);
        }

        if (!dataSet) {
            throw new NotFoundError(`DataSet with ID ${dataSetId} not found`);
        }

        // Make sure the record doesn't already exist
        const disciplineToDataSetExists = await tryCatch({
            tryFn: async () => {
                return DisciplineToDataSetRepo.getByDisciplineIdAndDataSetId(
                    disciplineId,
                    dataSetId
                );
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DisciplineToDataSetService getByDisciplineIdAndDataSetId',
                    error
                );
            },
        });

        if (disciplineToDataSetExists) {
            console.log(
                `DisciplineToDataSet with disciplineId ${disciplineId} and dataSetId ${dataSetId} already exists.\n Skipping create and returning existing...`
            );
            return disciplineToDataSetExists;
        }

        const response = await tryCatch({
            tryFn: async () => {
                return DisciplineToDataSetRepo.createDisciplineToDataSetRecord(input);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DisciplineToDataSetService createDisciplineToDataSet',
                    error
                );
            },
        });
        return response;
    },

    async createDisciplineToDataSetRecords(
        dataSets: DataSet[],
        disciplines: Discipline[]
    ): Promise<DisciplineToDataSet[]> {
        const input = generateDataSetPivotInput<Prisma.DisciplineToDataSetCreateManyInput>(
            dataSets,
            disciplines,
            Object.values(disciplineList),
            'disciplineId'
        );

        const res = [];
        for (const entry of input) {
            const response = await this.createDisciplineToDataSet(entry);
            res.push(response);
        }
        return res;
    },
};
