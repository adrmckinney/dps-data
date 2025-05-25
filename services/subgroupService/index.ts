import { AppError, InternalServerError, NotFoundError } from '@/errors/AppError';
import { SubgroupRepo } from '@/repos/subgroupRepo';
import { tryCatch } from '@/utils/tryCatch';

export const SubgroupService = {
    async getSubgroups() {
        const response = await tryCatch({
            tryFn: async () => {
                return SubgroupRepo.getAllSubgroups();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubgroupService getSubgroups',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No subgroups found. DB has likely not been seeded.');
        }

        return response;
    },

    async getSubgroupById(id: number) {
        const subgroup = await tryCatch({
            tryFn: () => SubgroupRepo.getSubgroupById(id),
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in SubgroupService getSubgroupsById',
                    error
                );
            },
        });

        if (!subgroup) {
            throw new NotFoundError(`Subgroup with ID ${id} not found`);
        }

        return subgroup;
    },
};
