import type { LevelEnumValue } from './LevelList.ts';
import { levels } from './LevelList.ts';

type SubjectList = {
    name: string;
    levelId: LevelEnumValue;
    availableForDataTypes: string[];
};

export const ELEMENTARY_SUBJECTS: SubjectList[] = [
    {
        name: '3rd Grade Math',
        levelId: levels.elementary.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '4th Grade Math',
        levelId: levels.elementary.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '5th Grade Math',
        levelId: levels.elementary.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'MClass KI MOY',
        levelId: levels.elementary.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '3rd Grade Reading',
        levelId: levels.elementary.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '4th Grade Reading',
        levelId: levels.elementary.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '5th Grade Reading',
        levelId: levels.elementary.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'Grades 3-5 Reading',
        levelId: levels.elementary.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
];

export const MIDDLE_SCHOOLS_SUBJECTS: SubjectList[] = [
    {
        name: '6th Grade Reading',
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '6th Grade Math',
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '7th Grade Math',
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '8th Grade Math',
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'Math 3-8',
        levelId: levels.middleSchool.value, // This is also elementary
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '7th Grade Reading',
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '8th Grade Reading',
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'Grades 6-8 Reading',
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'Reading 3-8', // This is also elementary
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: '5 and 8 Science',
        levelId: levels.middleSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
];

export const HIGH_SCHOOLS_SUBJECTS: SubjectList[] = [
    {
        name: 'Math I', // This is also for middle school
        levelId: levels.highSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'English II',
        levelId: levels.highSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'Biology',
        levelId: levels.highSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'Performance Composite', // This is for all three levels
        levelId: levels.highSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'ACT Composite',
        levelId: levels.highSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'Math Course Rigor',
        levelId: levels.highSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'WorkKeys',
        levelId: levels.highSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
    {
        name: 'Grad Cohort 4yr',
        levelId: levels.highSchool.value,
        availableForDataTypes: ['ACHIEVEMENT_OVERALL', 'ACHIEVEMENT_SUBGROUPS'],
    },
];

export const SUBJECTS_SEED: SubjectList[] = [
    ...ELEMENTARY_SUBJECTS,
    ...MIDDLE_SCHOOLS_SUBJECTS,
    ...HIGH_SCHOOLS_SUBJECTS,
];
