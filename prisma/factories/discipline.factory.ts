import { disciplines } from '@/constants/DisciplineList';
import { LevelEnum } from '@/constants/LevelList';

export const disciplineFactory = (
    overrides?: Partial<{
        name: string;
        abbreviation: LevelEnum;
    }>
) => {
    return {
        name: overrides?.name ?? disciplines.restorativePractice.name,
        abbreviation: overrides?.abbreviation ?? disciplines.restorativePractice.abbreviation,
    };
};
