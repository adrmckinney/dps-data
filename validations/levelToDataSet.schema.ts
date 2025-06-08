import { z } from 'zod';

export const LevelToDataSetSchema = z.object({
    levelId: z.number().int().min(1, 'LevelId is required'),
    dataSetId: z.number().int().min(1, 'DataSetId is required'),
});

export const LevelToDataSetArraySchema = z.array(LevelToDataSetSchema);
