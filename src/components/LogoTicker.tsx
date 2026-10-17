"use client";

import Image from "next/image";
import { LOGOS } from "@/data/siteContent";

export default function LogoTicker() {
  return (
    <div className="stack" aria-label="Partner and Technology Logos">
      <span className="lbl">
        Trusted by teams who sell through conversation
      </span>
      <div className="mq">
        <div className="row-marquee" aria-hidden="true">
          {LOGOS.concat(LOGOS).map((logo, index) => (
            <div key={`${logo}-${index}`} style={{ display: "inline-block" }}>
              <Image
                src={`/img/logos/${logo}`}
                alt="Partner logo"
                width={120}
                height={34}
                style={{
                  height: 34,
                  width: "auto",
                  maxWidth: 140,
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
