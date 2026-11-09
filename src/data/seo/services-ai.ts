import type { SeoPage } from "./types";

const HUB = { name: "Services", path: "/services" };
const U = "2026-11-09";

export const AI_SERVICE_PAGES: SeoPage[] = [
  {
    path: "/ai-agents",
    kind: "service",
    keyword: "ai agents for business",
    serviceType: "AI agent development for business",
    title: "AI Agents for Business: Voice, Chat, Booking and More",
    description: "AI agents for business that answer calls, reply to chats, book appointments and revive old leads, built into your CRM with clear costs and compliance.",
    eyebrow: "AI agents",
    h1: "AI agents for business: which one you need and how they work together",
    intro:
      "<strong>AI agents for business</strong> are software assistants that hold real conversations with your leads and customers by phone, text and chat, then take an action: book a call, log a note, route a request or move a deal forward. We build five kinds, all wired into one CRM. This page explains what each does, which one to start with, what it costs to run and the rules we follow so the agents stay honest and compliant.",
    quick: {
      q: "Which AI agent should a business start with?",
      a: "Start where leads are leaking today. If new form leads wait for a callback, start with an AI voice agent or appointment setter. If calls go unanswered, start with an AI receptionist. If prospects message you on chat or social, start with a chat agent. If you have a large list of old leads, run a reactivation campaign.",
    },
    sections: [
      {
        h2: "The five AI agents we build",
        html: `<ul>
<li><strong><a href="/ai-voice-agents">AI voice agent</a>:</strong> calls new leads within about a minute, qualifies them with your questions and books or transfers the good ones.</li>
<li><strong><a href="/ai-appointment-setter">AI appointment setter</a>:</strong> runs the whole booking loop by call and SMS, including confirmations, reminders and rebooking no-shows.</li>
<li><strong><a href="/ai-chat-agent">AI chat agent</a>:</strong> replies to website chat, SMS, Facebook Messenger, Instagram DMs and WhatsApp, answers questions from an approved knowledge base and books calls.</li>
<li><strong><a href="/ai-receptionist">AI receptionist</a>:</strong> answers inbound calls 24/7, texts back missed callers, books after-hours appointments and transfers urgent calls to staff.</li>
<li><strong><a href="/lead-reactivation">Lead reactivation</a>:</strong> AI SMS and voice campaigns that work through old leads and past customers already sitting in your CRM.</li>
</ul>
<p>They are not separate products bolted together. Each one reads and writes the same contact record, so a lead who chats on Instagram, misses a call and later answers a reactivation text is one person with one history.</p>`,
      },
      {
        h2: "When to use which agent",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Your problem</th><th>Agent to start with</th><th>Main channel</th></tr></thead>
<tbody>
<tr><td>Form leads wait hours for a callback</td><td>AI voice agent</td><td>Outbound calls + SMS</td></tr>
<tr><td>Leads book but do not show up</td><td>AI appointment setter</td><td>SMS, email, short voice reminders</td></tr>
<tr><td>Prospects message on chat or social and wait</td><td>AI chat agent</td><td>Website chat, SMS, Messenger, Instagram, WhatsApp</td></tr>
<tr><td>The phone rings out after hours or when busy</td><td>AI receptionist</td><td>Inbound calls</td></tr>
<tr><td>Thousands of old leads nobody has contacted</td><td>Lead reactivation</td><td>Outbound SMS, then calls to responders</td></tr>
</tbody></table></div>
<p>Most clients start with one agent and add a second once the first is stable. If your problem is response time in general, read <a href="/speed-to-lead">speed to lead automation</a> first, because every agent here depends on it.</p>`,
      },
      {
        h2: "How the agents connect to your CRM",
        html: `<p>We build on <a href="/gohighlevel-agency">GoHighLevel</a> in most cases, because calling, SMS, chat channels, calendars and the <a href="/glossary/crm-pipeline">CRM pipeline</a> live in one account. Each agent follows the same pattern:</p>
<ol>
<li><strong>Trigger:</strong> a form, an inbound call or message, a pipeline stage or a list upload starts the conversation.</li>
<li><strong>Context:</strong> the agent reads the contact record, the source and an approved knowledge base.</li>
<li><strong>Action:</strong> it books into a live calendar, tags the contact, moves the pipeline stage or hands off to a person.</li>
<li><strong>Write-back:</strong> answers, a short summary and the outcome are saved to the contact so your team sees everything.</li>
</ol>
<p>The workflows around the agents are covered on our <a href="/crm-automation">CRM automation</a> page.</p>`,
      },
      {
        h2: "What AI agents cost to run",
        html: `<p>The builds are included in our $1,999 complete suite, which covers the CRM, automation, AI booking agent and tracking. Usage is billed by the platforms directly to you. Voice minutes typically run $0.10 to $0.25 per minute of talk time. In our deployments that works out to roughly $3 to $9 per booked appointment, against $40 to $120 per booking for human setters once pay is divided by bookings. Text and chat usage is billed per message or per conversation by the platform and is usually small next to voice. Model your own volume in the <a href="/tools/ai-voice-agent-roi-calculator">AI voice agent ROI calculator</a> and see the trade-offs in <a href="/compare/ai-voice-agent-vs-human-setter">AI voice agent vs human setter</a>.</p>`,
      },
      {
        h2: "Compliance rules every agent follows",
        html: `<ul>
<li><strong>AI disclosure:</strong> voice agents say they are an AI assistant in the opening lines; chat agents do not pretend to be a named human.</li>
<li><strong>Consent:</strong> outbound calls and texts only go to contacts who gave permission, with the consent source stored on the record.</li>
<li><strong>Opt-out:</strong> every text explains how to stop messages, and "stop", "unsubscribe" or "do not call" is honored immediately across channels.</li>
<li><strong>Calling hours and handoff:</strong> calls respect local time windows, and anyone who asks for a person is routed to one.</li>
</ul>
<p>These rules are summaries of good practice, not legal advice. Your counsel should confirm the rules for your industry and region.</p>`,
      },
      {
        h2: "Industry and regional versions",
        html: `<p>We have written up setups for specific markets: the <a href="/ai-appointment-setter/real-estate">AI appointment setter for real estate</a>, the <a href="/ai-appointment-setter/insurance">AI appointment setter for insurance</a>, <a href="/ai-voice-agents/dental-clinics">AI voice agents for dental clinics</a> and the <a href="/ai-voice-agent-dubai">AI voice agent for Dubai businesses</a>. Our scripts start from the <a href="/templates/ai-voice-agent-script">AI voice agent script</a> template, and the background is in <a href="/glossary/ai-voice-agent">what is an AI voice agent</a>.</p>`,
      },
    ],
    proof: {
      heading: "Appointment results from our follow-up systems",
      items: [
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "387", label: "MVA appointments booked", href: "/case-studies/mva-387-appointments-booked" },
        { value: "337", label: "Home services appointments on $1,621", href: "/case-studies/home-services-337-appointments-booked" },
        { value: "$1.52M", label: "Consulting funnel with AI qualification", href: "/milliondollarcasestudy" },
      ],
      more: { label: "See all case studies", href: "/case-studies" },
    },
    faqs: [
      { q: "What is the difference between an AI agent and a chatbot?", a: "A traditional chatbot follows a fixed decision tree of buttons and scripted replies. An AI agent understands free-form questions, answers from an approved knowledge base and takes actions in your systems, such as booking a calendar slot, tagging a contact or transferring a call. We still give agents firm rules, so they never improvise prices or promises." },
      { q: "Do I need all five agents?", a: "No. Most businesses need one or two. A company buying form leads usually starts with a voice agent or appointment setter; a busy clinic or contractor often starts with a receptionist. We recommend the agent that fixes your biggest leak first, then add others once the first one is stable and reviewed." },
      { q: "Which CRM do the agents work with?", a: "We build most agents in GoHighLevel because voice, SMS, chat channels, calendars and pipelines sit in one account, which keeps the setup simple and the data in one place. Other CRMs can work through integrations, but expect more moving parts and a longer testing period before launch." },
      { q: "How much does it cost to build AI agents?", a: "The builds are included in our $1,999 complete suite, alongside the CRM setup, automation, AI booking agent and tracking. Ongoing usage, such as voice minutes, phone numbers and messages, is paid by you directly to the platforms. Voice typically costs $0.10 to $0.25 per minute of talk time." },
      { q: "Will customers know they are talking to AI?", a: "Yes. Our voice agents disclose that they are an AI assistant at the start of each call, and chat agents never claim to be a named human. Disclosure is the honest approach, it is required in a growing number of places, and a fast, useful conversation matters more to prospects than who answers." },
      { q: "How long does it take to launch an AI agent?", a: "A typical agent goes live in 5 to 10 business days. That covers the script or prompt, knowledge base, calendar and CRM connection, handoff rules and internal testing with at least 50 test conversations. After launch we review transcripts weekly for the first month and tighten anything that stalls or confuses people." },
    ],
    related: ["/ai-voice-agents", "/ai-appointment-setter", "/ai-chat-agent", "/ai-receptionist", "/lead-reactivation", "/ai-sales-funnels", "/compare/ai-voice-agent-vs-human-setter"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/ai-chat-agent",
    kind: "service",
    keyword: "ai chatbot for lead generation",
    serviceType: "AI chat agent for lead generation",
    title: "AI Chatbot for Lead Generation: SMS, DMs and Web Chat",
    description: "An AI chatbot for lead generation that replies on SMS, web chat, Messenger, Instagram and WhatsApp, qualifies leads, answers FAQs and books calls.",
    eyebrow: "AI chat agent",
    h1: "An AI chatbot for lead generation that replies on every channel",
    intro:
      "An <strong>AI chatbot for lead generation</strong> answers the messages that usually sit unread: website chat, SMS replies, Facebook Messenger, Instagram DMs and WhatsApp. Our AI chat agent replies within seconds, asks your qualifying questions, answers common questions from a knowledge base you approve, books a call on your live calendar and hands the conversation to a person whenever it should. It runs inside your CRM, so every message lands on the contact record.",
    quick: {
      q: "What does an AI chat agent do for lead generation?",
      a: "It replies to inbound messages on SMS, website chat, Messenger, Instagram and WhatsApp within seconds, at any hour. It asks two to four qualifying questions, answers frequent questions from an approved knowledge base, offers times from your calendar, books the call and alerts your team, or hands the thread to a person when needed.",
    },
    sections: [
      {
        h2: "Why messages need an instant reply",
        html: `<p>A prospect who sends a DM or texts back is at the same point as someone who just filled in a form: interested now, and probably asking competitors too. Across 60+ of our speed-to-lead deployments, contact rate was 84% when leads were reached in the first minute, the median first contact was 38 seconds and lead-to-booking rates rose 2.4x on the same ads. Those figures come from form and call follow-up, but the principle is the same for chat: the first useful reply usually wins. The background is in <a href="/glossary/speed-to-lead">what is speed to lead</a> and our <a href="/blog/speed-to-lead-statistics">speed to lead statistics</a>.</p>`,
      },
      {
        h2: "Channels we connect",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Channel</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>Website chat widget</td><td>Visitors on pricing, service or landing pages with a question</td></tr>
<tr><td>SMS</td><td>Replies to follow-up texts and missed-call text-backs</td></tr>
<tr><td>Facebook Messenger</td><td>Click-to-Messenger ads and page messages</td></tr>
<tr><td>Instagram DMs</td><td>Story replies, comment-to-DM and profile messages</td></tr>
<tr><td>WhatsApp</td><td>Markets and customers who prefer WhatsApp to SMS</td></tr>
</tbody></table></div>
<p>We build on GoHighLevel Conversation AI where it fits, or connect another AI model to the CRM when a client needs more control over prompts and logic. Either way the conversation, tags and booking live in one <a href="/gohighlevel-agency">GoHighLevel</a> account.</p>`,
      },
      {
        h2: "How a chat conversation runs",
        html: `<ol>
<li><strong>Greet and anchor:</strong> reply to what the person actually asked, not a generic welcome.</li>
<li><strong>Qualify:</strong> ask two to four questions from your <a href="/templates/lead-qualification-questions">lead qualification questions</a>, one at a time.</li>
<li><strong>Answer:</strong> respond only from the approved knowledge base. Unknown answers become a handoff, never a guess.</li>
<li><strong>Book:</strong> offer two specific times from the live calendar, then confirm by SMS and email.</li>
<li><strong>Hand off:</strong> pricing negotiations, complaints, sensitive topics or "can I talk to someone?" go straight to your team with a summary.</li>
</ol>`,
      },
      {
        h2: "The knowledge base is the product",
        html: `<p>A chat agent is only as good as what it is allowed to say. We write approved answers covering services, process, service area, typical timelines, price ranges you are comfortable sharing and what happens on the call. You review every answer before launch. Anything not in the knowledge base is out of bounds: the agent says it will check with the team and creates a task. That rule is what stops a chatbot from inventing a discount or a guarantee. When your offer, prices or hours change, the knowledge base is updated once, so every channel gives the same answer. Copy for the follow-up messages comes from our <a href="/templates/sms-follow-up-templates">SMS follow-up templates</a>.</p>`,
      },
      {
        h2: "Where chat agents fit best",
        html: `<p>Chat matters most where prospects message before they call: <a href="/funnels-for/med-spas">med spas</a> answering treatment questions from Instagram, <a href="/funnels-for/real-estate">real estate</a> teams replying to listing inquiries, <a href="/funnels-for/coaches">coaches</a> running DM campaigns and <a href="/funnels-for/home-services">home services</a> companies that get texts after hours. If most of your leads call instead, the <a href="/ai-receptionist">AI receptionist</a> is a better first step, and if they fill in forms, start with the <a href="/ai-voice-agents">AI voice agent</a>. All options are compared on our <a href="/ai-agents">AI agents</a> page.</p>`,
      },
      {
        h2: "Pricing and launch",
        html: `<p>The chat agent build is part of our $1,999 complete suite with the CRM, automation, AI booking agent and tracking. Message and AI usage fees are billed by the platforms to you. Launch takes 5 to 10 business days, including channel connections, the knowledge base and test conversations. <a href="/book-a-call">Book a call</a> and we will look at where your messages are going unanswered today.</p>`,
      },
    ],
    proof: {
      heading: "Lead and booking results from our funnels",
      items: [
        { value: "1,011", label: "Med spa leads on $4,703", href: "/case-studies/med-spa-1011-leads" },
        { value: "174", label: "Coaching appointments on $2,214", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "247", label: "Real estate leads at $16.48", href: "/case-studies/real-estate-247-leads-at-16-48-cpl" },
        { value: "337", label: "Home services appointments on $1,621", href: "/case-studies/home-services-337-appointments-booked" },
      ],
      more: { label: "See med spa results", href: "/case-studies/med-spa-marketing" },
    },
    faqs: [
      { q: "Is an AI chat agent the same as a website chatbot?", a: "It covers more ground. A website chatbot lives in one widget and often follows buttons. Our chat agent answers free-form questions across website chat, SMS, Messenger, Instagram and WhatsApp, uses one knowledge base for all of them, books calls on your live calendar and writes everything back to the same contact record in your CRM." },
      { q: "Can the chat agent answer pricing questions?", a: "Only the way you approve. Many clients share a starting price or range and explain what changes it, and the agent sticks to that wording. If someone asks for a custom quote, a discount or anything outside the knowledge base, the agent hands the conversation to your team instead of guessing." },
      { q: "What happens when someone wants a human?", a: "The agent stops and routes the thread to the right person, with a short summary of what the prospect asked and answered. During business hours your team gets an instant notification; after hours the agent explains when someone will reply and can book a call slot so the lead is not left waiting." },
      { q: "Does it work with Instagram and WhatsApp?", a: "Yes, through the CRM's connected channels, as long as the accounts are business accounts linked to the CRM and the messaging platforms' policies are followed. WhatsApp has its own rules for templates and for messaging people outside an open conversation window, which we set up during the build." },
      { q: "Which AI powers the chat agent?", a: "We use GoHighLevel Conversation AI when the use case fits its built-in features, because it is simplest to maintain. When a client needs more complex logic or tighter control over prompts, we connect another AI model to the CRM. Either way the knowledge base, booking and handoff rules work the same." },
      { q: "How do you stop the bot from saying something wrong?", a: "Three controls. The agent answers only from an approved knowledge base, it hands off on any topic it is not cleared for, and we review conversation logs every week during the first month. When a question comes up repeatedly, we add an approved answer rather than letting the agent improvise." },
    ],
    related: ["/ai-agents", "/ai-receptionist", "/speed-to-lead", "/crm-automation", "/funnels-for/med-spas", "/templates/lead-qualification-questions"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/ai-receptionist",
    kind: "service",
    keyword: "ai receptionist",
    serviceType: "AI receptionist",
    title: "AI Receptionist: Answer Every Call 24/7 and Book Jobs",
    description: "An AI receptionist that answers every inbound call 24/7, texts back missed callers, books after-hours appointments and transfers urgent calls to staff.",
    eyebrow: "AI receptionist",
    h1: "An AI receptionist that answers every call, day and night",
    intro:
      "An <strong>AI receptionist</strong> picks up your business line when your team cannot: after hours, at lunch, during a busy morning or while the owner is on a job. It greets callers, finds out what they need, books appointments from your live calendar, transfers urgent calls to the right person and saves a summary of every call to your CRM. Unlike our outbound agents, it is built for people calling you, whether they are new prospects, existing customers or someone with an urgent problem.",
    quick: {
      q: "What does an AI receptionist do?",
      a: "It answers inbound calls 24/7, identifies the reason for the call, answers common questions from an approved script, books appointments into your calendar, transfers urgent or high-value calls to staff, and texts back anyone whose call was missed. Every call gets a written summary, tags and next steps in your CRM, so nothing depends on memory.",
    },
    sections: [
      {
        h2: "What the AI receptionist handles",
        html: `<ul>
<li><strong>Answering:</strong> picks up on the first rings, around the clock, with your business name and an AI disclosure.</li>
<li><strong>Missed-call text-back:</strong> if a call still drops, the caller gets a text within seconds asking how you can help.</li>
<li><strong>After-hours booking:</strong> offers open slots from your calendar so night and weekend callers leave with an appointment.</li>
<li><strong>Routing and transfer:</strong> emergencies, existing clients or hot prospects are transferred to the right staff member by rules you set.</li>
<li><strong>FAQs:</strong> hours, service area, what to bring, how estimates work, all from an approved list.</li>
<li><strong>Call summaries:</strong> reason for the call, details collected and outcome are written to the contact in the CRM.</li>
</ul>`,
      },
      {
        h2: "AI receptionist vs answering service vs voicemail",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Voicemail</th><th>Answering service</th><th>AI receptionist</th></tr></thead>
<tbody>
<tr><td>Answers 24/7</td><td>No</td><td>Usually</td><td>Yes</td></tr>
<tr><td>Books into your calendar</td><td>No</td><td>Sometimes, by message</td><td>Yes, live slots</td></tr>
<tr><td>Writes to your CRM</td><td>No</td><td>Rarely</td><td>Yes, summary and tags</td></tr>
<tr><td>Texts back missed callers</td><td>No</td><td>No</td><td>Yes</td></tr>
<tr><td>Handles many calls at once</td><td>n/a</td><td>Depends on staffing</td><td>Yes</td></tr>
</tbody></table></div>
<p>The real cost of a missed call is rarely visible. Callers who reach voicemail often hang up and dial the next company on the list, and nobody on your team ever knows they called. The AI receptionist turns those silent losses into logged contacts with a reason, a number and usually a booked time, which also tells you how many calls you were missing before. A human receptionist is still better for complex, emotional or high-trust calls. That is why transfer rules are part of every build, and why many clients use the AI only after hours and as overflow.</p>`,
      },
      {
        h2: "Industry setups",
        html: `<ul>
<li><strong><a href="/funnels-for/home-services">Home services</a>, <a href="/funnels-for/hvac">HVAC</a> and <a href="/funnels-for/roofing">roofing</a>:</strong> separates emergencies from routine jobs, collects address and issue, books estimate windows and transfers true emergencies to the on-call tech.</li>
<li><strong>Clinics and <a href="/funnels-for/med-spas">med spas</a>:</strong> books consultations, answers prep and policy questions, and transfers anything clinical to staff. The dental version is on our <a href="/ai-voice-agents/dental-clinics">AI voice agents for dental clinics</a> page.</li>
<li><strong>Law firms:</strong> runs first-pass <a href="/funnels-for/personal-injury-lawyers">personal injury intake</a> questions, flags likely cases and transfers to an intake specialist, without giving legal advice.</li>
<li><strong><a href="/funnels-for/real-estate">Real estate</a>:</strong> answers listing calls, captures buyer or seller details and books showings or valuation calls.</li>
</ul>`,
      },
      {
        h2: "How the call flows into your CRM",
        html: `<p>Inbound calls ring your existing number first if you want them to. Unanswered or after-hours calls forward to the AI receptionist, which runs the conversation, then writes a summary, tags and the booked slot to the contact in <a href="/gohighlevel-agency">GoHighLevel</a>. A new contact enters your pipeline at the right stage and your <a href="/crm-automation">CRM automation</a> takes over with confirmations and reminders from our <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a>. Check what missed calls and no-shows cost you with the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a>.</p>`,
      },
      {
        h2: "Cost and setup",
        html: `<p>The build is part of our $1,999 complete suite, which includes the CRM, automation, AI booking agent and tracking. Call minutes are paid by you to the platform and usually run $0.10 to $0.25 per minute of talk time. Setup takes 5 to 10 business days: call flow and script, FAQ list, calendar and transfer rules, then at least 50 test calls before your real line is forwarded. Other AI options are on our <a href="/ai-agents">AI agents</a> page, or you can <a href="/book-a-call">book a call</a> to map your call flow.</p>`,
      },
    ],
    proof: {
      heading: "Appointment results from our follow-up and booking systems",
      items: [
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "337", label: "Home services appointments on $1,621", href: "/case-studies/home-services-337-appointments-booked" },
        { value: "387", label: "MVA appointments booked", href: "/case-studies/mva-387-appointments-booked" },
        { value: "1,956", label: "HVAC appointments, $36,444 revenue", href: "/case-studies/hvac-36k-in-revenue" },
      ],
      more: { label: "See HVAC results", href: "/case-studies/hvac-lead-generation" },
    },
    faqs: [
      { q: "Will callers know they are talking to an AI receptionist?", a: "Yes. The receptionist introduces itself as an AI assistant for your business in its greeting. We have found callers care far more about getting a fast, useful answer and a booked time than about who picks up, and anyone who asks for a person is transferred or offered a callback right away." },
      { q: "Can it transfer calls to my team?", a: "Yes. You set the rules: emergencies to the on-call phone, existing clients to the office, high-value inquiries to the owner, and so on. If nobody answers the transfer, the receptionist takes a message, books a callback and texts the caller, so the call is never simply dropped." },
      { q: "Do I need a new phone number?", a: "No. Most clients keep their existing number and forward unanswered or after-hours calls to the AI receptionist. You can also give it a dedicated number for ads or tracking. Forwarding rules can change by time of day, so your staff still take calls during business hours." },
      { q: "Can it take payments or give medical or legal advice?", a: "No. We do not set receptionists up to take card details by voice, diagnose, recommend treatments or give legal opinions. For clinics and law firms the agent collects basic details, books a consultation or intake call and hands anything clinical or legal to a qualified person." },
      { q: "What happens if the AI receptionist does not understand a caller?", a: "It asks one clarifying question, and if it still cannot help, it takes the caller's name, number and reason, promises a callback and creates a task for your team. Strong accents, bad lines and unusual requests are part of our test calls, and we review real call summaries weekly during the first month after launch." },
      { q: "What results can I expect from an AI receptionist?", a: "We do not publish receptionist-only benchmarks yet. Our proof comes from the appointment-booking systems the receptionist plugs into, such as 5,628 HVAC appointments and 337 home services appointments booked for clients. Your result depends on call volume, how many calls you miss today and how fast your team follows up." },
    ],
    related: ["/ai-agents", "/ai-chat-agent", "/speed-to-lead", "/ai-voice-agents/dental-clinics", "/funnels-for/hvac", "/funnels-for/home-services", "/tools/no-show-cost-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/lead-reactivation",
    kind: "service",
    keyword: "database reactivation campaign",
    serviceType: "Database reactivation campaign",
    title: "Database Reactivation Campaign with AI SMS and Voice",
    description: "A database reactivation campaign that uses AI SMS and voice to re-engage old leads and past customers in your CRM, with consent and opt-outs built in.",
    eyebrow: "Lead reactivation",
    h1: "A database reactivation campaign for the leads you already paid for",
    intro:
      "A <strong>database reactivation campaign</strong> goes back to the contacts already in your CRM: leads who never booked, quotes that went quiet and past customers who have not bought in a while. We segment the list, write a relevant offer for each group, send AI-assisted SMS, and follow up responders with an AI voice agent or your team. You already paid to acquire these contacts, so the main costs are the build and the messages.",
    quick: {
      q: "What is a database reactivation campaign?",
      a: "It is an outbound campaign to old leads and past customers already in your CRM. Contacts are cleaned and segmented, sent a short, relevant SMS offer, and anyone who replies is handled by an AI agent that answers questions and books a call. Non-responders get a limited follow-up, and opt-outs are honored immediately across every channel.",
    },
    sections: [
      {
        h2: "Who belongs in the campaign",
        html: `<ul>
<li><strong>Unbooked leads:</strong> people who filled in a form months ago and were never reached or never booked.</li>
<li><strong>Stalled quotes:</strong> estimates or proposals with no decision.</li>
<li><strong>No-shows:</strong> booked calls that were missed and never rebooked.</li>
<li><strong>Past customers:</strong> people due for a service, a check-up, a renewal or a next purchase.</li>
</ul>
<p>Each group gets its own message. A past customer due for maintenance and a lead who never spoke to you need different openings, and mixing them is the fastest way to collect opt-outs.</p>`,
      },
      {
        h2: "Consent, opt-outs and SMS registration",
        html: `<p>Reactivation is where compliance matters most, because the contacts are not expecting you. In general terms:</p>
<ul>
<li><strong>Consent:</strong> in the US, the TCPA restricts automated and prerecorded or artificial-voice calls and texts to people who have not given the right kind of consent, and the FCC has treated AI-generated voices as artificial voices. We only include contacts with a documented consent source, and we exclude anyone on your internal do-not-contact list.</li>
<li><strong>A2P 10DLC:</strong> US carriers expect business texting from standard local numbers to be registered, with a brand and campaign description. Unregistered traffic is likely to be filtered or blocked, so registration comes before the first send.</li>
<li><strong>Opt-outs:</strong> every first message explains how to stop, and STOP, unsubscribe or do-not-call replies are processed instantly across SMS and voice.</li>
<li><strong>Timing:</strong> messages and calls go out in reasonable local hours.</li>
</ul>
<p>This is a general description, not legal advice. Rules differ by country and state, so your counsel should approve the list and the copy.</p>`,
      },
      {
        h2: "How the campaign runs",
        html: `<ol>
<li><strong>Export and clean:</strong> remove duplicates, invalid numbers, existing customers in active jobs and anyone who opted out.</li>
<li><strong>Segment:</strong> by lead age, source, last stage reached and service interest.</li>
<li><strong>Offer:</strong> one relevant reason to reply now, such as an open slot, a seasonal check or an updated price range.</li>
<li><strong>Send in batches:</strong> in small batches, so your team and calendar can absorb the replies.</li>
<li><strong>AI conversation:</strong> an <a href="/ai-chat-agent">AI chat agent</a> handles SMS replies; warm responders can get a call from an <a href="/ai-voice-agents">AI voice agent</a> or a rep.</li>
<li><strong>Book and remind:</strong> appointments go on the live calendar with reminders from our <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a>.</li>
<li><strong>Close the loop:</strong> every reply, booking and opt-out is tagged in the <a href="/glossary/crm-pipeline">CRM pipeline</a>.</li>
</ol>`,
      },
      {
        h2: "What we need from you",
        html: `<ul>
<li>CRM access or a contact export with source, date and last status for each contact.</li>
<li>Where and how consent was collected, plus your do-not-contact list.</li>
<li>The offer you are willing to make and any limits on it.</li>
<li>Calendar availability for the booked calls, and who takes handoffs.</li>
<li>Business details for SMS registration if your number is not registered yet.</li>
</ul>
<p>Message copy is based on our <a href="/templates/sms-follow-up-templates">SMS follow-up templates</a> and adapted to each segment.</p>`,
      },
      {
        h2: "What to expect, honestly",
        html: `<p>We do not publish reactivation benchmarks, because results swing with list age, consent quality, offer and industry. Expect most replies in the first day or two after each batch, some opt-outs and wrong numbers, and a booking rate that depends heavily on how recently the contacts spoke to you. Our proof below comes from booking systems we built for new leads, which use the same follow-up and reminder machinery. After the first batch we report replies, bookings and opt-outs per segment, then adjust copy before the next send.</p>`,
      },
      {
        h2: "Pricing",
        html: `<p>The reactivation build is part of our $1,999 complete suite with the CRM, automation, AI booking agent and tracking. SMS, phone numbers and voice minutes are paid by you to the platforms; voice usually runs $0.10 to $0.25 per minute of talk time. To keep new leads from going cold in the first place, pair the campaign with <a href="/speed-to-lead">speed to lead automation</a>. All agent options are on our <a href="/ai-agents">AI agents</a> page, or <a href="/book-a-call">book a call</a> to review your list.</p>`,
      },
    ],
    proof: {
      heading: "Booking results from our follow-up systems",
      items: [
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "387", label: "MVA appointments booked", href: "/case-studies/mva-387-appointments-booked" },
        { value: "140", label: "Webinar appointments, 29.7x ROAS", href: "/case-studies/webinar-65k-revenue-on-2184-ad-spend" },
      ],
      more: { label: "See all case studies", href: "/case-studies" },
    },
    faqs: [
      { q: "How old can leads be for a reactivation campaign?", a: "There is no fixed cutoff, but older contacts reply less and are more likely to have changed numbers. We usually split leads into age bands, such as under six months, six to eighteen months and older, so each band gets fitting copy and we can see which groups are worth continuing to contact." },
      { q: "Is it legal to text old leads?", a: "It depends on how consent was collected, where the contacts live and what the messages say. In the US, the TCPA and carrier rules for registered business texting both apply. We only include contacts with a documented consent source and honor opt-outs instantly, but your counsel should confirm the list and copy." },
      { q: "What is A2P 10DLC registration?", a: "It is the US carrier system for registering business text messaging sent from standard ten-digit local numbers. You register your business as a brand and describe your messaging campaign, including sample messages and how people opt in. Unregistered business texts are likely to be filtered or blocked, so we complete it before any send." },
      { q: "Do you use AI voice calls in reactivation?", a: "Usually as a second step. The first touch is a short SMS; contacts who reply with interest can get a call from an AI voice agent or a rep to book the appointment. Cold voice calls to the whole list carry more compliance risk and annoy more people, so we rarely recommend them." },
      { q: "How many results will a reactivation campaign bring?", a: "We do not quote reactivation numbers because results depend on list age, consent quality, offer and industry. After the first batch you get a report of replies, bookings and opt-outs per segment, which tells us quickly whether the list is worth working further and which messages to change." },
    ],
    related: ["/ai-agents", "/ai-chat-agent", "/crm-automation", "/speed-to-lead", "/templates/sms-follow-up-templates", "/ai-voice-agents"],
    parent: HUB,
    updated: U,
  },
];
