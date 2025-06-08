import type { DataSet } from '@prisma/client';
import { DATA_SETS_SEED } from '../constants/DataSetList.ts';
import { DATA_SOURCE_TYPES_SEED } from '../constants/DataTypeList.ts';
import { disciplines as disciplineList, DISCIPLINES_SEED } from '../constants/DisciplineList.ts';
import { grades as constGrades, GRADES_SEED } from '../constants/GradeList.ts';
import type { Level } from '../constants/LevelList.ts';
import { LEVELS_SEED, levels as ls } from '../constants/LevelList.ts';
import { SCHOOLS_SEED } from '../constants/SchoolList.ts';
import { SUBGROUPS_SEED, subGroupsList } from '../constants/SubGroupList.ts';
import { SUB_GROUP_TYPES_SEED } from '../constants/SubGroupTypes.ts';
import { subjectList, SUBJECTS_SEED } from '../constants/SubjectList.ts';
import { YEARS_SEED } from '../constants/YearList.ts';
import { prisma } from '../lib/prisma.ts';
import { SubjectToDataSetRepo } from '../repos/subjectToDataSetRepo.ts';
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
import { YearService } from '../services/yearService.ts';
import type { DataSetKeys } from '../types/dataSetKeys.ts';

async function main() {
    await prisma.dataSourceType.createMany({ data: DATA_SOURCE_TYPES_SEED, skipDuplicates: true });
    // await prisma.dataSet.createMany({ data: DATA_SETS_SEED, skipDuplicates: true });
    await DataSetService.createDataSets(DATA_SETS_SEED);
    await prisma.level.createMany({ data: LEVELS_SEED, skipDuplicates: true });

    const dataSets = await DataSetService.getDataSets();
    // Create LevelToDataSet records
    const levels = await LevelService.getLevels();
    const constLevels: Level[] = Object.values(ls);

    insertDataSetPivotRows(dataSets, levels, constLevels, 'levelId', async input => {
        await LevelToDataSetService.createLevelToDataSet(input);
    });

    await prisma.subGroupType.createMany({ data: SUB_GROUP_TYPES_SEED, skipDuplicates: true });

    await SubgroupService.createSubGroups(SUBGROUPS_SEED);

    // Create SubGroupToDataSet records
    const subGroupsDB = await SubgroupService.getSubgroups();
    insertDataSetPivotRows(dataSets, subGroupsDB, subGroupsList, 'subGroupId', async input => {
        await SubGroupToDataSetService.createSubGroupToDataSet(input);
    });

    await prisma.grade.createMany({ data: GRADES_SEED, skipDuplicates: true });
    // Create GradeToDataSets records
    const gradesDB = await GradeService.getGrades();

    insertDataSetPivotRows(
        dataSets,
        gradesDB,
        Object.values(constGrades),
        'gradeId',
        async input => {
            await GradeToDataSetService.createGradeToDataSet(input);
        }
    );

    await prisma.discipline.createMany({ data: DISCIPLINES_SEED, skipDuplicates: true });
    const disciplinesDB = await DisciplineService.getDisciplines();

    insertDataSetPivotRows(
        dataSets,
        disciplinesDB,
        Object.values(disciplineList),
        'disciplineId',
        async input => {
            await DisciplineToDataSetService.createDisciplineToDataSet(input);
        }
    );

    // Tables with global filters
    await prisma.school.createMany({ data: SCHOOLS_SEED, skipDuplicates: true });
    await YearService.createYears(YEARS_SEED);

    // Tables with scoped filters

    await prisma.subject.createMany({ data: SUBJECTS_SEED, skipDuplicates: true });
    const subjectsDB = await SubjectService.getSubjects();

    insertDataSetPivotRows(dataSets, subjectsDB, subjectList, 'subjectId', async input => {
        await SubjectToDataSetRepo.createSubjectToDataSetRecord(input);
    });

    console.log('🌱 Database seeded');
}

type ConstList = {
    name: string;
    dataSets: DataSetKeys[];
    [key: string]: unknown;
};

type FilterSets = {
    id: number;
    name: string;
    [key: string]: unknown;
};

async function insertDataSetPivotRows<T extends string>(
    dataSets: DataSet[],
    filterSets: FilterSets[],
    constList: ConstList[],
    filterKey: T,
    serviceFn: (input: { [K in T]: number } & { dataSetId: number }) => Promise<void>
) {
    for (let i = 0; i < filterSets.length; i++) {
        const targetDataSetKeys: DataSetKeys[] | undefined = constList.find(
            l => l.name === filterSets[i].name
        )?.dataSets;
        if (!targetDataSetKeys) continue;
        const filterId = filterSets[i].id;
        for (const dataSetKey of targetDataSetKeys) {
            const dataSetId = dataSets.find(ds => ds.key === dataSetKey)?.id;
            if (!filterId || !dataSetId) continue;

            await serviceFn({ [filterKey]: filterId, dataSetId } as { [K in T]: number } & {
                dataSetId: number;
            });
        }
    }
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
