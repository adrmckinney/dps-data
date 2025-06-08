import { z } from 'zod';

export const SubjectToDataSetSchema = z.object({
    subjectId: z.number().int().min(1, 'GradeId is required'),
    dataSetId: z.number().int().min(1, 'DataSetId is required'),
});

export const SubjectToDataSetArraySchema = z.array(SubjectToDataSetSchema);
