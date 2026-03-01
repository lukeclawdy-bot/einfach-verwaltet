import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const base =
    process.env.NEXT_PUBLIC_APP_URL ||
    `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  const res = NextResponse.redirect(new URL("/freelancer/login", base));
  res.cookies.set("freelancer_session", "", { maxAge: 0, path: "/" });
  return res;
}
