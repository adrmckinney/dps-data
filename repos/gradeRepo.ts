import type { Grade } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

export const GradeRepo = {
    async getGradeByAbbreviation(abbr: string): Promise<Grade | null> {
        return await prisma.grade.findUnique({ where: { abbreviation: abbr } });
    },
    async getAllGrades(): Promise<Grade[]> {
        return prisma.grade.findMany();
    },
};
