"use client";

import { useState } from "react";
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
        <div className="sect" id="sect">
          {WHO_ITEMS.map((item, index) => (
            <a
              key={item.num}
              href="#robo"
              data-i={index}
              className={selectedIndex === index ? "on" : ""}
              onClick={(e) => {
                e.preventDefault();
                setSelectedIndex(index);
                const robo = document.getElementById("robo");
                if (robo) robo.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={() => setSelectedIndex(index)}
              onFocus={() => setSelectedIndex(index)}
            >
              <span className="n">{item.num}</span>
              <h3>{item.title}</h3>
              <em>{item.tag}</em>
            </a>
          ))}
        </div>

        <aside className="wcard">
          <img
            className="wimg"
            src="/img/gen/who.webp"
            alt=""
            loading="lazy"
          />
          <div className="top">
            <span className="mono" id="wn">
              {currentItem.num}
            </span>
            <span className="mono">Fit</span>
          </div>
          <p id="wp">{currentItem.desc}</p>
          <a className="btn g" href="#robo" style={{ alignSelf: "flex-start" }}>
            Map my funnel <i>&#8599;</i>
          </a>
        </aside>
      </div>
    </section>
  );
}
