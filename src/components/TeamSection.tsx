"use client";

import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="sec box" id="team">
      <div className="head">
        <div>
          <div className="eyebrow mono">The team</div>
          <h2 className="h2 d">
            The people behind your <span className="it">next funnel.</span>
          </h2>
        </div>
        <p className="lead">
          A small, specialized team that handles strategy, build, automation and
          follow-up end to end.
        </p>
      </div>

      <div className="team">
        <figure className="tm" style={{ "--t": "-6deg" } as React.CSSProperties}>
          <Image
            src="/img/team/gaurav.webp"
            alt="Gaurav Kapoor - Founder"
            width={300}
            height={380}
            style={{ width: "100%", height: "78%", objectFit: "cover" }}
          />
          <figcaption>
            <b>Gaurav Kapoor</b>
            <span>Founder &amp; Acquisition Strategist</span>
          </figcaption>
        </figure>

        <figure className="tm" style={{ "--t": "3deg" } as React.CSSProperties}>
          <Image
            src="/img/team/rahul.webp"
            alt="Rahul Kapoor - Co-founder"
            width={300}
            height={380}
            style={{ width: "100%", height: "78%", objectFit: "cover" }}
          />
          <figcaption>
            <b>Rahul Kapoor</b>
            <span>Co-founder &amp; Systems Architect</span>
          </figcaption>
        </figure>

        <div className="tm more" style={{ "--t": "-2deg" } as React.CSSProperties}>
          <span className="mono" style={{ color: "#3a4a10" }}>
            Network &amp; Scale
          </span>
          <p>
            Specialized copywriters, UX designers and CRM automation engineers
            brought in per project.
          </p>
          <Link className="btn" href="/#cta" style={{ background: "#111", color: "#fff" }}>
            Work with us <i>&#8599;</i>
          </Link>
        </div>
      </div>
    </section>
  );
}
