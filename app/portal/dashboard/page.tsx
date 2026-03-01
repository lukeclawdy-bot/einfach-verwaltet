import Link from "next/link";
import { cookies, headers } from "next/headers";
import { getTokenFromCookie } from "@/lib/auth/jwt";
import { getDemoDashboardData, getDemoTickets } from "@/lib/demo-data";
import { StatsCard } from "./components/StatsCard";
import { ApprovalsSection } from "./ApprovalActions";

const URGENCY_COLOR: Record<number, string> = {
  5: "bg-red-500",
  4: "bg-red-400",
  3: "bg-amber-400",
  2: "bg-green-500",
  1: "bg-gray-300",
};
const UrgencyDot = ({ urgency }: { urgency: number }) => (
  <span
    className={`inline-block w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 ${URGENCY_COLOR[urgency] || "bg-gray-300"}`}
  />
);

async function getSessionInfo(): Promise<{
  landlordId: string;
  isDemo: boolean;
}> {
  const hdrs = await headers();
  const fromHeader = hdrs.get("x-landlord-id");
  const isDemoHeader = hdrs.get("x-is-demo") === "true";
  if (fromHeader) return { landlordId: fromHeader, isDemo: isDemoHeader };

  const cookieStore = await cookies();
  const demoToken = cookieStore.get("ev-demo-session")?.value;
  if (demoToken) {
    const payload = await getTokenFromCookie(demoToken);
    if (payload?.landlordId) return { landlordId: payload.landlordId, isDemo: true };
  }
  const token = cookieStore.get("portal_session")?.value;
  if (token) {
    const payload = await getTokenFromCookie(token);
    if (payload?.landlordId) return { landlordId: payload.landlordId, isDemo: !!payload.isDemo };
  }

  return { landlordId: process.env.DEMO_LANDLORD_ID || "", isDemo: false };
}

async function getDashboardData(landlordId: string) {
  if (!landlordId) return null;
  try {
    const base = process.env.NEXT_PUBLIC_APP_URL || "https://einfach-verwaltet.de";
    const res = await fetch(
      `${base}/api/portal/dashboard?landlordId=${landlordId}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const { data } = await res.json();
    return data;
  } catch {
    return null;
  }
}

async function getTickets(landlordId: string) {
  if (!landlordId) return [];
  try {
    const base = process.env.NEXT_PUBLIC_APP_URL || "https://einfach-verwaltet.de";
    const res = await fetch(
      `${base}/api/portal/tickets?landlordId=${landlordId}&status=open`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const { data } = await res.json();
    return data || [];
  } catch {
    return [];
  }
}

// ─── DEMO / FALLBACK DATA ─────────────────────────────────────────────────────

const MOCK = {
  propertiesCount: 2,
  totalUnits: 8,
  occupancyRate: 87,
  openTicketsCount: 2,
  pendingActionsCount: 3,
  rentThisMonthCents: 560000,
  topAiActions: [],
};

const MOCK_TICKETS = [
  {
    id: "t-1",
    urgency: 4,
    title: "Heizung ausgefallen",
    tenantName: "M. Richter",
    unitDesignation: "Whg. 3",
    status: "open",
    createdAt: new Date().toISOString(),
  },
  {
    id: "t-2",
    urgency: 2,
    title: "Briefkasten defekt",
    tenantName: "S. Müller",
    unitDesignation: "Whg. 1",
    status: "open",
    createdAt: new Date().toISOString(),
  },
];

// ─── PENDING APPROVALS (demo data) ───────────────────────────────────────────

const PENDING_APPROVALS = [
  {
    id: "appr-1",
    type: "repair_cost",
    title: "Heizungswartung Wohnhaus 3",
    description: "Angebot Müller GmbH: 340 €. Beauftragen?",
    amountCents: 34000,
    approveLabel: "Genehmigen ✓",
    rejectLabel: "Ablehnen ✗",
    urgency: 3,
  },
  {
    id: "appr-2",
    type: "rent_increase",
    title: "Mieterhöhung Wohnung 1 möglich",
    description: "+4,2% nach §558 BGB. Jetzt auslösen?",
    amountCents: null,
    approveLabel: "Genehmigen ✓",
    rejectLabel: "Später",
    urgency: 2,
  },
  {
    id: "appr-3",
    type: "investment",
    title: "Nebenkostenabrechnung 2025 bereit",
    description: "6 Mieter, gesamte Abrechnung prüfen und freigeben.",
    amountCents: null,
    approveLabel: "Freigeben ✓",
    rejectLabel: "Details",
    urgency: 2,
  },
];

// ─── AGENT ACTIVITY LOG (demo data) ──────────────────────────────────────────

const AGENT_ACTIVITY = [
  {
    id: "act-1",
    icon: "💬",
    text: "Mieteranfrage Wohnung 2 beantwortet",
    meta: "Reaktionszeit: 4 Min",
    time: "Heute, 11:42",
  },
  {
    id: "act-2",
    icon: "📨",
    text: "Mahnung an Herrn Müller versendet",
    meta: "§286 BGB, Stufe 1",
    time: "Heute, 09:15",
  },
  {
    id: "act-3",
    icon: "🔧",
    text: "Handwerker für Briefkastenreparatur beauftragt",
    meta: "€85 (unter Limit)",
    time: "Gestern, 16:03",
  },
  {
    id: "act-4",
    icon: "📋",
    text: "Wohnungsübergabe Protokoll erstellt",
    meta: "Wohnung 4, Mieter Bergmann",
    time: "Gestern, 14:22",
  },
  {
    id: "act-5",
    icon: "✉️",
    text: "Betriebskostenvorauszahlung angepasst",
    meta: "Alle 8 Einheiten, +5% ab April",
    time: "Mo, 10:00",
  },
];

// ─── APPROVAL TYPE BADGE ──────────────────────────────────────────────────────

const APPROVAL_TYPE_LABEL: Record<string, string> = {
  repair_cost: "Reparatur",
  rent_increase: "Mieterhöhung",
  investment: "Abrechnung",
  tenant_change: "Mieterwechsel",
  eviction: "Kündigung",
};

const APPROVAL_TYPE_COLOR: Record<string, string> = {
  repair_cost: "bg-amber-50 text-amber-700 border-amber-200",
  rent_increase: "bg-blue-50 text-blue-700 border-blue-200",
  investment: "bg-purple-50 text-purple-700 border-purple-200",
  tenant_change: "bg-orange-50 text-orange-700 border-orange-200",
  eviction: "bg-red-50 text-red-700 border-red-200",
};

// ApprovalCard is now handled by ApprovalActions.tsx (client component)

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function DashboardPage() {
  const { landlordId, isDemo } = await getSessionInfo();

  const data = isDemo
    ? getDemoDashboardData()
    : landlordId
      ? await getDashboardData(landlordId)
      : MOCK;

  const ticketList = isDemo
    ? getDemoTickets()
    : landlordId
      ? await getTickets(landlordId)
      : MOCK_TICKETS;

  const d = data || MOCK;
  const tl = ticketList.length > 0 ? ticketList : MOCK_TICKETS;

  const rentEuro = (d.rentThisMonthCents / 100).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <div className="flex-1">
      <div className="max-w-4xl mx-auto px-8 py-8">

        {/* ── Greeting ─────────────────────────────────────────────────── */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Guten Morgen.</h1>
          <p className="text-text-light text-sm mt-0.5">
            Wir kümmern uns. Sie behalten den Überblick.
          </p>
        </div>

        {/* ── KPI Cards ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            label="Einheiten"
            value={d.totalUnits}
            sub={`${d.propertiesCount} Objekte`}
          />
          <StatsCard
            label="Belegung"
            value={`${d.occupancyRate}%`}
            sub="aktuell vermietet"
            highlight
          />
          <StatsCard
            label="Offene Tickets"
            value={d.openTicketsCount}
            sub="offen"
          />
          <StatsCard
            label="Miete (diesen Monat)"
            value={rentEuro}
            sub="eingegangen"
          />
        </div>

        {/* ── Ausstehende Genehmigungen ─────────────────────────────────── */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-navy flex items-center gap-2">
              Ausstehende Genehmigungen
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                {PENDING_APPROVALS.length} warten auf Sie
              </span>
            </h2>
            <Link
              href="/portal/genehmigungen"
              className="text-sm text-teal hover:underline"
            >
              Alle anzeigen →
            </Link>
          </div>

          <p className="text-sm text-text-light mb-4">
            Ihr persönlicher Assistent hat die folgenden Maßnahmen vorbereitet und wartet auf Ihre Freigabe.
          </p>

          <ApprovalsSection initialApprovals={PENDING_APPROVALS} />
        </div>

        {/* ── Zuletzt von uns erledigt ──────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
            <h2 className="font-bold text-navy flex items-center gap-2">
              Zuletzt von uns erledigt
              <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium border border-green-100">
                Automatisch
              </span>
            </h2>
            <Link
              href="/portal/aktivitaet"
              className="text-sm text-teal hover:underline"
            >
              Vollständiges Protokoll →
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {AGENT_ACTIVITY.map((item) => (
              <div
                key={item.id}
                className="px-6 py-3 flex items-center gap-3 hover:bg-gray-50/50 transition-colors"
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy truncate">
                    {item.text}
                  </p>
                  <p className="text-xs text-text-light">{item.meta}</p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0 hidden sm:block">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Offene Tickets ─────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
            <h2 className="font-bold text-navy">Offene Tickets</h2>
            <Link
              href="/portal/tickets"
              className="text-sm text-teal hover:underline"
            >
              Alle anzeigen →
            </Link>
          </div>
          {tl.length === 0 ? (
            <div className="px-6 py-12 text-center text-text-light text-sm">
              Keine offenen Tickets — alles unter Kontrolle ✅
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="text-xs text-text-light uppercase tracking-wide bg-gray-50">
                  <th className="px-6 py-3 text-left">Ticket</th>
                  <th className="px-6 py-3 text-left">Mieter</th>
                  <th className="px-6 py-3 text-left hidden md:table-cell">
                    Einheit
                  </th>
                  <th className="px-6 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {tl.slice(0, 5).map(
                  (t: {
                    id: string;
                    urgency: number;
                    title: string;
                    tenantName: string;
                    unitDesignation: string;
                    status: string;
                  }) => (
                    <tr
                      key={t.id}
                      className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 text-sm">
                        <Link
                          href={`/portal/tickets/${t.id}`}
                          className="flex items-center gap-2"
                        >
                          <span>
                            <UrgencyDot urgency={t.urgency} />
                          </span>
                          <span className="text-navy font-medium">
                            {t.title}
                          </span>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-text-light">
                        {t.tenantName || "—"}
                      </td>
                      <td className="px-6 py-4 text-sm text-text-light hidden md:table-cell">
                        {t.unitDesignation || "—"}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium
                          ${
                            t.status === "open"
                              ? "bg-red-50 text-red-600"
                              : t.status === "inprogress"
                                ? "bg-amber-50 text-amber-600"
                                : "bg-green-50 text-green-600"
                          }`}
                        >
                          {t.status === "open"
                            ? "Offen"
                            : t.status === "inprogress"
                              ? "In Bearbeitung"
                              : "Gelöst"}
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
