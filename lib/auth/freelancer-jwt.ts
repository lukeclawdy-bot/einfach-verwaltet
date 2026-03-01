import { SignJWT, jwtVerify } from "jose";

function getSecretKey(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET environment variable is required");
  return new TextEncoder().encode(secret);
}

export interface FreelancerSession {
  freelancerId: string;
  email: string;
  name?: string;
  iat?: number;
  exp?: number;
}

export async function createFreelancerToken(payload: {
  freelancerId: string;
  email: string;
  name?: string;
}): Promise<string> {
  return new SignJWT(payload as Record<string, unknown>)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecretKey());
}

export async function verifyFreelancerToken(
  token: string
): Promise<FreelancerSession | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload as unknown as FreelancerSession;
  } catch {
    return null;
  }
}

export async function getFreelancerTokenFromCookie(
  cookieValue: string | undefined
): Promise<FreelancerSession | null> {
  if (!cookieValue) return null;
  return verifyFreelancerToken(cookieValue);
}
