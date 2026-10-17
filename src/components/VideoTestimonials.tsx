"use client";

import { useState, useRef } from "react";
import { TESTIMONIAL_VIDEOS } from "@/data/siteContent";

export default function VideoTestimonials() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause all other videos
      Object.entries(videoRefs.current).forEach(([k, v]) => {
        if (k !== id && v) {
          v.pause();
        }
      });
      video.play().catch(() => {});
      setPlayingId(id);
    }
  };

  return (
    <section className="sec dark" id="voices">
      <div className="box">
        <div className="head">
          <div>
            <div className="eyebrow mono">Testimonials</div>
            <h2 className="h2 d">
              Clients, in their{" "}
              <span className="it" style={{ color: "var(--lime)" }}>
                own
              </span>{" "}
              words.
            </h2>
          </div>
          <p className="lead">
            Press play. Every clip is a client talking about the funnel and the
            follow-up we built for them.
          </p>
        </div>

        <div className="vids" id="vids">
          {TESTIMONIAL_VIDEOS.map((vid) => (
            <div
              key={vid.id}
              className={`vc ${vid.layoutClass} ${
                playingId === vid.id ? "playing" : ""
              }`}
              onClick={() => togglePlay(vid.id)}
              tabIndex={0}
              role="button"
              aria-label="Play testimonial"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  togglePlay(vid.id);
                }
              }}
            >
              <img
                className="bgp"
                src={`/img/vid/${vid.id}.webp`}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />

              <video
                ref={(el) => {
                  videoRefs.current[vid.id] = el;
                }}
                src={`/img/vid/${vid.id}.mp4`}
                poster={`/img/vid/${vid.id}.webp`}
                preload="none"
                playsInline
                onEnded={() => setPlayingId(null)}
              />

              <span className="pl">
                <i>&#9654;</i>
                <span>Client testimonial</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
