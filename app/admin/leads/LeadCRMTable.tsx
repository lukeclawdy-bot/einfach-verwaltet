"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

interface Lead {
  id: string;
  createdAt: Date | string;
  name: string;
  email: string;
  telefon: string | null;
  verwaltungstyp: string | null;
  einheiten: string | null;
  standort: string | null;
  situation: string | null;
  prioritaet: string | null;
  status: string | null;
  notes: string | null;
}

const STATUS_OPTIONS = [
  { value: "new", label: "Neu" },
  { value: "contacted", label: "Kontaktiert" },
  { value: "demo_booked", label: "Demo gebucht" },
  { value: "proposal_sent", label: "Angebot gesendet" },
  { value: "won", label: "Gewonnen" },
  { value: "lost", label: "Verloren" },
];

const STATUS_COLORS: Record<string, string> = {
  new: "bg-teal/10 text-teal border-teal/20",
  contacted: "bg-amber/10 text-amber border-amber/20",
  demo_booked: "bg-blue-100 text-blue-700 border-blue-200",
  proposal_sent: "bg-purple-100 text-purple-700 border-purple-200",
  won: "bg-green-100 text-green-700 border-green-200",
  lost: "bg-red-100 text-red-700 border-red-200",
};

const VERWALTUNGSTYP_COLORS: Record<string, string> = {
  weg: "bg-indigo-100 text-indigo-700",
  miet: "bg-pink-100 text-pink-700",
  beides: "bg-teal-100 text-teal-700",
};

function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function downloadCSV(leads: Lead[]) {
  const headers = [
    "ID",
    "Datum",
    "Name",
    "E-Mail",
    "Telefon",
    "Verwaltungstyp",
    "Einheiten",
    "Standort",
    "Situation",
    "Priorität",
    "Status",
    "Notizen",
  ];

  const rows = leads.map((lead) => [
    lead.id,
    new Date(lead.createdAt).toISOString(),
    lead.name,
    lead.email,
    lead.telefon || "",
    lead.verwaltungstyp || "",
    lead.einheiten || "",
    lead.standort || "",
    lead.situation || "",
    lead.prioritaet || "",
    lead.status || "",
    lead.notes || "",
  ]);

  const csvContent = [
    headers.join(";"),
    ...rows.map((row) =>
      row
        .map((cell) => {
          const cellStr = String(cell);
          if (cellStr.includes(";") || cellStr.includes('"')) {
            return `"${cellStr.replace(/"/g, '""')}"`;
          }
          return cellStr;
        })
        .join(";")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `leads-${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

interface LeadTableProps {
  leads: Lead[];
}

export function LeadCRMTable({ leads }: LeadTableProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [standortFilter, setStandortFilter] = useState<string>("all");
  const [typFilter, setTypFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"date" | "einheiten">("date");
  const [expandedLead, setExpandedLead] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState("");

  const filteredLeads = useMemo(() => {
    let result = leads.filter((lead) => {
      const matchesSearch =
        !search ||
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        (lead.telefon && lead.telefon.includes(search));

      const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
      const matchesStandort = standortFilter === "all" || lead.standort === standortFilter;
      const matchesTyp = typFilter === "all" || lead.verwaltungstyp === typFilter;

      return matchesSearch && matchesStatus && matchesStandort && matchesTyp;
    });

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      // Sort by einheiten (extract number)
      const aNum = parseInt(a.einheiten?.match(/(\d+)/)?.[1] || "0");
      const bNum = parseInt(b.einheiten?.match(/(\d+)/)?.[1] || "0");
      return bNum - aNum;
    });

    return result;
  }, [leads, search, statusFilter, standortFilter, typFilter, sortBy]);

  // Get unique values for filters
  const standorte = useMemo(() => 
    [...new Set(leads.map(l => l.standort).filter(Boolean))] as string[],
    [leads]
  );

  async function updateStatus(leadId: string, newStatus: string) {
    try {
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  }

  async function saveNotes(leadId: string) {
    try {
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: noteDraft }),
      });
      if (response.ok) {
        setEditingNotes(null);
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to update notes:", error);
    }
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 bg-white rounded-xl border border-gray-100 p-4">
        <input
          type="text"
          placeholder="Suchen (Name, E-Mail, Telefon)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 w-64"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal"
        >
          <option value="all">Alle Status</option>
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <select
          value={standortFilter}
          onChange={(e) => setStandortFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal"
        >
          <option value="all">Alle Standorte</option>
          {standorte.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          value={typFilter}
          onChange={(e) => setTypFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal"
        >
          <option value="all">Alle Typen</option>
          <option value="weg">WEG</option>
          <option value="miet">Miet</option>
          <option value="beides">Beides</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "date" | "einheiten")}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal"
        >
          <option value="date">Sort: Datum</option>
          <option value="einheiten">Sort: Einheiten</option>
        </select>
        <button
          onClick={() => downloadCSV(filteredLeads)}
          className="ml-auto flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-navy/85 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-navy">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Kontakt</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Typ</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Einheiten</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Standort</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Priorität</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Datum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-text-light">
                    Keine Leads gefunden.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <>
                    <tr 
                      key={lead.id} 
                      className="hover:bg-gray-50/50 cursor-pointer"
                      onClick={() => setExpandedLead(expandedLead === lead.id ? null : lead.id)}
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium text-navy">{lead.name}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-teal text-xs">{lead.email}</p>
                        {lead.telefon && <p className="text-text-light text-xs">{lead.telefon}</p>}
                      </td>
                      <td className="px-4 py-3">
                        {lead.verwaltungstyp && (
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${VERWALTUNGSTYP_COLORS[lead.verwaltungstyp] || "bg-gray-100"}`}>
                            {lead.verwaltungstyp.toUpperCase()}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-text-light">{lead.einheiten || "—"}</td>
                      <td className="px-4 py-3 text-text-light">{lead.standort || "—"}</td>
                      <td className="px-4 py-3">
                        {lead.prioritaet && (
                          <span className="inline-flex px-2 py-0.5 rounded text-xs bg-gray-100 text-text-light">
                            {lead.prioritaet}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={lead.status || "new"}
                          onChange={(e) => updateStatus(lead.id, e.target.value)}
                          className={`text-xs px-2 py-1 rounded-full border font-medium cursor-pointer ${STATUS_COLORS[lead.status || "new"]}`}
                        >
                          {STATUS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-text-light text-xs whitespace-nowrap">
                        {formatDate(lead.createdAt)}
                      </td>
                    </tr>
                    {expandedLead === lead.id && (
                      <tr className="bg-gray-50/50">
                        <td colSpan={8} className="px-4 py-4">
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-medium text-navy mb-1">Situation</p>
                              <p className="text-sm text-text-light">{lead.situation || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-navy mb-1">Notizen</p>
                              {editingNotes === lead.id ? (
                                <div className="space-y-2">
                                  <textarea
                                    value={noteDraft}
                                    onChange={(e) => setNoteDraft(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal"
                                    rows={3}
                                  />
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => saveNotes(lead.id)}
                                      className="px-3 py-1 bg-teal text-white text-xs rounded-lg hover:bg-teal/90"
                                    >
                                      Speichern
                                    </button>
                                    <button
                                      onClick={() => setEditingNotes(null)}
                                      className="px-3 py-1 bg-gray-200 text-text-light text-xs rounded-lg hover:bg-gray-300"
                                    >
                                      Abbrechen
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div 
                                  className="text-sm text-text-light bg-white p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-teal transition-colors"
                                  onClick={() => {
                                    setEditingNotes(lead.id);
                                    setNoteDraft(lead.notes || "");
                                  }}
                                >
                                  {lead.notes || "Klicken zum Bearbeiten..."}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-text-light">
        {filteredLeads.length} von {leads.length} Leads angezeigt
      </p>
    </div>
  );
}
