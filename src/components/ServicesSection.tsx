"use client";

import { useState } from "react";
import { SERVICES } from "@/data/siteContent";

export default function ServicesSection() {
  const [selectedId, setSelectedId] = useState(0);

  const buildServices = SERVICES.filter((s) => s.category === "build");
  const systemServices = SERVICES.filter((s) => s.category === "system");
  const currentService = SERVICES[selectedId] || SERVICES[0];

  const renderPvContent = (id: number) => {
    switch (id) {
      case 0:
        return (
          <>
            <div className="f o">
              <b>Application</b>3 of 5 questions answered
            </div>
            <div className="f">
              <b>Qualified</b>Budget, timeline and fit confirmed
            </div>
            <div className="f">
              <b>Book a call</b>Thu 14:30, 30 min
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="f o">
              <b>One offer. One action.</b>Headline, proof, CTA
            </div>
            <div className="bars">
              <s /><s /><s /><s /><s /><s /><s />
            </div>
            <div className="f">
              <b>Conversion</b>Single objective tracked
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="f o">
              <b>Video sales letter</b>Prospects educated before the ask
            </div>
            <div className="f">
              <b>Watch time</b>Tracked to the second
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="f">
              <b>Sales page</b>Offer stack
            </div>
            <div className="f o">
              <b>Checkout</b>Order bump, upsell, downsell
            </div>
            <div className="f">
              <b>Buyer</b>Follow-up sequence starts
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="f">
              <b>Cold traffic</b>Ad click
            </div>
            <div className="f o">
              <b>Bridge page</b>Pre-frame and trust
            </div>
            <div className="f">
              <b>Primary offer</b>Warm arrival
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="f o">
              <b>Application form</b>Information your sales team needs
            </div>
            <div className="f">
              <b>Filter</b>Better-fit prospects only
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div className="f">
              <b>Day 0</b>Welcome email
            </div>
            <div className="f o">
              <b>Day 1</b>SMS reminder
            </div>
            <div className="f">
              <b>Day 4</b>Reactivation
            </div>
          </>
        );
      case 7:
        return (
          <>
            <div className="f">
              <b>New lead</b>Stage 1
            </div>
            <div className="f o">
              <b>Action: booked</b>Moved to Stage 3
            </div>
            <div className="f">
              <b>Pipeline</b>Updated automatically
            </div>
          </>
        );
      case 8:
        return (
          <>
            <div className="f o">
              <b>Confirmed</b>Calendar invite sent
            </div>
            <div className="f">
              <b>Reminder</b>24h and 1h before
            </div>
            <div className="f">
              <b>No-show</b>Reschedule link sent
            </div>
          </>
        );
      case 9:
        return (
          <>
            <div className="chat">
              Hi, this is the assistant from Funnels That Print. Do you have two minutes?
            </div>
            <div className="chat me">Sure.</div>
            <div className="chat">
              What are you selling, and roughly what budget are you working with?
            </div>
            <div className="chat me">Coaching, about 5k.</div>
            <div className="chat">
              That fits. I can book you with the team on Thursday. Does 14:30 work?
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="sec box" id="services">
      <div className="head">
        <div>
          <div className="eyebrow mono">What we do</div>
          <h2 className="h2 d">
            Everything you need to turn traffic into{" "}
            <span className="it">customers.</span>
          </h2>
        </div>
        <p className="lead">
          Your funnel is more than a landing page. We build the complete
          conversion journey, from the first click to the booked appointment:
          strategy, funnel development, automation, qualification and follow-up.
        </p>
      </div>

      <div className="svc">
        <div>
          {/* Build Services */}
          <div className="grp">
            <div className="gt">
              <span className="big">Funnel &amp; page builds</span>
              <span className="mono">(service001) Six formats</span>
            </div>
            <div id="g1">
              {buildServices.map((svc) => (
                <div
                  key={svc.id}
                  className={`row ${selectedId === svc.id ? "on" : ""}`}
                  data-i={svc.id}
                  tabIndex={0}
                  onClick={() => setSelectedId(svc.id)}
                  onMouseEnter={() => setSelectedId(svc.id)}
                  onFocus={() => setSelectedId(svc.id)}
                >
                  <span className="n">
                    <b>{svc.badge}</b>
                    service
                  </span>
                  <div>
                    <h3>{svc.title}</h3>
                    <p>
                      <span>{svc.desc}</span>
                    </p>
                  </div>
                  <span className="ar">&#8599;</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Services */}
          <div className="grp">
            <div className="gt">
              <span className="big">Automation &amp; follow-up</span>
              <span className="mono">
                (service002) Turn every lead into a follow-up
              </span>
            </div>
            <div id="g2">
              {systemServices.map((svc) => (
                <div
                  key={svc.id}
                  className={`row ${selectedId === svc.id ? "on" : ""}`}
                  data-i={svc.id}
                  tabIndex={0}
                  onClick={() => setSelectedId(svc.id)}
                  onMouseEnter={() => setSelectedId(svc.id)}
                  onFocus={() => setSelectedId(svc.id)}
                >
                  <span className="n">
                    <b>{svc.badge}</b>
                    service
                  </span>
                  <div>
                    <h3>{svc.title}</h3>
                    <p>
                      <span>{svc.desc}</span>
                    </p>
                  </div>
                  <span className="ar">&#8599;</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Preview Card */}
        <aside
          className="prev"
          id="prev"
          data-c={selectedId % 4}
          aria-label="Service Visual Preview"
        >
          <div className="pt">
            <span id="pvt">{currentService.title}</span>
            <span>Live</span>
          </div>

          <div className="pb" id="pvb">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className={`pv ${selectedId === svc.id ? "on" : ""}`}
                data-k={svc.id}
              >
                <img
                  className="pimg"
                  src={`/img/svc/s${svc.id + 1}.webp`}
                  alt=""
                  loading="lazy"
                />
                {renderPvContent(svc.id)}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
