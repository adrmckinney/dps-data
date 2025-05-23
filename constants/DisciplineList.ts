export const disciplines = {
  restorativePractice: {
    name: 'Restorative Practice',
    abbreviation: 'RPC',
    value: 1,
  },
  shortTermSuspension: {
    name: 'Short Term Suspension',
    abbreviation: 'STS',
    value: 2,
  },
  longTermSuspension: {
    name: 'Long Term Suspension',
    abbreviation: 'LTS',
    value: 3,
  },
} as const

// Seed format
export const DISCIPLINES_SEED: { name: DisciplineEnumName; abbreviation: string }[] = [
  {
    name: disciplines.restorativePractice.name,
    abbreviation: disciplines.restorativePractice.abbreviation,
  },
  {
    name: disciplines.shortTermSuspension.name,
    abbreviation: disciplines.shortTermSuspension.abbreviation,
  },
  {
    name: disciplines.longTermSuspension.name,
    abbreviation: disciplines.longTermSuspension.abbreviation,
  },
]

// Types
export type DisciplineKey = keyof typeof disciplines // "restorativePractice" | "shortTermSuspension" | "longTermSuspension"

export type DisciplineEnum = (typeof disciplines)[DisciplineKey] // { name: string; abbreviation: string; value: number }

export type DisciplineEnumValue = (typeof disciplines)[keyof typeof disciplines]['value'] // 1 | 2 | 3

export type DisciplineEnumName = (typeof disciplines)[keyof typeof disciplines]['name'] // "Restorative Practice" | "Short Term Suspension" | "Long Term Suspension"
