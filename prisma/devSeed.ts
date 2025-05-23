// import { disciplines } from '../constants/DisciplineList.ts'
import { runExtractScript } from '@/lib/runPython.ts';
import { population } from '@/scripts/pdf_links.ts';
import { prisma } from '../lib/prisma.ts';
// import { disciplineDataFactory } from './factories/disciplineData.factory.ts'

async function main() {
    if (process.env.NODE_ENV === 'production') {
        throw new Error('⚠️ devSeeder.ts should not be run in production');
    }

    // const disciplineData = await disciplineDataFactory({
    //   disciplineId: disciplines.restorativePractice.value,
    //   yearId: 1,
    // })

    // await prisma.disciplineData.createMany({ data: disciplineData, skipDuplicates: true })
    const result = await runExtractScript(population[0], 'school_population');
    console.log('result', result);

    console.log('🌱 Database seeded with dev data');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);

        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
