import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const limiter = rateLimit(`contact_${ip}`, 3, 60 * 1000);
    if (!limiter.success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, offer, budget, message, honeypot } = body;

    // Honeypot spam defense
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received" });
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: String(name || "").slice(0, 100).trim(),
      email: email.trim().toLowerCase(),
      offer: String(offer || "").slice(0, 200).trim(),
      budget: String(budget || "").slice(0, 50).trim(),
      message: String(message || "").slice(0, 2000).trim(),
      timestamp: new Date().toISOString(),
      ip,
    };

    console.log("[Project Inquiry Received]", sanitizedData);

    return NextResponse.json({
      success: true,
      message: "Inquiry received! We will reply within one business day.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
