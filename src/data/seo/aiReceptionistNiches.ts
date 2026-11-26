import type { SeoPage } from "./types";

/**
 * AI receptionist industry pages (SEO Recovery Plan, 20 Nov 2026, section 6:
 * funnelsthatprint.com leads with AI receptionist, AI appointment setter and
 * GoHighLevel automation). Keywords from the plan's Semrush keyword map (US):
 * ai receptionist for real estate (70/mo, KD 0), for plumbers (50, KD 7),
 * for hvac (70, KD 11), for contractors (50, KD 15).
 */
const U = "2026-11-20";
const RECEPTIONIST = { name: "AI receptionist", path: "/ai-receptionist" };

const COST = `<p>An AI receptionist from Funnels That Print is part of our $1,999 complete suite, which also includes the CRM setup, follow-up automation, AI booking and call tracking. Call minutes are paid by you to the voice platform and usually run $0.10 to $0.25 per minute of talk time, so a 3-minute call costs well under a dollar. Setup takes 5 to 10 business days: we write the call flow and script, load your FAQs and service area, connect your calendar and transfer rules, then run at least 50 test calls before your real line is forwarded.</p>`;

export const AI_RECEPTIONIST_PAGES: SeoPage[] = [
  {
    path: "/ai-receptionist/hvac",
    kind: "service",
    keyword: "ai receptionist for hvac",
    serviceType: "AI receptionist for HVAC companies",
    title: "AI Receptionist for HVAC: Answer Every Call and Book Jobs",
    description: "An AI receptionist for HVAC companies that answers every call 24/7, triages no-heat and no-cool emergencies, books service windows and texts back misses.",
    eyebrow: "AI receptionist for HVAC",
    h1: "AI receptionist for HVAC companies that books every service call",
    intro:
      "An <strong>AI receptionist for HVAC</strong> answers your business line whenever your dispatcher cannot: during the morning rush, while techs are on a roof, and at 11 pm when a family has no heat. It asks what is wrong, separates emergencies from routine maintenance, books the right service window from your calendar, sends urgent calls to the on-call tech and writes every call into your CRM. Peak-season calls stop going to voicemail, and voicemail is where HVAC jobs go to the next company on Google.",
    quick: {
      q: "What does an AI receptionist for HVAC do?",
      a: "It answers every inbound call 24/7, asks about the system and the problem, flags no-heat, no-cool and safety calls as emergencies, books repair, maintenance or estimate appointments into your calendar, transfers urgent calls to the on-call tech, and texts back anyone whose call was missed. Each call is summarised in your CRM with the address and issue.",
    },
    features: {
      eyebrow: "Built for HVAC",
      heading: "Every call answered,",
      accent: "every job logged.",
      items: [
        { icon: "phone", title: "Answers 24/7", text: "Picks up on the first rings during heat waves, cold snaps and after hours, with your company name and an AI disclosure." },
        { icon: "shield", title: "Emergency triage", text: "Flags no heat, no cooling, water leaks and gas smells, gives safety steps, and transfers to the on-call tech." },
        { icon: "calendar", title: "Books service windows", text: "Offers real slots for repairs, tune-ups and install estimates, based on your service area and job type." },
        { icon: "chat", title: "Missed-call text-back", text: "If a call drops, the caller gets a text within seconds so the job is not lost to the next contractor." },
        { icon: "layers", title: "Writes to your CRM", text: "Address, system type, age, problem and outcome are saved to the contact in GoHighLevel or your CRM." },
        { icon: "dollar", title: "Maintenance plan upsell", text: "Mentions your maintenance plan on routine calls and books a tune-up visit when the caller is interested." },
      ],
    },
    gallery: {
      heading: "HVAC campaigns from real",
      slugs: ["hvac-326-leads-at-5-57-cpl", "hvac-36k-in-revenue", "hvac-5628-appointments-booked", "home-services-337-appointments-booked"],
    },
    planner: { sell: "local" },
    sections: [
      {
        h2: "Why do HVAC companies need an AI receptionist?",
        html: `<p>Because HVAC demand arrives in spikes your office cannot staff for. The first hot week of summer or the first freeze can triple call volume in a day, and most of those calls come when the dispatcher is already on the phone. A caller who hits voicemail usually rings the next company in the search results, and nobody on your team ever learns they called.</p>
<p>An AI receptionist answers every one of those calls at the same time, at any hour. It does not replace your dispatcher; it catches the overflow, the lunch hour, the evenings and the weekends, and it tells you exactly how many calls you were missing before. Pair it with <a href="/speed-to-lead">speed-to-lead automation</a> so web form leads get the same instant response as phone calls.</p>`,
      },
      {
        h2: "How does it handle HVAC emergencies?",
        html: `<p>It uses triage rules you approve. When a caller reports no heat in freezing weather, no cooling for an elderly resident, water leaking from an air handler or a carbon monoxide alarm, the call is marked urgent and transferred straight to your on-call technician. If the tech does not answer, the receptionist books the earliest emergency slot, texts the caller a confirmation and alerts your team by SMS.</p>
<ul>
<li><strong>Gas smell or CO alarm:</strong> the receptionist tells the caller to leave the home and call the gas utility or 911 first, then logs the call for follow-up. It never tries to troubleshoot a safety issue.</li>
<li><strong>No heat or no cooling:</strong> collects the system type, age and symptoms, then transfers or books the first emergency window.</li>
<li><strong>Routine calls:</strong> tune-ups, filter questions and install quotes are booked into normal hours.</li>
</ul>`,
      },
      {
        h2: "What does the HVAC call flow look like?",
        html: `<ol>
<li><strong>Greeting:</strong> your company name, an AI disclosure and "How can we help today?"</li>
<li><strong>Reason for the call:</strong> repair, maintenance, new system quote, existing appointment or billing.</li>
<li><strong>Qualification:</strong> service address and ZIP code against your service area, system type and age, symptoms.</li>
<li><strong>Booking:</strong> the next available window for that job type, with a text confirmation and the tech's arrival range.</li>
<li><strong>Hand-off:</strong> urgent or high-value calls (commercial accounts, full system replacements) are transferred to a person.</li>
<li><strong>Record:</strong> a call summary, tags and the booked slot are written to the contact in your CRM.</li>
</ol>
<p>Every step is scripted with you before launch, and the script is in plain language your team can read and change.</p>`,
      },
      {
        h2: "Does it work with my HVAC software and calendar?",
        html: `<p>Yes, in most setups. We build on <a href="/gohighlevel-agency">GoHighLevel</a>, which connects to Google Calendar and Outlook and can send booked jobs to field service software through webhooks or Zapier. If you dispatch from ServiceTitan, Housecall Pro or Jobber, we map the booking and call summary into the fields your dispatcher already uses. You keep your existing phone number: unanswered or after-hours calls simply forward to the receptionist.</p>`,
      },
      {
        h2: "AI receptionist vs answering service for HVAC",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Answering service</th><th>AI receptionist</th></tr></thead>
<tbody>
<tr><td>Books into your calendar</td><td>Usually takes a message</td><td>Books live slots</td></tr>
<tr><td>Handles call spikes</td><td>Depends on staffing</td><td>Many calls at once</td></tr>
<tr><td>Knows your service area and pricing rules</td><td>Generic script</td><td>Your approved script</td></tr>
<tr><td>Writes to your CRM</td><td>Rarely</td><td>Summary, tags and booking</td></tr>
<tr><td>Texts back missed callers</td><td>No</td><td>Yes, within seconds</td></tr>
</tbody></table></div>
<p>A trained human is still better for upset customers and complex commercial calls, which is why transfer rules are part of every build. Most HVAC clients run the AI on overflow and after hours, and let the office answer first during the day.</p>`,
      },
      {
        h2: "How much does an AI receptionist for HVAC cost?",
        html: `${COST}<p>To see what missed calls cost you today, multiply your monthly missed calls by your booking rate and average ticket, or use the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a>. Read more about the general setup on our <a href="/ai-receptionist">AI receptionist</a> page, or see how we generate HVAC leads on <a href="/funnels-for/hvac">HVAC lead generation</a>.</p>`,
      },
    ],
    proof: {
      heading: "HVAC results from our booking and follow-up systems",
      items: [
        { value: "326", label: "HVAC leads at $5.57 each", href: "/case-studies/hvac-326-leads-at-5-57-cpl" },
        { value: "$36,444", label: "HVAC revenue from booked appointments", href: "/case-studies/hvac-36k-in-revenue" },
        { value: "337", label: "Home services appointments on $1,621 spend", href: "/case-studies/home-services-337-appointments-booked" },
      ],
      more: { label: "See HVAC results", href: "/case-studies/hvac-lead-generation" },
    },
    faqs: [
      { q: "Can an AI receptionist really handle HVAC emergency calls?", a: "It handles the first minute: it recognises emergency keywords, gives approved safety steps, and transfers the call to your on-call technician. It does not diagnose equipment or troubleshoot gas or electrical problems. If nobody answers the transfer, it books the earliest emergency slot and alerts your team by text." },
      { q: "Will customers know they are talking to AI?", a: "Yes. The greeting says it is your company's AI assistant. Callers mostly care that someone answers, understands the problem and books a time. Anyone who asks for a person is transferred or promised a callback straight away." },
      { q: "Can it book into ServiceTitan or Housecall Pro?", a: "In most cases the receptionist books into a GoHighLevel or Google calendar and passes the job and call summary to your field service software through an integration or webhook. We confirm what your account supports before the build, so your dispatcher sees new jobs where they already work." },
      { q: "What happens during peak season when hundreds of people call?", a: "The AI receptionist answers many calls at the same time, so callers are not left on hold. You set how many emergency slots it can book per day, and once those are full it books the next available window or takes details for a callback." },
      { q: "Can it quote prices for repairs or new systems?", a: "Only what you approve. Most HVAC companies let it quote a diagnostic or trip fee and a maintenance plan price, and book an in-home estimate for replacements. It never invents a price that is not in the script." },
      { q: "How long does setup take?", a: "Five to ten business days. We map your call types, write the script, load your service area and FAQs, connect the calendar and transfer numbers, and run at least 50 test calls, including emergencies and strong accents, before forwarding your real line." },
    ],
    related: ["/ai-receptionist", "/ai-receptionist/plumbers", "/ai-receptionist/contractors", "/funnels-for/hvac", "/speed-to-lead", "/ai-appointment-setter", "/gohighlevel-expert", "/case-studies/hvac-lead-generation"],
    parent: RECEPTIONIST,
    updated: U,
  },
  {
    path: "/ai-receptionist/plumbers",
    kind: "service",
    keyword: "ai receptionist for plumbers",
    serviceType: "AI receptionist for plumbing companies",
    title: "AI Receptionist for Plumbers: Never Miss an Emergency Call",
    description: "AI receptionist for plumbers that answers every call 24/7, triages burst pipes and backups, books service calls and texts back missed callers in seconds.",
    eyebrow: "AI receptionist for plumbers",
    h1: "AI receptionist for plumbers that answers while you are under the sink",
    intro:
      "An <strong>AI receptionist for plumbers</strong> picks up every call when your hands are full, literally. It answers in your company name, finds out whether the caller has a burst pipe or a dripping tap, gives approved shut-off steps for emergencies, books the job into your calendar, sends urgent calls to whoever is on call and logs everything in your CRM. Plumbing emergencies do not wait for voicemail, and neither do the customers who call the next plumber on the list.",
    quick: {
      q: "What does an AI receptionist for plumbers do?",
      a: "It answers inbound calls 24/7, identifies the problem, flags emergencies such as burst pipes, no water, sewage backups and leaking water heaters, tells callers where to shut off the water, books the visit into your calendar, transfers urgent calls to the on-call plumber and texts back any missed caller within seconds.",
    },
    features: {
      eyebrow: "Built for plumbers",
      heading: "Answer every call",
      accent: "without stopping work.",
      items: [
        { icon: "phone", title: "Answers while you work", text: "No more choosing between finishing a job and picking up the phone. Every call is answered on the first rings." },
        { icon: "shield", title: "Emergency triage", text: "Burst pipes, sewage backups, no water and gas water heater issues are flagged and transferred to the on-call plumber." },
        { icon: "bolt", title: "Shut-off guidance", text: "Gives approved, simple steps such as finding the main water valve while help is on the way." },
        { icon: "calendar", title: "Books the visit", text: "Offers real arrival windows for repairs, drain cleaning, water heater installs and estimates." },
        { icon: "chat", title: "Missed-call text-back", text: "Any call that drops gets a text within seconds, so the customer waits for you instead of calling around." },
        { icon: "layers", title: "Job details in your CRM", text: "Address, problem, photos link and outcome are saved, so you arrive knowing what to bring." },
      ],
    },
    gallery: {
      heading: "Home service campaigns from real",
      slugs: ["home-services-337-appointments-booked", "home-services-1811-leads", "hvac-326-leads-at-5-57-cpl", "roofing-52-booked-calls"],
    },
    planner: { sell: "local" },
    sections: [
      {
        h2: "Why do plumbers miss so many calls?",
        html: `<p>Because the person who answers the phone is usually the person doing the job. A plumber with wet hands under a sink, in a crawl space or on a water heater install cannot pick up, and most small plumbing businesses do not have a full-time office. Calls that go to voicemail at those moments are often the most valuable ones: emergencies that need someone today and will call down the list until someone answers.</p>
<p>An AI receptionist answers every call, every time, and turns each one into a booked job, a transfer or at least a logged lead with a callback task. Pair it with <a href="/speed-to-lead">speed-to-lead automation</a> so web and ad leads get an instant text too.</p>`,
      },
      {
        h2: "How does it handle plumbing emergencies?",
        html: `<p>It follows emergency rules you set. When a caller reports a burst pipe, flooding, a sewage backup, no water at all or a leaking water heater, the call is marked urgent. The receptionist gives approved steps, such as turning off the main water valve or the water heater's supply, then transfers to your on-call plumber. If nobody picks up, it books the earliest emergency slot, texts the customer a confirmation and alerts you by SMS.</p>
<ul>
<li><strong>Gas water heater with a gas smell:</strong> the caller is told to leave and call the gas utility or 911 first. The AI never troubleshoots gas.</li>
<li><strong>Active leak or flood:</strong> shut-off guidance, then transfer or the first emergency slot.</li>
<li><strong>Routine work:</strong> dripping taps, slow drains and quotes are booked into normal hours.</li>
</ul>`,
      },
      {
        h2: "What does the plumbing call flow look like?",
        html: `<ol>
<li><strong>Greeting</strong> with your business name and an AI disclosure.</li>
<li><strong>Problem:</strong> leak, clog, no hot water, installation, inspection or an existing job.</li>
<li><strong>Urgency check:</strong> is water running now, is there sewage, is anyone without water?</li>
<li><strong>Location:</strong> address and ZIP code checked against your service area and any after-hours call-out zone.</li>
<li><strong>Booking or transfer:</strong> emergency transfer, or the next arrival window for the job type.</li>
<li><strong>Follow-up:</strong> a text confirmation, an optional link to send photos, and a call summary in your CRM.</li>
</ol>`,
      },
      {
        h2: "Can it quote prices and call-out fees?",
        html: `<p>Yes, if you want it to, and only the prices you approve. Most plumbers let the receptionist quote the standard call-out or diagnostic fee and the after-hours rate, and explain that a firm quote is given on site. It never invents a price. For larger jobs such as repipes, water heater replacements or sewer lines, it books an estimate visit instead of quoting.</p>`,
      },
      {
        h2: "Will it work with my phone number and job software?",
        html: `<p>Yes. You keep your existing number and forward unanswered or after-hours calls to the receptionist, or give it a dedicated number for ads. We build the booking and CRM in <a href="/gohighlevel-agency">GoHighLevel</a>, which syncs with Google Calendar, and can pass jobs to Jobber, Housecall Pro or ServiceTitan through an integration or webhook. Reminders from our <a href="/crm-automation">CRM automation</a> cut no-shows on booked estimates.</p>`,
      },
      {
        h2: "How much does an AI receptionist for plumbers cost?",
        html: `${COST}<p>For most plumbing companies one recovered emergency call a week pays for the minutes many times over. See the full feature list on our <a href="/ai-receptionist">AI receptionist</a> page, or <a href="/book-a-call">book a call</a> to map your call types.</p>`,
      },
    ],
    proof: {
      heading: "Home service results from our booking and follow-up systems",
      items: [
        { value: "337", label: "Home services appointments on $1,621 spend", href: "/case-studies/home-services-337-appointments-booked" },
        { value: "1,811", label: "Home services leads generated", href: "/case-studies/home-services-1811-leads" },
        { value: "52", label: "Booked calls for a roofing contractor", href: "/case-studies/roofing-52-booked-calls" },
      ],
      more: { label: "See home services results", href: "/case-studies/solar-home-services-lead-generation" },
    },
    faqs: [
      { q: "Can an AI receptionist handle a burst pipe call?", a: "It handles the first minute: it recognises the emergency, tells the caller how to shut off the main water valve using your approved wording, and transfers the call to your on-call plumber. If nobody answers, it books the earliest emergency slot and texts you the details." },
      { q: "Do I need an office manager to use it?", a: "No. Many of our home service clients are owner-operators. The receptionist answers, books and logs calls on its own, and you get a text summary of each call, so you can stay on the job and still know exactly who called and why." },
      { q: "Will customers mind talking to an AI?", a: "Most care far more about getting through and getting a time booked than about who answers. The receptionist says it is an AI assistant for your business, and anyone who wants a person is transferred or promised a callback." },
      { q: "Can it take a deposit or card payment?", a: "We do not set receptionists up to take card details by voice. If you take deposits, the receptionist can text a secure payment link from your existing payment provider after the booking." },
      { q: "What if a caller is outside my service area?", a: "It checks the ZIP code against your service area. Callers outside it are told politely, and you can choose to have it refer them on, take their details anyway or offer an out-of-area fee." },
      { q: "How quickly can I go live?", a: "Five to ten business days, including at least 50 test calls covering emergencies, quotes, wrong numbers and unclear callers. Your real line is only forwarded once the test calls pass." },
    ],
    related: ["/ai-receptionist", "/ai-receptionist/hvac", "/ai-receptionist/contractors", "/funnels-for/home-services", "/speed-to-lead", "/ai-appointment-setter", "/gohighlevel-expert", "/crm-automation"],
    parent: RECEPTIONIST,
    updated: U,
  },
  {
    path: "/ai-receptionist/contractors",
    kind: "service",
    keyword: "ai receptionist for contractors",
    serviceType: "AI receptionist for contractors",
    title: "AI Receptionist for Contractors: Book More Estimates 24/7",
    description: "An AI receptionist for contractors that answers every call, qualifies project, budget and timeline, books on-site estimates and texts back missed callers.",
    eyebrow: "AI receptionist for contractors",
    h1: "AI receptionist for contractors that turns calls into booked estimates",
    intro:
      "An <strong>AI receptionist for contractors</strong> answers your phone while you are on site, so remodelling, roofing, painting, flooring and general contracting leads are not lost to voicemail. It asks about the project, the address, the timeline and the budget range, books an on-site estimate into your calendar, sends hot leads to you by transfer or text, and logs every call in your CRM. You stop paying for ads and leads that ring out.",
    quick: {
      q: "What does an AI receptionist for contractors do?",
      a: "It answers every inbound call 24/7, finds out what project the caller wants, checks the address against your service area, asks about timeline and budget, books an on-site estimate into your calendar, transfers urgent or large jobs to you, and texts back missed callers. Each call is summarised in your CRM with the project details.",
    },
    features: {
      eyebrow: "Built for contractors",
      heading: "More estimates,",
      accent: "fewer missed calls.",
      items: [
        { icon: "phone", title: "Answers on every job site", text: "Calls are answered on the first rings while you and your crew keep working." },
        { icon: "target", title: "Qualifies the project", text: "Asks about scope, address, timeline, budget range and whether the caller owns the property." },
        { icon: "calendar", title: "Books on-site estimates", text: "Offers real estimate slots that fit your route and the time each project type needs." },
        { icon: "users", title: "Routes to the right person", text: "Large jobs, insurance claims or commercial work go straight to the owner or estimator." },
        { icon: "chat", title: "Photo and follow-up texts", text: "Texts a confirmation and a link to send photos, so you can prepare before the visit." },
        { icon: "chart", title: "Shows lead sources", text: "Logs which ad, number or page each caller came from, so you know what is worth paying for." },
      ],
    },
    gallery: {
      heading: "Contractor campaigns from real",
      slugs: ["roofing-52-booked-calls", "home-services-337-appointments-booked", "roofing-686-leads-at-5-31-cpl", "home-services-1811-leads"],
    },
    planner: { sell: "local" },
    sections: [
      {
        h2: "Why do contractors lose leads on the phone?",
        html: `<p>Because estimating, managing crews and doing the work all happen away from a desk. A homeowner who calls about a kitchen remodel or a roof replacement usually calls two or three contractors, and the first one who answers and books a visit has the advantage. When the call goes to voicemail, many callers never leave a message.</p>
<p>An AI receptionist answers every call, qualifies it and books the estimate, so you only spend site visits on real projects in your area. It also tells you how many calls you were missing and where they came from, which changes how you spend on ads. See how we generate the calls in the first place on <a href="/lead-generation-agency">lead generation</a>.</p>`,
      },
      {
        h2: "Which contractors is it built for?",
        html: `<ul>
<li><strong>Roofing:</strong> storm damage, leaks, replacements and insurance claims, with urgent leaks transferred straight away. See <a href="/funnels-for/roofing">roofing lead generation</a>.</li>
<li><strong>Remodelling and general contractors:</strong> kitchens, bathrooms, additions and basements, qualified by scope and budget range.</li>
<li><strong>Painting, flooring, decks and fencing:</strong> fast estimate booking with address and rough size.</li>
<li><strong>Specialty trades:</strong> electricians, solar installers and pressure washing, with trade-specific questions. Plumbing and HVAC have their own pages: <a href="/ai-receptionist/plumbers">plumbers</a> and <a href="/ai-receptionist/hvac">HVAC</a>.</li>
</ul>`,
      },
      {
        h2: "How does it qualify a project before booking?",
        html: `<p>It asks the questions your estimator would ask first, in a natural order:</p>
<ol>
<li>What kind of project, and roughly how big?</li>
<li>Where is the property, and do you own it?</li>
<li>When are you hoping to start?</li>
<li>Do you have a budget range in mind? (Optional, and phrased so nobody feels pushed.)</li>
<li>Is this an insurance claim? (For roofing and restoration.)</li>
</ol>
<p>Callers who fit are offered an estimate slot. Callers outside your area or project types are handled politely and logged, so you can see the demand you are turning away.</p>`,
      },
      {
        h2: "Does it work with my calendar and CRM?",
        html: `<p>Yes. We build the booking, pipeline and reminders in <a href="/gohighlevel-agency">GoHighLevel</a>, with Google or Outlook calendar sync and estimate slots sized per project type. If you already use JobNimbus, AccuLynx, Jobber or another contractor CRM, we pass bookings and call summaries across by integration or webhook. Reminder texts from our <a href="/crm-automation">CRM automation</a> reduce no-shows for on-site estimates.</p>`,
      },
      {
        h2: "AI receptionist or a part-time office person?",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Part-time office person</th><th>AI receptionist</th></tr></thead>
<tbody>
<tr><td>Hours covered</td><td>Office hours</td><td>24/7, including weekends</td></tr>
<tr><td>Several calls at once</td><td>One at a time</td><td>Many at once</td></tr>
<tr><td>Consistent qualifying questions</td><td>Depends on the day</td><td>Every call</td></tr>
<tr><td>Best at</td><td>Relationships, complex questions</td><td>Speed, coverage, logging</td></tr>
</tbody></table></div>
<p>Many contractors use both: the person answers first during office hours, and the AI handles overflow, evenings and weekends.</p>`,
      },
      {
        h2: "How much does an AI receptionist for contractors cost?",
        html: `${COST}<p>Compare that with the value of one extra booked estimate per week. See the full feature list on our <a href="/ai-receptionist">AI receptionist</a> page, or let an <a href="/ai-appointment-setter">AI appointment setter</a> call your web and ad leads back within 60 seconds as well.</p>`,
      },
    ],
    proof: {
      heading: "Contractor results from our booking and follow-up systems",
      items: [
        { value: "52", label: "Booked calls for a roofing contractor", href: "/case-studies/roofing-52-booked-calls" },
        { value: "337", label: "Remodelling appointments on $1,621 spend", href: "/case-studies/home-services-337-appointments-booked" },
        { value: "686", label: "Roofing leads at $5.31 each in 8 days", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
      ],
      more: { label: "See roofing results", href: "/case-studies/roofing-lead-generation" },
    },
    faqs: [
      { q: "Can an AI receptionist book on-site estimates for contractors?", a: "Yes. It checks the address against your service area, asks about the project, and offers estimate slots from your calendar sized for that type of job. The homeowner gets a text confirmation and a reminder before the visit." },
      { q: "Will it tell homeowners a price?", a: "Only ranges or fees you approve, such as a trip charge or a typical price range for a standard job. For anything custom it explains that the price is set after the on-site estimate and books the visit." },
      { q: "Can it handle insurance claim calls for roofing?", a: "It can collect the basic claim details, such as the date of the storm, the insurer and whether an adjuster has visited, and book an inspection. It does not give insurance advice, and complex claim questions are transferred to you." },
      { q: "What if I only want it after hours?", a: "That is common. Calls ring your phone or office first during the day and forward to the AI receptionist when unanswered, after hours and at weekends. You can change the rules at any time." },
      { q: "Do I keep my business number?", a: "Yes. You forward calls to the receptionist from your existing number, or use a separate tracked number for ads so you can see which campaigns bring booked estimates." },
      { q: "How do I know it is working?", a: "Every call gets a summary and outcome in your CRM, and you see weekly counts of answered calls, booked estimates, transfers and after-hours calls. That makes it easy to compare with the calls you were missing before." },
    ],
    related: ["/ai-receptionist", "/ai-receptionist/hvac", "/ai-receptionist/plumbers", "/funnels-for/roofing", "/funnels-for/home-services", "/lead-generation-agency", "/ai-appointment-setter", "/gohighlevel-expert"],
    parent: RECEPTIONIST,
    updated: U,
  },
  {
    path: "/ai-receptionist/real-estate",
    kind: "service",
    keyword: "ai receptionist for real estate",
    serviceType: "AI receptionist for real estate agents and brokerages",
    title: "AI Receptionist for Real Estate: Answer Every Lead 24/7",
    description: "An AI receptionist for real estate agents and brokerages that answers listing and sign calls 24/7, qualifies buyers and sellers and books showings.",
    eyebrow: "AI receptionist for real estate",
    h1: "AI receptionist for real estate agents that answers every listing call",
    intro:
      "An <strong>AI receptionist for real estate</strong> answers sign calls, listing inquiries and seller questions when you are at a showing, a closing or asleep. It answers questions about the property from your approved listing details, finds out whether the caller is buying, selling or both, checks their timeline and financing status, books a showing or a valuation call into your calendar, and logs every conversation in your CRM. Fewer warm leads go cold because nobody picked up.",
    quick: {
      q: "What does an AI receptionist for real estate do?",
      a: "It answers inbound calls 24/7, answers questions about your listings from approved details, asks whether the caller wants to buy, sell or both, checks timeline and pre-approval, books showings or listing appointments into your calendar, transfers hot leads to the agent on duty and texts back anyone who called and hung up.",
    },
    features: {
      eyebrow: "Built for real estate",
      heading: "Every sign call",
      accent: "becomes a lead.",
      items: [
        { icon: "phone", title: "Answers sign and listing calls", text: "Picks up 24/7 and answers questions about price, bedrooms, HOA and open houses from your listing details." },
        { icon: "target", title: "Buyer and seller qualification", text: "Asks about timeline, area, price range, pre-approval and whether they need to sell first." },
        { icon: "calendar", title: "Books showings and valuations", text: "Offers real slots for showings, buyer consultations and listing appointments." },
        { icon: "users", title: "Routes to the right agent", text: "Sends hot buyers to the listing agent or round-robins new leads across your team." },
        { icon: "shield", title: "Fair housing by design", text: "Answers every caller from the same approved script, with no steering questions." },
        { icon: "layers", title: "Into your CRM", text: "Call summary, tags and next steps are saved, ready for your nurture campaigns." },
      ],
    },
    gallery: {
      heading: "Real estate campaigns from real",
      slugs: ["real-estate-10-appointments-booked", "real-estate-247-leads-at-16-48-cpl", "home-services-337-appointments-booked", "roofing-52-booked-calls"],
    },
    planner: { sell: "local" },
    sections: [
      {
        h2: "Why do real estate agents need an AI receptionist?",
        html: `<p>Because buyers and sellers call when they are interested, not when you are free. Sign calls come in during showings, listing questions arrive in the evening, and portal leads expect a reply in minutes. An agent who calls back two hours later is often the third agent that person has spoken to.</p>
<p>An AI receptionist answers every call immediately, gives accurate listing details, qualifies the caller and books the next step, so you can spend your time with clients instead of chasing voicemails. For web and portal leads, an <a href="/ai-appointment-setter/real-estate">AI appointment setter for real estate</a> calls them back within a minute.</p>`,
      },
      {
        h2: "How does it qualify buyers and sellers?",
        html: `<p>It asks the same short set of questions on every call, then books the right appointment:</p>
<ul>
<li><strong>Buyers:</strong> area, price range, timeline, pre-approval status, and whether they need to sell first. Qualified buyers are offered a showing or a buyer consultation.</li>
<li><strong>Sellers:</strong> property address, timeline, reason for moving and whether they are already listed. Sellers are offered a valuation call or listing appointment.</li>
<li><strong>Renters, vendors and existing clients:</strong> routed or logged according to your rules.</li>
</ul>
<p>Every answer is written to the contact, so your follow-up starts where the call ended.</p>`,
      },
      {
        h2: "Is it compliant with fair housing rules?",
        html: `<p>It is designed to be. The receptionist answers every caller from the same approved script and listing details, and it is set up not to ask about or comment on protected characteristics, describe neighbourhoods in terms of who lives there, or steer callers toward or away from areas. You and your broker approve the script before launch, and call summaries are kept so you can review conversations. You remain responsible for compliance, so we build the script with your brokerage's policies in mind.</p>`,
      },
      {
        h2: "Does it work with my real estate CRM?",
        html: `<p>Yes. We build on <a href="/gohighlevel-agency">GoHighLevel</a> by default, with calendar sync for showings, round-robin across agents, and long-term nurture for leads who are six to twelve months out. If your team runs on Follow Up Boss, kvCORE or another real estate CRM, we pass the contact, call summary and booked appointment across through an integration or webhook. Long-term leads can be woken up later with a <a href="/lead-reactivation">database reactivation campaign</a>.</p>`,
      },
      {
        h2: "Which calls should still go to a person?",
        html: `<p>Offers, negotiations, contract questions and anything emotional or legal belong with an agent. The receptionist is set up to recognise those calls and transfer them, or book an urgent callback when no one is available. It also never gives legal, tax or mortgage advice; it books the caller with the right professional instead.</p>`,
      },
      {
        h2: "How much does an AI receptionist for real estate cost?",
        html: `${COST}<p>One extra listing appointment a quarter usually covers it many times over. See how we generate real estate leads on <a href="/funnels-for/real-estate">real estate lead generation</a>, or read the general setup on our <a href="/ai-receptionist">AI receptionist</a> page.</p>`,
      },
    ],
    proof: {
      heading: "Real estate results from our booking and follow-up systems",
      items: [
        { value: "10", label: "Real estate appointments booked", href: "/case-studies/real-estate-10-appointments-booked" },
        { value: "247", label: "Real estate leads at $16.48 each", href: "/case-studies/real-estate-247-leads-at-16-48-cpl" },
        { value: "71", label: "Real estate leads at $12.12 each", href: "/case-studies/real-estate-71-leads-at-12-12-cpl" },
      ],
      more: { label: "See real estate results", href: "/case-studies/real-estate-lead-generation" },
    },
    faqs: [
      { q: "Can an AI receptionist answer questions about my listings?", a: "Yes, from the listing details you approve: price, bedrooms, bathrooms, square footage, HOA, school district names and open house times. If a caller asks something that is not in the details, it says it will check with the agent and books a callback." },
      { q: "Can it book showings?", a: "Yes. It offers showing slots from the listing agent's calendar, respects any showing instructions you set, and texts the buyer a confirmation and reminder. You can require pre-approval before it books a private showing." },
      { q: "Is an AI receptionist the same as an AI appointment setter?", a: "No. The receptionist answers people who call you. An AI appointment setter calls or texts new web and portal leads within a minute of them coming in. Many real estate teams use both, and they share the same calendar and CRM." },
      { q: "Will it work for a whole brokerage?", a: "Yes. Calls can be routed by listing, by area or by round-robin across agents, with separate calendars and an office line for everything else. Brokers see a summary of every call across the team." },
      { q: "Does it handle fair housing correctly?", a: "It answers every caller from the same approved script and is set up not to discuss protected characteristics or steer callers. Your broker approves the script before launch, and you keep a record of every conversation." },
      { q: "How fast can it go live?", a: "Five to ten business days: we write the scripts for buyers, sellers and listing questions, load your listings, connect calendars and transfer numbers, and run at least 50 test calls before your number is forwarded." },
    ],
    related: ["/ai-receptionist", "/ai-appointment-setter/real-estate", "/funnels-for/real-estate", "/ai-receptionist/contractors", "/lead-reactivation", "/ai-appointment-setter", "/gohighlevel-expert", "/case-studies/real-estate-lead-generation"],
    parent: RECEPTIONIST,
    updated: U,
  },
];
