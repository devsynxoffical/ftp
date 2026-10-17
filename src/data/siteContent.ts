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
    title: "High-Ticket Funnels",
    desc: "Move prospects from initial interest to application and booked call.",
    category: "build",
    badge: "01",
    previewTitle: "Application & Qualification",
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
    img: "/img/gen/p1.webp",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "We determine what your prospect needs to see, understand and believe before taking the next step.",
    img: "/img/gen/p2.webp",
  },
  {
    num: "03",
    title: "Build",
    desc: "Our team develops the pages, funnel flow, copy, forms and conversion elements.",
    img: "/img/gen/p3.webp",
  },
  {
    num: "04",
    title: "Connect",
    desc: "We integrate your CRM, calendar, email, SMS, workflows, tracking and AI calling where required.",
    img: "/img/gen/p4.webp",
  },
  {
    num: "05",
    title: "Test",
    desc: "We test the complete journey so pages, forms, integrations, notifications and automations work as intended.",
    img: "/img/gen/p5.webp",
  },
  {
    num: "06",
    title: "Launch",
    desc: "Your funnel goes live and is ready to receive traffic.",
    img: "/img/gen/p6.webp",
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

export const PORTFOLIO_PROJECTS = [
  {
    num: "01",
    type: "High-ticket",
    title: "Application funnel",
    desc: "Dark, premium application flow with a 3-step progress bar and a calendar booking widget. Built to filter for fit before the call.",
    color: "#2d4fe6",
    img: "/img/fun/f1.webp",
    href: "#services",
  },
  {
    num: "02",
    type: "VSL",
    title: "Video sales letter funnel",
    desc: "One video, one headline, one button. Prospects are educated before they are asked to book.",
    color: "#e0a848",
    img: "/img/fun/f2.webp",
    href: "#services",
  },
  {
    num: "03",
    type: "Low-ticket",
    title: "Checkout funnel",
    desc: "Offer, order bump, upsell, downsell. Cold traffic becomes buyers on the first visit.",
    color: "#1d3a2e",
    img: "/img/fun/f3.webp",
    href: "#services",
  },
  {
    num: "04",
    type: "Bridge",
    title: "Pre-frame page",
    desc: "Editorial long-form page that warms cold traffic before it reaches the primary offer.",
    color: "#ff5a1f",
    img: "/img/fun/f4.webp",
    href: "#services",
  },
  {
    num: "05",
    type: "Landing page",
    title: "Single-offer page",
    desc: "Bold headline, one hero image, three benefits and exactly one action.",
    color: "#5b3fd6",
    img: "/img/fun/f5.webp",
    href: "#services",
  },
  {
    num: "06",
    type: "Automation",
    title: "Follow-up system",
    desc: "Email, SMS, calendar and the AI calling agent connected in one workflow.",
    color: "#e04f7e",
    img: "/img/fun/f6.webp",
    href: "#services",
  },
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

export const TESTIMONIAL_VIDEOS = [
  { id: "portrait-1", layoutClass: "p1", label: "Client testimonial" },
  { id: "landscape-1", layoutClass: "l1", label: "Client testimonial" },
  { id: "square-1", layoutClass: "sq", label: "Client testimonial" },
  { id: "landscape-2", layoutClass: "l2", label: "Client testimonial" },
  { id: "portrait-2", layoutClass: "p2", label: "Client testimonial" },
  { id: "landscape-3", layoutClass: "l3", label: "Client testimonial" },
];

export const PRICING_PLANS = [
  {
    title: "Funnel build",
    price: "Quoted on scope",
    desc: "Strategy, copy, design and development of one funnel with its pages, forms and conversion elements. Delivered in 5 to 10 business days.",
    features: [
      {
        title: "Strategy and offer mapping",
        desc: "Offer, audience, traffic source and conversion goal defined before anything is built.",
      },
      {
        title: "Pages and funnel flow",
        desc: "Landing, application, VSL, bridge or checkout pages, written and designed.",
      },
      {
        title: "Forms and qualification",
        desc: "Application questions and filters your sales team actually needs.",
      },
      {
        title: "Tracking and testing",
        desc: "Every page, form and notification tested end to end before launch.",
      },
    ],
  },
  {
    title: "Full conversion system",
    price: "Quoted on scope",
    desc: "Everything in the Core build plus the systems that keep leads moving: CRM, calendar, email, SMS, appointment workflows and the AI calling agent.",
    features: [
      {
        title: "Everything in the Core build",
        desc: "Strategy, pages, forms, tracking and launch.",
      },
      {
        title: "CRM and calendar integration",
        desc: "Leads move through your pipeline automatically based on their actions.",
      },
      {
        title: "Email and SMS workflows",
        desc: "New lead, nurture, reminder, no-show and reactivation sequences.",
      },
      {
        title: "AI calling agent",
        desc: "Engages new leads, asks qualifying questions and books suitable prospects.",
      },
    ],
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

export const FAQS = [
  {
    q: "What does Funnels That Print build?",
    a: "We build conversion-focused funnels and the supporting systems around them, including landing pages, high-ticket funnels, VSLs, low-ticket funnels, bridge funnels, application flows, automations, CRM workflows and AI calling.",
  },
  {
    q: "Can you build the funnel from scratch?",
    a: "Yes. We can handle the strategy, structure, copy, design, development, integrations and automation required for the build.",
  },
  {
    q: "Can you work with my existing funnel?",
    a: "Yes. If you already have a funnel, we can improve, rebuild or connect it to the systems you need.",
  },
  {
    q: "Do you build low-ticket funnels?",
    a: "Yes. We can build the complete customer journey, including sales pages, checkout, upsells, downsells and follow-up sequences.",
  },
  {
    q: "What is a bridge funnel?",
    a: "A bridge funnel prepares a prospect before they reach the main offer. It is particularly useful when you are sending cold traffic toward an offer that requires additional education or trust.",
  },
  {
    q: "What does the AI Calling Agent do?",
    a: "It can engage leads automatically, have an initial conversation, ask qualifying questions, handle common questions and help move suitable prospects toward booking an appointment.",
  },
  {
    q: "Can you set up my automations?",
    a: "Yes. We can build workflows for lead nurturing, email, SMS, appointment reminders, no-shows, reactivation, CRM movement and other parts of your sales process.",
  },
  {
    q: "Do you integrate with CRMs?",
    a: "Yes. We can connect the funnel with your CRM, calendar, communication tools, tracking and other required platforms.",
  },
  {
    q: "Do I need paid advertising?",
    a: "No. Your funnel can work with paid traffic, organic traffic, email, referrals or other acquisition channels.",
  },
  {
    q: "How long does a funnel take to build?",
    a: "Most projects take approximately 5 to 10 business days, depending on the scope, number of pages, integrations and automation requirements.",
  },
  {
    q: "Do you guarantee results?",
    a: "A funnel's performance depends on several factors, including the offer, market, traffic, sales process and follow-up. We do not promise an arbitrary number of appointments. Our focus is building the infrastructure to give your traffic the best possible path toward becoming a qualified booked call.",
  },
];
