import { AppError, InternalServerError, NotFoundError } from '../errors/AppError.ts';
import { LevelRepo } from '../repos/levelRepo.ts';
import { tryCatch } from '../utils/tryCatch.ts';

export const LevelService = {
    async getLevels() {
        const response = await tryCatch({
            tryFn: async () => {
                return LevelRepo.getAllLevels();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError('Unexpected error in LevelService getLevels', error);
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No levels found. DB has likely not been seeded.');
        }

        return response;
    },
};
