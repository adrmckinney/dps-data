import { DATA_SETS_SEED } from '../constants/DataSetList.ts';
import { DATA_SOURCE_TYPES_SEED } from '../constants/DataTypeList.ts';
import { DISCIPLINES_SEED } from '../constants/DisciplineList.ts';
import { GRADES_SEED } from '../constants/GradeList.ts';
import { LEVELS_SEED } from '../constants/LevelList.ts';
import { SCHOOLS_SEED } from '../constants/SchoolList.ts';
import { SUBGROUPS_SEED } from '../constants/SubGroupList.ts';
import { SUB_GROUP_TYPES_SEED } from '../constants/SubGroupTypes.ts';
import { SUBJECTS_SEED } from '../constants/SubjectList.ts';
import { YEARS_SEED } from '../constants/YearList.ts';
import { prisma } from '../lib/prisma.ts';
import { DataSetService } from '../services/dataSetService.ts';
import { DisciplineService } from '../services/disciplineService.ts';
import { DisciplineToDataSetService } from '../services/disciplineToDataSetService.ts';
import { GradeService } from '../services/gradeService.ts';
import { GradeToDataSetService } from '../services/gradeToDataSetService.ts';
import { LevelService } from '../services/levelService.ts';
import { LevelToDataSetService } from '../services/levelToDataSetService.ts';
import { SubgroupService } from '../services/subgroupService.ts';
import { SubGroupToDataSetService } from '../services/subGroupToDataSetService.ts';
import { SubjectService } from '../services/subjectService.ts';
import { SubjectToDataSetService } from '../services/subjectToDataSetService.ts';
import { YearService } from '../services/yearService.ts';

async function main() {
    await prisma.dataSourceType.createMany({ data: DATA_SOURCE_TYPES_SEED, skipDuplicates: true });

    await DataSetService.createDataSets(DATA_SETS_SEED);
    await prisma.level.createMany({ data: LEVELS_SEED, skipDuplicates: true });

    const dataSets = await DataSetService.getDataSets();
    // Create LevelToDataSet records
    const levels = await LevelService.getLevels();
    await LevelToDataSetService.createLevelToDataSetRecords(dataSets, levels);

    await prisma.subGroupType.createMany({ data: SUB_GROUP_TYPES_SEED, skipDuplicates: true });

    await SubgroupService.createSubGroups(SUBGROUPS_SEED);

    // Create SubGroupToDataSet records
    const subGroupsDB = await SubgroupService.getSubgroups();
    await SubGroupToDataSetService.createSubGroupToDataSetRecords(dataSets, subGroupsDB);

    await prisma.grade.createMany({ data: GRADES_SEED, skipDuplicates: true });
    // Create GradeToDataSets records
    const gradesDB = await GradeService.getGrades();
    await GradeToDataSetService.createGradeToDataSetRecords(dataSets, gradesDB);

    await prisma.discipline.createMany({ data: DISCIPLINES_SEED, skipDuplicates: true });
    const disciplinesDB = await DisciplineService.getDisciplines();
    await DisciplineToDataSetService.createDisciplineToDataSetRecords(dataSets, disciplinesDB);

    // Tables with global filters
    await prisma.school.createMany({ data: SCHOOLS_SEED, skipDuplicates: true });
    await YearService.createYears(YEARS_SEED);

    // Tables with scoped filters

    await prisma.subject.createMany({ data: SUBJECTS_SEED, skipDuplicates: true });
    const subjectsDB = await SubjectService.getSubjects();
    await SubjectToDataSetService.createSubjectToDataSetRecords(dataSets, subjectsDB);

    console.log('🌱 Database seeded');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
