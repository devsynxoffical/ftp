"use client";

import Image from "next/image";
import confetti from "canvas-confetti";

export default function CtaSection() {
  const handleCtaClick = () => {
    // Fire celebratory conversion confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#ff5a1f", "#c8f54a", "#ffffff", "#d6ccff"],
    });
  };

  return (
    <section className="cta" id="cta">
      <div className="bg">
        <Image
          src="/img/gen/cta.webp"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          style={{ objectFit: "cover" }}
        />
      </div>

      <h2 className="big">
        <span>Ready to build</span>
        <span className="it">a funnel</span>
        <span>that prints?</span>
      </h2>

      <p className="lead">
        Tell us what you are selling, who you are selling it to and where your
        traffic is coming from. We will map out the conversion path your
        business needs.
      </p>

      <a
        className="btn"
        href="mailto:info@funnelsthatprint.com?subject=Build%20My%20Funnel%20Project%20Inquiry"
        onClick={handleCtaClick}
        style={{ height: 58, padding: "0 32px", fontSize: 16 }}
      >
        <span>Build my funnel</span>
        <i>&#8599;</i>
      </a>
    </section>
  );
}
