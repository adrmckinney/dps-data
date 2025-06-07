import type { Year } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { AppError, InternalServerError, NotFoundError } from '../errors/AppError.ts';
import { YearRepo } from '../repos/yearRepo.ts';
import { tryCatch } from '../utils/tryCatch.ts';
import { YearArraySchema, YearSchema } from '../validations/year.schema.ts';

export const YearService = {
    async getYears() {
        const response = await tryCatch({
            tryFn: async () => {
                return YearRepo.getAllYears();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError('Unexpected error in YearService getYears', error);
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No years found. DB has likely not been seeded.');
        }

        return response;
    },

    async createYear(yearInput: Prisma.YearCreateInput): Promise<Year> {
        YearSchema.parse(yearInput);

        const response = await tryCatch({
            tryFn: async () => {
                return YearRepo.createYear(yearInput);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError('Unexpected error in YearService createYear', error);
            },
        });
        return response;
    },

    async createYears(yearInput: Prisma.YearCreateManyInput[]) {
        YearArraySchema.parse(yearInput);

        const response = await tryCatch({
            tryFn: async () => {
                return YearRepo.createYears(yearInput);
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError('Unexpected error in YearService createYears', error);
            },
        });
        return response;
    },
};
