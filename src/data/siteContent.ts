import caseStudiesData from "./caseStudies.json";

export interface CaseStudy {
  k: string;
  t: string;
  s: string;
  g: string;
  b: string;
  w: number;
  h: number;
}

export const CASE_STUDIES: CaseStudy[] = caseStudiesData as CaseStudy[];

export const HERO_WORDS = [
  "booked calls.",
  "qualified leads.",
  "applications.",
  "customers.",
];

export const LOADER_WORDS = [
  "Funnels",
  "AI",
  "Automations",
  "SMS",
  "Emails",
  "Workflows",
  "Landing Pages",
  "GHL",
  "ClickFunnels",
];

export const LOGOS = [
  "logo-01.webp",
  "logo-02.webp",
  "logo-03.webp",
  "logo-04.webp",
  "logo-05.webp",
  "logo-06.webp",
  "logo-07.webp",
  "logo-08.webp",
  "logo-10.webp",
  "logo-11.webp",
  "logo-12.webp",
  "logo-13.webp",
  "logo-15.webp",
  "logo-16.webp",
  "logo-17.webp",
  "logo-18.webp",
  "logo-19.webp",
  "logo-20.webp",
  "logo-21.webp",
  "logo-22.webp",
];

export interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  category: "build" | "system";
  badge: string;
  previewTitle: string;
  colorIndex: number;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 0,
    title: "AC Funnels",
    desc: "Move prospects from initial interest to application and booked call.",
    category: "build",
    badge: "01",
    previewTitle: "AC Funnels & Qualification",
    colorIndex: 0,
  },
  {
    id: 1,
    title: "Landing Pages",
    desc: "Focused pages built around one offer and one conversion objective.",
    category: "build",
    badge: "02",
    previewTitle: "Single-Objective Landing Page",
    colorIndex: 1,
  },
  {
    id: 2,
    title: "VSL Funnels",
    desc: "Use video-led selling to educate prospects and move them toward action.",
    category: "build",
    badge: "03",
    previewTitle: "Video Sales Letter Flow",
    colorIndex: 2,
  },
  {
    id: 3,
    title: "Low-Ticket Funnels",
    desc: "Convert cold traffic into buyers with strategically structured offers, checkout flows, upsells and downsells.",
    category: "build",
    badge: "04",
    previewTitle: "Ascension & Upsell System",
    colorIndex: 3,
  },
  {
    id: 4,
    title: "Bridge Funnels",
    desc: "Warm and pre-frame cold traffic before sending prospects to your primary offer.",
    category: "build",
    badge: "05",
    previewTitle: "Pre-Frame & Trust Architecture",
    colorIndex: 0,
  },
  {
    id: 5,
    title: "Application Funnels",
    desc: "Collect the information your sales team needs while filtering for better-fit prospects.",
    category: "build",
    badge: "06",
    previewTitle: "Multi-Step Application & Scoring",
    colorIndex: 1,
  },
  {
    id: 6,
    title: "Email & SMS Workflows",
    desc: "Automated sequences for new leads, nurturing, reminders, follow-ups and reactivation.",
    category: "system",
    badge: "07",
    previewTitle: "Omnichannel Automated Nurture",
    colorIndex: 2,
  },
  {
    id: 7,
    title: "CRM Automation",
    desc: "Move leads through your pipeline automatically based on their actions.",
    category: "system",
    badge: "08",
    previewTitle: "Dynamic CRM Pipeline Stages",
    colorIndex: 3,
  },
  {
    id: 8,
    title: "Appointment Workflows",
    desc: "Confirmation, reminders, rescheduling and no-show follow-up.",
    category: "system",
    badge: "09",
    previewTitle: "Calendar & Attendance Engine",
    colorIndex: 0,
  },
  {
    id: 9,
    title: "AI Calling Agent",
    desc: "Automatically engage new leads, ask qualifying questions, answer common questions and help move qualified prospects toward an appointment.",
    category: "system",
    badge: "10",
    previewTitle: "Autonomous Voice & Booking Agent",
    colorIndex: 1,
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your offer, ideal customer, traffic source, sales process and conversion goal.",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "We determine what your prospect needs to see, understand and believe before taking the next step.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Our team develops the pages, funnel flow, copy, forms and conversion elements.",
  },
  {
    num: "04",
    title: "Connect",
    desc: "We integrate your CRM, calendar, email, SMS, workflows, tracking and AI calling where required.",
  },
  {
    num: "05",
    title: "Test",
    desc: "We test the complete journey so pages, forms, integrations, notifications and automations work as intended.",
  },
  {
    num: "06",
    title: "Launch",
    desc: "Your funnel goes live and is ready to receive traffic.",
  },
];

export const WHO_ITEMS = [
  {
    num: "01",
    title: "Agencies",
    desc: "Generate better-fit prospects and turn marketing traffic into qualified discovery calls.",
    tag: "Discovery calls",
  },
  {
    num: "02",
    title: "Coaches & Consultants",
    desc: "Build a structured journey that turns interest into applications and sales conversations.",
    tag: "Applications",
  },
  {
    num: "03",
    title: "High-Ticket Service Providers",
    desc: "Present your offer, qualify prospects and get serious buyers onto your calendar.",
    tag: "Calendar",
  },
  {
    num: "04",
    title: "B2B Companies",
    desc: "Create a conversion path designed to engage and qualify potential clients before the sales team steps in.",
    tag: "Qualification",
  },
  {
    num: "05",
    title: "Professional Services",
    desc: "Turn expertise and credibility into a predictable path toward consultation bookings.",
    tag: "Consultations",
  },
  {
    num: "06",
    title: "Information & Education",
    desc: "Use VSLs, low-ticket offers, bridge funnels and automated journeys to turn attention into customers.",
    tag: "Customers",
  },
];

export interface FunnelItem {
  id: number;
  name: string;
  desc: string;
}

export const FUNNELS_LIST: FunnelItem[] = [
  { id: 8, name: "Mortgage AI System", desc: "Webinar funnel, mortgage leads" },
  { id: 7, name: "Rowan Security", desc: "Executive protection, high-ticket application" },
  { id: 6, name: "Inventiv", desc: "Invention showcase, lead funnel" },
  { id: 5, name: "Pluto CRM", desc: "Insurance CRM, free trial funnel" },
  { id: 4, name: "Bio-Optimization Made Easy", desc: "Long-form VSL sales letter" },
  { id: 3, name: "Funnel Profit System", desc: "Audit offer, booking funnel" },
  { id: 2, name: "Growth Foundry", desc: "Local SEO audit, lead funnel" },
];

export const FEATURED_CASES = [
  {
    category: "Coaching",
    title: "Lead form plus WhatsApp follow-up for a $5K DWY offer",
    desc: "$15,151 in ad spend, 527 leads, 253 booked calls and 23 clients closed at $5K each.",
    tags: ["Lead form", "WhatsApp", "Booked calls"],
    metric: "$115K",
    metricLabel: "revenue, 7.5x ROAS",
    color: "#c8f54a",
    slug: "DKNahy6TPwg",
  },
  {
    category: "Legal / MVA",
    title: "OTP-verified MVA leads replacing $150 PPL leads",
    desc: "1,079 verified leads at $18.94 each in 30 days, 62% show-up rate, 194 clients signed.",
    tags: ["OTP verification", "Lead funnel", "Follow-up"],
    metric: "$388K",
    metricLabel: "revenue, 19x ROAS",
    color: "#d6ccff",
    slug: "DLidtnUTjXL",
  },
  {
    category: "Low-ticket",
    title: "Low-ticket membership funnel with order bump and DFY upsell",
    desc: "2,063 memberships, 183 plug-and-play bundles and 30 high-ticket DFY programs in five days.",
    tags: ["LTO", "Order bump", "High-ticket upsell"],
    metric: "$150K",
    metricLabel: "in 5 days",
    color: "#ffbfe0",
    slug: "DQsBVdEkxYc",
  },
  {
    category: "Fitness",
    title: "Low-ticket to high-ticket funnel for a fitness brand",
    desc: "Client came after reading our low-ticket case studies. Front-end offer feeding a high-ticket sales process.",
    tags: ["Low-ticket", "VSL", "Sales calls"],
    metric: "$203K",
    metricLabel: "in 11 days",
    color: "#bfe3ff",
    slug: "DUsaqlQEsYB",
  },
  {
    category: "Roofing",
    title: "Exclusive roofing leads at scale",
    desc: "Scaled the three winning creatives, $18,583 spent in a month, more jobs than the sales team could handle.",
    tags: ["Lead gen", "Creative scaling", "CRM"],
    metric: "1,068",
    metricLabel: "leads at $17.40 each",
    color: "#ffd3c2",
    slug: "DNVeSkDyaNM",
  },
  {
    category: "Retreat",
    title: "Sold-out luxury retreat from one offer",
    desc: "$9,240 in spend, 1,189 leads at $7.77, 75 retreat packages at $2,500 plus 250 online passes.",
    tags: ["Offer", "Landing page", "Checkout"],
    metric: "$187K+",
    metricLabel: "retreat packages sold",
    color: "#c8f54a",
    slug: "DMYSXDbSZoO",
  },
];

export const VNAME: { [key: string]: string } = {
  "portrait-1": "Coaching client",
  "landscape-1": "Marie Grace Berg",
  "portrait-2": "Agency owner",
  "square-1": "Edgar & Jeremi",
  "landscape-2": "Consulting client",
  "landscape-3": "Launch review call",
};

export const VDUR: { [key: string]: number } = {
  "portrait-1": 82,
  "landscape-1": 217,
  "portrait-2": 116,
  "square-1": 178,
  "landscape-2": 129,
  "landscape-3": 18,
};

export interface PlanTier {
  tag: string;
  title: string;
  desc: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
}

export const PLANS_DATA: PlanTier[] = [
  {
    tag: "STARTER",
    title: "Design Only",
    desc: "Perfect if you want the strategy and visual funnel assets, but not the full copy and implementation.",
    features: [
      "Market Research & Offer Positioning",
      "Funnel Strategy & Structure",
      "Premium Conversion Design",
      "Custom Graphics + Brand Visuals",
      "Mobile-Optimized Layouts",
    ],
    ctaText: "Start with design",
    ctaUrl: "https://milliondollarfunnels.us/book?tier=design-only",
  },
  {
    tag: "MOST POPULAR",
    title: "Design + Copy Build",
    desc: "Our most recommended package for a launch-ready AC Funnel with both messaging and design handled for you.",
    features: [
      "Front-End Sales Page + Long-Form Copy",
      "Checkout Page + Order Bump Copy",
      "OTO Pages + VSL Copy",
      "Backend Booking Page + VSL Copy",
      "Thank You Page + Call Show-Up Script",
      "Premium Custom Graphics + Brand Visuals",
      "Mobile-Optimized Conversion Design",
    ],
    ctaText: "Get your AC Funnel now",
    ctaUrl: "https://milliondollarfunnels.us/book?tier=design-copy-build",
  },
  {
    tag: "COMPLETE",
    title: "Full AC Funnel Suite",
    desc: "The complete done-for-you package with full build, systems, integrations and post-launch support.",
    features: [
      "Everything in Design + Copy Build",
      "Full Tech Setup + Integrations",
      "Membership Area Setup + Organization",
      "Follow-Up Email Sequences",
      "30 Days of Post-Launch Support",
    ],
    ctaText: "Apply for full funnel suite",
    ctaUrl: "https://milliondollarfunnels.us/book?tier=full-funnel-suite",
  },
];

export const PIPELINE_NODES = [
  { title: "Traffic", desc: "Paid, organic, email, referral" },
  { title: "Funnel", desc: "Pages built around the offer" },
  { title: "Lead", desc: "Captured with the right data" },
  { title: "Qualification", desc: "Application and filters" },
  { title: "Automated follow-up", desc: "Email, SMS, CRM workflows" },
  { title: "AI calling", desc: "Qualifies and answers" },
  { title: "Booked call", desc: "On your calendar" },
];

export interface FAQItem {
  q: string;
  a: string;
  category: "build" | "auto" | "work";
  tags: string[];
}

export const FAQS: FAQItem[] = [
  {
    q: "What does Funnels That Print build?",
    a: "We build conversion-focused funnels and the supporting systems around them, including AC funnels, landing pages, high-ticket funnels, VSLs, low-ticket funnels, bridge funnels, application flows, automations, CRM workflows and AI calling.",
    category: "build",
    tags: ["Funnels", "Pages", "Automation"],
  },
  {
    q: "Can you build the funnel from scratch?",
    a: "Yes. We can handle the strategy, structure, copy, design, development, integrations and automation required for the build.",
    category: "build",
    tags: ["Strategy", "Copy", "Build"],
  },
  {
    q: "Can you work with my existing funnel?",
    a: "Yes. If you already have a funnel, we can improve, rebuild or connect it to the systems you need.",
    category: "build",
    tags: ["Audit", "Rebuild", "Integrations"],
  },
  {
    q: "Do you build low-ticket funnels?",
    a: "Yes. We can build the complete customer journey, including sales pages, checkout, upsells, downsells and follow-up sequences.",
    category: "build",
    tags: ["Checkout", "Upsell", "Follow-up"],
  },
  {
    q: "What is a bridge funnel?",
    a: "A bridge funnel prepares a prospect before they reach the main offer. It is particularly useful when you are sending cold traffic toward an offer that requires additional education or trust.",
    category: "build",
    tags: ["Cold traffic", "Pre-frame"],
  },
  {
    q: "What does the AI Calling Agent do?",
    a: "It can engage leads automatically, have an initial conversation, ask qualifying questions, handle common questions and help move suitable prospects toward booking an appointment.",
    category: "auto",
    tags: ["AI calling", "Qualification"],
  },
  {
    q: "Can you set up my automations?",
    a: "Yes. We can build workflows for lead nurturing, email, SMS, appointment reminders, no-shows, reactivation, CRM movement and other parts of your sales process.",
    category: "auto",
    tags: ["Email", "SMS", "CRM"],
  },
  {
    q: "Do you integrate with CRMs?",
    a: "Yes. We can connect the funnel with your CRM, calendar, communication tools, tracking and other required platforms.",
    category: "auto",
    tags: ["CRM", "Calendar", "Tracking"],
  },
  {
    q: "Do I need paid advertising?",
    a: "No. Your funnel can work with paid traffic, organic traffic, email, referrals or other acquisition channels.",
    category: "work",
    tags: ["Traffic", "Organic", "Paid"],
  },
  {
    q: "How long does a funnel take to build?",
    a: "Most projects take approximately 5 to 10 business days, depending on the scope, number of pages, integrations and automation requirements.",
    category: "work",
    tags: ["5 to 10 days", "Scope"],
  },
  {
    q: "Do you guarantee results?",
    a: "A funnel's performance depends on several factors, including the offer, market, traffic, sales process and follow-up. We do not promise an arbitrary number of appointments. Our focus is building the infrastructure to give your traffic the best possible path toward becoming a qualified booked call.",
    category: "work",
    tags: ["Performance", "Honesty"],
  },
];
