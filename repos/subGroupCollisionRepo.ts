import type { Prisma, SubGroupCollision } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';
import type { FlatSubGroupCollisionCreateInput } from '../types/InsertQueryInputTypes.ts';

export const SubGroupCollisionRepo = {
    async getAllSubGroupCollisionRecords(): Promise<SubGroupCollision[]> {
        try {
            return prisma.subGroupCollision.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all subGroupCollision records', originalMsg);
        }
    },

    async getBySourceIdAndTargetId(
        sourceId: number,
        targetId: number
    ): Promise<SubGroupCollision | null> {
        try {
            return prisma.subGroupCollision.findUnique({
                where: { sourceId_targetId: { sourceId, targetId } },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(
                'DB error fetching subGroupCollision by source and target IDS',
                originalMsg
            );
        }
    },

    async getComboTypeSubGroupCollisions(): Promise<SubGroupCollision[]> {
        try {
            return prisma.subGroupCollision.findMany({
                where: {
                    source: {
                        typeId: 4,
                    },
                },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching comboTypeSubGroupCollisions', originalMsg);
        }
    },

    async createSubGroupCollisionRecord(
        data: FlatSubGroupCollisionCreateInput
    ): Promise<SubGroupCollision> {
        try {
            return await prisma.subGroupCollision.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating subGroupCollision', originalMsg);
        }
    },

    async createSubGroupCollisionRecords(
        data: Prisma.SubGroupCollisionCreateManyInput
    ): Promise<{ count: number }> {
        try {
            return await prisma.subGroupCollision.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating subGroupCollision records', originalMsg);
        }
    },
};
