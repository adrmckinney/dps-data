import { withApiErrorHandling } from '@/errors/handleApiError';
import { SubjectToDataSetService } from '@/services/subjectToDataSetService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await SubjectToDataSetService.getSubjectToDataSetRecords();
    return NextResponse.json(data);
});
