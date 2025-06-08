import type { Prisma, SubGroup } from '@prisma/client';
import { AppError, InternalServerError, NotFoundError } from '../errors/AppError.ts';
import { SubgroupRepo } from '../repos/subgroupRepo.ts';
import type { FlatSubGroupCreateInput } from '../types/InsertQueryInputTypes.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { SubGroupArraySchema, SubGroupSchema } from '../validations/subGroup.schema.ts';

export const SubgroupService = {
    async getSubgroups() {
        const response = await tryCatch({
            tryFn: async () => {
                return SubgroupRepo.getAllSubgroups();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubgroupService getSubgroups',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No subgroups found. DB has likely not been seeded.');
        }

        return response;
    },

    async getSubgroupById(id: number) {
        const subgroup = await tryCatch({
            tryFn: () => SubgroupRepo.getSubgroupById(id),
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubgroupService getSubgroupsById',
                    error
                );
            },
        });

        if (!subgroup) {
            throw new NotFoundError(`Subgroup with ID ${id} not found`);
        }

        return subgroup;
    },

    async createSubGroup(input: FlatSubGroupCreateInput): Promise<SubGroup> {
        SubGroupSchema.parse(input);

        const response = await tryCatch({
            tryFn: async () => {
                return SubgroupRepo.createSubGroup(input);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubGroupService createSubGroup',
                    error
                );
            },
        });
        return response;
    },

    async createSubGroups(input: Prisma.SubGroupCreateManyInput[]) {
        SubGroupArraySchema.parse(input);

        const response = await tryCatch({
            tryFn: async () => {
                return SubgroupRepo.createSubGroups(input);
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
