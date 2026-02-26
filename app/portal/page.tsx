import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth/jwt";

export default async function PortalIndexPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("portal_session")?.value;

  if (token) {
    try {
      const payload = await verifyToken(token);
      if (payload?.landlordId) {
        redirect("/portal/dashboard");
      }
    } catch {
      // Invalid token, continue to login
    }
  }

  redirect("/portal/login");
}
