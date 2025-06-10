import { withApiErrorHandling } from '@/errors/handleApiError';
import { DataSourceToDataSetService } from '@/services/dataSourceToDataSetService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await DataSourceToDataSetService.getDataSourceToDataSetRecords();
    return NextResponse.json(data);
});
