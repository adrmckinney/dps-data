import { runExtractScript } from '../lib/runPython.ts';
import { population } from '../scripts/pdf_links.ts';
import { PopulationService } from '../services/populationService/populationService.ts';
import type { RawPopulationData } from '../types/population.ts';

async function seedPopulationData() {
    const resData = [];
    for (const link of population) {
        console.log(`Extracting data from ${link}...`);
        const rawData = await runExtractScript<RawPopulationData>(link, 'school_population');

        console.log(`Processing data and populating tables...`);
        const response = await PopulationService.processPopulationPdf(rawData, { url: link });
        resData.push(response);
    }
    console.log('Final Response', resData);
}

seedPopulationData()
    .then(() => console.log('✅ Population data seeded'))
    .catch(err => console.error('❌ Error seeding population data', err));
