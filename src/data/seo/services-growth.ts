import type { SeoPage } from "./types";

const HUB = { name: "Services", path: "/services" };
const U = "2026-11-09";

export const GROWTH_SERVICE_PAGES: SeoPage[] = [
  {
    path: "/facebook-ads-agency",
    kind: "service",
    keyword: "facebook ads agency for lead generation",
    serviceType: "Facebook and Instagram (Meta) ads management",
    title: "Facebook Ads Agency for Lead Generation and eCommerce",
    description: "Facebook ads agency for lead generation and eCommerce: account structure, creative testing, OTP-verified forms, Conversions API and cost per booked call.",
    eyebrow: "Meta ads management",
    h1: "Facebook ads agency for lead generation and eCommerce brands",
    intro:
      "Funnels That Print is a <strong>Facebook ads agency for lead generation</strong> and eCommerce that manages Meta campaigns end to end: account structure, creative, offers, lead capture, Conversions API and scaling. We judge every campaign by cost per booked call, signed client or purchase, not by cost per lead, because cheap leads that never answer the phone are the most expensive kind.",
    quick: {
      q: "What does a Facebook ads agency for lead generation do?",
      a: "It plans and runs your Meta campaigns: builds the account structure, produces and tests creative, writes the offer and angles, chooses between instant forms and landing pages, connects the CRM and Conversions API, and scales winners on clear rules. A good one reports on booked calls and revenue, not only on leads and clicks.",
    },
    sections: [
      {
        h2: "How we structure a Meta ad account",
        html: `<p>Most accounts we inherit have too many campaigns, too little budget per ad set and no clean way to tell what is working. We simplify:</p>
<ul>
<li><strong>One testing campaign</strong> where new creative and angles compete on a fixed budget.</li>
<li><strong>One scaling campaign</strong> with broad targeting that only receives proven ads.</li>
<li><strong>Retargeting</strong> for page visitors, video viewers and form openers who did not finish, sized to the account rather than run by default.</li>
<li><strong>Optimization on the deepest event Meta can learn from</strong>: qualified lead or booked call for lead generation, purchase with value for eCommerce, sent through the <a href="/meta-conversions-api-setup">Conversions API</a>.</li>
</ul>
<p>Broad targeting works when the creative does the targeting. That is why most of our effort goes into what people see, not into interest lists.</p>`,
      },
      {
        h2: "Creative testing: UGC, static and video",
        html: `<p>Creative is the biggest lever in a Meta account. We test in rounds, changing one variable at a time so the winner tells us something:</p>
<ol>
<li><strong>Angle first.</strong> Price, speed, trust, outcome or fear of loss. The angle decides who stops scrolling.</li>
<li><strong>Format second.</strong> UGC-style talking videos, simple static images with a strong headline, and short demo or before-and-after videos.</li>
<li><strong>Hook third.</strong> The first line or first two seconds, rewritten until click-through rate holds at scale.</li>
</ol>
<p>In one live roofing ads audit, a creative set reached an <a href="/case-studies/roofing-18-percent-ctr-creatives-in-a-live-ads-audit">18% click-through rate</a>. For eCommerce, the same loop runs on product angles and offers, and the results are collected on <a href="/case-ecom">eCommerce case studies</a>.</p>`,
      },
      {
        h2: "Offers and angles by industry",
        html: `<p>The ad can only be as good as the offer behind it. What works differs a lot by market:</p>
<div class="table-wrap"><table>
<thead><tr><th>Industry</th><th>Offer that tends to work</th><th>Main risk</th></tr></thead>
<tbody>
<tr><td><a href="/funnels-for/roofing">Roofing</a> and <a href="/funnels-for/hvac">HVAC</a></td><td>Free inspection or instant estimate</td><td>Tire-kickers and wrong service areas</td></tr>
<tr><td><a href="/funnels-for/personal-injury-lawyers">Personal injury</a></td><td>Free case review after an accident</td><td>Unverified numbers and non-qualifying accidents</td></tr>
<tr><td><a href="/funnels-for/mortgage">Mortgage</a> and insurance</td><td>Rate or payment check in under a minute</td><td>Special Ad Category limits on targeting</td></tr>
<tr><td><a href="/funnels-for/med-spas">Med spas</a></td><td>Intro treatment or consultation offer</td><td>Bookings that never show</td></tr>
<tr><td><a href="/funnels-for/ecommerce">eCommerce</a></td><td>Bundles, first-order offers, seasonal sales</td><td>Discounting away the margin</td></tr>
</tbody></table></div>
<p>Our mortgage team documented <a href="/case-studies/mortgage-5-offers-that-book-more-appointments">five offers that book more appointments</a>, a good example of testing offers before testing audiences.</p>`,
      },
      {
        h2: "Instant forms with OTP or a landing page?",
        html: `<p>Meta instant forms are fast and cheap but attract more low-intent leads. Landing pages filter better but cost more per lead. We choose per offer:</p>
<ul>
<li><strong>OTP-verified instant forms</strong> when volume and speed matter. A one-time code sent to the phone confirms the number is real before the lead reaches your CRM. A Texas mortgage client received <a href="/case-studies/mortgage-823-leads-at-23-97-cpl">823 OTP-verified leads</a> this way.</li>
<li><strong>Landing pages, quizzes or estimators</strong> when the buyer needs context or qualification first. We build these in-house through our <a href="/landing-page-design">landing page design</a> service.</li>
</ul>
<p>We compare both in depth in <a href="/blog/facebook-lead-ads-vs-funnels">Facebook lead ads vs funnels</a>.</p>`,
      },
      {
        h2: "Scaling rules and reporting on cost per booked call",
        html: `<p>We scale on rules agreed in advance, not on a good afternoon. Budgets rise in steps while cost per booked call or ROAS stays inside target; ads that fall outside it for several days are paused; new creative enters through testing, never straight into scaling.</p>
<p>Reporting follows the money: spend, leads, contact rate, booked calls, shows, closed deals and revenue. A lead campaign at $5 per lead with a 10% booking rate is worse than one at $15 with a 40% rate, and only a report that reaches the booking shows that. Leads are called inside a minute through <a href="/speed-to-lead">speed-to-lead automation</a>, and you can benchmark your numbers with the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a>.</p>`,
      },
      {
        h2: "Pricing and who pays for ads",
        html: `<p>Ads management is quoted on a call after we see your account, market and goals; we do not publish a fixed management fee. Your ad spend is always paid by you directly to Meta from your own ad account, so you keep full ownership of the account, data and pixel history. Funnel and landing page builds are separate one-time projects. <a href="/book-a-call">Book a call</a> to get a quote and an honest view of whether Meta ads fit your offer.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "686", label: "Roofing leads at $5.31 each in 8 days", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
        { value: "8,810", label: "MVA leads at $7.61 per lead", href: "/case-studies/mva-8810-leads-at-7-61-cpl" },
        { value: "$388K", label: "MVA revenue on $20,324 ad spend (19.09x)", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "$2.3M", label: "Shopify sales at 11.6x ROAS", href: "/case-studies/shopify-store-2-3m-in-sales-at-11-6x-roas" },
      ],
      more: { label: "See lead generation results", href: "/case-leadgen" },
    },
    faqs: [
      { q: "How much does your Facebook ads management cost?", a: "Management is quoted on a call because it depends on the number of campaigns, creative volume, industry and whether we also build the funnel. We do not publish a fixed fee. Ad spend is separate and is paid by you straight to Meta from your own ad account, never through us." },
      { q: "How quickly will I see leads?", a: "Most lead campaigns produce first leads within days of launch. A Texas roofing client received 686 leads at $5.31 each in eight days. How long it takes to reach a stable cost per booked call depends on budget, market and offer, and we report it weekly while creative and offers are tested and Meta's algorithm learns from your conversion events." },
      { q: "Do you run ads for eCommerce brands too?", a: "Yes. For eCommerce we run creative testing, offer and bundle tests, and scaling on purchase value with the Conversions API. Our documented store results include $2.3M in sales at 11.6x ROAS and many brands scaled at 4x to 5x ROAS, all listed on the eCommerce case studies page." },
      { q: "Instant forms or a landing page: which is better?", a: "Neither wins everywhere. Instant forms with OTP phone verification give volume at a lower cost per lead, while landing pages and quizzes give higher intent. We usually test both against cost per booked call, because the cheaper lead is not always the cheaper customer." },
      { q: "Who owns the ad account and creative?", a: "You do. Campaigns run in your Meta Business Manager and ad account, billed to your card, and the creative we produce is yours to keep. If you stop working with us, the account, pixel data, audiences and ads stay with you and keep running if you choose." },
      { q: "Can you work with a strict ad category like mortgage or insurance?", a: "Yes. Credit, housing and some financial offers fall under Meta's Special Ad Categories, which limit age, gender and detailed targeting. We work within those rules using broad delivery, compliant creative and offers that qualify the buyer on the form or page instead of in the targeting." },
    ],
    related: ["/meta-conversions-api-setup", "/landing-page-design", "/speed-to-lead", "/case-leadgen", "/case-ecom", "/blog/facebook-lead-ads-vs-funnels", "/tools/cost-per-lead-calculator"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/landing-page-design",
    kind: "service",
    keyword: "landing page design agency",
    serviceType: "Conversion-focused landing page design and build",
    title: "Landing Page Design Agency for Leads and Sales",
    description: "Landing page design agency for lead, quiz, VSL, bridge and sales pages: mobile-first, fast, written to convert and tracked. From $999 one-time.",
    eyebrow: "Landing page design",
    h1: "A landing page design agency that builds pages to convert paid traffic",
    intro:
      "Funnels That Print is a <strong>landing page design agency</strong> for businesses that pay for traffic and need it to turn into leads, booked calls or sales. We design, write and build lead pages, quiz and estimator pages, VSL pages, bridge pages, application pages, sales pages and thank-you pages in GoHighLevel, ClickFunnels or custom code, with tracking connected before launch.",
    quick: {
      q: "What does a landing page design agency do?",
      a: "It designs and builds single-purpose pages that turn ad clicks into a specific action: a form, a booked call or a purchase. That includes the layout, copy, mobile experience, page speed, form or checkout, and tracking. The goal is a higher conversion rate from the same traffic, not just a better-looking page.",
    },
    sections: [
      {
        h2: "Page types we design",
        html: `<p>Each page has one job. The type depends on what the visitor needs before they act:</p>
<div class="table-wrap"><table>
<thead><tr><th>Page</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Lead page</td><td>A simple offer such as a free inspection or guide</td></tr>
<tr><td>Quiz or estimator page</td><td>Qualifying and segmenting before asking for contact details; see <a href="/quiz-funnels">quiz funnels</a></td></tr>
<tr><td>VSL page</td><td>High-ticket offers that need a video to explain; see <a href="/vsl-funnels">VSL funnels</a></td></tr>
<tr><td>Bridge page</td><td>Warming cold ad traffic before an offer or checkout</td></tr>
<tr><td>Application page</td><td>Filtering out unqualified buyers before a sales call</td></tr>
<tr><td>Sales page</td><td>Low-ticket and mid-ticket products sold straight to checkout</td></tr>
<tr><td>Thank-you page</td><td>Confirming the booking, setting expectations and lifting show rate</td></tr>
</tbody></table></div>`,
      },
      {
        h2: "What makes our landing pages convert",
        html: `<ol>
<li><strong>Message match.</strong> The headline repeats the promise from the ad, so the visitor knows they are in the right place.</li>
<li><strong>Mobile first.</strong> Most paid social traffic arrives on a phone, so we design the phone view first and the desktop view second.</li>
<li><strong>Speed.</strong> Light images, few scripts and no heavy page-builder bloat. Every extra second costs visitors.</li>
<li><strong>Copy before design.</strong> We write the page, then design around the words. The structure we use is in our free <a href="/templates/funnel-copy-template">sales funnel copy template</a>.</li>
<li><strong>Low form friction.</strong> Only the fields you need, with optional OTP phone verification so fake numbers never reach the CRM.</li>
<li><strong>Proof near the ask.</strong> Reviews, results and guarantees placed next to the button, not buried at the bottom.</li>
</ol>`,
      },
      {
        h2: "Tracking and follow-up are part of the page",
        html: `<p>A page that converts but is not tracked cannot be improved, and a lead nobody calls is wasted. Every page we build includes the Meta pixel and <a href="/meta-conversions-api-setup">Conversions API</a> events, Google tags where needed, UTM capture into the CRM, and a thank-you page that fires the conversion once. Leads go straight into a pipeline with instant text and email follow-up, or into an <a href="/ai-appointment-setter">AI appointment setter</a> on the $1,999 suite.</p>`,
      },
      {
        h2: "GoHighLevel, ClickFunnels or custom code",
        html: `<ul>
<li><strong>GoHighLevel</strong> for lead generation, because the page, CRM, calendar and automations share one account. See our <a href="/gohighlevel-agency">GoHighLevel agency</a> work.</li>
<li><strong>ClickFunnels</strong> for product sales with order bumps and one-click upsells, the structure behind our <a href="/scalelowticket">$847K low-ticket funnel</a>.</li>
<li><strong>Custom code</strong> when speed, design control or an existing website stack matters more than drag-and-drop editing.</li>
</ul>
<p>We recommend the platform after hearing your offer. The trade-offs are covered in <a href="/blog/gohighlevel-vs-clickfunnels-lead-generation-2026">GoHighLevel vs ClickFunnels</a>.</p>`,
      },
      {
        h2: "Packages, pricing and process",
        html: `<p>Landing pages are built under our one-time packages:</p>
<ul>
<li><strong>Design Only, $999.</strong> We design and build the page from your copy.</li>
<li><strong>Design + Copy Build, $1,499.</strong> We write the copy, design the page and build it with forms and tracking.</li>
<li><strong>Complete suite, $1,999.</strong> Adds CRM, automations, an AI booking agent and full tracking.</li>
</ul>
<p>Most pages go live in 5 to 10 business days. Before you decide, estimate what a better conversion rate is worth with the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a>, then <a href="/book-a-call">book a call</a> to scope the page.</p>
<p>We start with the ad, offer and current numbers, then write the copy and send a wireframe. After you approve it, we design and build on a staging link, test every form, calendar and tracking event on phone and desktop, and launch. After launch we review conversion data and rewrite the weakest section first. If you already have pages that underperform, start with a <a href="/sales-funnel-audit">sales funnel audit</a> instead.</p>`,
      },
      {
        h2: "Common landing page mistakes we fix",
        html: `<ul>
<li><strong>Several offers on one page.</strong> A landing page should ask for one action; menus and extra links send visitors away.</li>
<li><strong>A homepage used as a landing page.</strong> Paid traffic sent to a general site has to hunt for the next step.</li>
<li><strong>Generic headlines.</strong> "Quality service you can trust" says nothing; a specific outcome, timeframe or price does.</li>
<li><strong>Thank-you pages left blank.</strong> This is where you confirm the call, explain what happens next and cut no-shows.</li>
<li><strong>Testing too much at once.</strong> We change one element per test so the result tells you why it worked.</li>
</ul>`,
      },
    ],
    proof: {
      items: [
        { value: "$847K", label: "Collected from a $27 front-end sales page funnel", href: "/scalelowticket" },
        { value: "$1.52M", label: "High-ticket consulting funnel", href: "/milliondollarcasestudy" },
        { value: "140", label: "Appointments and $64,960 revenue on $2,184 ad spend", href: "/case-studies/webinar-65k-revenue-on-2184-ad-spend" },
        { value: "174", label: "Appointments and $115,500 revenue on $2,214 ad spend", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
      ],
      more: { label: "See all case studies", href: "/case-studies" },
    },
    faqs: [
      { q: "How much does landing page design cost?", a: "Our packages are one-time fees: $999 for Design Only, where you supply the copy, and $1,499 for Design + Copy Build, where we write it too. The $1,999 suite adds CRM, automation, an AI booking agent and tracking. There is no monthly retainer for the build itself." },
      { q: "How long does it take to build a landing page?", a: "Most landing pages go live in 5 to 10 business days from kickoff. That covers copy, wireframe, design, build, form and calendar connection, tracking and testing on mobile and desktop. Quiz pages and multi-page funnels with automations sit at the longer end of that range." },
      { q: "Do you write the copy?", a: "Yes, on the Design + Copy Build and complete suite packages. We write the headline, body, calls to action, form questions and thank-you page for your specific buyer and offer. On Design Only you provide the copy and we design around it, with suggestions where the structure needs work." },
      { q: "Which platform will my page be built on?", a: "Usually GoHighLevel for lead generation, ClickFunnels for product sales with order bumps and upsells, or custom code when speed or design control matters most. The page is built in your own account, so you own it and can edit it after handover." },
      { q: "Can you redesign an existing landing page?", a: "Yes. We first check where the page loses visitors: message match with the ad, load time, mobile layout, form length and proof. Sometimes the page is fine and the leak is after the form, in follow-up or reminders, and we will tell you that rather than sell you a redesign." },
      { q: "Will the page be tracked for Meta and Google ads?", a: "Yes. We install the Meta pixel with Conversions API events, Google tags where you run Google Ads, and pass UTM parameters into the CRM. Conversions fire once on the thank-you page or booking, so ad platforms optimize on real leads and you can see which ads produce customers." },
    ],
    related: ["/quiz-funnels", "/vsl-funnels", "/templates/funnel-copy-template", "/tools/funnel-conversion-calculator", "/facebook-ads-agency", "/sales-funnel-audit", "/blog/how-to-increase-funnel-conversion-rate"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/sales-funnel-audit",
    kind: "service",
    keyword: "sales funnel audit",
    serviceType: "Sales funnel audit and optimization",
    title: "Sales Funnel Audit: Find and Fix Your Biggest Leaks",
    description: "Sales funnel audit of your offer, ads, pages, follow-up, show rate, CRM and tracking, with leaks ranked by revenue impact and fixed in the right order.",
    eyebrow: "Funnel audit",
    h1: "A sales funnel audit that finds where your leads and revenue leak",
    intro:
      "A <strong>sales funnel audit</strong> from Funnels That Print checks every step between the ad and the closed deal: offer, ad-to-page match, page speed, form friction, follow-up speed, reminders and show rate, CRM pipeline and tracking. You get a ranked list of leaks with the revenue each one costs, and we fix them in order of impact rather than rebuilding what already works.",
    quick: {
      q: "What is a sales funnel audit?",
      a: "A sales funnel audit is a step-by-step review of how traffic becomes revenue, measuring the drop-off at each stage from ad click to closed deal. It finds the biggest leaks, such as slow follow-up, weak pages or broken tracking, and ranks fixes by revenue impact so you repair the costliest problem first.",
    },
    sections: [
      {
        h2: "What we check",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Stage</th><th>What we look at</th></tr></thead>
<tbody>
<tr><td>Offer</td><td>Is the promise specific, believable and better than the alternatives?</td></tr>
<tr><td>Ad-to-page match</td><td>Does the page repeat the ad's promise, audience and visuals?</td></tr>
<tr><td>Page speed and mobile</td><td>Load time, layout on a phone, scripts slowing the page</td></tr>
<tr><td>Form friction</td><td>Number of fields, fake numbers, OTP verification, error states</td></tr>
<tr><td>Follow-up speed</td><td>Time to first call and text, number of attempts, after-hours coverage</td></tr>
<tr><td>Reminders and show rate</td><td>Confirmation, reminder timing and channels, no-show recovery</td></tr>
<tr><td>CRM pipeline</td><td>Stages, ownership, lost reasons, leads that were never worked</td></tr>
<tr><td>Tracking</td><td>Pixel, <a href="/meta-conversions-api-setup">Conversions API</a>, deduplication, CRM events sent back to ads</td></tr>
</tbody></table></div>`,
      },
      {
        h2: "What we usually find",
        html: `<p>Most owners expect the problem to be the ads or the page. In our audits, the larger loss usually sits after the form:</p>
<ul>
<li><strong>Slow first contact.</strong> Leads wait hours for a call. Across 60+ deployments of our <a href="/speed-to-lead">speed-to-lead automation</a>, median first contact fell to 38 seconds, 84% of leads were reached inside the first minute, and lead-to-booking rose 2.4x on the same ads.</li>
<li><strong>Missing reminders.</strong> One reminder email, or none. With three-channel reminders by text, email and call, show rates reach up to 88%.</li>
<li><strong>Leads never worked.</strong> Contacts sit in the CRM with no owner, no stage and no second attempt.</li>
<li><strong>Tracking that undercounts.</strong> Pixel-only setups that miss events, so Meta optimizes for form fills instead of buyers.</li>
</ul>
<p>To see what no-shows cost you today, run the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a> before the audit.</p>`,
      },
      {
        h2: "The order we fix leaks in",
        html: `<p>We fix from the bottom of the funnel up, because a leak late in the funnel wastes everything spent above it:</p>
<ol>
<li><strong>Follow-up speed</strong> and attempts, often with an <a href="/ai-appointment-setter">AI appointment setter</a> that calls and texts new leads within seconds.</li>
<li><strong>Reminders and show rate</strong>, using a sequence like our <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a>.</li>
<li><strong>Tracking</strong>, so the ad platform learns from booked and closed deals.</li>
<li><strong>Form and page</strong>: friction, speed, mobile layout and message match.</li>
<li><strong>Offer and ads</strong>, once everything below them is measured correctly.</li>
</ol>
<p>Fixing the bottom first also makes later tests honest: you cannot judge a new ad while half its leads go uncalled.</p>`,
      },
      {
        h2: "What you receive",
        html: `<ul>
<li><strong>A stage-by-stage scorecard</strong> with conversion rates from click to closed deal, built on our <a href="/templates/funnel-kpi-dashboard">funnel KPI dashboard template</a>.</li>
<li><strong>A ranked leak list</strong> with the estimated monthly revenue each leak costs.</li>
<li><strong>A recorded walkthrough</strong> of the funnel as a lead experiences it, including how long it took to hear back.</li>
<li><strong>A fix plan</strong> that separates what your team can change this week from what needs a rebuild.</li>
</ul>`,
      },
      {
        h2: "How we run the audit",
        html: `<p>We start by acting as a lead: we click a live ad, fill in the form on a phone, and time how long it takes to hear back and what the follow-up says. Then we pull the numbers for each stage from the ad account, CRM and calendar for the last 30 to 90 days, and compare what the platforms report with what your team actually booked and closed. Gaps between those numbers are often the first finding. Finally we rank every leak by the revenue it costs per month, so the fix plan starts with the change that pays back fastest.</p>`,
      },
      {
        h2: "Pricing and when to audit",
        html: `<p>The audit is scoped on a call because the work depends on how many funnels, ad accounts and CRMs are involved. When you go ahead with a rebuild, the audit is included as its first step. An audit makes sense when cost per lead looks fine but sales do not follow, when show rates are falling, or when you are about to raise ad spend. <a href="/book-a-call">Book a call</a> to scope yours.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "2.4x", label: "Lead-to-booking lift from 60-second follow-up across 60+ deployments", href: "/speed-to-lead" },
        { value: "$280 → $112", label: "Cost per booked call after offline CRM events", href: "/milliondollarcasestudy" },
        { value: "+31%", label: "Conversion events recovered with the Conversions API", href: "/meta-conversions-api-setup" },
        { value: "1,956", label: "HVAC appointments and $36,444 revenue", href: "/case-studies/hvac-36k-in-revenue" },
      ],
      more: { label: "See 275+ results", href: "/case-studies" },
    },
    faqs: [
      { q: "How much does a sales funnel audit cost?", a: "We scope each audit on a call, because the effort depends on how many funnels, ad accounts and CRM pipelines are involved. We do not publish a fixed audit price. If you go ahead with a funnel rebuild with us, the audit is included as the first step rather than charged separately." },
      { q: "How long does an audit take?", a: "We agree the timeline on the strategy call, based on how many funnels, ad accounts and automations are involved, and start once we have read access to your ad account, pages, CRM and tracking. We also submit a test lead to experience the follow-up firsthand. You then receive the scorecard, ranked leak list, recorded walkthrough and fix plan, and we go through them together on a call." },
      { q: "What access do you need?", a: "Read access to your Meta or Google ad account, the funnel builder or website, the CRM and calendar, and any analytics or tag manager. Nothing is changed during the audit. If you already track results in a spreadsheet, share it so we can compare it against what the platforms report." },
      { q: "What is the most common problem you find?", a: "Slow or missing follow-up after the form. Many funnels generate enough leads but call them hours later, try once and send no reminders. Fixing that usually lifts booked calls faster than any new ad or page, which is why we fix the bottom of the funnel first." },
      { q: "Can my team implement the fixes ourselves?", a: "Yes. The fix plan is written so an in-house marketer or VA can handle the simpler items, such as shortening a form or adding reminders. Larger items like rebuilding a page, setting up the Conversions API or adding an AI appointment setter can be done by us as a separate project." },
      { q: "Do you audit eCommerce funnels too?", a: "Yes. For stores we review product and landing pages, offers and bundles, checkout friction, order bumps and upsells, abandoned cart flows and purchase tracking with value. The leaks differ from lead generation, but the method of measuring every step and fixing the costliest first is the same." },
    ],
    related: ["/speed-to-lead", "/ai-appointment-setter", "/meta-conversions-api-setup", "/tools/no-show-cost-calculator", "/templates/funnel-kpi-dashboard", "/landing-page-design", "/blog/reduce-sales-call-no-show-rate-reminder-automation"],
    parent: HUB,
    updated: U,
  },
];
