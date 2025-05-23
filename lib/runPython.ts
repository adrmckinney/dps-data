// // scripts/runPython.ts
// import { exec } from 'child_process';

// export function runExtractScript(url: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         exec(`python3 scripts/extract_tables.py "${url}"`, (error, stdout, stderr) => {
//             if (error) return reject(stderr || error.message);
//             resolve(stdout);
//         });
//     });
// }

import { execFile } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import type { ExtractorType } from '../types/population.ts';

const execFileAsync = promisify(execFile);

// 👇 ESM-compatible __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const venvPython = path.resolve(__dirname, '../scripts/venv/bin/python3');
const runExtractorScript = path.resolve(__dirname, '../scripts/run_extractor.py');

export async function runExtractScript<T>(
    pdfUrl: string,
    extractor: ExtractorType = 'school_population'
): Promise<T[]> {
    const { stdout, stderr } = await execFileAsync(venvPython, [
        runExtractorScript,
        extractor,
        pdfUrl,
    ]);

    if (stderr) {
        console.error('Python stderr:', stderr);
    }

    try {
        return JSON.parse(stdout) as T[];
    } catch (err) {
        console.error('Error parsing JSON from Python:', err);
        throw err;
    }
}
