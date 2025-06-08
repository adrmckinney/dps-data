import { z } from 'zod';

export const DisciplineToDataSetSchema = z.object({
    disciplineId: z.number().int().min(1, 'GradeId is required'),
    dataSetId: z.number().int().min(1, 'DataSetId is required'),
});

export const DisciplineToDataSetArraySchema = z.array(DisciplineToDataSetSchema);
