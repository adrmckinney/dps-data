import { withApiErrorHandling } from '@/errors/handleApiError';
import { PopulationService } from '@/services/populationService/populationService';
import { NextResponse } from 'next/server';

export const POST = withApiErrorHandling(async (req: Request) => {
    const payload = await req.json();
    const data = await PopulationService.getFilteredGradePopulation(payload);
    return NextResponse.json(data);
});
