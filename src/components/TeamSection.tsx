"use client";

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
          A small team that handles strategy, build, automation and follow-up
          end to end.
        </p>
      </div>

      <div className="team">
        <figure
          className="tm"
          style={{ "--t": "-6deg" } as React.CSSProperties}
        >
          <img src="/img/team/gaurav.webp" alt="Gaurav Kapoor" />
          <figcaption>
            <b>Gaurav Kapoor</b>
            <span>Founder</span>
          </figcaption>
        </figure>

        <figure
          className="tm"
          style={{ "--t": "3deg" } as React.CSSProperties}
        >
          <img src="/img/team/rahul.webp" alt="Rahul Kapoor" />
          <figcaption>
            <b>Rahul Kapoor</b>
            <span>Co-founder</span>
          </figcaption>
        </figure>

        <div
          className="tm more"
          style={{ "--t": "-2deg" } as React.CSSProperties}
        >
          <span className="mono" style={{ color: "#3a4a10" }}>
            Plus
          </span>
          <p>
            Copywriters, designers and automation builders brought in per
            project.
          </p>
          <a className="btn" href="#cta">
            Work with us <i>&#8599;</i>
          </a>
        </div>
      </div>
    </section>
  );
}
