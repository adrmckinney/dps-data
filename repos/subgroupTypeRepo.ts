import { DBError } from '@/errors/AppError.ts';
import { getOriginalErrorMessage } from '@/errors/errorHelpers.ts';
import type { SubGroupType } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

export const SubgroupTypeRepo = {
    async getAllSubgroupTypes(): Promise<SubGroupType[]> {
        try {
            return prisma.subGroupType.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all subjects', originalMsg);
        }
    },
};
