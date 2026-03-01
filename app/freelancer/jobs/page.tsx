import Link from "next/link";
import { JobClaimButton } from "./JobClaimButton";

// ─── DEMO DATA ───────────────────────────────────────────────────────────────

const DEMO_JOBS = [
  {
    id: "job-demo-1",
    title: "Wohnungsübergabe",
    district: "Hamburg-Eimsbüttel",
    category: "handover",
    fixedPriceCents: 3500,
    dueDate: "2026-03-05T10:00:00.000Z",
    description: "Übergabe einer 2-Zimmer-Wohnung. Protokoll erstellen und Schlüssel an neuen Mieter übergeben.",
  },
  {
    id: "job-demo-2",
    title: "ETV-Moderation",
    district: "Hamburg-Altona",
    category: "etv",
    fixedPriceCents: 8000,
    dueDate: "2026-03-10T18:00:00.000Z",
    description: "Moderation einer Eigentümerversammlung (ca. 12 Eigentümer). Tagesordnung und Abstimmungsprotokoll.",
  },
  {
    id: "job-demo-3",
    title: "Besichtigungstermin",
    district: "Hamburg-Barmbek",
    category: "inspection",
    fixedPriceCents: 4000,
    dueDate: "2026-03-07T14:00:00.000Z",
    description: "Besichtigungstermin für 3 Interessenten, 3-Zimmer-Wohnung. Feedback-Formular ausfüllen.",
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

export default function FreelancerJobsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/freelancer/dashboard" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Zurück</span>
            </Link>
          </div>
          <h1 className="font-bold text-navy">Verfügbare Jobs</h1>
          <Link href="/api/freelancer/auth/logout" className="text-sm text-gray-500 hover:text-gray-700">
            Abmelden
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-4">
          <p className="text-sm text-text-light">
            {DEMO_JOBS.length} Jobs verfügbar in Hamburg
          </p>
        </div>

        <div className="space-y-4">
          {DEMO_JOBS.map((job) => {
            const dueDate = new Date(job.dueDate);
            const dueDateStr = dueDate.toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            });
            const isUrgent = dueDate < new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

            return (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  {/* Top row: category + price */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${CATEGORY_COLORS[job.category] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
                        {CATEGORY_LABELS[job.category] || job.category}
                      </span>
                      {isUrgent && (
                        <span className="text-xs px-2 py-0.5 rounded-full border font-medium bg-red-50 text-red-600 border-red-200">
                          Dringend
                        </span>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-teal text-lg leading-tight">
                        {(job.fixedPriceCents / 100).toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </p>
                      <p className="text-xs text-gray-400">Festpreis</p>
                    </div>
                  </div>

                  {/* Job title & meta */}
                  <h3 className="font-bold text-navy text-base mb-1">{job.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-text-light mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.district}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      bis {dueDateStr}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-light mb-4">{job.description}</p>

                  {/* Claim button */}
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={`/freelancer/jobs/${job.id}`}
                      className="text-sm text-teal hover:underline"
                    >
                      Details ansehen →
                    </Link>
                    <JobClaimButton jobId={job.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
