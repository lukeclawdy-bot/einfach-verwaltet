// ─────────────────────────────────────────────
// Utility helpers
// ─────────────────────────────────────────────

import type { TicketStatus, TicketCategory, TicketPriority } from "@/types";
import { CATEGORY_LABELS, STATUS_LABELS } from "@/types";

/**
 * Format a date string to German locale (e.g. "26. Februar 2026")
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

/**
 * Format a date string to short German format (e.g. "26.02.2026")
 */
export function formatDateShort(dateString: string): string {
  return new Intl.DateTimeFormat("de-DE").format(new Date(dateString));
}

/**
 * Returns Tailwind color classes for a given ticket status
 */
export function statusColor(status: TicketStatus): {
  bg: string;
  text: string;
  dot: string;
} {
  switch (status) {
    case "open":
      return { bg: "bg-amber-100", text: "text-amber-800", dot: "bg-amber-500" };
    case "in_progress":
      return { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500" };
    case "resolved":
      return {
        bg: "bg-emerald-100",
        text: "text-emerald-800",
        dot: "bg-emerald-500",
      };
    case "closed":
      return { bg: "bg-gray-100", text: "text-gray-600", dot: "bg-gray-400" };
  }
}

export function statusLabel(status: TicketStatus): string {
  return STATUS_LABELS[status] ?? status;
}

export function categoryLabel(category: TicketCategory): string {
  return CATEGORY_LABELS[category] ?? category;
}

export function priorityColor(
  priority: TicketPriority
): { bg: string; text: string } {
  switch (priority) {
    case "emergency":
      return { bg: "bg-red-100", text: "text-red-800" };
    case "high":
      return { bg: "bg-orange-100", text: "text-orange-800" };
    case "normal":
      return { bg: "bg-blue-50", text: "text-blue-700" };
    case "low":
      return { bg: "bg-gray-100", text: "text-gray-600" };
  }
}
