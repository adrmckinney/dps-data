import { AppError } from './AppError.ts';

export class BadDataError extends AppError {
    constructor(message: string, originalError?: unknown) {
        super('DBError', message, originalError);
    }
}
