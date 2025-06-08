import type { Discipline } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
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

    async getById(id: number): Promise<Discipline | null> {
        try {
            return prisma.discipline.findUnique({ where: { id } });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(`DB error fetching discipline by ID ${id}`, originalMsg);
        }
    },
};
