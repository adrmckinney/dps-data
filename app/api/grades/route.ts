import { withApiErrorHandling } from '@/errors/handleApiError';
import { GradeService } from '@/services/gradeService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await GradeService.getGrades();
    return NextResponse.json(data);
});
