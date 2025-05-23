type Level = {
  name: string
  abbreviation: string
  value: number
}

export const levels: Record<string, Level> = {
  elementary: {
    name: 'Elementary',
    abbreviation: 'Elem',
    value: 1,
  },
  middleSchool: {
    name: 'Middle School',
    abbreviation: 'MS',
    value: 2,
  },
  highSchool: {
    name: 'High School',
    abbreviation: 'HS',
    value: 3,
  },
  unknown: {
    name: 'Unknown',
    abbreviation: 'unknown',
    value: 4,
  },
} as const

export const LEVELS_SEED: Omit<Level, 'value'>[] = Object.values(levels).map(
  ({ name, abbreviation }) => ({ name, abbreviation })
)

// Types
export type LevelKey = keyof typeof levels // "elementary" | "middleSchool" | "highSchool"
export type LevelEnum = (typeof levels)[LevelKey] // { name: string; abbreviation: string; value: number }
export type LevelEnumValue = (typeof levels)[keyof typeof levels]['value'] // 1 | 2 | 3
export type LevelEnumName = (typeof levels)[keyof typeof levels]['name'] // "Elementary" | "Middle School" | "High School"
