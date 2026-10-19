"use client";

import { useState, useRef } from "react";
import { VNAME, VDUR } from "@/data/siteContent";

const fmt = (t: number) =>
  `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

interface VideoTileProps {
  id: string;
  cls: string;
  activeId: string | null;
  onToggle: (id: string) => void;
}

function VideoTile({ id, cls, activeId, onToggle }: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const vprRef = useRef<HTMLElement>(null);
  const isPlaying = activeId === id;

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    const pr = vprRef.current;
    if (v && pr && v.duration) {
      pr.style.width = `${(v.currentTime / v.duration) * 100}%`;
    }
  };

  const handleEnded = () => {
    const pr = vprRef.current;
    if (pr) pr.style.width = "0%";
    onToggle(id);
  };

  return (
    <div
      className={`bt v ${cls} ${isPlaying ? "play" : ""}`}
      data-v={id}
      role="button"
      tabIndex={0}
      aria-label={`Play testimonial: ${VNAME[id]}`}
      onClick={() => onToggle(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(id);
        }
      }}
    >
      <img
        className="bg"
        src={`/img/vid/${id}.webp`}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <video
        ref={videoRef}
        src={`/img/vid/${id}.mp4`}
        poster={`/img/vid/${id}.webp`}
        preload="none"
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <span className="pb">
        <svg
          className="i1"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        <svg
          className="i2"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
        </svg>
      </span>
      <span className="cap">
        <span>{VNAME[id]}</span>
        <em>{fmt(VDUR[id] || 60)}</em>
      </span>
      <i className="vpr" ref={vprRef} />
    </div>
  );
}

export default function VideoTestimonials() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    // Stop all other video elements in the bento grid
    const allVideos = document.querySelectorAll<HTMLVideoElement>(
      "#bento .bt.v video"
    );

    if (activeId === id) {
      allVideos.forEach((v) => {
        v.pause();
      });
      setActiveId(null);
    } else {
      allVideos.forEach((v) => {
        const tile = v.closest(".bt.v");
        if (tile?.getAttribute("data-v") === id) {
          v.play().catch(() => {});
        } else {
          v.pause();
          v.currentTime = 0;
          const pr = tile?.querySelector<HTMLElement>(".vpr");
          if (pr) pr.style.width = "0%";
        }
      });
      setActiveId(id);
    }
  };

  return (
    <section className="sec" id="voices">
      <div className="box">
        <div className="head">
          <div>
            <div className="eyebrow mono">Testimonials</div>
            <h2 className="h2 d">
              Clients, in their <span className="it">own</span> words.
            </h2>
          </div>
          <p className="lead">
            Unedited clips from clients after launch. Tap any tile to play it with
            sound.
          </p>
        </div>

        <div className="bento" id="bento">
          <VideoTile
            id="portrait-1"
            cls="p1"
            activeId={activeId}
            onToggle={handleToggle}
          />
          <VideoTile
            id="landscape-1"
            cls="l1"
            activeId={activeId}
            onToggle={handleToggle}
          />

          <div className="bt s1">
            <span className="k">Coaching</span>
            <b>$115K</b>
            <p>revenue from a lead form plus WhatsApp follow-up, 7.5x ROAS</p>
            <em>253 booked calls</em>
          </div>

          <VideoTile
            id="portrait-2"
            cls="p2"
            activeId={activeId}
            onToggle={handleToggle}
          />

          <div className="bt s2">
            <span className="k">Legal / MVA</span>
            <b>19x</b>
            <p>ROAS on OTP-verified leads, $388K revenue in 30 days</p>
          </div>

          <VideoTile
            id="square-1"
            cls="sq"
            activeId={activeId}
            onToggle={handleToggle}
          />
          <VideoTile
            id="landscape-2"
            cls="l2"
            activeId={activeId}
            onToggle={handleToggle}
          />
          <VideoTile
            id="landscape-3"
            cls="l3"
            activeId={activeId}
            onToggle={handleToggle}
          />

          <a className="bt s3" href="#robo">
            <span className="k">Your turn</span>
            <b>Be the next clip.</b>
            <span className="go">
              Book a call <i>&#8599;</i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
