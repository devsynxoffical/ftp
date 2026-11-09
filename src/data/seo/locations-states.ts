import type { SeoPage } from "./types";

const HUB = { name: "Locations", path: "/locations" };
const U = "2026-11-09";
const SERVICE = "Lead generation and sales funnels";

export const STATE_PAGES: SeoPage[] = [
  {
    path: "/locations",
    kind: "hub",
    keyword: "lead generation by state",
    title: "Lead Generation by State: US Results | Funnels That Print",
    description: "Lead generation by state: the Texas, Florida, New York and California campaigns we have run remotely from Dubai, with the real results from each.",
    eyebrow: "Locations",
    h1: "Lead generation by state: where our US results come from",
    intro:
      "This page sorts our <strong>lead generation by state</strong>. Funnels That Print has one office, in Dubai, UAE, and no offices in the United States. Most of our 275+ documented client results since 2019 are still US businesses, and a handful of states come up again and again in the case files. Each state page below shows only the campaigns we can actually tie to that state, with the real numbers.",
    quick: {
      q: "Does Funnels That Print have offices in US states?",
      a: "No. Our only office is in Dubai, UAE. We work remotely with US businesses over video calls, shared dashboards and chat, and we have documented campaigns for clients in Texas, Florida, New York and California. Builds cost a one-time $999 to $1,999, go live in 5 to 10 business days, and ad spend is separate.",
    },
    sections: [
      {
        h2: "How we work with US clients from Dubai",
        html: `<p>Lead generation is not a door-to-door business. The work happens in ad accounts, funnel pages, a CRM and a phone system, all of which run in the cloud. We build and manage those from Dubai, and you keep ownership of every account.</p>
<ul>
<li><strong>Kickoff on video.</strong> One call to map your offer, service area, ticket size and who picks up leads. You can <a href="/book-a-call">book a call</a> at a time that suits US hours.</li>
<li><strong>Build in 5 to 10 business days.</strong> Funnel, <a href="/crm-automation">CRM automation</a>, consent language and tracking go live together.</li>
<li><strong>Follow-up that never sleeps.</strong> Our <a href="/speed-to-lead">speed-to-lead automation</a> contacts new leads in seconds in your time zone, and an <a href="/ai-appointment-setter">AI appointment setter</a> covers nights and weekends.</li>
<li><strong>Weekly numbers.</strong> Cost per lead, cost per booked appointment and show rate, reported in writing.</li>
</ul>
<p>The time difference helps more than it hurts: changes we ship during the Dubai day are live before most US teams start work.</p>`,
      },
      {
        h2: "State pages and the real result behind each one",
        html: `<div class="table-wrap"><table><thead><tr><th>State</th><th>Industries in our case files</th><th>Headline result</th></tr></thead><tbody>
<tr><td><a href="/locations/texas">Texas</a></td><td>Roofing, personal injury, mortgage, real estate, solar, remodeling, pressure washing</td><td><a href="/case-studies/mva-1865-leads-at-5-24-cpl">1,865 MVA leads at $5.24</a> for a firm with presence across Texas</td></tr>
<tr><td><a href="/locations/florida">Florida</a></td><td>HVAC, personal injury, home services, roofing, car dealership</td><td><a href="/case-studies/hvac-5628-appointments-booked">5,628 HVAC appointments booked</a></td></tr>
<tr><td><a href="/locations/new-york">New York</a></td><td>Med spas, personal injury, garage door and kitchen remodeling</td><td><a href="/case-studies/med-spa-74k-revenue-on-10k-ad-spend">$74,100 med spa revenue on $10K ad spend</a></td></tr>
<tr><td><a href="/locations/california">California</a></td><td>Roofing, med spas</td><td><a href="/case-studies/roofing-52-booked-calls">52 roofing calls on $646 ad spend</a></td></tr>
</tbody></table></div>
<p>Texas has the deepest file, with eleven campaigns. California has only two, and its page says so rather than borrowing other states' numbers without labels. Browse everything on <a href="/case-studies/all">all case studies</a>.</p>`,
      },
      {
        h2: "Our one real office: Dubai",
        html: `<p>We are headquartered in Dubai and also run campaigns for UAE companies, mainly real estate and B2B. If you are in the Gulf, the <a href="/lead-generation-agency-dubai">lead generation agency Dubai</a> page covers that market, including WhatsApp-first follow-up. For everyone else, the US state pages show what we have done in markets like yours, and <a href="/funnels-for">funnels by industry</a> shows how the build changes for your type of business.</p>
<p>We do not list states where we have no evidence. If your state is missing, the industry pages and the <a href="/case-studies">case study hubs</a> are a better guide than a page with your state's name swapped in.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "1,865", label: "MVA leads at $5.24 for a firm across Texas", href: "/case-studies/mva-1865-leads-at-5-24-cpl" },
        { value: "5,628", label: "Appointments booked for a Florida HVAC client", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "$74,100", label: "Revenue for a New York med spa on $10K ad spend", href: "/case-studies/med-spa-74k-revenue-on-10k-ad-spend" },
        { value: "52", label: "Calls for a California roofer on $646 ad spend", href: "/case-studies/roofing-52-booked-calls" },
      ],
      more: { label: "All case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "Why do you have state pages if you have no US offices?", a: "Because people search for help in their state, and the honest answer is useful: we have no local office, but we have run real campaigns for businesses there. Each state page lists only the cases we can tie to that state, so you can judge the evidence yourself before booking a call." },
      { q: "Which US states have you worked in the most?", a: "Texas, by a wide margin. Our case files include Texas roofing, personal injury, mortgage, real estate, solar, remodeling and pressure washing campaigns. Florida and New York come next, with HVAC, legal, home services and med spa work. California has two documented campaigns, roofing and med spa." },
      { q: "Do you work with businesses in states not listed here?", a: "Yes. The funnel and follow-up system does not depend on location, and we have clients across the US as well as in Canada, the UK and Australia. We only create a state page where we have documented results there, so a missing state means missing evidence, not a refusal to work there." },
      { q: "How do time zones work with a Dubai agency?", a: "Your leads are contacted by automation and AI agents in your local time, so nothing waits for us. Calls with our team are scheduled in US morning or evening hours. Because Dubai is ahead, most fixes and new ad variations are live before your business day starts." },
      { q: "Is pricing different by state?", a: "No. Every build is a one-time $999 for design only, $1,499 for design, copy and full build, or $1,999 for the complete suite with CRM, automation, AI booking agent and tracking. Ad spend and software are paid directly by you, and costs per lead vary by market." },
    ],
    related: ["/locations/texas", "/locations/florida", "/locations/new-york", "/locations/california", "/lead-generation-agency-dubai", "/funnels-for", "/case-studies/all"],
    parent: { name: "Home", path: "/" },
    updated: U,
  },
  {
    path: "/locations/texas",
    kind: "location",
    keyword: "lead generation agency in texas",
    serviceType: SERVICE,
    area: { name: "Texas", type: "State" },
    title: "Lead Generation Agency in Texas | Funnels That Print",
    description: "Need a lead generation agency in Texas? Our remote team has run Texas roofing, legal, mortgage and solar campaigns. Builds from $999, live in 5-10 days.",
    eyebrow: "Texas",
    h1: "Lead generation agency in Texas: remote team, real Texas results",
    intro:
      "Looking for a <strong>lead generation agency in Texas</strong>? Funnels That Print works remotely from Dubai with Texas roofers, injury firms, lenders, solar installers and home service companies, and Texas is the state with the most campaigns in our case files. A complete build costs a one-time $999 to $1,999 and goes live in 5 to 10 business days. Ad spend is separate and paid by you directly to Meta or Google.",
    quick: {
      q: "Who does lead generation for Texas businesses, and what does it cost?",
      a: "Funnels That Print builds lead funnels, follow-up automation and tracking for Texas businesses remotely, without a Texas office. Pricing is a one-time $999, $1,499 or $1,999 depending on scope, plus your own ad spend. Our Texas campaigns include roofing leads at $5.31 and injury leads at $5.24.",
    },
    sections: [
      {
        h2: "Why Texas businesses choose Funnels That Print",
        html: `<ul>
<li><strong>Storm-driven demand needs instant follow-up.</strong> Spring hail and severe storms send Texas homeowners looking for roofers all at once. Our <a href="/speed-to-lead">speed-to-lead automation</a> calls and texts within seconds, before the homeowner has finished filling out a competitor's form.</li>
<li><strong>A big state with spread-out metros.</strong> Service areas matter. We filter by zip code inside the funnel and split campaigns by area, so a crew is never sent leads it cannot reach.</li>
<li><strong>We have done it here before.</strong> Eleven Texas campaigns across seven industries sit in our case files, more than any other state.</li>
<li><strong>Verified phones, not junk.</strong> Our Texas mortgage campaign ran on OTP-verified leads, the same verification we use for roofing and legal intake.</li>
</ul>`,
      },
      {
        h2: "Texas industries we generate leads for",
        html: `<ul>
<li><a href="/funnels-for/roofing">Roofing</a>: storm-damage quizzes that book inspections.</li>
<li><a href="/funnels-for/personal-injury-lawyers">Personal injury lawyers</a>: accident intake with consent language and instant callbacks.</li>
<li><a href="/funnels-for/mortgage">Mortgage</a>: purchase and refinance quizzes with OTP verification.</li>
<li><a href="/funnels-for/real-estate">Real estate</a>: buyer and seller funnels that route by timeline.</li>
<li><a href="/funnels-for/solar">Solar</a>: homeowner and utility bill qualification before a consult.</li>
<li><a href="/funnels-for/pressure-washing">Pressure washing</a>: quote funnels for residential and commercial jobs, alongside our wider <a href="/funnels-for/home-services">home services</a> and remodeling work.</li>
</ul>`,
      },
      {
        h2: "Results from Texas campaigns",
        html: `<p>Every figure below is from a campaign tied to Texas in our case files.</p>
<ul>
<li><a href="/case-studies/mva-1865-leads-at-5-24-cpl">1,865 MVA leads at $5.24 each</a> on $9,770 ad spend, for a firm with presence across Texas.</li>
<li><a href="/case-studies/mva-530-leads-at-27-cpl">530 leads at $27</a> on $14,270 for a Texas personal injury law firm.</li>
<li><a href="/case-studies/roofing-686-leads-at-5-31-cpl">686 roofing leads at $5.31</a> in 8 days for a Texas roofer.</li>
<li><a href="/case-studies/roofing-850-leads">850 roofing leads</a> on $6,461.25, about $7.60 each, for another Texas roofer.</li>
<li><a href="/case-studies/roofing-537-leads-at-4-27-cpl">537 leads at $4.27</a> on $2,292 for projects across Texas, Florida and Georgia.</li>
<li><a href="/case-studies/mortgage-823-leads-at-23-97-cpl">823 OTP-verified mortgage leads at $23.97</a> on $19,725, and <a href="/case-studies/mortgage-142-leads-at-4-31-cpl">142 mortgage leads at $4.31</a> on $612 for a Texas-based lender.</li>
<li><a href="/case-studies/real-estate-247-leads-at-16-48-cpl">247 real estate leads at $16.48</a> on $4,069.</li>
<li><a href="/case-studies/solar-300-leads-at-14-71-cpl">300 solar leads at $14.71</a> for a Texas-based installer.</li>
<li><a href="/case-studies/home-services-542-leads-at-23-82-cpl">542 remodeling leads at $23.82</a> in 30 days.</li>
<li><a href="/case-studies/agency-142-leads-at-11-24-cpl">142 pressure washing leads at $11.24</a> on $1,596.</li>
</ul>
<p>We have also worked with a Texas auto detailing business, though we do not publish numbers for it.</p>`,
      },
      {
        h2: "How we work with Texas businesses",
        html: `<p>Everything runs remotely. We start with a video call to map your service area, average job value and who answers the phone. Within 5 to 10 business days your funnel, <a href="/gohighlevel-agency">GoHighLevel</a> pipeline, reminders and <a href="/meta-conversions-api-setup">Conversions API</a> tracking are live. For crews who are out on jobs all day, an <a href="/ai-appointment-setter">AI appointment setter</a> books estimates in Central or Mountain time without anyone stopping work.</p>
<p>Pricing is one-time: $999 for design only, $1,499 for design, copy and build, or $1,999 for the full suite with CRM, automation, AI booking agent and tracking. Ready to talk? <a href="/book-a-call">Book a call</a>.</p>`,
      },
      {
        h2: "Nearby states we also serve",
        html: `<p>Our roofing work for one client spanned Texas, Florida and Georgia, so the Gulf Coast and Southeast are familiar ground. See our <a href="/locations/florida">Florida lead generation results</a> for HVAC, legal and home services there. We have no separate Georgia page because that one shared campaign is our only Georgia evidence. For other states, start at <a href="/locations">lead generation by state</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "1,865", label: "MVA leads at $5.24 for a firm across Texas", href: "/case-studies/mva-1865-leads-at-5-24-cpl" },
        { value: "686", label: "Texas roofing leads at $5.31 in 8 days", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
        { value: "823", label: "OTP-verified Texas mortgage leads at $23.97", href: "/case-studies/mortgage-823-leads-at-23-97-cpl" },
        { value: "$11.24", label: "Cost per lead for a Texas pressure washing company", href: "/case-studies/agency-142-leads-at-11-24-cpl" },
      ],
      more: { label: "All case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "Do you have an office in Texas?", a: "No. Funnels That Print has one office, in Dubai, UAE. We work with Texas businesses remotely over video calls, shared dashboards and chat. That has not stopped us running more campaigns in Texas than anywhere else, from roofing and injury law to mortgage and solar, all listed with real figures on this page." },
      { q: "What does a roofing lead cost in Texas?", a: "In our Texas roofing campaigns, leads cost $5.31 for one client, about $7.60 for another, and $4.27 on a campaign spanning Texas, Florida and Georgia. Storm timing and how strictly the funnel filters change the number. Judge it by cost per signed roof, not cost per lead." },
      { q: "Can you handle hail season surges?", a: "Yes. When a storm hits, lead volume can jump overnight. Automation contacts every lead within seconds, an AI voice agent books inspections around the clock, and campaigns can be paused by zip code once crews are full. That keeps you from paying for leads you cannot serve." },
      { q: "Do you work with Texas personal injury firms?", a: "Yes. We have two Texas injury cases: 1,865 MVA leads at $5.24 for a firm with presence across Texas, and 530 leads at $27 for a Texas law firm. Intake funnels include clear consent language before any automated call or text, and every lead is routed to intake staff instantly." },
      { q: "How much does a Texas lead generation build cost?", a: "The same as anywhere: a one-time $999 for design only, $1,499 for design, copy and full build, or $1,999 for the complete suite with CRM, automation, AI booking agent and tracking. Ad spend is separate and paid to Meta or Google directly, so you keep full control of the budget." },
    ],
    related: ["/locations", "/locations/florida", "/funnels-for/roofing", "/funnels-for/personal-injury-lawyers", "/funnels-for/pressure-washing", "/case-studies/roofing-lead-generation", "/book-a-call", "/ai-appointment-setter/real-estate", "/locations/california"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/locations/florida",
    kind: "location",
    keyword: "lead generation agency in florida",
    serviceType: SERVICE,
    area: { name: "Florida", type: "State" },
    title: "Lead Generation Agency in Florida | Funnels That Print",
    description: "Hiring a lead generation agency in Florida? See our Florida HVAC, injury law and home service results. One-time builds $999-$1,999, live in 5-10 days.",
    eyebrow: "Florida",
    h1: "Lead generation agency in Florida for HVAC, legal and home services",
    intro:
      "If you need a <strong>lead generation agency in Florida</strong>, Funnels That Print runs funnels, follow-up and tracking for Florida HVAC contractors, injury attorneys, home service companies and roofers, working remotely from our office in Dubai. Our Florida work includes 5,628 booked HVAC appointments for one client. Builds cost a one-time $999 to $1,999, launch in 5 to 10 business days, and your ad spend is paid separately to the platforms.",
    quick: {
      q: "Who does lead generation for Florida businesses, and what does it cost?",
      a: "Funnels That Print handles lead generation for Florida HVAC, legal, home service and roofing companies from Dubai, with no Florida office. Builds are a one-time $999, $1,499 or $1,999 plus your ad spend. Florida results include 465 injury leads at $14.21 and home service leads at $7.75 statewide.",
    },
    sections: [
      {
        h2: "Why Florida businesses choose Funnels That Print",
        html: `<ul>
<li><strong>Hurricane season needs a plan, not panic.</strong> After a storm, roof and insurance claim inquiries spike and then fade. We build funnels that qualify storm-damage leads fast and reactivation sequences that bring old leads back the next season.</li>
<li><strong>Air conditioning is not optional in Florida.</strong> Heat and humidity keep HVAC demand high most of the year, so a funnel that books service calls around the clock pays off. Our <a href="/ai-appointment-setter">AI appointment setter</a> answers when the office is closed.</li>
<li><strong>Statewide reach from one system.</strong> One of our Florida home service clients covered the whole state from a single funnel with service-area routing.</li>
<li><strong>Statewide reach from one funnel.</strong> A home service client ran one funnel across all of Florida for 30 days at $7.75 per lead, so a single build can cover several metros when follow-up is fast and the questions screen for service area.</li>
</ul>`,
      },
      {
        h2: "Florida industries we generate leads for",
        html: `<ul>
<li><a href="/funnels-for/hvac">HVAC</a>: repair, maintenance and replacement funnels that book appointments directly.</li>
<li><a href="/funnels-for/personal-injury-lawyers">Personal injury lawyers</a>: accident intake that routes to attorneys in real time.</li>
<li><a href="/funnels-for/home-services">Home services</a>: statewide quote funnels with zip code filtering.</li>
<li><a href="/funnels-for/roofing">Roofing</a>: storm-damage inspection funnels.</li>
<li><a href="/funnels-for/car-dealerships">Car dealerships</a>: trade-in and pre-qualification funnels that book test drives.</li>
</ul>`,
      },
      {
        h2: "Results from Florida campaigns",
        html: `<p>These are the cases in our files tied to Florida, with their published figures.</p>
<ul>
<li><a href="/case-studies/hvac-5628-appointments-booked">5,628 appointments booked</a> for a Florida HVAC client.</li>
<li><a href="/case-studies/mva-465-leads-at-14-21-cpl">465 MVA leads at $14.21</a> on $6,608 for a Florida-based accident attorney.</li>
<li><a href="/case-studies/lead-gen-7-75-cost-per-lead">$7.75 cost per lead</a> on $6,543 over 30 days for a home service client covering all of Florida.</li>
<li><a href="/case-studies/roofing-537-leads-at-4-27-cpl">537 roofing leads at $4.27</a> on $2,292 for projects across Texas, Florida and Georgia.</li>
<li><a href="/case-studies/lead-gen-89-leads">89 qualified leads in 7 days</a> for a car dealership client.</li>
</ul>
<p>Each case page shows the funnel and the ad approach behind it. The wider set sits in our <a href="/case-studies/hvac-lead-generation">HVAC case studies</a>.</p>`,
      },
      {
        h2: "How we work with Florida businesses",
        html: `<p>We never visit, and you never need us to. Onboarding is one video call and a shared checklist. In 5 to 10 business days we launch the funnel, CRM pipeline, three-channel appointment reminders and tracking. Florida service companies usually lose leads after hours and on weekends, so most choose the $1,999 suite with an AI booking agent; the $999 and $1,499 options cover design, or design plus copy and build. Use the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a> to see what missed appointments cost you, then <a href="/book-a-call">book a call</a>.</p>`,
      },
      {
        h2: "Nearby states we also serve",
        html: `<p>The roofing campaign above also covered Georgia, our only Georgia evidence, so it has no page of its own. Across the Gulf, <a href="/locations/texas">our Texas lead generation results</a> are the deepest in our files, with roofing, injury, mortgage and solar campaigns. The full list is on <a href="/locations">lead generation by state</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "5,628", label: "Appointments booked for a Florida HVAC client", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "465", label: "MVA leads at $14.21 for a Florida attorney", href: "/case-studies/mva-465-leads-at-14-21-cpl" },
        { value: "$7.75", label: "Cost per lead for a statewide Florida home service client", href: "/case-studies/lead-gen-7-75-cost-per-lead" },
        { value: "89", label: "Qualified leads in 7 days for a car dealership", href: "/case-studies/lead-gen-89-leads" },
      ],
      more: { label: "All case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "Do you have an office in Florida?", a: "No. Our only office is in Dubai, UAE, and we work with Florida clients remotely. Onboarding, reviews and reporting all happen over video calls and shared dashboards. The Florida results on this page, from HVAC to injury law, were all delivered this way, without anyone on the ground in the state." },
      { q: "How do you handle leads after a hurricane?", a: "Storm-damage leads arrive in a rush and include many people who are not ready to act. The funnel asks about damage, ownership and insurance before contact details, automation replies instantly, and leads not ready yet go into a reactivation sequence. We also avoid promising guaranteed insurance approval, which attracts the wrong leads." },
      { q: "Can one funnel cover all of Florida?", a: "Yes, if the funnel asks for the lead's ZIP code or county early and routes leads to the team that covers that area. One home service client ran a single statewide funnel for 30 days and paid $7.75 per lead on $6,543 of ad spend, with follow-up handled the same way across every metro." },
      { q: "Do you work with Florida HVAC companies all year?", a: "Yes. Cooling demand in Florida runs for most of the year, so HVAC funnels rarely go fully quiet. We shift the offer between emergency repair, maintenance plans and system replacement as demand changes, and keep the AI booking agent running nights and weekends when most breakdown calls come in." },
      { q: "What does a Florida lead generation build cost?", a: "One-time pricing applies everywhere: $999 for design only, $1,499 for design, copy and full build, or $1,999 for the complete suite including CRM, automation, AI booking agent and tracking. You pay ad spend and software directly. Builds go live in 5 to 10 business days." },
    ],
    related: ["/locations", "/locations/texas", "/funnels-for/hvac", "/funnels-for/personal-injury-lawyers", "/funnels-for/car-dealerships", "/case-studies/hvac-lead-generation", "/book-a-call", "/locations/california"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/locations/new-york",
    kind: "location",
    keyword: "lead generation agency in new york",
    serviceType: SERVICE,
    area: { name: "New York", type: "State" },
    title: "Lead Generation Agency in New York | Funnels That Print",
    description: "A lead generation agency in New York med spas, injury firms and home service brands hire remotely. Real NY results, one-time builds from $999.",
    eyebrow: "New York",
    h1: "Lead generation agency in New York for clinics, firms and contractors",
    intro:
      "Searching for a <strong>lead generation agency in New York</strong>? Funnels That Print builds funnels and follow-up for New York med spas, personal injury firms and home service contractors, working remotely from Dubai rather than from a Manhattan office. One New York med spa made $74,100 on $10K of ad spend. Our builds cost a one-time $999 to $1,999, go live in 5 to 10 business days, and ad spend stays separate.",
    quick: {
      q: "Who does lead generation for New York businesses, and what does it cost?",
      a: "Funnels That Print runs lead generation for New York med spas, injury firms and home service companies remotely from Dubai. Pricing is a one-time $999, $1,499 or $1,999 plus ad spend. New York results include $74,100 in med spa revenue on $10K and 276+ verified injury calls in 5 days.",
    },
    sections: [
      {
        h2: "Why New York businesses choose Funnels That Print",
        html: `<ul>
<li><strong>Dense competition means the first reply wins.</strong> In a crowded metro like New York City, a prospect can find ten competitors in a minute. Our <a href="/speed-to-lead">speed-to-lead automation</a> makes sure you are the first to call back.</li>
<li><strong>Clicks are expensive, so waste hurts.</strong> We verify phone numbers and qualify in the funnel, and send booked appointments back to Meta through the <a href="/meta-conversions-api-setup">Conversions API</a>, so the algorithm learns from buyers rather than form fills.</li>
<li><strong>Multi-location clinics.</strong> Our New York med spa client had three clinic locations. The funnel routes each booking to the right clinic calendar and reminder sequence.</li>
<li><strong>Show rate is where the money is.</strong> Three-channel reminders lift show-up rates as high as 88%, which matters most when each slot is costly.</li>
</ul>`,
      },
      {
        h2: "New York industries we generate leads for",
        html: `<p>Our New York case files cover three industries, and we list only those:</p>
<ul>
<li><a href="/funnels-for/med-spas">Med spas</a>: offer pages with booking calendars and deposit options, across one or several clinics.</li>
<li><a href="/funnels-for/personal-injury-lawyers">Personal injury lawyers</a>: OTP-verified accident intake that delivers real phone calls.</li>
<li><a href="/funnels-for/home-services">Home services</a>: garage door repair and kitchen remodeling quote funnels with pre-qualification questions.</li>
</ul>
<p>For other New York businesses, the matching page in <a href="/funnels-for">funnels by industry</a> shows the closest proof we have.</p>`,
      },
      {
        h2: "Results from New York campaigns",
        html: `<ul>
<li><a href="/case-studies/med-spa-74k-revenue-on-10k-ad-spend">$74,100 in revenue and 303 clients</a> on $10K ad spend for a med spa with three clinic locations across New York.</li>
<li><a href="/case-studies/med-spa-1011-leads">1,011 med spa leads</a> on $4,703 ad spend, from a campaign whose ads reached audiences in New York City and Los Angeles.</li>
<li><a href="/case-studies/mva-276-otp-verified-calls-in-5-days">276+ OTP-verified MVA calls in 5 days</a> on $5,453 ad spend across New York.</li>
<li><a href="/case-studies/home-services-5-10-cost-per-lead">$5.10 cost per lead</a> for a New York garage door and kitchen remodeling client.</li>
</ul>
<p>More clinic campaigns are in the <a href="/case-studies/med-spa-marketing">med spa case studies</a>.</p>`,
      },
      {
        h2: "How we work with New York businesses",
        html: `<p>We work remotely and keep the process short. After a kickoff call we build the funnel, booking calendar, reminders and tracking in 5 to 10 business days. Dubai is several hours ahead of New York, so we schedule calls in your morning, and changes we make during our day are usually live by the time you open. Clinics often pick the $1,999 suite for its AI booking agent and reminder automation; the $999 and $1,499 tiers cover design, or design plus copy and full build. <a href="/book-a-call">Book a call</a> to start.</p>`,
      },
      {
        h2: "Nearby states we also serve",
        html: `<p>We work with New Jersey businesses the same remote way, but we have no New Jersey case to show yet, so it has no page. The med spa campaign above also reached Los Angeles, which is covered on our <a href="/locations/california">California lead generation</a> page. Further south, see <a href="/locations/florida">Florida results</a>, or the full list on <a href="/locations">lead generation by state</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$74,100", label: "Revenue for a 3-location New York med spa on $10K", href: "/case-studies/med-spa-74k-revenue-on-10k-ad-spend" },
        { value: "1,011", label: "Med spa leads, ads seen in New York City and Los Angeles", href: "/case-studies/med-spa-1011-leads" },
        { value: "276+", label: "OTP-verified MVA calls across New York in 5 days", href: "/case-studies/mva-276-otp-verified-calls-in-5-days" },
        { value: "$5.10", label: "Cost per lead for a New York garage door and remodeling client", href: "/case-studies/home-services-5-10-cost-per-lead" },
      ],
      more: { label: "All case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "Do you have an office in New York?", a: "No. Funnels That Print has a single office in Dubai, UAE, and serves New York clients remotely. We meet over video, share live dashboards and report weekly in writing. The New York med spa, injury and home service results on this page were all delivered without a local office." },
      { q: "Is lead generation more expensive in New York City?", a: "Ad costs in dense metros like New York City are usually higher than in smaller markets, because more businesses compete for the same audience. That makes qualification and follow-up more important: verified phones, instant callbacks and reminders turn expensive clicks into appointments instead of abandoned forms." },
      { q: "Can you handle a med spa with several New York locations?", a: "Yes. Our New York med spa client ran three clinic locations. The funnel asks which location suits the client, books into that clinic's calendar, and sends reminders with the right address. Reporting shows revenue and bookings per location so you can move budget toward the clinic that converts best." },
      { q: "What are OTP-verified injury leads?", a: "The claimant confirms their phone number with a one-time code before the lead is submitted. That removes fake numbers and accidental entries. Our New York MVA campaign delivered 276+ verified calls in 5 days, so intake staff spent their time on real accident victims instead of dead numbers." },
      { q: "How quickly can a New York campaign launch?", a: "Builds go live in 5 to 10 business days after the kickoff call. Pricing is a one-time $999 for design only, $1,499 for design, copy and full build, or $1,999 for the complete suite with CRM, automation, AI booking agent and tracking. Ad spend is separate and paid directly by you." },
    ],
    related: ["/locations", "/locations/california", "/funnels-for/med-spas", "/funnels-for/personal-injury-lawyers", "/case-studies/med-spa-marketing", "/templates/no-show-reminder-sequence", "/book-a-call"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/locations/california",
    kind: "location",
    keyword: "lead generation agency in california",
    serviceType: SERVICE,
    area: { name: "California", type: "State" },
    title: "Lead Generation Agency in California | Funnels That Print",
    description: "A lead generation agency in California roofers and med spas can check: two real California cases, honest pricing ($999-$1,999) and a remote build.",
    eyebrow: "California",
    h1: "Lead generation agency in California: two real cases, no padding",
    intro:
      "Evaluating a <strong>lead generation agency in California</strong>? Funnels That Print works remotely from Dubai, and we will be straight with you: we have two documented California campaigns, one for a roofer and one for a med spa that ran in Los Angeles. Both are below, with real figures. A build costs a one-time $999 to $1,999, launches in 5 to 10 business days, and ad spend is billed separately by the platforms.",
    quick: {
      q: "Who does lead generation for California businesses, and what does it cost?",
      a: "Funnels That Print builds lead funnels and follow-up for California businesses remotely, with no California office. Builds are a one-time $999, $1,499 or $1,999 plus your ad spend. Our two California cases are 52 roofing calls on $646 of ad spend and a med spa campaign that also ran in Los Angeles.",
    },
    sections: [
      {
        h2: "Why California businesses choose Funnels That Print",
        html: `<ul>
<li><strong>High ad costs reward efficiency.</strong> California is one of the more expensive places to advertise. Our California roofing campaign booked calls without landing pages or forms at all, which kept the cost of each conversation low.</li>
<li><strong>Privacy rules are taken seriously.</strong> California has some of the strictest consumer privacy laws in the US. We set up consent language, data handling and <a href="/meta-conversions-api-setup">server-side tracking</a> carefully so health and personal details do not end up where they should not.</li>
<li><strong>Honest evidence.</strong> We show two California cases and label everything else as out of state. You can judge us on that.</li>
</ul>`,
      },
      {
        h2: "California industries we generate leads for",
        html: `<p>Our California evidence covers two industries:</p>
<ul>
<li><a href="/funnels-for/roofing">Roofing</a>: the call-first campaign below, with no landing page in between.</li>
<li><a href="/funnels-for/med-spas">Med spas</a>: offer and booking funnels, including the campaign that ran in Los Angeles.</li>
</ul>
<p>For California <a href="/funnels-for/solar">solar</a> and <a href="/funnels-for/home-services">home services</a> companies, we have no California case, but the closest comparable results come from Texas and are listed separately below.</p>`,
      },
      {
        h2: "Results from California campaigns",
        html: `<p>These are our only two cases tied to California:</p>
<ul>
<li><a href="/case-studies/roofing-52-booked-calls">52 calls in 7 days on $646 ad spend</a> for a California roofing client, with no landing pages or forms.</li>
<li><a href="/case-studies/med-spa-1011-leads">1,011 med spa leads on $4,703 ad spend</a>, from a campaign that ran in Los Angeles and New York City.</li>
</ul>
<p><strong>Closest relevant results from outside California (clearly not California clients):</strong></p>
<ul>
<li>Solar: <a href="/case-studies/solar-300-leads-at-14-71-cpl">300 leads at $14.71</a> for a Texas-based installer.</li>
<li>Remodeling: <a href="/case-studies/home-services-542-leads-at-23-82-cpl">542 leads at $23.82</a> in 30 days for a Texas client.</li>
<li>Med spa: <a href="/case-studies/med-spa-74k-revenue-on-10k-ad-spend">$74,100 revenue on $10K ad spend</a> for a New York clinic group.</li>
</ul>`,
      },
      {
        h2: "How we work with California businesses",
        html: `<p>California is the furthest US time zone from Dubai, so we keep live calls to your early morning or late afternoon and handle the rest in writing. Leads never wait on us: automation and an <a href="/ai-appointment-setter">AI appointment setter</a> contact them in Pacific time within seconds. Your funnel, CRM, reminders and tracking go live in 5 to 10 business days. Pricing is $999 for design only, $1,499 for design, copy and build, or $1,999 for the complete suite. Run your numbers in the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a>, then <a href="/book-a-call">book a call</a>.</p>`,
      },
      {
        h2: "Nearby states we also serve",
        html: `<p>We have no case evidence from states bordering California, so we will not claim any. The med spa campaign seen in Los Angeles was also seen in New York City, covered on our <a href="/locations/new-york">New York lead generation</a> page, and our deepest US file is <a href="/locations/texas">Texas</a>. Every state with real results is on <a href="/locations">lead generation by state</a>.</p>`,
      },
    ],
    proof: {
      heading: "California results, plus labelled out-of-state comparisons",
      items: [
        { value: "52", label: "Calls in 7 days for a California roofer on $646", href: "/case-studies/roofing-52-booked-calls" },
        { value: "1,011", label: "Med spa leads from a campaign in Los Angeles and NYC", href: "/case-studies/med-spa-1011-leads" },
        { value: "$14.71", label: "Solar cost per lead (Texas client, not California)", href: "/case-studies/solar-300-leads-at-14-71-cpl" },
      ],
      more: { label: "All case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "Do you have an office in California?", a: "No. Funnels That Print has one office, in Dubai, UAE. We work with California businesses remotely through video calls, shared dashboards and written weekly reports. We also have only two documented California campaigns, a roofer and a med spa, and we would rather tell you that than imply a bigger local presence." },
      { q: "Why only two California case studies?", a: "Most of our US work has come from Texas, Florida and New York. In California we have documented a roofing client and a med spa campaign that ran in Los Angeles. Where we lack California proof, we show the closest results from other states and label them clearly, so you can weigh them fairly." },
      { q: "Can a roofing campaign work without a landing page?", a: "Yes. Our California roofing client got 52 calls in 7 days on $646 of ad spend with no landing pages or forms, using call-focused ads. It suits contractors who want phone conversations quickly. The trade-off is less pre-qualification, so whoever answers needs a short script to screen callers." },
      { q: "How do you handle California privacy rules?", a: "We add clear consent language before any automated call or text, collect only the details needed to qualify a lead, and keep sensitive information out of ad platform events. For med spas, health details stay inside the CRM. Your own counsel should confirm compliance; we build the funnel to make that review easy." },
      { q: "What does a California lead generation build cost?", a: "The same one-time pricing as every state: $999 for design only, $1,499 for design, copy and full build, or $1,999 for the complete suite with CRM, automation, AI booking agent and tracking. Ad spend is paid directly to Meta or Google. California clicks often cost more, so budget for that." },
    ],
    related: ["/locations", "/locations/new-york", "/funnels-for/roofing", "/funnels-for/med-spas", "/case-studies/roofing-lead-generation", "/tools/cost-per-lead-calculator", "/book-a-call"],
    parent: HUB,
    updated: U,
  },
];
