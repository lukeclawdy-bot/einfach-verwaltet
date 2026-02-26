"use client";

import { useState } from "react";

interface Props {
  actionId: string;
  actionLabel: string;
  dismissLabel: string;
  onUpdate?: () => void;
}

export function ActionButtons({ actionId, actionLabel, dismissLabel, onUpdate }: Props) {
  const [hidden, setHidden] = useState(false);

  const handle = async (status: "actioned" | "dismissed") => {
    setHidden(true); // optimistic
    try {
      await fetch("/api/portal/ai-actions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: actionId, status }),
      });
      onUpdate?.();
    } catch {
      setHidden(false);
    }
  };

  if (hidden) return null;

  return (
    <div className="flex gap-2 flex-shrink-0">
      <button
        onClick={() => handle("actioned")}
        className="text-xs bg-navy text-white px-3 py-1.5 rounded-lg hover:bg-teal transition-colors whitespace-nowrap"
      >
        {actionLabel}
      </button>
      <button
        onClick={() => handle("dismissed")}
        className="text-xs text-text-light hover:text-navy px-2 py-1.5 transition-colors"
      >
        {dismissLabel}
      </button>
    </div>
  );
}
