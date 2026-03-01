import { NextRequest, NextResponse } from "next/server";
import { createDemoToken } from "@/lib/auth/jwt";

export async function POST(_req: NextRequest) {
  try {
    // Create a demo JWT token (1 hour expiry)
    const token = await createDemoToken();

    // Create response with redirect
    const response = NextResponse.json({
      success: true,
      redirect: "/portal/dashboard?demo=true",
    });

    // Set the demo session cookie
    response.cookies.set({
      name: "ev-demo-session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    // Also set the regular portal session cookie for compatibility
    response.cookies.set({
      name: "portal_session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Demo start error:", error);
    return NextResponse.json(
      { error: "Failed to start demo session" },
      { status: 500 }
    );
  }
}
