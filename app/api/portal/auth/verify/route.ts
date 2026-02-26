import { NextRequest, NextResponse } from "next/server";
import { verifyToken, createToken } from "@/lib/auth/jwt";
import { verifyAndConsumePin } from "@/lib/auth/pin-store";

function loginRedirect(req: NextRequest, error?: string) {
  const base =
    process.env.NEXT_PUBLIC_APP_URL ||
    `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  const url = new URL("/portal/login", base);
  if (error) url.searchParams.set("error", error);
  return NextResponse.redirect(url);
}

function dashboardRedirect(req: NextRequest) {
  const base =
    process.env.NEXT_PUBLIC_APP_URL ||
    `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  return NextResponse.redirect(new URL("/portal/dashboard", base));
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token = searchParams.get("token");
  const pin = searchParams.get("pin");
  const email = searchParams.get("email");

  let landlordId: string | null = null;
  let sessionEmail = "";

  // ── Path 1: JWT magic-link token ──────────────────────────────────────────
  if (token) {
    const payload = await verifyToken(token);
    if (payload?.landlordId) {
      landlordId = payload.landlordId;
      sessionEmail = payload.email ?? "";
    }
  }

  // ── Path 2: PIN + email ───────────────────────────────────────────────────
  if (!landlordId && pin && email) {
    const found = verifyAndConsumePin(email.toLowerCase(), pin);
    if (found) {
      landlordId = found;
      sessionEmail = email.toLowerCase();
    }
  }

  if (!landlordId) {
    return loginRedirect(req, "invalid");
  }

  // Create a fresh 7-day session cookie
  const sessionToken = await createToken({
    landlordId,
    email: sessionEmail,
  });

  const res = dashboardRedirect(req);
  res.cookies.set("portal_session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });

  return res;
}
