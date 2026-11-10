/**
 * One place to report conversions. Each event goes to GA4 (when the GA4 tag
 * is loaded) and to the Meta Pixel, so organic leads are measurable in GA4
 * and paid campaigns keep their optimisation signal.
 */
type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** GA4 event name → Meta standard event. */
const META_EVENT: Record<string, string> = {
  whatsapp_click: "Contact",
  booking_click: "Schedule",
  generate_lead: "Lead",
};

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
  } catch {}
  const meta = META_EVENT[event];
  if (meta) {
    try {
      window.fbq?.("track", meta, { content_name: params.method, content_category: params.page_path });
    } catch {}
  }
}
