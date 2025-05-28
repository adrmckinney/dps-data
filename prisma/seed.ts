import { DISCIPLINES_SEED } from '../constants/DisciplineList.ts';
import { GRADES_SEED } from '../constants/GradeList.ts';
import { LEVELS_SEED } from '../constants/LevelList.ts';
import { SCHOOLS_SEED } from '../constants/SchoolList.ts';
import { SUBGROUPS_SEED } from '../constants/SubGroupList.ts';
import { SUB_GROUP_TYPES_SEED } from '../constants/SubGroupTypes.ts';
import { SUBJECTS_SEED } from '../constants/SubjectList.ts';
import { YEARS_SEED } from '../constants/YearList.ts';
import { prisma } from '../lib/prisma.ts';

async function main() {
    await prisma.level.createMany({ data: LEVELS_SEED, skipDuplicates: true });

    await prisma.grade.createMany({ data: GRADES_SEED, skipDuplicates: true });

    await prisma.subGroupType.createMany({ data: SUB_GROUP_TYPES_SEED, skipDuplicates: true });

    await prisma.subGroup.createMany({ data: SUBGROUPS_SEED, skipDuplicates: true });

    await prisma.school.createMany({ data: SCHOOLS_SEED, skipDuplicates: true });

    await prisma.discipline.createMany({ data: DISCIPLINES_SEED, skipDuplicates: true });

    await prisma.subject.createMany({ data: SUBJECTS_SEED, skipDuplicates: true });

    await prisma.year.createMany({ data: YEARS_SEED, skipDuplicates: true });

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
