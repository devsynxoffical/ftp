/**
 * Server-side lead delivery. Every form on the site posts to /api/contact,
 * which calls deliverLead(). A lead is sent to every destination that is
 * configured, so one failing service never loses it:
 *
 * 1. LEAD_WEBHOOK_URL: a GoHighLevel inbound webhook (or Zapier / Make URL).
 *    Receives the lead as JSON and can create the contact and start a workflow.
 * 2. RESEND_API_KEY: sends the lead as an email to LEAD_TO_EMAIL through Resend
 *    (LEAD_FROM_EMAIL must be a sender on a domain verified in Resend).
 *
 * Every lead is also written to the server log ("[lead]" in Vercel logs), so
 * nothing is lost while a destination is being set up. With no destination
 * configured the API reports failure and the contact form falls back to the
 * visitor's email app. (FormSubmit was tried and rejected: its Cloudflare
 * challenge blocks server requests.)
 */

export interface Lead {
  type: "contact" | "qualifier" | "newsletter";
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  /** Extra answers (package, ad spend, industry, goal, ...). */
  fields: Record<string, string>;
  page: string;
  at: string;
}

const TO = process.env.LEAD_TO_EMAIL || "info@funnelsthatprint.com";
const SITE = "https://www.funnelsthatprint.com";

function subject(l: Lead) {
  if (l.type === "newsletter") return `Newsletter signup: ${l.email}`;
  return `New lead (${l.type === "qualifier" ? "funnel planner" : "contact form"}): ${l.name || l.email}`;
}

function text(l: Lead) {
  const lines = [
    `Type: ${l.type}`,
    `Name: ${l.name}`,
    `Email: ${l.email}`,
    `Phone: ${l.phone}`,
    `Company / website: ${l.company}`,
    ...Object.entries(l.fields).map(([k, v]) => `${k}: ${v}`),
    `Page: ${SITE}${l.page}`,
    `Received: ${l.at}`,
    "",
    l.message,
  ];
  return lines.join("\n");
}

async function post(url: string, body: unknown, headers: Record<string, string> = {}) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json", ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`${new URL(url).host} ${res.status}`);
  return res;
}

export async function deliverLead(l: Lead): Promise<{ delivered: string[]; failed: string[] }> {
  const jobs: [string, () => Promise<unknown>][] = [];

  if (process.env.LEAD_WEBHOOK_URL) {
    jobs.push(["webhook", () => post(process.env.LEAD_WEBHOOK_URL!, { ...l, ...l.fields, source: "funnelsthatprint.com" })]);
  }
  if (process.env.RESEND_API_KEY && process.env.LEAD_FROM_EMAIL) {
    jobs.push([
      "resend",
      () =>
        post(
          "https://api.resend.com/emails",
          { from: process.env.LEAD_FROM_EMAIL, to: [TO], reply_to: l.email, subject: subject(l), text: text(l) },
          { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        ),
    ]);
  }
  const results = await Promise.allSettled(jobs.map(([, run]) => run()));
  const delivered: string[] = [];
  const failed: string[] = [];
  results.forEach((r, i) => {
    if (r.status === "fulfilled") delivered.push(jobs[i][0]);
    else failed.push(`${jobs[i][0]}: ${r.reason instanceof Error ? r.reason.message : String(r.reason)}`);
  });
  console.log("[lead]", JSON.stringify({ ...l, delivered, failed }));
  return { delivered, failed };
}
