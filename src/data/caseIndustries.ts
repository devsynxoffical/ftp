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
    faqs: [
      { q: "What cost per lead do these roofing campaigns achieve?", a: "It varies by market and season. Exclusive leads from an estimator funnel on Meta typically land between $20 and $80; each case on this page shows its actual cost per lead and spend rather than an average." },
      { q: "Are these leads shared with other roofers?", a: "No. Every lead comes from a funnel and ad account owned by the roofing company, so the homeowner only speaks to that company." },
      { q: "How fast can a roofing funnel be built?", a: "The estimator page, ads, follow-up automation and tracking are built in 5 to 10 business days." },
    ],
    guides: ["roofing-lead-generation-funnel-cost-per-lead-playbook", "speed-to-lead-automation-gohighlevel-60-second-follow-up"],
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
    faqs: [
      { q: "Are these MVA leads exclusive?", a: "Yes. They are generated from the firm's own funnel and ad account, not resold from a lead marketplace." },
      { q: "How is lead quality controlled?", a: "A multi-step form screens for accident date, injury and existing representation, and OTP phone verification confirms the number before the lead is created." },
      { q: "What cost per lead do MVA campaigns reach?", a: "Our documented MVA campaigns range from about $5 to $25 per verified lead depending on state and volume; each case shows its real numbers." },
    ],
    guides: ["personal-injury-mva-lead-generation-exclusive-leads", "speed-to-lead-automation-gohighlevel-60-second-follow-up"],
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
    faqs: [
      { q: "Do these mortgage campaigns work for refinance and purchase?", a: "Yes. The cases include both; the front-end questions and ad angles change, the follow-up system stays the same." },
      { q: "How are mortgage leads verified?", a: "Through OTP phone verification on submission and qualifying questions on loan type, value and timeline." },
      { q: "Can this be used for insurance agents?", a: "Yes. The final expense cases on this page use the same funnel structure with insurance-specific qualifying questions." },
    ],
    guides: ["mortgage-lead-generation-meta-ads-otp-verified", "speed-to-lead-automation-gohighlevel-60-second-follow-up"],
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
    faqs: [
      { q: "Which med spa treatments do these campaigns cover?", a: "Injectables, laser hair removal, skin treatments and body contouring offers; each case lists the niche and result." },
      { q: "How do you keep consultation no-shows down?", a: "With a confirmation step and a multi-touch SMS and email reminder sequence tied to the appointment." },
      { q: "Do you build the booking system?", a: "Yes. The funnel, calendar, reminders and follow-up are built and connected to the clinic's CRM." },
    ],
    guides: ["reduce-sales-call-no-show-rate-reminder-automation", "ai-appointment-setter-voice-agent-cost-setup-results"],
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
    faqs: [
      { q: "Do these HVAC campaigns target repairs or replacements?", a: "Mostly installs and replacements, where the job value supports paid acquisition; the qualifying questions route repair calls separately." },
      { q: "How do you handle seasonality?", a: "Offers and budgets shift between tune-up, replacement and financing angles as demand changes through the year." },
      { q: "What follow-up is used?", a: "Instant SMS and a call, plus missed-call text-back on the inbound line and a nurture sequence for homeowners still comparing quotes." },
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
    faqs: [
      { q: "Which home services are covered?", a: "Solar, renovation and remodelling, and general home services; each case lists its niche and numbers." },
      { q: "Do solar leads need to be homeowners?", a: "Yes. The funnel asks about homeownership and property type first and filters renters out before contact details are collected." },
      { q: "How are appointments protected?", a: "With a confirmation message and reminders before the site visit, plus a rebook flow for missed appointments." },
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
    faqs: [
      { q: "Do these campaigns target buyers or sellers?", a: "Both. Seller valuation funnels and buyer search funnels use different questions and follow-up." },
      { q: "How do you deal with long buying timelines?", a: "Qualifying questions on timeline route leads into immediate follow-up or a long-term nurture sequence." },
      { q: "Can teams and brokerages use this?", a: "Yes. Leads can be distributed round-robin across agents with tracking by source." },
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
    faqs: [
      { q: "What kind of coaching offers are these?", a: "Business, agency and service-provider coaching and consulting offers, usually priced from $2,000 to $10,000 or more." },
      { q: "Do you build webinar funnels?", a: "Yes. The webinar cases on this page use registration pages, reminder sequences and replay follow-up with booked-call or direct-sale offers." },
      { q: "Where is the $1.52M case?", a: "It has its own detailed page at /milliondollarcasestudy covering the VSL funnel, qualification, follow-up and tracking." },
    ],
    guides: ["high-ticket-vsl-vs-interactive-quiz-funnel-2026", "reduce-sales-call-no-show-rate-reminder-automation"],
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
    faqs: [
      { q: "Do these cases include agencies getting results for their clients?", a: "Yes. Several cases show agencies we worked with generating leads and revenue for their own customers using the same system." },
      { q: "Does this work for SaaS?", a: "Yes, for SaaS with a sales-assisted motion or a high enough contract value; the SaaS cases show leads and sign-ups." },
      { q: "Which CRM do you use for B2B?", a: "Most builds run on GoHighLevel; we also integrate with HubSpot and other CRMs." },
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
    faqs: [
      { q: "What is a self-liquidating offer?", a: "A low-ticket front-end product whose sales cover the ad spend, so buyers are acquired at break-even or better." },
      { q: "What price points do these funnels use?", a: "Typically $7 to $97 for the front end, with order bumps and upsells on top." },
      { q: "Where is the $847K case?", a: "It has its own detailed page at /scalelowticket and a full breakdown in the journal." },
    ],
    guides: ["low-ticket-self-liquidating-offer-funnel-847k-breakdown", "gohighlevel-vs-clickfunnels-lead-generation-2026"],
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
    faqs: [
      { q: "What ROAS do these Shopify brands achieve?", a: "Documented ROAS on this page mostly ranges from about 3x to 5x at scale; each case shows its own figure." },
      { q: "Do you run the ads or build the store?", a: "We build landing pages, offers, upsells and tracking and run the scaling system; we integrate with the existing Shopify store." },
      { q: "Do you help with Q4 and Black Friday?", a: "Yes. Several cases document BFCM and Q4 scaling with offer and budget planning." },
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
    faqs: [
      { q: "What creative works best for skincare?", a: "Customer-led video showing texture, application and results, tested against founder and expert-led content." },
      { q: "Do you build subscription offers?", a: "Yes, alongside bundles and post-purchase upsells to raise lifetime value." },
      { q: "How is ROAS measured?", a: "From the ad account with server-side purchase events, as shown in each case." },
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
    faqs: [
      { q: "Does this work for small fashion brands?", a: "Yes, as long as the margin supports paid acquisition; offer structure matters more than catalogue size." },
      { q: "What creative works for apparel?", a: "Try-on, styling and fit content from creators, rotated with each collection." },
      { q: "How do you plan seasonal campaigns?", a: "Budgets and offers are planned around drops, holidays and Q4, as several cases show." },
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
    faqs: [
      { q: "How do you keep supplement ads compliant?", a: "Creative avoids medical and prohibited claims and focuses on routine, ingredients and customer experience." },
      { q: "Do you build subscription funnels?", a: "Yes. Subscribe-and-save and multi-pack offers are part of most builds in this category." },
      { q: "Does this cover fitness equipment?", a: "Yes. Fitness and health product brands are included alongside supplements and nutrition." },
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
