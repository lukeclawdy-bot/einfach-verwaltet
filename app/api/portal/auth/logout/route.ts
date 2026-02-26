import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const base =
    process.env.NEXT_PUBLIC_APP_URL ||
    `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  const res = NextResponse.redirect(new URL("/portal/login", base));
  res.cookies.set("portal_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  return res;
}

// Allow GET for simple href-based logout links
export const GET = POST;
