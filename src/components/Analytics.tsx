"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/track";

/**
 * GA4 + conversion events.
 * - The GA4 tag loads only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set (Vercel env var).
 * - One delegated click listener reports lead actions site-wide, so every
 *   WhatsApp button and booking link is counted without wiring each one.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const page_path = window.location.pathname;
      if (href.includes("wa.me/")) {
        track("whatsapp_click", { method: a.classList.contains("wa-float") ? "floating_button" : "inline_button", page_path });
      } else if (href.includes("calendar.app.google") || href.includes("calendar.google.com")) {
        track("booking_click", { method: "calendar_link", page_path });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { page_path });
      } else if (href === "/book-a-call") {
        track("book_call_cta", { page_path });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
