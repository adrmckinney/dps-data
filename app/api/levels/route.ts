import { withApiErrorHandling } from '@/errors/handleApiError';
import { LevelService } from '@/services/levelService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await LevelService.getLevels();
    return NextResponse.json(data);
});
