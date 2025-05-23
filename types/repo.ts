export type BulkInsertResult<TExtra = undefined> = {
    success: boolean;
    message: string;
    insertedCount: number;
    skippedCount: number;
    attemptedCount: number;
    timestamp: string;
    extra?: TExtra;
    error?: unknown;
};
