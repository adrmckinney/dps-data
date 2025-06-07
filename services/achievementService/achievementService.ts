import { QueryModifiers } from '@/types/queryModifiers';

export const AchievementService = {
    async getAchievements() {
        console.log('getAchievements ran');
    },
    async getFilteredSubgroupData(filters: QueryModifiers) {
        console.log('getFilteredSubgroupData ran', filters);
    },
    async getFilteredSchoolData(filters: QueryModifiers) {
        console.log('getFilteredSchoolData ran', filters);
    },
};
