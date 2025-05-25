import { NextRequest, NextResponse } from 'next/server';
import { AppError } from './AppError';

function handleApiError(error: unknown) {
    if (error instanceof AppError) {
        console.error(`[${error.name}] ${error.message}`, error.originalError);
        return NextResponse.json({ error: error.message }, { status: error.statusCode });
    }

    console.error('[UnhandledError]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}

type HandlerContext = {
    params?: Record<string, string>;
    [key: string]: unknown;
};

type ApiHandler<ReturnType = NextResponse> = (
    req: NextRequest,
    context?: HandlerContext
) => Promise<ReturnType>;

/**
 * Wraps an API route handler with centralized error handling.
 *
 * @param handler The original API handler function.
 * @returns A new handler that automatically catches and formats AppErrors.
 */
export function withApiErrorHandling<T extends ApiHandler>(
    handler: T
): (req: NextRequest, context?: HandlerContext) => Promise<NextResponse> {
    return async (req: NextRequest, context?: HandlerContext): Promise<NextResponse> => {
        try {
            return await handler(req, context);
        } catch (error) {
            return handleApiError(error);
        }
    };
}
