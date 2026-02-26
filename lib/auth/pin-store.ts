/**
 * PIN Store — in-memory for MVP.
 * Replace with Redis/DB-backed store for multi-instance production.
 */

interface PinEntry {
  pin: string;
  landlordId: string;
  expiresAt: number; // Unix ms
}

// Module-level map — persists across requests in the same process
const store = new Map<string, PinEntry>();

export function storePin(
  email: string,
  pin: string,
  landlordId: string,
  ttlMs = 10 * 60 * 1000
): void {
  store.set(email.toLowerCase(), {
    pin: pin.toUpperCase(),
    landlordId,
    expiresAt: Date.now() + ttlMs,
  });
}

export function verifyAndConsumePin(
  email: string,
  pin: string
): string | null {
  const entry = store.get(email.toLowerCase());
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    store.delete(email.toLowerCase());
    return null;
  }
  if (entry.pin !== pin.toUpperCase()) return null;
  store.delete(email.toLowerCase()); // one-time use
  return entry.landlordId;
}
