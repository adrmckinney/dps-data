import { QueryModifiers } from '@/types/queryModifiers';

export const VisualizationRouteService = {
    async getVisualizationData(payload: QueryModifiers) {
        const res = await fetch('api/visualization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            throw new Error('Failed to fetch visualization data in route service');
        }

        return res.json();
    },
};
