import { DATA_SETS_SEED } from '../constants/DataSetList.ts';
import { DATA_SOURCE_TYPES_SEED } from '../constants/DataTypeList.ts';
import { LEVELS_SEED } from '../constants/LevelList.ts';
import { SCHOOLS_SEED } from '../constants/SchoolList.ts';
import { YEARS_SEED } from '../constants/YearList.ts';
import { prisma } from '../lib/prisma.ts';
import { DataSetService } from '../services/dataSetService.ts';
import { YearService } from '../services/yearService.ts';

async function main() {
    await prisma.dataSourceType.createMany({ data: DATA_SOURCE_TYPES_SEED, skipDuplicates: true });
    // await prisma.dataSet.createMany({ data: DATA_SETS_SEED, skipDuplicates: true });
    await DataSetService.createDataSets(DATA_SETS_SEED);
    await prisma.level.createMany({ data: LEVELS_SEED, skipDuplicates: true });

    // Tables with global filters
    await prisma.school.createMany({ data: SCHOOLS_SEED, skipDuplicates: true });
    await YearService.createYears(YEARS_SEED);

    // Tables with scoped filters

    // await prisma.grade.createMany({ data: GRADES_SEED, skipDuplicates: true });

    // await prisma.subGroupType.createMany({ data: SUB_GROUP_TYPES_SEED, skipDuplicates: true });

    // await prisma.subGroup.createMany({ data: SUBGROUPS_SEED, skipDuplicates: true });

    // await prisma.discipline.createMany({ data: DISCIPLINES_SEED, skipDuplicates: true });

    // await prisma.subject.createMany({ data: SUBJECTS_SEED, skipDuplicates: true });

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
