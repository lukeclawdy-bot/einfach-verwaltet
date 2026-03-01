import { cookies } from "next/headers";
import { getTokenFromCookie } from "@/lib/auth/jwt";
import { PortalSidebar } from "@/components/PortalSidebar";

/**
 * Portal layout — conditionally renders the sidebar.
 *
 * Rules:
 * - No portal_session cookie (unauthenticated) → no sidebar (clean login page)
 * - portal_session or ev-demo-session present → sidebar + optional demo banner
 *
 * The login page itself renders full-screen; once logged in, the session cookie
 * is set and subsequent navigations show the sidebar.
 */
async function getSessionState(): Promise<{ hasSidebar: boolean; isDemo: boolean }> {
  try {
    const cookieStore = await cookies();

    // Demo session → always show sidebar with banner
    const demoToken = cookieStore.get("ev-demo-session")?.value;
    if (demoToken) {
      const payload = await getTokenFromCookie(demoToken);
      if (payload?.isDemo) return { hasSidebar: true, isDemo: true };
    }

    // Real portal session
    const portalToken = cookieStore.get("portal_session")?.value;
    if (portalToken) {
      const payload = await getTokenFromCookie(portalToken);
      if (payload) {
        const isDemo = !!(payload.isDemo || payload.landlordId === "demo");
        return { hasSidebar: true, isDemo };
      }
    }

    // No valid session → no sidebar (login page)
    return { hasSidebar: false, isDemo: false };
  } catch {
    return { hasSidebar: false, isDemo: false };
  }
}

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { hasSidebar, isDemo } = await getSessionState();

  if (!hasSidebar) {
    // Login / unauthenticated: clean full-screen layout, no sidebar
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-light-gray">
      <PortalSidebar isDemo={isDemo} />
      {/* Offset for fixed sidebar (256px) + optional demo banner (52px) */}
      <div className={`ml-56 ${isDemo ? "pt-[52px]" : ""}`}>
        {children}
      </div>
    </div>
  );
}
