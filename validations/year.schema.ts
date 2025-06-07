import { z } from 'zod';

export const YearSchema = z
    .object({
        startYear: z.string().regex(/^\d{4}$/, 'startYear must be a 4-digit year'),
        endYear: z.string().regex(/^\d{4}$/, 'endYear must be a 4-digit year'),
        schoolYear: z.string().regex(/^\d{4}-\d{4}$/, "schoolYear must be in format 'YYYY-YYYY'"),
    })
    .refine(({ startYear, endYear }) => parseInt(endYear) > parseInt(startYear), {
        message: 'endYear must be after startYear',
        path: ['endYear'],
    })
    .refine(({ startYear, endYear }) => parseInt(endYear) === parseInt(startYear) + 1, {
        message: 'endYear must be exactly one year after startYear',
        path: ['endYear'],
    });

export const YearArraySchema = z.array(YearSchema);
