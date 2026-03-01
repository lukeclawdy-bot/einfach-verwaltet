/**
 * Freelancer PIN Store — in-memory for MVP.
 * Replace with Redis/DB-backed store for multi-instance production.
 */

interface FreelancerPinEntry {
  pin: string;
  freelancerId: string;
  email: string;
  name?: string;
  expiresAt: number;
}

const freelancerPinStore = new Map<string, FreelancerPinEntry>();

export function generateFreelancerPin(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let pin = "";
  for (let i = 0; i < 6; i++) {
    pin += chars[Math.floor(Math.random() * chars.length)];
  }
  return pin;
}

export function storeFreelancerPin(
  email: string,
  pin: string,
  freelancerId: string,
  name?: string,
  ttlMs = 10 * 60 * 1000
): void {
  freelancerPinStore.set(email.toLowerCase(), {
    pin: pin.toUpperCase(),
    freelancerId,
    email: email.toLowerCase(),
    name,
    expiresAt: Date.now() + ttlMs,
  });
}

export function verifyAndConsumeFreelancerPin(
  email: string,
  pin: string
): { freelancerId: string; email: string; name?: string } | null {
  const entry = freelancerPinStore.get(email.toLowerCase());
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    freelancerPinStore.delete(email.toLowerCase());
    return null;
  }
  if (entry.pin !== pin.toUpperCase()) return null;
  freelancerPinStore.delete(email.toLowerCase());
  return {
    freelancerId: entry.freelancerId,
    email: entry.email,
    name: entry.name,
  };
}
