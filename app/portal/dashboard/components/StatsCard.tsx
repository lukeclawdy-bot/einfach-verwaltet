interface Props {
  label: string;
  value: string | number;
  sub?: string;
  highlight?: boolean;
}

export function StatsCard({ label, value, sub, highlight }: Props) {
  return (
    <div className={`rounded-2xl border p-5 ${highlight ? "bg-teal/5 border-teal/20" : "bg-white border-gray-100"}`}>
      <p className="text-text-light text-xs font-medium uppercase tracking-wide mb-1">{label}</p>
      <p className={`text-3xl font-bold ${highlight ? "text-teal" : "text-navy"}`}>{value}</p>
      {sub && <p className="text-xs text-text-light mt-1">{sub}</p>}
    </div>
  );
}
