import { withApiErrorHandling } from '@/errors/handleApiError';
import { SubjectService } from '@/services/subjectService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await SubjectService.getSubjects();
    return NextResponse.json(data);
});
