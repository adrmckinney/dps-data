import type { SubGroup } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

export const SubgroupRepo = {
    async getSubgroupByAbbreviation(abbr: string): Promise<SubGroup | null> {
        return await prisma.subGroup.findUnique({ where: { abbreviation: abbr } });
    },
    async getAllSubgroups(): Promise<SubGroup[]> {
        return prisma.subGroup.findMany();
    },
};
