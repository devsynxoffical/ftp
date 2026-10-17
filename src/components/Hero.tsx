"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HERO_WORDS } from "@/data/siteContent";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentWord = HERO_WORDS[wordIndex];
    const typingSpeed = isDeleting ? 45 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  // Subtle interactive mouse parallax for desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 980) return;
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth - 0.5;
    const y = clientY / window.innerHeight - 0.5;
    setMousePos({ x, y });
  };

  const getParallaxStyle = (multiplier: number, rotateDeg: number) => {
    const translateX = mousePos.x * multiplier;
    const translateY = mousePos.y * multiplier * 0.7;
    return {
      transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotateDeg}deg)`,
      transition: "transform 0.25s cubic-bezier(0.2, 0.7, 0.2, 1)",
    };
  };

  return (
    <header
      className="hero"
      id="top"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <span className="blob a" />
      <span className="blob b" />
      <span className="blob c" />

      <div className="box">
        <span className="tag rise">
          Funnels, Automation, Follow-up, AI Calling
        </span>

        <h1 className="h1 d rise" style={{ "--rd": "0.1s" } as React.CSSProperties}>
          We build funnels that print{" "}
          <span className="type">
            {text}
          </span>
        </h1>

        <p
          className="lead rise"
          style={{ "--rd": "0.2s" } as React.CSSProperties}
        >
          Turn your traffic into qualified sales calls with a high-converting
          funnel built around your offer, audience and sales process.
        </p>

        <div
          className="hcta rise"
          style={{ "--rd": "0.3s" } as React.CSSProperties}
        >
          <Link className="btn o" href="/#cta">
            Build my funnel <i>&#8599;</i>
          </Link>
          <Link className="btn g" href="/#services">
            See what we build
          </Link>
        </div>

        <div
          className="hstats rise"
          style={{ "--rd": "0.4s" } as React.CSSProperties}
        >
          <div>
            <b>5 to 10</b>
            <span>day builds</span>
          </div>
          <div>
            <b>6</b>
            <span>funnel types</span>
          </div>
          <div>
            <b>24/7</b>
            <span>AI follow-up</span>
          </div>
          <div>
            <b>56</b>
            <span>published case studies</span>
          </div>
        </div>

        {/* Interactive Floating Stage with Live UI Cards */}
        <div className="stage" id="stage">
          <div
            className="ui chat"
            style={{
              left: "2%",
              top: "4%",
              ...getParallaxStyle(22, -4),
            }}
          >
            <span>
              My funnel gets clicks but almost no calls. Can you fix the whole
              journey, not just the page?
            </span>
            <span className="me">
              Yes. Pages, qualification, CRM, follow-up and AI calling, built as
              one system.
            </span>
          </div>

          <div
            className="ui shot"
            style={{
              left: "28%",
              top: "0%",
              ...getParallaxStyle(-14, -2),
            }}
          >
            <Image
              src="/img/cs/DKNahy6TPwg.webp"
              alt="Client result screenshot"
              width={340}
              height={220}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div
            className="ui"
            style={{
              left: "24%",
              top: "62%",
              ...getParallaxStyle(30, 3),
            }}
          >
            <b>Booked call</b>
            <span className="num">02:16</span>
            <span>Thu, 14:30, reminder sent</span>
          </div>

          <div
            className="ui shot"
            style={{
              right: "4%",
              top: "8%",
              ...getParallaxStyle(-26, 4),
            }}
          >
            <Image
              src="/img/cs/DLidtnUTjXL.webp"
              alt="Client result screenshot"
              width={340}
              height={220}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div
            className="ui pill2"
            style={{
              right: "26%",
              top: "70%",
              ...getParallaxStyle(18, -2),
            }}
          >
            <i />
            <b style={{ display: "inline" }}>AI agent</b> qualified the lead in 3
            questions
          </div>

          <div
            className="ui"
            style={{
              right: "2%",
              top: "68%",
              ...getParallaxStyle(-20, 5),
            }}
          >
            <b>Qualified leads</b>
            <span className="num">1,079</span>
            <span>at $18.94 each</span>
          </div>
        </div>
      </div>
    </header>
  );
}
