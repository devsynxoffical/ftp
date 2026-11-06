import { whatsappHref, whatsappMessage } from "@/lib/whatsapp";

/** Google Calendar appointment schedule for strategy calls. */
export const BOOKING_EMBED =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Yw3LMRWWBOizNlobvc58M8NBhLjWzfrHnj0FS0Rfegx_vV9Z6V3D7j0OlJbFwUSKGDg90xGBN?gv=true";
export const BOOKING_LINK = "https://calendar.app.google/fLvA5ecUYM6L4LW68";

/**
 * "Book a strategy call" section with the live Google Calendar booking page.
 * Anchor #book so hero buttons can jump straight to it.
 */
export default function BookingSection({
  path = "/",
  topic = "",
  title,
  variant = "section",
}: {
  path?: string;
  topic?: string;
  title?: React.ReactNode;
  /** "page": calendar first with a short side panel (used on /book-a-call). */
  variant?: "section" | "page";
}) {
  const wa = whatsappHref(whatsappMessage(path, topic));
  const calendar = (
    <div className="bk-cal">
      <iframe
        src={BOOKING_EMBED}
        title="Book a strategy call with Funnels That Print"
        loading={variant === "page" ? "eager" : "lazy"}
        width="100%"
        height="640"
        style={{ border: 0 }}
      />
    </div>
  );
  if (variant === "page") {
    return (
      <section className="box bk bk-page" id="book" aria-labelledby="bk-h">
        <div className="bk-grid">
          {calendar}
          <aside className="bk-side">
            <h2 id="bk-h">Choose a time</h2>
            <ul className="bk-list">
              <li>Review of your funnel, follow-up and tracking</li>
              <li>The fastest win for your cost per booked call</li>
              <li>A fixed quote and timeline, no obligation</li>
            </ul>
            <div className="bk-alt">
              <a className="btn wa" href={wa} target="_blank" rel="noopener">
                Prefer WhatsApp? Message us <i>&#8599;</i>
              </a>
              <a className="bk-link" href={BOOKING_LINK} target="_blank" rel="noopener">
                Calendar not loading? Open it in a new tab
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
  return (
    <section className="sec box bk" id="book" aria-labelledby="bk-h">
      <div className="bk-grid">
        <div className="bk-copy">
          <div className="eyebrow mono">Book a call</div>
          <h2 id="bk-h" className="h2 d">
            {title ?? (
              <>
                Pick a time that <span className="it">works.</span>
              </>
            )}
          </h2>
          <p className="lead">
            A free 30-minute strategy call with Gaurav or Rahul. We look at your offer, your current funnel and your numbers, and
            tell you what we would build first.
          </p>
          <ul className="bk-list">
            <li>Review of your funnel, follow-up and tracking</li>
            <li>The fastest win for your cost per booked call</li>
            <li>A fixed quote and timeline, no obligation</li>
          </ul>
          <div className="bk-alt">
            <a className="btn wa" href={wa} target="_blank" rel="noopener">
              Prefer WhatsApp? Message us <i>&#8599;</i>
            </a>
            <a className="bk-link" href={BOOKING_LINK} target="_blank" rel="noopener">
              Open the booking page in a new tab
            </a>
          </div>
        </div>
        <div className="bk-cal">
          <iframe
            src={BOOKING_EMBED}
            title="Book a strategy call with Funnels That Print"
            loading="lazy"
            width="100%"
            height="640"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
