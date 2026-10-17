"use client";

import { useState } from "react";
import Link from "next/link";
import { PRICING_PLANS } from "@/data/siteContent";

export default function PricingSection() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const currentPlan = PRICING_PLANS[selectedPlanIndex];

  return (
    <section className="sec box" id="pricing">
      <div className="head">
        <div>
          <div className="eyebrow mono">Pricing</div>
          <h2 className="h2 d">
            Simple scopes, <span className="it">no hidden fees.</span>
          </h2>
        </div>
        <p className="lead">
          Two ways to work with us. Every build is quoted on scope, so pick the
          shape that fits and we will send the number after a short call.
        </p>
      </div>

      <div className="pr">
        {/* Artistic Branding Column */}
        <div className="pbox art">
          <div className="cube">FTP</div>
          <span className="mono">
            Funnels That Print: Core and Full System
          </span>
        </div>

        {/* Dynamic Plan Switcher Column */}
        <div className="pbox">
          <div className="ptog" role="group" aria-label="Select Plan Scope">
            <button
              type="button"
              className={selectedPlanIndex === 0 ? "on" : ""}
              onClick={() => setSelectedPlanIndex(0)}
              aria-pressed={selectedPlanIndex === 0}
            >
              Core build
            </button>
            <button
              type="button"
              className={selectedPlanIndex === 1 ? "on" : ""}
              onClick={() => setSelectedPlanIndex(1)}
              aria-pressed={selectedPlanIndex === 1}
            >
              Full system
            </button>
          </div>

          <h3>{currentPlan.title}</h3>

          <div className="price">
            <span>{currentPlan.price}</span>
            <small>per project</small>
          </div>

          <p className="lead" style={{ fontSize: 14 }}>
            {currentPlan.desc}
          </p>

          <Link className="btn o" href="/#cta">
            Request a quote <i>&#8599;</i>
          </Link>
        </div>

        {/* Scope Features Column */}
        <div className="pbox">
          <span className="mono">What&apos;s included in this tier</span>
          <ul className="feat">
            {currentPlan.features.map((feat) => (
              <li key={feat.title}>
                <div>
                  <b>{feat.title}</b>
                  <span>{feat.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
