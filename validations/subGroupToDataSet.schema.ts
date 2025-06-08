import { z } from 'zod';

export const SubGroupToDataSetSchema = z.object({
    subGroupId: z.number().int().min(1, 'SubGroupId is required'),
    dataSetId: z.number().int().min(1, 'DataSetId is required'),
});

export const SubGroupToDataSetArraySchema = z.array(SubGroupToDataSetSchema);
