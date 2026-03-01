import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handwerker-Portal | einfach verwaltet.",
  description: "Ihr Portal für Aufträge von einfach verwaltet.",
  robots: "noindex, nofollow",
};

export default function FreelancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
