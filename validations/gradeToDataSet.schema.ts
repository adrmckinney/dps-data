import { z } from 'zod';

export const GradeToDataSetSchema = z.object({
    gradeId: z.number().int().min(1, 'GradeId is required'),
    dataSetId: z.number().int().min(1, 'DataSetId is required'),
});

export const GradeToDataSetArraySchema = z.array(GradeToDataSetSchema);
