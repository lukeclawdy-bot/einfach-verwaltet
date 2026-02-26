"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Unit {
  id: string;
  designation: string;
  propertyAddress: string;
}

interface Tenant {
  id: string;
  unitId: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  moveInDate: string | null;
  moveOutDate: string | null;
  active: boolean;
  unit: Unit | null;
  coldRentCents: number | null;
}

export default function MieterPage() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [expandedTenant, setExpandedTenant] = useState<string | null>(null);
  const [editingTenant, setEditingTenant] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    moveInDate: "",
    unitId: "",
  });
  const [editFormData, setEditFormData] = useState({
    email: "",
    phone: "",
    moveOutDate: "",
  });

  // Mock landlord ID for demo
  const landlordId = process.env.NEXT_PUBLIC_DEMO_LANDLORD_ID || "";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      // Fetch tenants
      const tenantsRes = await fetch(`/api/portal/tenants?landlordId=${landlordId}`);
      const tenantsData = await tenantsRes.json();
      setTenants(tenantsData.data || []);

      // Fetch units for dropdown
      const unitsRes = await fetch(`/api/portal/units?landlordId=${landlordId}`);
      const unitsData = await unitsRes.json();
      // Enrich units with property addresses
      const enrichedUnits = await Promise.all(
        (unitsData.data || []).map(async (u: { propertyId: string; id: string; designation: string }) => {
          const propRes = await fetch(`/api/portal/properties?landlordId=${landlordId}`);
          const propData = await propRes.json();
          const prop = (propData.data || []).find((p: { id: string }) => p.id === u.propertyId);
          return {
            id: u.id,
            designation: u.designation,
            propertyAddress: prop?.address || "Unbekannt",
          };
        })
      );
      setUnits(enrichedUnits);
    } catch (e) {
      console.error("Failed to fetch data:", e);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateTenant(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.unitId) return;

    try {
      const res = await fetch("/api/portal/tenants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unitId: formData.unitId,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email || null,
          phone: formData.phone || null,
          moveInDate: formData.moveInDate || null,
        }),
      });

      if (res.ok) {
        setShowModal(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          moveInDate: "",
          unitId: "",
        });
        fetchData();
      }
    } catch (e) {
      console.error("Failed to create tenant:", e);
    }
  }

  async function handleUpdateTenant(tenantId: string) {
    try {
      const res = await fetch(`/api/portal/tenants?id=${tenantId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: editFormData.email || null,
          phone: editFormData.phone || null,
          moveOutDate: editFormData.moveOutDate || null,
        }),
      });

      if (res.ok) {
        setEditingTenant(null);
        fetchData();
      }
    } catch (e) {
      console.error("Failed to update tenant:", e);
    }
  }

  async function handleMoveOut(tenantId: string) {
    const today = new Date().toISOString().split("T")[0];
    try {
      const res = await fetch(`/api/portal/tenants?id=${tenantId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moveOutDate: today,
          active: false,
        }),
      });

      if (res.ok) {
        fetchData();
      }
    } catch (e) {
      console.error("Failed to process move-out:", e);
    }
  }

  function formatRent(cents: number | null): string {
    if (!cents) return "—";
    return `€${(cents / 100).toLocaleString("de-DE", {
      minimumFractionDigits: 2,
    })}`;
  }

  function getStatus(tenant: Tenant): { label: string; className: string } {
    if (tenant.moveOutDate) {
      return { label: "Ausgezogen", className: "bg-gray-100 text-gray-500" };
    }
    if (tenant.active) {
      return { label: "Aktiv", className: "bg-green-50 text-green-600" };
    }
    return { label: "Inaktiv", className: "bg-gray-100 text-gray-500" };
  }

  return (
    <div className="min-h-screen bg-light-gray flex">
      {/* Sidebar */}
      <aside className="w-56 bg-navy min-h-screen flex flex-col fixed left-0 top-0 bottom-0">
        <div className="px-5 py-5 border-b border-white/10">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-teal rounded-md flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="text-white text-sm font-bold">
              einfach <span className="text-teal">verwaltet.</span>
            </span>
          </a>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {[
            { label: "Übersicht", href: "/portal/dashboard", active: false },
            { label: "Chat", href: "/portal/chat", active: false },
            { label: "Einheiten", href: "/portal/einheiten", active: false },
            { label: "Mieter", href: "/portal/mieter", active: true },
            { label: "Tickets", href: "/portal/tickets", active: false },
            { label: "Partner", href: "/portal/partner", active: false },
            { label: "Dokumente", href: "/portal/dokumente", active: false },
            { label: "Finanzen", href: "/portal/finanzen", active: false },
            { label: "Mieterhöhung", href: "/portal/mieterhohung", active: false },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                ${
                  item.active
                    ? "bg-teal/20 text-teal font-medium"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-white/10 space-y-2">
          <a
            href="/api/portal/auth/logout"
            className="block text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            Abmelden
          </a>
          <p className="text-white/30 text-xs">einfach verwaltet. v1</p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-56">
        <div className="max-w-5xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-navy">Mieter</h1>
              <p className="text-text-light text-sm mt-0.5">
                Verwalten Sie Ihre Mieter und Mietverhältnisse
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-teal hover:bg-teal/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Mieter hinzufügen
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12 text-text-light">Laden...</div>
          ) : tenants.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <div className="text-4xl mb-3">👥</div>
              <p className="text-navy font-semibold">Noch keine Mieter</p>
              <p className="text-text-light text-sm mt-1">
                Fügen Sie Ihre ersten Mieter hinzu.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-text-light uppercase tracking-wide bg-gray-50">
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Einheit</th>
                    <th className="px-6 py-3 text-left">Miete</th>
                    <th className="px-6 py-3 text-left">Einzug</th>
                    <th className="px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((tenant) => {
                    const status = getStatus(tenant);
                    const isExpanded = expandedTenant === tenant.id;

                    return (
                      <>
                        <tr
                          key={tenant.id}
                          onClick={() =>
                            setExpandedTenant(isExpanded ? null : tenant.id)
                          }
                          className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal font-medium text-sm">
                                {tenant.firstName[0]}
                                {tenant.lastName[0]}
                              </div>
                              <span className="text-sm font-medium text-navy">
                                {tenant.firstName} {tenant.lastName}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-text-light">
                            {tenant.unit
                              ? `${tenant.unit.designation} · ${tenant.unit.propertyAddress}`
                              : "—"}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-navy">
                            {formatRent(tenant.coldRentCents)}
                          </td>
                          <td className="px-6 py-4 text-sm text-text-light">
                            {tenant.moveInDate
                              ? new Date(tenant.moveInDate).toLocaleDateString(
                                  "de-DE"
                                )
                              : "—"}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.className}`}
                            >
                              {status.label}
                            </span>
                          </td>
                        </tr>

                        {/* Expanded row */}
                        {isExpanded && (
                          <tr className="bg-gray-50/50">
                            <td colSpan={5} className="px-6 py-4">
                              {editingTenant === tenant.id ? (
                                <div className="space-y-4">
                                  <h4 className="font-medium text-navy">
                                    Mieter bearbeiten
                                  </h4>
                                  <div className="grid grid-cols-3 gap-4">
                                    <div>
                                      <label className="block text-xs text-text-light mb-1">
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        value={editFormData.email}
                                        onChange={(e) =>
                                          setEditFormData({
                                            ...editFormData,
                                            email: e.target.value,
                                          })
                                        }
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-xs text-text-light mb-1">
                                        Telefon
                                      </label>
                                      <input
                                        type="tel"
                                        value={editFormData.phone}
                                        onChange={(e) =>
                                          setEditFormData({
                                            ...editFormData,
                                            phone: e.target.value,
                                          })
                                        }
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-xs text-text-light mb-1">
                                        Auszugsdatum
                                      </label>
                                      <input
                                        type="date"
                                        value={editFormData.moveOutDate}
                                        onChange={(e) =>
                                          setEditFormData({
                                            ...editFormData,
                                            moveOutDate: e.target.value,
                                          })
                                        }
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex gap-3">
                                    <button
                                      onClick={() => setEditingTenant(null)}
                                      className="px-4 py-2 border border-gray-200 text-text-light rounded-lg text-sm"
                                    >
                                      Abbrechen
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleUpdateTenant(tenant.id)
                                      }
                                      className="px-4 py-2 bg-teal text-white rounded-lg text-sm"
                                    >
                                      Speichern
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-4 gap-4 text-sm">
                                    <div>
                                      <span className="text-text-light text-xs block mb-1">
                                        Email
                                      </span>
                                      <span className="text-navy">
                                        {tenant.email || "—"}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-text-light text-xs block mb-1">
                                        Telefon
                                      </span>
                                      <span className="text-navy">
                                        {tenant.phone || "—"}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-text-light text-xs block mb-1">
                                        Einzugsdatum
                                      </span>
                                      <span className="text-navy">
                                        {tenant.moveInDate
                                          ? new Date(
                                              tenant.moveInDate
                                            ).toLocaleDateString("de-DE")
                                          : "—"}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="text-text-light text-xs block mb-1">
                                        Auszugsdatum
                                      </span>
                                      <span className="text-navy">
                                        {tenant.moveOutDate
                                          ? new Date(
                                              tenant.moveOutDate
                                            ).toLocaleDateString("de-DE")
                                          : "—"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex gap-3">
                                    <button
                                      onClick={() => {
                                        setEditingTenant(tenant.id);
                                        setEditFormData({
                                          email: tenant.email || "",
                                          phone: tenant.phone || "",
                                          moveOutDate: tenant.moveOutDate
                                            ? tenant.moveOutDate.split("T")[0]
                                            : "",
                                        });
                                      }}
                                      className="px-4 py-2 border border-gray-200 text-navy rounded-lg text-sm hover:bg-white transition-colors"
                                    >
                                      Mieter bearbeiten
                                    </button>
                                    {!tenant.moveOutDate && (
                                      <button
                                        onClick={() =>
                                          handleMoveOut(tenant.id)
                                        }
                                        className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm hover:bg-red-50 transition-colors"
                                      >
                                        Auszug
                                      </button>
                                    )}
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h2 className="text-lg font-bold text-navy mb-4">
              Neuen Mieter hinzufügen
            </h2>
            <form onSubmit={handleCreateTenant} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Einzugsdatum
                </label>
                <input
                  type="date"
                  value={formData.moveInDate}
                  onChange={(e) =>
                    setFormData({ ...formData, moveInDate: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Einheit *
                </label>
                <select
                  required
                  value={formData.unitId}
                  onChange={(e) =>
                    setFormData({ ...formData, unitId: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                >
                  <option value="">Einheit auswählen...</option>
                  {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.designation} · {unit.propertyAddress}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 text-text-light rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-teal text-white rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors"
                >
                  Speichern
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
