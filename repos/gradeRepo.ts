import type { Grade } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';

export const GradeRepo = {
    async getGradeByAbbreviation(abbr: string): Promise<Grade | null> {
        return await prisma.grade.findUnique({ where: { abbreviation: abbr } });
    },

    async getAllGrades(): Promise<Grade[]> {
        try {
            return prisma.grade.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all grades', originalMsg);
        }
    },

    async getById(id: number): Promise<Grade | null> {
        try {
            return prisma.grade.findUnique({ where: { id } });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(`DB error fetching grade by ID ${id}`, originalMsg);
        }
    },
};
