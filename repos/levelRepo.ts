import { DBError } from '@/errors/AppError.ts';
import { getOriginalErrorMessage } from '@/errors/errorHelpers.ts';
import type { Level } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

export const LevelRepo = {
    async getAllLevels(): Promise<Level[]> {
        try {
            return prisma.level.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all levels', originalMsg);
        }
    },

    async getById(id: number): Promise<Level | null> {
        try {
            return prisma.level.findUnique({ where: { id } });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(`DB error fetching level by ID ${id}`, originalMsg);
        }
    },
};
