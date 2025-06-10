import { withApiErrorHandling } from '@/errors/handleApiError';
import { DataSetService } from '@/services/dataSetService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await DataSetService.getDataSets();
    return NextResponse.json(data);
});
