import type { Subject } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';

export const SubjectRepo = {
    async getAllSubjects(): Promise<Subject[]> {
        try {
            return prisma.subject.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all subjects', originalMsg);
        }
    },

    async getById(id: number): Promise<Subject | null> {
        try {
            return prisma.subject.findUnique({ where: { id } });
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError(`DB error fetching subject by ID ${id}`, originalMsg);
        }
    },
};
