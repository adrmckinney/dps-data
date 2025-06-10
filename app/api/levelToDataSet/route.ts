import { withApiErrorHandling } from '@/errors/handleApiError';
import { LevelToDataSetService } from '@/services/levelToDataSetService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await LevelToDataSetService.getLevelToDataSetRecords();
    return NextResponse.json(data);
});
