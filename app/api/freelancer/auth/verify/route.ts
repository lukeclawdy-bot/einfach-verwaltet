import { NextRequest, NextResponse } from "next/server";
import { createFreelancerToken } from "@/lib/auth/freelancer-jwt";
import { verifyAndConsumeFreelancerPin } from "@/lib/auth/freelancer-pin-store";

function loginRedirect(req: NextRequest, error?: string) {
  const base =
    process.env.NEXT_PUBLIC_APP_URL ||
    `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  const url = new URL("/freelancer/login", base);
  if (error) url.searchParams.set("error", error);
  return NextResponse.redirect(url);
}

function dashboardRedirect(req: NextRequest) {
  const base =
    process.env.NEXT_PUBLIC_APP_URL ||
    `${req.nextUrl.protocol}//${req.nextUrl.host}`;
  return NextResponse.redirect(new URL("/freelancer/dashboard", base));
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const pin = searchParams.get("pin");
  const email = searchParams.get("email");

  if (!pin || !email) {
    return loginRedirect(req, "missing");
  }

  const result = verifyAndConsumeFreelancerPin(email.toLowerCase(), pin);

  if (!result) {
    return loginRedirect(req, "invalid");
  }

  const sessionToken = await createFreelancerToken({
    freelancerId: result.freelancerId,
    email: result.email,
    name: result.name,
  });

  const res = dashboardRedirect(req);
  res.cookies.set("freelancer_session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });

  return res;
}
