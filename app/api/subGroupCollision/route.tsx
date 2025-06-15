import { withApiErrorHandling } from '@/errors/handleApiError';
import { SubGroupCollisionService } from '@/services/subGroupCollisionService';
import { NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async () => {
    const data = await SubGroupCollisionService.getSubGroupCollisionRecords();
    return NextResponse.json(data);
});
