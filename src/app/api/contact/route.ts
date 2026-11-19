import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { deliverLead, type Lead } from "@/lib/leads";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const TYPES = new Set(["contact", "qualifier", "newsletter"]);

const clean = (v: unknown, max: number) => String(v ?? "").slice(0, max).trim();

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "127.0.0.1";
  if (!rateLimit(`contact_${ip}`, 5, 60 * 1000).success) {
    return NextResponse.json({ error: "Too many requests. Please wait a minute and try again." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field; pretend it worked.
  if (body.honeypot) return NextResponse.json({ success: true });

  const email = clean(body.email, 200).toLowerCase();
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please add a valid email address." }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  if (body.fields && typeof body.fields === "object") {
    for (const [k, v] of Object.entries(body.fields as Record<string, unknown>).slice(0, 12)) {
      fields[clean(k, 40)] = clean(v, 300);
    }
  }

  const type = TYPES.has(String(body.type)) ? (String(body.type) as Lead["type"]) : "contact";
  const page = clean(body.page, 200);
  const lead: Lead = {
    type,
    name: clean(body.name, 100),
    email,
    phone: clean(body.phone, 40),
    company: clean(body.company, 200),
    message: clean(body.message, 3000),
    fields,
    page: page.startsWith("/") ? page : "/",
    at: new Date().toISOString(),
  };

  const { delivered } = await deliverLead(lead);
  if (!delivered.length) {
    return NextResponse.json({ error: "We could not send this right now. Please message us on WhatsApp or email info@funnelsthatprint.com." }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}
