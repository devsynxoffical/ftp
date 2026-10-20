"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Case847KPage() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="box">
      <section className="kc">
        <Link className="kback in" href="/">
          &larr; Back to home
        </Link>

        <div className="k2h">
          <div className="in">
            <span className="tag">
              Case study 02 &middot; Coaching &amp; info-product backend
            </span>
            <h1>
              <em>$847,307</em> collected from a low-ticket front door.
            </h1>
            <p>
              A coaching client stuck in high-ticket hype, with no front end to
              pay for its ads. We rebuilt the offer, fixed the tracking and turned
              the funnel into a self-liquidating buyer machine.
            </p>
            <div className="hb">
              <Link className="btn o" href="/contact">
                Build my LTO funnel <i>&#8599;</i>
              </Link>
              <a
                className="btn"
                href="#k2m"
                style={{
                  background: "#fff",
                  color: "var(--fg)",
                  border: "1px solid var(--line2)",
                }}
              >
                See the numbers
              </a>
            </div>
          </div>
        </div>

        <div className="vid k2v in">
          <video
            ref={videoRef}
            src="https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/695da2543a532d67105ad96c.mp4#t=0.5"
            preload="metadata"
            playsInline
            controls={playing}
          />
          {!playing && (
            <div
              className="po"
              role="button"
              tabIndex={0}
              onClick={handlePlay}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handlePlay();
              }}
              aria-label="Play case study video"
              style={{ background: "transparent" }}
            >
              <span className="pb">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="vl">Watch the client</span>
            </div>
          )}
        </div>

        <div className="k2g in" id="k2m">
          <div className="g1">
            <span>Revenue collected</span>
            <div className="spark">
              <s style={{ "--i": 0, "--h": "18%" } as React.CSSProperties} />
              <s style={{ "--i": 1, "--h": "24%" } as React.CSSProperties} />
              <s style={{ "--i": 2, "--h": "22%" } as React.CSSProperties} />
              <s style={{ "--i": 3, "--h": "31%" } as React.CSSProperties} />
              <s style={{ "--i": 4, "--h": "36%" } as React.CSSProperties} />
              <s style={{ "--i": 5, "--h": "34%" } as React.CSSProperties} />
              <s style={{ "--i": 6, "--h": "45%" } as React.CSSProperties} />
              <s style={{ "--i": 7, "--h": "52%" } as React.CSSProperties} />
              <s style={{ "--i": 8, "--h": "49%" } as React.CSSProperties} />
              <s style={{ "--i": 9, "--h": "61%" } as React.CSSProperties} />
              <s style={{ "--i": 10, "--h": "68%" } as React.CSSProperties} />
              <s style={{ "--i": 11, "--h": "74%" } as React.CSSProperties} />
              <s style={{ "--i": 12, "--h": "82%" } as React.CSSProperties} />
              <s style={{ "--i": 13, "--h": "100%" } as React.CSSProperties} />
            </div>
            <b>$847,307</b>
          </div>

          <div className="g2">
            <span>Ad spend vs cash collected</span>
            <div className="bars">
              <div>
                Ad spend
                <i>
                  <s style={{ "--w": "30.1%" } as React.CSSProperties} />
                </i>
                <em>$255,130</em>
              </div>
              <div>
                Collected
                <i>
                  <s style={{ "--w": "100%" } as React.CSSProperties} />
                </i>
                <em>$847,307</em>
              </div>
            </div>
          </div>

          <div className="g3">
            <span>Verified ROAS</span>
            <b>
              <em style={{ fontStyle: "normal" }}>3.32</em>x
            </b>
          </div>

          <div className="g4">
            <span>Niche</span>
            <b>Coaching &amp; info-product backend</b>
          </div>

          <div className="g5">
            <div>
              <span>LTO sales through the front door</span>
              <b>13,630</b>
            </div>
            <p>
              buyers feeding an endless qualified pipeline for high-ticket
              ascension programs
            </p>
          </div>
        </div>

        <div className="k2ba">
          <div className="bf in">
            <span className="lbl">Before MDF&trade;</span>
            <h2>High-ticket hype, no profitable front end.</h2>
            <p>
              The client was stuck in &quot;high-ticket hype&quot; without a
              profitable front end to self-liquidate advertising costs. The funnel
              could not sell the low-ticket offer consistently, burning ad spend
              with zero compounding momentum.
            </p>
          </div>
          <div className="af in">
            <span className="lbl">What we did</span>
            <h2>A front door that pays for itself.</h2>
            <ul>
              <li>Rebuilt the offer architecture and sales flow from the ground up.</li>
              <li>Fixed missing tracking pixels, CAPI and lead leakage.</li>
              <li>Turned $255,130 in ad spend into $847,307 collected cash at 3.32x ROAS.</li>
              <li>
                Generated 13,630 buyers through the front door, an endless
                qualified pipeline for high-ticket ascension programs.
              </li>
            </ul>
          </div>
        </div>

        <div className="kcta in" style={{ background: "#141414" }}>
          <h2>
            Make your front end <span style={{ color: "var(--lime)" }}>pay for itself.</span>
          </h2>
          <Link className="btn" href="/contact">
            Book a strategy call <i>&#8599;</i>
          </Link>
        </div>

        <Link className="knext in" href="/case-1m">
          <div>
            <span>Previous case study</span>
            <b>$1.52M High-ticket scaling in 19 months</b>
          </div>
          <i>&#8599;</i>
        </Link>
      </section>
    </div>
  );
}
