"use client";

const CBG = ["#d6ccff", "#c8f54a", "#ffbfe0", "#bfe3ff", "#ffd3c2", "#efece4"];

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your offer, ideal customer, traffic source, sales process and conversion goal.",
    img: "/img/svc/s1.webp",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "We determine what your prospect needs to see, understand and believe before taking the next step.",
    img: "/img/svc/s8.webp",
  },
  {
    num: "03",
    title: "Build",
    desc: "Our team develops the pages, funnel flow, copy, forms and conversion elements.",
    img: "/img/svc/s2.webp",
  },
  {
    num: "04",
    title: "Connect",
    desc: "We integrate your CRM, calendar, email, SMS, workflows, tracking and AI calling where required.",
    img: "/img/svc/s7.webp",
  },
  {
    num: "05",
    title: "Test",
    desc: "We test the complete journey so pages, forms, integrations, notifications and automations work as intended.",
    img: "/img/svc/s9.webp",
  },
  {
    num: "06",
    title: "Launch",
    desc: "Your funnel goes live and is ready to receive traffic.",
    img: "/img/svc/s5.webp",
  },
];

export default function ProcessSection() {
  const scrollToStep = (index: number) => {
    const pw = document.getElementById("procwrap");
    if (pw && window.innerWidth > 980) {
      const top = pw.getBoundingClientRect().top + window.scrollY;
      const totalScrollable = pw.offsetHeight - window.innerHeight;
      const targetY = top + (index / (STEPS.length - 1)) * totalScrollable;

      const globalLenis = (window as unknown as { lenis?: { scrollTo: (y: number, opts: object) => void } }).lenis;
      if (globalLenis) {
        globalLenis.scrollTo(targetY, { duration: 1.2 });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  };

  return (
    <div id="procwrap">
      <section className="proc" id="process">
        <div className="box">
          <div>
            <div className="eyebrow mono">How we do it</div>
            <h2 className="h2 d">
              We build around <span className="it">your</span> sales process.
            </h2>
          </div>
          <p className="lead" style={{ maxWidth: "34ch" }}>
            Every business has a different offer, audience and buying journey,
            so we never force yours into a pre-built funnel.
          </p>
        </div>

        <div className="track" id="track">
          {STEPS.map((step, i) => (
            <article
              key={step.num}
              className={`card ${i === 0 ? "on" : ""}`}
              style={{ "--cbg": CBG[i] } as React.CSSProperties}
              onClick={() => scrollToStep(i)}
            >
              <div className="ph">
                <img
                  className="bg"
                  src={step.img}
                  alt=""
                  loading="lazy"
                />
                <span className="num">{step.num}</span>
              </div>
              <div className="ct">
                <div className="mono">
                  <b>Step {step.num}</b>
                  <span>/ 06</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="prog" id="prog">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={i === 0 ? "on" : ""}
              onClick={() => scrollToStep(i)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  scrollToStep(i);
                }
              }}
            >
              {step.num} {step.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
