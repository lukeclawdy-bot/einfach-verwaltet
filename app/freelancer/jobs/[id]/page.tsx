import Link from "next/link";
import { CompleteJobForm } from "./CompleteJobForm";

// ─── DEMO JOB DATA ────────────────────────────────────────────────────────────

const DEMO_JOBS: Record<string, {
  id: string;
  title: string;
  propertyAddress: string;
  district: string;
  category: string;
  fixedPriceCents: number;
  dueDate: string;
  description: string;
  instructions: string;
  checklist: string[];
}> = {
  "job-demo-1": {
    id: "job-demo-1",
    title: "Wohnungsübergabe",
    propertyAddress: "Osterstraße 47, 20259 Hamburg-Eimsbüttel",
    district: "Hamburg-Eimsbüttel",
    category: "handover",
    fixedPriceCents: 3500,
    dueDate: "2026-03-05T10:00:00.000Z",
    description: "Übergabe einer 2-Zimmer-Wohnung an neuen Mieter.",
    instructions: `Sie führen die Wohnungsübergabe für unseren Eigentümer durch. Der neue Mieter heißt Thomas Bergmann und kommt um 10:00 Uhr.

Bitte gehen Sie wie folgt vor:
1. Begrüßen Sie den Mieter und erklären Sie kurz den Ablauf.
2. Gehen Sie alle Räume systematisch durch (Eingang, Wohnzimmer, Küche, Bad, Schlafzimmer, Keller/Kammer).
3. Notieren Sie Mängel und Vorschäden im Protokoll — alles, was schon vorhanden ist.
4. Lesen Sie alle Zähler ab (Strom, Gas, Wasser — Zählernummern im Protokoll).
5. Übergeben Sie alle Schlüssel und lassen Sie sich den Empfang bestätigen.
6. Beide Parteien unterschreiben das Protokoll. Foto des unterschriebenen Protokolls hochladen.`,
    checklist: [
      "Protokollformular vollständig ausgefüllt",
      "Alle Räume fotografiert (mind. 1 Foto pro Raum)",
      "Zählerstände abgelesen und dokumentiert",
      "Alle Schlüssel übergeben (Anzahl bestätigt)",
      "Protokoll von beiden Parteien unterschrieben",
      "Fotos des unterschriebenen Protokolls hochgeladen",
    ],
  },
  "job-demo-2": {
    id: "job-demo-2",
    title: "ETV-Moderation",
    propertyAddress: "Bahrenfelder Str. 12, 22765 Hamburg-Altona",
    district: "Hamburg-Altona",
    category: "etv",
    fixedPriceCents: 8000,
    dueDate: "2026-03-10T18:00:00.000Z",
    description: "Moderation einer Eigentümerversammlung (ca. 12 Eigentümer).",
    instructions: `Sie moderieren die jährliche Eigentümerversammlung gemäß §24 WEG.

Ablauf:
1. Versammlungsraum vorbereiten (Stühle, Tischvorlagen — werden vor Ort bereitgestellt).
2. Teilnehmerliste führen und Beschlussfähigkeit feststellen (mind. 50% der Miteigentumsanteile).
3. Tagesordnung (liegt ausgedruckt vor) Punkt für Punkt durchgehen.
4. Abstimmungen leiten und Ergebnisse im Protokoll festhalten.
5. Beschlüsse formal formulieren — jeder Beschluss muss eindeutig sein.
6. Protokoll nach der Versammlung an einfach verwaltet. per E-Mail senden.`,
    checklist: [
      "Teilnehmerliste vollständig",
      "Beschlussfähigkeit festgestellt und dokumentiert",
      "Alle Tagesordnungspunkte abgehandelt",
      "Abstimmungsergebnisse dokumentiert (Ja/Nein/Enthaltung)",
      "Beschlüsse klar formuliert",
      "Protokoll unterschrieben und hochgeladen",
    ],
  },
  "job-demo-3": {
    id: "job-demo-3",
    title: "Besichtigungstermin",
    propertyAddress: "Wiesendamm 23, 22305 Hamburg-Barmbek",
    district: "Hamburg-Barmbek",
    category: "inspection",
    fixedPriceCents: 4000,
    dueDate: "2026-03-07T14:00:00.000Z",
    description: "Besichtigungstermin für 3 Interessenten, 3-Zimmer-Wohnung.",
    instructions: `Sie führen Besichtigungen für eine 3-Zimmer-Wohnung durch (82 m², 4. OG, keine Aufzug, 1.150 € Kaltmiete).

Um 14:00, 14:30 und 15:00 Uhr kommen je ein Interessent. Die Wohnung ist leer.

Wichtige Punkte:
- Wohnung ist renoviert, keine Mängel
- Keller-/Kelleranteil vorhanden (Raum B7)
- Fahrradkeller im EG
- Nächste U-Bahn: Barmbek (5 min)
- Haustiere auf Anfrage beim Vermieter

Bitte füllen Sie für jeden Interessenten ein kurzes Feedback-Formular aus (Eindruck, Interesse: ja/nein/vielleicht, Fragen die gestellt wurden).`,
    checklist: [
      "Alle 3 Interessenten empfangen und gezeigt",
      "Wohnung nach jeder Besichtigung abgeschlossen",
      "Feedback-Formular für jeden Interessenten ausgefüllt",
      "Schlüssel zurück zu einfach verwaltet. (Anleitung im Kuvert)",
      "Fotos des Zustands nach den Besichtigungen hochgeladen",
    ],
  },
};

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

export default async function FreelancerJobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = DEMO_JOBS[id] || DEMO_JOBS["job-demo-1"];

  const dueDate = new Date(job.dueDate);
  const dueDateStr = dueDate.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/freelancer/jobs" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Zurück</span>
          </Link>
          <h1 className="font-bold text-navy text-sm">Job-Details</h1>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">

        {/* Job Header Card */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-3">
            <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${CATEGORY_COLORS[job.category] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
              {CATEGORY_LABELS[job.category] || job.category}
            </span>
            <span className="font-bold text-teal text-xl">
              {(job.fixedPriceCents / 100).toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </span>
          </div>
          <h2 className="text-xl font-bold text-navy mb-2">{job.title}</h2>
          <p className="text-sm text-text-light mb-3">{job.description}</p>

          {/* Address & Date */}
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <svg className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium text-navy">{job.propertyAddress}</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <svg className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-navy">Fällig bis: <strong>{dueDateStr}</strong></span>
            </div>
          </div>
        </div>

        {/* Agent Briefing */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-teal/10 text-teal rounded-md flex items-center justify-center text-xs">📋</span>
            Auftragsbeschreibung
          </h3>
          <div className="text-sm text-text-main whitespace-pre-wrap leading-relaxed bg-gray-50 rounded-lg p-4">
            {job.instructions}
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-green-50 text-green-600 rounded-md flex items-center justify-center text-xs">✓</span>
            Checkliste
          </h3>
          <div className="space-y-2">
            {job.checklist.map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-teal focus:ring-teal/30 cursor-pointer"
                />
                <span className="text-sm text-text-main group-hover:text-navy transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Complete Job Form */}
        <CompleteJobForm jobId={job.id} />

      </div>
    </div>
  );
}
