"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getToken } from "@/lib/api";
import { RepairForm } from "@/components/ui/RepairForm";
import { BottomNav } from "@/components/ui/BottomNav";

export default function NewTicketPage() {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) {
      router.replace("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 pt-12 pb-4 sticky top-0 z-40">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Link
            href="/tickets"
            className="p-2 -ml-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-slate-800">Neue Anfrage</h1>
            <p className="text-xs text-slate-500">Reparatur oder Meldung einreichen</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto px-4 mt-6">
        {/* Info strip */}
        <div className="flex items-center gap-2 bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 rounded-xl px-4 py-3 mb-6">
          <span className="text-sm">ℹ️</span>
          <p className="text-xs text-slate-600">
            Ihre Anfrage wird sofort an Ihre Hausverwaltung weitergeleitet.
            Wir melden uns so schnell wie möglich.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <RepairForm />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
