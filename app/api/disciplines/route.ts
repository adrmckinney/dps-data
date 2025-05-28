import { withApiErrorHandling } from '@/errors/handleApiError';
import { DisciplineService } from '@/services/disciplineService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await DisciplineService.getDisciplines();
    return NextResponse.json(data);
});
