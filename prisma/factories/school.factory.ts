import { LevelEnum } from '@/constants/LevelList'
import { ELEMENTARY_SCHOOLS } from '@/constants/SchoolList'

export const schoolFactory = (
  overrides?: Partial<{
    name: string
    abbreviation: string
    otherNames: string[]
    levelId: LevelEnum
  }>
) => {
  return {
    name: overrides?.name ?? ELEMENTARY_SCHOOLS[0].name,
    abbreviation: overrides?.abbreviation ?? ELEMENTARY_SCHOOLS[0].abbreviation,
    otherNames: overrides?.otherNames ?? ELEMENTARY_SCHOOLS[0].otherNames,
    levelId: overrides?.levelId ?? ELEMENTARY_SCHOOLS[0].levelId,
  }
}
