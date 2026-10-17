"use client";

import { LOGOS } from "@/data/siteContent";

export default function LogoTicker() {
  const doubleLogos = LOGOS.concat(LOGOS);

  return (
    <div className="stack" aria-label="Partner and Technology Logos">
      <span className="lbl">
        Trusted by teams who sell through conversation
      </span>
      <div className="mq">
        <div className="row" id="stack" aria-hidden="true">
          {doubleLogos.map((logo, index) => (
            <img
              key={`${logo}-${index}`}
              src={`/img/logos/${logo}`}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
