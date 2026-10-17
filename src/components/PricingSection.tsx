"use client";

import { useState } from "react";
import Link from "next/link";

interface PlanFeature {
  title: string;
  desc: string;
}

interface Plan {
  name: string;
  price: string;
  dotX: string;
  dotY: string;
  features: PlanFeature[];
}

const PLANS: Plan[] = [
  {
    name: "Core Plan",
    price: "$4,900",
    dotX: "84%",
    dotY: "78%",
    features: [
      {
        title: "First funnel in 7 days",
        desc: "Strategy, copy, design and build of one funnel, live inside a week.",
      },
      {
        title: "Single project queue",
        desc: "One funnel at a time with focused attention on your offer.",
      },
      {
        title: "Three design iterations",
        desc: "Three rounds of refinements on pages and flow.",
      },
      {
        title: "Dedicated funnel builder",
        desc: "One senior builder assigned to your account.",
      },
      {
        title: "Standard automations",
        desc: "Email, SMS and calendar workflows connected to your CRM.",
      },
    ],
  },
  {
    name: "Pro Plan",
    price: "$9,800",
    dotX: "62%",
    dotY: "34%",
    features: [
      {
        title: "First funnel in 5 days",
        desc: "Immediate kickoff with accelerated delivery.",
      },
      {
        title: "Priority project queue",
        desc: "Your work moves first, parallel pages when needed.",
      },
      {
        title: "Unlimited iterations",
        desc: "Refinements until the funnel converts the way it should.",
      },
      {
        title: "Full conversion team",
        desc: "Strategist, copywriter, designer and automation builder.",
      },
      {
        title: "AI calling agent included",
        desc: "Leads qualified, answered and booked by the agent, 24/7.",
      },
    ],
  },
];

export default function PricingSection() {
  const [planIdx, setPlanIdx] = useState(0);
  const activePlan = PLANS[planIdx];

  return (
    <section className="sec box" id="pricing">
      <div className="pr2">
        <div className="pimg">
          <div className="bx">
            <img
              src="/img/x/core.webp"
              alt="Core plan"
              className={planIdx === 0 ? "on" : ""}
            />
            <img
              src="/img/x/pro.webp"
              alt="Pro plan"
              loading="lazy"
              className={planIdx === 1 ? "on" : ""}
            />
          </div>
          <div>
            <span className="pk">Funnels That Print</span>
            <b id="pname">{activePlan.name}</b>
          </div>
          <small>
            <i>*</i> Pause or cancel whenever you wish.
          </small>
        </div>

        <div className="pmid">
          <div className="ptog2" role="group" aria-label="Plan">
            <button
              type="button"
              aria-pressed={planIdx === 0}
              onClick={() => setPlanIdx(0)}
            >
              Core Plan <i>&#9671;</i>
            </button>
            <button
              type="button"
              aria-pressed={planIdx === 1}
              onClick={() => setPlanIdx(1)}
            >
              Pro Plan <i>&#9889;</i>
            </button>
          </div>

          <h2 className="pt2">
            Simple pricing, powerful features, no hidden fees
            <span
              className="pdot"
              id="pdot"
              style={
                {
                  "--dx": activePlan.dotX,
                  "--dy": activePlan.dotY,
                } as React.CSSProperties
              }
            />
          </h2>

          <div className="pprice">
            <b id="pp">{activePlan.price}</b>
            <span>/month</span>
          </div>

          <p className="pnote">
            <i>*</i> Minimal booking period, 2 months.
          </p>

          <p className="pcall">
            Schedule a brief call if you need further clarification.
          </p>

          <div className="pacts">
            <a href="#cta">select plan</a>
            <a href="#cta">quick call</a>
          </div>
        </div>

        <ul className="pfeat" id="pf">
          {activePlan.features.map((feat, k) => (
            <li
              key={feat.title}
              style={{ "--i": k } as React.CSSProperties}
            >
              <i>&#10003;</i>
              <div>
                <b>{feat.title}</b>
                <p>{feat.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
