export class AppError extends Error {
    public originalError?: unknown;

    constructor(name: string, message: string, originalError?: unknown) {
        super(message);
        this.name = name;
        this.originalError = originalError;
        if (originalError instanceof Error && originalError.stack) {
            this.stack = originalError.stack;
        }
    }
}
