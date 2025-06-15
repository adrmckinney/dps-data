import type { Prisma, SubGroup } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';
import type { FlatSubGroupCreateInput } from '../types/InsertQueryInputTypes.ts';

export const SubgroupRepo = {
    async getSubgroupByAbbreviation(abbr: string): Promise<SubGroup | null> {
        return await prisma.subGroup.findUnique({ where: { abbreviation: abbr } });
    },
    async getAllSubgroups(): Promise<SubGroup[]> {
        try {
            return prisma.subGroup.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all subGroups', originalMsg);
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

    async getSubgroupsByIds(ids: number[]): Promise<SubGroup[] | null> {
        try {
            return prisma.subGroup.findMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(`DB error finding subgroups ${ids}`, originalMsg);
        }
    },

    async createSubGroup(data: FlatSubGroupCreateInput): Promise<SubGroup> {
        try {
            return await prisma.subGroup.create({ data });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating subGroup', originalMsg);
        }
    },

    async createSubGroups(data: Prisma.SubGroupCreateManyInput[]): Promise<{ count: number }> {
        try {
            return await prisma.subGroup.createMany({ data, skipDuplicates: true });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error creating subGroups', originalMsg);
        }
    },
};
