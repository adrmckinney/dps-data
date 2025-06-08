import { Prisma } from '@prisma/client';
import type { DataSetKeys } from '../types/dataSetKeys.ts';

export type Level = {
    name: string;
    abbreviation: string;
    value: number;
    dataSets: DataSetKeys[];
};

export const levels: Record<string, Level> = {
    elementary: {
        name: 'Elementary',
        abbreviation: 'Elem',
        value: 1,
        dataSets: ['POPULATION_GRADE'],
    },
    middleSchool: {
        name: 'Middle School',
        abbreviation: 'MS',
        value: 2,
        dataSets: ['POPULATION_GRADE'],
    },
    highSchool: {
        name: 'High School',
        abbreviation: 'HS',
        value: 3,
        dataSets: ['POPULATION_GRADE'],
    },
    unknown: {
        name: 'Unknown',
        abbreviation: 'unknown',
        value: 4,
        dataSets: ['POPULATION_GRADE'],
    },
} as const;

export const LEVELS_SEED: Prisma.LevelCreateManyInput[] = Object.values(levels).map(
    ({ name, abbreviation }) => ({
        name,
        abbreviation,
    })
);

// Types
export type LevelKey = keyof typeof levels; // "elementary" | "middleSchool" | "highSchool"
export type LevelEnum = (typeof levels)[LevelKey]; // { name: string; abbreviation: string; value: number }
export type LevelEnumValue = (typeof levels)[keyof typeof levels]['value']; // 1 | 2 | 3
export type LevelEnumName = (typeof levels)[keyof typeof levels]['name']; // "Elementary" | "Middle School" | "High School"
