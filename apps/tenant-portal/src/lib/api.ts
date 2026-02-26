// ─────────────────────────────────────────────
// PropOS Tenant Portal — API Client
// Connects to Hono.js backend at localhost:3001
// ─────────────────────────────────────────────

import type { AuthToken, CreateTicketPayload, Ticket } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

// ── Token helpers ──────────────────────────────

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("ev_token");
}

export function setToken(token: string): void {
  localStorage.setItem("ev_token", token);
}

export function removeToken(): void {
  localStorage.removeItem("ev_token");
  localStorage.removeItem("ev_user");
}

export function getUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("ev_user");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setUser(user: object): void {
  localStorage.setItem("ev_user", JSON.stringify(user));
}

// ── Fetch wrapper ──────────────────────────────

async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: "Unbekannter Fehler" }));
    throw new Error(error.error ?? `HTTP ${res.status}`);
  }

  return res.json() as Promise<T>;
}

// ── Auth ───────────────────────────────────────

export async function loginWithCredentials(
  email: string,
  password: string
): Promise<AuthToken> {
  const data = await apiFetch<AuthToken>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  setToken(data.accessToken);
  setUser(data.user);
  return data;
}

export async function getMe() {
  return apiFetch<{ user: AuthToken["user"] }>("/api/auth/me");
}

export async function logout() {
  try {
    await apiFetch("/api/auth/logout", { method: "POST" });
  } finally {
    removeToken();
  }
}

// ── Tickets ────────────────────────────────────

export async function listTickets(params?: {
  status?: string;
  page?: number;
  limit?: number;
}): Promise<{ tickets: Ticket[]; total: number; page: number; limit: number }> {
  const qs = new URLSearchParams();
  if (params?.status) qs.set("status", params.status);
  if (params?.page) qs.set("page", String(params.page));
  if (params?.limit) qs.set("limit", String(params.limit));
  const query = qs.toString() ? `?${qs.toString()}` : "";
  return apiFetch(`/api/tickets${query}`);
}

export async function getTicket(id: string): Promise<{ ticket: Ticket }> {
  return apiFetch(`/api/tickets/${id}`);
}

export async function createTicket(
  payload: CreateTicketPayload
): Promise<{ ticket: Ticket }> {
  return apiFetch<{ ticket: Ticket }>("/api/tickets", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

// ── Dashboard ──────────────────────────────────

export async function getDashboardSummary() {
  return apiFetch("/api/dashboard/summary");
}

// ── Demo login helper ──────────────────────────

/**
 * Demo login using the seeded tenant credentials from the API README.
 * Sets localStorage token + user so the portal works without email.
 */
export async function demoLogin(): Promise<AuthToken> {
  return loginWithCredentials("julia.klein@example.de", "demo1234");
}
