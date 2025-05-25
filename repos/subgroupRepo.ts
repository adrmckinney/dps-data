import { DBError } from '@/errors/AppError.ts';
import { getOriginalErrorMessage } from '@/errors/errorHelpers.ts';
import type { SubGroup } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

export const SubgroupRepo = {
    async getSubgroupByAbbreviation(abbr: string): Promise<SubGroup | null> {
        return await prisma.subGroup.findUnique({ where: { abbreviation: abbr } });
    },
    async getAllSubgroups(): Promise<SubGroup[]> {
        try {
            return prisma.subGroup.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all subgroups', originalMsg);
        }
    },
    async getSubgroupById(id: number): Promise<SubGroup | null> {
        try {
            return prisma.subGroup.findUnique({ where: { id } });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(`DB error finding subgroup ${id}`, originalMsg);
        }
    },
};
