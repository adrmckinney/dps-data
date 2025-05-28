import { DBError } from '@/errors/AppError.ts';
import { getOriginalErrorMessage } from '@/errors/errorHelpers.ts';
import type { Discipline } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

export const DisciplineRepo = {
    async getAllDisciplines(): Promise<Discipline[]> {
        try {
            return prisma.discipline.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all disciplines', originalMsg);
        }
    },
};
