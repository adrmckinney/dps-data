import type { Year } from '@prisma/client';
import { DBError } from '../errors/DBError.ts';
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
};
