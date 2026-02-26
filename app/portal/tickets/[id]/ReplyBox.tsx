"use client";

import { useState } from "react";

interface Props {
  ticketId: string;
  category?: string;
  tenantMessage?: string;
}

export function ReplyBox({ ticketId, category, tenantMessage }: Props) {
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [drafting, setDrafting] = useState(false);
  const [sent, setSent] = useState(false);

  const draftWithAI = async () => {
    setDrafting(true);
    try {
      const res = await fetch("/api/ai/draft-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticketId, tenantMessage, category }),
      });
      const { draft } = await res.json();
      if (draft) setReply(draft);
    } finally {
      setDrafting(false);
    }
  };

  const send = async () => {
    if (!reply.trim()) return;
    setLoading(true);
    try {
      await fetch(`/api/portal/tickets/${ticketId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          landlordId: "demo", // TODO: replace with session landlordId
          direction: "outbound",
          body: reply,
          aiGenerated: false,
        }),
      });
      setSent(true);
      setReply("");
      setTimeout(() => setSent(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h3 className="font-semibold text-navy mb-3">Antwort senden</h3>
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Antwort eingeben..."
        rows={4}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-navy resize-none text-sm transition-all"
      />
      <div className="flex justify-between items-center mt-3">
        <button
          onClick={draftWithAI}
          disabled={drafting}
          className="text-sm text-teal hover:text-navy font-medium flex items-center gap-1.5 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          {drafting ? "KI formuliert..." : "Mit KI formulieren"}
        </button>
        <button
          onClick={send}
          disabled={!reply.trim() || loading}
          className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all
            ${reply.trim() && !loading ? "bg-teal text-white hover:bg-navy" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
        >
          {loading ? "Senden..." : sent ? "Gesendet ✓" : "Senden"}
        </button>
      </div>
    </div>
  );
}
