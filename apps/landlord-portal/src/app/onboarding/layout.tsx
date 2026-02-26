"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const TOTAL_STEPS = 7;

function getCurrentStep(pathname: string): number {
  if (pathname === "/onboarding") return 1;
  const match = pathname.match(/schritt-(\d+)/);
  return match ? parseInt(match[1], 10) : 1;
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentStep = getCurrentStep(pathname);
  const progressPercent = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-light-gray z-50">
        <div
          className="h-full bg-teal transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-light-gray z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-navy font-semibold text-lg">einfach verwaltet.</span>
          </Link>
          <div className="text-sm text-text-light">
            Schritt <span className="font-semibold text-navy">{currentStep}</span> von {TOTAL_STEPS}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
