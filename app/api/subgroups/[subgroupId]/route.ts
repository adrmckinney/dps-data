import { BadRequestError } from '@/errors/AppError';
import { withApiErrorHandling } from '@/errors/handleApiError';
import { SubgroupService } from '@/services/subgroupService';
import { NextRequest, NextResponse } from 'next/server';

export const GET = withApiErrorHandling(async (_req: NextRequest, context) => {
    const { params } = context ?? {};
    const { subgroupId } = params ?? {};

    if (!subgroupId) {
        throw new BadRequestError('Missing subgroupId in request params');
    }

    const subgroup = await SubgroupService.getSubgroupById(Number(subgroupId));
    return NextResponse.json(subgroup);
});
