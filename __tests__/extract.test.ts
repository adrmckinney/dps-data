import { runExtractScript } from '../lib/runPython';
import { setupPythonEnv } from '../scripts/abstractUnitTest';
import { population } from '../scripts/pdf_links';

beforeAll(() => {
    setupPythonEnv();
});

test('extracts data from first population PDF', async () => {
    const result = await runExtractScript(population[0], 'school_population');
    const parsed = JSON.parse(result);

    expect(parsed.length).toBeGreaterThan(0);
    expect(parsed[0]).toHaveProperty('metadata');
    expect(parsed[0]).toHaveProperty('data');
    expect(Array.isArray(parsed[0].data)).toBe(true);

    console.log(JSON.stringify(parsed[0], null, 2));
}, 20000); // increased timeout for longer PDF parsing
