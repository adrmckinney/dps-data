import { levels } from '@/constants/LevelList'

export const levelFactory = (overrides?: Partial<{ name: string; abbreviation: string }>) => {
  return {
    name: overrides?.name ?? levels.elementary.name,
    abbreviation: overrides?.abbreviation ?? levels.elementary.abbreviation,
  }
}
