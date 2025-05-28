import { QueryFilterPayload } from '@/types/queryFilters';

export const PopulationRouteService = {
    async getSubgroupPopulation(payload: QueryFilterPayload) {
        const res = await fetch('api/population/subgroups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            throw new Error('Failed to fetch subgroup population in route service');
        }

        return res.json();
    },
};
