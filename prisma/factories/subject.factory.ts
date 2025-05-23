import { LevelEnum } from '@/constants/LevelList';
import { SUBJECTS_SEED } from '@/constants/SubjectList';

export const subjectFactory = (
    overrides?: Partial<{
        name: string;
        levelId: LevelEnum;
    }>
) => {
    return {
        name: overrides?.name ?? SUBJECTS_SEED[0].name,
        levelId: overrides?.levelId ?? SUBJECTS_SEED[0].levelId,
    };
};
