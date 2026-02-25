const faqs = [
  {
    q: "Wie läuft der Wechsel von meiner bisherigen Hausverwaltung ab?",
    a: "Wir übernehmen den gesamten Wechselprozess für Sie. Sie kündigen Ihren bestehenden Vertrag (oder wir unterstützen Sie dabei), und wir koordinieren die Übergabe aller Dokumente, Verträge und Konten. Der Übergang dauert in der Regel 3–4 Wochen.",
  },
  {
    q: "Was ist im Preis enthalten?",
    a: "Alles. Unsere Preise sind All-inclusive — keine versteckten Gebühren für Telefonate, Kopien, Schriftverkehr oder ähnliches. Was Sie auf unserer Preisliste sehen, ist was Sie zahlen.",
  },
  {
    q: "Bin ich an eine Mindestlaufzeit gebunden?",
    a: "Die Mindestvertragslaufzeit beträgt 12 Monate. Danach können Sie jederzeit mit einer Frist von 3 Monaten kündigen. Keine automatische Verlängerung.",
  },
  {
    q: "Wie schnell reagieren Sie auf Anfragen?",
    a: "Innerhalb von 24 Stunden — garantiert und vertraglich festgehalten. In dringenden Fällen (Wasserrohrbruch, Heizungsausfall) sind wir auch außerhalb der Geschäftszeiten erreichbar.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-12 text-center font-serif">
          Häufige Fragen
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-navy mb-2">{f.q}</h3>
              <p className="text-text-light text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
