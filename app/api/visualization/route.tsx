import { withApiErrorHandling } from '@/errors/handleApiError';
import { VisualizationService } from '@/services/visualizationService';
import { NextResponse } from 'next/server';

export const POST = withApiErrorHandling(async (req: Request) => {
    const payload = await req.json();
    const data = await VisualizationService.getVisualizeData(payload);
    return NextResponse.json(data);
});
