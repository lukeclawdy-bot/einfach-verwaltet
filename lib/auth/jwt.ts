import { SignJWT, jwtVerify } from "jose";

// Lazily encode secret so the module doesn't crash if JWT_SECRET isn't set at import time
function getSecretKey(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET environment variable is required");
  return new TextEncoder().encode(secret);
}

export interface PortalSession {
  landlordId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export async function createToken(payload: {
  landlordId: string;
  email: string;
}): Promise<string> {
  return new SignJWT(payload as Record<string, unknown>)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecretKey());
}

export async function verifyToken(
  token: string
): Promise<PortalSession | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload as unknown as PortalSession;
  } catch {
    return null;
  }
}

export function isDemoMode(email: string): boolean {
  const demo = process.env.DEMO_LANDLORD_EMAIL;
  return !!demo && email === demo;
}

export async function getTokenFromCookie(
  cookieValue: string | undefined
): Promise<PortalSession | null> {
  if (!cookieValue) return null;
  return verifyToken(cookieValue);
}
