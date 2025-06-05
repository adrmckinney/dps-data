import { QueryFilterSort } from '@/types/queryModifiers';

export const PopulationRouteService = {
    async getSubgroupPopulation(payload: QueryFilterSort) {
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
