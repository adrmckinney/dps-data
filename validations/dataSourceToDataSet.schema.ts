import { z } from 'zod';

export const DataSourceToDataSetSchema = z.object({
    dataSourceId: z.number().int().min(1, 'GradeId is required'),
    dataSetId: z.number().int().min(1, 'DataSetId is required'),
});

export const DataSourceToDataSetArraySchema = z.array(DataSourceToDataSetSchema);
