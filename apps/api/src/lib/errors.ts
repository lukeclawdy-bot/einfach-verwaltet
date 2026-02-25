/**
 * Standardized error response helpers
 * All API errors follow this shape:
 * { error: string, code?: string, details?: unknown }
 */

import type { Context } from 'hono';
import { ZodError } from 'zod';

export interface ApiError {
  error: string;
  code?: string;
  details?: unknown;
}

export function errorResponse(
  c: Context,
  status: number,
  message: string,
  code?: string,
  details?: unknown
): Response {
  const body: ApiError = { error: message };
  if (code) body.code = code;
  if (details !== undefined) body.details = details;
  return c.json(body, status as Parameters<typeof c.json>[1]);
}

export function validationError(c: Context, err: ZodError): Response {
  return errorResponse(
    c,
    422,
    'Validation failed',
    'VALIDATION_ERROR',
    err.errors.map(e => ({ path: e.path.join('.'), message: e.message }))
  );
}

export function notFound(c: Context, resource = 'Resource'): Response {
  return errorResponse(c, 404, `${resource} not found`, 'NOT_FOUND');
}

export function unauthorized(c: Context, message = 'Unauthorized'): Response {
  return errorResponse(c, 401, message, 'UNAUTHORIZED');
}

export function forbidden(c: Context, message = 'Forbidden'): Response {
  return errorResponse(c, 403, message, 'FORBIDDEN');
}

export function serverError(c: Context, err?: unknown): Response {
  const message = err instanceof Error ? err.message : 'Internal server error';
  console.error('[API Error]', err);
  return errorResponse(c, 500, 'Internal server error', 'INTERNAL_ERROR',
    process.env.NODE_ENV === 'development' ? message : undefined
  );
}
