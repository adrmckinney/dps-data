import { withApiErrorHandling } from '@/errors/handleApiError';
import { SchoolService } from '@/services/schoolService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await SchoolService.getSchools();
    return NextResponse.json(data);
});
