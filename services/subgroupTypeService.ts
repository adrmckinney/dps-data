import { AppError, InternalServerError, NotFoundError } from '@/errors/AppError';
import { SubgroupTypeRepo } from '@/repos/subgroupTypeRepo';
import { tryCatch } from '@/utils/tryCatch';

export const SubgroupTypeService = {
    async getSubgroupTypes() {
        const response = await tryCatch({
            tryFn: async () => {
                return SubgroupTypeRepo.getAllSubgroupTypes();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubgroupTypeService getSubgroups',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No subgroups found. DB has likely not been seeded.');
        }

        return response;
    },
};
