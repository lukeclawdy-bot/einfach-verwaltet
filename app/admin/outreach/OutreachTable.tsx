"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

interface OutreachContact {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string;
  company: string | null;
  email: string | null;
  phone: string | null;
  channel: string;
  status: string;
  lastContactAt: Date | string | null;
  notes: string | null;
  source: string | null;
}

const CHANNEL_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "phone", label: "Phone" },
];

const STATUS_OPTIONS = [
  { value: "sent", label: "Gesendet" },
  { value: "opened", label: "Geöffnet" },
  { value: "replied", label: "Antwort erhalten" },
  { value: "meeting", label: "Meeting gebucht" },
  { value: "dead", label: "Nicht interessiert" },
];

const SOURCE_OPTIONS = [
  { value: "cold", label: "Cold" },
  { value: "referral", label: "Referral" },
  { value: "m&a", label: "M&A" },
  { value: "inbound", label: "Inbound" },
];

const STATUS_COLORS: Record<string, string> = {
  sent: "bg-blue-100 text-blue-700",
  opened: "bg-amber-100 text-amber-700",
  replied: "bg-teal-100 text-teal-700",
  meeting: "bg-green-100 text-green-700",
  dead: "bg-gray-100 text-gray-600",
};

function formatDate(date: Date | string | null): string {
  if (!date) return "—";
  const d = new Date(date);
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

interface OutreachTableProps {
  contacts: OutreachContact[];
}

export function OutreachTable({ contacts }: OutreachTableProps) {
  const router = useRouter();
  const [showAddModal, setShowAddModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [channelFilter, setChannelFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    channel: "email",
    status: "sent",
    source: "cold",
    notes: "",
  });

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const matchesStatus = statusFilter === "all" || contact.status === statusFilter;
      const matchesChannel = channelFilter === "all" || contact.channel === channelFilter;
      const matchesSource = sourceFilter === "all" || contact.source === sourceFilter;
      return matchesStatus && matchesChannel && matchesSource;
    });
  }, [contacts, statusFilter, channelFilter, sourceFilter]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin/outreach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowAddModal(false);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          channel: "email",
          status: "sent",
          source: "cold",
          notes: "",
        });
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to create contact:", error);
    }
  }

  async function updateStatus(contactId: string, newStatus: string) {
    try {
      const response = await fetch(`/api/admin/outreach/${contactId}`, {
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

  async function saveNotes(contactId: string) {
    try {
      const response = await fetch(`/api/admin/outreach/${contactId}`, {
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
      {/* Filters & Add */}
      <div className="flex flex-wrap gap-3 bg-white rounded-xl border border-gray-100 p-4 items-center">
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
          value={channelFilter}
          onChange={(e) => setChannelFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal"
        >
          <option value="all">Alle Kanäle</option>
          {CHANNEL_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <select
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal"
        >
          <option value="all">Alle Quellen</option>
          {SOURCE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <button
          onClick={() => setShowAddModal(true)}
          className="ml-auto flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Kontakt hinzufügen
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-navy">Name / Firma</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Kontakt</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Kanal</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Quelle</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Letzter Kontakt</th>
                <th className="text-left px-4 py-3 font-semibold text-navy">Notizen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredContacts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-text-light">
                    Keine Kontakte gefunden. Füge deinen ersten hinzu!
                  </td>
                </tr>
              ) : (
                filteredContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-navy">{contact.name}</p>
                      {contact.company && <p className="text-xs text-text-light">{contact.company}</p>}
                    </td>
                    <td className="px-4 py-3">
                      {contact.email && <p className="text-teal text-xs">{contact.email}</p>}
                      {contact.phone && <p className="text-text-light text-xs">{contact.phone}</p>}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex px-2 py-0.5 rounded text-xs bg-gray-100 text-text-light capitalize">
                        {contact.channel}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex px-2 py-0.5 rounded text-xs bg-gray-100 text-text-light capitalize">
                        {contact.source || "cold"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={contact.status}
                        onChange={(e) => updateStatus(contact.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full border font-medium cursor-pointer ${STATUS_COLORS[contact.status] || "bg-gray-100"}`}
                      >
                        {STATUS_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3 text-text-light text-xs">
                      {formatDate(contact.lastContactAt)}
                    </td>
                    <td className="px-4 py-3">
                      {editingNotes === contact.id ? (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={noteDraft}
                            onChange={(e) => setNoteDraft(e.target.value)}
                            className="w-full px-2 py-1 rounded border border-gray-200 text-xs focus:outline-none focus:border-teal"
                            placeholder="Notiz..."
                          />
                          <div className="flex gap-1">
                            <button
                              onClick={() => saveNotes(contact.id)}
                              className="px-2 py-0.5 bg-teal text-white text-xs rounded hover:bg-teal/90"
                            >
                              ✓
                            </button>
                            <button
                              onClick={() => setEditingNotes(null)}
                              className="px-2 py-0.5 bg-gray-200 text-text-light text-xs rounded hover:bg-gray-300"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="text-xs text-text-light cursor-pointer hover:text-teal"
                          onClick={() => {
                            setEditingNotes(contact.id);
                            setNoteDraft(contact.notes || "");
                          }}
                        >
                          {contact.notes || "+ Notiz"}
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-navy">Kontakt hinzufügen</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-text-light hover:text-navy"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-teal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Firma / Objekt</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-teal"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-teal"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Kanal *</label>
                  <select
                    value={formData.channel}
                    onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-teal"
                  >
                    {CHANNEL_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-teal"
                  >
                    {STATUS_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Quelle</label>
                <select
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-teal"
                >
                  {SOURCE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Notizen</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-teal"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-teal text-white py-2 rounded-lg font-medium hover:bg-teal/90 transition-colors"
                >
                  Speichern
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-200 text-text-light py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
