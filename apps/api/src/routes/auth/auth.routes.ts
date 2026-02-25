/**
 * Auth Routes
 * POST /api/auth/login     — email/password → JWT access + refresh token
 * POST /api/auth/refresh   — rotate refresh token
 * POST /api/auth/logout    — revoke refresh token
 * GET  /api/auth/me        — get current user profile (protected)
 */

import { Hono } from 'hono';
import { z } from 'zod';
import { MockDB, generateId, type User } from '../../mock/db.js';
import {
  signAccessToken,
  generateRefreshToken,
  hashRefreshToken,
} from '../../lib/jwt.js';
import { authMiddleware } from '../../middleware/auth.js';
import { validationError, errorResponse, serverError } from '../../lib/errors.js';

const auth = new Hono();

// ─── Schema ──────────────────────────────────────────────────────────────────

const LoginSchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
  password: z.string().min(1, 'Passwort erforderlich'),
});

// ─── POST /api/auth/login ─────────────────────────────────────────────────────

auth.post('/login', async (c) => {
  try {
    const body = await c.req.json();
    const parsed = LoginSchema.safeParse(body);

    if (!parsed.success) return validationError(c, parsed.error);

    const { email, password } = parsed.data;

    // Find user
    const user = await MockDB.findUserByEmail(email);
    if (!user) {
      // Constant-time response to prevent user enumeration
      await MockDB.verifyPassword('dummy', '$2a$10$invalid.hash.to.prevent.timing.attacks');
      return errorResponse(c, 401, 'Ungültige E-Mail-Adresse oder Passwort', 'INVALID_CREDENTIALS');
    }

    // Check account lock
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      return errorResponse(c, 423, 'Account vorübergehend gesperrt. Bitte versuchen Sie es später erneut.', 'ACCOUNT_LOCKED');
    }

    // Verify password
    const passwordValid = await MockDB.verifyPassword(password, user.passwordHash);
    if (!passwordValid) {
      return errorResponse(c, 401, 'Ungültige E-Mail-Adresse oder Passwort', 'INVALID_CREDENTIALS');
    }

    // Sign access token
    const accessToken = await signAccessToken({
      sub: user.id,
      org: user.organizationId,
      role: user.role,
      permissions: getRolePermissions(user.role),
    });

    // Generate refresh token
    const refreshToken = generateRefreshToken();
    const refreshTokenHash = await hashRefreshToken(refreshToken);
    const refreshFamily = generateId('fam');

    await MockDB.storeRefreshToken({
      id: generateId('rt'),
      userId: user.id,
      tokenHash: refreshTokenHash,
      family: refreshFamily,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      createdAt: new Date(),
    });

    // Set refresh token as HttpOnly cookie
    c.header('Set-Cookie', [
      `refresh_token=${refreshToken}`,
      'HttpOnly',
      'Secure',
      'SameSite=Strict',
      `Max-Age=${30 * 24 * 60 * 60}`,
      'Path=/api/auth',
    ].join('; '));

    return c.json({
      accessToken,
      expiresIn: 900, // 15 minutes
      tokenType: 'Bearer',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        organizationId: user.organizationId,
        locale: user.locale,
        mfaEnabled: user.mfaEnabled,
      },
    });

  } catch (err) {
    return serverError(c, err);
  }
});

// ─── POST /api/auth/logout ────────────────────────────────────────────────────

auth.post('/logout', async (c) => {
  try {
    const cookieHeader = c.req.header('Cookie') ?? '';
    const match = cookieHeader.match(/refresh_token=([^;]+)/);

    if (match) {
      const tokenHash = await hashRefreshToken(match[1]);
      const rt = await MockDB.findRefreshToken(tokenHash);
      if (rt) await MockDB.revokeRefreshTokenFamily(rt.family);
    }

    c.header('Set-Cookie', 'refresh_token=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/api/auth');
    return c.json({ success: true, message: 'Erfolgreich abgemeldet' });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── GET /api/auth/me ─────────────────────────────────────────────────────────

auth.get('/me', authMiddleware, async (c) => {
  try {
    const jwtUser = c.get('user');
    const user = await MockDB.findUserById(jwtUser.sub);

    if (!user) return errorResponse(c, 404, 'Benutzer nicht gefunden', 'NOT_FOUND');

    return c.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      organizationId: user.organizationId,
      locale: user.locale,
      timezone: user.timezone,
      mfaEnabled: user.mfaEnabled,
      lastLoginAt: user.lastLoginAt,
    });
  } catch (err) {
    return serverError(c, err);
  }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getRolePermissions(role: User['role']): string[] {
  const permissions: Record<string, string[]> = {
    admin: [
      'properties:read', 'properties:write',
      'units:read', 'units:write',
      'tenancies:read:all', 'tenancies:write',
      'tickets:read', 'tickets:write', 'tickets:resolve',
      'invoices:read:all', 'invoices:write',
      'documents:read:all', 'documents:write',
      'audit:read',
    ],
    agent: [
      'properties:read', 'properties:write',
      'units:read', 'units:write',
      'tenancies:read:all',
      'tickets:read', 'tickets:write', 'tickets:resolve',
      'invoices:read:all', 'invoices:write',
      'documents:read:all',
    ],
    owner: [
      'properties:read',
      'units:read',
      'invoices:read:own',
      'documents:read:own',
      'tickets:read',
    ],
    tenant: [
      'tenancies:read:own',
      'invoices:read:own',
      'tickets:create', 'tickets:read:own',
    ],
    system: ['*'],
  };
  return permissions[role] ?? [];
}

export default auth;
