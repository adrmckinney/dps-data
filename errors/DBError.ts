import { AppError } from './AppError.ts';

export class DBError extends AppError {
    constructor(message: string, originalError?: unknown) {
        super('DBError', message, originalError);
    }
}
