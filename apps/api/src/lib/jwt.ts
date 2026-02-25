/**
 * JWT utilities — jose library (Web Crypto API, no Node.js secrets)
 * 
 * JWT Payload matches DB Schema spec section 10.2:
 * { sub, org, role, jti, iat, exp, permissions }
 */

import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { generateId } from '../mock/db.js';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? 'dev_secret_change_in_production_min32chars_!!!'
);

const ACCESS_TOKEN_TTL = process.env.JWT_EXPIRES_IN ?? '15m';

export interface TokenPayload extends JWTPayload {
  sub: string;        // userId
  org: string;        // organizationId
  role: string;       // UserRole
  jti: string;        // unique token ID (for revocation)
  permissions?: string[];
}

function parseTTL(ttl: string): number {
  const match = ttl.match(/^(\d+)([smhd])$/);
  if (!match) return 900; // default 15min
  const [, amount, unit] = match;
  const multipliers: Record<string, number> = { s: 1, m: 60, h: 3600, d: 86400 };
  return parseInt(amount) * (multipliers[unit] ?? 60);
}

/**
 * Sign an access JWT
 */
export async function signAccessToken(payload: Omit<TokenPayload, 'jti' | 'iat' | 'exp'>): Promise<string> {
  const ttlSeconds = parseTTL(ACCESS_TOKEN_TTL);
  return new SignJWT({ ...payload, jti: generateId('jti') })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${ttlSeconds}s`)
    .setIssuer('einfachverwaltet.de')
    .setAudience('api')
    .sign(JWT_SECRET);
}

/**
 * Verify and decode an access JWT
 */
export async function verifyAccessToken(token: string): Promise<TokenPayload> {
  const { payload } = await jwtVerify(token, JWT_SECRET, {
    issuer: 'einfachverwaltet.de',
    audience: 'api',
  });
  return payload as TokenPayload;
}

/**
 * Generate an opaque refresh token (stored as SHA-256 hash in DB)
 */
export function generateRefreshToken(): string {
  const array = new Uint8Array(48);
  crypto.getRandomValues(array);
  return Buffer.from(array).toString('base64url');
}

/**
 * Hash a refresh token for storage
 */
export async function hashRefreshToken(token: string): Promise<string> {
  const data = new TextEncoder().encode(token);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Buffer.from(hash).toString('hex');
}
