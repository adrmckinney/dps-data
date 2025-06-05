import { AppError, InternalServerError, NotFoundError } from '@/errors/AppError';
import { DataSourceRepo } from '@/repos/dataSourceRepo';
import { tryCatch } from '@/utils/tryCatch';

export const DataSourceService = {
    async getDataSources() {
        const response = await tryCatch({
            tryFn: async () => {
                return DataSourceRepo.getAllDataSources();
            },
            catchFn: error => {
                if (error instanceof AppError) {
                    throw error;
                }
                throw new InternalServerError(
                    'Unexpected error in DataSourceService getDataSources',
                    error
                );
            },
        });

        if (response.length === 0) {
            throw new NotFoundError('No data sources found. DB has likely not been seeded.');
        }

        return response;
    },
};
