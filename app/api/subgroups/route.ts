import { withApiErrorHandling } from '@/errors/handleApiError';
import { SubgroupService } from '@/services/subgroupService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await SubgroupService.getSubgroups();
    return NextResponse.json(data);
});
