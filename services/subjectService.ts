import { AppError, InternalServerError, NotFoundError } from '../errors/AppError.ts';
import { SubjectRepo } from '../repos/subjectRepo.ts';
import { tryCatch } from '../utils/tryCatch.ts';

export const SubjectService = {
    async getSubjects() {
        const response = await tryCatch({
            tryFn: async () => {
                return SubjectRepo.getAllSubjects();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubjectService getSubjects',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No subjects found. DB has likely not been seeded.');
        }

        return response;
    },
};
