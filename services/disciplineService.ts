import { AppError, InternalServerError, NotFoundError } from '../errors/AppError.ts';
import { DisciplineRepo } from '../repos/disciplineRepo.ts';
import { tryCatch } from '../utils/tryCatch.ts';

export const DisciplineService = {
    async getDisciplines() {
        const response = await tryCatch({
            tryFn: async () => {
                return DisciplineRepo.getAllDisciplines();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DisciplineService getDisciplines',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No disciplines found. DB has likely not been seeded.');
        }

        return response;
    },
};
