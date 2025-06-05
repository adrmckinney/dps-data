import { AppError, InternalServerError, NotFoundError } from '@/errors/AppError';
import { DisciplineRepo } from '@/repos/disciplineRepo';
import { QueryModifiers } from '@/types/queryModifiers';
import { tryCatch } from '@/utils/tryCatch';

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
    async getFilteredSubgroupData(filters: QueryModifiers) {
        console.log('filters in discipline Service', filters);
    },
    async getFilteredSchoolData(filters: QueryModifiers) {
        console.log('filters in discipline Service', filters);
    },
};
