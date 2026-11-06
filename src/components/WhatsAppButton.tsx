"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { whatsappHref, whatsappMessage } from "@/lib/whatsapp";

function currentH1() {
  const tagged = document.querySelector<HTMLElement>("[data-wa-topic]")?.dataset.waTopic;
  if (tagged) return tagged.slice(0, 110);
  const h = document.querySelector("main h1, h1");
  return (h?.textContent || "").replace(/\s+/g, " ").trim().slice(0, 110);
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Floating WhatsApp chat button, bottom right on every page. */
export default function WhatsAppButton() {
  const path = usePathname() || "/";
  const [href, setHref] = useState(() => whatsappHref(whatsappMessage(path, "")));

  useEffect(() => {
    // Read the H1 after the page has rendered so the message names the page topic.
    const t = setTimeout(() => setHref(whatsappHref(whatsappMessage(path, currentH1()))), 50);
    return () => clearTimeout(t);
  }, [path]);

  return (
    <a
      className="wa-float"
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Funnels That Print on WhatsApp"
      onClick={() => {
        // Refresh the message at click time, then report the lead to Meta.
        setHref(whatsappHref(whatsappMessage(path, currentH1())));
        try {
          window.fbq?.("track", "Contact", { content_name: "WhatsApp", content_category: path });
        } catch {}
      }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.04 3C8.86 3 3.02 8.82 3.02 15.98c0 2.29.6 4.53 1.75 6.5L3 29l6.7-1.75a13.04 13.04 0 0 0 6.33 1.62h.01c7.18 0 13.02-5.82 13.02-12.98C29.06 8.82 23.22 3 16.04 3Zm0 23.68h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-3.98 1.04 1.06-3.87-.26-.4a10.7 10.7 0 0 1-1.66-5.73c0-5.95 4.85-10.79 10.82-10.79 5.96 0 10.8 4.84 10.8 10.8 0 5.95-4.85 10.69-10.87 10.69Zm5.93-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.22.32-.84 1.06-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.33.16.21 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.04.13.62-.09 1.92-.78 2.19-1.54.27-.75.27-1.4.19-1.54-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
      <span className="wa-label">Chat on WhatsApp</span>
    </a>
  );
}
