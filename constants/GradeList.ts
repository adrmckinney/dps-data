import type { LevelEnumValue } from './LevelList.ts';
import { levels } from './LevelList.ts';

export type Grade = {
    name: string;
    alternativeName: string;
    abbreviation: string;
    levelId: LevelEnumValue;
    value: number;
    availableForDataTypes: string[];
};

export const grades: Record<string, Grade> = {
    pk: {
        name: 'Pre-Kindergarten',
        alternativeName: 'pk',
        abbreviation: 'PK',
        levelId: levels.unknown.value,
        value: 1,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    kindergarten: {
        name: 'Kindergarten',
        alternativeName: 'k',
        abbreviation: 'KI',
        levelId: levels.unknown.value,
        value: 2,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    first: {
        name: 'First Grade',
        alternativeName: 'first',
        abbreviation: '01',
        levelId: levels.elementary.value,
        value: 3,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    second: {
        name: 'Second Grade',
        alternativeName: 'second',
        abbreviation: '02',
        levelId: levels.elementary.value,
        value: 4,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    third: {
        name: 'Third Grade',
        alternativeName: 'third',
        abbreviation: '03',
        levelId: levels.elementary.value,
        value: 5,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    fourth: {
        name: 'Fourth Grade',
        alternativeName: 'fourth',
        abbreviation: '04',
        levelId: levels.elementary.value,
        value: 6,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    fifth: {
        name: 'Fifth Grade',
        alternativeName: 'fifth',
        abbreviation: '05',
        levelId: levels.elementary.value,
        value: 7,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    sixth: {
        name: 'Sixth Grade',
        alternativeName: 'sixth',
        abbreviation: '06',
        levelId: levels.middleSchool.value,
        value: 8,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    seventh: {
        name: 'Seventh Grade',
        alternativeName: 'seventh',
        abbreviation: '07',
        levelId: levels.middleSchool.value,
        value: 9,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    eighth: {
        name: 'Eighth Grade',
        alternativeName: 'eighth',
        abbreviation: '08',
        levelId: levels.middleSchool.value,
        value: 10,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    ninth: {
        name: 'Ninth Grade',
        alternativeName: 'freshman',
        abbreviation: '09',
        levelId: levels.highSchool.value,
        value: 11,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    tenth: {
        name: 'Tenth Grade',
        alternativeName: 'sophomore',
        abbreviation: '10',
        levelId: levels.highSchool.value,
        value: 12,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    eleventh: {
        name: 'Eleventh Grade',
        alternativeName: 'junior',
        abbreviation: '11',
        levelId: levels.highSchool.value,
        value: 13,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    twelfth: {
        name: 'Twelfth Grade',
        alternativeName: 'senior',
        abbreviation: '12',
        levelId: levels.highSchool.value,
        value: 14,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    xg: {
        name: 'Ungraded',
        alternativeName: 'xg',
        abbreviation: 'XG',
        levelId: levels.unknown.value,
        value: 15,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
    thirteen: {
        // This is a grade in the 2024-2025 demographics/population pdf
        // It's for Middle College. Unsure what it really stands for.
        name: 'Thirteenth Grade',
        alternativeName: 'unknown',
        abbreviation: '13',
        levelId: levels.highSchool.value,
        value: 16,
        availableForDataTypes: ['POPULATION_GRADE'],
    },
} as const;

// Used to seed the Grades table
export const GRADES_SEED: Omit<Grade, 'value'>[] = Object.values(grades).map(
    ({ name, alternativeName, abbreviation, levelId, availableForDataTypes }) => ({
        name,
        alternativeName,
        abbreviation,
        levelId,
        availableForDataTypes,
    })
);

// --- Types
export type GradeKey = keyof typeof grades; // e.g. "pk" | "first" | "xg"
export type GradeEnum = (typeof grades)[GradeKey];
export type GradeEnumValue = GradeEnum['value'];
export type GradeEnumName = GradeEnum['name'];
