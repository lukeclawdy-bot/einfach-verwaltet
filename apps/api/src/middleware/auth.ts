/**
 * JWT Auth Middleware for Hono.js
 * 
 * Usage:
 *   app.use('/api/properties/*', authMiddleware);
 *   app.use('/api/admin/*', authMiddleware, requireRole('admin'));
 */

import type { Context, Next } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { verifyAccessToken, type TokenPayload } from '../lib/jwt.js';

// Extend Hono context with auth user
declare module 'hono' {
  interface ContextVariableMap {
    user: TokenPayload;
  }
}

/**
 * Require a valid Bearer JWT in Authorization header
 */
export async function authMiddleware(c: Context, next: Next): Promise<Response | void> {
  const authHeader = c.req.header('Authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    throw new HTTPException(401, {
      message: 'Unauthorized: Missing or invalid Authorization header',
    });
  }

  const token = authHeader.slice(7);

  try {
    const payload = await verifyAccessToken(token);
    c.set('user', payload);
    await next();
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Token verification failed';

    if (message.includes('expired')) {
      throw new HTTPException(401, { message: 'Token expired. Please refresh.' });
    }

    throw new HTTPException(401, { message: 'Invalid token.' });
  }
}

/**
 * Require specific roles — use after authMiddleware
 */
export function requireRole(...roles: string[]) {
  return async (c: Context, next: Next): Promise<Response | void> => {
    const user = c.get('user');
    if (!user) throw new HTTPException(401, { message: 'Unauthorized' });
    if (!roles.includes(user.role)) {
      throw new HTTPException(403, {
        message: `Forbidden: Requires role ${roles.join(' or ')}`,
      });
    }
    await next();
  };
}

/**
 * Org isolation — ensure user can only access their own org's data
 * Called inside route handlers with: enforceOrgIsolation(c, targetOrgId)
 */
export function enforceOrgIsolation(c: Context, resourceOrgId: string): void {
  const user = c.get('user');
  if (user.role === 'admin' || user.role === 'system') return; // admins can cross-org
  if (user.org !== resourceOrgId) {
    throw new HTTPException(403, {
      message: 'Forbidden: Resource belongs to a different organization',
    });
  }
}
