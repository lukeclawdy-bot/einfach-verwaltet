"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Property {
  id: string;
  address: string;
  city: string;
  unitsCount: number;
}

interface Unit {
  id: string;
  propertyId: string;
  designation: string;
  areaM2: string | null;
  floor: number | null;
  rooms: string | null;
  coldRentCents: number | null;
  occupied: boolean;
  tenantName: string | null;
}

const URGENCY_COLOR: Record<number, string> = {
  5: "bg-red-500",
  4: "bg-red-400",
  3: "bg-amber-400",
  2: "bg-green-500",
  1: "bg-gray-300",
};

export default function EinheitenPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState("");
  const [formData, setFormData] = useState({
    designation: "",
    floor: "",
    areaM2: "",
    rooms: "",
    coldRent: "",
  });

  // Mock landlord ID for demo
  const landlordId = process.env.NEXT_PUBLIC_DEMO_LANDLORD_ID || "";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      // Fetch properties
      const propsRes = await fetch(`/api/portal/properties?landlordId=${landlordId}`);
      const propsData = await propsRes.json();
      setProperties(propsData.data || []);

      // Fetch all units for this landlord
      const unitsRes = await fetch(`/api/portal/units?landlordId=${landlordId}`);
      const unitsData = await unitsRes.json();
      setUnits(unitsData.data || []);
    } catch (e) {
      console.error("Failed to fetch data:", e);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateUnit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPropertyId) return;

    try {
      const res = await fetch("/api/portal/units", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId: selectedPropertyId,
          designation: formData.designation,
          floor: formData.floor ? parseInt(formData.floor) : null,
          areaM2: formData.areaM2 ? parseFloat(formData.areaM2) : null,
          rooms: formData.rooms ? parseFloat(formData.rooms) : null,
          coldRentCents: formData.coldRent
            ? Math.round(parseFloat(formData.coldRent) * 100)
            : null,
        }),
      });

      if (res.ok) {
        setShowModal(false);
        setFormData({
          designation: "",
          floor: "",
          areaM2: "",
          rooms: "",
          coldRent: "",
        });
        fetchData();
      }
    } catch (e) {
      console.error("Failed to create unit:", e);
    }
  }

  function formatRent(cents: number | null): string {
    if (!cents) return "—";
    return `€${(cents / 100).toLocaleString("de-DE", {
      minimumFractionDigits: 2,
    })}`;
  }

  const unitsByProperty = properties.map((prop) => ({
    ...prop,
    units: units.filter((u) => u.propertyId === prop.id),
  }));

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
            { label: "Einheiten", href: "/portal/einheiten", active: true },
            { label: "Mieter", href: "/portal/mieter", active: false },
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
              <h1 className="text-2xl font-bold text-navy">Einheiten</h1>
              <p className="text-text-light text-sm mt-0.5">
                Verwalten Sie Ihre Wohnungen und Gewerbeeinheiten
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
              Einheit hinzufügen
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12 text-text-light">Laden...</div>
          ) : unitsByProperty.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <div className="text-4xl mb-3">🏢</div>
              <p className="text-navy font-semibold">Noch keine Objekte</p>
              <p className="text-text-light text-sm mt-1">
                Fügen Sie zuerst ein Objekt im Onboarding hinzu.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {unitsByProperty.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-semibold text-navy">
                          {prop.address}
                        </h2>
                        <p className="text-text-light text-sm">
                          {prop.city} · {prop.unitsCount} Einheiten
                        </p>
                      </div>
                    </div>
                  </div>

                  {prop.units.length === 0 ? (
                    <div className="px-6 py-8 text-center text-text-light text-sm">
                      Keine Einheiten in diesem Objekt
                    </div>
                  ) : (
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs text-text-light uppercase tracking-wide bg-gray-50">
                          <th className="px-6 py-3 text-left">Bezeichnung</th>
                          <th className="px-6 py-3 text-left">Etage</th>
                          <th className="px-6 py-3 text-left">Fläche</th>
                          <th className="px-6 py-3 text-left">Zimmer</th>
                          <th className="px-6 py-3 text-left">Kaltmiete</th>
                          <th className="px-6 py-3 text-left">Status</th>
                          <th className="px-6 py-3 text-left">Mieter</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prop.units.map((unit) => (
                          <tr
                            key={unit.id}
                            className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors"
                          >
                            <td className="px-6 py-4 text-sm font-medium text-navy">
                              {unit.designation}
                            </td>
                            <td className="px-6 py-4 text-sm text-text-light">
                              {unit.floor !== null ? `${unit.floor}.` : "—"}
                            </td>
                            <td className="px-6 py-4 text-sm text-text-light">
                              {unit.areaM2 ? `${unit.areaM2} m²` : "—"}
                            </td>
                            <td className="px-6 py-4 text-sm text-text-light">
                              {unit.rooms || "—"}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-navy">
                              {formatRent(unit.coldRentCents)}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                  unit.occupied
                                    ? "bg-green-50 text-green-600"
                                    : "bg-gray-100 text-gray-500"
                                }`}
                              >
                                {unit.occupied ? "Besetzt" : "Leer"}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-text-light">
                              {unit.tenantName || "—"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h2 className="text-lg font-bold text-navy mb-4">
              Neue Einheit hinzufügen
            </h2>
            <form onSubmit={handleCreateUnit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Objekt
                </label>
                <select
                  required
                  value={selectedPropertyId}
                  onChange={(e) => setSelectedPropertyId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                >
                  <option value="">Objekt auswählen...</option>
                  {properties.map((prop) => (
                    <option key={prop.id} value={prop.id}>
                      {prop.address}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Bezeichnung
                </label>
                <input
                  type="text"
                  required
                  placeholder="z.B. Whg. 1"
                  value={formData.designation}
                  onChange={(e) =>
                    setFormData({ ...formData, designation: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Etage
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    value={formData.floor}
                    onChange={(e) =>
                      setFormData({ ...formData, floor: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Zimmer
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    placeholder="2"
                    value={formData.rooms}
                    onChange={(e) =>
                      setFormData({ ...formData, rooms: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Fläche (m²)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="55.5"
                    value={formData.areaM2}
                    onChange={(e) =>
                      setFormData({ ...formData, areaM2: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Kaltmiete (€)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="850.00"
                    value={formData.coldRent}
                    onChange={(e) =>
                      setFormData({ ...formData, coldRent: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                  />
                </div>
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
