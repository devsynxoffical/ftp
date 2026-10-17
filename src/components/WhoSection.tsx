"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WHO_ITEMS } from "@/data/siteContent";

export default function WhoSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentItem = WHO_ITEMS[selectedIndex];

  return (
    <section className="sec box" id="who">
      <div className="head">
        <div>
          <div className="eyebrow mono">Who we work with</div>
          <h2 className="h2 d">
            Built for businesses that sell through{" "}
            <span className="it">conversation.</span>
          </h2>
        </div>
        <p className="lead">
          Our funnels are for businesses where generating the right sales
          conversation matters more than cheap clicks or cheap leads.
        </p>
      </div>

      <div className="who">
        <div className="sect">
          {WHO_ITEMS.map((item, index) => (
            <button
              key={item.num}
              type="button"
              className={selectedIndex === index ? "on" : ""}
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => setSelectedIndex(index)}
              aria-pressed={selectedIndex === index}
            >
              <span className="n">{item.num}</span>
              <h3>{item.title}</h3>
              <em>{item.tag}</em>
            </button>
          ))}
        </div>

        {/* Dynamic Audience Detail Card */}
        <aside className="wcard" aria-live="polite">
          <Image
            className="wimg"
            src="/img/gen/who.webp"
            alt="Audience profile illustration"
            fill
            sizes="(max-width: 980px) 100vw, 480px"
            style={{ objectFit: "cover" }}
          />
          <div className="top">
            <span className="mono">{currentItem.num}</span>
            <span className="mono">Fit Matrix</span>
          </div>

          <p>{currentItem.desc}</p>

          <Link
            className="btn g"
            href="/#cta"
            style={{ alignSelf: "flex-start" }}
          >
            Map my funnel <i>&#8599;</i>
          </Link>
        </aside>
      </div>
    </section>
  );
}
