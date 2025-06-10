import { withApiErrorHandling } from '@/errors/handleApiError';
import { GradeToDataSetService } from '@/services/gradeToDataSetService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await GradeToDataSetService.getGradeToDataSetRecords();
    return NextResponse.json(data);
});
