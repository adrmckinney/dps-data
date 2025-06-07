import { z } from 'zod';

export const DataSetSchema = z.object({
    key: z.string().min(1, 'Key is required'),
    label: z.string().min(1, 'Label is required'),
    description: z.string().optional(),
});

export const DataSetArraySchema = z.array(DataSetSchema);
