import Link from "next/link";
import { whatsappHref, whatsappMessage } from "@/lib/whatsapp";

/**
 * Compact "book a call" band used across the site. The calendar itself lives
 * on its own page (/book-a-call) so every page stays light and every booking
 * button lands in one place.
 */
export default function BookingCta({ path = "/", topic = "" }: { path?: string; topic?: string }) {
  return (
    <section className="box bcta-wrap" aria-labelledby="bcta-h">
      <div className="bcta">
        <div className="bcta-copy">
          <span className="hx-tag">Free 30-minute call</span>
          <h2 id="bcta-h">
            Talk to the people who will <span className="it">build it.</span>
          </h2>
          <p>
            Pick a time with Gaurav or Rahul. We review your funnel, follow-up and tracking, and tell you the fastest win before
            you spend anything.
          </p>
          <ul className="bcta-chips">
            <li>30 minutes</li>
            <li>No obligation</li>
            <li>Fixed quote after the call</li>
          </ul>
        </div>
        <div className="bcta-actions">
          <Link className="btn o" href="/book-a-call">
            Book a strategy call <i>&#8599;</i>
          </Link>
          <a className="btn wa" href={whatsappHref(whatsappMessage(path, topic))} target="_blank" rel="noopener">
            WhatsApp us <i>&#8599;</i>
          </a>
          <Link className="bcta-link" href="/contact">
            Or send a project brief
          </Link>
        </div>
      </div>
    </section>
  );
}
