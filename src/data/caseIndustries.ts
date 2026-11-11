/**
 * Industry groupings for the case study library. Each industry gets its own
 * hub page at /case-studies/<slug> listing every case in that industry, with
 * unique copy, FAQ and links into the journal. Individual case pages use the
 * same data for their "how this was built" section and related links.
 */
export type CaseSet = "ec" | "lg";

export interface CaseIndustry {
  slug: string;
  set: CaseSet;
  /** Raw `nic` values from cases.ts / leads.ts that belong to this industry. */
  niches: string[];
  /** Short label used in titles, e.g. "Roofing". */
  label: string;
  /** Hub H1 and <title> stem. */
  hubTitle: string;
  hubMetaTitle: string;
  hubDescription: string;
  intro: string[];
  build: { title: string; body: string }[];
  /** Quick answer under the hero: main question + 40-60 word answer. */
  quick: { q: string; a: string };
  faqs: { q: string; a: string }[];
  /** Journal slugs most relevant to this industry. */
  guides: string[];
}

export const CASE_INDUSTRIES: CaseIndustry[] = [
  {
    slug: "roofing-lead-generation",
    set: "lg",
    niches: ["Roofing"],
    label: "Roofing",
    hubTitle: "Roofing Lead Generation Case Studies",
    hubMetaTitle: "Roofing Lead Generation Case Studies & Results",
    hubDescription:
      "Real roofing lead generation results: exclusive roofing leads, cost per lead, booked inspections and ad spend from Meta ads funnels with 60-second follow-up.",
    intro: [
      "Roofing is one of the most expensive lead markets in home services. Replacement jobs are worth $10,000 to $40,000, so every roofer bids on the same homeowners and lead marketplaces sell each request to three to five companies at once.",
      "These case studies show the alternative: exclusive roofing leads from a funnel the roofer owns. Each one documents the cost per lead, lead volume, ad spend and, where available, booked inspections and closed jobs, taken from the client's ad account and CRM.",
    ],
    build: [
      { title: "Quote estimator front end", body: "A 4-step estimator (roof type, issue, timeline, address) replaces the contact form and converts two to three times better on cold traffic." },
      { title: "Storm, age and financing ad angles", body: "Geo-targeted Meta campaigns around hail events, roof age and monthly-payment financing, with local crew footage instead of stock photos." },
      { title: "60-second follow-up", body: "Instant SMS, an immediate call from a rep or AI setter, and missed-call text-back so the first roofer to call is you." },
      { title: "Tracking jobs, not form fills", body: "Inspection booked and contract signed are sent back to Meta so the algorithm finds homeowners who actually buy." },
    ],
    quick: {
      q: "What cost per lead do roofing lead generation funnels achieve?",
      a: "Across the documented roofing campaigns, cost per lead ranges from $4.27 to about $24. Examples include 537 leads at $4.27 on $2,292 of spend, 686 leads at $5.31, 1,068 leads at $17.40 and 1,024 leads at $24 on $24,902. One campaign booked 52 calls on $646 of ad spend. Market, season and offer drive the spread.",
    },
    faqs: [
      { q: "What cost per lead do these roofing campaigns achieve?", a: "It varies by market and season. The documented roofing cases run from $4.27 per lead at the low end to about $24 in competitive markets, with several between $5 and $6. Each case on this page shows its actual cost per lead, lead volume and ad spend rather than a blended average, so you can compare like with like." },
      { q: "Are these leads shared with other roofers?", a: "No. Every lead comes from a funnel and ad account owned by the roofing company, so the homeowner only speaks to that company. That is the main difference from lead marketplaces, which often sell the same request to three to five contractors and leave everyone racing to call first and compete on price." },
      { q: "How fast can a roofing funnel be built?", a: "The estimator page, Meta ads setup, follow-up automation and conversion tracking are built and live in 5 to 10 business days. Most of that time goes into the quote estimator, local ad angles and the 60-second follow-up sequence, so the system is ready to take leads the day campaigns launch." },
      { q: "How much does a roofing funnel build cost?", a: "Builds are a one-time fee rather than a retainer: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and paid directly to Meta from the roofer's own account." },
      { q: "Who owns the funnel, ad account and leads?", a: "The roofing company does. The funnel, CRM, automations, ad account and every lead in the pipeline belong to the business, not to us. If you stop working with us, everything keeps running and the data stays yours, which is why results can compound over time instead of resetting with each new vendor." },
      { q: "What happens after a homeowner submits the estimator?", a: "They get an instant SMS, an immediate call from a rep or AI setter, and missed-call text-back if nobody answers. Across 60+ deployments of this follow-up, median first contact is 38 seconds and lead-to-booking improves 2.4x, so inspections get booked while the homeowner is still engaged and before competitors call back." },
    ],
    guides: ["facebook-ads-cost-per-lead-benchmarks", "roofing-lead-generation-funnel-cost-per-lead-playbook", "speed-to-lead-automation-gohighlevel-60-second-follow-up"],
  },
  {
    slug: "mva-personal-injury-lead-generation",
    set: "lg",
    niches: ["Legal / MVA"],
    label: "MVA",
    hubTitle: "MVA & Personal Injury Lead Generation Case Studies",
    hubMetaTitle: "MVA & Personal Injury Lead Gen Case Studies",
    hubDescription:
      "Motor vehicle accident and personal injury lead generation results: exclusive OTP-verified MVA leads, cost per lead and signed cases from Meta funnels.",
    intro: [
      "Motor vehicle accident (MVA) and personal injury firms usually buy pay-per-lead from media buyers at $100 to $300 per lead, often recycled or shared. Quality is the problem as much as price.",
      "The campaigns below generate exclusive MVA leads through multi-step funnels with phone verification, so every lead is a real claimant who confirmed their number. Each case reports lead volume, cost per lead, appointments and spend.",
    ],
    build: [
      { title: "Multi-step qualification funnel", body: "Accident date, injury, fault and representation status are asked before contact details, which filters out claims the firm cannot take." },
      { title: "OTP phone verification", body: "Leads confirm a one-time code before submitting, removing fake numbers and bots from the pipeline." },
      { title: "Instant intake follow-up", body: "SMS and a call within 60 seconds hand the claimant to intake while they are still on their phone." },
      { title: "Signed-case tracking", body: "Signed retainers are sent back to Meta through the Conversions API so ads optimize for cases, not clicks." },
    ],
    quick: {
      q: "What cost per lead do MVA and personal injury funnels achieve?",
      a: "Documented MVA campaigns range from $4.38 to $27 per exclusive, OTP-verified lead. The largest generated 8,810 leads at $7.61 on $67,013 of spend, and another produced 6,275 leads at $4.38. One firm turned 1,079 leads at $18.94 into $388,000 in revenue, a 19.09x return on ad spend. State and case type drive the range.",
    },
    faqs: [
      { q: "Are these MVA leads exclusive?", a: "Yes. They are generated from the firm's own funnel and ad account, not resold from a lead marketplace. Each claimant speaks only to your intake team, which removes the race against other firms that pay-per-lead vendors create when they sell the same accident lead to several offices at once." },
      { q: "How is lead quality controlled?", a: "A multi-step form screens for accident date, injury and existing representation before contact details are requested, and OTP phone verification confirms the number before the lead is created. Fake numbers, bots and claims the firm cannot take are filtered out, so intake spends its time on real claimants who can be signed." },
      { q: "What cost per lead do MVA campaigns reach?", a: "Our documented MVA campaigns range from about $4.38 to $27 per verified lead depending on state, case type and volume. Larger accounts include 1,865 leads at $5.24 and 8,810 leads at $7.61. Each case on this page shows its real numbers, including ad spend, so you can see results at different budgets." },
      { q: "Is Meta advertising allowed for personal injury firms?", a: "Yes, legal services can advertise on Meta, but ads and funnels must avoid guaranteed outcomes and misleading claims and should follow your state bar's advertising rules. We write the creative and funnel copy conservatively and the firm reviews everything before launch, because compliance responsibility ultimately sits with the attorney." },
      { q: "How much does an MVA funnel cost to build?", a: "The build is a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite including CRM, intake automation, an AI booking agent and tracking. Ad spend is paid directly to Meta from the firm's own account, with no per-lead markup." },
      { q: "How quickly can a firm start receiving leads?", a: "The funnel, OTP verification, intake follow-up and Conversions API tracking are built in 5 to 10 business days. Leads start arriving once campaigns launch, and the first weeks are used to test angles and budgets. Signed-case data sent back to Meta then steers spend toward claimants who actually retain the firm." },
    ],
    guides: ["facebook-ads-cost-per-lead-benchmarks", "personal-injury-mva-lead-generation-exclusive-leads", "speed-to-lead-automation-gohighlevel-60-second-follow-up"],
  },
  {
    slug: "mortgage-insurance-lead-generation",
    set: "lg",
    niches: ["Mortgage & Refinance", "Final Expense & Insurance"],
    label: "Mortgage",
    hubTitle: "Mortgage & Insurance Lead Generation Case Studies",
    hubMetaTitle: "Mortgage & Insurance Lead Generation Case Studies",
    hubDescription:
      "Mortgage, refinance and final expense insurance lead generation results: verified leads, cost per lead, closings and commission from Meta ads funnels.",
    intro: [
      "Mortgage brokers, loan officers and insurance agents live on lead quality. A cheap lead that never answers the phone costs more than an expensive one that funds.",
      "These cases cover purchase and refinance mortgage campaigns and final expense insurance, with eligibility calculators, phone verification and fast follow-up. Where the client shared them, closings, funded volume and commission are included alongside cost per lead.",
    ],
    build: [
      { title: "Eligibility calculator front end", body: "A short calculator on loan type, value, credit band and timeline replaces a plain form and qualifies the borrower before contact." },
      { title: "OTP verification", body: "Every lead confirms their phone number, which removes fake and mistyped numbers before they reach a loan officer." },
      { title: "Speed-to-lead and nurture", body: "Instant SMS and a call, then a nurture sequence for borrowers who are not ready yet." },
      { title: "Funded-loan tracking", body: "Applications and fundings are sent back to Meta so the campaign learns who closes." },
    ],
    quick: {
      q: "What cost per lead do mortgage and insurance funnels achieve?",
      a: "Documented mortgage and insurance campaigns range from $4.31 to about $25 per verified lead. Highlights include 142 leads at $4.31 on $612, 492 leads at $5.23, 2,440 leads at $7.79 on $19,011 of spend, and 208 leads at $25.48 that produced $65K+ in revenue from $5,300 in ad spend.",
    },
    faqs: [
      { q: "Do these mortgage campaigns work for refinance and purchase?", a: "Yes. The cases include both purchase and refinance campaigns. The front-end questions and ad angles change with the loan type and rate environment, while the follow-up system stays the same: instant SMS and a call, then a nurture sequence for borrowers who are still shopping or not ready to apply." },
      { q: "How are mortgage leads verified?", a: "Through OTP phone verification on submission and qualifying questions on loan type, property value, credit band and timeline. Borrowers confirm a one-time code before the lead is created, so loan officers stop wasting dials on fake or mistyped numbers and can prioritize applicants who are actually close to applying." },
      { q: "Can this be used for insurance agents?", a: "Yes. The final expense cases on this page use the same funnel structure with insurance-specific qualifying questions such as age range, coverage amount and beneficiary. Verification, speed-to-lead follow-up and appointment reminders work the same way, and agents can book phone or video consultations directly from the funnel." },
      { q: "How do you handle compliance for mortgage and insurance ads?", a: "Meta treats credit and financial-product ads as a special ad category, so targeting is limited and creative must avoid discriminatory or misleading claims. We build campaigns inside those limits, use consent language and opt-in for SMS follow-up, and the lender or agency reviews disclosures and licensing details before anything goes live." },
      { q: "How much does a mortgage funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend runs through the broker's own Meta account, so there is no per-lead charge or revenue share." },
      { q: "How long does it take to launch?", a: "The eligibility calculator, OTP verification, follow-up and funded-loan tracking are live in 5 to 10 business days. Campaigns then spend the first weeks testing angles and audiences, and application and funding events are sent back to Meta so lead quality improves as the account learns which borrowers close." },
    ],
    guides: ["facebook-ads-cost-per-lead-benchmarks", "mortgage-lead-generation-meta-ads-otp-verified", "speed-to-lead-automation-gohighlevel-60-second-follow-up"],
  },
  {
    slug: "med-spa-marketing",
    set: "lg",
    niches: ["MedSpa"],
    label: "Med Spa",
    hubTitle: "Med Spa Marketing Case Studies",
    hubMetaTitle: "Med Spa Marketing & Lead Generation Case Studies",
    hubDescription:
      "Med spa and aesthetics marketing results: leads, booked consultations, cost per lead and ad spend for injectables, laser and body treatment offers.",
    intro: [
      "Med spas and aesthetic clinics compete on trust and convenience. The patient is choosing who will treat their face or body, and usually books with whoever responds first and looks most credible.",
      "The cases below show lead and booking results for injectables, laser, skin and body treatments, built on treatment-matcher funnels with before-and-after proof and automated booking and reminders.",
    ],
    build: [
      { title: "Treatment matcher", body: "A 3-step quiz on concern, area and timing recommends a treatment and captures the lead with context the front desk can use." },
      { title: "Proof-led creative", body: "Before-and-after results, provider introductions and offer-led ads tested against each other." },
      { title: "Booking and reminders", body: "Direct calendar booking with SMS reminders and confirmation to protect consultation show rates." },
      { title: "Review and rebook flows", body: "Post-treatment review requests and rebooking reminders to lift lifetime value." },
    ],
    quick: {
      q: "What results do med spa marketing funnels produce?",
      a: "Documented med spa campaigns include 1,011 leads on $4,703 of ad spend, $11,700 in revenue from 45 leads on $590 (a 19.8x return), $74,100 from 303 clients on $10K of spend, and $639,000 in revenue from 178 clients. One campaign reached a $0.50 cost per lead. Treatment and offer drive the spread.",
    },
    faqs: [
      { q: "Which med spa treatments do these campaigns cover?", a: "Injectables, laser hair removal, skin treatments and body contouring offers. Each case lists the niche, offer and result, so you can compare campaigns for treatments similar to yours. The funnel structure stays the same across treatments, while the quiz questions, before-and-after proof and booking offer change for each service line." },
      { q: "How do you keep consultation no-shows down?", a: "With a confirmation step at booking and a multi-touch SMS and email reminder sequence tied to the appointment. Three-channel reminders have lifted show-up rates as high as 88% in our deployments. Missed consultations trigger an automatic rebook message, so a no-show becomes a rescheduled visit instead of a lost lead." },
      { q: "Do you build the booking system?", a: "Yes. The funnel, calendar, reminders and follow-up are built and connected to the clinic's CRM. Leads can book directly from the treatment matcher, and the front desk sees each patient's concern, area and timing before the consultation, which makes the first conversation faster and more personal." },
      { q: "How much does a med spa funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and paid from the clinic's own Meta account, which the clinic keeps." },
      { q: "Are med spa ads restricted on Meta?", a: "Yes, health and cosmetic procedure ads face stricter review. Creative must avoid negative body image, unrealistic promises and some before-and-after formats, and claims must match what providers can support. We write within those limits, and the clinic's medical director reviews treatment claims before campaigns go live." },
      { q: "How quickly can a med spa start booking consultations?", a: "The treatment matcher, booking calendar, reminders and tracking are built in 5 to 10 business days. Consultations can start booking as soon as ads launch, and early weeks are used to test offers and creative. Booked and attended appointments are tracked so budget shifts toward the treatments that fill the calendar." },
    ],
    guides: ["med-spa-patient-acquisition", "reduce-sales-call-no-show-rate-reminder-automation", "ai-appointment-setter-voice-agent-cost-setup-results"],
  },
  {
    slug: "hvac-lead-generation",
    set: "lg",
    niches: ["HVAC"],
    label: "HVAC",
    hubTitle: "HVAC Lead Generation Case Studies",
    hubMetaTitle: "HVAC Lead Generation Case Studies & Results",
    hubDescription:
      "HVAC lead generation results: install and replacement leads, cost per lead and ad spend from Meta funnels with instant follow-up for heating and cooling firms.",
    intro: [
      "HVAC demand is seasonal and urgent. When a system fails in a heatwave or a cold snap, the homeowner calls whoever answers first, and replacement jobs carry the margin.",
      "These cases show HVAC install and replacement campaigns with lead volume, cost per lead and spend, built on quote funnels and follow-up that reaches the homeowner in under a minute.",
    ],
    build: [
      { title: "Replacement quote funnel", body: "System type, age, problem and timeline are asked first, so replacement opportunities are separated from repair calls." },
      { title: "Seasonal ad angles", body: "Pre-season tune-up, failure-season replacement and financing offers rotated with the weather." },
      { title: "Instant response", body: "SMS, a call and missed-call text-back within 60 seconds of the request." },
      { title: "Job-value tracking", body: "Booked estimates and sold installs are sent back to the ad platforms." },
    ],
    quick: {
      q: "What cost per lead do HVAC lead generation funnels achieve?",
      a: "Documented HVAC campaigns range from $5.57 to about $23 per lead. Examples include 326 leads at $5.57, 55 leads at $11.02 on $606 of spend, and 630 leads at $23.09. On the appointment side, one account booked 5,628 appointments and another booked 1,956 appointments that produced $36,444 in revenue.",
    },
    faqs: [
      { q: "Do these HVAC campaigns target repairs or replacements?", a: "Mostly installs and replacements, where the job value supports paid acquisition. The qualifying questions on system type, age, problem and timeline route repair calls separately, so service techs get repair work and comfort advisors get replacement opportunities. That split keeps cost per sold install measurable instead of blended with low-value calls." },
      { q: "How do you handle seasonality?", a: "Offers and budgets shift between pre-season tune-ups, failure-season replacements and financing angles as demand changes through the year. Spend increases when heatwaves and cold snaps drive urgent requests and eases in shoulder months, when nurture sequences and maintenance offers keep the pipeline warm until the next peak." },
      { q: "What follow-up is used?", a: "Instant SMS and a call, plus missed-call text-back on the inbound line and a nurture sequence for homeowners still comparing quotes. Across 60+ speed-to-lead deployments, median first contact is 38 seconds and 84% of leads are reached inside the first minute, which matters when the homeowner is calling every contractor nearby." },
      { q: "How much does an HVAC funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and paid to Meta from your own ad account, with no per-lead fees." },
      { q: "How long does an HVAC build take?", a: "The replacement quote funnel, seasonal ad setup, follow-up automation and job-value tracking are live in 5 to 10 business days. If you want to be ready for peak season, start the build a few weeks before demand rises so the campaigns have time to learn before the busiest weeks arrive." },
      { q: "Who owns the leads and the system?", a: "You do. The funnel, CRM, automations, ad account and every lead belong to the HVAC company, not to us or a marketplace. Leads are exclusive, and if you stop working with us the system keeps running, so the data and audience history you build each season stay with your business." },
    ],
    guides: ["roofing-lead-generation-funnel-cost-per-lead-playbook", "speed-to-lead-automation-gohighlevel-60-second-follow-up"],
  },
  {
    slug: "solar-home-services-lead-generation",
    set: "lg",
    niches: ["Home Services", "Solar"],
    label: "Home Services",
    hubTitle: "Solar & Home Services Lead Generation Case Studies",
    hubMetaTitle: "Solar & Home Services Lead Generation Case Studies",
    hubDescription:
      "Solar and home services lead generation results: exclusive leads, cost per lead, booked appointments and revenue for solar, renovation and trade businesses.",
    intro: [
      "Solar installers and home service businesses such as renovation, remodelling and trades share the same challenge: high-value jobs, comparison shoppers and homeowners who submit several requests at once.",
      "The cases below document lead volume, cost per lead and closed revenue for solar and home services clients, using quote funnels, fast follow-up and appointment reminders.",
    ],
    build: [
      { title: "Qualifying quote funnel", body: "Homeownership, property details, budget range and timeline are captured before contact details." },
      { title: "Offer-led local ads", body: "Savings, financing and limited-availability offers targeted to the service area." },
      { title: "60-second follow-up", body: "SMS and a call immediately, with appointment booking and reminders before the site visit." },
      { title: "Closed-job tracking", body: "Appointments and signed jobs are reported back to Meta to improve lead quality over time." },
    ],
    quick: {
      q: "What results do solar and home services funnels produce?",
      a: "Documented solar and home services campaigns range from $5.10 to about $24 per lead. Examples include 1,811 leads from one account, 337 booked appointments on $1,621 of ad spend, 180 leads at $14.25, 300 leads at $14.71 and 542 leads at $23.82. Niche, service area and offer explain most of the spread.",
    },
    faqs: [
      { q: "Which home services are covered?", a: "Solar, renovation and remodeling, and general home services such as trades and exterior work. Each case lists its niche and numbers, so you can compare campaigns close to your own service. The quote funnel, follow-up and reminder structure stays the same, while qualifying questions and ad angles change for each trade." },
      { q: "Do solar leads need to be homeowners?", a: "Yes. The funnel asks about homeownership and property type first and filters renters out before contact details are collected. It can also ask about roof condition, average utility bill and timeline, so installers only receive homeowners who could realistically qualify and the sales team spends time on viable site visits." },
      { q: "How are appointments protected?", a: "With a confirmation message and reminders before the site visit, plus a rebook flow for missed appointments. Three-channel reminders across SMS, email and calls have lifted show-up rates as high as 88% in our deployments, which matters when every missed site visit costs a rep a drive and an afternoon." },
      { q: "How much does a solar or home services funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and runs through the company's own Meta account, so there are no per-lead charges." },
      { q: "How long does it take to go live?", a: "The quote funnel, local ads, 60-second follow-up and closed-job tracking are built in 5 to 10 business days. Campaigns then spend their first weeks testing offers and audiences, and appointment and signed-job events are fed back to Meta so the account learns which homeowners actually buy." },
      { q: "Are the leads exclusive?", a: "Yes. Every lead comes from a funnel and ad account owned by your business, so homeowners are not resold to competing installers. That is the main difference from shared lead vendors, where the same request goes to several companies and the job usually goes to whoever calls first or quotes lowest." },
    ],
    guides: ["roofing-lead-generation-funnel-cost-per-lead-playbook", "reduce-sales-call-no-show-rate-reminder-automation"],
  },
  {
    slug: "real-estate-lead-generation",
    set: "lg",
    niches: ["Real Estate"],
    label: "Real Estate",
    hubTitle: "Real Estate Lead Generation Case Studies",
    hubMetaTitle: "Real Estate Lead Generation Case Studies",
    hubDescription:
      "Real estate lead generation results: buyer and seller leads, cost per lead and ad spend for agents, teams and property offers built on Meta ads funnels.",
    intro: [
      "Real estate leads are cheap to generate and hard to convert. Most buyer and seller leads are months from transacting, so the follow-up system matters more than the ad.",
      "These cases show real estate campaigns with lead volume, cost per lead and spend, combined with qualification and long-term nurture so agents spend time on people ready to move.",
    ],
    build: [
      { title: "Buyer and seller funnels", body: "Separate flows for home valuation (sellers) and property search or pre-approval (buyers), each with qualifying questions." },
      { title: "Area-specific ads", body: "Neighbourhood and price-band targeting with listing and market-update creative." },
      { title: "Fast contact and nurture", body: "Immediate SMS and a call, then a long-term nurture sequence for leads that are not ready yet." },
      { title: "Pipeline tracking", body: "Appointments and signed agreements are tracked by source in the CRM." },
    ],
    quick: {
      q: "What cost per lead do real estate funnels achieve?",
      a: "Documented real estate campaigns range from $11.57 to $28 per lead. Examples include 69 leads at $11.57 on $798 of spend, 71 leads at $12.12 on $860, 247 leads at $16.48 on $4,069 and 157 leads at $28 on $4,397. Buyer versus seller focus, price band and market explain most of the difference.",
    },
    faqs: [
      { q: "Do these campaigns target buyers or sellers?", a: "Both. Seller valuation funnels and buyer search or pre-approval funnels use different questions, ads and follow-up. Seller leads often cost more but carry a listing, while buyer leads are cheaper and need more nurture. Most agents run one side first, then add the other once the follow-up system is working." },
      { q: "How do you deal with long buying timelines?", a: "Qualifying questions on timeline route leads into immediate follow-up or a long-term nurture sequence. Leads ready in the next 90 days get a call and SMS right away, while later leads receive market updates, new listings and periodic check-ins by text and email until their plans firm up and they raise a hand." },
      { q: "Can teams and brokerages use this?", a: "Yes. Leads can be distributed round-robin across agents with tracking by source, so the team lead sees which campaigns and agents turn leads into appointments and signed agreements. Response-time alerts and reassignment rules make sure no lead sits untouched when an agent is busy showing homes." },
      { q: "How much does a real estate funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and runs through the agent's or brokerage's own Meta account." },
      { q: "Are there advertising rules for real estate ads?", a: "Yes. Meta classifies housing as a special ad category, which limits targeting by age, gender and ZIP code, and fair housing rules prohibit discriminatory messaging. Campaigns are built inside those limits using broad location targeting and creative focused on listings, valuations and market updates rather than on who the buyer is." },
      { q: "How long until an agent gets leads?", a: "The buyer and seller funnels, area-specific ads, follow-up automation and CRM pipeline are live in 5 to 10 business days. Leads start arriving once campaigns launch. Because many leads are months from transacting, judge results on appointments and signed agreements over a few months, not just on first-week lead volume." },
    ],
    guides: ["speed-to-lead-automation-gohighlevel-60-second-follow-up", "gohighlevel-vs-clickfunnels-lead-generation-2026"],
  },
  {
    slug: "coaching-consulting-funnels",
    set: "lg",
    niches: ["Coaching & Consulting", "Webinar"],
    label: "Coaching",
    hubTitle: "Coaching, Consulting & Webinar Funnel Case Studies",
    hubMetaTitle: "Coaching, Consulting & Webinar Funnel Case Studies",
    hubDescription:
      "High-ticket coaching, consulting and webinar funnel results: booked calls, cost per lead, revenue and ROAS from VSL, application and webinar funnels.",
    intro: [
      "Coaches and consultants sell high-ticket offers through a sales call or a webinar. The economics depend on cost per booked call, show rate and close rate, not on cheap leads.",
      "The cases below cover application funnels, VSL funnels and live and automated webinars, with booked calls, revenue and ROAS where reported. They include the $1.52M consulting result documented in full on its own page.",
    ],
    build: [
      { title: "Diagnostic or VSL front end", body: "A short diagnostic quiz or a focused VSL qualifies the prospect before the calendar." },
      { title: "Application and booking", body: "Budget, timeline and situation questions route qualified prospects to the closer's calendar." },
      { title: "Show-up sequence", body: "A multi-channel reminder sequence and pre-call video protect attendance." },
      { title: "Revenue attribution", body: "Booked, attended and closed calls are sent back to Meta through the Conversions API." },
    ],
    quick: {
      q: "What results do coaching and consulting funnels produce?",
      a: "Documented coaching and consulting funnels include $115,500 in revenue from 174 booked calls on $2,214 of spend (52x ROAS), $64,960 from 140 calls on $2,184, and $680,125 from 34 sales on $15,482. A webinar funnel drew 15,958+ registrations at $7.48 each. The flagship $1.52M consulting case has its own page.",
    },
    faqs: [
      { q: "What kind of coaching offers are these?", a: "Business, agency and service-provider coaching and consulting offers, usually priced from $2,000 to $10,000 or more and sold on a sales call. Lower-priced programs and courses appear too, typically through webinars. Each case lists the offer type, so you can compare funnels built for price points and buyers similar to yours." },
      { q: "Do you build webinar funnels?", a: "Yes. The webinar cases on this page use registration pages, reminder sequences and replay follow-up with booked-call or direct-sale offers. One documented webinar campaign generated 15,958+ registrations at $7.48 per registration, and reminders across email and SMS keep live attendance up so more registrants actually see the offer." },
      { q: "Where is the $1.52M case?", a: "It has its own detailed page at /milliondollarcasestudy covering the VSL funnel, qualification, follow-up and tracking. That page explains how a high-ticket consulting offer collected $1.52M from cold paid traffic, including how reminder automation raised show-up rates and how Conversions API data lowered cost per booked call over time." },
      { q: "How much does a coaching funnel cost to build?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate. There is no revenue share, so a funnel that sells well does not cost you more." },
      { q: "How long does it take to launch a VSL or application funnel?", a: "The VSL or diagnostic front end, application, booking calendar, show-up sequence and revenue tracking are built in 5 to 10 business days. Most of the time goes into the script and qualification questions, because those decide who reaches the closer's calendar and how many booked calls actually show and buy." },
      { q: "Do you provide the sales team or closers?", a: "No. We build the funnel, follow-up, reminders and tracking, and your team or closers run the calls. The $1,999 suite can add an AI booking agent that qualifies and books leads before a human gets involved, and pipeline reporting shows which campaigns produce calls that show and close." },
    ],
    guides: ["membership-funnel", "high-ticket-vsl-vs-interactive-quiz-funnel-2026", "reduce-sales-call-no-show-rate-reminder-automation"],
  },
  {
    slug: "agency-saas-lead-generation",
    set: "lg",
    niches: ["Agency Scaling", "Lead Generation", "SaaS"],
    label: "Agency",
    hubTitle: "Agency, SaaS & B2B Lead Generation Case Studies",
    hubMetaTitle: "Agency, SaaS & B2B Lead Generation Case Studies",
    hubDescription:
      "Lead generation results for marketing agencies, SaaS and B2B offers: leads, booked calls, cost per lead and new clients from paid ads funnels and follow-up.",
    intro: [
      "Agencies, lead generation businesses and SaaS companies sell to other businesses. Leads are fewer and more valuable, and the sales cycle runs through a demo or strategy call.",
      "These cases show how agencies landed clients for themselves and for their own customers, and how SaaS offers generated leads and sign-ups, with cost per lead, booked calls and revenue.",
    ],
    build: [
      { title: "Offer and niche positioning", body: "A specific offer for a specific market, tested in ads before the funnel is scaled." },
      { title: "Lead magnet or calculator", body: "A benchmark, audit or ROI calculator that gives value before asking for a call." },
      { title: "Speed-to-lead and booking", body: "Instant follow-up and a qualification step before the demo or strategy call." },
      { title: "Pipeline reporting", body: "Calls, proposals and closed deals tracked by campaign in the CRM." },
    ],
    quick: {
      q: "What results do agency, SaaS and B2B lead generation funnels produce?",
      a: "Documented agency, SaaS and B2B campaigns include 1,890 leads at $6.72 on $12,708 of spend, 1,131 leads at $24.37, and 501 leads at $40. One agency closed $15,900 in 10 days, another signed 235 clients, and one offer produced $71,934 in 24 days from 320 new customers.",
    },
    faqs: [
      { q: "Do these cases include agencies getting results for their clients?", a: "Yes. Several cases show agencies we worked with generating leads and revenue for their own customers using the same system. Others show agencies landing clients for themselves, such as one that closed $15,900 in 10 days. Both use the same offer testing, follow-up and pipeline reporting described on this page." },
      { q: "Does this work for SaaS?", a: "Yes, for SaaS with a sales-assisted motion or a high enough contract value to support paid acquisition. The SaaS cases show leads, demos and sign-ups. Self-serve products with very low monthly pricing usually do better with free trials and product-led growth than with a funnel built around booked demo calls." },
      { q: "Which CRM do you use for B2B?", a: "Most builds run on GoHighLevel, which covers funnels, pipelines, SMS, email and calendars in one place. We also integrate with HubSpot and other CRMs when a sales team already lives there, syncing leads, call outcomes and deal stages so reporting stays accurate from first click to closed deal." },
      { q: "How much does a B2B or agency funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and runs through your own account, with no retainer or revenue share." },
      { q: "How long does a build take?", a: "The offer page, lead magnet or calculator, booking flow, follow-up automation and pipeline reporting are live in 5 to 10 business days. B2B sales cycles are longer than consumer ones, so expect to judge results on booked calls and proposals in the first weeks and on closed revenue over the following months." },
      { q: "Can an AI agent qualify B2B leads?", a: "Yes. An AI voice agent can call new leads within seconds, ask qualifying questions and book demos or strategy calls. AI calling typically costs about $0.10 to $0.25 per minute, roughly $3 to $9 per booked appointment, compared with $40 to $120 when human setters do the same work." },
    ],
    guides: ["gohighlevel-vs-clickfunnels-lead-generation-2026", "ai-appointment-setter-voice-agent-cost-setup-results"],
  },
  {
    slug: "low-ticket-funnels",
    set: "lg",
    niches: ["Low-Ticket Offers"],
    label: "Low-Ticket",
    hubTitle: "Low-Ticket Funnel Case Studies",
    hubMetaTitle: "Low-Ticket & Self-Liquidating Offer Funnel Case Studies",
    hubDescription:
      "Low-ticket and self-liquidating offer funnel results: front-end sales, buyers, ROAS and revenue from $7 to $97 offers with order bumps and upsells.",
    intro: [
      "Low-ticket offers, usually $7 to $97, turn cold traffic into buyers and pay for the ads on the front end. The profit comes from order bumps, upsells and the backend offer sold to the buyer list.",
      "These cases show front-end sales, buyer counts, ROAS and revenue for low-ticket funnels. The $847,307 self-liquidating offer result has its own full breakdown.",
    ],
    build: [
      { title: "Front-end offer", body: "A low-priced product that solves one specific problem and leads naturally to the backend." },
      { title: "Order bump and upsell", body: "A one-click bump and post-purchase upsell lift average order value above cost per buyer." },
      { title: "Buyer follow-up", body: "Email and SMS sequences ascend buyers to the core offer or a sales call." },
      { title: "Value-based tracking", body: "Purchase value is sent back to Meta so the algorithm optimizes for buyers, not opt-ins." },
    ],
    quick: {
      q: "What results do low-ticket funnels produce?",
      a: "Documented low-ticket funnels include $135,143 from 892 sales on $36,198 of spend, $120,770 on $42,368 (2.85x ROAS), 132 sales at 11.7x ROAS, and $17,200 in one day from 293 sales. One account logged 53,662 sales. The $847,307 self-liquidating offer recovered 112% of ad spend on day zero.",
    },
    faqs: [
      { q: "What is a self-liquidating offer?", a: "A low-ticket front-end product whose sales cover the ad spend, so buyers are acquired at break-even or better. Once the front end pays for itself, every backend sale, from upsells to coaching or a high-ticket program, is profit. The $847,307 case recovered 112% of ad spend on day zero this way." },
      { q: "What price points do these funnels use?", a: "Typically $7 to $97 for the front end, with order bumps and upsells on top. The $847,307 case paired a $27 product with a $17 order bump. The right price is low enough for an impulse purchase from cold traffic and high enough that average order value can exceed the cost of acquiring a buyer." },
      { q: "Where is the $847K case?", a: "It has its own detailed page at /scalelowticket and a full breakdown in the journal. Both cover the $27 front-end offer, the $17 order bump, the one-click upsell, the backend ascension sequence and the tracking setup that let the funnel recover 112% of ad spend on day zero and collect $847,307." },
      { q: "How much does a low-ticket funnel cost to build?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. A typical low-ticket build covers the sales page, checkout, order bump, upsell and buyer follow-up sequence." },
      { q: "How long does it take to launch?", a: "The front-end sales page, checkout with order bump, upsell, buyer email and SMS sequences and purchase tracking are live in 5 to 10 business days. After launch, the first weeks focus on testing hooks, prices and bump offers until average order value consistently covers the cost per buyer from cold traffic." },
      { q: "What happens if the front end does not break even?", a: "The levers are average order value and conversion rate. We test the order bump, upsell offer, price point and the first screen of the sales page before cutting ad spend. If the front end still runs at a small loss, a strong backend can justify it, as long as buyer revenue is tracked accurately." },
    ],
    guides: ["membership-funnel", "low-ticket-self-liquidating-offer-funnel-847k-breakdown", "gohighlevel-vs-clickfunnels-lead-generation-2026"],
  },
  {
    slug: "shopify-dtc-ecommerce",
    set: "ec",
    niches: ["DTC Performance Brand", "Direct-Response eCommerce"],
    label: "Shopify",
    hubTitle: "Shopify & DTC eCommerce Case Studies",
    hubMetaTitle: "Shopify & DTC eCommerce Scaling Case Studies",
    hubDescription:
      "Shopify and DTC eCommerce scaling results: revenue, ROAS and daily and monthly sales from Meta video ads, offer structure and post-purchase upsells.",
    intro: [
      "Direct-to-consumer brands and Shopify stores scale on Meta when three things line up: a product with a clear hook, creative that sells it in the first three seconds, and an offer structure that lifts average order value.",
      "These cases show revenue, ROAS and daily or monthly sales for DTC brands and direct-response stores, including Q4 and Black Friday scaling, from ad account and store screenshots.",
    ],
    build: [
      { title: "Product and offer", body: "Bundles, tiered discounts and a clear hook tested before scaling budget." },
      { title: "Video creative system", body: "UGC and direct-response video ads produced and tested in volume." },
      { title: "Campaign structure", body: "Consolidated broad campaigns that give Meta room to find buyers at scale." },
      { title: "AOV and tracking", body: "Post-purchase upsells and server-side purchase events with value for accurate ROAS." },
    ],
    quick: {
      q: "What ROAS do Shopify and DTC brands achieve with these campaigns?",
      a: "Most documented Shopify and DTC cases scale at roughly 4x to 5x ROAS. Highlights include $2,300,000 scaled at 11.6x, $1,000,000+ at 4.6x, $449,221 in 49 days at 4.2x, $422,000 in November at 4.8x and a $50,000-per-day scale at 5.2x. Each case shows its own revenue and ROAS figures.",
    },
    faqs: [
      { q: "What ROAS do these Shopify brands achieve?", a: "Documented ROAS on this page mostly ranges from about 3x to 5x at scale, with outliers on both sides, such as 11.6x on a $2,300,000 scale and around 2x on aggressive daily-spend pushes. Each case shows its own figure, and the right target depends on your margin and average order value." },
      { q: "Do you run the ads or build the store?", a: "We build landing pages, offers, upsells and tracking and run the scaling system, integrating with the existing Shopify store rather than rebuilding it. Your theme, products and checkout stay in place, while new landing pages and post-purchase offers sit alongside them to lift conversion rate and average order value." },
      { q: "Do you help with Q4 and Black Friday?", a: "Yes. Several cases document BFCM and Q4 scaling, including $422,000 in November at 4.8x ROAS and a $162,000 Q4 scale at 4.7x. Planning starts weeks earlier with offers, creative and budget ramps, so the account is warmed up and ready to spend when competition and costs peak." },
      { q: "How much does a DTC funnel build cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and stays in your own Meta account, so you keep full control of budget and data." },
      { q: "How long does it take to launch?", a: "Landing pages, offer structure, upsells and server-side tracking are live in 5 to 10 business days. Scaling comes after that and depends on creative testing. Brands with existing winning ads move faster, while new products usually need a few weeks of testing hooks and offers before budgets increase meaningfully." },
      { q: "Why does server-side tracking matter for eCommerce?", a: "Browser pixels miss purchases because of ad blockers, iOS privacy settings and cookie limits. Sending purchase events with value through the Meta Conversions API gives the algorithm more complete data. In our setups, CAPI recovered 31% more events, which makes reported ROAS more accurate and helps campaigns find buyers at scale." },
    ],
    guides: ["meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026", "low-ticket-self-liquidating-offer-funnel-847k-breakdown"],
  },
  {
    slug: "beauty-skincare-ecommerce",
    set: "ec",
    niches: ["Beauty & Skincare"],
    label: "Skincare",
    hubTitle: "Beauty & Skincare Brand Case Studies",
    hubMetaTitle: "Beauty & Skincare eCommerce Case Studies",
    hubDescription:
      "Beauty and skincare brand scaling results: revenue and ROAS from Meta video ads, before-and-after creative and subscription and bundle offers.",
    intro: [
      "Beauty and skincare buyers need proof before they purchase. Texture shots, before-and-after results and real customers on camera do more than polished brand imagery.",
      "These cases show revenue and ROAS for beauty and skincare brands scaled on Meta with proof-led video creative, bundles and subscription offers.",
    ],
    build: [
      { title: "Proof-led creative", body: "UGC, before-and-after and routine videos that show the product working." },
      { title: "Bundle and subscription offers", body: "Routines and refills that lift order value and lifetime value." },
      { title: "Landing pages", body: "Ingredient, result and review-led pages instead of sending all traffic to the product page." },
      { title: "Retention flows", body: "Replenishment and cross-sell email and SMS after the first order." },
    ],
    quick: {
      q: "What ROAS do beauty and skincare brands achieve?",
      a: "Documented beauty and skincare cases run from about 4.2x to 5.4x ROAS. Highlights include $340,000 scaled at 5.4x, a $320,000 Q4 engine at 5.3x, $178,000 at 4.8x, $118,000 in the first month at 4.7x and $88,900 per month at 4.4x. Proof-led video and bundle offers drive most of these results.",
    },
    faqs: [
      { q: "What creative works best for skincare?", a: "Customer-led video showing texture, application and results, tested against founder-led and expert-led content. Short routine videos, close-up texture shots and honest before-and-after footage usually outperform polished studio imagery, because buyers want to see the product on real skin before they trust it. Winning angles are then iterated in volume." },
      { q: "Do you build subscription offers?", a: "Yes, alongside bundles and post-purchase upsells to raise lifetime value. Routine bundles lift the first order, and subscribe-and-save or refill offers turn one-time buyers into repeat customers. Replenishment emails and SMS are timed to how long a product lasts, so reminders arrive just as the customer is running low." },
      { q: "How is ROAS measured?", a: "From the ad account with server-side purchase events, as shown in each case. Purchases are sent with order value through the Meta Conversions API, which recovered 31% more events in our setups than the browser pixel alone. That gives a more complete ROAS figure and better data for the algorithm to optimize on." },
      { q: "Are there ad restrictions for beauty products?", a: "Yes. Meta limits before-and-after imagery that implies unrealistic results, negative body image messaging and claims that sound like medical treatment. Skincare creative works best when it shows routine, texture and real customer experience, and any claim about ingredients or results should be one the brand can support with evidence." },
      { q: "How much does a skincare funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and runs through your own Meta account, which you keep." },
      { q: "How long does a build take?", a: "Landing pages, bundle and subscription offers, retention flows and server-side tracking are live in 5 to 10 business days. Scaling follows creative testing, so brands with existing customer content and reviews usually move faster than brands that need to produce their first round of UGC before launch." },
    ],
    guides: ["meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026", "low-ticket-self-liquidating-offer-funnel-847k-breakdown"],
  },
  {
    slug: "fashion-apparel-ecommerce",
    set: "ec",
    niches: ["Apparel & Fashion DTC"],
    label: "Fashion",
    hubTitle: "Fashion & Apparel eCommerce Case Studies",
    hubMetaTitle: "Fashion & Apparel eCommerce Case Studies",
    hubDescription:
      "Fashion and apparel brand scaling results: revenue and ROAS from Meta ads, collection launches and seasonal campaigns for DTC clothing brands.",
    intro: [
      "Fashion and apparel brands sell on look, fit and timing. Collection drops, seasonal moments and creators wearing the product move more sales than discounts alone.",
      "These cases show revenue and ROAS for DTC apparel brands scaled on Meta with launch campaigns, creator content and offer structure.",
    ],
    build: [
      { title: "Launch and drop campaigns", body: "Pre-launch audiences, launch-day offers and sell-through messaging." },
      { title: "Creator and try-on content", body: "Fit and styling videos that answer the sizing question before the click." },
      { title: "Bundles and AOV", body: "Outfit bundles and post-purchase add-ons that lift order value." },
      { title: "Returns-aware tracking", body: "Purchase events with value so the campaign optimizes for kept orders." },
    ],
    quick: {
      q: "What ROAS do fashion and apparel brands achieve?",
      a: "Documented fashion and apparel cases run from about 3.6x to 5.5x ROAS. Highlights include a $165,000 apparel scale at 4.6x, $148,000 at 4.7x, $98,000 at 4.2x, $52,600 per month at 4.41x and $40,669 in 14 days at 5.49x. Launch timing, creator content and bundles drive most of the results.",
    },
    faqs: [
      { q: "Does this work for small fashion brands?", a: "Yes, as long as the margin supports paid acquisition. Offer structure matters more than catalog size: a focused hero product or outfit bundle with clear fit information often scales better than a large catalog. Each case on this page shows revenue and ROAS, so you can compare brands at a similar stage to yours." },
      { q: "What creative works for apparel?", a: "Try-on, styling and fit content from creators, rotated with each collection. Videos that show the garment moving, on different body types and in real settings answer sizing questions before the click, which lifts conversion rate and reduces returns. Static lookbook images still help for retargeting, but video usually carries cold traffic." },
      { q: "How do you plan seasonal campaigns?", a: "Budgets and offers are planned around drops, holidays and Q4, as several cases show. Pre-launch audiences are built with teasers and waitlists, launch day gets the largest budget, and sell-through messaging follows. Holiday campaigns start weeks early so creative is tested before costs rise during Black Friday and December." },
      { q: "How do returns affect ROAS?", a: "Returns can make reported ROAS look better than real profit, especially in apparel. We send purchase events with value through server-side tracking and push fit and sizing information into creative and landing pages so buyers choose correctly. Brands should judge results on net revenue after returns, not only on ad account ROAS." },
      { q: "How much does a fashion funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and runs through your own Meta account, so budget and data stay with you." },
      { q: "How long does a build take?", a: "Landing pages, bundle offers, post-purchase add-ons and server-side tracking are live in 5 to 10 business days. If you are planning a collection drop, start the build a few weeks ahead so pre-launch audiences, creator content and tracking are ready before launch day rather than built under deadline pressure." },
    ],
    guides: ["meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026", "low-ticket-self-liquidating-offer-funnel-847k-breakdown"],
  },
  {
    slug: "supplements-fitness-ecommerce",
    set: "ec",
    niches: ["DTC Fitness & Health", "DTC Supplements & Nutrition"],
    label: "Supplement",
    hubTitle: "Supplement & Fitness Brand Case Studies",
    hubMetaTitle: "Supplement & Fitness eCommerce Case Studies",
    hubDescription:
      "Supplement, nutrition and fitness brand scaling results: revenue and ROAS from Meta ads, subscription offers and compliant direct-response creative.",
    intro: [
      "Supplement, nutrition and fitness brands win on repeat purchase. The first order often breaks even; subscriptions and refills make the profit.",
      "These cases show revenue and ROAS for supplement and fitness brands scaled on Meta with compliant direct-response creative, subscribe-and-save offers and post-purchase flows.",
    ],
    build: [
      { title: "Compliant creative", body: "Benefit-led video without prohibited claims, built around routine and lifestyle." },
      { title: "Subscribe-and-save offers", body: "Subscription pricing and multi-pack bundles that raise lifetime value." },
      { title: "Advertorial and landing pages", body: "Education-first pages that explain the mechanism before the product page." },
      { title: "Retention and replenishment", body: "Reorder reminders and cross-sells timed to product usage." },
    ],
    quick: {
      q: "What ROAS do supplement and fitness brands achieve?",
      a: "Documented supplement and fitness cases run from about 3.6x to 4.8x ROAS. Highlights include $192,000 per month at 4.7x, a $156,000 fitness scale at 4.8x, $137,620 in 30 days at 4.6x, $102,000 at 4.2x and $62,182 at 4.5x. Subscriptions and compliant direct-response creative drive most of these results.",
    },
    faqs: [
      { q: "How do you keep supplement ads compliant?", a: "Creative avoids medical and prohibited claims and focuses on routine, ingredients and customer experience. Ads do not promise to treat, cure or prevent conditions, avoid before-and-after weight-loss imagery and steer clear of language that calls out personal attributes. The brand reviews ingredient claims against its own substantiation before anything goes live." },
      { q: "Do you build subscription funnels?", a: "Yes. Subscribe-and-save and multi-pack offers are part of most builds in this category. The first order often only breaks even, so subscriptions and refills create the profit. Reorder reminders are timed to product usage, and cancellation saves such as skipping or pausing a shipment protect lifetime value." },
      { q: "Does this cover fitness equipment?", a: "Yes. Fitness and health product brands are included alongside supplements and nutrition. Equipment brands rely more on demonstration video and financing or bundle offers than on subscriptions, but the same structure applies: proof-led creative, an education-first landing page, post-purchase upsells and server-side tracking for accurate ROAS." },
      { q: "How much does a supplement funnel cost?", a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and runs through your own Meta account, which stays under your control." },
      { q: "How long does a build take?", a: "Advertorials, landing pages, subscription offers, retention flows and server-side tracking are live in 5 to 10 business days. Compliance review of claims is built into that window, so the brand should have ingredient documentation ready at kickoff to avoid delays before creative testing begins on the new funnel." },
    ],
    guides: ["meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026", "low-ticket-self-liquidating-offer-funnel-847k-breakdown"],
  },
];

/**
 * Lowercase for use mid-sentence, keeping acronyms and brand casing intact:
 * "MVA & Personal Injury" -> "MVA & personal injury", "SaaS" stays "SaaS".
 */
export function midSentence(s: string): string {
  return s
    .split(" ")
    .map((w) => (/^[A-Z0-9&]{2,}$|[a-z][A-Z]|^B2B$|^DTC$|^eCommerce$|^Shopify$/.test(w) ? w : w.toLowerCase()))
    .join(" ");
}

export function getIndustryBySlug(slug: string): CaseIndustry | undefined {
  return CASE_INDUSTRIES.find((i) => i.slug === slug);
}

export function getIndustryForNiche(set: CaseSet, niche: string): CaseIndustry {
  const found = CASE_INDUSTRIES.find((i) => i.set === set && i.niches.includes(niche));
  if (found) return found;
  // Fallback keeps every case reachable even if a new niche is added to the data.
  return set === "ec"
    ? CASE_INDUSTRIES.find((i) => i.slug === "shopify-dtc-ecommerce")!
    : CASE_INDUSTRIES.find((i) => i.slug === "agency-saas-lead-generation")!;
}
