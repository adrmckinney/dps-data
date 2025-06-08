import type { DataSetKeys } from '@/types/dataSetKeys.ts';
import { Prisma } from '@prisma/client';
import type { LevelEnumValue } from './LevelList.ts';
import { levels } from './LevelList.ts';

export type Grade = {
    name: string;
    alternativeName: string;
    abbreviation: string;
    levelId: LevelEnumValue;
    value: number;
    dataSets: DataSetKeys[];
};

export const grades: Record<string, Grade> = {
    pk: {
        name: 'Pre-Kindergarten',
        alternativeName: 'pk',
        abbreviation: 'PK',
        levelId: levels.unknown.value,
        value: 1,
        dataSets: ['POPULATION_GRADE'],
    },
    kindergarten: {
        name: 'Kindergarten',
        alternativeName: 'k',
        abbreviation: 'KI',
        levelId: levels.unknown.value,
        value: 2,
        dataSets: ['POPULATION_GRADE'],
    },
    first: {
        name: 'First Grade',
        alternativeName: 'first',
        abbreviation: '01',
        levelId: levels.elementary.value,
        value: 3,
        dataSets: ['POPULATION_GRADE'],
    },
    second: {
        name: 'Second Grade',
        alternativeName: 'second',
        abbreviation: '02',
        levelId: levels.elementary.value,
        value: 4,
        dataSets: ['POPULATION_GRADE'],
    },
    third: {
        name: 'Third Grade',
        alternativeName: 'third',
        abbreviation: '03',
        levelId: levels.elementary.value,
        value: 5,
        dataSets: ['POPULATION_GRADE'],
    },
    fourth: {
        name: 'Fourth Grade',
        alternativeName: 'fourth',
        abbreviation: '04',
        levelId: levels.elementary.value,
        value: 6,
        dataSets: ['POPULATION_GRADE'],
    },
    fifth: {
        name: 'Fifth Grade',
        alternativeName: 'fifth',
        abbreviation: '05',
        levelId: levels.elementary.value,
        value: 7,
        dataSets: ['POPULATION_GRADE'],
    },
    sixth: {
        name: 'Sixth Grade',
        alternativeName: 'sixth',
        abbreviation: '06',
        levelId: levels.middleSchool.value,
        value: 8,
        dataSets: ['POPULATION_GRADE'],
    },
    seventh: {
        name: 'Seventh Grade',
        alternativeName: 'seventh',
        abbreviation: '07',
        levelId: levels.middleSchool.value,
        value: 9,
        dataSets: ['POPULATION_GRADE'],
    },
    eighth: {
        name: 'Eighth Grade',
        alternativeName: 'eighth',
        abbreviation: '08',
        levelId: levels.middleSchool.value,
        value: 10,
        dataSets: ['POPULATION_GRADE'],
    },
    ninth: {
        name: 'Ninth Grade',
        alternativeName: 'freshman',
        abbreviation: '09',
        levelId: levels.highSchool.value,
        value: 11,
        dataSets: ['POPULATION_GRADE'],
    },
    tenth: {
        name: 'Tenth Grade',
        alternativeName: 'sophomore',
        abbreviation: '10',
        levelId: levels.highSchool.value,
        value: 12,
        dataSets: ['POPULATION_GRADE'],
    },
    eleventh: {
        name: 'Eleventh Grade',
        alternativeName: 'junior',
        abbreviation: '11',
        levelId: levels.highSchool.value,
        value: 13,
        dataSets: ['POPULATION_GRADE'],
    },
    twelfth: {
        name: 'Twelfth Grade',
        alternativeName: 'senior',
        abbreviation: '12',
        levelId: levels.highSchool.value,
        value: 14,
        dataSets: ['POPULATION_GRADE'],
    },
    xg: {
        name: 'Ungraded',
        alternativeName: 'xg',
        abbreviation: 'XG',
        levelId: levels.unknown.value,
        value: 15,
        dataSets: ['POPULATION_GRADE'],
    },
    thirteen: {
        // This is a grade in the 2024-2025 demographics/population pdf
        // It's for Middle College. Unsure what it really stands for.
        name: 'Thirteenth Grade',
        alternativeName: 'unknown',
        abbreviation: '13',
        levelId: levels.highSchool.value,
        value: 16,
        dataSets: ['POPULATION_GRADE'],
    },
} as const;

// Used to seed the Grades table
export const GRADES_SEED: Prisma.GradeCreateManyInput[] = Object.values(grades).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ value, dataSets, ...rest }) => ({
        ...rest,
    })
);

// --- Types
export type GradeKey = keyof typeof grades; // e.g. "pk" | "first" | "xg"
export type GradeEnum = (typeof grades)[GradeKey];
export type GradeEnumValue = GradeEnum['value'];
export type GradeEnumName = GradeEnum['name'];
