import { withApiErrorHandling } from '@/errors/handleApiError';
import { SubgroupTypeService } from '@/services/subgroupTypeService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await SubgroupTypeService.getSubgroupTypes();
    return NextResponse.json(data);
});
