import { withApiErrorHandling } from '@/errors/handleApiError';
import { SubGroupToDataSetService } from '@/services/subGroupToDataSetService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await SubGroupToDataSetService.getSubgroupToDataSetRecords();
    return NextResponse.json(data);
});
