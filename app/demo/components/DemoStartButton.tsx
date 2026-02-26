"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DemoStartButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const startDemo = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/demo/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      
      if (res.ok) {
        const data = await res.json();
        router.push(data.redirect);
      } else {
        console.error("Failed to start demo");
        setLoading(false);
      }
    } catch (error) {
      console.error("Demo start error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={startDemo}
      disabled={loading}
      className="inline-flex items-center justify-center px-8 py-4 bg-teal text-white font-semibold rounded-xl hover:bg-teal-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Demo wird gestartet...
        </>
      ) : (
        "Demo starten"
      )}
    </button>
  );
}
