import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Public portal routes — no auth required
const PUBLIC_PORTAL_PATHS = [
  "/portal/login",
  "/portal/onboarding",
  "/api/portal/auth/magic-link",
  "/api/portal/auth/verify",
  "/api/portal/auth/logout",
];

// Public demo routes — no auth required
const PUBLIC_DEMO_PATHS = [
  "/demo",
  "/api/demo/start",
];

// Public tenant routes — no auth required
const PUBLIC_TENANT_PATHS = [
  "/tenant/login",
  "/api/tenant/auth/magic-link",
  "/api/tenant/auth/verify",
  "/api/tenant/auth/logout",
];

// Public admin routes — no auth required
const PUBLIC_ADMIN_PATHS = [
  "/admin/login",
];

// Public freelancer routes — no auth required
const PUBLIC_FREELANCER_PATHS = [
  "/freelancer/login",
  "/api/freelancer/auth/magic-link",
  "/api/freelancer/auth/verify",
  "/api/freelancer/auth/logout",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ─── DEMO ROUTES — always public ─────────────────────────────────────────
  const isDemoRoute = PUBLIC_DEMO_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  if (isDemoRoute) return NextResponse.next();

  // ─── PORTAL ROUTES ───────────────────────────────────────────────────────
  if (pathname.startsWith("/portal") || pathname.startsWith("/api/portal")) {
    // Allow public paths (and sub-paths)
    const isPublic = PUBLIC_PORTAL_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/")
    );
    if (isPublic) return NextResponse.next();

    // Skip auth if JWT_SECRET not configured (dev/demo mode)
    if (!process.env.JWT_SECRET) {
      return NextResponse.next();
    }

    // Read session cookie — accept demo session or regular portal session
    const demoToken = request.cookies.get("ev-demo-session")?.value;
    const token = demoToken || request.cookies.get("portal_session")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/portal/login", request.url));
    }

    try {
      // Dynamic import to avoid build-time crash
      const { verifyToken } = await import("@/lib/auth/jwt");
      const payload = await verifyToken(token);
      if (!payload?.landlordId) {
        const res = NextResponse.redirect(new URL("/portal/login", request.url));
        res.cookies.set("portal_session", "", { maxAge: 0, path: "/" });
        res.cookies.set("ev-demo-session", "", { maxAge: 0, path: "/" });
        return res;
      }

      // Inject landlordId and isDemo as request headers so server components can read them
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-landlord-id", payload.landlordId);
      requestHeaders.set("x-landlord-email", payload.email ?? "");
      if (payload.isDemo) {
        requestHeaders.set("x-is-demo", "true");
      }
      return NextResponse.next({ request: { headers: requestHeaders } });
    } catch {
      // Token invalid or JWT_SECRET missing — redirect to login
      const res = NextResponse.redirect(new URL("/portal/login", request.url));
      res.cookies.set("portal_session", "", { maxAge: 0, path: "/" });
      res.cookies.set("ev-demo-session", "", { maxAge: 0, path: "/" });
      return res;
    }
  }

  // ─── TENANT ROUTES ─────────────────────────────────────────────────────────
  if (pathname.startsWith("/tenant") || pathname.startsWith("/api/tenant")) {
    // Allow public paths (and sub-paths)
    const isPublic = PUBLIC_TENANT_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/")
    );
    if (isPublic) return NextResponse.next();

    // Skip auth if JWT_SECRET not configured (dev/demo mode)
    if (!process.env.JWT_SECRET) {
      return NextResponse.next();
    }

    // Read tenant session cookie
    const token = request.cookies.get("tenant_session")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/tenant/login", request.url));
    }

    try {
      // Dynamic import to avoid build-time crash
      const { verifyTenantToken } = await import("@/lib/auth/tenant-jwt");
      const payload = await verifyTenantToken(token);
      if (!payload?.tenantId) {
        const res = NextResponse.redirect(new URL("/tenant/login", request.url));
        res.cookies.set("tenant_session", "", { maxAge: 0, path: "/" });
        return res;
      }

      // Inject tenantId as a request header so server components can read it
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-tenant-id", payload.tenantId);
      requestHeaders.set("x-tenant-email", payload.email ?? "");
      return NextResponse.next({ request: { headers: requestHeaders } });
    } catch {
      // Token invalid — redirect to login
      const res = NextResponse.redirect(new URL("/tenant/login", request.url));
      res.cookies.set("tenant_session", "", { maxAge: 0, path: "/" });
      return res;
    }
  }

  // ─── ADMIN ROUTES ─────────────────────────────────────────────────────────
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    // Allow public paths
    const isPublic = PUBLIC_ADMIN_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/")
    );
    if (isPublic) return NextResponse.next();

    // Check admin secret cookie
    const adminSecret = process.env.ADMIN_SECRET;
    if (!adminSecret) {
      // If no ADMIN_SECRET configured, allow access in dev
      return NextResponse.next();
    }

    const adminCookie = request.cookies.get("ADMIN_SECRET")?.value;
    if (adminCookie !== adminSecret) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return NextResponse.next();
  }

  // ─── FREELANCER ROUTES ────────────────────────────────────────────────────
  if (pathname.startsWith("/freelancer") || pathname.startsWith("/api/freelancer")) {
    // Allow public paths
    const isPublic = PUBLIC_FREELANCER_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/")
    );
    if (isPublic) return NextResponse.next();

    // Skip auth if JWT_SECRET not configured (dev/demo mode)
    if (!process.env.JWT_SECRET) {
      return NextResponse.next();
    }

    const token = request.cookies.get("freelancer_session")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/freelancer/login", request.url));
    }

    try {
      const { verifyFreelancerToken } = await import("@/lib/auth/freelancer-jwt");
      const payload = await verifyFreelancerToken(token);
      if (!payload?.freelancerId) {
        const res = NextResponse.redirect(new URL("/freelancer/login", request.url));
        res.cookies.set("freelancer_session", "", { maxAge: 0, path: "/" });
        return res;
      }

      // Inject freelancerId as request headers
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-freelancer-id", payload.freelancerId);
      requestHeaders.set("x-freelancer-email", payload.email ?? "");
      if (payload.name) {
        requestHeaders.set("x-freelancer-name", payload.name);
      }
      return NextResponse.next({ request: { headers: requestHeaders } });
    } catch {
      const res = NextResponse.redirect(new URL("/freelancer/login", request.url));
      res.cookies.set("freelancer_session", "", { maxAge: 0, path: "/" });
      return res;
    }
  }

  // All other routes pass through
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/portal/:path*",
    "/api/portal/:path*",
    "/tenant/:path*",
    "/api/tenant/:path*",
    "/admin/:path*",
    "/api/admin/:path*",
    "/freelancer/:path*",
    "/api/freelancer/:path*",
  ],
};
