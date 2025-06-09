import type { DataSet, Prisma, SubGroup, SubGroupToDataSet } from '@prisma/client';
import { subGroupsList } from '../constants/SubGroupList.ts';
import {
    AppError,
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from '../errors/AppError.ts';
import { DataSetRepo } from '../repos/dataSetRepo.ts';
import { SubgroupRepo } from '../repos/subgroupRepo.ts';
import { subGroupToDataSetRepo } from '../repos/subGroupToDataSetRepo.ts';
import type { FlatSubGroupToDataSetCreateInput } from '../types/InsertQueryInputTypes.ts';
import { generateDataSetPivotInput } from '../utils/pivotHelpers.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { SubGroupToDataSetSchema } from '../validations/subGroupToDataSet.schema.ts';

export const SubGroupToDataSetService = {
    async getSubgroupToDataSetRecords(): Promise<SubGroupToDataSet[]> {
        const response = await tryCatch({
            tryFn: async () => {
                return subGroupToDataSetRepo.getAllSubGroupToDataSetRecords();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubGroupToDataSetService getSubGroupToDataSetRecords',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('SubGroupToDataSets not found. DB has likely not been seeded.');
        }

        return response;
    },

    async getSubGroupToDataSetBySubGroupIdAndDataSetId(
        subGroupId: number,
        dataSetId: number
    ): Promise<SubGroupToDataSet> {
        const response = await tryCatch({
            tryFn: async () => {
                return subGroupToDataSetRepo.getBySubGroupIdAndDataSetId(subGroupId, dataSetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubGroupToDataSetService getSubgroupToDataSetRecords',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(
                `SubGroupToDataSets not found for subGroupId ${subGroupId} and dataSetId ${dataSetId}.`
            );
        }

        return response;
    },

    async createSubGroupToDataSet(
        input: FlatSubGroupToDataSetCreateInput
    ): Promise<SubGroupToDataSet> {
        SubGroupToDataSetSchema.parse(input);

        const subGroupId = input?.subGroupId;
        const dataSetId = input?.dataSetId;

        if (!subGroupId || !dataSetId) {
            throw new BadRequestError(
                `Missing subGroupId ${subGroupId} or dataSetId ${dataSetId} in input`
            );
        }

        const [subGroup, dataSet] = await Promise.all([
            SubgroupRepo.getSubgroupById(subGroupId),
            DataSetRepo.getDataSetById(dataSetId),
        ]);

        if (!subGroup) {
            throw new NotFoundError(`SubGroup with ID ${subGroupId} not found`);
        }

        if (!dataSet) {
            throw new NotFoundError(`DataSet with ID ${dataSetId} not found`);
        }

        // Make sure the record doesn't already exist
        const subGroupToDataSetExists = await tryCatch({
            tryFn: async () => {
                return subGroupToDataSetRepo.getBySubGroupIdAndDataSetId(subGroupId, dataSetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubGroupToDataSetService getBySubGroupIdAndDataSetId',
                    error
                );
            },
        });

        if (subGroupToDataSetExists) {
            console.log(
                `SubGroupToDataSetService with subGroupId ${subGroupId} and dataSetId ${dataSetId} already exists.\n Skipping create and returning existing...`
            );
            return subGroupToDataSetExists;
        }

        const response = await tryCatch({
            tryFn: async () => {
                return subGroupToDataSetRepo.createSubGroupToDataSetRecord(input);
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

    async createSubGroupToDataSetRecords(
        dataSets: DataSet[],
        subGroups: SubGroup[]
    ): Promise<SubGroupToDataSet[]> {
        const input = generateDataSetPivotInput<Prisma.SubGroupToDataSetCreateManyInput>(
            dataSets,
            subGroups,
            subGroupsList,
            'subGroupId'
        );

        const res = [];
        for (const entry of input) {
            const response = await this.createSubGroupToDataSet(entry);
            res.push(response);
        }
        return res;
    },
};
