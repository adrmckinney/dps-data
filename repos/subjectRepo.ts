import { DBError } from '@/errors/AppError.ts';
import { getOriginalErrorMessage } from '@/errors/errorHelpers.ts';
import type { Subject } from '@prisma/client';
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
};
