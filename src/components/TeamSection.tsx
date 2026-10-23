"use client";

import { useState } from "react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  image: string;
  alt: string;
  bio: string;
  skills: string[];
  highlight: {
    label: string;
    value: string;
  };
  email: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "gaurav",
    name: "Gaurav Kapoor",
    role: "Founder & Funnel Strategist",
    badge: "Strategy & Copy",
    image: "/img/team/gaurav.webp",
    alt: "Gaurav Kapoor, Founder & Funnel Strategist at Funnels That Print",
    bio: "Turns high-ticket offers into acquisition funnels that book qualified sales conversations on autopilot.",
    skills: ["Funnel Strategy", "Offer Positioning", "AC & VSL Funnels", "Conversion Copy"],
    highlight: {
      label: "Proven Impact",
      value: "$1.52M High-Ticket & $847K Launch Funnels",
    },
    email: "info@funnelsthatprint.com",
  },
  {
    id: "rahul",
    name: "Rahul Kapoor",
    role: "Co-founder & Automation Lead",
    badge: "Automation & Systems",
    image: "/img/team/rahul.webp",
    alt: "Rahul Kapoor, Co-founder & Automation Lead at Funnels That Print",
    bio: "Builds the automated infrastructure behind the pages to keep every lead verified, warm, and converting 24/7.",
    skills: ["CRM & GHL", "Email & SMS Workflows", "Pipeline Architecture", "AI Calling Agents"],
    highlight: {
      label: "System Built",
      value: "Mortgage AI & Automated Nurture Engine",
    },
    email: "info@funnelsthatprint.com",
  },
  {
    id: "ali",
    name: "Ali",
    role: "Lead UI/UX & Funnel Designer",
    badge: "Design & UX",
    image: "/img/team/ali.webp",
    alt: "Ali, Lead UI/UX & Funnel Designer at Funnels That Print",
    bio: "Crafts high-converting, visually magnetic landing pages and sales interfaces that command premium trust.",
    skills: ["Conversion UI/UX", "Visual Storytelling", "Design Systems", "Motion & Interaction"],
    highlight: {
      label: "Design Focus",
      value: "High-Ticket VSLs & E-Com Brand Funnels",
    },
    email: "info@funnelsthatprint.com",
  },
  {
    id: "taqi",
    name: "Taqi",
    role: "Senior Full-Stack Engineer",
    badge: "Tech & Systems",
    image: "/img/team/taqi.webp",
    alt: "Taqi, Senior Full-Stack Engineer at Funnels That Print",
    bio: "Engineers high-speed web infrastructure, tracking pixel APIs, and custom conversion technology.",
    skills: ["Full-Stack Architecture", "Next.js & Performance", "Custom API Integrations", "Tracking & Webhooks"],
    highlight: {
      label: "Tech Stack",
      value: "Sub-Second Funnel Engines & Integrations",
    },
    email: "info@funnelsthatprint.com",
  },
];

export default function TeamSection() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="sec box" id="team">
      <div className="thd">
        <span className="tlab">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--or)"
            strokeWidth="1.6"
          >
            <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
          </svg>
          Our team
        </span>
        <h2 className="h2 d">
          The people behind
          <br />
          <span className="g">your next funnel.</span>
        </h2>
        <a className="tmore" href="#robo">
          Work with us{" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path d="M12 4v16M4 12h16" />
          </svg>
        </a>
      </div>

      <div className="team-grid" id="tdeck">
        {TEAM_MEMBERS.map((member) => {
          const isFlipped = !!flippedCards[member.id];

          return (
            <div
              key={member.id}
              className={`team-card ${isFlipped ? "flipped" : ""}`}
              tabIndex={0}
              role="button"
              aria-label={`${member.name}, ${member.role}. Click or hover to flip for bio`}
              onClick={() => toggleFlip(member.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFlip(member.id);
                }
              }}
            >
              <div className="team-card-inner">
                {/* Front Face */}
                <div className="team-card-front">
                  <div className="team-card-img-wrap">
                    <img
                      src={member.image}
                      alt={member.alt}
                      loading="lazy"
                    />
                    <span className="team-card-badge">{member.badge}</span>
                    <span className="team-card-flip-btn" title="Hover to view bio">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="23 4 23 10 17 10" />
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                      </svg>
                    </span>
                  </div>

                  <div className="team-card-front-info">
                    <span className="team-card-front-name">{member.name}</span>
                    <span className="team-card-front-role">{member.role}</span>
                  </div>
                </div>

                {/* Back Face (3D Flipped) */}
                <div className="team-card-back">
                  <div className="team-card-back-header">
                    <span className="team-card-back-name">{member.name}</span>
                    <span className="team-card-back-role">{member.role}</span>
                  </div>

                  <p className="team-card-back-bio">{member.bio}</p>

                  <div className="team-card-back-skills">
                    {member.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <div className="team-card-back-highlight">
                    <b>{member.highlight.label}</b>
                    <span>{member.highlight.value}</span>
                  </div>

                  <div className="team-card-back-actions">
                    <a
                      className="team-btn-primary"
                      href="#robo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book a call
                    </a>
                    <a
                      className="team-btn-secondary"
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
