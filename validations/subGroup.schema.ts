import { z } from 'zod';

export const SubGroupSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    abbreviation: z.string().min(1, 'Abbreviation is required'),
    typeId: z.number().int().min(1, 'TypeId is required'),
    key: z.string().min(1, 'Key is required'),
    secondaryKey: z.string().min(1, 'SecondaryKey is required'),
});

export const SubGroupArraySchema = z.array(SubGroupSchema);
