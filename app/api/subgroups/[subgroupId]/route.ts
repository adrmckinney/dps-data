import { BadRequestError } from '@/errors/AppError';
import { withApiErrorHandling } from '@/errors/handleApiError';
import { SubgroupService } from '@/services/subgroupService';
import { NextRequest, NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async (_req: NextRequest, context) => {
    const { params } = context ?? {};
    const { subGroupId } = params ?? {};

    if (!subGroupId) {
        throw new BadRequestError('Missing subGroupId in request params');
    }

    const subgroup = await SubgroupService.getSubgroupById(Number(subGroupId));
    return NextResponse.json(subgroup);
});
