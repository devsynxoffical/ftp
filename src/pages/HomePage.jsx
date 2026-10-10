import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  PhoneCall, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Layers,
  Eye
} from "lucide-react";
import Footer from "../components/Footer";
import GlobalBottomSections from "../components/GlobalBottomSections";
import "../styles/home-finora.css";

export default function HomePage() {
  const [activeAcc, setActiveAcc] = useState(0);
  const [activeFan, setActiveFan] = useState(1);
  const [activePay, setActivePay] = useState(0);
  const [activePost, setActivePost] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);
  const [proofCategory, setProofCategory] = useState("ALL");
  const [lightboxProof, setLightboxProof] = useState(null);

  const stageRef = useRef(null);
  const statWrapRef = useRef(null);
  const runnerRef = useRef(null);
  const payWrapRef = useRef(null);
  const teWrapRef = useRef(null);
  const sayRef = useRef(null);
  const saypRef = useRef(null);
  const arcRef = useRef(null);
  const finRef = useRef(null);

  // Client Logos
  const clientLogos = [
    "/images/client-logo/logo-01.png",
    "/images/client-logo/logo-02.png",
    "/images/client-logo/logo-03.png",
    "/images/client-logo/logo-04.png",
    "/images/client-logo/logo-05.png",
    "/images/client-logo/logo-06.png",
    "/images/client-logo/logo-07.png",
    "/images/client-logo/logo-08.png",
    "/images/client-logo/logo-10.png",
    "/images/client-logo/logo-11.png",
    "/images/client-logo/logo-12.png",
    "/images/client-logo/logo-13.png",
    "/images/client-logo/logo-15.png",
    "/images/client-logo/logo-16.png",
    "/images/client-logo/logo-17.png",
    "/images/client-logo/logo-18.png",
    "/images/client-logo/logo-19.png",
    "/images/client-logo/logo-20.png",
    "/images/client-logo/logo-21.png",
    "/images/client-logo/logo-22.png",
  ];

  // Accordion Items for Automation Section
  const accItems = [
    {
      title: "Email & SMS Workflows",
      desc: "Automated multi-channel sequences for instant lead response, nurturing, reminders, and reactivation.",
      icon: "⚡",
    },
    {
      title: "CRM Pipeline Automation",
      desc: "Move leads automatically through stages based on form submissions, video watch duration, and engagement.",
      icon: "❖",
    },
    {
      title: "Appointment Workflows",
      desc: "Frictionless calendar booking, automated SMS reminders, and intelligent no-show recovery flows.",
      icon: "📅",
    },
    {
      title: "AI Voice Calling Agents",
      desc: "24/7 AI agents that engage new leads in under 60 seconds, ask qualifying questions, and book calls directly.",
      icon: "🤖",
    },
  ];

  // Digital Conversion Stepper Items
  const payItems = [
    {
      title: "High-Converting Funnel Pages",
      desc: "Fast-loading, mobile-optimized landing pages engineered for maximum opt-in and appointment conversion.",
    },
    {
      title: "Automated Lead Qualification",
      desc: "Dynamic multi-step questionnaires that filter out tire-kickers and prioritize high-value prospects.",
    },
    {
      title: "AI Speed-to-Lead Follow-Up",
      desc: "Automated voice and SMS outreach triggered within seconds of lead submission to ensure 80%+ show-up rates.",
    },
  ];

  // Blog Posts with User Images
  const blogPosts = [
    {
      tag: "Funnel Strategy",
      date: "Jan 18, 2026",
      title: "Why VSL Funnels Outperform Standard Landing Pages in 2026",
      badges: ["Conversion", "VSL Strategy"],
      class: "p1",
      img: "/assets/bento_vsl_funnels.jpg",
    },
    {
      tag: "AI Automation",
      date: "Jan 24, 2026",
      title: "How AI Voice Calling Agents Book 40% More Calls from Cold Traffic",
      badges: ["AI Calling", "Speed-to-Lead"],
      class: "p2",
      img: "/Aicalingagent.png",
    },
    {
      tag: "Offer Architecture",
      date: "Feb 02, 2026",
      title: "The 3 Irresistible Offer Stacks That Scale High-Ticket B2B",
      badges: ["Offer Stacking", "B2B"],
      class: "p3",
      img: "/assets/bento_high_ticket_funnels.jpg",
    },
    {
      tag: "Follow-Up Systems",
      date: "Feb 10, 2026",
      title: "The 7-Day Multi-Channel Lead Reactivation Blueprint",
      badges: ["SMS & Email", "Retention"],
      class: "p4",
      img: "/assets/Automated Workflow Glass Dashboard.png",
    },
  ];

  // FAQs
  const faqItems = [
    {
      q: "How fast can my funnel be built and launched?",
      a: "Our standard turnaround is 14 business days from kickoff to final launch. This includes full copy, custom design, CRM integration, calendar setup, automation workflows, and tracking pixels.",
    },
    {
      q: "Do you write all the copy and script the videos?",
      a: "Yes. Our team writes all sales copy, VSL scripts, headlines, email/SMS sequences, and qualifying form questions based on deep audience and offer research.",
    },
    {
      q: "What CRM and software platforms do you work with?",
      a: "We work seamlessly with GoHighLevel, HubSpot, Zapier, Stripe, Calendly, ActiveCampaign, Make, Meta Ads, Google Ads, and all major advertising and CRM platforms.",
    },
    {
      q: "What makes Funnels That Print different from standard agencies?",
      a: "We don't just give you a Figma design or a cookie-cutter template. We engineer a full-stack conversion machine: high-converting pages, battle-tested copy, automated follow-ups, and AI calling agents built to scale revenue.",
    },
    {
      q: "Can you integrate 24/7 AI voice calling into my existing CRM?",
      a: "Absolutely. We set up autonomous AI voice agents that call new leads within 60 seconds, qualify their budget and timeline, and book appointments directly into your calendar.",
    },
  ];

  // Testimonial Cards
  const testimonials = [
    {
      tag: "Verified Client",
      quote: "Before FTP, we were losing half our leads to slow follow-up. Their funnel and AI speed-to-lead system doubled our booked call rate within 10 days.",
      author: "Marcus Vance",
      role: "Founder, ScaleOps B2B",
      class: "tc k",
      x: -455,
      y: -235,
      r: -4,
    },
    {
      tag: "Agency Owner",
      quote: "The VSL funnel they built converted cold traffic at 8.4% on a $5k offer. Best ROI we've ever had on agency infrastructure.",
      author: "David Chen",
      role: "Managing Director, HyperGrowth",
      class: "tc b",
      x: 440,
      y: -250,
      r: 5,
    },
    {
      tag: "E-Commerce",
      quote: "The low-ticket bridge funnel generated $42k in front-end revenue while acquiring customers at a negative CAC.",
      author: "Elena Rostova",
      role: "CMO, NovaSkin Global",
      class: "tc m",
      x: -530,
      y: 40,
      r: -6,
    },
    {
      tag: "Consulting",
      quote: "Automated SMS and AI voice follow-ups boosted our show-up rates from 55% to 88%. Absolute game changer.",
      author: "Sarah Jenkins",
      role: "Partner, Apex Advisory",
      class: "tc wh",
      x: -300,
      y: 285,
      r: 3,
    },
    {
      tag: "High-Ticket SaaS",
      quote: "Flawless execution from strategy to copy and CRM automations. We scaled from $40k/mo to $120k/mo in under 90 days.",
      author: "Alex Tremblay",
      role: "Co-Founder, PipelineAI",
      class: "tc l",
      x: 470,
      y: 150,
      r: -3,
    },
  ];

  // Integrations List with Authentic Brand SVGs
  const integrations = [
    {
      name: "GoHighLevel",
      color: "#2E69FF",
      icon: (
        <svg viewBox="0 0 40 40" width="60%" height="60%" fill="none">
          <path d="M20 6L9 13.5v13L20 34l11-7.5v-13L20 6z" fill="#2E69FF" />
          <path d="M20 11.5l6.5 4.5v8L20 28.5l-6.5-4.5v-8L20 11.5z" fill="#FFFFFF" />
          <path d="M17 19.5l2.5 2.5 4.5-4.5" stroke="#2E69FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Stripe",
      color: "#635BFF",
      icon: (
        <svg viewBox="0 0 40 40" width="60%" height="60%" fill="none">
          <path d="M17.5 14.8c0-1.4 1.2-2.1 3.2-2.1 2.8 0 5.6.9 7.3 2.1l1.4-4.2C27.2 9.5 24 8.7 20.7 8.7c-6.1 0-10.2 3.2-10.2 8.7 0 8.5 11.7 7.1 11.7 10.8 0 1.7-1.5 2.3-3.7 2.3-3.2 0-6.7-1.3-8.8-2.7l-1.4 4.3c2.3 1.5 6.1 2.5 10.2 2.5 6.3 0 10.7-3.1 10.7-8.8 0-9.2-11.7-7.7-11.7-11z" fill="#635BFF" />
        </svg>
      ),
    },
    {
      name: "HubSpot",
      color: "#FF7A59",
      icon: (
        <svg viewBox="0 0 40 40" width="62%" height="62%" fill="none">
          <path d="M27.5 17.2V13.8c1.3-.7 2.2-2 2.2-3.6 0-2.3-1.8-4.2-4.2-4.2s-4.2 1.8-4.2 4.2c0 1.6.9 3 2.2 3.6v3.4c-1.6.3-3 .9-4.3 1.9L13.2 15c.2-.5.3-1 .3-1.5 0-2.3-1.8-4.2-4.2-4.2S5.1 11.1 5.1 13.5s1.8 4.2 4.2 4.2c.8 0 1.6-.2 2.2-.6l6.1 4.1c-.5 1.1-.8 2.3-.8 3.6 0 1.4.4 2.7 1 3.8l-3.2 3.2c-.4-.2-.8-.3-1.3-.3-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3c0-.5-.1-.9-.3-1.3l3.2-3.2c1.2.7 2.6 1.1 4.1 1.1 4.6 0 8.3-3.7 8.3-8.3 0-3.2-1.8-5.9-4.5-7.2zm-2 13.6c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z" fill="#FF7A59" />
        </svg>
      ),
    },
    {
      name: "Zapier",
      color: "#FF4F00",
      icon: (
        <svg viewBox="0 0 40 40" width="60%" height="60%" fill="none">
          <path d="M18 7h4v10h-4z" fill="#FF4F00" />
          <path d="M18 23h4v10h-4z" fill="#FF4F00" />
          <path d="M7 18h10v4H7z" fill="#FF4F00" />
          <path d="M23 18h10v4H23z" fill="#FF4F00" />
          <path d="M10.5 14.5l7 7-2.8 2.8-7-7z" fill="#FF4F00" />
          <path d="M25.3 22.3l7 7-2.8 2.8-7-7z" fill="#FF4F00" />
          <path d="M22.5 11.7l7 7-2.8 2.8-7-7z" fill="#FF4F00" />
          <path d="M14.7 25.3l7 7-2.8 2.8-7-7z" fill="#FF4F00" />
        </svg>
      ),
    },
    {
      name: "Calendly",
      color: "#006BFF",
      icon: (
        <svg viewBox="0 0 40 40" width="60%" height="60%" fill="none">
          <path d="M28.5 7h-1v2.5a1.5 1.5 0 01-3 0V7h-9v2.5a1.5 1.5 0 01-3 0V7h-1C9 7 7 9 7 11.5v17C7 31 9 33 11.5 33h17c2.5 0 4.5-2 4.5-4.5v-17C33 9 31 7 28.5 7zm1.5 21.5c0 .8-.7 1.5-1.5 1.5h-17c-.8 0-1.5-.7-1.5-1.5V16h20v12.5zm0-15.5H10v-1.5c0-.8.7-1.5 1.5-1.5h1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5h9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5h1c.8 0 1.5.7 1.5 1.5V13z" fill="#006BFF" />
          <circle cx="20" cy="23" r="3.5" fill="#006BFF" />
        </svg>
      ),
    },
    {
      name: "ActiveCampaign",
      color: "#356AE6",
      icon: (
        <svg viewBox="0 0 40 40" width="62%" height="62%" fill="none">
          <path d="M8 20L19 9v7.5l-6.5 6.5L19 29.5V37L8 26v-6z" fill="#356AE6" />
          <path d="M21 9l11 11v6l-11 11v-7.5l6.5-6.5L21 16.5V9z" fill="#004CFF" />
        </svg>
      ),
    },
    {
      name: "Make",
      color: "#6D28D9",
      icon: (
        <svg viewBox="0 0 40 40" width="62%" height="62%" fill="none">
          <path d="M7 26.5L14.5 13l7.5 13.5H7z" fill="#6D28D9" />
          <path d="M18 26.5L25.5 13 33 26.5H18z" fill="#A855F7" />
          <circle cx="20" cy="18" r="3" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Meta",
      color: "#0081FB",
      icon: (
        <svg viewBox="0 0 40 40" width="64%" height="64%" fill="none">
          <path d="M20 22.8c-2.3 3.6-4.7 6.2-7.5 6.2-4.6 0-7.5-4.2-7.5-9 0-5.3 3.6-9 8.1-9 3.2 0 5.4 1.8 6.9 4.2 1.5-2.4 3.7-4.2 6.9-4.2 4.5 0 8.1 3.7 8.1 9 0 4.8-2.9 9-7.5 9-2.8 0-5.2-2.6-7.5-6.2zm0-4.6c1.8-3.1 3.6-4.8 5.6-4.8 2.6 0 4.7 2.4 4.7 5.6 0 3.1-1.7 5.6-4.3 5.6-2.2 0-4.2-2.5-6-6.4zm-4.7-4.8c2 0 3.8 1.7 5.6 4.8-1.8 3.9-3.8 6.4-6 6.4-2.6 0-4.3-2.5-4.3-5.6 0-3.2 2.1-5.6 4.7-5.6z" fill="#0081FB" />
        </svg>
      ),
    },
    {
      name: "Google",
      color: "#4285F4",
      icon: (
        <svg viewBox="0 0 40 40" width="60%" height="60%" fill="none">
          <path d="M31.6 20.3c0-.8-.1-1.6-.2-2.3H20v4.4h6.5c-.3 1.5-1.2 2.8-2.5 3.7v3.1h4c2.4-2.2 3.6-5.4 3.6-8.9z" fill="#4285F4" />
          <path d="M20 32c3.2 0 6-1.1 8-3l-4-3.1c-1.1.7-2.5 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H9.3v3.2C11.3 29.4 15.4 32 20 32z" fill="#34A853" />
          <path d="M13.4 22.2c-.2-.7-.4-1.5-.4-2.2 0-.8.2-1.5.4-2.2v-3.2H9.3c-.8 1.7-1.3 3.5-1.3 5.4s.5 3.7 1.3 5.4l4.1-3.2z" fill="#FBBC05" />
          <path d="M20 12.9c1.8 0 3.3.6 4.6 1.8l3.4-3.4C25.9 9.4 23.2 8.5 20 8.5c-4.6 0-8.7 2.6-10.7 6.6l4.1 3.2c.9-2.8 3.5-5.4 6.6-5.4z" fill="#EA4335" />
        </svg>
      ),
    },
    {
      name: "OpenAI",
      color: "#10A37F",
      icon: (
        <svg viewBox="0 0 40 40" width="62%" height="62%" fill="none">
          <path d="M31.8 17.5a6.5 6.5 0 00-.6-5.4 6.7 6.7 0 00-6.8-3.2 6.6 6.6 0 00-5-2.2 6.7 6.7 0 00-6.4 4.7 6.6 6.6 0 00-4.4 3.2 6.6 6.6 0 00.8 7.5 6.5 6.5 0 00.6 5.4 6.7 6.7 0 006.8 3.2 6.6 6.6 0 005 2.2 6.7 6.7 0 006.4-4.7 6.6 6.6 0 004.4-3.2 6.6 6.6 0 00-.8-7.5zm-11.8 11a4.9 4.9 0 01-3.2-1.2l.2-.1 5.3-3.1a.9.9 0 00.4-.8v-7.3l2.2 1.3a.1.1 0 01.1.1v6.3a4.9 4.9 0 01-5 4.8zm-9.3-5.2a4.9 4.9 0 01-.6-3.4l.2.1 5.3 3.1a.9.9 0 00.9 0l6.3-3.6v2.5a.1.1 0 01-.1.1l-5.5 3.2a4.9 4.9 0 01-6.5-2zm-1.8-9.8a4.9 4.9 0 012.6-2.2v6.3a.9.9 0 00.4.8l6.3 3.6-2.2 1.3a.1.1 0 01-.1 0l-5.5-3.2a4.9 4.9 0 01-1.5-6.6zm17.4 3.2l-6.3-3.6 2.2-1.3a.1.1 0 01.1 0l5.5 3.2a4.9 4.9 0 01-.8 8.8v-6.3a.9.9 0 00-.7-.8zm3.2-3.4l-.2-.1-5.3-3.1a.9.9 0 00-.9 0l-6.3 3.6v-2.5a.1.1 0 01.1-.1l5.5-3.2a4.9 4.9 0 017.1 5.4zm-11.4 5.3l-2.8-1.6 2.8-1.6 2.8 1.6-2.8 1.6z" fill="#10A37F" />
        </svg>
      ),
    },
    {
      name: "Slack",
      color: "#E01E5A",
      icon: (
        <svg viewBox="0 0 40 40" width="60%" height="60%" fill="none">
          <path d="M12.5 24a2.5 2.5 0 11-2.5-2.5h2.5V24zm1.3 0a2.5 2.5 0 115 0v6.3a2.5 2.5 0 11-5 0V24z" fill="#E01E5A" />
          <path d="M16.3 12.5a2.5 2.5 0 112.5-2.5v2.5h-2.5zm0 1.3a2.5 2.5 0 110 5H10a2.5 2.5 0 110-5h6.3z" fill="#36C5F0" />
          <path d="M27.5 16.3a2.5 2.5 0 112.5 2.5H27.5v-2.5zm-1.3 0a2.5 2.5 0 11-5 0V10a2.5 2.5 0 115 0v6.3z" fill="#2EB67D" />
          <path d="M23.8 27.5a2.5 2.5 0 11-2.5 2.5v-2.5h2.5zm0-1.3a2.5 2.5 0 110-5H30a2.5 2.5 0 110 5h-6.2z" fill="#ECB22E" />
        </svg>
      ),
    },
  ];

  // Featured Work Proof Items for Home Page (59+ Real Builds)
  const homeProofs = [
    {
      id: 1,
      title: "High-Ticket B2B Lead Acquisition Architecture",
      category: "HIGH-TICKET",
      image: "/workprof/wp-001.webp",
      metric: "84% Qualification Ratio",
    },
    {
      id: 2,
      title: "8-Figure Automated VSL Video Funnel Engine",
      category: "VSL",
      image: "/workprof/wp-002.webp",
      metric: "+$180k/mo Revenue Lift",
    },
    {
      id: 3,
      title: "High-Converting Low-Ticket Bridge & Upsell Engine",
      category: "LOW-TICKET",
      image: "/workprof/wp-003.webp",
      metric: "Zero CAC Acquisition",
    },
    {
      id: 4,
      title: "24/7 AI Voice Calling Agent & Live CRM Sync",
      category: "AI CALLING",
      image: "/workprof/wp-004.webp",
      metric: "<60s Speed-to-Lead",
    },
    {
      id: 5,
      title: "Enterprise Consulting Application & Calendar System",
      category: "HIGH-TICKET",
      image: "/workprof/wp-005.webp",
      metric: "4.8x ROAS On Ad Spend",
    },
    {
      id: 6,
      title: "VSL Drop-Off Recovery & Multi-Channel Pipeline",
      category: "VSL",
      image: "/workprof/wp-006.webp",
      metric: "91% Show-Up Rate",
    },
  ];

  const proofCategories = ["ALL", "HIGH-TICKET", "VSL", "LOW-TICKET", "AI CALLING"];
  const filteredHomeProofs = proofCategory === "ALL"
    ? homeProofs
    : homeProofs.filter((item) => item.category === proofCategory);

  // 6 Bespoke Tailored Funnel Cards
  const bespokeCards = [
    {
      id: 0,
      title: "High-Ticket Application Funnels",
      shortTitle: "Application Funnels",
      desc: "Designed for agencies, coaches, and consultancies wanting pre-qualified, sales-ready appointments.",
      icon: "↗",
      img: "/assets/feature_funnel_build.jpg",
      tag: "01 / APPLICATION",
    },
    {
      id: 1,
      title: "VSL Video Presentation Engines",
      shortTitle: "VSL Engines",
      desc: "High-converting video sales funnels that educate, build massive trust, and sell before the sales call.",
      icon: "⚡",
      img: "/assets/bento_vsl_funnels.jpg",
      tag: "02 / VSL ENGINE",
    },
    {
      id: 2,
      title: "AI Inbound & Outbound Calling Agents",
      shortTitle: "AI Voice Agents",
      desc: "Autonomous voice pipelines that dial leads in seconds, answer objections, and schedule consultations 24/7.",
      icon: "🤖",
      img: "/assets/feature_ai_voice_growth.jpg",
      tag: "03 / AI VOICE",
    },
    {
      id: 3,
      title: "Custom Conversion Landing Pages",
      shortTitle: "Landing Pages",
      desc: "Sleek, lightning-fast landing page designs engineered to maximize opt-in, click-through, and booking rates.",
      icon: "🎯",
      img: "/assets/bento_landing_pages.jpg",
      tag: "04 / LANDING PAGES",
    },
    {
      id: 4,
      title: "Automated CRM & Pipeline Systems",
      shortTitle: "CRM Automation",
      desc: "Multi-channel sequences, lead scoring, and instant notification pipelines ensuring zero prospect fallout.",
      icon: "⚙️",
      img: "/assets/feature_automation_crm.jpg",
      tag: "05 / CRM SYSTEMS",
    },
    {
      id: 5,
      title: "Low-Ticket & Scale Bridge Funnels",
      shortTitle: "Bridge Funnels",
      desc: "Self-liquidating acquisition engines and order-bump architectures that acquire paid customers at negative CAC.",
      icon: "📈",
      img: "/assets/bento_low_ticket_bridge.jpg",
      tag: "06 / SCALE BRIDGE",
    },
  ];

  const getFanPosition = (index) => {
    const total = bespokeCards.length;
    const prevIndex = (activeFan - 1 + total) % total;
    const nextIndex = (activeFan + 1) % total;

    if (index === activeFan) return "0";
    if (index === nextIndex) return "1";
    if (index === prevIndex) return "-1";
    return "hidden";
  };

  const handlePrevFan = () => {
    setActiveFan((prev) => (prev === 0 ? bespokeCards.length - 1 : prev - 1));
  };

  const handleNextFan = () => {
    setActiveFan((prev) => (prev === bespokeCards.length - 1 ? 0 : prev + 1));
  };

  // Scrub Statement Words & Chips Data
  const scrubWords = [
    { type: "w", text: "From" },
    { type: "w", text: "cold" },
    { type: "w", text: "traffic" },
    { type: "chip", text: "Every Lead", className: "chip" },
    { type: "w", text: "to" },
    { type: "w", text: "qualified" },
    { type: "w", text: "booked" },
    { type: "w", text: "calls" },
    { type: "chip", text: "Follow-Up", className: "chip" },
    { type: "w", text: "our" },
    { type: "w", text: "platform" },
    { type: "w", text: "connects" },
    { type: "w", text: "every" },
    { type: "w", text: "tool" },
    { type: "w", text: "you" },
    { type: "w", text: "need" },
    { type: "w", text: "to" },
    { type: "w", text: "turn" },
    { type: "w", text: "every" },
    { type: "w", text: "visitor" },
    { type: "w", text: "into" },
    { type: "w", text: "high-value" },
    { type: "w", text: "clients" },
    { type: "chip", text: "Booked Calls", className: "chip k" },
    { type: "w", text: "with" },
    { type: "w", text: "automated" },
    { type: "w", text: "CRM" },
    { type: "w", text: "workflows" },
    { type: "w", text: "and" },
    { type: "w", text: "AI." },
  ];

  // Scroll and Interactive Animation Engine
  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesk = window.matchMedia("(min-width: 901px)").matches;

    let mx = 0;
    let my = 0;
    let ticking = false;

    const handleMouseMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      ticking = false;
      const y = window.scrollY;
      if (stageRef.current && y < 800) {
        const chips = stageRef.current.querySelectorAll("[data-m]");
        chips.forEach((el) => {
          const m = Number(el.getAttribute("data-m")) || 0;
          el.style.transform = `translate3d(${mx * m}px, ${my * m * 0.6 - y * m * 0.012}px, 0)`;
        });
      }
    };

    const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));

    const handleScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // 1. Pinned Stats Runner & Cards
      if (statWrapRef.current) {
        const r = statWrapRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const p = clamp(-r.top / (statWrapRef.current.offsetHeight - vh));
          if (runnerRef.current) {
            runnerRef.current.style.transform = `translate3d(${vw * 0.25 - p * (runnerRef.current.offsetWidth - vw * 0.75)}px, 0, 0)`;
          }
          const cards = statWrapRef.current.querySelectorAll(".scard");
          cards.forEach((c, i) => {
            const s = clamp((p - (0.12 + i * 0.26)) / 0.22);
            const e = 1 - Math.pow(1 - s, 3);
            const later = Array.from(cards)
              .slice(i + 1)
              .reduce((acc, _, k) => acc + clamp((p - (0.12 + (i + 1 + k) * 0.26)) / 0.22), 0);
            c.style.transform = `translate3d(0, ${(1 - e) * 118 - later * 9}%, 0) rotate(${-5 + e * 2 + later * -2}deg) scale(${1 - later * 0.06})`;
            c.style.opacity = s > 0 ? "1" : "0";
          });
        }
      }

      // 2. Pinned Stepper
      if (payWrapRef.current) {
        const r = payWrapRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const step = Math.min(2, Math.floor(clamp(-r.top / (payWrapRef.current.offsetHeight - vh)) * 3));
          setActivePay(step);
        }
      }

      // 3. Testimonials 3D Stage
      if (teWrapRef.current && isDesk) {
        const r = teWrapRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const p = clamp(-r.top / (teWrapRef.current.offsetHeight - vh));
          const e = p * p * (3 - 2 * p);
          const tein = teWrapRef.current.querySelector(".in");
          if (tein) {
            tein.style.opacity = String(clamp((p - 0.2) / 0.45));
            tein.style.transform = `scale(${0.9 + 0.1 * e})`;
          }
          const cards = teWrapRef.current.querySelectorAll(".tc");
          cards.forEach((c) => {
            const x = Number(c.getAttribute("data-x")) || 0;
            const yy = Number(c.getAttribute("data-y")) || 0;
            const rr = Number(c.getAttribute("data-r")) || 0;
            const k = 0.16 + 0.84 * e;
            c.style.transform = `translate(calc(-50% + ${x * k * (vw / 1440)}px), calc(-50% + ${yy * k * (vh / 900)}px)) rotate(${rr * (2.2 - 1.2 * e)}deg)`;
          });
        }
      }

      // 4. Scrub Statement Words & Floating 3D Shapes
      if (saypRef.current) {
        const r = saypRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > -200) {
          const items = saypRef.current.querySelectorAll(".w, .chip");
          const progress = clamp((vh * 0.85 - r.top) / (vh * 0.45 + r.height));
          const n = Math.round(progress * items.length);
          items.forEach((item, i) => {
            item.classList.toggle("on", i < n);
          });
        }
      }

      if (sayRef.current) {
        const r = sayRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const flItems = sayRef.current.querySelectorAll(".fl");
          flItems.forEach((f) => {
            const sp = Number(f.getAttribute("data-sp")) || 0.5;
            const baseScale = Number(f.getAttribute("data-scale")) || 1;
            f.style.transform = `translate3d(0, ${(r.top - vh * 0.3) * sp * 0.5}px, 0) rotate(${r.top * sp * 0.08}deg) scale(${baseScale})`;
          });
        }
      }

      // 5. Integrations Arc
      if (arcRef.current) {
        const r = arcRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const spread = clamp((vh - r.top) / (vh * 0.8)) * Math.min(34, vw * 0.022);
          const appIcons = arcRef.current.querySelectorAll(".apps i");
          const m = (appIcons.length - 1) / 2;
          appIcons.forEach((a, i) => {
            const d = i - m;
            const ad = Math.abs(d);
            a.style.transform = `translate(${d * spread}px, ${ad * ad * 2.6}px) rotate(${d * 5}deg) scale(${1 - ad * 0.1})`;
            a.style.zIndex = String(20 - Math.round(ad));
            a.style.marginInline = `${-ad * 3}px`;
          });
        }
      }

      // 6. Final CTA Kinetic Parallax Words Sliding
      if (finRef.current) {
        const r = finRef.current.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          const k = (r.top + r.height / 2 - vh / 2) / vh;
          const finWords = finRef.current.querySelectorAll(".d");
          finWords.forEach((d) => {
            const dx = Number(d.getAttribute("data-dx")) || 0;
            d.style.transform = `translate3d(${k * dx * (vw / 1440) * 2.2}px, 0, 0)`;
          });
        }
      }
    };

    // Reveal Intersection Observer
    const sel = ".kick, .h2, .sheet .lead, .feat .lead, #faq .lead, .bc, .pane, .mid h3, .eyebrow, .fan, .arc, .plans, .tog, .post, .faq, .more, .stores, .fcard";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          entry.target.classList.add("in");
          setTimeout(() => entry.target.classList.remove("sr", "in"), 1900);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document.querySelectorAll(sel).forEach((el) => {
      if (el.closest("#tewrap")) return;
      el.classList.add("sr");
      observer.observe(el);
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-finora">
      {/* ==================== HERO SECTION (FINORA IDENTICAL) ==================== */}
      <header className="hero" id="top">
        <span className="blob a"></span>
        <span className="blob b"></span>
        <span className="blob c"></span>

        <div className="box">
          <div className="stage" id="stage" ref={stageRef}>
            <div className="glass g1" data-m="26">
              Client Pipeline
              <b>$184,500</b>
            </div>
            <div className="phone" data-m="-10">
              <em>Scale Your Offer</em>
            </div>
            <div className="glass g2" data-m="-34">
              Revenue Scaled
              <b>$10M+</b>
            </div>
            <div className="glass g3" data-m="18">
              <span>
                <b style={{ fontSize: "15px" }}>$48.20K</b>
                / mo Avg Lift
              </span>
              <u>Scale</u>
            </div>
          </div>

          <h1 className="d h1 rise">
            <span>FUNNELS THAT PRINT</span>
            <span>HIGH TICKET CONVERSIONS</span>
          </h1>

          <p className="lead rise" style={{ animationDelay: "0.12s" }}>
            We architect, write, design, and automate high-converting sales funnels, VSL video presentation engines, and 24/7 AI voice calling systems built to scale high-ticket agencies, coaches, and SaaS.
          </p>

          <div className="cta rise" style={{ animationDelay: "0.2s" }}>
            <Link className="btn v" to="/contact">
              <span>Build My Funnel</span>
            </Link>
            <Link className="btn" to="/workproof">
              <span>View Work Proof (59+)</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ==================== SCROLLING CLIENT LOGO STRIP ==================== */}
      <div className="strip" aria-hidden="true">
        <div className="strip-inner">
          {clientLogos.concat(clientLogos).map((src, i) => (
            <img key={i} src={src} alt="Client Logo" />
          ))}
        </div>
      </div>

      {/* ==================== MAIN SHEET: WHAT WE BUILD ==================== */}
      <main className="sheet" id="benefits">
        <section className="sec box center">
          <div className="kick">
            <b>01</b>
            <span>WHAT WE BUILD</span>
          </div>
          <h2 className="d h2">EVERYTHING YOU NEED TO TURN TRAFFIC INTO CUSTOMERS.</h2>
          <p className="lead" style={{ marginTop: "20px" }}>
            Your funnel is more than a landing page. We build the complete conversion journey — combining strategy, copy, UI design, automations, qualification, and speed-to-lead follow-up.
          </p>

          {/* Bento Grid with Real User Images */}
          <div className="ben">
            {/* Bento Card 1 */}
            <div className="bc">
              <img
                src="/assets/bento_high_ticket_funnels.jpg"
                alt="High-Ticket Funnels"
                className="bc-img-bg"
              />
              <div className="bc-overlay"></div>
              <div className="bc-content">
                <span className="bc-pill">01 · High-Ticket</span>
                <div className="bc-bottom">
                  <b>High-Ticket Funnels</b>
                  <p>Lead qualification ratio 84%</p>
                </div>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bc">
              <img
                src="/assets/bento_landing_pages.jpg"
                alt="Landing Pages"
                className="bc-img-bg"
              />
              <div className="bc-overlay"></div>
              <div className="bc-content">
                <span className="bc-pill">02 · Landing Pages</span>
                <div className="bc-bottom">
                  <b>Landing Pages & VSL Funnels</b>
                  <p>+340% video watch duration</p>
                </div>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bc">
              <img
                src="/assets/bento_vsl_funnels.jpg"
                alt="VSL Funnels"
                className="bc-img-bg"
              />
              <div className="bc-overlay"></div>
              <div className="bc-content">
                <span className="bc-pill">+ 24% Conversion Lift</span>
                <div className="bc-bottom">
                  <b>+$180,000/mo</b>
                  <p>VSL Presentation Engines</p>
                </div>
              </div>
            </div>

            {/* Bento Card 4 */}
            <div className="bc">
              <img
                src="/assets/bento_low_ticket_bridge.jpg"
                alt="Low-Ticket & Bridge Funnels"
                className="bc-img-bg"
              />
              <div className="bc-overlay"></div>
              <div className="bc-content">
                <span className="bc-pill">04 · Scale Engine</span>
                <div className="bc-bottom">
                  <b>Low-Ticket & Bridge Funnels</b>
                  <p>Autonomous customer acquisition</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SCRUB STATEMENT ==================== */}
        <section className="say box" id="say" ref={sayRef}>
          <span className="fl" style={{ left: "10%", top: "70%" }} data-sp="0.5" data-scale="1"></span>
          <span className="fl" style={{ left: "62%", top: "38%" }} data-sp="-0.4" data-scale="0.8"></span>
          <span className="fl" style={{ right: "8%", top: "62%" }} data-sp="0.9" data-scale="1"></span>
          <span className="fl" style={{ left: "48%", top: "84%" }} data-sp="-0.7" data-scale="0.6"></span>
          <span className="fl" style={{ left: "84%", top: "86%" }} data-sp="0.3" data-scale="0.7"></span>

          <p id="sayp" ref={saypRef}>
            {scrubWords.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.type === "w" ? (
                  <span className="w">{item.text}</span>
                ) : (
                  <span className={item.className}>{item.text}</span>
                )}
                {" "}
              </React.Fragment>
            ))}
          </p>
        </section>

        {/* ==================== PINNED STATS / PROCESS WITH USER GRAPHIC CARDS ==================== */}
        <div id="statwrap" ref={statWrapRef}>
          <div className="stat">
            <div className="runner d" id="runner" ref={runnerRef}>
              WE BUILD AROUND YOUR SALES PROCESS.
            </div>

            {/* Card 1 */}
            <div className="scard">
              <small>01</small>
              <b>01-02</b>
              <span>DISCOVER & STRATEGIZE</span>
              <div className="scard-preview">
                <img
                  src="/assets/QI4Qj1ZM7uFgNfZZXBYJ79HXTWk.png"
                  alt="Discover & Strategize"
                />
              </div>
              <p>We analyze your offer economics, ideal customer profile, and traffic channels to craft an irresistible conversion blueprint.</p>
            </div>

            {/* Card 2 */}
            <div className="scard">
              <small>02</small>
              <b>03-04</b>
              <span>BUILD & CONNECT</span>
              <div className="scard-preview">
                <img
                  src="/assets/A6FxHZ4VnALOG85Zj2DqCMmZsU.png"
                  alt="Build & Connect"
                />
              </div>
              <p>Our team writes high-converting copy, designs sleek UI pages, and connects CRM, calendars, SMS workflows, and AI voice agents.</p>
            </div>

            {/* Card 3 */}
            <div className="scard">
              <small>03</small>
              <b>05-06</b>
              <span>TEST & LAUNCH</span>
              <div className="scard-preview">
                <img
                  src="/assets/oKIg0vEHNBbO35gn2rhKhPLwQ.png"
                  alt="Test & Launch"
                />
              </div>
              <p>We stress-test tracking pixels, multi-step forms, payment gateways, and automations before your funnel goes live.</p>
            </div>
            <div className="pocket"></div>
          </div>
        </div>
      </main>

      {/* ==================== FEATURES SECTION: AUTOMATION & DASHBOARD IMAGES ==================== */}
      <section className="feat dark" id="features">
        <div className="box center">
          <div className="kick">
            <b>02</b>
            <span>AUTOMATION & FOLLOW-UP</span>
          </div>
          <h2 className="d h2">TURN EVERY LEAD INTO A BOOKED CALL.</h2>
          <p className="lead" style={{ marginTop: "20px" }}>
            We connect your funnel to the automated systems that keep prospects moving toward a sale.
          </p>

          <div className="two" style={{ textAlign: "left" }}>
            {/* Left Pane - Interactive Workflow Dashboard Screenshots */}
            <div className="pane l">
              <div className="dashboard-showcase">
                <img
                  src="/assets/Automated Workflow Glass Dashboard.png"
                  alt="Email & SMS Workflows"
                  className={`dashboard-img ${activeAcc === 0 ? "active" : ""}`}
                />
                <img
                  src="/crm-automation.png"
                  alt="CRM Pipeline Automation"
                  className={`dashboard-img ${activeAcc === 1 ? "active" : ""}`}
                />
                <img
                  src="/appointment-workflow.png"
                  alt="Appointment Workflows"
                  className={`dashboard-img ${activeAcc === 2 ? "active" : ""}`}
                />
                <img
                  src="/Aicalingagent.png"
                  alt="AI Voice Calling Agent"
                  className={`dashboard-img ${activeAcc === 3 ? "active" : ""}`}
                />
                <div className="dashboard-badge">
                  <span>⚡ Active Automation Engine</span>
                  <b>$14,850.00 / pipeline</b>
                </div>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="pane r">
              <span className="eyebrow">Conversion Infrastructure</span>
              <h3>Nurture, Qualify & Close Automatically.</h3>
              <p className="lead">
                Stop letting high-intent prospects slip through the cracks. Every interaction is tracked, scored, and followed up in seconds.
              </p>

              <div className="acc" id="acc">
                {accItems.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-expanded={activeAcc === idx}
                    onClick={() => setActiveAcc(idx)}
                  >
                    <span>{item.title}</span>
                    <i>{item.icon}</i>
                    <p>{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== DIGITAL STEPPER ==================== */}
        <div className="box mid">
          <span className="eyebrow">Conversion Architecture</span>
          <h3>
            Fast, Frictionless & High-Converting.
            <br />
            Built For Massive Scale.
          </h3>
          <p className="lead">
            From the first page click to the booked calendar slot, every step is optimized for persuasion and speed.
          </p>
        </div>

        <div id="paywrap" ref={payWrapRef}>
          <div className="pay">
            <span className="ghost t"></span>
            <span className="ghost b"></span>

            <div className="steps">
              <i>{activePay === 0 ? "❖" : activePay === 1 ? "📅" : "🤖"}</i>
              <ol id="paydots">
                <li className={activePay === 0 ? "on" : ""}>{activePay === 0 ? "1" : ""}</li>
                <li className={activePay === 1 ? "on" : ""}>{activePay === 1 ? "2" : ""}</li>
                <li className={activePay === 2 ? "on" : ""}>{activePay === 2 ? "3" : ""}</li>
              </ol>
            </div>

            <div className="frame">
              {/* Scene 0 */}
              <div className={`scene ${activePay === 0 ? "on" : ""}`}>
                <div className="gate">
                  <i>Opt-In</i>
                  <i>VSL</i>
                  <i>Apply</i>
                  <i>↗</i>
                </div>
              </div>

              {/* Scene 1 */}
              <div className={`scene ${activePay === 1 ? "on" : ""}`}>
                <div className="inv">
                  <header>
                    <b>Sales Call Booked</b>
                    <u>✓ Qualified</u>
                  </header>
                  <dl>
                    <dt>Prospect</dt>
                    <dd>Enterprise B2B</dd>
                    <dt>Budget</dt>
                    <dd>$10,000+</dd>
                    <dt>Show-Up Status</dt>
                    <dd>Confirmed (SMS)</dd>
                  </dl>
                </div>
              </div>

              {/* Scene 2 */}
              <div className={`scene ${activePay === 2 ? "on" : ""}`}>
                <div className="ring">
                  <b>24/7</b>
                  AI Voice Agent
                </div>
                <div className="note a">
                  <b>60-Sec Response</b>
                  Instant lead phone intake
                </div>
                <div className="note b">
                  <b>Live CRM Sync</b>
                  Auto appointment set
                </div>
              </div>
            </div>

            <div className="paytx" id="paytx">
              {payItems.map((item, idx) => (
                <div key={idx} className={activePay === idx ? "on" : ""}>
                  <b>{item.title}</b>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== FAN CARDS: BESPOKE FUNNELS (6 CARDS) ==================== */}
        <div className="box mid" style={{ marginTop: "clamp(40px, 6vw, 90px)" }}>
          <span className="eyebrow">Bespoke Solutions</span>
          <h3>Tailored Funnel Frameworks For Serious Scale.</h3>
          <p className="lead">
            Whether you sell high-ticket consulting, enterprise SaaS, or video-first programs, we build the exact funnel architecture you need.
          </p>
        </div>

        <div className="fan-container">
          <div className="fan box" id="fan">
            {bespokeCards.map((card, idx) => (
              <button
                key={card.id}
                className="ic"
                data-p={getFanPosition(idx)}
                onClick={() => setActiveFan(idx)}
                aria-label={`Select ${card.title}`}
              >
                <div className="top">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="fan-img-bg"
                  />
                  <span className="card-tag-pill">{card.tag}</span>
                </div>
                <div className="bot">
                  <i>{card.icon}</i>
                  <b>{card.title}</b>
                  <p>{card.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* 6 Cards Interactive Navigation Bar */}
          <div className="fan-nav-wrapper">
            <div className="fan-nav">
              <button
                type="button"
                className="fan-nav-btn prev"
                onClick={handlePrevFan}
                aria-label="Previous bespoke card"
              >
                ←
              </button>

              <div className="fan-dots">
                {bespokeCards.map((card, idx) => (
                  <button
                    key={card.id}
                    type="button"
                    className={`fan-dot ${activeFan === idx ? "active" : ""}`}
                    onClick={() => setActiveFan(idx)}
                  >
                    <span className="dot-num">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="dot-title">{card.shortTitle}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="fan-nav-btn next"
                onClick={handleNextFan}
                aria-label="Next bespoke card"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTEGRATIONS ARC & TESTIMONIALS ==================== */}
      <section className="sheet two-end">
        {/* Integrations */}
        <div className="sec box center" id="integrations" ref={arcRef}>
          <div className="kick">
            <b>03</b>
            <span>INTEGRATIONS</span>
          </div>
          <h2 className="d h2" style={{ maxWidth: "16em", marginInline: "auto" }}>
            SEAMLESS INTEGRATION WITH YOUR ENTIRE TECH STACK.
          </h2>
          <div className="arc">
            <div className="phone arc-phone">
              <img
                src="/assets/cmMkedPPHQRkAShnmUn1lEZAz8.png"
                alt="OneFin Integrations Device"
                className="arc-phone-img"
              />
            </div>
            <div className="apps" id="apps">
              {integrations.map((item, idx) => (
                <i key={idx} style={{ color: item.color }} title={item.name}>
                  {item.icon}
                </i>
              ))}
            </div>
          </div>
          <p className="lead" style={{ marginTop: "24px" }}>
            We connect with GoHighLevel, HubSpot, Zapier, Stripe, Calendly, ActiveCampaign, Make, Meta, and all major CRM & ad platforms in minutes.
          </p>
        </div>
      </section>

      {/* ==================== TESTIMONIALS, WORK PROOF, BLOG, FAQ, CTA & FOOTER ==================== */}
      <GlobalBottomSections />
    </div>
  );
}
