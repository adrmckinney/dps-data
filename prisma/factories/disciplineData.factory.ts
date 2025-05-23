import type { Discipline, School, SubGroup, Year } from '@prisma/client'
import { prisma } from '../../lib/prisma.ts'

type DisciplineData = {
  disciplineId: number
  schoolId: number
  subGroupId: number
  yearId: number
  suspensionCount: number
  subGroupCount: number
  percentage: number
}

export const disciplineDataFactory = async (
  overrides?: Partial<DisciplineData>
): Promise<DisciplineData[]> => {
  const disciplineDataList: DisciplineData[] = []

  const disciplines: Discipline[] = overrides?.disciplineId
    ? await prisma.discipline.findMany({ where: { id: overrides.disciplineId } })
    : await prisma.discipline.findMany()

  const schools: School[] = overrides?.schoolId
    ? await prisma.school.findMany({ where: { id: overrides.schoolId } })
    : await prisma.school.findMany()

  const years: Year[] = overrides?.yearId
    ? await prisma.year.findMany({ where: { id: overrides.yearId } })
    : await prisma.year.findMany()

  const subGroups: SubGroup[] = overrides?.subGroupId
    ? await prisma.subGroup.findMany({ where: { id: overrides.subGroupId } })
    : await prisma.subGroup.findMany()

  for (const discipline of disciplines) {
    for (const school of schools) {
      for (const year of years) {
        for (const subGroup of subGroups) {
          disciplineDataList.push({
            disciplineId: discipline.id,
            schoolId: school.id,
            yearId: year.id,
            subGroupId: subGroup.id,
            suspensionCount: overrides?.suspensionCount ?? Math.floor(Math.random() * 20),
            subGroupCount: overrides?.subGroupCount ?? Math.floor(Math.random() * 100 + 20),
            percentage: overrides?.percentage ?? parseFloat((Math.random() * 100).toFixed(1)),
          })
        }
      }
    }
  }

  return disciplineDataList
}
