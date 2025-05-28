import type { Year } from '@prisma/client';
import { DBError } from '../errors/AppError.ts';
import { getOriginalErrorMessage } from '../errors/errorHelpers.ts';
import { prisma } from '../lib/prisma.ts';

export const YearRepo = {
    async getYearBySchoolYear(schoolYear: string): Promise<Year | null> {
        const cleanedYear = schoolYear.replace(/\s+/g, '');
        try {
            return await prisma.year.findUnique({ where: { schoolYear: cleanedYear } });
        } catch (error) {
            throw new DBError('Failed to fetch year by schoolYear', error);
        }
    },

    async getAllYears(): Promise<Year[]> {
        try {
            return prisma.year.findMany();
        } catch (error: unknown) {
            const originalMsg = getOriginalErrorMessage(error);
            throw new DBError('DB error fetching all years', originalMsg);
        }
    },
};
