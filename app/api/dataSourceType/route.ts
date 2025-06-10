import { withApiErrorHandling } from '@/errors/handleApiError';
import { DataSourceTypesRepo } from '@/repos/dataSourceTypesRepo';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await DataSourceTypesRepo.getAllDataSourceTypes();
    return NextResponse.json(data);
});
