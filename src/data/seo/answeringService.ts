import type { SeoPage } from "./types";

/**
 * AI answering service pillar and its US city pages (owner's US city page plan,
 * 25 Nov 2026). City pages live at /ai-answering-service/{city}-{st}.
 * Rules: every local fact links to a public source, proof is real (state-level
 * where we have no city-level case), no LocalBusiness address, no em dashes.
 * Human answering service prices come from PATLive's public pricing page,
 * checked on 25 Nov 2026.
 */
const PILLAR = { name: "AI answering service", path: "/ai-answering-service" };
const U = "2026-11-25";
const CHECKED = "November 2026";
const PATLIVE = "https://www.patlive.com/pricing/";

/** Cities with a live page. The pillar's "Cities we serve" block is built from this list. */
export const ANSWERING_CITIES = [
  { path: "/ai-answering-service/houston-tx", name: "Houston, TX" },
  { path: "/ai-answering-service/new-york-ny", name: "New York, NY" },
];

const citiesList = ANSWERING_CITIES.map((c) => `<li><a href="${c.path}">AI answering service in ${c.name}</a></li>`).join("\n");

export const ANSWERING_SERVICE_PAGES: SeoPage[] = [
  {
    path: "/ai-answering-service",
    kind: "service",
    keyword: "ai answering service",
    serviceType: "AI answering service",
    title: "AI Answering Service That Books Calls | Funnels That Print",
    description: "AI answering service that picks up every call 24/7, answers questions and books the appointment instead of taking a message. Built in 5 to 10 days.",
    eyebrow: "AI answering service",
    h1: "An AI answering service that books the call, not just the message",
    intro:
      "An <strong>AI answering service</strong> picks up your business line on the first ring, day or night, answers the questions callers usually ask, collects their details and books them into your calendar. A traditional answering service takes a message and passes it on; an AI phone answering service finishes the job. We build it inside your CRM as part of our $1,999 complete suite, and most setups are live in 5 to 10 business days.",
    quick: {
      q: "What is an AI answering service?",
      a: "An AI answering service is a voice agent that answers your business phone 24/7, handles common questions, qualifies the caller and books an appointment in your live calendar, then texts your team a summary. Unlike a human message service, it never puts callers on hold and books the job during the call. Our build is included in the $1,999 complete suite and goes live in 5 to 10 business days.",
    },
    sections: [
      {
        h2: "AI answering service vs a live answering service",
        html: `<p>Live answering services are a real option, and for some businesses they are the right one. The honest comparison looks like this. Human pricing below is from <a href="${PATLIVE}" rel="nofollow noopener" target="_blank">PATLive's public pricing page</a>, a 100% human, US-based service, as listed in ${CHECKED}.</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Live answering service (PATLive)</th><th>AI answering service (our build)</th></tr></thead>
<tbody>
<tr><td>Pricing model</td><td>Monthly plan by the minute: $99 for 50 minutes (about 20 calls), $349 for 200 minutes (about 80 calls)</td><td>One-time build inside the $1,999 complete suite; call minutes paid to the voice platform at its usage rates</td></tr>
<tr><td>Extra minutes</td><td>$2.29 per minute on the 50-minute plan, $1.99 on the 200-minute plan</td><td>Usage billed by the platform, no per-call fee from us</td></tr>
<tr><td>What happens on the call</td><td>A trained receptionist answers, takes a message or follows your script</td><td>The agent answers, asks your qualifying questions and books the appointment</td></tr>
<tr><td>Busy periods</td><td>Depends on staffing</td><td>Every call answered at once, even when many come in together</td></tr>
<tr><td>Best for</td><td>Sensitive or complex calls that need human judgment</td><td>High call volume, after-hours calls and calls that should end in a booking</td></tr>
</tbody>
</table></div>
<p>Many of our clients use both: the AI answers and books routine calls, and anything sensitive transfers to a person. You choose the rules.</p>`,
      },
      {
        h2: "What the AI answering service does on every call",
        html: `<ol>
<li>Answers on the first ring with your business name and a natural voice.</li>
<li>Answers common questions from a knowledge base you approve: hours, service area, prices you publish, what to expect.</li>
<li>Asks your qualifying questions, such as the job type, address, urgency or budget.</li>
<li>Checks your live calendar and books the appointment, then sends a text confirmation.</li>
<li>Transfers urgent or high-value calls to the person you choose, or books a callback if nobody answers.</li>
<li>Logs the call, a summary and the recording in your CRM, so your team sees everything before they call back.</li>
</ol>
<p>Missed calls get a text back within seconds through our <a href="/speed-to-lead">speed-to-lead automation</a>, and leads who do not book are followed up by the <a href="/ai-appointment-setter">AI appointment setter</a>.</p>`,
      },
      {
        h2: "Cost and setup",
        html: `<p>The AI answering service is part of our complete suite: a one-time $1,999 for the funnel, CRM, AI receptionist and automations. Smaller builds start at $999 (design only) and $1,499 (design, copy and full build). Call minutes are paid directly to the voice platform, so you are never charged a markup per call by us.</p>
<p>Setup takes 5 to 10 business days: a kickoff call to map how your calls go today, a script and knowledge base, calendar and CRM connection, and internal test calls before the agent speaks to a real customer.</p>`,
      },
      {
        h2: "Who uses an AI phone answering service",
        html: `<p>It works best for businesses where the phone call is the sale and a missed call goes to a competitor:</p>
<ul>
<li>HVAC companies that need emergency triage after hours: <a href="/ai-receptionist/hvac">AI receptionist for HVAC</a>.</li>
<li>Plumbers who are on a job when the phone rings: <a href="/ai-receptionist/plumbers">AI receptionist for plumbers</a>.</li>
<li>Contractors booking estimates: <a href="/ai-receptionist/contractors">AI receptionist for contractors</a>.</li>
<li>Real estate teams qualifying buyers and sellers: <a href="/ai-receptionist/real-estate">AI receptionist for real estate</a>.</li>
<li>Clinics and med spas booking consults: <a href="/funnels-for/med-spas">med spa lead generation</a>.</li>
</ul>
<p>For the full feature list, see our <a href="/ai-receptionist">AI receptionist</a> page.</p>`,
      },
      {
        h2: "Cities we serve",
        html: `<p>We work remotely with businesses across the US. These city pages cover local call patterns and nearby areas:</p>
<ul>
${citiesList}
</ul>`,
      },
    ],
    proof: {
      heading: "Booking results from our client systems",
      items: [
        { value: "337", label: "home services appointments booked on $1,621", href: "/case-studies/home-services-337-appointments-booked" },
        { value: "174", label: "coaching appointments on $2,214 in ad spend", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "5 to 10 days", label: "typical build time from kickoff to live", href: "/services" },
      ],
    },
    faqs: [
      { q: "How much does an AI answering service cost?", a: "Our AI answering service is included in the $1,999 complete suite, a one-time build that also covers the funnel, CRM and automations. After launch you pay the voice platform directly for call minutes. A live service such as PATLive lists $99 a month for 50 minutes as of November 2026." },
      { q: "Is an AI answering service better than a live answering service?", a: "It is better for volume, after-hours calls and calls that should end in a booking, because it answers every call at once and books during the call. A live service is better for sensitive or complex conversations. Many businesses route routine calls to the AI and transfer the rest to a person." },
      { q: "Can callers tell it is AI?", a: "We set the agent to introduce itself as an AI assistant for your business. Callers mostly care that they get a fast answer and a booked time, and anyone who asks for a person is transferred or offered a callback." },
      { q: "Do I keep my business phone number?", a: "Yes. Most clients keep their number and forward unanswered or after-hours calls to the AI answering service. Forwarding rules can change by time of day, so your staff still take calls during business hours." },
      { q: "How long does setup take?", a: "Most builds are live in 5 to 10 business days, including the script, the knowledge base, calendar and CRM connection, and test calls before the agent answers real customers." },
      { q: "What happens with calls the AI cannot handle?", a: "It asks one clarifying question. If it still cannot help, it takes the caller's name, number and reason, promises a callback and creates a task for your team, or transfers the call live if you have set a transfer rule." },
    ],
    related: ["/ai-receptionist", "/ai-appointment-setter", "/speed-to-lead", "/ai-voice-agents", "/ai-answering-service/houston-tx", "/ai-answering-service/new-york-ny", "/crm-automation"],
    parent: { name: "Services", path: "/services" },
    updated: U,
  },
  {
    path: "/ai-answering-service/houston-tx",
    kind: "location",
    keyword: "answering service houston",
    serviceType: "AI answering service",
    area: { name: "Houston, TX", type: "City" },
    title: "AI Answering Service in Houston, TX | Funnels That Print",
    description: "AI answering service for Houston businesses: calls answered 24/7, questions handled and jobs booked. A Houston virtual receptionist, live in 5-10 days.",
    eyebrow: "Houston, TX",
    h1: "AI Answering Service in Houston",
    intro:
      "Looking for an <strong>answering service in Houston</strong>? Our AI answering service is built for Houston contractors, HVAC and plumbing companies, real estate teams and clinics that lose jobs when the phone goes unanswered. It picks up every call in Central time, day or night, answers common questions, books the appointment and texts your team a summary, so it works as a virtual receptionist for Houston without adding staff. The build is part of our one-time $1,999 complete suite, smaller builds start at $999, and most setups are live within 5 to 10 business days of the kickoff call.",
    quick: {
      q: "What does an AI answering service cost for a Houston business?",
      a: "For a Houston business, our AI answering service is included in the one-time $1,999 complete suite, which also covers the CRM and automations; call minutes are paid to the voice platform. It answers every call 24/7 in Central time, books jobs into your calendar and is usually live in 5 to 10 business days.",
    },
    sections: [
      {
        h2: "Houston at a glance for businesses that live on the phone",
        html: `<p>Three public facts shape how calls work for a Houston business:</p>
<ul>
<li><strong>A very large market.</strong> Houston is the fourth most populous city in the US, with an estimated 2,325,502 residents in July 2018, according to the <a href="https://www.houstontx.gov/abouthouston/houstonfacts.html" rel="nofollow noopener" target="_blank">City of Houston's facts and figures page</a>. More homeowners means more inbound calls competing for the same crews.</li>
<li><strong>Callers in many languages.</strong> The <a href="https://www.houstontx.gov/abouthouston/houstonfacts.html" rel="nofollow noopener" target="_blank">same city page</a> says at least 145 languages are spoken by Houston residents, and Greater Houston is described there as the most ethnically diverse metro area in the US. Your call script should plan for that from day one.</li>
<li><strong>A spread-out service area.</strong> The Houston-The Woodlands-Sugar Land metro covers nine counties and 9,444 square miles, per the <a href="https://www.houstontx.gov/abouthouston/houstonfacts.html" rel="nofollow noopener" target="_blank">City of Houston</a>. Crews spend hours driving between jobs, which is exactly when calls go unanswered.</li>
</ul>`,
      },
      {
        h2: "Human answering service or AI: what Houston callers actually get",
        html: `<p>Many people searching for an answering service in Houston expect a human receptionist, and that is a fair choice. A 100% human, US-based service such as PATLive lists $99 a month for 50 minutes, about 20 calls, with extra minutes at $2.29, on its <a href="${PATLIVE}" rel="nofollow noopener" target="_blank">public pricing page</a> (${CHECKED}). For an HVAC or plumbing company that gets dozens of calls a day in a heat wave or a hard freeze, per-minute plans add up fast, and a message still has to be returned.</p>
<p>The AI answering service works differently: every call is answered at once, even when ten come in together, and the caller hangs up with a booked appointment instead of a promise of a callback. Calls that need a person, such as an angry customer or a large commercial job, transfer to the phone you choose.</p>`,
      },
      {
        h2: "What we set up for Houston industries",
        html: `<ul>
<li><strong>HVAC:</strong> emergency triage when the AC fails, same-day booking and an alert to the on-call tech. See the <a href="/ai-receptionist/hvac">AI receptionist for HVAC</a>.</li>
<li><strong>Plumbing:</strong> urgent job capture with the address, the problem and photos requested by text. See the <a href="/ai-receptionist/plumbers">AI receptionist for plumbers</a>.</li>
<li><strong>Contractors and remodelers:</strong> estimate booking with project scope and zip code, so you only drive to jobs you want.</li>
<li><strong>Real estate:</strong> buyer and seller qualification for teams across the metro, with hot leads routed to the right agent.</li>
<li><strong>Follow-up:</strong> anyone who calls but does not book gets text follow-up from the <a href="/ai-appointment-setter">AI appointment setter</a>.</li>
</ul>`,
      },
      {
        h2: "Results from our Texas client systems",
        html: `<p>We do not have a published Houston-only case study yet, so these figures are from campaigns tied to Texas in our case files. They come from the lead and booking systems the answering service plugs into:</p>
<ul>
<li><a href="/case-studies/solar-300-leads-at-14-71-cpl">300 solar leads at $14.71</a> for a Texas-based installer.</li>
<li><a href="/case-studies/mortgage-142-leads-at-4-31-cpl">142 mortgage leads at $4.31</a> on $612 for a Texas-based lender.</li>
<li><a href="/case-studies/home-services-542-leads-at-23-82-cpl">542 remodeling leads at $23.82</a> in 30 days.</li>
</ul>`,
      },
      {
        h2: "Pricing for Houston businesses",
        html: `<p>Pricing is the same in Houston as everywhere: a one-time $999 for design only, $1,499 for design, copy and full build, or $1,999 for the complete suite with the funnel, CRM, AI receptionist and automations. Call minutes go directly to the voice platform at its usage rates. There is no monthly fee from us for the answering service itself. <a href="/book-a-call">Book a call</a> and we will map your call flow in 30 minutes.</p>`,
      },
      {
        h2: "Areas we cover around Houston",
        html: `<p>We set up the service for businesses across Greater Houston, including Sugar Land, The Woodlands, Katy, Pearland, Pasadena, Baytown, League City, Conroe, Spring, Cypress and Humble, and the nine metro counties named by the City of Houston: Austin, Brazoria, Chambers, Fort Bend, Galveston, Harris, Liberty, Montgomery and Waller. Everything runs remotely, so the location of your office does not matter. We also serve <a href="/ai-answering-service/new-york-ny">New York businesses</a>; the <a href="/ai-answering-service">AI answering service</a> page has the full details.</p>`,
      },
    ],
    faqs: [
      { q: "Is there an answering service in Houston that books appointments?", a: "Yes. Our AI answering service answers Houston calls 24/7 and books the appointment in your live calendar during the call, then texts you a summary. Traditional message services pass on a message that someone still has to return." },
      { q: "Does the AI work in Central time and after hours?", a: "Yes. It follows your Houston business hours and booking rules in Central time, and after hours it keeps answering and booking, or routes true emergencies to your on-call phone." },
      { q: "Can it handle calls in Spanish?", a: "Houston callers speak many languages, so we plan for it in the script. Tell us which languages your customers use on the kickoff call and we will confirm what the voice platform supports for your setup before launch." },
      { q: "Do I need a Houston phone number for it?", a: "No. You keep your existing 713, 281, 832 or other number and forward unanswered or after-hours calls to the AI. If you want a separate number for ads or tracking, we can add one." },
      { q: "Can it cover several service areas across the Houston metro?", a: "Yes. The agent asks for the zip code early, checks it against the areas you serve, and books the right crew or tells the caller politely when the address is outside your area." },
    ],
    related: ["/ai-answering-service", "/ai-answering-service/new-york-ny", "/ai-receptionist/hvac", "/ai-receptionist/plumbers", "/ai-appointment-setter"],
    parent: PILLAR,
    updated: U,
  },
  {
    path: "/ai-answering-service/new-york-ny",
    kind: "location",
    keyword: "answering service new york",
    serviceType: "AI answering service",
    area: { name: "New York, NY", type: "City" },
    title: "AI Answering Service in New York, NY | Funnels That Print",
    description: "AI answering service for New York businesses: 24/7 answers, questions handled, jobs booked. A New York virtual receptionist, live in 5 to 10 days.",
    eyebrow: "New York, NY",
    h1: "AI Answering Service in New York",
    intro:
      "Need an <strong>answering service in New York</strong> that does more than take messages? Our AI answering service works as a virtual receptionist for New York clinics, med spas, real estate teams and home service companies across all five boroughs. It answers every call in Eastern time, handles the questions your front desk repeats all day, books the appointment in your calendar and sends your team a text summary. It is included in our one-time $1,999 complete suite, builds start at $999, and most New York clients are live within 5 to 10 business days.",
    quick: {
      q: "How does an AI answering service work for a New York business?",
      a: "It answers your New York line 24/7 in Eastern time, answers common questions, books the caller into your live calendar and texts your team a summary, transferring anything sensitive to a person. The build is part of our one-time $1,999 complete suite, with call minutes paid to the voice platform, and goes live in 5 to 10 business days.",
    },
    sections: [
      {
        h2: "Why New York calls are hard to keep up with",
        html: `<ul>
<li><strong>The biggest city in the country.</strong> New York City had 8,804,190 residents in the 2020 census, its highest count ever, according to <a href="https://en.wikipedia.org/wiki/New_York_City" rel="nofollow noopener" target="_blank">Wikipedia's New York City article</a>, which cites the US Census Bureau. A busy front desk in that market misses calls every day.</li>
<li><strong>Five separate markets in one.</strong> The city is made up of five boroughs, Manhattan, Brooklyn, Queens, the Bronx and Staten Island, each its own county (<a href="https://en.wikipedia.org/wiki/New_York_City" rel="nofollow noopener" target="_blank">source</a>). A clinic in Brooklyn and a contractor on Staten Island get very different callers.</li>
<li><strong>Callers in hundreds of languages.</strong> An estimated 800 languages are spoken in New York City, making it the most linguistically diverse city in the world, per the <a href="https://en.wikipedia.org/wiki/New_York_City" rel="nofollow noopener" target="_blank">same article</a>. Scripts and transfer rules need to plan for callers who prefer another language.</li>
</ul>`,
      },
      {
        h2: "New York live answering vs AI answering: the real trade-off",
        html: `<p>A human answering service is the traditional choice for New York offices. PATLive, a 100% human, US-based service, lists $349 a month for 200 minutes, about 80 calls, with extra minutes at $1.99, on its <a href="${PATLIVE}" rel="nofollow noopener" target="_blank">public pricing page</a> (${CHECKED}). That works for a quiet office, but a med spa running a promotion or a property manager after a storm can burn through a plan in days, and every message still needs a callback.</p>
<p>An AI answering service answers every call at once and books the appointment during the call. Keep a person for what needs judgment: we set transfer rules so VIP clients, complaints or anything medical go straight to your team.</p>`,
      },
      {
        h2: "Setups for New York clinics, agents and service companies",
        html: `<ul>
<li><strong>Med spas and clinics:</strong> consult booking, intro offer questions and deposit reminders, without giving medical advice. See our <a href="/funnels-for/med-spas">med spa lead generation</a> page.</li>
<li><strong>Real estate:</strong> buyer, seller and rental inquiries qualified by borough, budget and timeline. See the <a href="/ai-receptionist/real-estate">AI receptionist for real estate</a>.</li>
<li><strong>Contractors and home services:</strong> garage door, kitchen and repair calls turned into booked estimates. See the <a href="/ai-receptionist/contractors">AI receptionist for contractors</a>.</li>
<li><strong>Every business:</strong> missed-call text-back within seconds and follow-up for callers who did not book.</li>
</ul>`,
      },
      {
        h2: "Results from New York campaigns",
        html: `<p>These are real results from campaigns tied to New York in our case files. They come from the lead and booking systems that the answering service connects to:</p>
<ul>
<li><a href="/case-studies/med-spa-74k-revenue-on-10k-ad-spend">$74,100 in revenue on about $10K in ad spend</a> for a med spa with three clinic locations across New York.</li>
<li><a href="/case-studies/med-spa-1011-leads">1,011 med spa leads</a> on $4,703 in ad spend, from a campaign that reached audiences in New York City and Los Angeles.</li>
<li><a href="/case-studies/home-services-5-10-cost-per-lead">A $5.10 cost per lead</a> for a New York garage door and kitchen remodeling client.</li>
</ul>`,
      },
      {
        h2: "What it costs in New York",
        html: `<p>New York pricing matches our national pricing: one-time builds of $999 (design only), $1,499 (design, copy and full build) or $1,999 (complete suite with the funnel, CRM, AI receptionist and automations). The voice platform bills call minutes directly at its usage rates, and we charge no monthly answering fee. <a href="/book-a-call">Book a call</a> to walk through your call volume and the questions callers ask most.</p>`,
      },
      {
        h2: "Areas we cover in and around New York",
        html: `<p>We set up the service for businesses in Manhattan, Brooklyn, Queens, the Bronx and Staten Island, and across the wider metro, including Jersey City, Hoboken, Newark, Yonkers, Westchester County and Long Island's Nassau and Suffolk counties. The work is fully remote. We also serve <a href="/ai-answering-service/houston-tx">Houston businesses</a>; see the <a href="/ai-answering-service">AI answering service</a> page for how the service works.</p>`,
      },
    ],
    faqs: [
      { q: "Is an AI answering service a good fit for a New York med spa?", a: "Yes, for booking and common questions. It books consults, answers questions about intro offers and sends reminders. It does not give medical advice, and anything clinical transfers to your staff. HIPAA-sensitive details need a compliant setup, which we discuss before building." },
      { q: "Can it route calls by borough?", a: "Yes. The agent asks where the caller is or where the job is, then books the right location, agent or crew. Multi-location clinics can have a separate calendar for each site." },
      { q: "Does it answer in Eastern time and on weekends?", a: "Yes. It follows your New York hours and booking rules in Eastern time and keeps answering nights, weekends and holidays, when many New Yorkers finally have time to call." },
      { q: "Can I keep my 212 or 718 number?", a: "Yes. You keep your existing number and forward unanswered or after-hours calls to the AI. Your staff can still answer during the day, and the AI picks up whatever they miss." },
      { q: "How is this different from a New York virtual receptionist company?", a: "A virtual receptionist company uses people who take messages or follow a script, usually billed by the minute. Our AI books the appointment during the call and is a one-time build, with call minutes paid to the voice platform." },
    ],
    related: ["/ai-answering-service", "/ai-answering-service/houston-tx", "/ai-receptionist/real-estate", "/funnels-for/med-spas", "/ai-appointment-setter"],
    parent: PILLAR,
    updated: U,
  },
];
