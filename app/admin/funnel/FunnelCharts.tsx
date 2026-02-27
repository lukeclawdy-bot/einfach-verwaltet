"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

interface Lead {
  id: string;
  createdAt: Date | string;
  verwaltungstyp: string | null;
  einheiten: string | null;
  standort: string | null;
  status: string | null;
}

interface AnalyticsData {
  leads: Lead[];
  leadsByDay: { date: string; count: number }[];
}

const COLORS = ["#1e3a5f", "#0d9488", "#d4840a", "#2d7d4a", "#6366f1"];

export function FunnelCharts({ data }: { data: AnalyticsData }) {
  const { leads } = data;

  // Standort distribution
  const standortData = useMemo(() => {
    const counts: Record<string, number> = {};
    leads.forEach((lead) => {
      const standort = lead.standort || "Unbekannt";
      counts[standort] = (counts[standort] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [leads]);

  // Verwaltungstyp split
  const typData = useMemo(() => {
    const counts: Record<string, number> = { WEG: 0, Miet: 0, Beides: 0 };
    leads.forEach((lead) => {
      const typ = lead.verwaltungstyp?.toLowerCase() || "";
      if (typ.includes("weg")) counts.WEG++;
      else if (typ.includes("miet")) counts.Miet++;
      else counts.Beides++;
    });
    return Object.entries(counts)
      .filter(([_, value]) => value > 0)
      .map(([name, value]) => ({ name, value }));
  }, [leads]);

  // Einheiten distribution
  const einheitenData = useMemo(() => {
    const buckets = [
      { name: "1-3", min: 1, max: 3, count: 0 },
      { name: "4-10", min: 4, max: 10, count: 0 },
      { name: "11-30", min: 11, max: 30, count: 0 },
      { name: "31-100", min: 31, max: 100, count: 0 },
      { name: "100+", min: 101, max: Infinity, count: 0 },
    ];
    
    leads.forEach((lead) => {
      const num = parseInt(lead.einheiten?.match(/(\d+)/)?.[1] || "0");
      const bucket = buckets.find((b) => num >= b.min && num <= b.max);
      if (bucket) bucket.count++;
    });
    
    return buckets.map((b) => ({ name: b.name, value: b.count }));
  }, [leads]);

  // Status funnel
  const statusData = useMemo(() => {
    const counts: Record<string, number> = {
      Neu: 0,
      Kontaktiert: 0,
      "Demo gebucht": 0,
      "Angebot gesendet": 0,
      Gewonnen: 0,
    };
    leads.forEach((lead) => {
      const status = lead.status || "new";
      if (status === "new") counts.Neu++;
      else if (status === "contacted") counts.Kontaktiert++;
      else if (status === "demo_booked") counts["Demo gebucht"]++;
      else if (status === "proposal_sent") counts["Angebot gesendet"]++;
      else if (status === "won") counts.Gewonnen++;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [leads]);

  return (
    <div className="space-y-6">
      {/* Leads over time */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="font-bold text-navy mb-4">Leads über Zeit (letzte 30 Tage)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.leadsByDay}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#0d9488" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Standort distribution */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-navy mb-4">Standort Verteilung</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={standortData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={80} />
                <Tooltip />
                <Bar dataKey="value" fill="#1e3a5f" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Verwaltungstyp split */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-navy mb-4">Verwaltungstyp</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {typData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {typData.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-text-light">{entry.name} ({entry.value})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Einheiten distribution */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-navy mb-4">Einheiten Verteilung</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={einheitenData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#d4840a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status funnel */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="font-bold text-navy mb-4">Status Funnel</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={100} />
                <Tooltip />
                <Bar dataKey="value" fill="#2d7d4a" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
