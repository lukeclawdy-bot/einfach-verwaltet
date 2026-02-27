export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  
  async function login(formData: FormData) {
    "use server";
    const password = formData.get("password") as string;
    const adminSecret = process.env.ADMIN_SECRET;
    
    if (!adminSecret) {
      // In dev mode without ADMIN_SECRET, allow any password
      const cookieStore = await cookies();
      cookieStore.set("ADMIN_SECRET", "dev-mode", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      redirect("/admin");
    }
    
    if (password === adminSecret) {
      const cookieStore = await cookies();
      cookieStore.set("ADMIN_SECRET", adminSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      redirect("/admin");
    } else {
      redirect("/admin/login?error=invalid");
    }
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-teal rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white font-serif">Command Center</h1>
          <p className="text-white/60 text-sm mt-1">Interner Admin-Bereich</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          {params.error === "invalid" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-600 text-sm font-medium">Falsches Passwort</p>
            </div>
          )}

          <form action={login} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-navy mb-2">
                Passwort
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                autoFocus
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 text-navy"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy text-white py-3 rounded-lg font-medium hover:bg-navy/90 transition-colors"
            >
              Anmelden
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-text-light hover:text-teal transition-colors">
              ← Zurück zur Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
