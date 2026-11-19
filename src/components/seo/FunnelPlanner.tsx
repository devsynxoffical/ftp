"use client";

import { useState } from "react";
import Link from "next/link";
import type { PlannerSell } from "@/data/seo/types";
import { submitLead } from "@/lib/submitLead";
import { track } from "@/lib/track";

const SELL: { v: PlannerSell; label: string }[] = [
  { v: "local", label: "Local or home service" },
  { v: "coaching", label: "Coaching, course or consulting" },
  { v: "ecom", label: "eCommerce products" },
  { v: "b2b", label: "B2B, SaaS or agency" },
  { v: "other", label: "Something else" },
];
const SPEND = ["Not running ads yet", "Under $3k / month", "$3k to $10k / month", "$10k+ / month"];
type Problem = "volume" | "booking" | "shows" | "automation";
const PROBLEM: { v: Problem; label: string }[] = [
  { v: "volume", label: "Not enough leads or sales" },
  { v: "booking", label: "Leads come in but don't book" },
  { v: "shows", label: "Calls don't show up or close" },
  { v: "automation", label: "Too much manual follow-up" },
];

interface Plan {
  title: string;
  steps: string[];
  link: { href: string; label: string };
}

function plan(sell: PlannerSell, spend: string, problem: Problem): Plan {
  const noAds = spend === SPEND[0];
  const bySell: Record<PlannerSell, { href: string; label: string }> = {
    local: { href: "/funnels-for/home-services", label: "Home service funnels" },
    coaching: { href: "/vsl-funnels", label: "VSL funnels" },
    ecom: { href: "/funnels-for/ecommerce", label: "eCommerce funnels" },
    b2b: { href: "/funnels-for/saas", label: "SaaS demo funnels" },
    other: { href: "/sales-funnel-agency", label: "Done-for-you funnels" },
  };
  if (problem === "booking")
    return {
      title: "Speed-to-lead follow-up and an AI appointment setter",
      steps: [
        "Text and call every new lead within 60 seconds, day or night",
        "Qualify with 3 to 5 questions, then book straight into your calendar",
        "Re-engage leads that went quiet with a short nurture sequence",
      ],
      link: { href: "/speed-to-lead", label: "Speed-to-lead automation" },
    };
  if (problem === "shows")
    return {
      title: "Show-rate reminders and a clean CRM pipeline",
      steps: [
        "Confirmation plus 24-hour, 2-hour and 10-minute reminders by SMS and email",
        "One pipeline that shows booked, showed, closed and lost at a glance",
        "Automatic rebooking for no-shows so they are not lost",
      ],
      link: { href: "/crm-automation", label: "CRM automation" },
    };
  if (problem === "automation")
    return {
      title: "GoHighLevel setup with your follow-up automated",
      steps: [
        "Pipelines, calendars and forms in one GoHighLevel account",
        "Workflows that follow up, remind and tag leads without manual work",
        "A dashboard of leads, bookings and revenue by source",
      ],
      link: { href: "/gohighlevel-agency", label: "GoHighLevel setup" },
    };
  return {
    title: noAds ? "A conversion-ready funnel first, then paid traffic" : "A tested funnel and an ad account rebuilt around booked calls",
    steps: noAds
      ? [
          "A funnel built for your offer in 5 to 10 days (from $999)",
          "Tracking, CRM and instant follow-up connected before launch",
          "A small Meta test budget to find the angle that converts",
        ]
      : [
          "Audit of your current funnel, offer and ad account",
          "New funnel or landing page with OTP-verified forms where it fits",
          "Creative testing and scaling judged on cost per booked call",
        ],
    link: noAds ? bySell[sell] : { href: "/facebook-ads-agency", label: "Meta ads management" },
  };
}

function Chips<T extends string>({ items, value, set, name: n }: { items: { v: T; label: string }[]; value: T | null; set: (v: T) => void; name: string }) {
  return (
    <div className="fp-chips" role="radiogroup" aria-label={n}>
      {items.map((it) => (
        <button key={it.v} type="button" role="radio" aria-checked={value === it.v} className={value === it.v ? "on" : ""} onClick={() => set(it.v)}>
          {it.label}
        </button>
      ))}
    </div>
  );
}

export default function FunnelPlanner({ preset, topic }: { preset?: PlannerSell; topic: string }) {
  const [sell, setSell] = useState<PlannerSell | null>(preset ?? null);
  const [spend, setSpend] = useState<string | null>(null);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hp, setHp] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [err, setErr] = useState("");

  const ready = sell && spend && problem;
  const result = ready ? plan(sell, spend, problem) : null;
  const answered = [sell, spend, problem].filter(Boolean).length;

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!result || state === "sending") return;
    if (!name.trim()) return setErr("Please add your name.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) return setErr("Please add a valid email.");
    setErr("");
    setState("sending");
    const e2 = await submitLead({
      type: "qualifier",
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      honeypot: hp,
      message: `Plan shown: ${result.title}`,
      fields: {
        Sells: SELL.find((s) => s.v === sell)!.label,
        "Ad spend": spend!,
        "Main problem": PROBLEM.find((p) => p.v === problem)!.label,
        Topic: topic,
      },
    });
    if (e2) {
      setErr(e2);
      setState("idle");
      return;
    }
    setState("done");
    track("generate_lead", { method: "funnel_planner", page_path: window.location.pathname });
  };

  return (
    <section className="fp box" id="planner" aria-labelledby="fp-h">
      <div className="fp-grid">
        <div className="fp-q">
          <div className="eyebrow mono">Free funnel plan &middot; 30 seconds</div>
          <h2 id="fp-h" className="h2 d">
            Get your <span className="it">funnel plan.</span>
          </h2>
          <p className="fp-sub">Three quick questions. You get a recommended setup right away, and we send a written plan within one business day.</p>
          <div className="fp-bar" aria-hidden="true">
            <span style={{ width: `${(answered / 3) * 100}%` }} />
          </div>
          <ol className="fp-steps">
            <li>
              <b>1. What do you sell?</b>
              <Chips items={SELL} value={sell} set={setSell} name="What do you sell" />
            </li>
            <li>
              <b>2. Monthly ad spend</b>
              <Chips items={SPEND.map((s) => ({ v: s, label: s }))} value={spend} set={setSpend} name="Monthly ad spend" />
            </li>
            <li>
              <b>3. Biggest problem right now</b>
              <Chips items={PROBLEM} value={problem} set={setProblem} name="Biggest problem" />
            </li>
          </ol>
        </div>

        <div className={`fp-out ${result ? "on" : ""}`} aria-live="polite">
          {!result ? (
            <div className="fp-wait">
              <span className="fp-num">{answered}/3</span>
              <p>Answer the questions and your recommended setup appears here.</p>
            </div>
          ) : state === "done" ? (
            <div className="fp-done">
              <span className="fp-tick" aria-hidden="true">&#10003;</span>
              <b>Thanks, {name.split(" ")[0]}. Your plan is on its way.</b>
              <p>We reply within one business day. Want to talk it through sooner?</p>
              <Link className="btn o" href="/book-a-call">
                Book a strategy call <i>&#8599;</i>
              </Link>
            </div>
          ) : (
            <>
              <span className="hx-tag">Recommended for you</span>
              <h3>{result.title}</h3>
              <ul className="fp-list">
                {result.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <Link className="fp-link" href={result.link.href}>
                See how it works: {result.link.label} &#8599;
              </Link>
              <form className="fp-form" onSubmit={send} noValidate>
                <p>Send me the written plan:</p>
                <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="fp-hp" value={hp} onChange={(e) => setHp(e.target.value)} />
                <input type="text" placeholder="Your name" aria-label="Your name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Work email" aria-label="Work email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder="Phone (optional)" aria-label="Phone (optional)" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                {err && (
                  <span className="fp-err" role="alert">
                    {err}
                  </span>
                )}
                <button type="submit" className="btn o" disabled={state === "sending"}>
                  {state === "sending" ? "Sending..." : <>Send my plan <i>&#8599;</i></>}
                </button>
                <small>No spam. One reply from Gaurav or Rahul.</small>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
