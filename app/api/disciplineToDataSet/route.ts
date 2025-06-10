import { withApiErrorHandling } from '@/errors/handleApiError';
import { DisciplineToDataSetService } from '@/services/disciplineToDataSetService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await DisciplineToDataSetService.getDisciplineToDataSetRecords();
    return NextResponse.json(data);
});
