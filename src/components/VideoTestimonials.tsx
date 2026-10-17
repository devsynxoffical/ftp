"use client";

import { useState, useRef } from "react";
import Image from "next/image";
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
      video.play().catch(() => {
        // Handle autoplay policy gracefully
      });
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

        <div className="vids">
          {TESTIMONIAL_VIDEOS.map((vid) => (
            <div
              key={vid.id}
              className={`vc ${vid.layoutClass} ${
                playingId === vid.id ? "playing" : ""
              }`}
              onClick={() => togglePlay(vid.id)}
              tabIndex={0}
              role="button"
              aria-label={`Play testimonial video ${vid.id}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  togglePlay(vid.id);
                }
              }}
            >
              <Image
                className="bgp"
                src={`/img/vid/${vid.id}.webp`}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                aria-hidden="true"
                style={{ objectFit: "cover" }}
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
                <span>{vid.label}</span>
              </span>
            </div>
          ))}

          {/* Testimonials Accent Tile */}
          <div className="vtile">
            <b>56+</b>
            <span>Verified campaigns</span>
            <p>
              Direct accounts from founders and media buyers who scale with our
              systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
