/** Client-side: send a lead to /api/contact. Resolves to an error message, or null on success. */
export async function submitLead(lead: {
  type: "contact" | "qualifier" | "newsletter";
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  message?: string;
  fields?: Record<string, string>;
  honeypot?: string;
}): Promise<string | null> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, page: window.location.pathname }),
    });
    if (res.ok) return null;
    const j = await res.json().catch(() => ({}));
    return j.error || "Something went wrong. Please try again.";
  } catch {
    return "Network error. Please try again or message us on WhatsApp.";
  }
}
