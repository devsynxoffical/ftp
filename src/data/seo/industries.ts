import type { SeoPage } from "./types";

const HUB = { name: "Funnels by industry", path: "/funnels-for" };
const U = "2026-11-05";

export const INDUSTRY_PAGES: SeoPage[] = [
  {
    path: "/funnels-for",
    kind: "hub",
    keyword: "funnels by industry",
    title: "Funnels by Industry: 15 Proven Builds | Funnels That Print",
    description: "Funnels by industry: how we build lead and sales funnels for roofing, HVAC, solar, legal, mortgage, med spas, coaches, SaaS, eCommerce and more.",
    eyebrow: "Industries",
    h1: "Funnels by industry: what changes and what stays the same",
    intro:
      "This page groups our <strong>funnels by industry</strong>. The mechanics of a good funnel are constant: a specific offer, low-friction questions, contact in under a minute, reminders and tracking. What changes from one industry to the next is who the buyer is, what they need to hear before they hand over a phone number, how fast they decide, and which rules govern how you can follow up.",
    quick: {
      q: "Why should a funnel be built differently for each industry?",
      a: "Because buyers decide differently. A homeowner with a leaking roof wants a fast estimate, a personal injury claimant wants reassurance, a SaaS buyer wants a demo slot, and a shopper wants a checkout. The front end, qualifying questions, follow-up speed, compliance rules and realistic cost per lead all shift with the buyer.",
    },
    sections: [
      {
        h2: "Four funnel families",
        html: `<p>Almost every industry we serve falls into one of four patterns. Knowing which one you are in tells you the page type, the conversion event to optimize for and the follow-up that matters most.</p>
<div class="table-wrap"><table><thead><tr><th>Pattern</th><th>Industries</th><th>Front end</th><th>Event to optimize</th></tr></thead><tbody>
<tr><td>Local estimate</td><td><a href="/funnels-for/roofing">Roofing</a>, <a href="/funnels-for/hvac">HVAC</a>, <a href="/funnels-for/solar">solar</a>, <a href="/funnels-for/home-services">home services</a></td><td>Short quiz or estimator, OTP-verified phone</td><td>Verified lead, then booked inspection</td></tr>
<tr><td>Regulated consult</td><td><a href="/funnels-for/mortgage">Mortgage</a>, <a href="/funnels-for/insurance">insurance</a>, <a href="/funnels-for/personal-injury-lawyers">personal injury</a>, <a href="/funnels-for/real-estate">real estate</a></td><td>Eligibility quiz with explicit consent language</td><td>Qualified lead, then contacted or signed</td></tr>
<tr><td>Appointment clinic</td><td><a href="/funnels-for/med-spas">Med spas</a>, <a href="/funnels-for/dentists">dentists</a>, <a href="/funnels-for/gyms">gyms</a></td><td>Offer page plus booking calendar</td><td>Booked and shown appointment</td></tr>
<tr><td>High-ticket or product</td><td><a href="/funnels-for/coaches">Coaches</a>, <a href="/funnels-for/consultants">consultants</a>, <a href="/funnels-for/saas">SaaS</a>, <a href="/funnels-for/ecommerce">eCommerce</a></td><td>VSL, webinar, demo request or low-ticket checkout</td><td>Booked call, demo or purchase</td></tr>
</tbody></table></div>`,
      },
      {
        h2: "What stays constant across every industry",
        html: `<ul>
<li><strong>Speed.</strong> Across 60+ deployments of our <a href="/speed-to-lead">speed-to-lead automation</a>, median first contact was 38 seconds and lead-to-booking rose 2.4x on the same ad spend.</li>
<li><strong>Reminders.</strong> A three-channel reminder sequence lifts show-up rates as high as 88%. Our <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a> is free to copy.</li>
<li><strong>Feedback to the ad platform.</strong> Sending booked and closed events back through the <a href="/meta-conversions-api-setup">Conversions API</a> recovered 31% more events in our audits, which lets Meta find buyers instead of form fillers.</li>
<li><strong>A system, not a page.</strong> Every build connects the funnel to a <a href="/gohighlevel-agency">GoHighLevel</a> pipeline, so no lead sits untouched.</li>
</ul>`,
      },
      {
        h2: "What changes by industry",
        html: `<p><strong>Qualifying questions.</strong> A roofer asks about roof age and storm damage; a mortgage broker asks about purchase timeline and credit range; a SaaS team asks about seats and current tools. The questions do double duty: they filter tire kickers and give the setter a script.</p>
<p><strong>Compliance.</strong> Legal, mortgage and insurance funnels need clear consent language before any automated call or text. Clinics need careful wording so health details never travel to ad platforms. Housing and lending ads run under Meta's special ad categories with restricted targeting.</p>
<p><strong>Cost per lead.</strong> Our documented costs range from $0.50 for a med spa offer to $40 for B2B lead generation. Comparing your numbers to a different industry is misleading, so each page below cites cases from its own vertical.</p>
<p><strong>Who picks up the lead.</strong> Contractors often need an <a href="/ai-appointment-setter">AI appointment setter</a> because crews are on roofs all day; law firms need intake staff alerted instantly; eCommerce needs no human at all.</p>`,
      },
      {
        h2: "Every industry we build for",
        html: `<p>Home and local services: <a href="/funnels-for/roofing">roofing</a>, <a href="/funnels-for/hvac">HVAC</a>, <a href="/funnels-for/solar">solar</a>, <a href="/funnels-for/home-services">home services</a>. Financial and legal: <a href="/funnels-for/mortgage">mortgage</a>, <a href="/funnels-for/insurance">insurance</a>, <a href="/funnels-for/personal-injury-lawyers">personal injury lawyers</a>, <a href="/funnels-for/real-estate">real estate</a>. Health and wellness: <a href="/funnels-for/med-spas">med spas</a>, <a href="/funnels-for/dentists">dentists</a>, <a href="/funnels-for/gyms">gyms</a>. Expertise and software: <a href="/funnels-for/coaches">coaches</a>, <a href="/funnels-for/consultants">consultants</a>, <a href="/funnels-for/saas">SaaS</a>. Products: <a href="/funnels-for/ecommerce">eCommerce</a>.</p>
<p>Where we do not have documented cases in an industry, such as dental and gyms, the page says so and shows proof from the closest comparable business model instead. You can browse every result on <a href="/case-studies/all">all case studies</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$388K", label: "Personal injury revenue on $20,324 ad spend", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "686", label: "Roofing leads at $5.31 each", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
        { value: "$639K", label: "Med spa revenue from 178 clients", href: "/case-studies/med-spa-639k-in-revenue" },
        { value: "$71,934", label: "AI SaaS revenue in 24 days", href: "/case-studies/saas-71934-in-24-days-for-an-ai-saas" },
      ],
      more: { label: "Browse case studies by industry", href: "/case-studies" },
    },
    faqs: [
      { q: "Is my industry on the list?", a: "The fifteen pages here cover the industries where we have built the most funnels. If yours is missing, the closest pattern usually applies: a local service behaves like home services, a professional service like consulting, a clinic like a med spa. On a strategy call we map your offer to the right funnel family before quoting." },
      { q: "Do you build the same funnel for every client in an industry?", a: "No. We reuse what works structurally, such as question order, consent placement and reminder timing, but the offer, copy and qualifying questions are written for your market, service area and margins. Two roofers in different states with different average tickets will get different offers and different lead quality thresholds." },
      { q: "Which industries get the cheapest leads?", a: "In our documented cases, med spa offers and personal injury campaigns have produced some of the lowest costs, with $0.50 and $4.38 per lead respectively. Cheap leads are not the goal, though. The number that matters is cost per booked, shown or signed customer, which is why every page focuses on qualification and follow-up." },
      { q: "Do regulated industries need a different setup?", a: "Yes. Mortgage, insurance and legal funnels need explicit consent language next to the submit button before automated calls or texts, accurate disclosures, and careful claims. Clinics need wording and tracking that keep health details away from ad platforms. We build these in from the start rather than retrofitting them after an ad gets rejected." },
      { q: "How much does an industry funnel cost?", a: "Pricing is the same in every industry: $999 for design only, $1,499 for design, copy and full build, and $1,999 for the complete suite with CRM, automation, AI booking agent and tracking. Builds go live in 5 to 10 business days. Ad spend and software are paid directly by you." },
    ],
    related: ["/services", "/case-studies", "/sales-funnel-agency", "/speed-to-lead", "/tools/cost-per-lead-calculator"],
    parent: { name: "Home", path: "/" },
    updated: U,
  },
  {
    path: "/funnels-for/roofing",
    kind: "industry",
    keyword: "roofing lead generation funnel",
    serviceType: "Roofing lead generation funnel",
    title: "Roofing Lead Generation Funnel That Books Inspections",
    description: "A roofing lead generation funnel with a storm-damage quiz, OTP-verified phones and 60-second follow-up. Real cases from $4.27 to $24 per lead.",
    eyebrow: "Funnels for roofing companies",
    h1: "A roofing lead generation funnel built to fill the inspection calendar",
    intro:
      "A <strong>roofing lead generation funnel</strong> has one job: turn a homeowner scrolling past a storm-damage ad into a booked roof inspection. We have run this play for roofers across dozens of markets, with documented costs from $4.27 to $24 per lead, and the pattern that wins is consistent: a short quiz, a verified phone number, and a call inside a minute.",
    quick: {
      q: "What does a good roofing lead generation funnel look like?",
      a: "A three to five question quiz about roof age, damage and homeownership, an OTP-verified phone number, then an instant text and call that books a free inspection. The offer is the inspection or insurance claim help, not a discount. Follow-up runs for 14 days, and booked inspections are sent back to Meta as conversions.",
    },
    sections: [
      {
        h2: "The front end: a quiz, not a contact form",
        html: `<p>Homeowners do not wake up wanting a roofer. They react to a hailstorm, a stain on the ceiling, or a neighbor's new roof. The ad meets that moment and the funnel keeps the commitment small:</p>
<ol>
<li>Do you own the home? (filters renters immediately)</li>
<li>How old is the roof? Under 10, 10 to 20, over 20 years.</li>
<li>Any visible damage, leaks or missing shingles after recent storms?</li>
<li>Are you planning to file an insurance claim?</li>
<li>Name, address and mobile number, verified by a one-time code.</li>
</ol>
<p>OTP verification is the single biggest lead-quality lever we have seen in roofing. It costs some volume but removes fake numbers and accidental submits, which we walk through in the <a href="/case-studies/roofing-otp-verified-lead-forms-strategy-session">OTP-verified forms strategy session</a>. More question ideas are in our <a href="/templates/lead-qualification-questions">lead qualification questions</a> template.</p>`,
      },
      {
        h2: "Booking the inspection while the lead is warm",
        html: `<p>Roofers are on roofs, not at desks, so the follow-up has to run without them. Our <a href="/speed-to-lead">speed-to-lead automation</a> texts within seconds and rings the office or rep. When nobody answers, an <a href="/ai-appointment-setter">AI appointment setter</a> calls the homeowner, confirms the address and books a slot on the inspection calendar. Unbooked leads get a 14-day text and email sequence that references their quiz answers, and storm-season reactivation pulls old leads back in.</p>`,
      },
      {
        h2: "Realistic roofing cost per lead",
        html: `<p>From our <a href="/case-studies/roofing-lead-generation">roofing case studies</a>: 537 leads at $4.27, 686 leads at $5.31 in eight days, 635 leads at $6, 1,068 leads at $17.40 and 1,024 leads at $24 on $24,902 of spend. The spread reflects market size, storm timing and how strict the qualification is. Stricter funnels cost more per lead and less per signed contract. Our <a href="/blog/roofing-lead-generation-funnel-cost-per-lead-playbook">roofing cost per lead playbook</a> breaks this down further.</p>`,
      },
      {
        h2: "Roofing funnel mistakes we fix most often",
        html: `<ul>
<li><strong>Promising "free roof" or guaranteed insurance approval.</strong> It inflates volume, angers adjusters and gets ads rejected.</li>
<li><strong>Optimizing Meta for raw form fills.</strong> Send verified leads and booked inspections back as events instead.</li>
<li><strong>Calling back the next morning.</strong> By then two other roofers have already been to the house.</li>
<li><strong>No service-area filter.</strong> Ask for the zip code early and disqualify out-of-area addresses automatically.</li>
</ul>
<p>The same estimator pattern powers our <a href="/funnels-for/hvac">HVAC</a>, <a href="/funnels-for/solar">solar</a> and <a href="/funnels-for/home-services">home services</a> funnels. If you are an agency looking for roofing leads rather than a funnel, <a href="https://contractorleads.us">ContractorLeads</a> supplies verified contractor leads.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "686", label: "Roofing leads at $5.31 in 8 days", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
        { value: "$4.27", label: "Cost per lead across 537 leads", href: "/case-studies/roofing-537-leads-at-4-27-cpl" },
        { value: "52", label: "Booked calls from $646 ad spend", href: "/case-studies/roofing-52-booked-calls" },
        { value: "1,068", label: "Roofing leads at $17.40", href: "/case-studies/roofing-1068-leads-at-17-40-cpl" },
      ],
      more: { label: "All roofing case studies", href: "/case-studies/roofing-lead-generation" },
    },
    faqs: [
      { q: "How much should a roofing lead cost?", a: "In our documented roofing campaigns, cost per lead has ranged from $4.27 to $24. Leads under $10 usually come from broad storm-damage offers in active markets; $15 to $25 is typical when the funnel filters harder for homeowners with older roofs. Judge it by cost per signed job, not cost per lead." },
      { q: "Should a roofing funnel use Facebook lead forms or a landing page?", a: "Native lead forms are cheap but attract more accidental submits. A landing page quiz with OTP phone verification costs more per lead and produces far more reachable homeowners. Many roofers run both and compare cost per inspection after 30 days. Our comparison of lead ads and funnels covers the trade-off." },
      { q: "What offer works best for roofing ads?", a: "A free roof inspection or storm-damage assessment, ideally framed around a recent weather event in the area. Insurance claim guidance also works where it is legal and accurate. Avoid promising a free roof or guaranteed approval, which attracts the wrong leads and creates complaints and ad rejections." },
      { q: "How fast do roofing leads need to be contacted?", a: "Within a minute if possible. Homeowners after a storm often submit to several roofers, and the first one to call usually books the inspection. Across our speed-to-lead deployments, median first contact was 38 seconds and lead-to-booking rose 2.4x versus slower manual follow-up on the same ads." },
      { q: "Can an AI agent book roofing inspections?", a: "Yes. An AI voice agent calls new leads instantly, confirms homeownership, address and damage details, and books a slot on your inspection calendar. It works nights and weekends when crews are unavailable. AI calling typically runs about $0.10 to $0.25 per minute, roughly $3 to $9 per booked appointment." },
    ],
    related: ["/case-studies/roofing-lead-generation", "/speed-to-lead", "/ai-appointment-setter", "/funnels-for/hvac", "/funnels-for/solar", "/funnels-for/home-services", "/templates/lead-qualification-questions"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/funnels-for/hvac",
    kind: "industry",
    keyword: "hvac lead generation funnel",
    serviceType: "HVAC lead generation funnel",
    title: "HVAC Lead Generation Funnel for Installs and Tune-Ups",
    description: "An HVAC lead generation funnel that separates emergency repairs, tune-ups and replacements, then books them fast. Real cases from $5.57 per lead.",
    eyebrow: "Funnels for HVAC companies",
    h1: "An HVAC lead generation funnel that routes repair, tune-up and replacement leads",
    intro:
      "An <strong>HVAC lead generation funnel</strong> has to handle three very different buyers: someone whose AC just died in July, someone who wants a cheap seasonal tune-up, and someone pricing a full system replacement. Treating them the same wastes the high-value ones. Our HVAC builds sort them in the first question, and our cases include 326 leads at $5.57 and 5,628 booked appointments.",
    quick: {
      q: "How is an HVAC lead generation funnel different from other home service funnels?",
      a: "HVAC demand is seasonal and split between urgent repairs, low-ticket maintenance and high-ticket replacements. The funnel asks the job type first, routes emergencies to an immediate call, books tune-ups straight onto the calendar, and sends replacement leads to a comfort consultant with financing information ready.",
    },
    sections: [
      {
        h2: "Three entry points, one funnel",
        html: `<div class="table-wrap"><table><thead><tr><th>Lead type</th><th>Offer</th><th>Next step</th></tr></thead><tbody>
<tr><td>No heat or no cool</td><td>Same-day diagnostic</td><td>Instant call, dispatch alert to the on-call tech</td></tr>
<tr><td>Maintenance</td><td>Seasonal tune-up or membership plan</td><td>Self-book a slot on the calendar</td></tr>
<tr><td>Replacement</td><td>Free in-home estimate, financing options</td><td>Consultant call, then in-home visit</td></tr>
</tbody></table></div>
<p>The qualifying questions after the job type are short: system age, fuel type, home size range and zip code. Replacement leads also get a financing question so the consultant knows whether to lead with monthly payments. See the <a href="/templates/lead-qualification-questions">lead qualification questions</a> template for wording.</p>`,
      },
      {
        h2: "Follow-up that respects urgency",
        html: `<p>A broken AC in a heat wave is a race. Our <a href="/speed-to-lead">speed-to-lead automation</a> calls emergency leads within seconds and alerts dispatch by text. Tune-up leads that do not self-book get an <a href="/ai-voice-agents">AI voice agent</a> call to fill open slots, which is how a maintenance offer can generate thousands of appointments. Replacement leads enter a longer nurture with financing, rebate and review content, because those decisions take weeks.</p>`,
      },
      {
        h2: "What our HVAC campaigns have cost",
        html: `<p>Across our <a href="/case-studies/hvac-lead-generation">HVAC case studies</a>: 326 leads at $5.57, 55 leads at $11.02 on $606 of spend, and 630 leads at $23.09. On the booking side, one program produced <a href="/case-studies/hvac-5628-appointments-booked">5,628 booked appointments</a>, and another booked 1,956 appointments for $36,444 in tracked revenue. Tune-up offers sit at the low end of cost per lead; replacement offers cost more and are worth far more.</p>`,
      },
      {
        h2: "Where HVAC funnels go wrong",
        html: `<ul>
<li><strong>Running a $59 tune-up offer with no upsell path.</strong> The tune-up is a door opener; the technician needs a process for flagging aging systems.</li>
<li><strong>Ignoring the season.</strong> Switch creative and budget between cooling and heating months instead of running one evergreen ad.</li>
<li><strong>One calendar for everything.</strong> Emergencies, maintenance and estimates need separate availability.</li>
<li><strong>Not tracking booked jobs.</strong> Without booked events in Meta, the algorithm keeps buying the cheapest form fills.</li>
</ul>
<p>Compare with our <a href="/funnels-for/roofing">roofing</a>, <a href="/funnels-for/solar">solar</a> and <a href="/funnels-for/home-services">home services</a> funnels. Agencies that need HVAC leads delivered rather than a funnel can look at <a href="https://contractorleads.us">ContractorLeads</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "$5.57", label: "Cost per lead across 326 leads", href: "/case-studies/hvac-326-leads-at-5-57-cpl" },
        { value: "$36,444", label: "Revenue from 1,956 appointments", href: "/case-studies/hvac-36k-in-revenue" },
      ],
      more: { label: "All HVAC case studies", href: "/case-studies/hvac-lead-generation" },
    },
    faqs: [
      { q: "What is a good cost per lead for HVAC?", a: "Our HVAC campaigns have ranged from $5.57 to $23.09 per lead. Maintenance and tune-up offers sit at the low end, while replacement and new-system leads cost more because fewer people are in market at any time. Track cost per booked job and revenue per lead rather than chasing the cheapest number." },
      { q: "Should HVAC companies advertise tune-ups or replacements?", a: "Usually both, with separate campaigns. Tune-ups fill the calendar during shoulder seasons and create replacement opportunities when technicians find aging equipment. Replacement campaigns target homeowners with older systems and lead with financing. Mixing them in one ad confuses the offer and the algorithm." },
      { q: "How do you handle emergency HVAC leads after hours?", a: "Emergency leads trigger an instant call and a text to the on-call technician or dispatcher. If nobody picks up, an AI voice agent gathers the address, symptoms and system type, then books the earliest slot or escalates. The homeowner hears back in under a minute instead of leaving a voicemail." },
      { q: "Can the funnel sell maintenance memberships?", a: "Yes. A membership offer works well as the follow-up to a tune-up booking, either on the thank-you page or through the technician on site. The CRM tags members, schedules their next visit automatically and sends reminders, which keeps them off competitors' radar." },
      { q: "Do HVAC funnels need financing information?", a: "For replacements, yes. Most homeowners compare monthly payments rather than total price, so the funnel asks whether financing matters and the consultant comes prepared. Keep financing claims accurate and avoid advertising specific rates or terms unless you include the disclosures your lender requires." },
    ],
    related: ["/case-studies/hvac-lead-generation", "/speed-to-lead", "/ai-voice-agents", "/funnels-for/roofing", "/funnels-for/solar", "/funnels-for/home-services", "/templates/lead-qualification-questions"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/funnels-for/solar",
    kind: "industry",
    keyword: "solar lead generation funnel",
    serviceType: "Solar lead generation funnel",
    title: "Solar Lead Generation Funnel With Savings Qualifiers",
    description: "A solar lead generation funnel that qualifies on ownership, roof and bill size before booking a consultation. Real solar cases at $14.71 per lead.",
    eyebrow: "Funnels for solar installers",
    h1: "A solar lead generation funnel that filters for homeowners who can actually go solar",
    intro:
      "A <strong>solar lead generation funnel</strong> lives or dies on qualification. Solar ads attract curiosity, renters and people who heard solar is free. The funnel's job is to find homeowners with a suitable roof and a large enough electric bill, then get them to a consultation fast. Our solar cases include 300 leads at $14.71 and 232 leads in another campaign.",
    quick: {
      q: "What should a solar lead generation funnel ask?",
      a: "Homeownership, average monthly electric bill, roof shade and age, credit or financing preference, and zip code for utility and service area. Those answers predict whether a system pencils out. Qualified homeowners then get a savings estimate and a booked consultation, while unqualified ones receive a polite exit instead of a sales call.",
    },
    sections: [
      {
        h2: "Building the savings quiz",
        html: `<p>The front end is a five to seven step quiz framed as a savings check:</p>
<ol>
<li>Zip code, to confirm service area and utility.</li>
<li>Do you own the home?</li>
<li>Average monthly electric bill, in ranges.</li>
<li>How much shade does your roof get?</li>
<li>Roof age or recent replacement.</li>
<li>Preference for cash, loan or lease.</li>
<li>Name and OTP-verified mobile number.</li>
</ol>
<p>Bill size is the strongest filter. A homeowner with a very low bill rarely becomes a sale, so the funnel can route them to a nurture list instead of the closer's calendar. Wording for these steps is in the <a href="/templates/lead-qualification-questions">lead qualification questions</a> template.</p>`,
      },
      {
        h2: "Consultation booking and the long nurture",
        html: `<p>Solar is a considered purchase with spouses, financing and roof inspections involved. Qualified leads get an instant call through <a href="/speed-to-lead">speed-to-lead automation</a>, then a booked virtual or in-home consultation with three reminders. Leads who are not ready enter a 30 to 60 day sequence built with <a href="/crm-automation">CRM automation</a>: how net metering works in their state, financing explainers, installation timelines and local reviews.</p>`,
      },
      {
        h2: "Solar cost per lead in our cases",
        html: `<p>From our <a href="/case-studies/solar-home-services-lead-generation">solar and home services case studies</a>, a solar campaign produced <a href="/case-studies/solar-300-leads-at-14-71-cpl">300 leads at $14.71</a>, and another delivered 232 leads. Solar leads cost more than tune-up or gutter leads because the qualifying bar is higher, and that is the point. Comparable home services builds landed between $5.10 and $23.82 per lead.</p>`,
      },
      {
        h2: "Compliance and claims",
        html: `<p>Solar advertising draws scrutiny. Avoid "free solar," "government-paid panels" or guaranteed savings figures; describe incentives accurately and only where they apply. Because most solar follow-up uses automated calls and texts, the form needs clear consent language next to the submit button, and you should never buy shared leads whose consent you cannot verify. Agencies sourcing solar leads can look at <a href="https://contractorleads.us">ContractorLeads</a> for verified contractor leads.</p>`,
      },
      {
        h2: "Mistakes that inflate solar acquisition cost",
        html: `<ul>
<li>Skipping the bill question to get cheaper leads, then paying closers to sit with renters.</li>
<li>Booking consultations without both decision-makers.</li>
<li>Letting no-shows die instead of rebooking automatically.</li>
<li>Running national creative in markets with very different utility rates.</li>
</ul>
<p>Related builds: <a href="/funnels-for/roofing">roofing</a>, <a href="/funnels-for/hvac">HVAC</a> and <a href="/funnels-for/home-services">home services</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "300", label: "Solar leads at $14.71", href: "/case-studies/solar-300-leads-at-14-71-cpl" },
        { value: "232", label: "Solar leads generated", href: "/case-studies/solar-232-leads" },
        { value: "337", label: "Home services appointments on $1,621", href: "/case-studies/home-services-337-appointments-booked" },
      ],
      more: { label: "Solar and home services case studies", href: "/case-studies/solar-home-services-lead-generation" },
    },
    faqs: [
      { q: "How much does a solar lead cost?", a: "Our documented solar campaign landed at $14.71 per lead across 300 leads. Solar leads usually cost more than other home services because the funnel filters for homeowners with suitable roofs and high enough bills. A cheaper unfiltered lead often costs more per signed contract once closer time is counted." },
      { q: "Should solar funnels show a savings estimate?", a: "A rough range based on bill size and location helps engagement, as long as it is clearly labeled an estimate and not a guarantee. The detailed proposal should come from the consultation after a roof and usage review. Overpromising savings is a common source of complaints and cancellations." },
      { q: "Are solar leads from lead vendors worth it?", a: "Shared leads sold to several installers are cheap but heavily contested, and consent for automated calls may not transfer to you. Exclusive leads from your own funnel cost more per lead but you control the qualifying questions, the consent language and the speed of follow-up." },
      { q: "How do you reduce solar consultation no-shows?", a: "Confirm both decision-makers will attend, send reminders by text, email and call at 24 hours, 2 hours and 15 minutes, and give a reason to show up such as a personalized savings review. Automatic rebooking for no-shows recovers many appointments that would otherwise be lost." },
      { q: "What platform do you build solar funnels on?", a: "Usually GoHighLevel, because the quiz, CRM pipeline, SMS, calendar and AI booking agent live in one account. If you already use a solar-specific CRM, we send qualified leads into it by integration and keep the funnel, reminders and tracking in the same system." },
    ],
    related: ["/case-studies/solar-home-services-lead-generation", "/speed-to-lead", "/crm-automation", "/funnels-for/roofing", "/funnels-for/hvac", "/funnels-for/home-services", "/templates/lead-qualification-questions"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/funnels-for/real-estate",
    kind: "industry",
    keyword: "real estate lead funnel",
    serviceType: "Real estate lead funnel",
    title: "Real Estate Lead Funnel for Buyers and Sellers",
    description: "A real estate lead funnel with separate buyer and seller paths, home value and pre-approval qualifiers, and fast agent follow-up. Cases from $11.57.",
    eyebrow: "Funnels for real estate agents",
    h1: "A real estate lead funnel that separates buyers, sellers and browsers",
    intro:
      "A <strong>real estate lead funnel</strong> has to cope with the longest and messiest buying cycle of any industry we serve. Most people who click a listing ad are months away from moving. The funnel's job is to find the ones who are ready now, keep the rest warm, and get both to an agent without the agent spending hours on cold calls. Our real estate cases range from $11.57 to $28 per lead.",
    quick: {
      q: "How should a real estate lead funnel be structured?",
      a: "Split it into a seller path and a buyer path. Sellers get a home value estimate in exchange for address and timeline. Buyers get a curated listings or first-time buyer guide and answer questions about price range, area and pre-approval. Both feed a CRM that calls hot leads instantly and nurtures the rest for months.",
    },
    sections: [
      {
        h2: "Seller and buyer paths",
        html: `<div class="table-wrap"><table><thead><tr><th></th><th>Seller path</th><th>Buyer path</th></tr></thead><tbody>
<tr><td>Hook</td><td>What is your home worth in today's market?</td><td>New listings in your price range, or a first-time buyer plan</td></tr>
<tr><td>Key questions</td><td>Address, timeline to sell, already listed or not, next move</td><td>Area, price range, pre-approved or not, timeline</td></tr>
<tr><td>Hot signal</td><td>Selling within 90 days, not listed</td><td>Pre-approved, moving within 90 days</td></tr>
<tr><td>Next step</td><td>Listing consultation</td><td>Buyer consultation or showing</td></tr>
</tbody></table></div>
<p>The question wording matters because it doubles as the agent's call script. Our <a href="/templates/lead-qualification-questions">lead qualification questions</a> template includes real estate examples.</p>`,
      },
      {
        h2: "Follow-up for a six-month decision",
        html: `<p>Hot leads get a call within a minute through <a href="/speed-to-lead">speed-to-lead automation</a>, because the first agent to talk to a ready seller usually gets the listing appointment. Everyone else goes into a long nurture built with <a href="/crm-automation">CRM automation</a>: monthly market updates for their area, new listings that match their answers, and a check-in text every few weeks asking whether their timeline has changed. A lead who says "next year" in March is often ready by August.</p>`,
      },
      {
        h2: "Cost per lead from our real estate campaigns",
        html: `<p>From our <a href="/case-studies/real-estate-lead-generation">real estate case studies</a>: <a href="/case-studies/real-estate-69-leads-at-11-57-cpl">69 leads at $11.57</a> on $798, 71 leads at $12.12, 247 leads at $16.48 on $4,069, and 157 leads at $28. Seller leads tend to cost more than buyer leads and are worth more to most agents.</p>`,
      },
      {
        h2: "Fair housing and ad rules",
        html: `<p>Real estate ads on Meta run under the housing special ad category, which removes age, gender and zip-code targeting and narrows other options. That means the creative and the funnel questions do the targeting. Never write copy that expresses a preference about who should live somewhere, and keep the broker name and license details your state requires on every page.</p>`,
      },
      {
        h2: "Common real estate funnel mistakes",
        html: `<ul>
<li>Sending every lead to a single agent who calls once and gives up.</li>
<li>Instant home value tools with no human follow-up, which feel like bait.</li>
<li>Treating "just browsing" as dead instead of nurturing.</li>
<li>No handoff to a lender partner for buyers who are not yet pre-approved.</li>
</ul>
<p>Related builds: <a href="/funnels-for/mortgage">mortgage</a>, <a href="/funnels-for/insurance">insurance</a> and <a href="/funnels-for/home-services">home services</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$11.57", label: "Cost per lead across 69 leads", href: "/case-studies/real-estate-69-leads-at-11-57-cpl" },
        { value: "247", label: "Real estate leads at $16.48", href: "/case-studies/real-estate-247-leads-at-16-48-cpl" },
        { value: "71", label: "Real estate leads at $12.12", href: "/case-studies/real-estate-71-leads-at-12-12-cpl" },
      ],
      more: { label: "All real estate case studies", href: "/case-studies/real-estate-lead-generation" },
    },
    faqs: [
      { q: "How much do real estate leads cost from a funnel?", a: "Our documented real estate campaigns produced leads between $11.57 and $28. Seller leads with a home value hook usually cost more than buyer leads but are worth more because a listing is the more profitable side for most agents. Cost per appointment is the better measure of success." },
      { q: "Do home value funnels still work?", a: "Yes, if the follow-up is human and fast. Homeowners expect an automated estimate to be rough, so the funnel positions it as a starting point and offers a free comparative market analysis from a local agent. Instant tools with no call afterward tend to produce low-quality leads and few appointments." },
      { q: "How long should real estate leads be nurtured?", a: "At least six to twelve months. Many buyers and sellers start researching long before they act. A light nurture with area market updates, matching listings and occasional check-in texts keeps you top of mind, and the CRM moves a lead back to the hot list when they reply or revisit." },
      { q: "Can real estate ads target specific neighborhoods?", a: "Meta's housing special ad category restricts zip-code targeting and requires a minimum location radius. You can still reach a general area, then use creative that names neighborhoods, property types and price points so the right people self-select. The funnel's area question confirms fit before an agent calls." },
      { q: "Should teams use an AI agent for real estate leads?", a: "An AI voice agent is useful for the first contact: calling within seconds, confirming timeline, price range and pre-approval, and booking a call with the right agent. It frees agents from dialing cold leads. Complex conversations about pricing strategy or negotiation should still go to a person." },
    ],
    related: ["/case-studies/real-estate-lead-generation", "/speed-to-lead", "/crm-automation", "/funnels-for/mortgage", "/funnels-for/insurance", "/funnels-for/home-services", "/templates/lead-qualification-questions"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/funnels-for/mortgage",
    kind: "industry",
    keyword: "mortgage lead generation funnel",
    serviceType: "Mortgage lead generation funnel",
    title: "Mortgage Lead Generation Funnel With Verified Leads",
    description: "A mortgage lead generation funnel with purchase and refinance paths, OTP verification and TCPA-ready consent. Real cases from $4.31 per lead.",
    eyebrow: "Funnels for mortgage brokers and loan officers",
    h1: "A mortgage lead generation funnel built for verified, compliant leads",
    intro:
      "A <strong>mortgage lead generation funnel</strong> has to produce borrowers a loan officer can actually reach and help, under some of the strictest advertising and calling rules of any industry. Our mortgage builds combine a short eligibility quiz, phone verification and clear consent language, and our cases include 142 leads at $4.31 and $65K+ in revenue on $5,300 of ad spend.",
    quick: {
      q: "What makes a mortgage lead generation funnel work?",
      a: "A specific offer, such as a first-time buyer plan or a payment review, a short quiz on loan purpose, timeline, property value and credit range, OTP phone verification, and consent language that covers automated calls and texts. Then a loan officer or AI agent calls within a minute and books a consultation.",
    },
    sections: [
      {
        h2: "Purchase and refinance qualifiers",
        html: `<p>The quiz forks on the first question, loan purpose, because purchase and refinance borrowers need different information:</p>
<ul>
<li><strong>Purchase:</strong> timeline, price range, down payment saved, first-time buyer or not, working with an agent or not.</li>
<li><strong>Refinance:</strong> estimated home value, current balance range, goal (lower payment, cash out, shorter term).</li>
<li><strong>Both:</strong> self-reported credit range, state, and an OTP-verified mobile number.</li>
</ul>
<p>Offers matter more than rate claims. We tested several in <a href="/case-studies/mortgage-5-offers-that-book-more-appointments">5 offers that book more appointments</a>, and the details of OTP verification are in our <a href="/blog/mortgage-lead-generation-meta-ads-otp-verified">mortgage OTP-verified lead guide</a>.</p>`,
      },
      {
        h2: "TCPA consent and advertising rules",
        html: `<p>Mortgage follow-up relies on calls and texts, often automated, so the form needs clear consent language next to the submit button naming your company, the channels and the fact that consent is not a condition of a loan. Store the consent text, timestamp and page URL with each lead. The FCC treats AI-generated voices as artificial voices under the TCPA, so AI calling needs the same consent.</p>
<p>Show your NMLS ID and Equal Housing Opportunity language, and do not advertise rates, payments or terms without the disclosures your compliance team requires. Meta runs mortgage ads under a special ad category that limits targeting, so the offer and creative do the filtering.</p>`,
      },
      {
        h2: "From verified lead to booked consultation",
        html: `<p>Verified leads trigger an instant text and call through <a href="/speed-to-lead">speed-to-lead automation</a>. An <a href="/ai-voice-agents">AI voice agent</a> can confirm loan purpose and timeline and book a slot with the right loan officer, then reminders go out by text and email. Borrowers who are six months out get a nurture on credit, down payment and pre-approval, so they return to you rather than the first lender they see.</p>`,
      },
      {
        h2: "Mortgage cost per lead in our campaigns",
        html: `<p>From our <a href="/case-studies/mortgage-insurance-lead-generation">mortgage and insurance case studies</a>: 142 leads at $4.31, 492 leads at $5.23, 154 leads at $14.58, 823 leads at $23.97 on $19,725, and 208 leads at $25.48 that produced $65K+ in revenue on $5,300. The higher-cost campaigns used stricter qualification and still delivered the best revenue per dollar.</p>
<p>Mistakes we see most: buying shared leads with unverifiable consent, rate-led creative that attracts shoppers, and loan officers calling once and giving up. Related builds: <a href="/funnels-for/insurance">insurance</a>, <a href="/funnels-for/real-estate">real estate</a> and <a href="/funnels-for/personal-injury-lawyers">personal injury</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$65K+", label: "Mortgage revenue on $5,300 ad spend", href: "/case-studies/mortgage-65k-plus-revenue-on-5300-ad-spend" },
        { value: "$4.31", label: "Cost per lead across 142 leads", href: "/case-studies/mortgage-142-leads-at-4-31-cpl" },
        { value: "492", label: "Mortgage leads at $5.23", href: "/case-studies/mortgage-492-leads-at-5-23-cpl" },
        { value: "823", label: "Mortgage leads at $23.97", href: "/case-studies/mortgage-823-leads-at-23-97-cpl" },
      ],
      more: { label: "Mortgage and insurance case studies", href: "/case-studies/mortgage-insurance-lead-generation" },
    },
    faqs: [
      { q: "How much does a mortgage lead cost from Meta ads?", a: "Our documented mortgage campaigns ranged from $4.31 to $25.48 per lead. The lowest costs came from broad first-time buyer offers; higher costs came from stricter refinance and purchase qualification. One campaign at $25.48 per lead produced $65K+ in revenue on $5,300 of spend, so judge by funded loans." },
      { q: "Why use OTP verification on mortgage forms?", a: "A one-time code sent to the borrower's phone proves the number is real and belongs to the person submitting. It removes fake numbers and typos, makes consent records stronger, and lets loan officers spend their time on reachable borrowers. Expect slightly fewer leads and far more conversations." },
      { q: "What consent language does a mortgage funnel need?", a: "Clear language next to the submit button stating that the borrower agrees to be contacted by your company by call and text, including automated technology, at the number provided, and that consent is not required to obtain a loan. Have your compliance counsel approve the final wording for your states." },
      { q: "Can mortgage ads mention interest rates?", a: "Rates and payment figures are trigger terms that require additional disclosures, and rates change quickly, which makes ads stale. Most of our mortgage funnels lead with an outcome instead, such as a payment review or first-time buyer plan, and leave specific rates to the loan officer conversation." },
      { q: "Should loan officers use an AI voice agent?", a: "For first contact and booking, yes, provided the borrower consented to automated calls. The agent calls within seconds, confirms loan purpose and timeline, and books a consultation. It should not quote rates or give loan advice. AI calling runs about $3 to $9 per booked appointment." },
    ],
    related: ["/case-studies/mortgage-insurance-lead-generation", "/speed-to-lead", "/ai-voice-agents", "/funnels-for/insurance", "/funnels-for/real-estate", "/funnels-for/personal-injury-lawyers", "/templates/lead-qualification-questions"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/funnels-for/insurance",
    kind: "industry",
    keyword: "insurance lead generation funnel",
    serviceType: "Insurance lead generation funnel",
    title: "Insurance Lead Generation Funnel for Agents",
    description: "An insurance lead generation funnel for final expense and life agents: eligibility quiz, verified phones and consent-first follow-up. Cases at $7.79.",
    eyebrow: "Funnels for insurance agents",
    h1: "An insurance lead generation funnel that agents can call with confidence",
    intro:
      "An <strong>insurance lead generation funnel</strong> works when it delivers exclusive, verified prospects with documented consent to be contacted. Our strongest insurance results come from final expense, where one campaign produced 2,440 leads at $7.79 each. The structure below is built from that work and applies to most individual life and protection products.",
    quick: {
      q: "How does an insurance lead generation funnel qualify prospects?",
      a: "It asks age range, state, coverage amount wanted, who the coverage is for and basic health screening in plain language, then verifies the phone number. Prospects who fit the product book a call or receive an instant callback. Every lead carries a stored consent record covering calls and texts from your agency.",
    },
    sections: [
      {
        h2: "The final expense pattern",
        html: `<p>Final expense buyers are typically older, phone-first and cautious. The funnel is short and plain:</p>
<ol>
<li>Who is the coverage for? (yourself, spouse, parent)</li>
<li>Age range and state.</li>
<li>Coverage amount, in simple ranges.</li>
<li>A yes or no question on major health conditions, worded generally.</li>
<li>Name and mobile number, verified by code, with consent language beside the button.</li>
</ol>
<p>Large buttons, big type and a phone number to call directly all raise completion with this audience. Our <a href="/case-studies/final-expense-2440-leads-at-7-79-cpl">final expense case</a> used this pattern at scale.</p>`,
      },
      {
        h2: "Compliance before volume",
        html: `<p>Insurance is one of the most heavily enforced areas for unwanted calls and texts. Your form must collect clear consent naming your agency before any automated call, text or AI voice contact, and you should store the consent text, timestamp and page with every lead. Avoid language implying a government program or a guaranteed approval unless the product truly is guaranteed issue, and include the licensing details your states require. Medicare products carry additional marketing rules and should be reviewed separately.</p>`,
      },
      {
        h2: "Contact speed and the agent workflow",
        html: `<p>Insurance prospects often fill out several forms. The first agent to call has the advantage, so our <a href="/speed-to-lead">speed-to-lead automation</a> dials within seconds and texts a short intro with the agent's name and photo. Missed calls trigger an <a href="/ai-appointment-setter">AI appointment setter</a> that schedules a callback at a time the prospect chooses. Reminders and a short <a href="/templates/sms-follow-up-templates">SMS follow-up sequence</a> recover prospects who go quiet.</p>`,
      },
      {
        h2: "What insurance leads have cost us",
        html: `<p>From our <a href="/case-studies/mortgage-insurance-lead-generation">mortgage and insurance case studies</a>, final expense campaigns produced 2,440 leads at $7.79 on $19,011.31 of spend, plus a separate run of <a href="/case-studies/final-expense-55-leads">55 final expense leads</a> on video. Exclusive leads at that price compare favorably with aged or shared leads, because no other agent is calling the same person.</p>
<p>Mistakes to avoid: buying shared leads with unclear consent, long forms that tire older prospects, and calling from unregistered numbers that get flagged as spam. Related builds: <a href="/funnels-for/mortgage">mortgage</a>, <a href="/funnels-for/real-estate">real estate</a> and <a href="/funnels-for/personal-injury-lawyers">personal injury</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "2,440", label: "Final expense leads at $7.79", href: "/case-studies/final-expense-2440-leads-at-7-79-cpl" },
        { value: "55", label: "Final expense leads, video walkthrough", href: "/case-studies/final-expense-55-leads" },
        { value: "492", label: "Mortgage leads at $5.23 with the same verified-form system", href: "/case-studies/mortgage-492-leads-at-5-23-cpl" },
      ],
      more: { label: "Mortgage and insurance case studies", href: "/case-studies/mortgage-insurance-lead-generation" },
    },
    faqs: [
      { q: "What does a final expense lead cost from a funnel?", a: "Our largest documented final expense campaign produced 2,440 exclusive leads at $7.79 each on $19,011.31 of ad spend. Costs vary by state, season and how strict the health and age screening is. Exclusive leads from your own funnel are usually worth more than cheaper shared or aged leads." },
      { q: "Do insurance funnels need TCPA consent?", a: "Yes. Any automated call, prerecorded or AI voice message, or marketing text needs prior express written consent from the prospect, naming your agency. The consent language should sit beside the submit button and be stored with the lead. Your compliance advisor should approve the final wording for your states." },
      { q: "Can I use an AI agent to call insurance leads?", a: "Yes, if the prospect consented to automated and artificial voice calls from your agency. The AI agent makes first contact, confirms basic eligibility and books a call with a licensed agent. It should not quote premiums or give coverage advice; those conversations belong with a licensed person." },
      { q: "Which insurance products fit this funnel?", a: "Our documented results are in final expense. The same structure suits other individual products such as term life and mortgage protection, adjusted for the buyer's age and questions. Commercial and group insurance buy differently and are closer to our consulting and B2B funnels." },
      { q: "How do you keep older prospects from abandoning the form?", a: "Fewer steps, large tap targets, plain wording, and a visible phone number for people who would rather call. We also avoid detailed medical questions on the form; a single general screening question is enough, and the licensed agent handles the rest on the phone." },
    ],
    related: ["/case-studies/mortgage-insurance-lead-generation", "/speed-to-lead", "/ai-appointment-setter", "/funnels-for/mortgage", "/funnels-for/real-estate", "/funnels-for/personal-injury-lawyers", "/templates/sms-follow-up-templates"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/funnels-for/med-spas",
    kind: "industry",
    keyword: "med spa funnel",
    serviceType: "Med spa funnel",
    title: "Med Spa Funnel That Books Treatments and Consults",
    description: "A med spa funnel with an intro offer, booking calendar, deposits and three-channel reminders. Real cases include $639K from 178 clients.",
    eyebrow: "Funnels for med spas and aesthetic clinics",
    h1: "A med spa funnel that turns intro offers into long-term clients",
    intro:
      "A <strong>med spa funnel</strong> sells a first visit, not a single treatment. The intro offer brings a new client through the door; the consultation, follow-up and rebooking turn them into someone worth thousands a year. Our med spa results include $639,000 in revenue from 178 clients and $11,700 from $590 of ad spend.",
    quick: {
      q: "What should a med spa funnel include?",
      a: "One clear intro offer on a single treatment, a short page with real before-and-after policy-safe proof, a booking calendar with an optional deposit, instant text confirmation, and three-channel reminders. After the visit, automated rebooking and membership offers turn a first treatment into recurring revenue.",
    },
    sections: [
      {
        h2: "Picking the intro offer",
        html: `<p>The best-performing med spa funnels lead with one treatment people already understand, priced to remove hesitation: a first injectable session, a facial, a laser package intro, or a free consultation with a credit toward treatment. The page explains who it is for, what happens at the visit, who performs it and what it costs, then shows the calendar. Qualifying questions are light: treatment interest, first visit or returning, and preferred times.</p>`,
      },
      {
        h2: "Deposits, reminders and show rate",
        html: `<p>No-shows are the main leak in clinic funnels. Taking a small refundable deposit at booking filters casual bookers, and our <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a> sends text, email and call reminders at set intervals. Three-channel reminders have lifted show rates as high as 88% across our builds. Unbooked leads get a call from an <a href="/ai-appointment-setter">AI appointment setter</a> within a minute, and <a href="/crm-automation">CRM automation</a> handles rebooking reminders based on each treatment's natural interval.</p>`,
      },
      {
        h2: "HIPAA-sensitive wording and tracking",
        html: `<p>Med spas sit close to healthcare, so treat client details carefully. Keep forms to the minimum needed to book, avoid asking about medical conditions before the consultation, and never pass treatment details or health information into ad platform events or URL parameters. Send generic events such as "booked" through the Conversions API rather than treatment names. If you collect health history online, use a form and CRM setup covered by an appropriate agreement. Ad copy should avoid implying the viewer has a condition, and before-and-after images must follow Meta's personal health policies.</p>`,
      },
      {
        h2: "Results from our med spa clients",
        html: `<p>From our <a href="/case-studies/med-spa-marketing">med spa case studies</a>: one clinic generated <a href="/case-studies/med-spa-639k-in-revenue">$639,000 from 178 clients</a>, another produced $74,100 from 303 clients on $10K of spend, and a smaller test turned $590 into $11,700, a 19.8x return. Cost per lead has been as low as $0.50 on a strong intro offer, and 1,011 leads came from $4,703 in another campaign.</p>`,
      },
      {
        h2: "Mistakes that waste med spa ad spend",
        html: `<ul>
<li>Offering the whole menu instead of one intro treatment.</li>
<li>Discounts so deep that they attract only one-time bargain hunters.</li>
<li>No deposit and one reminder, then blaming the ads for no-shows.</li>
<li>Letting front-desk staff call leads back hours later.</li>
</ul>
<p>Related builds: <a href="/funnels-for/dentists">dentists</a>, <a href="/funnels-for/gyms">gyms</a> and <a href="/funnels-for/ecommerce">eCommerce</a> for clinics selling skincare products.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$639K", label: "Med spa revenue from 178 clients", href: "/case-studies/med-spa-639k-in-revenue" },
        { value: "19.8x", label: "$11,700 revenue on $590 ad spend", href: "/case-studies/med-spa-12k-revenue-on-590-ad-spend" },
        { value: "$74,100", label: "Revenue from 303 clients on $10K", href: "/case-studies/med-spa-74k-revenue-on-10k-ad-spend" },
        { value: "$0.50", label: "Cost per lead on an intro offer", href: "/case-studies/med-spa-0-50-cost-per-lead" },
      ],
      more: { label: "All med spa case studies", href: "/case-studies/med-spa-marketing" },
    },
    faqs: [
      { q: "How much does a med spa lead cost?", a: "Our documented med spa campaigns have ranged from $0.50 per lead on a strong intro offer to higher costs for premium treatments. One campaign produced 1,011 leads on $4,703 of spend. The more important numbers are show rate and how many first-time clients rebook within 90 days." },
      { q: "Should med spas take a deposit when booking?", a: "In most cases, yes. A small refundable deposit reduces no-shows and filters people who book on impulse. Make the refund or credit policy clear on the booking page. Combined with three-channel reminders, deposits are one of the simplest ways to protect provider time." },
      { q: "Is a med spa funnel subject to HIPAA?", a: "It depends on the practice and what you collect, so confirm with your compliance advisor. Either way, keep forms minimal, never send treatment or health details to ad platforms, and use a CRM and form setup with an appropriate agreement if you collect health history online before the visit." },
      { q: "What intro offer works best for a med spa?", a: "A single, well-understood treatment priced to remove hesitation, such as a first injectable session, signature facial or a consultation credit. Avoid offering the whole menu. The goal is a first visit and a good experience; rebooking automation and memberships turn that visit into long-term revenue." },
      { q: "Can an AI agent book med spa appointments?", a: "Yes. An AI agent calls new leads within seconds, answers common questions about the intro offer, checks availability and books the slot. It should not give medical advice or discuss suitability for a treatment; those questions are routed to a provider at the consultation." },
    ],
    related: ["/case-studies/med-spa-marketing", "/ai-appointment-setter", "/crm-automation", "/funnels-for/dentists", "/funnels-for/gyms", "/funnels-for/ecommerce", "/templates/no-show-reminder-sequence"],
    parent: HUB,
    updated: U,
  },
];
