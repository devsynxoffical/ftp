"use client";

import { useEffect, useRef } from "react";

/**
 * Case study video player. Honours ?t=<seconds> so the SeekToAction in the
 * page's VideoObject markup works: Google can link a searcher straight to a
 * moment in the video, and that link must start playback there.
 */
export default function CaseVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = Number(new URLSearchParams(window.location.search).get("t"));
    const el = ref.current;
    if (!el || !Number.isFinite(t) || t <= 0) return;
    const seek = () => {
      el.currentTime = Math.min(t, el.duration || t);
      el.scrollIntoView({ block: "center" });
    };
    el.preload = "metadata";
    if (el.readyState >= 1) seek();
    else el.addEventListener("loadedmetadata", seek, { once: true });
    return () => el.removeEventListener("loadedmetadata", seek);
  }, []);

  return <video ref={ref} src={src} poster={poster} controls playsInline preload="none" aria-label={label} />;
}
