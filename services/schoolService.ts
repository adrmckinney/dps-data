import { AppError, InternalServerError, NotFoundError } from '@/errors/AppError';
import { SchoolRepo } from '@/repos/schoolRepo';
import { tryCatch } from '@/utils/tryCatch';

export const SchoolService = {
    async getSchools() {
        const response = await tryCatch({
            tryFn: async () => {
                return SchoolRepo.getAllSchools();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SchoolsService getSchools',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No schools found. DB has likely not been seeded.');
        }

        return response;
    },
};
