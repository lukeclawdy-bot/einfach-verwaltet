"use client";

import Link from "next/link";
import type { Ticket } from "@/types";
import { StatusBadge } from "./StatusBadge";
import { categoryLabel, formatDateShort } from "@/lib/utils";

interface TicketCardProps {
  ticket: Ticket;
}

const categoryIcons: Record<string, string> = {
  repair: "🔧",
  billing: "💶",
  noise: "🔊",
  cleanliness: "🧹",
  emergency: "🚨",
  contract: "📄",
  neighbor: "👥",
  general: "💬",
  other: "📌",
};

export function TicketCard({ ticket }: TicketCardProps) {
  const icon = categoryIcons[ticket.category] ?? "📌";

  return (
    <Link href={`/tickets/${ticket.id}`} className="block group">
      <div className="bg-white rounded-xl border border-slate-200 p-4 transition-all duration-150 hover:border-teal-400 hover:shadow-md active:scale-[0.99] group-hover:shadow-[0_0_0_1px_#2DD4BF20]">
        <div className="flex items-start gap-3">
          {/* Category icon */}
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-xl flex-shrink-0">
            {icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-slate-800 text-sm leading-tight truncate">
                {ticket.title}
              </p>
              <StatusBadge status={ticket.status} size="sm" />
            </div>

            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {ticket.description}
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-slate-400">
                {categoryLabel(ticket.category)}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-400">
                {formatDateShort(ticket.createdAt)}
              </span>
            </div>
          </div>

          {/* Chevron */}
          <div className="flex-shrink-0 text-slate-300 group-hover:text-teal-400 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
