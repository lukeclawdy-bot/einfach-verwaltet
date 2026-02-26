"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Simple PLZ to Stadt mapping for major German cities
const PLZ_TO_STADT: Record<string, string> = {
  "20095": "Hamburg", "20097": "Hamburg", "20144": "Hamburg", "20146": "Hamburg", "20148": "Hamburg",
  "20149": "Hamburg", "20249": "Hamburg", "20251": "Hamburg", "20253": "Hamburg", "20255": "Hamburg",
  "20354": "Hamburg", "20355": "Hamburg", "20357": "Hamburg", "20359": "Hamburg", "20457": "Hamburg",
  "20535": "Hamburg", "20537": "Hamburg", "20539": "Hamburg", "22041": "Hamburg", "22043": "Hamburg",
  "22045": "Hamburg", "22047": "Hamburg", "22049": "Hamburg", "22081": "Hamburg", "22083": "Hamburg",
  "22085": "Hamburg", "22087": "Hamburg", "22089": "Hamburg", "22143": "Hamburg", "22145": "Hamburg",
  "22147": "Hamburg", "22149": "Hamburg", "22159": "Hamburg", "22175": "Hamburg", "22177": "Hamburg",
  "22179": "Hamburg", "22297": "Hamburg", "22299": "Hamburg", "22301": "Hamburg", "22303": "Hamburg",
  "22305": "Hamburg", "22307": "Hamburg", "22309": "Hamburg", "22335": "Hamburg", "22337": "Hamburg",
  "22339": "Hamburg", "22359": "Hamburg", "22391": "Hamburg", "22393": "Hamburg", "22395": "Hamburg",
  "22397": "Hamburg", "22399": "Hamburg", "22415": "Hamburg", "22417": "Hamburg", "22419": "Hamburg",
  "22453": "Hamburg", "22455": "Hamburg", "22457": "Hamburg", "22459": "Hamburg",
  "10115": "Berlin", "10117": "Berlin", "10119": "Berlin", "10178": "Berlin", "10179": "Berlin",
  "10315": "Berlin", "10317": "Berlin", "10318": "Berlin", "10319": "Berlin", "10365": "Berlin",
  "10367": "Berlin", "10369": "Berlin", "10405": "Berlin", "10407": "Berlin", "10409": "Berlin",
  "10435": "Berlin", "10437": "Berlin", "10439": "Berlin", "10551": "Berlin", "10553": "Berlin",
  "10555": "Berlin", "10557": "Berlin", "10559": "Berlin", "10585": "Berlin", "10587": "Berlin",
  "10589": "Berlin", "10623": "Berlin", "10625": "Berlin", "10627": "Berlin", "10629": "Berlin",
  "10707": "Berlin", "10709": "Berlin", "10711": "Berlin", "10713": "Berlin", "10715": "Berlin",
  "10717": "Berlin", "10719": "Berlin", "10777": "Berlin", "10779": "Berlin", "10781": "Berlin",
  "10783": "Berlin", "10785": "Berlin", "10787": "Berlin", "10789": "Berlin", "10823": "Berlin",
  "10825": "Berlin", "10827": "Berlin", "10829": "Berlin", "10961": "Berlin", "10963": "Berlin",
  "10965": "Berlin", "10967": "Berlin", "10969": "Berlin", "10997": "Berlin", "10999": "Berlin",
  "12043": "Berlin", "12045": "Berlin", "12047": "Berlin", "12049": "Berlin", "12051": "Berlin",
  "12053": "Berlin", "12055": "Berlin", "12057": "Berlin", "12059": "Berlin", "12099": "Berlin",
  "12101": "Berlin", "12103": "Berlin", "12105": "Berlin", "12107": "Berlin", "12109": "Berlin",
  "12157": "Berlin", "12159": "Berlin", "12161": "Berlin", "12163": "Berlin", "12165": "Berlin",
  "12167": "Berlin", "12169": "Berlin", "12203": "Berlin", "12205": "Berlin", "12207": "Berlin",
  "12209": "Berlin", "12247": "Berlin", "12249": "Berlin", "12277": "Berlin", "12279": "Berlin",
  "12305": "Berlin", "12307": "Berlin", "12309": "Berlin", "12347": "Berlin", "12349": "Berlin",
  "12351": "Berlin", "12353": "Berlin", "12355": "Berlin", "12357": "Berlin", "12359": "Berlin",
  "12435": "Berlin", "12437": "Berlin", "12439": "Berlin", "12459": "Berlin", "12487": "Berlin",
  "12489": "Berlin", "12524": "Berlin", "12526": "Berlin", "12527": "Berlin", "12529": "Berlin",
  "12555": "Berlin", "12557": "Berlin", "12559": "Berlin", "12587": "Berlin", "12589": "Berlin",
  "12619": "Berlin", "12621": "Berlin", "12623": "Berlin", "12627": "Berlin", "12629": "Berlin",
  "12679": "Berlin", "12681": "Berlin", "12683": "Berlin", "12685": "Berlin", "12687": "Berlin",
  "12689": "Berlin", "13051": "Berlin", "13053": "Berlin", "13055": "Berlin", "13057": "Berlin",
  "13059": "Berlin", "13086": "Berlin", "13088": "Berlin", "13089": "Berlin", "13125": "Berlin",
  "13127": "Berlin", "13129": "Berlin", "13156": "Berlin", "13158": "Berlin", "13159": "Berlin",
  "13187": "Berlin", "13189": "Berlin", "13347": "Berlin", "13349": "Berlin", "13351": "Berlin",
  "13353": "Berlin", "13355": "Berlin", "13357": "Berlin", "13359": "Berlin", "13403": "Berlin",
  "13405": "Berlin", "13407": "Berlin", "13409": "Berlin", "13435": "Berlin", "13437": "Berlin",
  "13439": "Berlin", "13465": "Berlin", "13467": "Berlin", "13469": "Berlin", "13503": "Berlin",
  "13505": "Berlin", "13507": "Berlin", "13509": "Berlin", "13581": "Berlin", "13583": "Berlin",
  "13585": "Berlin", "13587": "Berlin", "13589": "Berlin", "13591": "Berlin", "13593": "Berlin",
  "13595": "Berlin", "13597": "Berlin", "13599": "Berlin", "13627": "Berlin", "13629": "Berlin",
  "14050": "Berlin", "14052": "Berlin", "14053": "Berlin", "14055": "Berlin", "14057": "Berlin",
  "14059": "Berlin", "14089": "Berlin", "14109": "Berlin", "14129": "Berlin", "14163": "Berlin",
  "14165": "Berlin", "14167": "Berlin", "14169": "Berlin", "14193": "Berlin", "14195": "Berlin",
  "14197": "Berlin", "14199": "Berlin", "60306": "Frankfurt", "60308": "Frankfurt", "60310": "Frankfurt",
  "60311": "Frankfurt", "60313": "Frankfurt", "60314": "Frankfurt", "60316": "Frankfurt", "60318": "Frankfurt",
  "60320": "Frankfurt", "60322": "Frankfurt", "60323": "Frankfurt", "60325": "Frankfurt", "60326": "Frankfurt",
  "60327": "Frankfurt", "60329": "Frankfurt", "60385": "Frankfurt", "60386": "Frankfurt", "60388": "Frankfurt",
  "60389": "Frankfurt", "60431": "Frankfurt", "60433": "Frankfurt", "60435": "Frankfurt", "60437": "Frankfurt",
  "60438": "Frankfurt", "60439": "Frankfurt", "60486": "Frankfurt", "60487": "Frankfurt", "60488": "Frankfurt",
  "60489": "Frankfurt", "60528": "Frankfurt", "60529": "Frankfurt", "60549": "Frankfurt", "60594": "Frankfurt",
  "60596": "Frankfurt", "60598": "Frankfurt", "60599": "Frankfurt",
  "80331": "München", "80333": "München", "80335": "München", "80336": "München", "80337": "München",
  "80339": "München", "80469": "München", "80538": "München", "80539": "München", "80634": "München",
  "80636": "München", "80637": "München", "80638": "München", "80639": "München", "80686": "München",
  "80687": "München", "80689": "München", "80796": "München", "80797": "München", "80798": "München",
  "80799": "München", "80801": "München", "80802": "München", "80803": "München", "80804": "München",
  "80805": "München", "80807": "München", "80809": "München", "80933": "München", "80935": "München",
  "80937": "München", "80939": "München", "80992": "München", "80993": "München", "80995": "München",
  "80997": "München", "80999": "München", "81241": "München", "81243": "München", "81245": "München",
  "81247": "München", "81249": "München", "81369": "München", "81371": "München", "81373": "München",
  "81375": "München", "81377": "München", "81379": "München", "81475": "München", "81476": "München",
  "81477": "München", "81479": "München", "81539": "München", "81541": "München", "81543": "München",
  "81545": "München", "81547": "München", "81549": "München", "81667": "München", "81669": "München",
  "81671": "München", "81673": "München", "81675": "München", "81677": "München", "81679": "München",
  "81735": "München", "81737": "München", "81739": "München", "81825": "München", "81827": "München",
  "81829": "München", "81925": "München", "81927": "München", "81929": "München",
};

const UNITS_OPTIONS = ["1", "2", "3", "4", "5", "Mehr als 5"];
const VERWALTUNG_TYPEN = [
  { value: "miet", label: "Mietverwaltung" },
  { value: "weg", label: "WEG-Verwaltung" },
  { value: "sev", label: "Sondereigentum (SEV)" },
];

export default function Schritt2Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    strasse: "",
    hausnummer: "",
    plz: "",
    stadt: "",
    einheiten: "",
    verwaltungstyp: "",
  });

  const handlePlzChange = (plz: string) => {
    const cleanPlz = plz.replace(/\D/g, "").slice(0, 5);
    const stadt = PLZ_TO_STADT[cleanPlz] || "";
    setFormData(prev => ({ ...prev, plz: cleanPlz, stadt }));
  };

  const isValid = formData.strasse && formData.hausnummer && formData.plz && formData.stadt && formData.einheiten && formData.verwaltungstyp;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      // Store data in localStorage
      const existing = JSON.parse(localStorage.getItem("onboarding") || "{}");
      localStorage.setItem("onboarding", JSON.stringify({ ...existing, step2: formData }));
      router.push("/onboarding/privat/schritt-3");
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-navy">
          Ihre Immobilie
        </h1>
        <p className="text-text-light">
          Erzählen Sie uns von Ihrer ersten Immobilie
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-light-gray space-y-6">
        {/* Straße + Hausnummer */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-text-main mb-2">
              Straße
            </label>
            <input
              type="text"
              value={formData.strasse}
              onChange={(e) => setFormData({ ...formData, strasse: e.target.value })}
              placeholder="z.B. Musterstraße"
              className="w-full px-4 py-3 rounded-lg border border-light-gray focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-main mb-2">
              Nr.
            </label>
            <input
              type="text"
              value={formData.hausnummer}
              onChange={(e) => setFormData({ ...formData, hausnummer: e.target.value })}
              placeholder="42"
              className="w-full px-4 py-3 rounded-lg border border-light-gray focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
              required
            />
          </div>
        </div>

        {/* PLZ + Stadt */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-main mb-2">
              PLZ
            </label>
            <input
              type="text"
              value={formData.plz}
              onChange={(e) => handlePlzChange(e.target.value)}
              placeholder="20095"
              maxLength={5}
              className="w-full px-4 py-3 rounded-lg border border-light-gray focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-main mb-2">
              Stadt
            </label>
            <input
              type="text"
              value={formData.stadt}
              onChange={(e) => setFormData({ ...formData, stadt: e.target.value })}
              placeholder="wird automatisch ergänzt"
              className="w-full px-4 py-3 rounded-lg border border-light-gray focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all bg-gray-50"
              required
            />
          </div>
        </div>

        {/* Anzahl Wohneinheiten */}
        <div>
          <label className="block text-sm font-medium text-text-main mb-3">
            Anzahl Wohneinheiten
          </label>
          <div className="flex flex-wrap gap-3">
            {UNITS_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, einheiten: option })}
                className={`px-5 py-2.5 rounded-lg border transition-all ${
                  formData.einheiten === option
                    ? "border-teal bg-teal/10 text-teal font-medium"
                    : "border-light-gray hover:border-teal/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Verwaltungstyp */}
        <div>
          <label className="block text-sm font-medium text-text-main mb-3">
            Verwaltungstyp
          </label>
          <div className="space-y-3">
            {VERWALTUNG_TYPEN.map((typ) => (
              <button
                key={typ.value}
                type="button"
                onClick={() => setFormData({ ...formData, verwaltungstyp: typ.value })}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                  formData.verwaltungstyp === typ.value
                    ? "border-teal bg-teal/10 text-teal font-medium"
                    : "border-light-gray hover:border-teal/50"
                }`}
              >
                {typ.label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid}
          className="w-full py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          Weiter
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </form>
    </div>
  );
}
