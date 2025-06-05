// import { QueryModifiers } from '@/types/queryModifiers';
// import { QueryClient } from '@tanstack/react-query';
// import { print } from 'graphql';
// import { fetchGraphQL } from '../graphql/client';
// import { VISUALIZATION_DATA_QUERY } from '../graphql/queries/visualizationData';

// const queryClient = new QueryClient();

// export const getVisualizationData = async (payload: QueryModifiers) => {
//     try {
//         const result = await queryClient.fetchQuery({
//             queryKey: ['visualizeData', payload],
//             queryFn: () =>
//                 fetchGraphQL(print(VISUALIZATION_DATA_QUERY), {
//                     payload,
//                 }),
//             staleTime: 1000 * 60 * 5, // Cache for 5 minutes
//         });

//         return { data: result, error: null };
//     } catch (error) {
//         return { data: null, error };
//     }
// };

import { withApiErrorHandling } from '@/errors/handleApiError';
import { VisualizationService } from '@/services/visualizationService';
import { NextResponse } from 'next/server';

export const POST = withApiErrorHandling(async (req: Request) => {
    const payload = await req.json();
    const data = await VisualizationService.getVisualizeData(payload);
    return NextResponse.json(data);
});
