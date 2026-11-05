"use client";

import { useMemo, useState } from "react";

type Field = { key: string; label: string; suffix?: string; prefix?: string; step?: number; min?: number; max?: number };
type Out = { label: string; value: string; strong?: boolean };

const money = (n: number) =>
  Number.isFinite(n) ? `$${n.toLocaleString("en-US", { maximumFractionDigits: n < 100 ? 2 : 0, minimumFractionDigits: n < 100 && n % 1 ? 2 : 0 })}` : "n/a";
const num = (n: number, d = 0) => (Number.isFinite(n) ? n.toLocaleString("en-US", { maximumFractionDigits: d }) : "n/a");
const pct = (n: number, d = 1) => (Number.isFinite(n) ? `${n.toFixed(d)}%` : "n/a");

function Calculator({
  title,
  fields,
  initial,
  compute,
  formula,
}: {
  title: string;
  fields: Field[];
  initial: Record<string, number>;
  compute: (v: Record<string, number>) => Out[];
  formula: string;
}) {
  const [v, setV] = useState(initial);
  const out = useMemo(() => compute(v), [v, compute]);
  return (
    <section className="seo-tool" aria-label={title}>
      <h2>{title}</h2>
      <div className="seo-tool-grid">
        <form className="seo-tool-in" onSubmit={(e) => e.preventDefault()}>
          {fields.map((f) => (
            <label key={f.key}>
              <span>{f.label}</span>
              <span className="seo-tool-field">
                {f.prefix && <em>{f.prefix}</em>}
                <input
                  type="number"
                  inputMode="decimal"
                  value={Number.isFinite(v[f.key]) ? v[f.key] : ""}
                  step={f.step ?? 1}
                  min={f.min ?? 0}
                  max={f.max}
                  onChange={(e) => setV({ ...v, [f.key]: e.target.value === "" ? NaN : Number(e.target.value) })}
                />
                {f.suffix && <em>{f.suffix}</em>}
              </span>
            </label>
          ))}
        </form>
        <div className="seo-tool-out" aria-live="polite">
          {out.map((o) => (
            <div key={o.label} className={o.strong ? "strong" : ""}>
              <span>{o.label}</span>
              <b>{o.value}</b>
            </div>
          ))}
        </div>
      </div>
      <p className="seo-tool-formula">{formula}</p>
    </section>
  );
}

function FunnelConversion() {
  return (
    <Calculator
      title="Funnel conversion calculator"
      fields={[
        { key: "visitors", label: "Landing page visitors per month" },
        { key: "spend", label: "Ad spend per month", prefix: "$" },
        { key: "optin", label: "Visitor to lead (opt-in) rate", suffix: "%", step: 0.1 },
        { key: "book", label: "Lead to booked call rate", suffix: "%", step: 0.1 },
        { key: "show", label: "Show-up rate", suffix: "%", step: 0.1 },
        { key: "close", label: "Close rate on attended calls", suffix: "%", step: 0.1 },
        { key: "deal", label: "Average deal value", prefix: "$" },
      ]}
      initial={{ visitors: 5000, spend: 5000, optin: 8, book: 30, show: 70, close: 20, deal: 3000 }}
      compute={(x) => {
        const leads = (x.visitors * x.optin) / 100;
        const booked = (leads * x.book) / 100;
        const shows = (booked * x.show) / 100;
        const sales = (shows * x.close) / 100;
        const revenue = sales * x.deal;
        return [
          { label: "Leads", value: num(leads) },
          { label: "Booked calls", value: num(booked) },
          { label: "Attended calls", value: num(shows) },
          { label: "Sales", value: num(sales, 1) },
          { label: "Visitor to sale conversion", value: pct((sales / x.visitors) * 100, 2) },
          { label: "Cost per lead", value: money(x.spend / leads) },
          { label: "Cost per attended call", value: money(x.spend / shows) },
          { label: "Cost per sale", value: money(x.spend / sales) },
          { label: "Revenue", value: money(revenue), strong: true },
          { label: "ROAS", value: `${num(revenue / x.spend, 2)}x`, strong: true },
        ];
      }}
      formula="Leads = visitors × opt-in rate. Booked = leads × booking rate. Attended = booked × show rate. Sales = attended × close rate. Revenue = sales × deal value. ROAS = revenue ÷ ad spend."
    />
  );
}

function CostPerLead() {
  return (
    <Calculator
      title="Cost per lead calculator"
      fields={[
        { key: "spend", label: "Ad spend", prefix: "$" },
        { key: "leads", label: "Leads generated" },
        { key: "lts", label: "Lead to customer rate", suffix: "%", step: 0.1 },
        { key: "value", label: "Revenue per customer", prefix: "$" },
        { key: "margin", label: "Gross margin", suffix: "%", step: 1 },
      ]}
      initial={{ spend: 5000, leads: 250, lts: 5, value: 4000, margin: 50 }}
      compute={(x) => {
        const cpl = x.spend / x.leads;
        const customers = (x.leads * x.lts) / 100;
        const cac = x.spend / customers;
        const breakEvenCpl = (x.value * (x.margin / 100) * x.lts) / 100;
        return [
          { label: "Cost per lead", value: money(cpl), strong: true },
          { label: "Customers", value: num(customers, 1) },
          { label: "Cost per customer (CAC)", value: money(cac) },
          { label: "Gross profit per customer", value: money((x.value * x.margin) / 100) },
          { label: "Break-even cost per lead", value: money(breakEvenCpl), strong: true },
          { label: "Headroom vs break-even", value: pct(((breakEvenCpl - cpl) / breakEvenCpl) * 100, 0) },
        ];
      }}
      formula="Cost per lead = ad spend ÷ leads. Break-even cost per lead = revenue per customer × gross margin × lead-to-customer rate. Below break-even, every lead is profitable on gross margin."
    />
  );
}

function Roas() {
  return (
    <Calculator
      title="ROAS calculator"
      fields={[
        { key: "spend", label: "Ad spend", prefix: "$" },
        { key: "revenue", label: "Revenue attributed to the ads", prefix: "$" },
        { key: "margin", label: "Gross margin", suffix: "%", step: 1 },
      ]}
      initial={{ spend: 10000, revenue: 42000, margin: 40 }}
      compute={(x) => {
        const roas = x.revenue / x.spend;
        const gp = (x.revenue * x.margin) / 100;
        return [
          { label: "ROAS", value: `${num(roas, 2)}x`, strong: true },
          { label: "Gross profit from ad revenue", value: money(gp) },
          { label: "Profit after ad spend", value: money(gp - x.spend), strong: true },
          { label: "Break-even ROAS", value: `${num(100 / x.margin, 2)}x` },
          { label: "Return on ad spend as %", value: pct(roas * 100, 0) },
        ];
      }}
      formula="ROAS = revenue ÷ ad spend. Break-even ROAS = 1 ÷ gross margin. Profit after ad spend = revenue × gross margin − ad spend."
    />
  );
}

function NoShowCost() {
  return (
    <Calculator
      title="No-show cost calculator"
      fields={[
        { key: "booked", label: "Calls booked per month" },
        { key: "noshow", label: "Current no-show rate", suffix: "%", step: 0.1 },
        { key: "target", label: "Target no-show rate", suffix: "%", step: 0.1 },
        { key: "close", label: "Close rate on attended calls", suffix: "%", step: 0.1 },
        { key: "deal", label: "Average deal value", prefix: "$" },
      ]}
      initial={{ booked: 120, noshow: 35, target: 12, close: 20, deal: 3000 }}
      compute={(x) => {
        const missed = (x.booked * x.noshow) / 100;
        const lostRev = ((missed * x.close) / 100) * x.deal;
        const recoveredCalls = (x.booked * (x.noshow - x.target)) / 100;
        const recoveredRev = ((recoveredCalls * x.close) / 100) * x.deal;
        return [
          { label: "Missed calls per month", value: num(missed) },
          { label: "Revenue lost to no-shows per month", value: money(lostRev), strong: true },
          { label: "Revenue lost per year", value: money(lostRev * 12) },
          { label: "Extra attended calls at target", value: num(recoveredCalls) },
          { label: "Revenue recovered per month at target", value: money(recoveredRev), strong: true },
        ];
      }}
      formula="Missed calls = booked × no-show rate. Lost revenue = missed calls × close rate × deal value. Recovered revenue uses the gap between current and target no-show rate."
    />
  );
}

function AiVoiceRoi() {
  return (
    <Calculator
      title="AI voice agent ROI calculator"
      fields={[
        { key: "leads", label: "New leads per month" },
        { key: "human", label: "Human setter cost per month (salary + commission)", prefix: "$" },
        { key: "humanContact", label: "Human contact rate", suffix: "%", step: 1 },
        { key: "aiContact", label: "AI contact rate (calls within 60 seconds)", suffix: "%", step: 1 },
        { key: "book", label: "Contacted lead to booking rate", suffix: "%", step: 1 },
        { key: "minutes", label: "AI talk minutes per lead (all attempts)", step: 0.5 },
        { key: "perMin", label: "AI cost per minute", prefix: "$", step: 0.01 },
        { key: "platform", label: "AI build and maintenance per month", prefix: "$" },
      ]}
      initial={{ leads: 600, human: 4000, humanContact: 45, aiContact: 80, book: 30, minutes: 3, perMin: 0.15, platform: 500 }}
      compute={(x) => {
        const hBook = (((x.leads * x.humanContact) / 100) * x.book) / 100;
        const aiBook = (((x.leads * x.aiContact) / 100) * x.book) / 100;
        const aiCost = x.leads * x.minutes * x.perMin + x.platform;
        return [
          { label: "Human: bookings per month", value: num(hBook) },
          { label: "Human: cost per booking", value: money(x.human / hBook) },
          { label: "AI: bookings per month", value: num(aiBook) },
          { label: "AI: total monthly cost", value: money(aiCost) },
          { label: "AI: cost per booking", value: money(aiCost / aiBook), strong: true },
          { label: "Extra bookings per month with AI", value: num(aiBook - hBook), strong: true },
        ];
      }}
      formula="Bookings = leads × contact rate × booking rate. AI cost = leads × minutes per lead × cost per minute + build and maintenance. Cost per booking = monthly cost ÷ bookings."
    />
  );
}

const TOOLS: Record<string, () => React.ReactElement> = {
  "funnel-conversion": FunnelConversion,
  "cost-per-lead": CostPerLead,
  roas: Roas,
  "no-show-cost": NoShowCost,
  "ai-voice-roi": AiVoiceRoi,
};

export default function ToolSlot({ id }: { id: string }) {
  const C = TOOLS[id];
  return C ? <C /> : null;
}
