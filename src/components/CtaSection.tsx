"use client";

import confetti from "canvas-confetti";

export default function CtaSection() {
  const handleCtaClick = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#ff5a1f", "#c8f54a", "#ffffff", "#d6ccff"],
    });
  };

  return (
    <section className="cta" id="cta">
      <div className="box">
        <div className="big">
          Ready to print <span className="it">calls?</span>
        </div>
        <p className="lead">
          Tell us about your offer, your traffic and what you are selling. We&apos;ll
          map the right funnel for your business and give you a realistic
          timeline and quote.
        </p>
        <a
          className="btn"
          href="mailto:info@funnelsthatprint.com"
          onClick={handleCtaClick}
        >
          Start your funnel <i>&#8599;</i>
        </a>
      </div>
    </section>
  );
}
