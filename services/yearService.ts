import { AppError, InternalServerError, NotFoundError } from '@/errors/AppError';
import { YearRepo } from '@/repos/yearRepo';
import { tryCatch } from '@/utils/tryCatch';

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
};
