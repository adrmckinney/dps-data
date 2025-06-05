import { DataType } from '@prisma/client';

type Discipline = {
    name: string;
    abbreviation: string;
    value: number;
    availableForDataTypes: DataType[];
};

type DisciplineTypes = 'restorativePractice' | 'shortTermSuspension' | 'longTermSuspension';

export const disciplines: Record<DisciplineTypes, Discipline> = {
    restorativePractice: {
        name: 'Restorative Practice',
        abbreviation: 'RPC',
        value: 1,
        availableForDataTypes: ['DISCIPLINE_OVERALL', 'DISCIPLINE_SUBGROUPS'],
    },
    shortTermSuspension: {
        name: 'Short Term Suspension',
        abbreviation: 'STS',
        value: 2,
        availableForDataTypes: ['DISCIPLINE_OVERALL', 'DISCIPLINE_SUBGROUPS'],
    },
    longTermSuspension: {
        name: 'Long Term Suspension',
        abbreviation: 'LTS',
        value: 3,
        availableForDataTypes: ['DISCIPLINE_OVERALL', 'DISCIPLINE_SUBGROUPS'],
    },
} as const;

// Seed format
export const DISCIPLINES_SEED: {
    name: DisciplineEnumName;
    abbreviation: string;
    availableForDataTypes: DataType[];
}[] = Object.values(disciplines).map(d => {
    return {
        name: d.name,
        abbreviation: d.abbreviation,
        availableForDataTypes: d.availableForDataTypes,
    };
});

// Types
export type DisciplineKey = keyof typeof disciplines; // "restorativePractice" | "shortTermSuspension" | "longTermSuspension"

export type DisciplineEnum = (typeof disciplines)[DisciplineKey]; // { name: string; abbreviation: string; value: number }

export type DisciplineEnumValue = (typeof disciplines)[keyof typeof disciplines]['value']; // 1 | 2 | 3

export type DisciplineEnumName = (typeof disciplines)[keyof typeof disciplines]['name']; // "Restorative Practice" | "Short Term Suspension" | "Long Term Suspension"
