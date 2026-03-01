import Link from "next/link";
import { cookies, headers } from "next/headers";
import { getFreelancerTokenFromCookie } from "@/lib/auth/freelancer-jwt";

// ─── DEMO DATA ───────────────────────────────────────────────────────────────

const DEMO_OPEN_JOBS = [
  {
    id: "job-demo-1",
    title: "Wohnungsübergabe",
    district: "Hamburg-Eimsbüttel",
    category: "handover",
    fixedPriceCents: 3500,
    dueDate: "2026-03-05T10:00:00.000Z",
  },
  {
    id: "job-demo-2",
    title: "ETV-Moderation",
    district: "Hamburg-Altona",
    category: "etv",
    fixedPriceCents: 8000,
    dueDate: "2026-03-10T18:00:00.000Z",
  },
  {
    id: "job-demo-3",
    title: "Besichtigungstermin",
    district: "Hamburg-Barmbek",
    category: "inspection",
    fixedPriceCents: 4000,
    dueDate: "2026-03-07T14:00:00.000Z",
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  inspection: "Besichtigung",
  handover: "Übergabe",
  mediation: "Mediation",
  maintenance: "Wartung",
  etv: "ETV",
  key: "Schlüssel",
};

const CATEGORY_COLORS: Record<string, string> = {
  inspection: "bg-blue-50 text-blue-700 border-blue-200",
  handover: "bg-green-50 text-green-700 border-green-200",
  mediation: "bg-purple-50 text-purple-700 border-purple-200",
  maintenance: "bg-amber-50 text-amber-700 border-amber-200",
  etv: "bg-teal/10 text-teal border-teal/20",
  key: "bg-gray-50 text-gray-700 border-gray-200",
};

async function getFreelancerSession() {
  const hdrs = await headers();
  const freelancerIdHeader = hdrs.get("x-freelancer-id");
  const nameHeader = hdrs.get("x-freelancer-name");
  if (freelancerIdHeader) {
    return { freelancerId: freelancerIdHeader, name: nameHeader || "Freelancer" };
  }
  const cookieStore = await cookies();
  const token = cookieStore.get("freelancer_session")?.value;
  if (token) {
    const payload = await getFreelancerTokenFromCookie(token);
    if (payload?.freelancerId) {
      return { freelancerId: payload.freelancerId, name: payload.name || "Freelancer" };
    }
  }
  return { freelancerId: "demo-freelancer-1", name: "Freelancer" };
}

export default async function FreelancerDashboardPage() {
  const { name } = await getFreelancerSession();

  const firstName = name.split(" ")[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="font-bold text-navy text-sm">einfach <span className="text-teal">verwaltet.</span></span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/freelancer/jobs" className="text-sm text-teal font-medium hover:underline">
              Jobs
            </Link>
            <Link href="/api/freelancer/auth/logout" className="text-sm text-gray-500 hover:text-gray-700">
              Abmelden
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Hallo, {firstName}.</h1>
          <p className="text-text-light text-sm mt-0.5">Hier sind Ihre aktuellen Jobs und Einnahmen.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-navy">3</p>
            <p className="text-xs text-text-light mt-1">Offene Jobs</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-teal">€155</p>
            <p className="text-xs text-text-light mt-1">Diesen Monat</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-navy">12</p>
            <p className="text-xs text-text-light mt-1">Jobs gesamt</p>
          </div>
        </div>

        {/* Open Jobs Preview */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
            <h2 className="font-bold text-navy">Jobs in Ihrer Nähe</h2>
            <Link href="/freelancer/jobs" className="text-sm text-teal hover:underline">
              Alle anzeigen →
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {DEMO_OPEN_JOBS.map((job) => {
              const dueDate = new Date(job.dueDate);
              const dueDateStr = dueDate.toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });
              return (
                <Link
                  key={job.id}
                  href={`/freelancer/jobs`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${CATEGORY_COLORS[job.category] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
                        {CATEGORY_LABELS[job.category] || job.category}
                      </span>
                    </div>
                    <p className="font-semibold text-navy text-sm">{job.title}</p>
                    <p className="text-xs text-text-light">{job.district} · bis {dueDateStr}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-teal text-sm">
                      {(job.fixedPriceCents / 100).toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </p>
                    <p className="text-xs text-gray-400">Festpreis</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/freelancer/jobs"
          className="block w-full py-3 bg-teal text-white rounded-xl font-semibold text-sm text-center hover:bg-teal/90 transition-colors"
        >
          Alle verfügbaren Jobs ansehen →
        </Link>
      </div>
    </div>
  );
}
