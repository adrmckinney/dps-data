export class AppError extends Error {
    statusCode: number;
    originalError?: unknown;

    constructor(name: string, message: string, statusCode: number, originalError?: unknown) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
        this.originalError = originalError;
    }
}

/**
 * Thrown when the client sends malformed or invalid data in the request.
 * Use this for input validation failures or missing required fields.
 * Common usage: missing parameters, type mismatches, or schema validation errors.
 */
export class BadRequestError extends AppError {
    constructor(message: string, originalError?: unknown) {
        super('BadRequestError', message, 400, originalError);
    }
}

/**
 * Thrown when the client fails to authenticate.
 * Use this when no valid authentication credentials are provided with the request.
 * Common usage: missing or invalid tokens, sessions, or credentials.
 */
export class UnauthorizedError extends AppError {
    constructor(message: string = 'Unauthorized', originalError?: unknown) {
        super('UnauthorizedError', message, 401, originalError);
    }
}

/**
 * Thrown when the user is authenticated but not authorized to perform a specific action.
 * Use this to enforce permissions or roles on specific operations or endpoints.
 * Common usage: checking user roles or ownership before allowing an action.
 */
export class ForbiddenError extends AppError {
    constructor(message: string = 'Forbidden', originalError?: unknown) {
        super('ForbiddenError', message, 403, originalError);
    }
}

/**
 * Thrown when the requested resource could not be found.
 * Use this when a lookup for a specific item (e.g., by ID) fails.
 * Common usage: invalid IDs, non-existent records, or deleted resources.
 */
export class NotFoundError extends AppError {
    constructor(message: string = 'Resource not found', originalError?: unknown) {
        super('NotFoundError', message, 404, originalError);
    }
}

/**
 * Thrown when a request could not be completed due to a conflict with the current state of the resource.
 * Use this when an action violates uniqueness constraints, or a resource already exists in the target state.
 * Common usage: duplicate entries, conflicting edits, or business logic violations.
 */
export class ConflictError extends AppError {
    constructor(message: string = 'Conflict', originalError?: unknown) {
        super('ConflictError', message, 409, originalError);
    }
}

export class PreconditionFailedError extends AppError {
    constructor(message: string = 'Precondition failed', originalError?: unknown) {
        super('PreconditionFailedError', message, 412, originalError);
    }
}

/**
 * Thrown when a database-related error occurs.
 * Use this when a failure originates from the database/Repo layer, such as a failed query or connection error.
 * Helpful for logging and debugging database-specific issues separately from general 500 errors.
 */
export class DBError extends AppError {
    constructor(message: string = 'Database error', originalError?: unknown) {
        super('DBError', message, 500, originalError);
    }
}

/**
 * Thrown when a generic internal server error occurs.
 * Use this when the error is unexpected, not directly caused by the client, and not specific to any one subsystem.
 * Common usage: catching unexpected exceptions in the service or API layer.
 */
export class InternalServerError extends AppError {
    constructor(message: string = 'Internal server error', originalError?: unknown) {
        super('InternalServerError', message, 500, originalError);
    }
}
