import { AppError, InternalServerError, NotFoundError } from '../errors/AppError.ts';
import { GradeRepo } from '../repos/gradeRepo.ts';
import { tryCatch } from '../utils/tryCatch.ts';

export const GradeService = {
    async getGrades() {
        const response = await tryCatch({
            tryFn: async () => {
                return GradeRepo.getAllGrades();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError('Unexpected error in GradesService getGrades', error);
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No grades found. DB has likely not been seeded.');
        }

        return response;
    },
};
