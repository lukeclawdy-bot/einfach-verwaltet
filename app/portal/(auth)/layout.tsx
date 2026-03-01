/**
 * Auth route group layout — no sidebar, no wrappers.
 * Overrides the parent /portal/layout.tsx for login/auth pages.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
