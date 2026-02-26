"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Schritt7Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8">
      {/* Checkmark Animation */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-teal/10 flex items-center justify-center scale-in-animate">
          <svg
            className="w-12 h-12 text-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              className="checkmark-animate"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {/* Confetti-like circles */}
        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-teal/30 animate-ping" style={{ animationDelay: "0.1s" }} />
        <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-navy/30 animate-ping" style={{ animationDelay: "0.2s" }} />
        <div className="absolute top-0 -left-4 w-2 h-2 rounded-full bg-amber/50 animate-ping" style={{ animationDelay: "0.3s" }} />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy">
          Willkommen bei einfach verwaltet.
        </h1>
        <p className="text-text-light text-lg max-w-md mx-auto">
          Ihr persönliches Dashboard wird vorbereitet...
        </p>
      </div>

      {/* Loading indicator */}
      <div className="flex items-center gap-2 text-text-light">
        <div className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: "0.1s" }} />
        <div className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: "0.2s" }} />
      </div>
    </div>
  );
}
