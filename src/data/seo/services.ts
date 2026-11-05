import type { SeoPage } from "./types";

const HUB = { name: "Services", path: "/services" };
const U = "2026-11-05";

export const SERVICE_PAGES: SeoPage[] = [
  {
    path: "/services",
    kind: "hub",
    keyword: "sales funnel and automation services",
    title: "Sales Funnel and Automation Services | Funnels That Print",
    description: "Sales funnel and automation services: VSL, quiz and webinar funnels, GoHighLevel, CRM automation, AI voice agents, speed-to-lead and Meta CAPI.",
    eyebrow: "Services",
    h1: "Sales funnel and automation services",
    intro:
      "Funnels That Print provides <strong>sales funnel and automation services</strong> for businesses that sell through a booked call, a checkout or an application. Each service below is a separate build, and most clients combine three or four of them into one acquisition system: a funnel to capture the lead, automation to follow up, AI to qualify, and tracking so the ads learn who buys.",
    quick: {
      q: "What sales funnel and automation services does Funnels That Print offer?",
      a: "We build done-for-you sales funnels (VSL, quiz, webinar and low-ticket), set up GoHighLevel and CRM automation, deploy AI voice agents and AI appointment setters, install 60-second speed-to-lead follow-up, and configure Meta Conversions API tracking. Builds take 5 to 10 business days and start at $999 for design only.",
    },
    sections: [
      {
        h2: "How the services fit together",
        html: `<p>A funnel on its own only converts a click into a form fill. What turns that form fill into revenue is everything around it, which is why the services are built to connect:</p>
<ol>
<li><strong>Capture.</strong> A <a href="/sales-funnel-agency">done-for-you sales funnel</a>, built as a <a href="/vsl-funnels">VSL funnel</a>, a <a href="/quiz-funnels">quiz funnel</a>, a <a href="/webinar-funnels">webinar funnel</a> or a <a href="/scalelowticket">low-ticket funnel</a>, depending on how the offer sells.</li>
<li><strong>Respond.</strong> <a href="/speed-to-lead">Speed-to-lead automation</a> texts and calls every lead within 60 seconds, and an <a href="/ai-appointment-setter">AI appointment setter</a> covers nights and weekends.</li>
<li><strong>Manage.</strong> <a href="/gohighlevel-agency">GoHighLevel setup</a> and <a href="/crm-automation">CRM automation</a> move every lead through a pipeline with reminders, nurture and reactivation.</li>
<li><strong>Qualify.</strong> <a href="/ai-voice-agents">AI voice agents</a> and <a href="/ai-sales-funnels">AI sales funnels</a> screen leads before they reach a closer.</li>
<li><strong>Measure.</strong> <a href="/meta-conversions-api-setup">Meta Conversions API setup</a> sends booked calls and sales back to the ad platform so it finds more buyers.</li>
</ol>`,
      },
      {
        h2: "Pricing",
        html: `<div class="table-wrap"><table><thead><tr><th>Package</th><th>Price</th><th>What is included</th></tr></thead><tbody>
<tr><td>Design only</td><td>$999 one-time</td><td>Custom funnel design, desktop and mobile layouts, wireframes, developer handoff.</td></tr>
<tr><td>Design + copy build</td><td>$1,499 one-time</td><td>Design, direct-response copy, VSL script, full ClickFunnels or GoHighLevel build, order bumps and upsells, 14 days of QA.</td></tr>
<tr><td>Full funnel suite</td><td>$1,999 one-time</td><td>Everything above plus CRM pipelines, email and SMS workflows, booking and reminders, AI voice booking agent, tracking and 30 days of support.</td></tr>
</tbody></table></div>
<p>Ad spend, software subscriptions and AI calling minutes are paid directly by the client. Use the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a> to model what a build needs to return.</p>`,
      },
      {
        h2: "Who the services are for",
        html: `<p>Most of our 275+ documented results come from businesses where a lead is worth hundreds or thousands of dollars: <a href="/funnels-for/roofing">roofers</a>, <a href="/funnels-for/personal-injury-lawyers">personal injury firms</a>, <a href="/funnels-for/mortgage">mortgage brokers</a>, <a href="/funnels-for/med-spas">med spas</a>, <a href="/funnels-for/coaches">coaches</a> and <a href="/funnels-for/saas">SaaS companies</a>, plus eCommerce brands on the low-ticket side. The full list is on the <a href="/funnels-for">funnels by industry</a> page.</p>
<p>If you are unsure which service you need, start with the bottleneck. If ads produce leads that never answer, you need speed-to-lead and verification. If leads answer but do not book, you need a better offer and qualification. If calls are booked but nobody shows, you need reminders. If ads stop scaling, you need tracking.</p>`,
      },
      {
        h2: "How a build works",
        html: `<p>Every engagement follows the same six steps: discover the offer and audience, plan the funnel and automations, build pages and workflows, connect the CRM, calendar and tracking, test every path, then launch and optimize. Most builds go live in 5 to 10 business days. You keep ownership of every page, workflow and ad account.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel, 19 months", href: "/milliondollarcasestudy" },
        { value: "$847K", label: "Low-ticket front-end funnel", href: "/scalelowticket" },
        { value: "$388K", label: "MVA revenue on $20,324 ad spend", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "8,810", label: "MVA leads at $7.61 each", href: "/case-studies/mva-8810-leads-at-7-61-cpl" },
      ],
      more: { label: "Browse all case studies by industry", href: "/case-studies/all" },
    },
    faqs: [
      { q: "Do you only build funnels, or the systems around them too?", a: "Both. A funnel captures the lead, but the follow-up, qualification, CRM pipeline and tracking decide whether that lead becomes revenue. Most clients take the full suite, which includes the funnel, GoHighLevel or CRM automation, reminders, an AI voice booking agent and Meta Conversions API tracking." },
      { q: "How much do your services cost?", a: "Funnel builds are one-time fees: $999 for design only, $1,499 for design plus copy and a full build, and $1,999 for the complete suite with CRM, automation, AI booking and tracking. Ad spend, software subscriptions and AI calling minutes are paid directly by you, so you keep full ownership." },
      { q: "How long does a build take?", a: "Most builds launch in 5 to 10 business days. Larger projects with several funnels, custom integrations or multiple CRMs can take longer, and the timeline is agreed before work starts. You receive staging links to review pages and workflows before anything goes live to paid traffic." },
      { q: "Which platforms do you build on?", a: "Most lead generation builds run on GoHighLevel because the CRM, SMS, email, calendar and automation live in one account. Product funnels with order bumps and upsells often use ClickFunnels for checkout. We also integrate HubSpot, Shopify, Calendly and custom code when the business already depends on them." },
      { q: "Do you run the ads as well?", a: "The core services are the funnel, automation, AI and tracking. Many case studies on this site include ad management and done-with-you sessions where we work inside the client's ad account. On a strategy call we confirm whether you need ads managed or only the system the ads send traffic to." },
    ],
    related: ["/funnels-for", "/case-studies", "/tools/funnel-conversion-calculator", "/compare/funnel-agency-vs-freelancer"],
    parent: { name: "Home", path: "/" },
    updated: U,
  },
  {
    path: "/sales-funnel-agency",
    kind: "service",
    keyword: "sales funnel agency",
    serviceType: "Sales funnel design and build",
    title: "Sales Funnel Agency: Done-For-You Funnels That Convert",
    description: "A sales funnel agency that plans, writes, builds and optimizes done-for-you funnels, with 275+ documented results and builds live in 5 to 10 business days.",
    eyebrow: "Sales funnel agency",
    h1: "A sales funnel agency for offers that sell on a call or a checkout",
    intro:
      "Funnels That Print is a <strong>sales funnel agency</strong> that builds done-for-you funnels: strategy, copy, design, build, automation and tracking in one project. We have documented 275+ client results since 2019, including a $1.52M high-ticket consulting funnel and an $847K low-ticket front end, and most builds go live in 5 to 10 business days.",
    quick: {
      q: "What does a sales funnel agency do?",
      a: "A sales funnel agency designs and builds the pages and systems that turn ad traffic into customers: the landing page or quiz, the offer and copy, the checkout or booking calendar, follow-up emails and texts, and the tracking. A good one owns the outcome, cost per booked call or cost per sale, not just the pages.",
    },
    sections: [
      {
        h2: "What we build",
        html: `<p>The funnel type follows the offer, not our preference:</p>
<ul>
<li><strong>High-ticket offers sold on a call</strong> get a <a href="/vsl-funnels">VSL funnel</a> or a <a href="/quiz-funnels">diagnostic quiz funnel</a> with an application and booking calendar.</li>
<li><strong>Local services</strong> such as roofing, HVAC and solar get a short quote estimator, which converts two to three times better than a contact form on cold traffic.</li>
<li><strong>Courses, communities and products</strong> get a <a href="/scalelowticket">low-ticket front-end funnel</a> with an order bump and one-click upsell.</li>
<li><strong>Launches and education-heavy offers</strong> get a <a href="/webinar-funnels">webinar funnel</a> with reminders and replay follow-up.</li>
</ul>`,
      },
      {
        h2: "What makes a funnel convert",
        html: `<p>Across our builds, four things move results more than design polish:</p>
<ol>
<li><strong>The offer.</strong> A clear promise for a specific buyer. A weak offer on a beautiful page still fails.</li>
<li><strong>Micro-commitments.</strong> Asking easy questions before contact details, which is why quizzes and estimators beat long forms.</li>
<li><strong>Speed.</strong> Contacting the lead in under a minute. Our <a href="/speed-to-lead">speed-to-lead automation</a> lifted lead-to-booking 2.4x on the same ads across 60+ deployments.</li>
<li><strong>Feedback to the ad platform.</strong> Sending booked calls and sales back through the <a href="/meta-conversions-api-setup">Conversions API</a> so the algorithm finds buyers rather than form fillers.</li>
</ol>`,
      },
      {
        h2: "Our process",
        html: `<p><strong>Discover</strong> the offer, buyer and current numbers. <strong>Strategize</strong> the funnel type, pages and automations. <strong>Build</strong> the pages, copy and workflows. <strong>Connect</strong> the CRM, calendar, payment and tracking. <strong>Test</strong> every path on desktop and mobile. <strong>Launch</strong> and optimize from real data. You get staging links at each stage and keep ownership of everything we build.</p>`,
      },
      {
        h2: "Agency, freelancer or in-house?",
        html: `<p>A freelancer is cheaper for a single page; an agency is better when the result depends on copy, build, automation and tracking working together. We compare the trade-offs honestly in <a href="/compare/funnel-agency-vs-freelancer">funnel agency vs freelancer</a>. If you are choosing software first, read <a href="/blog/gohighlevel-vs-clickfunnels-lead-generation-2026">GoHighLevel vs ClickFunnels</a>.</p>
<p>We build for <a href="/funnels-for/roofing">roofing companies</a>, <a href="/funnels-for/coaches">coaches</a>, <a href="/funnels-for/mortgage">mortgage brokers</a> and a dozen other industries listed on <a href="/funnels-for">funnels by industry</a>.</p>`,
      },
      {
        h2: "Pricing",
        html: `<p>Funnel builds are one-time fees: <strong>$999</strong> for design only, <strong>$1,499</strong> for design, copy and a full build, and <strong>$1,999</strong> for the complete suite with CRM, automations, AI booking agent and tracking. Model the return first with the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "$847K", label: "Collected from a $27 front-end funnel", href: "/scalelowticket" },
        { value: "$680K", label: "Coaching revenue on $15,483 ad spend", href: "/case-studies/coaching-680k-revenue-on-15k-ad-spend" },
        { value: "686", label: "Roofing leads at $5.31 in 8 days", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
      ],
      more: { label: "See 275+ results", href: "/case-studies" },
    },
    faqs: [
      { q: "How much does a sales funnel agency cost?", a: "Our builds are one-time fees from $999 for design only to $1,999 for the full suite with CRM, automation, AI booking and tracking. Other agencies range from a few hundred dollars for a template to $10,000 or more for custom work with retainers. Our breakdown of sales funnel cost compares the options in detail." },
      { q: "What results can I expect from a new funnel?", a: "It depends on the offer, traffic and follow-up. Our documented results include $5 to $27 per verified lead in home services and legal, and 4x to 5x ROAS on eCommerce. Every case on the site shows its real numbers, so you can find one close to your business before committing." },
      { q: "Do you write the copy?", a: "Yes. The $1,499 and $1,999 packages include direct-response copy for every page: headlines, body, calls to action, the VSL script or outline, emails and texts. Copy is written for your specific buyer and offer, then tested once real traffic arrives so the weakest page gets rewritten first." },
      { q: "Which funnel builder do you use?", a: "GoHighLevel for most lead generation, because the CRM and automation live in the same account as the funnel. ClickFunnels for product checkouts with order bumps and upsells. Custom-coded pages when speed or design demands it. We recommend the platform after seeing your offer, not before." },
      { q: "Can you fix my existing funnel instead of rebuilding it?", a: "Often, yes. We audit the pages, follow-up, booking flow and tracking, then fix the biggest leak first. Many funnels lose most of their value after the form, through slow follow-up or no reminders, so the fix is frequently automation rather than new pages." },
      { q: "Do I own the funnel?", a: "Yes. Pages, copy, workflows, CRM data and ad accounts stay in your accounts. We build inside your software subscriptions, so if you stop working with us everything keeps running and nothing has to be migrated or rebuilt. You also receive logins and a handover video." },
    ],
    related: ["/funnels-for/roofing", "/funnels-for/coaches", "/funnels-for/mortgage", "/compare/funnel-agency-vs-freelancer", "/tools/funnel-conversion-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/ai-sales-funnels",
    kind: "service",
    keyword: "ai sales funnels",
    serviceType: "AI sales funnel build",
    title: "AI Sales Funnels: AI-Qualified Leads and Booked Calls",
    description: "AI sales funnels that qualify every lead with interactive questions and AI voice or chat follow-up within 60 seconds, then book qualified calls for you.",
    eyebrow: "AI sales funnels",
    h1: "AI sales funnels that qualify leads before they reach your calendar",
    intro:
      "<strong>AI sales funnels</strong> add an artificial intelligence layer to a normal funnel: interactive questions that qualify the visitor, an AI voice or chat agent that contacts them within a minute, and automatic booking for the leads who fit. The result is fewer wasted calls and faster contact with the leads who matter.",
    quick: {
      q: "What is an AI sales funnel?",
      a: "An AI sales funnel is a lead funnel where AI handles the first conversation. The visitor answers a few qualifying questions, then an AI voice or SMS agent contacts them within about 60 seconds, answers common questions, checks fit and books qualified leads directly onto a salesperson's calendar, writing everything back to the CRM.",
    },
    sections: [
      {
        h2: "How an AI sales funnel works",
        html: `<ol>
<li><strong>Interactive front end.</strong> A short quiz or estimator asks four to six questions, easiest first, contact details last.</li>
<li><strong>Instant AI contact.</strong> Within 60 seconds of the form, an <a href="/ai-voice-agents">AI voice agent</a> calls and an SMS goes out at the same time.</li>
<li><strong>Qualification.</strong> The agent confirms the answers, asks two to four qualifying questions and handles common objections from an approved knowledge base.</li>
<li><strong>Booking.</strong> Qualified leads are offered two specific slots and booked on the live calendar; the rest go into nurture.</li>
<li><strong>Write-back.</strong> Outcome, answers and a summary are saved to the CRM, and booked calls are sent to Meta through the <a href="/meta-conversions-api-setup">Conversions API</a>.</li>
</ol>`,
      },
      {
        h2: "Why AI changes the funnel economics",
        html: `<p>Most funnels lose leads after the form. A lead contacted after an hour is far less likely to answer than one contacted in the first minute, and leads arriving at night wait until morning. AI removes both gaps. Across 60+ deployments our median first contact is 38 seconds, 84% of leads are reached inside the first minute, and lead-to-booking rates rose 2.4x on the same ads and pages.</p>
<p>The full architecture is explained in our guide to <a href="/blog/ai-sales-funnels-voice-lead-qualification-2026">AI lead qualification</a>, and the costs of the voice layer in <a href="/blog/ai-appointment-setter-voice-agent-cost-setup-results">AI appointment setter cost</a>.</p>`,
      },
      {
        h2: "Where AI sales funnels work best",
        html: `<p>They work best where speed decides who wins the lead and volume makes human-only follow-up expensive: <a href="/funnels-for/personal-injury-lawyers">personal injury intake</a>, <a href="/funnels-for/roofing">roofing and home services</a>, <a href="/funnels-for/mortgage">mortgage</a> and <a href="/funnels-for/coaches">high-ticket coaching</a>. They work less well for low-intent traffic such as giveaways, where AI calls tend to be short and unproductive.</p>`,
      },
      {
        h2: "What stays human",
        html: `<p>AI handles the first call, not the sale. The agent discloses that it is an AI assistant, hands over to a person when asked, and books the conversation with your closer. Compare the two approaches in <a href="/compare/ai-voice-agent-vs-human-setter">AI voice agent vs human setter</a>, and model the savings with the <a href="/tools/ai-voice-agent-roi-calculator">AI voice agent ROI calculator</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "Consulting funnel with AI qualification", href: "/milliondollarcasestudy" },
        { value: "387", label: "MVA appointments booked in 24 days", href: "/case-studies/mva-387-appointments-booked" },
        { value: "$388K", label: "Revenue from 1,079 verified MVA leads", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "174", label: "Coaching appointments on $2,214 spend", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
      ],
      more: { label: "See coaching and consulting results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "Do AI sales funnels replace salespeople?", a: "No. AI handles the first contact, qualification and booking, the work most sales teams struggle to do within a minute and around the clock. The sales conversation itself stays with your closer, who now spends time only on leads that already match the criteria you set." },
      { q: "What does an AI sales funnel cost to run?", a: "Beyond the build, the main running cost is AI calling, typically $0.10 to $0.25 per minute of talk time. With normal contact and booking rates that works out to roughly $3 to $9 per booked appointment, far below the $40 to $120 per booking we see from human setters." },
      { q: "Will prospects hang up on an AI?", a: "Fewer than expected, when the agent discloses it is an AI assistant in the first sentence, replies in under a second and gets straight to booking. Hang-ups rise with slow, robotic voices and agents that cannot answer simple questions, so latency and the knowledge base matter most." },
      { q: "Which CRM does it connect to?", a: "Any CRM with webhooks or an API. We build most on GoHighLevel because the form trigger, calendar and pipeline sit in one account, but we also connect HubSpot and other CRMs. The AI writes the call outcome, answers and booked slot back to the contact record." },
      { q: "Is it compliant to call leads with AI?", a: "It can be, when the lead has given consent to be called and texted on the form, the agent discloses it is an AI in the opening lines, and calling hours and opt-outs are respected. Rules differ by country and state, so scripts should be reviewed before launch." },
    ],
    related: ["/ai-voice-agents", "/ai-appointment-setter", "/funnels-for/personal-injury-lawyers", "/funnels-for/coaches", "/funnels-for/mortgage", "/compare/ai-voice-agent-vs-human-setter", "/tools/ai-voice-agent-roi-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/gohighlevel-agency",
    kind: "service",
    keyword: "gohighlevel agency",
    serviceType: "GoHighLevel setup and automation",
    title: "GoHighLevel Agency: Setup, Snapshots and Automation",
    description: "GoHighLevel agency services: account setup, funnels, pipelines, workflows, calendars, snapshots and white-label builds, done for you in 5 to 10 days.",
    eyebrow: "GoHighLevel agency",
    h1: "GoHighLevel agency services: setup, workflows and snapshots",
    intro:
      "As a <strong>GoHighLevel agency</strong>, we set up and automate HighLevel accounts for businesses and for other agencies: funnels and forms, pipelines, calendars, SMS and email workflows, AI calling and reporting. Most of the lead generation results on this site run on GoHighLevel, and a typical build is live in 5 to 10 business days.",
    quick: {
      q: "What does a GoHighLevel agency set up?",
      a: "A GoHighLevel agency configures the account end to end: funnels and forms, the CRM pipeline and stages, calendars with round-robin and reminders, SMS and email workflows, missed-call text-back, conversation AI, reputation requests and dashboards. Agencies also get snapshots, reusable templates that clone the whole setup into client sub-accounts.",
    },
    sections: [
      {
        h2: "What we build in GoHighLevel",
        html: `<ul>
<li><strong>Funnels and forms</strong> with multi-step questions, quizzes and estimators.</li>
<li><strong>Pipelines</strong> with stages that match how you actually sell, from new lead to won.</li>
<li><strong>Calendars</strong> with round-robin, buffers, booking questions and confirmation.</li>
<li><strong>Workflows</strong> for <a href="/speed-to-lead">60-second speed-to-lead</a>, nurture, no-show recovery and database reactivation.</li>
<li><strong>AI</strong>: conversation AI for SMS and voice, or a dedicated <a href="/ai-voice-agents">AI voice agent</a> connected by webhook.</li>
<li><strong>Tracking</strong>: UTM capture and pipeline events sent to Meta through the <a href="/meta-conversions-api-setup">Conversions API</a>.</li>
</ul>`,
      },
      {
        h2: "Snapshots and white-label builds for agencies",
        html: `<p>If you run an agency on GoHighLevel's agency plan, we build the system once and package it as a <a href="/glossary/gohighlevel-snapshot">GoHighLevel snapshot</a>, so every new client sub-account starts with the funnels, pipelines, workflows and calendars already in place. Several case studies on this site are agencies that used our system for their own clients, including a home services agency that <a href="/case-studies/agency-15900-closed-in-10-days">closed $15,900 in 10 days</a>.</p>`,
      },
      {
        h2: "Why we build most lead generation on GoHighLevel",
        html: `<p>For offers that end in a booked call, the follow-up decides the result more than the page. GoHighLevel keeps the funnel, CRM, SMS, email, calendar and automation in one account, so a form submission can trigger a text, a call and a pipeline move in the same second. We compare it fairly with alternatives in <a href="/blog/gohighlevel-vs-clickfunnels-lead-generation-2026">GoHighLevel vs ClickFunnels</a>, <a href="/compare/gohighlevel-vs-hubspot">GoHighLevel vs HubSpot</a> and <a href="/compare/gohighlevel-vs-systeme-io">GoHighLevel vs Systeme.io</a>, and give an honest view in our <a href="/blog/gohighlevel-review">GoHighLevel review</a>.</p>`,
      },
      {
        h2: "Who uses it",
        html: `<p>GoHighLevel suits businesses that book appointments: <a href="/funnels-for/roofing">roofers</a>, <a href="/funnels-for/hvac">HVAC companies</a>, <a href="/funnels-for/med-spas">med spas</a>, <a href="/funnels-for/real-estate">real estate teams</a>, <a href="/funnels-for/coaches">coaches</a> and lead generation agencies.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "1,890", label: "Agency leads at $6.72 each", href: "/case-studies/agency-1890-leads-at-6-72-cpl" },
        { value: "180", label: "Appointments on $2,824 spend", href: "/case-studies/agency-14k-revenue-on-2824-ad-spend" },
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "337", label: "Home services appointments on $1,621", href: "/case-studies/home-services-337-appointments-booked" },
      ],
      more: { label: "See agency and SaaS results", href: "/case-studies/agency-saas-lead-generation" },
    },
    faqs: [
      { q: "Do I need my own GoHighLevel account?", a: "Yes. We build inside your account so you own every funnel, workflow and contact. If you do not have one yet, we help you choose the right plan: a single-business plan for one company, or the agency plan if you want sub-accounts and snapshots for your own clients." },
      { q: "What is a GoHighLevel snapshot?", a: "A snapshot is a saved copy of an account's setup, including funnels, pipelines, workflows, calendars and templates, that can be loaded into another sub-account in one step. Agencies use snapshots to launch new clients in hours instead of rebuilding the same system every time." },
      { q: "Can you migrate me from another CRM?", a: "Yes. We export contacts, tags and pipeline stages from your current CRM, rebuild forms and workflows in GoHighLevel, and test every automation before switching your ads over. Historical email and SMS conversations usually stay in the old system for reference rather than being migrated." },
      { q: "How long does a GoHighLevel setup take?", a: "A standard business setup with funnel, pipeline, calendar, speed-to-lead and reminder workflows takes 5 to 10 business days. Agency snapshots with several funnels and niche variations take longer and are scoped on a strategy call before work starts. You review everything on staging links before launch." },
      { q: "Does GoHighLevel include AI calling?", a: "GoHighLevel has native conversation AI for SMS and voice, which handles confirmations and simple questions well. For full qualification calls we connect a dedicated AI voice agent by webhook, which writes outcomes and booked slots back into the GoHighLevel pipeline and triggers the right reminders." },
    ],
    related: ["/crm-automation", "/funnels-for/hvac", "/funnels-for/real-estate", "/funnels-for/med-spas", "/compare/gohighlevel-vs-hubspot", "/glossary/gohighlevel-snapshot", "/tools/cost-per-lead-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/crm-automation",
    kind: "service",
    keyword: "crm automation agency",
    serviceType: "CRM automation",
    title: "CRM Automation Agency: Pipelines, Reminders and Nurture",
    description: "A CRM automation agency that builds pipelines, lead routing, reminders, nurture and reactivation workflows so no lead is forgotten and more calls show up.",
    eyebrow: "CRM automation",
    h1: "A CRM automation agency for pipelines, reminders and nurture",
    intro:
      "As a <strong>CRM automation agency</strong>, we build the workflows that move every lead from first contact to closed deal without manual chasing: pipeline stages, lead routing, appointment reminders, nurture sequences and reactivation. We build most systems in GoHighLevel and also automate HubSpot and other CRMs.",
    quick: {
      q: "What does CRM automation include?",
      a: "CRM automation covers the rules that act on leads without someone remembering to: instant follow-up after a form, assigning leads to reps, moving deals between pipeline stages, appointment confirmations and reminders, nurture emails and texts for leads not ready to buy, no-show recovery, and reactivation campaigns for old contacts.",
    },
    sections: [
      {
        h2: "The workflows we build",
        html: `<div class="table-wrap"><table><thead><tr><th>Workflow</th><th>Trigger</th><th>What it does</th></tr></thead><tbody>
<tr><td>Speed-to-lead</td><td>Form submitted</td><td>SMS, call and email within 60 seconds; see <a href="/speed-to-lead">speed-to-lead automation</a>.</td></tr>
<tr><td>Lead routing</td><td>New lead</td><td>Round-robin or rules-based assignment to the right rep.</td></tr>
<tr><td>Confirmation and reminders</td><td>Appointment booked</td><td>Multi-channel reminders; template in <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a>.</td></tr>
<tr><td>No-show recovery</td><td>Appointment missed</td><td>Rebook offer within 10 minutes, follow-up over 5 days.</td></tr>
<tr><td>Nurture</td><td>Not ready yet</td><td>7-day and long-term sequences; template in <a href="/templates/email-nurture-sequence">email nurture sequence</a>.</td></tr>
<tr><td>Reactivation</td><td>No activity in 90 days</td><td>Campaign to old leads and past customers.</td></tr>
</tbody></table></div>`,
      },
      {
        h2: "Why automation lifts revenue from the same ads",
        html: `<p>Most businesses lose leads through gaps, not bad ads: the call that happens three hours late, the appointment nobody confirmed, the lead who said "not yet" and never heard back. On the <a href="/milliondollarcasestudy">$1.52M consulting funnel</a>, automated follow-up and reminders lifted show rates from 62% to 88.4% and cut cost per booked call from $280 to $112 without changing the ads. Our guide to <a href="/blog/reduce-sales-call-no-show-rate-reminder-automation">reducing no-shows</a> shows the exact sequence.</p>`,
      },
      {
        h2: "Pipelines that match how you sell",
        html: `<p>A pipeline is only useful if its stages mean something. We define stages from your real process, for example new lead, contacted, qualified, booked, attended, proposal, won, and attach automations to each move. Those same stages feed reporting and the <a href="/meta-conversions-api-setup">Conversions API</a>, so the ad platform learns which leads become customers. Read more in <a href="/glossary/crm-pipeline">what is a CRM pipeline</a>.</p>`,
      },
      {
        h2: "Industries we automate",
        html: `<p>CRM automation pays back fastest where leads are valuable and time-sensitive: <a href="/funnels-for/med-spas">med spas</a>, <a href="/funnels-for/dentists">dental practices</a>, <a href="/funnels-for/real-estate">real estate</a>, <a href="/funnels-for/insurance">insurance agencies</a> and <a href="/funnels-for/home-services">home services</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "88.4%", label: "Show rate after reminder automation", href: "/milliondollarcasestudy" },
        { value: "62%", label: "MVA show-up rate, 194 clients signed", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "303", label: "Med spa clients, $74,100 revenue", href: "/case-studies/med-spa-74k-revenue-on-10k-ad-spend" },
        { value: "1,956", label: "HVAC appointments, $36,444 revenue", href: "/case-studies/hvac-36k-in-revenue" },
      ],
      more: { label: "See med spa results", href: "/case-studies/med-spa-marketing" },
    },
    faqs: [
      { q: "Which CRMs do you automate?", a: "Mostly GoHighLevel, because the CRM, SMS, email, calendar and workflows live in one account. We also automate HubSpot, Pipedrive and other CRMs with native workflows or tools like Zapier and Make, and we connect calendars, payment systems and ad platforms to whichever CRM you use." },
      { q: "How much does CRM automation cost?", a: "CRM pipelines, email and SMS workflows, booking and reminders are part of our $1,999 full suite, which also includes the funnel, an AI booking agent and tracking. Standalone automation projects for existing funnels are scoped on a strategy call based on how many workflows and integrations you need." },
      { q: "Will automated messages feel robotic?", a: "Not when they are written as one person texting another, sent from a real name, and short. We write every message for your business, branch on replies so the sequence stops when a lead responds, and keep templates plain rather than salesy, which also improves reply rates." },
      { q: "Can automation work with my sales team?", a: "Yes. Automation handles the repetitive steps, such as first contact, reminders and chasing no-shows, and hands leads to people at the right moment. Reps get tasks and notifications when a lead replies or books, so they spend their time on conversations instead of admin." },
      { q: "How do I know the automations are working?", a: "We build a dashboard with the numbers that matter: speed to first contact, contact rate, booking rate, show rate and close rate by source. Every workflow is tested end to end before launch, and we review the numbers after the first weeks of real traffic, then fix the weakest step first." },
    ],
    related: ["/gohighlevel-agency", "/speed-to-lead", "/funnels-for/med-spas", "/funnels-for/dentists", "/funnels-for/insurance", "/compare/gohighlevel-vs-hubspot", "/tools/no-show-cost-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/ai-voice-agents",
    kind: "service",
    keyword: "ai voice agents for lead qualification",
    serviceType: "AI voice agent setup",
    title: "AI Voice Agents for Lead Qualification: Setup and Scripts",
    description: "AI voice agents for lead qualification that call new leads within 60 seconds, ask your criteria, handle objections and book calls into your CRM.",
    eyebrow: "AI voice agents",
    h1: "AI voice agents for lead qualification",
    intro:
      "<strong>AI voice agents for lead qualification</strong> call every new lead within about a minute, ask the questions your best salesperson would ask, answer common objections and book qualified prospects onto your calendar. We design the script, build the knowledge base, connect the agent to your CRM and test it before it speaks to a real lead.",
    quick: {
      q: "What does an AI voice agent do for lead qualification?",
      a: "It phones each new lead seconds after they submit a form, confirms who they are, discloses it is an AI assistant, asks two to four qualifying questions such as budget, timeline and situation, answers common questions, then books qualified leads into an open slot and logs the outcome and a call summary in your CRM.",
    },
    sections: [
      {
        h2: "What we set up",
        html: `<ol>
<li><strong>Trigger.</strong> The form or ad lead fires a webhook from your CRM to the voice platform.</li>
<li><strong>Script.</strong> A four-part structure: confirm and anchor to the form, disclose, qualify, offer two slots. Our <a href="/templates/ai-voice-agent-script">AI voice agent script</a> template shows it in full.</li>
<li><strong>Knowledge base.</strong> 30 to 60 approved answers about the offer, pricing ranges, process and timing.</li>
<li><strong>Calendar.</strong> Live availability with round-robin across reps.</li>
<li><strong>Handoff rules.</strong> Warm transfer during business hours or a booked callback when the prospect asks for a person.</li>
<li><strong>Write-back.</strong> Qualification answers, objections, booked slot and a two-line summary saved to the CRM.</li>
</ol>`,
      },
      {
        h2: "The three things that decide whether prospects stay on the call",
        html: `<ul>
<li><strong>Latency under 700 milliseconds</strong> between the prospect finishing a sentence and the agent replying. Above a second, people talk over the agent or hang up.</li>
<li><strong>A clear, early disclosure</strong> that the caller is an AI assistant, followed by a reason to continue.</li>
<li><strong>Interruption handling</strong>: the agent stops talking when the prospect speaks.</li>
</ul>
<p>We cover latency, voices and objection handling in detail in <a href="/blog/ai-appointment-setter-voice-agent-cost-setup-results">AI appointment setter cost and setup</a>.</p>`,
      },
      {
        h2: "Results and costs",
        html: `<p>Across 60+ deployments: median first contact at 38 seconds, 84% of leads reached in the first minute, 2.4x more bookings from the same ads, and every after-hours lead worked. Running costs are typically $0.10 to $0.25 per minute of talk time. Run your own numbers in the <a href="/tools/ai-voice-agent-roi-calculator">AI voice agent ROI calculator</a> and see the trade-offs in <a href="/compare/ai-voice-agent-vs-human-setter">AI voice agent vs human setter</a>.</p>`,
      },
      {
        h2: "Where voice agents fit",
        html: `<p>Voice agents earn their keep where leads call several companies at once and speed decides the winner: <a href="/funnels-for/personal-injury-lawyers">personal injury intake</a>, <a href="/funnels-for/solar">solar</a>, <a href="/funnels-for/home-services">home services</a>, <a href="/funnels-for/insurance">insurance</a> and <a href="/funnels-for/mortgage">mortgage</a>. For a full-calendar booking setup, see our <a href="/ai-appointment-setter">AI appointment setter</a> service.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "387", label: "Exclusive MVA appointments in 24 days", href: "/case-studies/mva-387-appointments-booked" },
        { value: "276+", label: "OTP-verified calls in 5 days", href: "/case-studies/mva-276-otp-verified-calls-in-5-days" },
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "$1.52M", label: "Consulting funnel with AI qualification", href: "/milliondollarcasestudy" },
      ],
      more: { label: "See MVA and personal injury results", href: "/case-studies/mva-personal-injury-lead-generation" },
    },
    faqs: [
      { q: "How quickly does the AI agent call a new lead?", a: "Within about 60 seconds of the form submission during allowed calling hours, at the same moment an SMS goes out. Outside allowed hours the text is sent immediately and the call is queued for the morning. Unanswered calls retry after 10 minutes and again after two hours." },
      { q: "What does an AI voice agent cost?", a: "Platform, telephony and speech costs together usually run $0.10 to $0.25 per minute of talk time. A qualifying call averages two to four minutes, which at typical contact and booking rates works out to about $3 to $9 per booked appointment, plus the one-time build." },
      { q: "Can the AI handle objections?", a: "Yes, within limits. Each common objection, such as price, timing or 'just looking', gets a short approved answer that acknowledges it, responds from the knowledge base and returns to booking. Anything outside the knowledge base triggers the handoff rule rather than an improvised answer." },
      { q: "Do I need to tell people they are speaking to an AI?", a: "We always disclose it in the first lines of the call. It is the honest approach, many jurisdictions require it, and in our experience clear disclosure followed by a quick, useful conversation keeps more prospects on the line than trying to pass as human." },
      { q: "How do you test the agent before launch?", a: "We run at least 50 internal test calls covering normal bookings, objections, interruptions, wrong numbers and requests for a human, then fix the script and knowledge base before the agent touches a real lead. After launch we review transcripts weekly for the first month." },
    ],
    related: ["/ai-appointment-setter", "/ai-sales-funnels", "/funnels-for/personal-injury-lawyers", "/funnels-for/solar", "/funnels-for/insurance", "/compare/ai-voice-agent-vs-human-setter", "/tools/ai-voice-agent-roi-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/ai-appointment-setter",
    kind: "service",
    keyword: "ai appointment setter",
    serviceType: "AI appointment setting",
    title: "AI Appointment Setter: Book Qualified Calls 24/7",
    description: "An AI appointment setter that contacts every lead in seconds, books qualified calls 24/7, sends reminders and rebooks no-shows, built into your CRM.",
    eyebrow: "AI appointment setter",
    h1: "An AI appointment setter that books qualified calls 24/7",
    intro:
      "An <strong>AI appointment setter</strong> does the job of a setter around the clock: it contacts every new lead by call and text within seconds, checks fit, books the appointment, confirms it, reminds the prospect and rebooks anyone who misses. We build the whole booking loop, not just the first call, so more booked calls turn into attended calls.",
    quick: {
      q: "What is an AI appointment setter?",
      a: "An AI appointment setter is a voice and SMS agent that books sales or service appointments automatically. It reaches new leads within a minute at any hour, asks qualifying questions, offers open slots from your live calendar, sends confirmations and reminders, and follows up with no-shows to rebook them, logging everything in your CRM.",
    },
    sections: [
      {
        h2: "The full booking loop",
        html: `<ol>
<li><strong>Contact</strong> every lead within 60 seconds by call and text, including nights and weekends.</li>
<li><strong>Qualify</strong> with your criteria so only fitting prospects reach the calendar.</li>
<li><strong>Book</strong> one of two specific slots from live availability.</li>
<li><strong>Confirm</strong> with a confirmation gate the day before; unconfirmed slots can be released.</li>
<li><strong>Remind</strong> across SMS, email and a short voice call; see the <a href="/templates/no-show-reminder-sequence">reminder sequence template</a>.</li>
<li><strong>Rebook</strong> no-shows within 10 minutes of the missed call.</li>
</ol>`,
      },
      {
        h2: "Cost per booked appointment",
        html: `<p>The comparison that matters is cost per booking. In our deployments an AI setter costs roughly $3 to $9 per booked appointment in running costs, against $40 to $120 for a human setter once salary or commission is divided by bookings. The full breakdown, including build and maintenance, is in <a href="/blog/ai-appointment-setter-voice-agent-cost-setup-results">AI appointment setter cost</a>. Use the <a href="/tools/ai-voice-agent-roi-calculator">ROI calculator</a> with your own lead volume.</p>`,
      },
      {
        h2: "Show rates matter as much as bookings",
        html: `<p>A booked call that nobody attends is worth nothing. The AI setter runs the reminder and confirmation steps that took a high-ticket client's show rate from 62% to 88.4%, and one personal injury campaign reached a 62% show-up rate across 1,079 verified leads. Estimate what no-shows cost you today with the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a>.</p>`,
      },
      {
        h2: "Best fit",
        html: `<p>AI setters fit businesses with steady lead volume and a calendar to fill: <a href="/funnels-for/med-spas">med spas</a>, <a href="/funnels-for/dentists">dental practices</a>, <a href="/funnels-for/roofing">roofing inspections</a>, <a href="/funnels-for/consultants">consulting calls</a> and <a href="/funnels-for/gyms">gym trials</a>. The voice technology itself is covered on our <a href="/ai-voice-agents">AI voice agents</a> page, and the human alternative in <a href="/compare/ai-voice-agent-vs-human-setter">AI voice agent vs human setter</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "387", label: "MVA appointments at $19.62 each", href: "/case-studies/mva-387-appointments-booked" },
        { value: "174", label: "Coaching appointments on $2,214", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "140", label: "Webinar appointments, 29.7x ROAS", href: "/case-studies/webinar-65k-revenue-on-2184-ad-spend" },
        { value: "88.4%", label: "Show rate with reminders", href: "/milliondollarcasestudy" },
      ],
      more: { label: "See coaching and webinar results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "Can an AI appointment setter work nights and weekends?", a: "Yes, that is one of its biggest advantages. Many leads arrive in the evening or at weekends, when human setters are offline. The AI texts immediately and calls within allowed hours, so after-hours leads are booked rather than waiting until Monday morning, when they may have chosen someone else." },
      { q: "How is it different from a booking link?", a: "A booking link waits for the prospect to act. An AI setter starts the conversation, answers questions, qualifies and offers two specific times, which converts far more leads than sending a calendar link. It also confirms, reminds and rebooks, which a link never does." },
      { q: "Will it double-book my calendar?", a: "No. The agent reads live availability from your calendar, respects buffers and working hours, and books through the calendar itself, so the slot disappears for everyone else the moment it is taken. Round-robin can spread bookings across several reps automatically." },
      { q: "What happens when a lead wants to talk to a person?", a: "The agent offers a warm transfer during business hours or books a callback with a named team member. Handoff rules are set before launch, and a prospect who asks for a human is never kept talking to the AI. The conversation summary goes to that person, so the lead never repeats themselves." },
      { q: "How long does setup take?", a: "A standard AI appointment setter with script, knowledge base, calendar connection, reminders and CRM write-back takes 5 to 10 business days, including at least 50 internal test calls before it speaks to a real lead. After launch we review recordings in the first weeks and tighten the script where calls stall or end early." },
    ],
    related: ["/ai-voice-agents", "/crm-automation", "/funnels-for/med-spas", "/funnels-for/dentists", "/funnels-for/gyms", "/compare/ai-voice-agent-vs-human-setter", "/tools/no-show-cost-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/speed-to-lead",
    kind: "service",
    keyword: "speed to lead automation",
    serviceType: "Speed-to-lead automation",
    title: "Speed to Lead Automation: Contact Every Lead in 60s",
    description: "Speed to lead automation that texts, calls and emails every new lead within 60 seconds, with missed-call text-back and a 5-day nurture for unreached leads.",
    eyebrow: "Speed to lead",
    h1: "Speed to lead automation: every lead contacted in under a minute",
    intro:
      "<strong>Speed to lead automation</strong> contacts every new lead within seconds, by text, call and email, before they move on to a competitor. We build it into your CRM with missed-call text-back, round-robin routing and a 5-day sequence for leads who do not answer. Across 60+ deployments it lifted lead-to-booking rates 2.4x on the same ads.",
    quick: {
      q: "What is speed to lead automation?",
      a: "Speed to lead automation is a workflow that fires the moment a lead submits a form: an SMS from a real name, an immediate call from a rep or AI agent, and an email, all within about 60 seconds. Unanswered leads get retries and a short nurture sequence, and inbound missed calls get an instant text back.",
    },
    sections: [
      {
        h2: "Why the first minute matters",
        html: `<p>Leads who fill in a form are often comparing several companies at once. In our data, contact rate is 84% when the lead is reached in the first minute and 27% at a one-hour delay. That gap, not the ads, is where most lead generation budgets leak. The definition and benchmarks are in <a href="/glossary/speed-to-lead">what is speed to lead</a>.</p>`,
      },
      {
        h2: "The 60-second stack",
        html: `<ul>
<li><strong>Second 0 to 10:</strong> SMS from the owner or rep, referencing the request.</li>
<li><strong>Second 10 to 60:</strong> a call from the next available rep or an <a href="/ai-voice-agents">AI voice agent</a>.</li>
<li><strong>Minute 1:</strong> confirmation email with what happens next.</li>
<li><strong>Inbound calls:</strong> missed-call text-back on the business line.</li>
<li><strong>Unreached leads:</strong> retries at 10 minutes and 2 hours, then a 5-day sequence; copy is in our <a href="/templates/sms-follow-up-templates">SMS follow-up templates</a>.</li>
</ul>
<p>Step-by-step build instructions are in the <a href="/blog/speed-to-lead-automation-gohighlevel-60-second-follow-up">GoHighLevel speed-to-lead workflow guide</a>.</p>`,
      },
      {
        h2: "Results from real deployments",
        html: `<p>Median response time across 60+ live deployments is 38 seconds. Lead-to-booking rates rose 2.4x with the same ads and landing pages, and every after-hours lead was worked instead of waiting until morning. The effect is largest in industries where prospects shop several providers at once: <a href="/funnels-for/roofing">roofing</a>, <a href="/funnels-for/hvac">HVAC</a>, <a href="/funnels-for/personal-injury-lawyers">personal injury</a> and <a href="/funnels-for/mortgage">mortgage</a>.</p>`,
      },
      {
        h2: "What it needs to work",
        html: `<p>Accurate phone numbers (we use OTP verification on high-volume funnels), a CRM that can trigger texts and calls in real time, such as <a href="/gohighlevel-agency">GoHighLevel</a>, and a calendar the rep or agent can book into. Model the cost per lead you can afford with the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a>, and see why automation beats manual follow-up in <a href="/compare/ai-voice-agent-vs-human-setter">AI voice agent vs human setter</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "686", label: "Roofing leads at $5.31 in 8 days", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
        { value: "1,865", label: "MVA leads at $5.24", href: "/case-studies/mva-1865-leads-at-5-24-cpl" },
        { value: "326", label: "HVAC leads at $5.57", href: "/case-studies/hvac-326-leads-at-5-57-cpl" },
        { value: "52", label: "Roofing booked calls on $646", href: "/case-studies/roofing-52-booked-calls" },
      ],
      more: { label: "See roofing results", href: "/case-studies/roofing-lead-generation" },
    },
    faqs: [
      { q: "How fast should I respond to a new lead?", a: "Within 60 seconds whenever possible. Leads who submitted a form are usually still on their phone and often contacting several companies. In our campaigns contact rate falls from 84% in the first minute to 27% after an hour, so the first company to respond usually wins the appointment." },
      { q: "Does speed to lead need a human or AI?", a: "Either works if it is fast. During business hours a rep can take the call the automation triggers; outside hours, or at high volume, an AI voice agent covers the call. Most of our builds combine both: AI for instant coverage, people for the conversations that need them." },
      { q: "Which CRM do I need?", a: "Any CRM that can send texts and trigger calls in real time from a form. We build most speed-to-lead systems in GoHighLevel because SMS, calling, email, calendar and pipeline are in one account, but HubSpot and other CRMs can work with the right integrations." },
      { q: "What if the lead does not answer?", a: "The workflow retries the call at 10 minutes and 2 hours, keeps the SMS thread open, then moves the lead into a 5-day sequence of texts and emails with a booking link. Any reply stops the sequence and alerts a rep immediately." },
      { q: "Will instant texts annoy leads?", a: "Not when the lead has just asked to be contacted and the message is short, personal and relevant. Texts come from a real person's name, reference what the lead asked for and offer a quick call. Every message includes an opt-out, and opt-outs are honored instantly." },
    ],
    related: ["/crm-automation", "/ai-voice-agents", "/funnels-for/roofing", "/funnels-for/hvac", "/funnels-for/personal-injury-lawyers", "/compare/ai-voice-agent-vs-human-setter", "/tools/cost-per-lead-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/vsl-funnels",
    kind: "service",
    keyword: "vsl funnel",
    serviceType: "VSL funnel build",
    title: "VSL Funnel: Video Sales Letter Funnels for High-Ticket",
    description: "VSL funnels for high-ticket offers: the video sales letter script, page, application, booking calendar and reminders, built and connected in 5 to 10 days.",
    eyebrow: "VSL funnels",
    h1: "VSL funnels for high-ticket offers",
    intro:
      "A <strong>VSL funnel</strong> uses a video sales letter to explain the offer, build belief and pre-qualify prospects before they book a call. We write the VSL script, build the page, application and booking flow, and connect reminders and tracking. The VSL was a core part of the $1.52M high-ticket consulting funnel documented on this site.",
    quick: {
      q: "What is a VSL funnel?",
      a: "A VSL funnel is a sales funnel built around a video sales letter: a 5 to 20 minute video that presents the problem, the mechanism, proof and the offer. Viewers who are convinced apply or book a call, so salespeople speak to prospects who already understand the offer and have pre-qualified themselves.",
    },
    sections: [
      {
        h2: "When a VSL funnel is the right choice",
        html: `<p>VSLs work best for offers that need explanation: a new mechanism, a premium price, a buyer who must trust the expert. They work less well as the first thing cold traffic sees. Across 275+ split-tested funnels, a short diagnostic quiz before the video lifted completion sharply, which is why our default for cold traffic is a hybrid: quiz first, then a 4 to 6 minute VSL on the results page. See the data in <a href="/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026">VSL vs quiz funnel</a> and the alternative on our <a href="/quiz-funnels">quiz funnel</a> page.</p>`,
      },
      {
        h2: "What we build",
        html: `<ol>
<li><strong>The VSL script</strong>: hook, problem, mechanism, proof, offer, call to action. Our <a href="/templates/vsl-script-template">VSL script template</a> shows the structure.</li>
<li><strong>The VSL page</strong> with headline, video, proof and a single call to action.</li>
<li><strong>The application</strong> with budget, timeline and situation questions.</li>
<li><strong>Booking and reminders</strong>, including a pre-call video and confirmation step.</li>
<li><strong>Tracking</strong> of booked, attended and closed calls through the <a href="/meta-conversions-api-setup">Conversions API</a>.</li>
</ol>`,
      },
      {
        h2: "VSL length and structure",
        html: `<p>Long VSLs of 20 to 45 minutes still work for warm audiences, but cold traffic drops off quickly. We keep VSLs placed before the calendar at 8 to 12 minutes and bridge videos after a quiz at 4 to 6 minutes. The structure, not the length, is what sells: one clear problem, one mechanism, specific proof and a single next step. The term is explained in <a href="/glossary/vsl">what is a VSL</a>.</p>`,
      },
      {
        h2: "Who uses VSL funnels",
        html: `<p><a href="/funnels-for/coaches">Coaches</a>, <a href="/funnels-for/consultants">consultants</a>, agencies, <a href="/funnels-for/saas">B2B software</a> and premium services. Estimate whether your numbers support a VSL funnel with the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "VSL consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "$680K", label: "Coaching revenue on $15,483", href: "/case-studies/coaching-680k-revenue-on-15k-ad-spend" },
        { value: "$115,500", label: "Coaching revenue, 52x ROAS", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "$280 → $112", label: "Cost per booked call", href: "/milliondollarcasestudy" },
      ],
      more: { label: "See coaching and consulting results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "How long should a VSL be?", a: "For a VSL placed before the booking calendar, 8 to 12 minutes is the range we see convert best on paid traffic. Bridge videos after a quiz work at 4 to 6 minutes. Longer 20 to 45 minute VSLs can still work for warm audiences who already know the brand." },
      { q: "Do you write the VSL script?", a: "Yes. Our $1,499 and $1,999 packages include the VSL script or a detailed outline, written around your offer, proof and buyer. You record it yourself or with a videographer, and we place it on the page, connect the application and booking flow, and track drop-off." },
      { q: "Are VSL funnels still effective in 2026?", a: "Yes, when the VSL is placed after some qualification rather than as a locked wall for cold traffic. A short quiz first, then a focused video on the results page, captures far more leads while keeping the authority and pre-selling that make VSLs close well." },
      { q: "What should a VSL funnel include besides the video?", a: "A strong headline above the video, proof below it, an application with qualifying questions, a booking calendar, confirmation and reminders, a pre-call video, and tracking of booked, attended and closed calls. The follow-up after booking often decides more revenue than the video itself." },
      { q: "VSL funnel or webinar funnel?", a: "A VSL suits offers you can explain in under 15 minutes and sell on a one-to-one call. A webinar suits offers that need a longer teaching session, or when you want to present to many prospects at once and sell during or after the event." },
    ],
    related: ["/quiz-funnels", "/webinar-funnels", "/funnels-for/coaches", "/funnels-for/consultants", "/funnels-for/saas", "/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026", "/tools/funnel-conversion-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/quiz-funnels",
    kind: "service",
    keyword: "quiz funnel agency",
    serviceType: "Quiz funnel build",
    title: "Quiz Funnel Agency: Interactive Funnels That Qualify",
    description: "A quiz funnel agency building interactive quizzes, estimators and diagnostics that capture more leads, qualify them and route each to the right next step.",
    eyebrow: "Quiz funnels",
    h1: "A quiz funnel agency for interactive, qualifying funnels",
    intro:
      "As a <strong>quiz funnel agency</strong>, we build interactive funnels that ask a few easy questions before asking for contact details: diagnostic quizzes, quote estimators and eligibility checks. They convert more cold traffic than static forms, collect qualifying data on the way, and route each lead to the right offer, calendar or nurture sequence.",
    quick: {
      q: "What is a quiz funnel?",
      a: "A quiz funnel is a lead funnel that asks four to six questions, one per screen, before collecting contact details. Each small answer builds commitment, so more visitors finish, and the answers qualify and segment the lead. Qualified leads go to a booking calendar or offer; others go to a lower-priced path or nurture.",
    },
    sections: [
      {
        h2: "Why quizzes beat forms on cold traffic",
        html: `<p>Across 275+ split-tested funnels, four-to-six step quiz front ends completed at 64.8% against an 18% view-through rate for VSL-first pages, and cut cost per lead by 34%. The reason is psychology: small, easy answers first, contact details last. Full data in <a href="/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026">VSL vs quiz funnel</a>.</p>`,
      },
      {
        h2: "Types we build",
        html: `<div class="table-wrap"><table><thead><tr><th>Type</th><th>Typical questions</th><th>Used by</th></tr></thead><tbody>
<tr><td>Quote estimator</td><td>Property type, issue, timeline, address</td><td><a href="/funnels-for/roofing">Roofing</a>, <a href="/funnels-for/hvac">HVAC</a>, <a href="/funnels-for/solar">solar</a></td></tr>
<tr><td>Eligibility check</td><td>Loan type, value, credit band, timeline</td><td><a href="/funnels-for/mortgage">Mortgage</a>, <a href="/funnels-for/insurance">insurance</a></td></tr>
<tr><td>Case qualifier</td><td>Accident date, injury, fault, representation</td><td><a href="/funnels-for/personal-injury-lawyers">Personal injury</a></td></tr>
<tr><td>Treatment matcher</td><td>Concern, area, timing</td><td><a href="/funnels-for/med-spas">Med spas</a>, <a href="/funnels-for/dentists">dentists</a></td></tr>
<tr><td>Business diagnostic</td><td>Revenue, bottleneck, budget, timeline</td><td><a href="/funnels-for/coaches">Coaches</a>, <a href="/funnels-for/consultants">consultants</a></td></tr>
</tbody></table></div>`,
      },
      {
        h2: "How to write quiz questions that convert",
        html: `<ul>
<li><strong>Lead with curiosity, not qualification.</strong> The first question should be easy and interesting.</li>
<li><strong>One question per screen</strong> with a visible progress bar.</li>
<li><strong>Budget and timeline third or fourth</strong>, once momentum exists.</li>
<li><strong>Use the answers</strong> in the results page and follow-up copy.</li>
</ul>
<p>Our <a href="/templates/lead-qualification-questions">lead qualification questions</a> template lists questions by industry.</p>`,
      },
      {
        h2: "Routing and follow-up",
        html: `<p>The answers decide what happens next: qualified leads see a short bridge video and the calendar, unqualified leads get a lower-cost offer or a resource, and every lead gets <a href="/speed-to-lead">speed-to-lead follow-up</a>. Pair a quiz with a <a href="/vsl-funnels">VSL</a> for high-ticket offers. Check the economics in the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "64.8%", label: "Quiz completion vs 18% VSL view rate", href: "/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026" },
        { value: "203", label: "MVA leads via multi-step validation", href: "/case-studies/mva-203-leads" },
        { value: "537", label: "Roofing leads at $4.27", href: "/case-studies/roofing-537-leads-at-4-27-cpl" },
        { value: "142", label: "Mortgage leads at $4.31", href: "/case-studies/mortgage-142-leads-at-4-31-cpl" },
      ],
      more: { label: "Browse lead generation results", href: "/case-leadgen" },
    },
    faqs: [
      { q: "How many questions should a quiz funnel have?", a: "Four to six. Fewer than four does not build enough commitment or collect enough qualifying data; more than seven starts to feel like an application and completion falls. Put the easiest, most engaging question first and the contact details last." },
      { q: "Do quiz funnels lower lead quality?", a: "Not when the questions do real qualification work. Asking about budget, timeline and situation lets you route unqualified respondents to a lower-cost path instead of the sales calendar, which usually raises the quality of booked calls rather than lowering it." },
      { q: "Which platform do you build quizzes on?", a: "GoHighLevel's multi-step forms and surveys handle most quiz funnels and connect directly to the CRM. For high-traffic or design-heavy quizzes we build custom server-rendered pages with client-side steps, so there is no page load between questions. Either way, every answer is saved to the contact record and can trigger different follow-up." },
      { q: "Can a quiz funnel work for eCommerce?", a: "Yes. Product finder quizzes recommend the right product, bundle or routine based on the answers, which lifts conversion and average order value, especially in skincare, supplements and apparel where buyers are unsure what fits them. The answers also segment email and SMS follow-up by need." },
      { q: "How do I track where people drop off?", a: "We fire an event at each step, so you can see the exact question where visitors abandon. The weakest step gets rewritten or removed first, and the final submission is sent to the ad platform as the conversion event. Qualified completions can be sent as a separate event so ads optimize for fit, not volume." },
      { q: "How much does a quiz funnel cost?", a: "Quiz funnels are built inside our standard packages: $1,499 for design, copy and a full build, or $1,999 with CRM automation, an AI booking agent and Conversions API tracking. Ad spend and software subscriptions are paid directly by you. Most quizzes launch within 5 to 10 business days." },
    ],
    related: ["/vsl-funnels", "/sales-funnel-agency", "/funnels-for/roofing", "/funnels-for/mortgage", "/funnels-for/personal-injury-lawyers", "/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026", "/tools/cost-per-lead-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/webinar-funnels",
    kind: "service",
    keyword: "webinar funnel",
    serviceType: "Webinar funnel build",
    title: "Webinar Funnel: Registration, Show-Up and Sales",
    description: "Webinar funnels for coaches, course creators and B2B: registration page, paid or free entry, reminders that lift attendance, replay follow-up, sales calls.",
    eyebrow: "Webinar funnels",
    h1: "Webinar funnels that fill the room and sell after the event",
    intro:
      "A <strong>webinar funnel</strong> invites prospects to a live or automated presentation, gets them to attend, and turns attendees into buyers or booked calls. We build the registration page, the reminder sequence that lifts show-up, the replay and follow-up, and the tracking, for live webinars, automated webinars, challenges and online summits.",
    quick: {
      q: "What is a webinar funnel?",
      a: "A webinar funnel is a sequence that turns ad traffic into webinar registrants, attendees and buyers: a registration page, confirmation and reminder messages, the webinar itself with an offer, then replay and follow-up emails, texts and calls. Its key numbers are cost per registration, show-up rate and sales per attendee.",
    },
    sections: [
      {
        h2: "Free or paid registration?",
        html: `<p>Free webinars get more registrants; paid webinars get better ones. One client charged $4 per seat and filled <a href="/case-studies/webinar-835-paid-registrations-at-4-57">835 paid registrations at $4.57</a> each, which made the webinar profitable before the pitch because every registrant had already paid. Free events work when the follow-up is strong enough to handle lower intent.</p>`,
      },
      {
        h2: "The parts we build",
        html: `<ol>
<li><strong>Registration page</strong> with one promise, the date and a short form.</li>
<li><strong>Confirmation and reminders</strong> by email and SMS: immediately, 24 hours, 1 hour and 5 minutes before.</li>
<li><strong>The event</strong>: live, automated or hybrid, with the offer and a booking or checkout link.</li>
<li><strong>Replay and follow-up</strong> for no-shows and non-buyers, with a deadline.</li>
<li><strong>Sales calls</strong> booked from the webinar, protected by <a href="/templates/no-show-reminder-sequence">reminders</a>.</li>
</ol>`,
      },
      {
        h2: "The numbers to watch",
        html: `<p>Cost per registration, show-up rate, offer conversion and revenue per registrant. One online summit reached <a href="/case-studies/coaching-15958-summit-registrations-at-7-48">15,958 registrations at $7.48</a>; a webinar for a coaching offer produced <a href="/case-studies/webinar-65k-revenue-on-2184-ad-spend">$64,960 from $2,184 in ad spend</a>. Model your own with the <a href="/tools/roas-calculator">ROAS calculator</a>.</p>`,
      },
      {
        h2: "Who uses webinar funnels",
        html: `<p><a href="/funnels-for/coaches">Coaches</a>, course creators, <a href="/funnels-for/consultants">consultants</a> and <a href="/funnels-for/saas">B2B software</a> companies that need time to teach before they sell. For shorter explanations, a <a href="/vsl-funnels">VSL funnel</a> is usually more efficient; for low-priced offers, see the <a href="/scalelowticket">low-ticket funnel</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$64,960", label: "Webinar revenue on $2,184, 29.7x", href: "/case-studies/webinar-65k-revenue-on-2184-ad-spend" },
        { value: "835", label: "Paid registrations at $4.57", href: "/case-studies/webinar-835-paid-registrations-at-4-57" },
        { value: "15,958", label: "Summit registrations at $7.48", href: "/case-studies/coaching-15958-summit-registrations-at-7-48" },
        { value: "$115,000", label: "Webinar revenue, 7.5x ROAS", href: "/case-studies/webinar-115k-revenue-on-15k-ad-spend" },
      ],
      more: { label: "See coaching and webinar results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "Live or automated webinar?", a: "Start live: you learn which parts of the presentation land, handle real questions and close more. Once the presentation converts consistently, an automated or hybrid version scales it without you presenting every time. Many clients run live monthly and automated in between." },
      { q: "How do you increase webinar show-up rates?", a: "Short time between registration and the event, a confirmation that asks registrants to add it to their calendar, reminders by email and SMS at 24 hours, 1 hour and 5 minutes, and a reason to attend live, such as a bonus or live Q&A. Paid registration also lifts attendance." },
      { q: "What should a webinar registration page include?", a: "One clear promise, the date and time in the visitor's time zone, who it is for, what they will learn in three bullets, a short form and proof of the presenter. Everything else lowers conversion. Keep it short enough to read without scrolling on a phone." },
      { q: "What is a good cost per webinar registration?", a: "Our campaigns range from about $4.57 for paid registrations to $7.48 for a large online summit. It depends heavily on niche and offer. The more useful number is revenue per registrant, which tells you how much you can pay for each registration." },
      { q: "Do webinars work for high-ticket offers?", a: "Yes. The webinar teaches and builds trust, then invites qualified attendees to book a call. Several of our coaching results came from webinars selling programs priced in the thousands, with the sale closed on a call booked during or after the event." },
      { q: "How much does a webinar funnel cost to build?", a: "Webinar funnels fit our standard packages: $1,499 for the registration page, confirmation page, copy and reminder sequence, or $1,999 with CRM automation, an AI booking agent for post-webinar calls and Conversions API tracking. Ad spend and webinar software are paid directly by you, so you keep ownership of every asset." },
    ],
    related: ["/vsl-funnels", "/quiz-funnels", "/funnels-for/coaches", "/funnels-for/consultants", "/funnels-for/saas", "/compare/clickfunnels-vs-kajabi", "/tools/roas-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/meta-conversions-api-setup",
    kind: "service",
    keyword: "meta conversions api setup",
    serviceType: "Meta Conversions API setup",
    title: "Meta Conversions API Setup for Lead Gen and eCommerce",
    description: "Meta Conversions API setup done for you: server-side events, deduplication, CRM stage events and Event Match Quality above 8, so ads find real buyers.",
    eyebrow: "Meta Conversions API",
    h1: "Meta Conversions API setup for lead generation and eCommerce",
    intro:
      "Our <strong>Meta Conversions API setup</strong> sends conversion events from your server and CRM directly to Meta, alongside the browser pixel, so the ad algorithm sees the results that matter: qualified leads, booked calls, signed clients and purchases. In our lead generation accounts it recovered 31% more events than the pixel alone.",
    quick: {
      q: "What does a Meta Conversions API setup involve?",
      a: "It connects your website and CRM to Meta's servers: events such as Lead, QualifiedLead, Schedule and Purchase are sent server-side with hashed email and phone, deduplicated against the pixel with a shared event ID, and checked for Event Match Quality. Ads can then optimize for real outcomes instead of form fills.",
    },
    sections: [
      {
        h2: "Why the pixel alone is no longer enough",
        html: `<p>Browser privacy settings, ad blockers and short cookie lifetimes mean the pixel misses a large share of conversions. In our accounts, adding the Conversions API recovered 31% more events and cut cost per qualified lead 37% after 21 days of offline events. The terms are defined in <a href="/glossary/conversions-api">what is the Meta Conversions API</a> and <a href="/glossary/meta-pixel">what is the Meta pixel</a>.</p>`,
      },
      {
        h2: "What we set up",
        html: `<ol>
<li><strong>The event ladder.</strong> For lead generation: Lead, QualifiedLead, Schedule, Attended, Purchase. For eCommerce: ViewContent, AddToCart, InitiateCheckout, Purchase with value.</li>
<li><strong>Server-side sending</strong> from your site, tag manager or CRM workflows.</li>
<li><strong>Deduplication</strong> with a shared event ID so browser and server events are counted once.</li>
<li><strong>Customer information parameters</strong>: hashed email and phone, click ID, IP and user agent, to push Event Match Quality above 8.</li>
<li><strong>Offline CRM events</strong> for booked, attended and won deals.</li>
<li><strong>Google Enhanced Conversions</strong> mirrored where Google Ads is used.</li>
</ol>
<p>The full technical walkthrough is in our <a href="/blog/meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026">Conversions API guide for lead generation</a>.</p>`,
      },
      {
        h2: "Who needs it most",
        html: `<p>Any account where the valuable event happens after the form: <a href="/funnels-for/personal-injury-lawyers">signed cases</a>, <a href="/funnels-for/mortgage">funded loans</a>, <a href="/funnels-for/roofing">signed roofing contracts</a>, and <a href="/funnels-for/ecommerce">eCommerce purchases</a> where value-based bidding needs accurate revenue. After setup, check whether ads are profitable with the <a href="/tools/roas-calculator">ROAS calculator</a>.</p>`,
      },
      {
        h2: "What to expect after setup",
        html: `<p>Expect a learning period of about 14 days while Meta adjusts to the new signals. Cost per lead can rise slightly at first when the campaign optimizes for qualified leads instead of all leads; cost per signed client or purchase is the number that should fall. Platform choices that affect tracking are discussed in <a href="/compare/gohighlevel-vs-hubspot">GoHighLevel vs HubSpot</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "+31%", label: "Events recovered vs pixel only", href: "/blog/meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026" },
        { value: "19.09x", label: "ROAS on a signed-case optimized MVA campaign", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "$280 → $112", label: "Cost per booked call with offline events", href: "/milliondollarcasestudy" },
        { value: "$2.3M", label: "Shopify sales at 11.6x ROAS", href: "/case-studies/shopify-store-2-3m-in-sales-at-11-6x-roas" },
      ],
      more: { label: "See eCommerce results", href: "/case-ecom" },
    },
    faqs: [
      { q: "Do I still need the Meta pixel with the Conversions API?", a: "Yes. Meta recommends running both: the pixel captures browser events in real time, the Conversions API sends the same events from the server plus events that never happen in a browser, such as a signed contract. A shared event ID deduplicates them so nothing is counted twice." },
      { q: "What is Event Match Quality?", a: "Event Match Quality is Meta's score, from 0 to 10, for how well an event can be matched to a Meta account, based on the customer information sent with it. Hashed email, phone, click ID and IP raise it. We aim for 8 or higher, which improves attribution and optimization." },
      { q: "Can my CRM send events to Meta?", a: "Yes. GoHighLevel workflows can send pipeline stage changes, such as qualified, booked, attended and won, to Meta as server events through a webhook or native integration. HubSpot and other CRMs can do the same through integrations or a server-side tag manager." },
      { q: "How long until results improve?", a: "Allow about 14 days of learning after the new events start flowing, longer at low volume. In our lead generation accounts, cost per qualified lead fell 37% after 21 days of offline events, but the first week can look worse as the campaign re-optimizes." },
      { q: "Is the Conversions API privacy compliant?", a: "Customer data is hashed before it is sent, and only data the customer provided and consented to sharing should be used. You still need a privacy policy covering advertising measurement, and consent rules in your region apply. We set it up to send the minimum data needed." },
    ],
    related: ["/crm-automation", "/funnels-for/ecommerce", "/funnels-for/personal-injury-lawyers", "/funnels-for/mortgage", "/blog/meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026", "/compare/gohighlevel-vs-hubspot", "/tools/roas-calculator"],
    parent: HUB,
    updated: U,
  },
];
