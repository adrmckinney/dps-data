import { runExtractScript } from '@/lib/runPython';
import { PopulationService } from '@/services/populationService';
import { RawPopulationData } from '@/types/population';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        // Get URLs (current supported input)
        const urls = formData.getAll('urls') as string[];

        if (!urls || urls.length === 0) {
            return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
        }

        const resData = [];
        for (const url of urls) {
            console.log(`Extracting data from ${url}...`);
            const rawData = await runExtractScript<RawPopulationData>(url, 'school_population');

            console.log(`Processing data and populating tables...`);
            const response = await PopulationService.processPopulationPdf(rawData, { url: url });
            resData.push(response);
        }

        // Uncomment below when supporting PDF file uploads
        /*
        const files = formData.getAll('files') as File[];
        if (files && files.length > 0) {
            for (const file of files) {
                const result = await PopulationService.ingestPopulationPdf(file);
                results.push(result);
            }
        }
        */

        return NextResponse.json(
            { message: 'Data ingested successfully', ...resData },
            { status: 201 }
        );
    } catch (err) {
        console.error('Error ingesting PDF:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
