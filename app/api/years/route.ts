import { withApiErrorHandling } from '@/errors/handleApiError';
import { YearService } from '@/services/yearService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await YearService.getYears();
    return NextResponse.json(data);
});
