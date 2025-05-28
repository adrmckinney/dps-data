import type { School } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';

export const SchoolRepo = {
    async getSchoolByCode(code: string | number): Promise<School | null> {
        try {
            const codeInt = typeof code === 'string' ? parseInt(code) : code;

            return await prisma.school.findUnique({
                where: { code: codeInt },
            });
        } catch (error) {
            throw new DBError(`Failed to fetch school by code "${code}"`, error);
        }
    },
    async getAllSchools(): Promise<School[]> {
        try {
            return prisma.school.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all schools', originalMsg);
        }
    },
};
