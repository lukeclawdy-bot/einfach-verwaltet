import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function AdminLogoutPage() {
  const cookieStore = await cookies();
  cookieStore.set("ADMIN_SECRET", "", { maxAge: 0, path: "/" });
  redirect("/admin/login");
}
