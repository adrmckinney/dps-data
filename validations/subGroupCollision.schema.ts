import { z } from 'zod';

export const SubGroupCollisionSchema = z.object({
    sourceId: z.number().int().min(1, 'SourceId is required'),
    targetId: z.number().int().min(1, 'TargetId is required'),
});

export const SubGroupCollisionArraySchema = z.array(SubGroupCollisionSchema);
