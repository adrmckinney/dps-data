import type { LevelEnumValue } from './LevelList.ts';
import { levels } from './LevelList.ts';

export type Grade = {
    name: string;
    alternativeName: string;
    abbreviation: string;
    levelId: LevelEnumValue;
    value: number;
};

// Full grade map
export const grades: Record<string, Grade> = {
    pk: {
        name: 'Pre-Kindergarten',
        alternativeName: 'pk',
        abbreviation: 'PK',
        levelId: levels.unknown.value,
        value: 1,
    },
    kindergarten: {
        name: 'Kindergarten',
        alternativeName: 'k',
        abbreviation: 'KI',
        levelId: levels.unknown.value,
        value: 2,
    },
    first: {
        name: 'First Grade',
        alternativeName: 'first',
        abbreviation: '01',
        levelId: levels.elementary.value,
        value: 3,
    },
    second: {
        name: 'Second Grade',
        alternativeName: 'second',
        abbreviation: '02',
        levelId: levels.elementary.value,
        value: 4,
    },
    third: {
        name: 'Third Grade',
        alternativeName: 'third',
        abbreviation: '03',
        levelId: levels.elementary.value,
        value: 5,
    },
    fourth: {
        name: 'Fourth Grade',
        alternativeName: 'fourth',
        abbreviation: '04',
        levelId: levels.elementary.value,
        value: 6,
    },
    fifth: {
        name: 'Fifth Grade',
        alternativeName: 'fifth',
        abbreviation: '05',
        levelId: levels.elementary.value,
        value: 7,
    },
    sixth: {
        name: 'Sixth Grade',
        alternativeName: 'sixth',
        abbreviation: '06',
        levelId: levels.middleSchool.value,
        value: 8,
    },
    seventh: {
        name: 'Seventh Grade',
        alternativeName: 'seventh',
        abbreviation: '07',
        levelId: levels.middleSchool.value,
        value: 9,
    },
    eighth: {
        name: 'Eighth Grade',
        alternativeName: 'eighth',
        abbreviation: '08',
        levelId: levels.middleSchool.value,
        value: 10,
    },
    ninth: {
        name: 'Ninth Grade',
        alternativeName: 'freshman',
        abbreviation: '09',
        levelId: levels.highSchool.value,
        value: 11,
    },
    tenth: {
        name: 'Tenth Grade',
        alternativeName: 'sophomore',
        abbreviation: '10',
        levelId: levels.highSchool.value,
        value: 12,
    },
    eleventh: {
        name: 'Eleventh Grade',
        alternativeName: 'junior',
        abbreviation: '11',
        levelId: levels.highSchool.value,
        value: 13,
    },
    twelfth: {
        name: 'Twelfth Grade',
        alternativeName: 'senior',
        abbreviation: '12',
        levelId: levels.highSchool.value,
        value: 14,
    },
    xg: {
        name: 'Ungraded',
        alternativeName: 'xg',
        abbreviation: 'XG',
        levelId: levels.unknown.value,
        value: 15,
    },
    thirteen: {
        // This is a grade in the 2024-2025 demographics/population pdf !!??
        name: 'Thirteenth Grade',
        alternativeName: 'unknown',
        abbreviation: '13',
        levelId: levels.highSchool.value,
        value: 16,
    },
} as const;

// Used to seed the Grades table
export const GRADES_SEED: Omit<Grade, 'value'>[] = Object.values(grades).map(
    ({ name, alternativeName, abbreviation, levelId }) => ({
        name,
        alternativeName,
        abbreviation,
        levelId,
    })
);

// --- Types
export type GradeKey = keyof typeof grades; // e.g. "pk" | "first" | "xg"
export type GradeEnum = (typeof grades)[GradeKey];
export type GradeEnumValue = GradeEnum['value'];
export type GradeEnumName = GradeEnum['name'];
