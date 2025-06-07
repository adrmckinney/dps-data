import { z } from 'zod';

export const LevelToDataSetSchema = z.object({
    level: z.object({
        connect: z.object({
            id: z.number().int().min(1, 'levelId is required'),
        }),
    }),
    dataSet: z.object({
        connect: z.object({
            id: z.number().int().min(1, 'dataSetId is required'),
        }),
    }),
});

export const LevelToDataSetArraySchema = z.array(LevelToDataSetSchema);
