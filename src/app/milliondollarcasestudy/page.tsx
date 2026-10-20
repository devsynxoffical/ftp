"use client";

import { useState } from "react";
import Link from "next/link";

export default function Case1MPage() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="box">
      <section className="kc">
        <Link className="kback in" href="/">
          &larr; Back to home
        </Link>

        <div className="k1h in">
          <span className="tag">
            Case study 01 &middot; High-ticket scaling &amp; consulting
          </span>
          <div className="big">
            <span>$1.52M</span>
          </div>
          <h1>
            From inconsistent cold traffic to $1.52M in 19 months, on a turnkey
            Million Dollar Funnel&trade; stack.
          </h1>
        </div>

        <div className="k1m in">
          <div>
            <span>Gross revenue generated</span>
            <b>$1,520,000</b>
          </div>
          <div>
            <span>Scaling timeline</span>
            <b>
              <em style={{ fontStyle: "normal" }}>19</em> months
            </b>
          </div>
          <div>
            <span>Niche</span>
            <b className="sm">High-ticket scaling &amp; consulting</b>
          </div>
          <div>
            <span>System architecture</span>
            <b className="sm">Turnkey Million Dollar Funnel&trade; stack</b>
          </div>
        </div>

        <div className="vid k1v in">
          {!playing ? (
            <div
              className="po"
              role="button"
              tabIndex={0}
              onClick={() => setPlaying(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setPlaying(true);
              }}
              aria-label="Play case study video"
            >
              <img
                src="https://i.ytimg.com/vi/X-L8GQjHOYA/maxresdefault.jpg"
                alt="Case study breakdown video preview"
                loading="lazy"
              />
              <span className="pb">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="vl">Watch the breakdown</span>
            </div>
          ) : (
            <iframe
              src="https://www.youtube-nocookie.com/embed/X-L8GQjHOYA?autoplay=1&rel=0&modestbranding=1"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              title="Case study video"
            />
          )}
        </div>

        <div className="k1b">
          <div className="prob in">
            <span className="lbl">The problem, before MDF&trade;</span>
            <h2>A strong offer leaking on cold traffic.</h2>
            <p>
              The client had a strong offer but suffered from inconsistent
              conversions on cold traffic, attribution leaks, and manual follow-up
              that let qualified leads slip away.
            </p>
            <div className="x">
              <span>Inconsistent cold-traffic conversions</span>
              <span>Attribution leaks</span>
              <span>Manual follow-up losing qualified leads</span>
            </div>
          </div>

          <div className="in">
            <span className="lbl">The solution, what we did</span>
            <h2>An institutional-grade acquisition system.</h2>
            <ol className="tl">
              <li>
                <b>VSL and acquisition funnel</b>
                <p>
                  Engineered an institutional-grade VSL and acquisition funnel
                  architecture.
                </p>
              </li>
              <li>
                <b>Attribution and CAPI</b>
                <p>
                  Built full-stack attribution pipelines and Meta Conversion API
                  (CAPI) tracking.
                </p>
              </li>
              <li>
                <b>Multi-touch follow-up</b>
                <p>
                  Integrated automated multi-touch follow-up systems across email
                  and SMS.
                </p>
              </li>
              <li>
                <b>Qualification filters</b>
                <p>
                  Added dynamic qualification filters to screen and prep high-ticket
                  appointments before calls.
                </p>
              </li>
              <li className="win">
                <b>$1,520,000 in 19 months</b>
                <p>Scaled the business to $1.52M over 19 months on autopilot.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="kcta in">
          <h2>Want the same stack behind your offer?</h2>
          <Link className="btn" href="/contact">
            Book a strategy call <i>&#8599;</i>
          </Link>
        </div>

        <Link className="knext in" href="/scalelowticket">
          <div>
            <span>Next case study</span>
            <b>$847K Coaching LTO at 3.32x ROAS</b>
          </div>
          <i>&#8599;</i>
        </Link>
      </section>
    </div>
  );
}
