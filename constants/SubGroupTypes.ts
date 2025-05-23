export const subGroupTypes = {
  overall: {
    name: 'Overall',
    value: 1,
  },
  race: {
    name: 'Race',
    value: 2,
  },
  gender: {
    name: 'Gender',
    value: 3,
  },
  'race-gender combo': {
    name: 'Race-Gender Combo',
    value: 4,
  },
  exceptionality: {
    name: 'Exceptionality',
    value: 5,
  },
} as const

export const SUB_GROUP_TYPES_SEED: { name: SubGroupTypeEnumName }[] = [
  {
    name: subGroupTypes.overall.name,
  },
  {
    name: subGroupTypes.race.name,
  },
  {
    name: subGroupTypes.gender.name,
  },
  {
    name: subGroupTypes['race-gender combo'].name,
  },
  {
    name: subGroupTypes.exceptionality.name,
  },
]

export const disciplineSubGroupTypes = [
  subGroupTypes.overall,
  subGroupTypes['race-gender combo'],
  subGroupTypes.exceptionality,
]

export type subGroupTypeKey = keyof typeof subGroupTypes // // "overall" | "race" | "gender" | "race-gender combo" | "exceptionality"
export type subGroupTypeEnum = (typeof subGroupTypes)[subGroupTypeKey] // {name: '', value: 1}
export type SubGroupTypeEnumValue = (typeof subGroupTypes)[keyof typeof subGroupTypes]['value'] // 1 | 2 | 3 | 4 | 5
export type SubGroupTypeEnumName = (typeof subGroupTypes)[keyof typeof subGroupTypes]['name'] // // "Overall" | "Race" | "Gender" | "Race-Gender Combo" | "Exceptionality"
