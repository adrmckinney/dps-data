import type { Prisma, SubGroup, SubGroupCollision } from '@prisma/client';
import { subGroupsList } from '../constants/SubGroupList.ts';
import {
    AppError,
    BadRequestError,
    InternalServerError,
    NotFoundError,
} from '../errors/AppError.ts';
import { SubGroupCollisionRepo } from '../repos/subGroupCollisionRepo.ts';
import { SubgroupRepo } from '../repos/subgroupRepo.ts';
import type { FlatSubGroupCollisionCreateInput } from '../types/InsertQueryInputTypes.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { SubGroupCollisionSchema } from '../validations/subGroupCollision.schema.ts';

export const SubGroupCollisionService = {
    async getSubGroupCollisionRecords(): Promise<SubGroupCollision[]> {
        const response = await tryCatch({
            tryFn: async () => {
                return SubGroupCollisionRepo.getAllSubGroupCollisionRecords();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubGroupCollisionService getSubGroupCollisionRecords',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('SubGroupCollision not found. DB has likely not been seeded.');
        }

        return response;
    },

    async getSubGroupCollisionBySourceIdAndTargetId(
        sourceId: number,
        targetId: number
    ): Promise<SubGroupCollision> {
        const response = await tryCatch({
            tryFn: async () => {
                return SubGroupCollisionRepo.getBySourceIdAndTargetId(sourceId, targetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubGroupCollisionService getSubGroupCollisionRecords',
                    error
                );
            },
        });

        if (!response) {
            throw new NotFoundError(
                `SubGroupCollision not found for sourceId ${sourceId} and targetId ${targetId}.`
            );
        }

        return response;
    },

    async createSubGroupCollision(
        input: FlatSubGroupCollisionCreateInput
    ): Promise<SubGroupCollision> {
        SubGroupCollisionSchema.parse(input);

        const sourceId = input?.sourceId;
        const targetId = input?.targetId;

        if (!sourceId || !targetId) {
            throw new BadRequestError(
                `Missing sourceId ${sourceId} or targetId ${targetId} in input`
            );
        }

        const [source, target] = await Promise.all([
            SubgroupRepo.getSubgroupById(sourceId),
            SubgroupRepo.getSubgroupById(targetId),
        ]);

        if (!source) {
            throw new NotFoundError(`Source with ID ${sourceId} not found`);
        }

        if (!target) {
            throw new NotFoundError(`Target with ID ${targetId} not found`);
        }

        // Make sure the record doesn't already exist
        const subGroupCollisionExists = await tryCatch({
            tryFn: async () => {
                return SubGroupCollisionRepo.getBySourceIdAndTargetId(sourceId, targetId);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in GradeToDataSetService getByGradeIdAndDataSetId',
                    error
                );
            },
        });

        if (subGroupCollisionExists) {
            console.log(
                `SubGroupCollision with sourceId ${sourceId} and targetId ${targetId} already exists.\n Skipping create and returning existing...`
            );
            return subGroupCollisionExists;
        }

        const response = await tryCatch({
            tryFn: async () => {
                return SubGroupCollisionRepo.createSubGroupCollisionRecord(input);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubGroupCollisionService createSubGroupCollision',
                    error
                );
            },
        });
        return response;
    },

    async createSubGroupCollisionRecords(subGroupDB: SubGroup[]): Promise<SubGroupCollision[]> {
        const input: Prisma.SubGroupCollisionCreateManyInput[] = [];
        for (const sg of subGroupsList) {
            const source = subGroupDB.find(sgDB => sgDB.key === sg.key);
            if (!source) continue;

            for (const collision of sg.collisions) {
                const target = subGroupDB.find(sgDB => sgDB.key === collision);
                if (!target) continue;

                input.push({
                    sourceId: source.id,
                    targetId: target.id,
                });
            }
        }

        const res = [];
        for (const entry of input) {
            const response = await this.createSubGroupCollision(entry);
            res.push(response);
        }
        return res;
    },
};
