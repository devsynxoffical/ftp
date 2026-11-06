import type { SeoPage } from "./types";

const U = "2026-11-06";
const SETTER = { name: "AI appointment setter", path: "/ai-appointment-setter" };
const VOICE = { name: "AI voice agents", path: "/ai-voice-agents" };

export const AI_NICHE_PAGES: SeoPage[] = [
  {
    path: "/ai-appointment-setter/real-estate",
    kind: "service",
    keyword: "ai appointment setter for real estate",
    serviceType: "AI appointment setting for real estate agents",
    title: "AI Appointment Setter for Real Estate Agents and Teams",
    description: "An AI appointment setter for real estate that calls portal and Meta leads in seconds, qualifies buyers and sellers, and books showings into your CRM.",
    eyebrow: "AI appointment setter · Real estate",
    h1: "An AI appointment setter for real estate agents, teams and brokerages",
    intro:
      "An <strong>AI appointment setter for real estate</strong> calls and texts every new buyer and seller lead within a minute, asks the questions an inside sales agent would ask, and books showings, buyer consultations and listing appointments straight onto an agent's calendar. It works portal leads, Meta lead forms and website inquiries at 9 p.m. on a Sunday as reliably as at 10 a.m. on a Tuesday.",
    quick: {
      q: "What does an AI appointment setter do for a real estate team?",
      a: "It contacts each new portal, Meta or website lead within about 60 seconds, discloses that it is an AI assistant, asks timeline, area, budget, pre-approval and whether they need to sell first, then books a showing, buyer consult or listing appointment with the right agent and writes the answers into Follow Up Boss or GoHighLevel.",
    },
    sections: [
      {
        h2: "Why real estate leads go cold so fast",
        html: `<p>A buyer who fills in a portal form is usually looking at the same listing on two or three sites and will often talk to whichever agent calls first. Agents are at showings, closings and dinner when most leads arrive, so the first call too often happens hours later. Our deployments reach a median first contact of 38 seconds, with 84% of leads reached inside the first minute and 2.4x more bookings from the same lead flow. The mechanics are explained on our <a href="/speed-to-lead">speed-to-lead</a> page.</p>
<p>The AI setter does not replace the agent relationship. It holds the lead warm, gathers facts and puts a confirmed time on the calendar so the agent's first conversation is a real one.</p>`,
      },
      {
        h2: "Buyer and seller qualification questions",
        html: `<p>The script branches on the first answer: buying, selling, or both. Each branch asks four or five questions at most, because long interrogations end calls.</p>
<div class="table-wrap"><table>
<thead><tr><th>Buyer branch</th><th>Seller branch</th></tr></thead>
<tbody>
<tr><td>When are you hoping to move?</td><td>When would you like to be moved out?</td></tr>
<tr><td>Which neighborhoods or school zones?</td><td>What is the property address and type?</td></tr>
<tr><td>What price range feels comfortable?</td><td>Have you had a valuation recently?</td></tr>
<tr><td>Are you pre-approved, or would a lender intro help?</td><td>Do you need to sell before you buy?</td></tr>
<tr><td>Are you working with an agent already?</td><td>Is the home listed with anyone now?</td></tr>
</tbody></table></div>
<p>"Selling to buy" leads are tagged for both pipelines because they are usually the most valuable contact a team gets. The full script structure is in our <a href="/templates/ai-voice-agent-script">AI voice agent script template</a>.</p>`,
      },
      {
        h2: "Booking showings and listing appointments",
        html: `<ul>
<li><strong>Showings:</strong> the agent offers two specific times tied to the property the lead asked about, then sends the address and agent name by SMS.</li>
<li><strong>Buyer consultations:</strong> for leads with a long timeline or no pre-approval, a 15-minute call is booked instead of a showing.</li>
<li><strong>Listing appointments:</strong> seller leads are booked with the listing specialist or team lead, with the address and motivation already in the CRM.</li>
<li><strong>Routing:</strong> round-robin by area, price band or language, matching how your team already splits leads.</li>
</ul>
<p>Reminders go out by text and email before every appointment, and a missed showing triggers a rebooking text within minutes.</p>`,
      },
      {
        h2: "ISA replacement or ISA support",
        html: `<p>Teams use the AI setter in two ways. Solo agents and small teams use it as their only inside sales agent. Larger teams keep human ISAs for long-term nurture and use the AI for the first minute, nights, weekends and overflow, so the human ISA starts each day with qualified, already-booked leads rather than a queue of cold ones. The trade-offs are laid out in <a href="/compare/ai-voice-agent-vs-human-setter">AI voice agent vs human setter</a>.</p>
<p>Running costs are typically $0.10 to $0.25 per minute of talk time, which in our deployments works out to about $3 to $9 per booked appointment, against $40 to $120 when a human setter's pay is divided by bookings.</p>`,
      },
      {
        h2: "CRM sync, consent and AI disclosure",
        html: `<p>We connect the agent to <strong>Follow Up Boss</strong> or <strong>GoHighLevel</strong>, so every call creates or updates the contact, adds the answers as fields, attaches a transcript summary and moves the lead to the right stage. Agents see one record, not two systems.</p>
<p>Outbound AI calls to mobile numbers fall under the TCPA in the US, and the FCC treats AI-generated voices as artificial voices, so the lead form must capture clear consent to be contacted by automated and AI calls and texts. We check your form language, honor quiet hours and opt-outs, and have the agent state that it is an AI assistant in its opening line. Your broker or attorney should approve the final consent text. For the funnel side, see <a href="/funnels-for/real-estate">real estate funnels</a>.</p>`,
      },
    ],
    proof: {
      heading: "Real estate campaign results",
      items: [
        { value: "247", label: "Real estate leads at $16.48 each", href: "/case-studies/real-estate-247-leads-at-16-48-cpl" },
        { value: "$11.57", label: "Cost per lead across 69 leads", href: "/case-studies/real-estate-69-leads-at-11-57-cpl" },
        { value: "10", label: "Appointments booked from one campaign", href: "/case-studies/real-estate-10-appointments-booked" },
        { value: "38 sec", label: "Median first contact, 60+ deployments", href: "/speed-to-lead" },
      ],
      more: { label: "See all real estate results", href: "/case-studies/real-estate-lead-generation" },
    },
    faqs: [
      { q: "Will buyers be put off by talking to an AI?", a: "Some will ask for a person, and the agent hands them over or books a callback immediately. Most buyers care about getting a fast answer and a showing time. A clear disclosure in the first line, followed by questions about the home they asked about, keeps far more people on the call than a voicemail four hours later." },
      { q: "Does it work with Zillow, Realtor.com and other portal leads?", a: "Yes, as long as the leads land in your CRM. Portals deliver leads into Follow Up Boss, GoHighLevel or your lead router, and that new-contact event triggers the AI call and text. Meta lead form and website leads use the same trigger, so every source gets the same speed." },
      { q: "Can it book listing appointments as well as showings?", a: "Yes. Seller leads follow their own branch, collecting the address, timeline and whether they need to sell before buying, then book a listing consultation with the right agent. The agent walks into that appointment knowing the motivation and the property details, which makes the first meeting far more productive." },
      { q: "Can the AI give a home valuation or price advice?", a: "No, and we configure it not to. It can say that an agent will prepare a market analysis and book the time to review it. Pricing opinions, contract questions and negotiation stay with licensed agents, which protects the team and keeps the AI inside a narrow, reliable job." },
      { q: "What does an AI appointment setter for real estate cost?", a: "Setup is part of our $1,999 complete suite, which includes the CRM, automation, AI booking agent and tracking, built in 5 to 10 business days. Running costs are usually $0.10 to $0.25 per minute, roughly $3 to $9 per booked appointment depending on lead quality and contact rates." },
      { q: "Do my agents need to change how they work?", a: "Very little. Booked appointments appear on their existing calendars and the lead record shows the answers and a call summary. The main change is that agents stop chasing fresh leads and start each day with conversations already scheduled, which most agents are glad to give up." },
    ],
    related: ["/ai-appointment-setter", "/funnels-for/real-estate", "/case-studies/real-estate-lead-generation", "/speed-to-lead", "/templates/ai-voice-agent-script", "/compare/ai-voice-agent-vs-human-setter", "/ai-appointment-setter/insurance"],
    parent: SETTER,
    updated: U,
  },
  {
    path: "/ai-appointment-setter/insurance",
    kind: "service",
    keyword: "ai appointment setter for insurance",
    serviceType: "AI appointment setting for insurance agencies",
    title: "AI Appointment Setter for Insurance Agents and Agencies",
    description: "An AI appointment setter for insurance that calls final expense, life, Medicare and P&C leads in seconds, pre-qualifies and books licensed agents.",
    eyebrow: "AI appointment setter · Insurance",
    h1: "An AI appointment setter for insurance agents and agencies",
    intro:
      "An <strong>AI appointment setter for insurance</strong> calls every new final expense, life, Medicare or auto and home lead within a minute, confirms the basics, and books a call or appointment with a licensed agent who is licensed in that lead's state. It never quotes, never recommends a policy and never pretends to be an agent. Its job is to make sure the licensed producer's time goes to people who are ready to talk.",
    quick: {
      q: "How does an AI appointment setter work for insurance leads?",
      a: "The AI calls and texts each new lead within about 60 seconds, says it is an AI assistant, confirms the person requested information, checks state, age range, coverage type and a few non-medical fit questions, then books a time with an agent licensed in that state. Pricing, health underwriting and plan advice stay with the licensed agent.",
    },
    sections: [
      {
        h2: "Why insurance leads need a first call in seconds",
        html: `<p>Insurance leads, especially from Meta and shared vendors, are often contacted by several agencies within the hour. The agency that reaches them first and books a specific time usually gets the conversation. In our deployments the AI reaches a median first contact of 38 seconds and lifts lead-to-booking 2.4x on the same lead flow. Our <a href="/ai-voice-agents">AI voice agents</a> page covers the underlying technology, latency and handoffs.</p>`,
      },
      {
        h2: "What the AI asks, by line of business",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Line</th><th>Typical pre-qualification</th></tr></thead>
<tbody>
<tr><td>Final expense</td><td>Age range, state, whether they want to cover burial costs or leave money to family, best time to talk</td></tr>
<tr><td>Term or whole life</td><td>Coverage amount they have in mind, who it would protect, state, tobacco use yes or no</td></tr>
<tr><td>Medicare</td><td>Whether they are turning 65 or already enrolled, state and ZIP, preference for phone or in-person, consent to a scheduled call</td></tr>
<tr><td>Auto and home</td><td>Renewal date, vehicles or property type, current carrier, ZIP</td></tr>
</tbody></table></div>
<p>Detailed health questions belong in the agent's application process, not the AI call. At most, the AI asks whether the lead is comfortable discussing health on the agent call. Our <a href="/templates/lead-qualification-questions">lead qualification questions</a> template shows how to keep the list short.</p>`,
      },
      {
        h2: "Booking with licensed agents by state",
        html: `<p>The agent reads the lead's state and books only from producers licensed there. Agencies with captive and independent agents can route by carrier appointment too. Each booking carries the answers, the lead source and a short summary, and the producer receives an SMS alert with a one-tap link to the record. Unanswered leads get a retry after 10 minutes, a second retry after two hours and a text with two time options, all logged in the CRM.</p>`,
      },
      {
        h2: "Compliance boundaries we build in",
        html: `<ul>
<li><strong>TCPA consent.</strong> AI-voice calls to mobile numbers need prior express written consent in the US. We review form wording and keep the consent record and timestamp on the contact.</li>
<li><strong>AI disclosure.</strong> The first line states that the caller is an AI assistant working for your agency.</li>
<li><strong>No quoting by AI.</strong> The agent cannot give prices, compare carriers, discuss benefits or recommend a plan. Those questions trigger a booking with a licensed agent.</li>
<li><strong>Medicare rules.</strong> CMS marketing rules restrict unsolicited contact and require the scope of a sales appointment to be agreed and documented in advance, with timing requirements of their own. We keep Medicare calls to scheduling with consented leads and leave the scope of appointment to your agents and compliance team.</li>
<li><strong>State rules and quiet hours.</strong> Calling windows and do-not-call scrubbing are set per state.</li>
</ul>
<p>We set up the workflow; your compliance officer or counsel signs off on scripts before launch.</p>`,
      },
      {
        h2: "Cost per booked insurance appointment",
        html: `<p>Running costs are typically $0.10 to $0.25 per minute, about $3 to $9 per booked appointment, compared with $40 to $120 when a human setter's pay is divided by bookings. With final expense leads costing $7.79 each in one documented campaign, the setter's cost per booking is small next to the lead cost it protects. See how we build the funnels that feed it on <a href="/funnels-for/insurance">insurance funnels</a>, and model your own numbers with the <a href="/tools/ai-voice-agent-roi-calculator">AI voice agent ROI calculator</a>.</p>`,
      },
    ],
    proof: {
      heading: "Insurance and mortgage campaign results",
      items: [
        { value: "2,440", label: "Final expense leads at $7.79 each", href: "/case-studies/final-expense-2440-leads-at-7-79-cpl" },
        { value: "55", label: "Final expense leads, video walkthrough", href: "/case-studies/final-expense-55-leads" },
        { value: "$65K+", label: "Mortgage revenue on $5,300 ad spend", href: "/case-studies/mortgage-65k-plus-revenue-on-5300-ad-spend" },
        { value: "492", label: "Mortgage leads at $5.23 each", href: "/case-studies/mortgage-492-leads-at-5-23-cpl" },
      ],
      more: { label: "See mortgage and insurance results", href: "/case-studies/mortgage-insurance-lead-generation" },
    },
    faqs: [
      { q: "Can the AI quote premiums or recommend a policy?", a: "No. We configure it to decline any request for prices, carrier comparisons or plan recommendations and to offer a time with a licensed agent instead. Quoting and advice require a license and depend on underwriting details the AI should not collect, so keeping it to scheduling protects both the consumer and your agency." },
      { q: "Does it work for Medicare leads?", a: "It can schedule calls with Medicare leads who have consented to be contacted, but Medicare marketing is tightly regulated and the rules change. We keep the AI to confirming interest and booking a time, and your compliance team decides the scope-of-appointment process and wording before any Medicare script goes live." },
      { q: "How does it handle health questions?", a: "It avoids them. Final expense and life underwriting depends on health history, which is sensitive and belongs on the licensed agent's call. The AI may ask whether the person is comfortable discussing health with the agent, and if they volunteer details it notes that they want to discuss health and moves on to booking." },
      { q: "Can it route leads to agents licensed in the right state?", a: "Yes. Each producer's calendar is tagged with the states they are licensed in, and the AI offers slots only from matching producers. Agencies can add carrier appointments or language as extra routing rules, so a Spanish-speaking final expense lead in Texas reaches the right person first time." },
      { q: "What if a lead says they never asked to be contacted?", a: "The AI apologizes, confirms the opt-out, ends the call and marks the contact do-not-call in the CRM so no further calls or texts go out. We also flag the lead source, because repeated complaints from one vendor usually point to weak consent capture that should be fixed upstream." },
      { q: "What does setup cost for an insurance agency?", a: "The AI setter is part of our $1,999 complete suite with CRM, automation and tracking, delivered in 5 to 10 business days including test calls. After launch you pay the voice platform and telephony directly, usually $0.10 to $0.25 per minute of talk time." },
    ],
    related: ["/ai-appointment-setter", "/funnels-for/insurance", "/case-studies/mortgage-insurance-lead-generation", "/ai-voice-agents", "/templates/lead-qualification-questions", "/funnels-for/mortgage", "/ai-appointment-setter/real-estate"],
    parent: SETTER,
    updated: U,
  },
  {
    path: "/ai-voice-agents/dental-clinics",
    kind: "service",
    keyword: "ai voice agent for dental clinics",
    serviceType: "AI voice agent for dental practices",
    title: "AI Voice Agent for Dental Clinics: Calls, Booking, Recall",
    description: "An AI voice agent for dental clinics that answers missed and after-hours calls, books new patients, runs recall and reminders, and hands off insurance.",
    eyebrow: "AI voice agents · Dental",
    h1: "An AI voice agent for dental clinics",
    intro:
      "An <strong>AI voice agent for dental clinics</strong> answers the calls your front desk cannot get to, books new patients into open chairs, calls overdue recall patients and reminds everyone about tomorrow's appointments. It handles scheduling only. Clinical questions, treatment advice and insurance specifics go to your team, and the setup is built with patient privacy in mind from the first call.",
    quick: {
      q: "What can an AI voice agent do for a dental clinic?",
      a: "It answers overflow, lunch-hour and after-hours calls, books new patients and existing patients into real openings in your schedule, calls overdue recall and inactive patients, confirms appointments the day before and rebooks no-shows. It does not give clinical advice or confirm insurance coverage; those calls are handed to your front desk with a summary.",
    },
    sections: [
      {
        h2: "Where dental practices lose patients on the phone",
        html: `<ul>
<li><strong>Missed calls during busy hours.</strong> When the front desk is checking patients in, the phone rings out, and a new patient often calls the next practice on the list.</li>
<li><strong>After-hours and weekend calls.</strong> Toothaches and booking intentions do not wait for Monday.</li>
<li><strong>Online form leads.</strong> New-patient offers from ads and the website need a call back within minutes, not at the end of the day.</li>
<li><strong>Recall gaps.</strong> Patients overdue for cleanings rarely rebook on their own.</li>
</ul>
<p>The AI agent answers the call, or calls the form lead back within about a minute, and puts a time on the schedule. The patient-acquisition funnel that feeds it is described on <a href="/funnels-for/dentists">funnels for dentists</a>.</p>`,
      },
      {
        h2: "New-patient calls and booking into your schedule",
        html: `<ol>
<li>Greets the caller with the practice name and states that it is an AI assistant.</li>
<li>Asks whether they are new or existing, the reason for the visit in plain terms (cleaning, checkup, a specific problem), and preferred days.</li>
<li>Offers two real openings that match the appointment type and length, then books it.</li>
<li>Texts the confirmation, address, parking notes and new-patient forms link.</li>
<li>Flags anything urgent, such as swelling or severe pain, for a same-day callback from staff, and directs emergencies to emergency services.</li>
</ol>
<p>Booking writes directly into your practice calendar where the practice management system offers an integration, or into a synced booking calendar your team confirms. We confirm which route your software supports before quoting.</p>`,
      },
      {
        h2: "Recall, reactivation and no-show reminders",
        html: `<p>Outbound calls are where the voice agent fills chairs that would otherwise sit empty. It works lists of patients overdue for hygiene visits or inactive for over a year, offers openings, and books them. For upcoming appointments it runs a confirm-and-remind sequence by SMS and a short voice call, and calls no-shows the same day to rebook. Our <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a> lays out the timing, and the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a> shows what an empty chair hour costs your practice. With 3-channel reminders, clients across industries have reached show-up rates of up to 88%.</p>`,
      },
      {
        h2: "Insurance questions and handoffs",
        html: `<p>Callers often ask whether the practice takes their plan or what a procedure will cost. The agent can read a list of plans the practice accepts if you give it one, but it does not verify benefits, estimate out-of-pocket costs or discuss treatment. Those questions trigger a handoff: a warm transfer if staff are free, or a callback booked with a note of the carrier and the question, so your team calls back prepared.</p>`,
      },
      {
        h2: "HIPAA-aware setup and cost",
        html: `<p>Calls with patients involve protected health information, so we build on voice, telephony and CRM vendors that will sign a Business Associate Agreement with the practice, limit what the agent collects to scheduling details, and keep recordings and transcripts in access-controlled systems. Your practice remains responsible for its own HIPAA program and should review each vendor's BAA.</p>
<p>Running costs are typically $0.10 to $0.25 per minute of talk time. Setup is included in our $1,999 complete suite and takes 5 to 10 business days. For the voice technology itself, see <a href="/ai-voice-agents">AI voice agents</a>.</p>`,
      },
    ],
    proof: {
      heading: "Appointment-based results from med spas (we have no dental case studies yet)",
      items: [
        { value: "$639K", label: "Med spa revenue from 178 clients", href: "/case-studies/med-spa-639k-in-revenue" },
        { value: "19.8x", label: "Med spa ROAS on $590 ad spend", href: "/case-studies/med-spa-12k-revenue-on-590-ad-spend" },
        { value: "303", label: "Med spa clients, $74,100 revenue", href: "/case-studies/med-spa-74k-revenue-on-10k-ad-spend" },
        { value: "1,011", label: "Med spa leads on $4,703 ad spend", href: "/case-studies/med-spa-1011-leads" },
      ],
      more: { label: "See med spa results", href: "/case-studies/med-spa-marketing" },
    },
    faqs: [
      { q: "Do you have dental case studies?", a: "Not yet, and we will not pretend otherwise. The closest documented results we have come from med spas, which also sell booked appointments to local patients and depend on reminders and rebooking. Those campaigns are shown above. We are happy to scope a dental pilot with clear metrics agreed before launch." },
      { q: "Is the AI voice agent HIPAA compliant?", a: "HIPAA compliance belongs to the practice and its vendors together, not to a single tool. We use voice and CRM vendors that sign Business Associate Agreements, collect only scheduling information and restrict access to recordings. Your practice should review those agreements and include the agent in its own privacy policies and risk assessment." },
      { q: "Will the AI give medical or dental advice?", a: "No. It is configured to decline clinical questions, including whether a symptom is serious or what treatment someone needs. It books the earliest suitable appointment, flags urgent symptoms for a same-day staff callback, and tells callers with emergencies such as heavy bleeding or facial swelling affecting breathing to call emergency services." },
      { q: "Can it book directly into our practice management software?", a: "Often, but it depends on the software. Some practice management systems offer scheduling integrations that let the agent read openings and write appointments; others need a synced booking calendar that staff confirm. We check your system before quoting so you know exactly how booking will work." },
      { q: "Will patients mind talking to an AI?", a: "Most callers want to book quickly, and a voice agent that answers on the first ring beats voicemail. The agent says it is an AI assistant at the start and offers a person whenever asked. Existing patients who prefer the front desk can always be transferred or called back." },
    ],
    related: ["/ai-voice-agents", "/funnels-for/dentists", "/case-studies/med-spa-marketing", "/templates/no-show-reminder-sequence", "/tools/no-show-cost-calculator", "/ai-appointment-setter", "/funnels-for/med-spas"],
    parent: VOICE,
    updated: U,
  },
];
