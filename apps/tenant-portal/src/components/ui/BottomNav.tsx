"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/dashboard",
    label: "Übersicht",
    icon: (active: boolean) => (
      <svg
        className={`w-5 h-5 ${active ? "text-[#2DD4BF]" : "text-slate-500"}`}
        fill={active ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 0 : 1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    href: "/tickets",
    label: "Anfragen",
    icon: (active: boolean) => (
      <svg
        className={`w-5 h-5 ${active ? "text-[#2DD4BF]" : "text-slate-500"}`}
        fill={active ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 0 : 1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    href: "/tickets/new",
    label: "Neu",
    icon: () => (
      <div className="w-10 h-10 rounded-full bg-[#1B2B4B] flex items-center justify-center -mt-5 shadow-lg border-2 border-white">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    ),
    isAction: true,
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 pb-safe">
      <div className="max-w-md mx-auto flex items-end justify-around px-4 pt-2 pb-3">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/tickets" &&
              pathname.startsWith("/tickets") &&
              pathname !== "/tickets/new");
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 min-w-[60px]"
            >
              {item.icon(isActive)}
              {!item.isAction && (
                <span
                  className={`text-[10px] font-medium ${
                    isActive ? "text-[#2DD4BF]" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
