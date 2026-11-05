import type { SeoPage } from "./types";

const HOME = { name: "Home", path: "/" };
const G = { name: "Glossary", path: "/glossary" };
const U = "2026-11-05";

export const GLOSSARY_PAGES: SeoPage[] = [
  {
    path: "/glossary",
    kind: "hub",
    keyword: "sales funnel glossary",
    title: "Sales Funnel Glossary: 15 Terms Defined | Funnels That Print",
    description: "Sales funnel glossary: plain definitions of tripwires, order bumps, VSLs, speed to lead, show rate, Conversions API, CRM pipelines and cost per lead.",
    eyebrow: "Glossary",
    h1: "Sales funnel glossary: the terms that decide funnel results",
    intro:
      "This <strong>sales funnel glossary</strong> defines the 15 terms we use every day when we build funnels, follow-up systems and tracking for clients. Each definition is short and practical, then shows how the term works in a live funnel, a real example from our case studies, the formula where one exists, and the mistakes we see most often.",
    quick: {
      q: "What does this sales funnel glossary cover?",
      a: "It covers four groups of terms: funnel structure (sales funnel, lead magnet, VSL), offers (tripwire, self-liquidating offer, order bump, upsell and downsell), traffic and tracking (Meta Pixel, Conversions API, cost per lead) and follow-up and AI (speed to lead, show rate, CRM pipeline, AI voice agent, GoHighLevel snapshot).",
    },
    sections: [
      {
        h2: "Funnel structure",
        html: `<p>These terms describe the shape of a funnel: how a stranger becomes a lead and how the lead is moved toward a sale.</p>
<ul>
<li><a href="/glossary/sales-funnel"><strong>Sales funnel</strong></a>: the sequence of steps that turns ad traffic into leads, calls and customers.</li>
<li><a href="/glossary/lead-magnet"><strong>Lead magnet</strong></a>: the free resource, quiz result or estimate you trade for contact details.</li>
<li><a href="/glossary/vsl"><strong>VSL (video sales letter)</strong></a>: a scripted video that sells the offer or the call before the prospect books.</li>
</ul>
<p>If you want a funnel built rather than defined, start with our <a href="/sales-funnel-agency">sales funnel agency</a> page or the <a href="/blog/sales-funnel-stages">guide to sales funnel stages</a>.</p>`,
      },
      {
        h2: "Offers and order value",
        html: `<p>Offer terms explain how a funnel pays for its own ads and raises the value of every buyer.</p>
<ul>
<li><a href="/glossary/tripwire-offer"><strong>Tripwire offer</strong></a>: a low-priced first purchase that turns a lead into a customer.</li>
<li><a href="/glossary/self-liquidating-offer"><strong>Self-liquidating offer</strong></a>: a front end built so revenue covers the ad spend that bought it.</li>
<li><a href="/glossary/order-bump"><strong>Order bump</strong></a>: a checkbox add-on on the checkout page.</li>
<li><a href="/glossary/upsell-and-downsell"><strong>Upsell and downsell</strong></a>: the one-click offers shown after the first purchase.</li>
</ul>
<p>All four appear in our <a href="/scalelowticket">$847K low-ticket funnel case study</a>, which pairs a $27 product with a $17 bump.</p>`,
      },
      {
        h2: "Traffic and tracking",
        html: `<p>Tracking terms decide whether the ad platform learns who buys or only who clicks.</p>
<ul>
<li><a href="/glossary/meta-pixel"><strong>Meta Pixel</strong></a>: the browser code that reports page views, leads and purchases to Meta.</li>
<li><a href="/glossary/conversions-api"><strong>Conversions API</strong></a>: the server-to-server connection that sends the same events, plus offline ones, without relying on the browser.</li>
<li><a href="/glossary/cost-per-lead"><strong>Cost per lead</strong></a>: ad spend divided by leads, the first number most funnels are judged on.</li>
</ul>
<p>Our <a href="/meta-conversions-api-setup">Conversions API setup</a> service connects both, and the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a> shows what your numbers mean.</p>`,
      },
      {
        h2: "Follow-up, CRM and AI",
        html: `<p>Most funnels lose value after the form. These terms describe the systems that recover it.</p>
<ul>
<li><a href="/glossary/speed-to-lead"><strong>Speed to lead</strong></a>: the time between a form submission and the first contact.</li>
<li><a href="/glossary/show-rate"><strong>Show rate</strong></a>: the share of booked calls that actually happen.</li>
<li><a href="/glossary/crm-pipeline"><strong>CRM pipeline</strong></a>: the stages a lead moves through from new to won.</li>
<li><a href="/glossary/ai-voice-agent"><strong>AI voice agent</strong></a>: software that calls, qualifies and books leads by phone.</li>
<li><a href="/glossary/gohighlevel-snapshot"><strong>GoHighLevel snapshot</strong></a>: a saved copy of a full account setup that loads into a new sub-account.</li>
</ul>
<p>See how they connect in <a href="/speed-to-lead">speed-to-lead automation</a>, <a href="/ai-voice-agents">AI voice agents</a> and <a href="/crm-automation">CRM automation</a>.</p>`,
      },
      {
        h2: "How to use this glossary",
        html: `<p>Read the definition at the top of each page for the short answer. Read the example if you want to know what good numbers look like, because every figure comes from a documented client result rather than an industry survey. Read the common mistakes section before you build, since most of them cost money only after launch. When a term has a calculation, such as show rate or cost per lead, the formula is written out so you can check your own dashboard. For a full set of metrics to track, use the <a href="/templates/funnel-kpi-dashboard">funnel KPI dashboard template</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "$847K", label: "Collected from a $27 front-end funnel", href: "/scalelowticket" },
        { value: "$4.38", label: "Cost per lead across 6,275 MVA leads", href: "/case-studies/mva-6275-leads-at-4-38-cpl" },
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
      ],
      more: { label: "See 275+ results", href: "/case-studies" },
    },
    faqs: [
      { q: "Who is this sales funnel glossary for?", a: "It is written for business owners, marketers and agency operators who buy or build funnels and want to understand what their agency, software or dashboard is talking about. Each definition avoids jargon where possible and uses real numbers from our client results so the terms connect to outcomes, not theory." },
      { q: "Where do the example numbers come from?", a: "Every result quoted in the glossary comes from a documented Funnels That Print case study, such as the $1.52M consulting funnel, the $847K low-ticket funnel or our speed-to-lead data across 60+ deployments. Where a page shows a calculation with round numbers, it is labeled as an illustration rather than a client result." },
      { q: "Which glossary terms matter most for lead generation?", a: "For lead generation, start with cost per lead, speed to lead and show rate. Cost per lead tells you what the ads cost, speed to lead decides how many leads you actually reach, and show rate decides how many booked calls turn into sales conversations. The Conversions API then feeds those outcomes back to Meta." },
      { q: "Which terms matter most for selling products online?", a: "For product and course funnels, focus on tripwire offer, order bump, upsell and downsell, and self-liquidating offer. Together they describe how a low-priced front end raises average order value enough to pay for its own ads, which is how our $847K funnel recovered 112% of ad spend on day zero." },
      { q: "Do I need to know all these terms to work with you?", a: "No. We explain everything on a strategy call and in the build plan. The glossary is here so you can check our reasoning, compare agencies on equal terms and read your own dashboard with confidence. Knowing what a good show rate or cost per lead looks like helps you spot problems early." },
    ],
    related: ["/sales-funnel-agency", "/services", "/case-studies", "/tools", "/templates", "/blog/sales-funnel-stages"],
    parent: HOME,
    updated: U,
  },
  {
    path: "/glossary/sales-funnel",
    kind: "glossary",
    term: "Sales funnel",
    keyword: "what is a sales funnel",
    title: "What Is a Sales Funnel? Definition, Stages and Examples",
    description: "What is a sales funnel? A plain definition, the stages from ad to sale, real examples from $1.52M and $847K funnels, and the mistakes that leak revenue.",
    eyebrow: "Glossary",
    h1: "What is a sales funnel? Definition and examples",
    intro:
      "<strong>What is a sales funnel</strong>? It is the planned path a stranger follows from first seeing your ad to becoming a paying customer, with each step designed to move the right people forward and filter out the rest. Below is the definition, how the stages work, real examples from our builds and the mistakes we fix most often.",
    quick: {
      q: "What is a sales funnel?",
      a: "A sales funnel is the sequence of steps that turns attention into revenue: an ad or post brings a visitor, a page captures them as a lead, follow-up qualifies and books them, and a sales call or checkout converts them. It is called a funnel because fewer people remain at each step.",
    },
    sections: [
      {
        h2: "How a sales funnel works",
        html: `<ol>
<li><strong>Traffic.</strong> Paid ads, organic content or referrals send visitors to a page.</li>
<li><strong>Capture.</strong> A landing page, quiz or <a href="/glossary/lead-magnet">lead magnet</a> exchanges value for contact details.</li>
<li><strong>Nurture and qualify.</strong> Texts, emails, calls or a <a href="/glossary/vsl">VSL</a> build trust and check fit.</li>
<li><strong>Convert.</strong> The lead books a call or buys at checkout, often starting with a <a href="/glossary/tripwire-offer">tripwire offer</a>.</li>
<li><strong>Expand.</strong> Upsells, renewals and referrals raise the value of each customer.</li>
</ol>
<p>Every step is tracked in a <a href="/glossary/crm-pipeline">CRM pipeline</a> so you can see where people drop off. For a deeper walkthrough, read <a href="/blog/sales-funnel-stages">sales funnel stages</a>.</p>`,
      },
      {
        h2: "Examples from our cases",
        html: `<p><strong>High-ticket call funnel.</strong> A consulting offer used an ad, a VSL page, an application and a booked call. Over 19 months it produced <a href="/milliondollarcasestudy">$1.52M in revenue</a>.</p>
<p><strong>Low-ticket product funnel.</strong> A $27 product with a $17 order bump and upsells collected <a href="/scalelowticket">$847K</a> and recovered 112% of ad spend on day zero.</p>
<p><strong>Local lead funnel.</strong> A roofing quiz funnel produced <a href="/case-studies/roofing-686-leads-at-5-31-cpl">686 leads at $5.31 each</a> in eight days, followed by instant calls and texts.</p>
<p>More side-by-side builds are in <a href="/blog/sales-funnel-examples">sales funnel examples</a>.</p>`,
      },
      {
        h2: "The core funnel math",
        html: `<p>Every funnel can be reduced to a chain of conversion rates:</p>
<p><strong>Revenue = visitors x opt-in rate x booking rate x show rate x close rate x average sale</strong></p>
<p>Improving any one step lifts the whole result, which is why a faster follow-up or a better <a href="/glossary/show-rate">show rate</a> often beats a new page design. Model your own numbers with the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a>.</p>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>Treating the page as the funnel.</strong> The form is the middle, not the end. Slow follow-up wastes most leads.</li>
<li><strong>No qualification.</strong> Sending every lead to the calendar fills it with people who cannot buy.</li>
<li><strong>Tracking only the lead.</strong> If Meta only sees form fills, it optimizes for form fillers. Send booked calls and sales back too.</li>
<li><strong>Copying a funnel type that does not fit.</strong> A webinar suits a complex offer; a quiz suits a local service. Match the format to the buyer.</li>
</ul>
<p>Our <a href="/sales-funnel-agency">sales funnel agency</a> builds the full system, from page to pipeline, in 5 to 10 business days.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "$847K", label: "Collected from a $27 front-end funnel", href: "/scalelowticket" },
        { value: "686", label: "Roofing leads at $5.31 in 8 days", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
        { value: "$680K", label: "Coaching revenue on $15,483 ad spend", href: "/case-studies/coaching-680k-revenue-on-15k-ad-spend" },
      ],
      more: { label: "See 275+ results", href: "/case-studies" },
    },
    faqs: [
      { q: "What are the stages of a sales funnel?", a: "Most funnels have five stages: traffic, capture, nurture and qualification, conversion, and expansion. Marketers sometimes call the first three awareness, interest and consideration. The labels matter less than measuring how many people move from each stage to the next, so you know which step to fix first." },
      { q: "Is a sales funnel the same as a landing page?", a: "No. A landing page is one step inside a funnel. The funnel also includes the ad that sends traffic, the follow-up texts and calls, the booking or checkout, and any upsells afterward. A strong landing page with weak follow-up still loses most of the leads it captures." },
      { q: "What type of sales funnel should I use?", a: "It depends on price and complexity. Local services usually do best with a short quiz or estimator. High-ticket coaching and consulting often use a VSL or webinar before the call. Products and courses use a low-ticket checkout with an order bump and upsells. Start from how your buyer decides." },
      { q: "How much does it cost to build a sales funnel?", a: "Our builds are one-time fees: $999 for design only, $1,499 for design, copy and full build, and $1,999 for the complete suite with CRM, automation, AI booking agent and tracking. Ad spend and software subscriptions are separate. Our guide to sales funnel cost compares other options." },
      { q: "How long until a sales funnel shows results?", a: "A built funnel goes live in 5 to 10 business days, and lead generation funnels usually show a clear cost per lead within the first week of ads. Sales results take longer for high-ticket offers because calls and decisions take time. Expect a few weeks of data before major changes." },
    ],
    related: ["/sales-funnel-agency", "/glossary/lead-magnet", "/glossary/tripwire-offer", "/glossary/crm-pipeline", "/blog/sales-funnel-examples", "/blog/how-much-does-a-sales-funnel-cost"],
    parent: G,
    updated: U,
  },
  {
    path: "/glossary/tripwire-offer",
    kind: "glossary",
    term: "Tripwire offer",
    keyword: "tripwire offer",
    title: "Tripwire Offer: Definition, Pricing and Examples",
    description: "A tripwire offer is a low-priced first purchase that turns leads into buyers. Definition, pricing, a real $27 example and the mistakes that kill margin.",
    eyebrow: "Glossary",
    h1: "Tripwire offer: definition, pricing and real examples",
    intro:
      "A <strong>tripwire offer</strong> is a small, low-priced product offered early in a funnel to turn a lead or visitor into a paying customer. The goal is not profit on the tripwire itself but the switch from prospect to buyer, because someone who has paid once is far more likely to pay again.",
    quick: {
      q: "What is a tripwire offer?",
      a: "A tripwire offer is an inexpensive first product, usually priced between $7 and $47, sold right after opt-in or on a front-end sales page. It is priced so the decision feels easy, and it exists to create a customer relationship that order bumps, upsells and higher-priced offers can build on.",
    },
    sections: [
      {
        h2: "How a tripwire offer works",
        html: `<ol>
<li>A visitor arrives from an ad, or opts in for a <a href="/glossary/lead-magnet">lead magnet</a>.</li>
<li>The next page offers a focused product that solves one narrow problem quickly, at an impulse price.</li>
<li>At checkout an <a href="/glossary/order-bump">order bump</a> adds a related item with one click.</li>
<li>After payment, one-click <a href="/glossary/upsell-and-downsell">upsells and downsells</a> offer the next logical step.</li>
<li>Buyers enter a customer pipeline for the core offer, a membership or a call.</li>
</ol>
<p>The tripwire is the first purchase, not the main one. Its job is to start the relationship and help fund the ads.</p>`,
      },
      {
        h2: "Example: the $27 tripwire behind $847K",
        html: `<p>In our <a href="/scalelowticket">low-ticket funnel case study</a> the front end was a <strong>$27 product with a $17 order bump</strong>. Average order value rose well above the sticker price because of the bump and upsells, and the funnel recovered <strong>112% of ad spend on day zero</strong>. Over its run it collected $847K.</p>
<p>Other tripwire funnels in our <a href="/case-studies/low-ticket-funnels">low-ticket results</a> include <a href="/case-studies/low-ticket-funnel-132-sales">132 sales on $1,214 of ad spend at 11.7x ROAS</a> and <a href="/case-studies/low-ticket-funnel-135k-revenue-on-36k-ad-spend">$135,143 from 892 sales</a>.</p>`,
      },
      {
        h2: "Tripwire offer vs other front-end offers",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Offer</th><th>Typical price</th><th>Main job</th></tr></thead>
<tbody>
<tr><td>Lead magnet</td><td>Free</td><td>Capture contact details</td></tr>
<tr><td>Tripwire offer</td><td>$7 to $47</td><td>Create a buyer</td></tr>
<tr><td><a href="/glossary/self-liquidating-offer">Self-liquidating offer</a></td><td>$7 to $97 plus bumps</td><td>Cover ad spend</td></tr>
<tr><td>Core offer</td><td>$197 and up</td><td>Main profit</td></tr>
</tbody></table></div>
<p>A tripwire becomes a self-liquidating offer once the front end, including bumps and upsells, pays for its own traffic.</p>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>Selling a smaller version of the core offer.</strong> A tripwire should solve one specific problem completely, not tease the main product.</li>
<li><strong>No order bump or upsell.</strong> At $27 alone, most paid traffic will not break even. The back end of the checkout is where the margin is.</li>
<li><strong>Underpriced into irrelevance.</strong> A $1 offer attracts buyers who will never pay $500. Price low, but high enough to qualify.</li>
<li><strong>No follow-up after purchase.</strong> New buyers need onboarding emails and a next step, or the relationship stops at $27.</li>
</ul>
<p>Our <a href="/sales-funnel-agency">sales funnel agency</a> plans the full offer stack before building the checkout. The <a href="/blog/low-ticket-funnel-guide">low-ticket funnel guide</a> covers pricing in depth.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$847K", label: "Collected from a $27 front-end funnel", href: "/scalelowticket" },
        { value: "11.7x", label: "ROAS on 132 low-ticket sales", href: "/case-studies/low-ticket-funnel-132-sales" },
        { value: "$135K", label: "Revenue from 892 sales on $36,198", href: "/case-studies/low-ticket-funnel-135k-revenue-on-36k-ad-spend" },
        { value: "$17,200", label: "293 low-ticket sales in one day", href: "/case-studies/low-ticket-funnel-17200-in-one-day" },
      ],
      more: { label: "See low-ticket funnel results", href: "/case-studies/low-ticket-funnels" },
    },
    faqs: [
      { q: "How much should a tripwire offer cost?", a: "Most tripwire offers sit between $7 and $47. The price should feel like an easy yes for your audience while still filtering out people who never buy. For courses and digital products, $17 to $37 is common. Test two prices with the same traffic before deciding, since conversion rarely scales linearly." },
      { q: "Is a tripwire offer the same as a lead magnet?", a: "No. A lead magnet is free and exists to capture contact details. A tripwire offer costs money and exists to turn a lead into a customer. Many funnels use both: the lead magnet captures the email, and the thank-you page presents the tripwire as a fast next step." },
      { q: "Can a tripwire offer be profitable on its own?", a: "Rarely on paid traffic. A $27 product usually costs more than $27 to sell through ads. Profit comes from the order bump, upsells and later purchases. That is why we model average order value across the whole checkout, not the tripwire price alone, before launching ads." },
      { q: "What makes a good tripwire product?", a: "A good tripwire solves one narrow, urgent problem fast: a template, a short course, a swipe file, a starter kit or a single session. It should deliver a quick win so the buyer trusts you with the next purchase. Avoid anything that takes weeks before the buyer sees a result." },
      { q: "Do tripwire offers work for service businesses?", a: "Sometimes. A paid audit, a low-cost first session or a discounted inspection works as a service tripwire. It works best when the paid first step leads naturally to the full service. For many local services, a free estimate funnel with fast follow-up still converts better." },
    ],
    related: ["/scalelowticket", "/sales-funnel-agency", "/glossary/self-liquidating-offer", "/glossary/order-bump", "/glossary/upsell-and-downsell", "/blog/low-ticket-funnel-guide"],
    parent: G,
    updated: U,
  },
  {
    path: "/glossary/self-liquidating-offer",
    kind: "glossary",
    term: "Self-liquidating offer",
    keyword: "self-liquidating offer",
    title: "Self-Liquidating Offer (SLO): Definition and Example",
    description: "A self-liquidating offer is a front-end funnel whose sales cover its ad spend. Definition, the break-even formula and a real 112% day-zero example.",
    eyebrow: "Glossary",
    h1: "Self-liquidating offer: definition, formula and example",
    intro:
      "A <strong>self-liquidating offer</strong>, often shortened to SLO, is a low-priced front-end offer designed so the revenue it brings in pays back the ad spend used to acquire the buyer. Customers are acquired at break-even or better, and every later purchase is profit.",
    quick: {
      q: "What is a self-liquidating offer?",
      a: "A self-liquidating offer is a front-end funnel, usually a low-priced product plus an order bump and upsells, where revenue from the checkout covers the cost of the ads. Once the front end liquidates its own ad spend, you can scale traffic and build a buyer list at little or no net cost.",
    },
    sections: [
      {
        h2: "How a self-liquidating offer works",
        html: `<p>An SLO stacks several offers inside one checkout flow so the average order value is higher than the cost to acquire a buyer:</p>
<ol>
<li>A low-priced front-end product, often a <a href="/glossary/tripwire-offer">tripwire offer</a>.</li>
<li>An <a href="/glossary/order-bump">order bump</a> on the checkout page.</li>
<li>One or two <a href="/glossary/upsell-and-downsell">upsells and downsells</a> after payment.</li>
<li>A back end, such as a membership, program or call, that produces the profit.</li>
</ol>
<p>The front end does not need to profit. It needs to break even so acquisition is effectively free.</p>`,
      },
      {
        h2: "The break-even formula",
        html: `<p><strong>Liquidation rate = front-end revenue / ad spend x 100</strong></p>
<p>Front-end revenue includes the product, bump and upsells, usually measured on the day of purchase. A rate of 100% means the offer fully self-liquidates. Equivalently, the offer liquidates when <strong>average order value is at least cost per acquisition</strong>.</p>
<p><em>Illustration:</em> if a buyer costs $40 in ads and the average order is $44, the liquidation rate is 110%. Check your own figures with the <a href="/tools/roas-calculator">ROAS calculator</a>.</p>`,
      },
      {
        h2: "Example: 112% recovered on day zero",
        html: `<p>Our <a href="/scalelowticket">$847K low-ticket funnel</a> sold a <strong>$27 product with a $17 order bump</strong>, followed by upsells. Front-end revenue covered <strong>112% of ad spend on day zero</strong>, so every new buyer was acquired at a profit before any back-end sale.</p>
<p>The full breakdown, including offer order and pricing, is in <a href="/blog/low-ticket-self-liquidating-offer-funnel-847k-breakdown">the self-liquidating offer funnel breakdown</a>. Other SLO-style results include <a href="/case-studies/low-ticket-funnel-1061-profit-at-28-23-roas">$1,061 profit at 28.23x ROAS</a>.</p>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>Measuring the product price instead of average order value.</strong> A $27 product rarely liquidates; the checkout stack does.</li>
<li><strong>Ignoring refunds and fees.</strong> Payment processing and refunds can turn 102% into a loss.</li>
<li><strong>No back end.</strong> Breaking even is only useful if buyers can move on to something profitable.</li>
<li><strong>Scaling before the numbers hold.</strong> Liquidation rates usually drop as budgets rise, so scale in steps.</li>
</ul>
<p>We plan the offer stack and build the checkout through our <a href="/sales-funnel-agency">sales funnel agency</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "112%", label: "Ad spend recovered on day zero", href: "/scalelowticket" },
        { value: "28.23x", label: "ROAS with $1,061 profit", href: "/case-studies/low-ticket-funnel-1061-profit-at-28-23-roas" },
        { value: "$58,108", label: "Revenue in one day at 4.52x", href: "/case-studies/low-ticket-funnel-58108-in-one-day-at-4-52x" },
        { value: "$69,652", label: "Revenue in 8 days at 3.65x", href: "/case-studies/low-ticket-funnel-69652-in-8-days-at-3-65x" },
      ],
      more: { label: "See low-ticket funnel results", href: "/case-studies/low-ticket-funnels" },
    },
    faqs: [
      { q: "What is a good liquidation rate?", a: "Anything at or above 100% on the day of purchase means the front end pays for itself. Many healthy funnels run between 70% and 100% and recover the rest from back-end sales within 30 days. Our $847K funnel reached 112% on day zero, which allowed aggressive scaling." },
      { q: "Is a self-liquidating offer the same as a tripwire?", a: "Not exactly. A tripwire is a single low-priced product meant to create a buyer. A self-liquidating offer is the whole front-end system, including the tripwire, order bump and upsells, judged by whether its revenue covers ad spend. A tripwire can exist without liquidating." },
      { q: "Which products work as a self-liquidating offer?", a: "Digital products with low delivery cost work best: short courses, templates, challenges, guides and starter kits. Physical products can work when margins are high and shipping is built into the price. The front-end product must lead logically into the bump, upsells and back end." },
      { q: "How do I raise average order value in an SLO?", a: "Add an order bump that completes the main product, then an upsell that speeds up the result and a downsell for people who decline. Test the bump offer first, because it is seen by every buyer and usually has the largest effect on average order value." },
      { q: "When should I scale a self-liquidating offer?", a: "Scale once liquidation has held at or near 100% for at least a week on stable spend and refunds are known. Raise budgets in steps of 20 to 30% and watch day-zero revenue per buyer, since costs usually rise as the audience widens and liquidation can slip." },
    ],
    related: ["/scalelowticket", "/sales-funnel-agency", "/glossary/tripwire-offer", "/glossary/order-bump", "/glossary/upsell-and-downsell", "/blog/low-ticket-self-liquidating-offer-funnel-847k-breakdown"],
    parent: G,
    updated: U,
  },
  {
    path: "/glossary/order-bump",
    kind: "glossary",
    term: "Order bump",
    keyword: "order bump",
    title: "Order Bump: Definition, Examples and Best Practices",
    description: "An order bump is a one-click add-on on the checkout page. Definition, how to price it, a real $17 bump on a $27 product, and the mistakes to avoid.",
    eyebrow: "Glossary",
    h1: "Order bump: definition, pricing and examples",
    intro:
      "An <strong>order bump</strong> is a small, related offer placed on the checkout page itself, usually as a checkbox above the payment button. The buyer adds it with one click before paying, so it raises average order value without adding a step to the funnel.",
    quick: {
      q: "What is an order bump?",
      a: "An order bump is a one-click add-on shown on the checkout page before payment, such as a template pack, an extra module or a bonus item. It is priced below the main product, complements it directly and is accepted by ticking a box, which raises average order value with no extra page.",
    },
    sections: [
      {
        h2: "How an order bump works",
        html: `<ol>
<li>The buyer reaches checkout for the main product, often a <a href="/glossary/tripwire-offer">tripwire offer</a>.</li>
<li>A highlighted box near the payment button describes one add-on in two or three sentences.</li>
<li>Ticking the box adds it to the same payment.</li>
<li>After payment, the buyer sees <a href="/glossary/upsell-and-downsell">upsells and downsells</a> on separate pages.</li>
</ol>
<p>Because the bump sits on a page every buyer sees, even a modest take rate has a large effect on whether the front end becomes a <a href="/glossary/self-liquidating-offer">self-liquidating offer</a>.</p>`,
      },
      {
        h2: "Example: a $17 bump on a $27 product",
        html: `<p>In our <a href="/scalelowticket">$847K low-ticket funnel</a> the main product cost $27 and the order bump cost $17. The bump was something that made the main product faster to use, not a separate topic. Together with upsells, the checkout recovered 112% of ad spend on day zero.</p>
<p><strong>Order value formula:</strong> average order value = main price + (bump price x bump take rate) + upsell revenue per buyer.</p>
<p><em>Illustration:</em> with a $27 product, a $17 bump and a 30% take rate, the bump adds $5.10 to every order, raising the front end to $32.10 before upsells.</p>`,
      },
      {
        h2: "Order bump vs upsell",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Order bump</th><th>Upsell</th></tr></thead>
<tbody>
<tr><td>Where</td><td>Checkout page</td><td>Page after payment</td></tr>
<tr><td>Price</td><td>Lower than main product</td><td>Often higher</td></tr>
<tr><td>Action</td><td>Tick a box</td><td>Click accept or decline</td></tr>
<tr><td>Purpose</td><td>Complete the purchase</td><td>Speed up or expand the result</td></tr>
</tbody></table></div>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>An unrelated bump.</strong> The add-on should finish or speed up the main product.</li>
<li><strong>Too many bumps.</strong> One clear bump outperforms three competing checkboxes.</li>
<li><strong>Pricing it above the main product.</strong> High-priced add-ons belong in the upsell.</li>
<li><strong>Weak copy.</strong> The bump box needs its own headline and a single specific benefit.</li>
</ul>
<p>We write and build checkouts, bumps and upsells as part of our <a href="/sales-funnel-agency">sales funnel agency</a> service. See more checkout results in <a href="/case-studies/low-ticket-funnels">low-ticket funnels</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$17", label: "Order bump on a $27 front end", href: "/scalelowticket" },
        { value: "$79,070", label: "Revenue from 837 sales", href: "/case-studies/low-ticket-funnel-79k-in-revenue" },
        { value: "11.7x", label: "ROAS on 132 low-ticket sales", href: "/case-studies/low-ticket-funnel-132-sales" },
      ],
      more: { label: "See low-ticket funnel results", href: "/case-studies/low-ticket-funnels" },
    },
    faqs: [
      { q: "What is a good order bump take rate?", a: "Take rates vary with fit and price, but a well-matched bump priced at about half the main product often converts a meaningful share of buyers. Track it as bumps sold divided by orders. If fewer than one in ten buyers accept, rewrite the copy or change the offer before changing the price." },
      { q: "How much should an order bump cost?", a: "Price it below the main product, commonly 30 to 70% of the front-end price. Our $847K funnel paired a $27 product with a $17 bump. A bump that costs more than the main product feels like a second purchase decision and usually belongs on an upsell page instead." },
      { q: "Which platforms support order bumps?", a: "ClickFunnels, GoHighLevel, Systeme.io, Kajabi and most Shopify checkout apps support them, though the setup differs. We often use ClickFunnels for product checkouts with bumps and upsells, and GoHighLevel when the buyer also needs CRM, email and text follow-up in the same account." },
      { q: "Do order bumps hurt checkout conversion?", a: "A single, relevant bump rarely lowers checkout conversion in our experience, because it does not add a page or a decision before the payment button. Several bumps, a confusing layout or a bump that looks pre-ticked can hurt trust and conversion, so keep it simple and opt-in." },
      { q: "What makes a good order bump offer?", a: "The best bumps complete the main product: templates for a course, a done-for-you version of a worksheet, a fast-start video or an extra use case. Buyers should read it and think it makes their purchase work better. Avoid unrelated bonuses or generic memberships." },
    ],
    related: ["/scalelowticket", "/sales-funnel-agency", "/glossary/tripwire-offer", "/glossary/upsell-and-downsell", "/glossary/self-liquidating-offer"],
    parent: G,
    updated: U,
  },
  {
    path: "/glossary/upsell-and-downsell",
    kind: "glossary",
    term: "Upsell and downsell",
    keyword: "upsell vs downsell",
    title: "Upsell vs Downsell: Definitions, Examples and Order",
    description: "Upsell vs downsell explained: what each one is, where they sit in a funnel, real low-ticket examples and the mistakes that cost you average order value.",
    eyebrow: "Glossary",
    h1: "Upsell vs downsell: definitions and examples",
    intro:
      "<strong>Upsell vs downsell</strong> is a question about sequence. An upsell offers the buyer something bigger or faster right after a purchase. A downsell appears only when the buyer declines, offering a smaller or cheaper version so the sale is not lost. Together they raise the value of every customer.",
    quick: {
      q: "What is the difference between an upsell and a downsell?",
      a: "An upsell is a higher-value offer shown after the first purchase, such as an advanced course or done-for-you service. A downsell is shown only if the buyer declines the upsell, offering a lighter version, a payment plan or a lower price. Both are accepted with one click using stored payment details.",
    },
    sections: [
      {
        h2: "How upsells and downsells work",
        html: `<ol>
<li>The buyer purchases the front end, often a <a href="/glossary/tripwire-offer">tripwire offer</a> with an <a href="/glossary/order-bump">order bump</a>.</li>
<li>Before the thank-you page, an upsell page presents the next logical step.</li>
<li>If they accept, it is charged with one click. If they decline, a downsell page offers a lighter option.</li>
<li>The funnel then moves to a second upsell or the thank-you page.</li>
</ol>
<p>Upsell revenue is a big part of why a <a href="/glossary/self-liquidating-offer">self-liquidating offer</a> can cover its ad spend on day one.</p>`,
      },
      {
        h2: "Upsell vs downsell at a glance",
        html: `<div class="table-wrap"><table>
<thead><tr><th></th><th>Upsell</th><th>Downsell</th></tr></thead>
<tbody>
<tr><td>Shown when</td><td>After purchase</td><td>After declining an upsell</td></tr>
<tr><td>Price</td><td>Higher than front end</td><td>Lower than the upsell</td></tr>
<tr><td>Examples</td><td>Advanced course, coaching, annual plan</td><td>Lite version, payment plan, single module</td></tr>
<tr><td>Goal</td><td>Raise order value</td><td>Save the sale</td></tr>
</tbody></table></div>`,
      },
      {
        h2: "Example from our low-ticket funnels",
        html: `<p>The <a href="/scalelowticket">$847K funnel</a> used a $27 product and a $17 bump, then post-purchase upsells. The combined stack recovered 112% of ad spend on day zero. Membership-style upsells show up across our <a href="/case-studies/low-ticket-funnels">low-ticket results</a>, such as <a href="/case-studies/low-ticket-funnel-58k-revenue-on-23k-ad-spend">537 memberships and $57,577 in revenue</a>.</p>
<p><strong>Revenue per buyer formula:</strong> front-end price + bump revenue per buyer + (upsell price x upsell take rate) + (downsell price x downsell take rate among decliners x decline rate).</p>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>An upsell that repeats the front end.</strong> It should speed up or expand the result, not resell it.</li>
<li><strong>A downsell that is just a discount.</strong> A different format or payment plan often converts better than a lower price on the same product.</li>
<li><strong>Too many steps.</strong> More than two upsells usually frustrates buyers and raises refunds.</li>
<li><strong>Not tracking each page.</strong> Measure take rate per offer so you know which one to fix.</li>
</ul>
<p>We plan and build upsell paths in our <a href="/sales-funnel-agency">sales funnel agency</a> service.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "112%", label: "Ad spend recovered on day zero", href: "/scalelowticket" },
        { value: "537", label: "Memberships sold, $57,577 revenue", href: "/case-studies/low-ticket-funnel-58k-revenue-on-23k-ad-spend" },
        { value: "2,063", label: "Memberships, $65,600 revenue", href: "/case-studies/low-ticket-funnel-66k-in-revenue" },
      ],
      more: { label: "See low-ticket funnel results", href: "/case-studies/low-ticket-funnels" },
    },
    faqs: [
      { q: "Should every funnel have a downsell?", a: "Not always. A downsell earns its place when a meaningful share of buyers decline the upsell and a lighter version still delivers value. If the upsell already converts well or the product cannot be split, skip the downsell and send buyers straight to the thank-you page to keep the path short." },
      { q: "How much should an upsell cost compared with the front end?", a: "Upsells are commonly two to five times the front-end price. With a $27 front end, upsells between $47 and $197 are typical. The right price depends on how much faster or bigger the result is, so test one price change at a time and watch refunds as well as take rate." },
      { q: "Is an order bump an upsell?", a: "It is related but different. An order bump sits on the checkout page and is added by ticking a box before paying. An upsell appears on its own page after payment. Many funnels use both: a bump to complete the purchase and an upsell to expand it." },
      { q: "Do upsells work for service businesses?", a: "Yes, in a different form. After a booking or deposit, a service business can offer a premium package, a maintenance plan or an add-on service. The principle is the same: present the next logical step right after the customer has said yes once." },
      { q: "How many upsells should a funnel have?", a: "One or two upsells, each with an optional downsell, is enough for most low-ticket funnels. Beyond that, take rates fall and buyers feel trapped, which raises refunds and support requests. Add a new upsell only when the existing ones are tracked and performing." },
    ],
    related: ["/scalelowticket", "/sales-funnel-agency", "/glossary/order-bump", "/glossary/tripwire-offer", "/glossary/self-liquidating-offer", "/blog/low-ticket-funnel-guide"],
    parent: G,
    updated: U,
  },
  {
    path: "/glossary/vsl",
    kind: "glossary",
    term: "VSL (video sales letter)",
    keyword: "what is a vsl",
    title: "What Is a VSL? Video Sales Letter Definition and Examples",
    description: "What is a VSL? A video sales letter defined: how it works, the script structure, a real $1.52M VSL funnel example and the mistakes that lower bookings.",
    eyebrow: "Glossary",
    h1: "What is a VSL? Video sales letter definition and examples",
    intro:
      "<strong>What is a VSL</strong>? VSL stands for video sales letter: a scripted video that does the job of a written sales page, walking the viewer through a problem, a solution and an offer, then asking for one action such as booking a call or buying. It is the core of most high-ticket coaching and consulting funnels.",
    quick: {
      q: "What is a VSL?",
      a: "A VSL, or video sales letter, is a persuasive video that presents an offer in a fixed sequence: hook, problem, story, mechanism, proof, offer and call to action. It usually sits on a landing page with a booking or checkout button below it, and it pre-sells prospects before they speak to anyone.",
    },
    sections: [
      {
        h2: "How a VSL works in a funnel",
        html: `<ol>
<li>An ad sends a visitor to a page with the VSL at the top.</li>
<li>The video explains the problem, why common fixes fail, and the mechanism behind your offer.</li>
<li>Proof, such as client results, makes the claim believable.</li>
<li>The call to action asks the viewer to book a call or buy, with an application or calendar below.</li>
<li>Follow-up texts, calls and reminders protect the <a href="/glossary/show-rate">show rate</a> of the calls it books.</li>
</ol>
<p>Because viewers arrive pre-sold, sales calls are shorter and closing rates are usually higher than with cold calls.</p>`,
      },
      {
        h2: "A typical VSL script structure",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Part</th><th>Job</th></tr></thead>
<tbody>
<tr><td>Hook</td><td>Name the audience and the result in the first 10 seconds</td></tr>
<tr><td>Problem</td><td>Describe the pain the viewer recognizes</td></tr>
<tr><td>Story and mechanism</td><td>Explain why your method works when others fail</td></tr>
<tr><td>Proof</td><td>Show specific client results</td></tr>
<tr><td>Offer</td><td>What they get, who it is for, who it is not for</td></tr>
<tr><td>Call to action</td><td>One next step, repeated clearly</td></tr>
</tbody></table></div>
<p>A fill-in version is in our <a href="/templates/vsl-script-template">VSL script template</a>.</p>`,
      },
      {
        h2: "Example: the $1.52M consulting VSL funnel",
        html: `<p>Our <a href="/milliondollarcasestudy">$1.52M consulting case study</a> ran on an ad, a VSL page, a short application and a booked call, backed by fast follow-up and reminders. Over 19 months the funnel produced $1.52M in revenue. Other VSL-led results include <a href="/case-studies/coaching-680k-revenue-on-15k-ad-spend">$680,125 from 34 sales on $15,483 of ad spend</a> and <a href="/case-studies/coaching-116k-revenue-on-2214-ad-spend">174 appointments and $115,500 on $2,214</a>.</p>
<p>Whether a VSL or a quiz fits better is covered in <a href="/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026">high-ticket VSL vs quiz funnel</a>.</p>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>A slow opening.</strong> If the first 30 seconds are about you, most viewers leave.</li>
<li><strong>No qualification.</strong> A VSL should say who the offer is not for, which raises the quality of booked calls.</li>
<li><strong>Too long for the price.</strong> A 45-minute video for a $500 offer loses people; match length to price and complexity.</li>
<li><strong>No follow-up for partial viewers.</strong> Retarget and text people who watched but did not book.</li>
</ul>
<p>We script, design and build VSL funnels in our <a href="/vsl-funnels">VSL funnel</a> service.</p>`,
      },
      {
        h2: "Related terms",
        html: `<p>A VSL is one step in a <a href="/glossary/sales-funnel">sales funnel</a>. Many VSL funnels start with a <a href="/glossary/lead-magnet">lead magnet</a> or quiz, and their results depend heavily on the <a href="/glossary/show-rate">show rate</a> of the calls they book.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "$680K", label: "Coaching revenue from 34 sales", href: "/case-studies/coaching-680k-revenue-on-15k-ad-spend" },
        { value: "52x", label: "ROAS, 174 appointments on $2,214", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
      ],
      more: { label: "See coaching and consulting results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "How long should a VSL be?", a: "Length should match price and complexity. For a free consultation or low-ticket product, 3 to 10 minutes is often enough. High-ticket coaching and consulting VSLs commonly run 15 to 30 minutes because buyers need more proof. Test a shorter cut before assuming longer is better, and watch drop-off in your video analytics." },
      { q: "Do I need to appear on camera in a VSL?", a: "Not necessarily. Face-to-camera VSLs build trust for personal brands and consultants. Slide-style or screen-share VSLs work well for software, data-heavy offers and founders who prefer not to film. What matters most is the script: a strong hook, a clear mechanism and specific proof." },
      { q: "Is a VSL better than a webinar?", a: "They solve different problems. A VSL is short, always on and easy to test. A webinar is longer, often live, and suits complex offers that need teaching and Q&A. Many funnels use a VSL for cold traffic and a webinar for warmer audiences or launches." },
      { q: "What should come after a VSL?", a: "For high-ticket offers, an application or calendar booking with a few qualifying questions. For lower-priced offers, a checkout button. Either way, follow-up texts, emails and reminder calls matter as much as the video, because many viewers need a second touch before they act." },
      { q: "How much does a VSL funnel cost to build?", a: "Our funnel builds are one-time fees from $999 for design only to $1,999 for the full suite with copy, CRM, automation, AI booking agent and tracking. VSL scripting is included in the copy packages. Filming and editing depend on whether you record yourself or use a studio." },
    ],
    related: ["/vsl-funnels", "/milliondollarcasestudy", "/glossary/sales-funnel", "/glossary/lead-magnet", "/glossary/show-rate", "/templates/vsl-script-template"],
    parent: G,
    updated: U,
  },
  {
    path: "/glossary/lead-magnet",
    kind: "glossary",
    term: "Lead magnet",
    keyword: "lead magnet",
    title: "Lead Magnet: Definition, Types and Real Examples",
    description: "A lead magnet is a free resource traded for contact details. Definition, the types that convert best, real cost-per-lead examples and common mistakes.",
    eyebrow: "Glossary",
    h1: "Lead magnet: definition, types and examples",
    intro:
      "A <strong>lead magnet</strong> is something useful you give away for free in exchange for a visitor's contact details: a guide, checklist, quiz result, price estimate or training. It is the capture step of a funnel, and its quality decides both how many leads you get and how likely they are to buy.",
    quick: {
      q: "What is a lead magnet?",
      a: "A lead magnet is a free offer, such as a guide, template, quiz result, estimate or video training, that a visitor receives after entering their name, email or phone number. It turns anonymous traffic into leads you can follow up with, and the best ones solve one specific problem tied to your paid offer.",
    },
    sections: [
      {
        h2: "How a lead magnet works",
        html: `<ol>
<li>An ad or post promises a specific, useful result.</li>
<li>The landing page or quiz asks for contact details in exchange.</li>
<li>The lead receives the resource instantly by email or on screen.</li>
<li>Follow-up begins within seconds, ideally a call or text for service businesses, because <a href="/glossary/speed-to-lead">speed to lead</a> decides contact rates.</li>
<li>The lead moves through a <a href="/glossary/crm-pipeline">CRM pipeline</a> toward a call or purchase.</li>
</ol>`,
      },
      {
        h2: "Types of lead magnet that convert",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Type</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Quiz or assessment</td><td>Coaching, health, finance, insurance</td></tr>
<tr><td>Instant estimate or calculator</td><td>Roofing, solar, HVAC, home services</td></tr>
<tr><td>Free training or webinar</td><td>Courses, coaching, B2B services</td></tr>
<tr><td>Template, checklist or swipe file</td><td>Marketing, agencies, software</td></tr>
<tr><td>Case study or report</td><td>High-ticket B2B</td></tr>
</tbody></table></div>
<p>Interactive magnets such as quizzes usually outperform PDFs because they ask easy questions first. See our <a href="/quiz-funnels">quiz funnels</a> and <a href="/webinar-funnels">webinar funnels</a>.</p>`,
      },
      {
        h2: "Examples from our cases",
        html: `<p>A coaching lead magnet produced <a href="/case-studies/coaching-398-leads-at-5-50-cpl">398 leads at $5.50 each</a> on $2,191 of ad spend. A free summit used as a lead magnet drew <a href="/case-studies/coaching-15958-summit-registrations-at-7-48">15,958+ registrations at $7.48</a>. In home services, an instant-estimate funnel delivered <a href="/case-studies/roofing-537-leads-at-4-27-cpl">537 roofing leads at $4.27</a>.</p>
<p>Lower <a href="/glossary/cost-per-lead">cost per lead</a> is only half the picture: the magnet should attract people who want your paid offer.</p>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>Too broad.</strong> "The ultimate guide to marketing" attracts everyone and converts no one.</li>
<li><strong>Disconnected from the offer.</strong> The magnet should lead naturally to what you sell, often a <a href="/glossary/tripwire-offer">tripwire offer</a> or a call.</li>
<li><strong>Email-only follow-up for services.</strong> Local and high-ticket leads respond far better to a call or text in the first minute.</li>
<li><strong>Asking for too much up front.</strong> Put the contact fields last, after easy questions.</li>
</ul>
<p>Our <a href="/sales-funnel-agency">sales funnel agency</a> builds lead magnets, landing pages and the follow-up behind them.</p>`,
      },
      {
        h2: "Related terms",
        html: `<p>A lead magnet is the capture stage of a <a href="/glossary/sales-funnel">sales funnel</a>. Its performance is measured by <a href="/glossary/cost-per-lead">cost per lead</a>, and it often leads straight into a <a href="/glossary/tripwire-offer">tripwire offer</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$5.50", label: "Cost per lead on 398 coaching leads", href: "/case-studies/coaching-398-leads-at-5-50-cpl" },
        { value: "15,958+", label: "Summit registrations at $7.48", href: "/case-studies/coaching-15958-summit-registrations-at-7-48" },
        { value: "$4.27", label: "Cost per lead on 537 roofing leads", href: "/case-studies/roofing-537-leads-at-4-27-cpl" },
      ],
      more: { label: "See 275+ results", href: "/case-studies" },
    },
    faqs: [
      { q: "What is the best type of lead magnet?", a: "The best type is the one that solves a specific problem your buyer has right before they would hire or buy from you. For local services, that is usually an instant estimate. For coaching, a short quiz or assessment. For B2B, a template or a concise case study tied to the result you sell." },
      { q: "Should a lead magnet collect phone numbers?", a: "For service businesses and high-ticket offers, yes. A phone number lets you call or text within a minute, which lifts contact and booking rates sharply. For low-ticket products, email is often enough. If you collect phone numbers, include clear consent to be called and texted." },
      { q: "How long should a lead magnet be?", a: "Short enough to consume in under 15 minutes. A one-page checklist, a five-question quiz or a ten-minute video tends to beat a 60-page ebook, because the lead gets a quick win and remembers who gave it to them. Length signals effort, but usefulness drives conversion." },
      { q: "How do I know if my lead magnet is working?", a: "Track opt-in rate on the landing page, cost per lead from ads, and, most importantly, how many leads book a call or buy within 30 days. A cheap lead magnet that never converts to sales is worse than a pricier one that brings buyers." },
      { q: "Is a quiz a lead magnet?", a: "Yes. A quiz is an interactive lead magnet: the visitor answers questions and receives a personalized result after entering contact details. Quizzes often convert better than downloads because the questions feel easy and the result feels tailored, and the answers help qualify the lead for sales." },
    ],
    related: ["/sales-funnel-agency", "/quiz-funnels", "/glossary/sales-funnel", "/glossary/tripwire-offer", "/glossary/cost-per-lead", "/blog/how-to-reduce-cost-per-lead"],
    parent: G,
    updated: U,
  },
  {
    path: "/glossary/speed-to-lead",
    kind: "glossary",
    term: "Speed to lead",
    keyword: "what is speed to lead",
    title: "What Is Speed to Lead? Definition, Benchmarks, Examples",
    description: "What is speed to lead? The time from form fill to first contact. Definition, how to measure it, our 38-second median across 60+ deployments, and mistakes.",
    eyebrow: "Glossary",
    h1: "What is speed to lead? Definition and benchmarks",
    intro:
      "<strong>What is speed to lead</strong>? It is the time between a lead submitting a form, calling or messaging, and your business making first contact. In paid lead generation it is one of the strongest predictors of whether a lead ever answers, books and buys.",
    quick: {
      q: "What is speed to lead?",
      a: "Speed to lead is the elapsed time from the moment a lead converts to the moment a real person or AI agent first contacts them by phone or text. Faster is better: across our 60+ deployments, contacting leads inside a minute lifted lead-to-booking rates 2.4x compared with the same ads before automation.",
    },
    sections: [
      {
        h2: "How speed to lead works",
        html: `<ol>
<li>A form submission triggers an automation in the CRM the moment it arrives.</li>
<li>An SMS goes out instantly and an <a href="/glossary/ai-voice-agent">AI voice agent</a> or round-robin call to a salesperson starts within seconds.</li>
<li>If there is no answer, the workflow retries by call and text at set intervals.</li>
<li>The outcome is logged and the lead moves to the right stage in the <a href="/glossary/crm-pipeline">CRM pipeline</a>.</li>
</ol>
<p>The automation runs nights and weekends, which is where many human-only teams lose leads.</p>`,
      },
      {
        h2: "How to measure it",
        html: `<p><strong>Speed to lead = time of first contact attempt - time of form submission</strong></p>
<p>Report it as a median, not an average, because a few overnight leads distort averages. Track two companion metrics: the share of leads contacted inside 60 seconds, and the contact rate, meaning leads who actually answer. Log all three in your <a href="/templates/funnel-kpi-dashboard">funnel KPI dashboard</a>.</p>`,
      },
      {
        h2: "Our numbers across 60+ deployments",
        html: `<div class="table-wrap"><table>
<thead><tr><th>Metric</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Median time to first contact</td><td>38 seconds</td></tr>
<tr><td>Leads reached inside the first minute</td><td>84%</td></tr>
<tr><td>Lead-to-booking rate vs before</td><td>2.4x</td></tr>
</tbody></table></div>
<p>The lift comes from the same ads and pages: only the follow-up changed. In personal injury, where firms compete for the same accident victims, fast contact helped one funnel book <a href="/case-studies/mva-387-appointments-booked">387 appointments in 24 days</a>. The setup is explained step by step in <a href="/blog/speed-to-lead-automation-gohighlevel-60-second-follow-up">60-second speed-to-lead in GoHighLevel</a>.</p>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>Email as first contact.</strong> For service leads, a call and text in the first minute beat an email by a wide margin.</li>
<li><strong>Business hours only.</strong> Leads from evening ads wait until morning and have often booked a competitor.</li>
<li><strong>One attempt.</strong> Many leads answer on the second or third try, so build a retry sequence.</li>
<li><strong>Measuring averages.</strong> Use the median and the share contacted inside 60 seconds.</li>
</ul>
<p>We install the whole system in our <a href="/speed-to-lead">speed-to-lead automation</a> service.</p>`,
      },
      {
        h2: "Related terms",
        html: `<p>Speed to lead is usually delivered by an <a href="/glossary/ai-voice-agent">AI voice agent</a> or a round-robin call workflow, it feeds the stages of a <a href="/glossary/crm-pipeline">CRM pipeline</a>, and it has a direct effect on <a href="/glossary/show-rate">show rate</a>, because leads booked while interested are more likely to attend.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "38s", label: "Median first contact across 60+ deployments", href: "/speed-to-lead" },
        { value: "2.4x", label: "Lead-to-booking lift on the same ads", href: "/speed-to-lead" },
        { value: "387", label: "MVA appointments booked in 24 days", href: "/case-studies/mva-387-appointments-booked" },
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
      ],
      more: { label: "See MVA and personal injury results", href: "/case-studies/mva-personal-injury-lead-generation" },
    },
    faqs: [
      { q: "What is a good speed to lead time?", a: "Under 60 seconds for paid leads. Our median across 60+ deployments is 38 seconds, with 84% of leads reached inside the first minute. Anything over five minutes is slow for inbound leads, and leads contacted hours later answer far less often, especially in competitive industries such as legal and home services." },
      { q: "Why does speed to lead matter so much?", a: "Because interest fades fast and competitors call too. A lead who filled in a form is thinking about the problem right now. Calling while they are still on their phone means they answer, remember you and book. A few hours later, many will not pick up an unknown number." },
      { q: "Can speed to lead be automated?", a: "Yes. A CRM workflow can text the lead instantly and start a call within seconds, either connecting a salesperson by round-robin or using an AI voice agent to qualify and book. Automation also covers nights and weekends, when human teams usually cannot respond." },
      { q: "Does speed to lead matter for low-ticket offers?", a: "Less so. For a $27 product, the purchase usually happens on the page and follow-up is by email. Speed to lead matters most where the lead must speak to someone before buying: local services, legal, mortgage, insurance, high-ticket coaching and B2B services." },
      { q: "What tools do I need for speed to lead?", a: "A CRM that triggers instantly on new leads, such as GoHighLevel, an SMS and calling provider, and either a sales team on round-robin or an AI voice agent. Tracking is needed too, so you can measure time to first contact, contact rate and booking rate." },
    ],
    related: ["/speed-to-lead", "/ai-voice-agents", "/glossary/ai-voice-agent", "/glossary/show-rate", "/glossary/crm-pipeline", "/blog/speed-to-lead-automation-gohighlevel-60-second-follow-up"],
    parent: G,
    updated: U,
  },
  {
    path: "/glossary/show-rate",
    kind: "glossary",
    term: "Show rate",
    keyword: "show rate",
    title: "Show Rate: Definition, Formula and Benchmarks",
    description: "Show rate is the share of booked calls that happen. The formula, what counts as good, how 3-channel reminders reach up to 88%, and mistakes to avoid.",
    eyebrow: "Glossary",
    h1: "Show rate: definition, formula and how to improve it",
    intro:
      "<strong>Show rate</strong> is the percentage of booked appointments where the prospect actually attends. It sits between booking and closing in every call-based funnel, so a low show rate quietly wastes ad spend, setter time and calendar slots, even when lead costs look healthy.",
    quick: {
      q: "What is show rate?",
      a: "Show rate is the share of scheduled appointments that take place, calculated as appointments attended divided by appointments booked, times 100. If 50 calls are booked and 35 happen, the show rate is 70%. With confirmation and reminders by call, text and email, our clients reach show rates of up to 88%.",
    },
    sections: [
      {
        h2: "The show rate formula",
        html: `<p><strong>Show rate = appointments attended / appointments booked x 100</strong></p>
<p>The opposite is the no-show rate: <strong>no-show rate = 100% - show rate</strong>. Count rescheduled calls separately from no-shows, and count each booking once even if it moves.</p>
<p><em>Illustration:</em> 120 booked calls with 84 attended gives a 70% show rate. Raising it to 85% adds 18 sales conversations from the same ad spend. Put your own numbers into the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a>.</p>`,
      },
      {
        h2: "How show rate works in a funnel",
        html: `<ol>
<li>A lead books, ideally while still interested, which is why <a href="/glossary/speed-to-lead">speed to lead</a> affects attendance.</li>
<li>A confirmation call or text arrives immediately, with the time, link and what to prepare.</li>
<li>Reminders go out at set times across call, SMS and email.</li>
<li>No-shows are contacted within minutes to rebook.</li>
<li>Every outcome is logged as a stage in the <a href="/glossary/crm-pipeline">CRM pipeline</a>.</li>
</ol>`,
      },
      {
        h2: "Example: up to 88% with 3-channel reminders",
        html: `<p>When we add confirmation and reminders across three channels, call, text and email, show rates reach up to 88%. Many clients use an <a href="/ai-appointment-setter">AI appointment setter</a> that books the call, confirms it and handles reschedules by voice and SMS. The full sequence is in our <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a>, and the reasoning in <a href="/blog/reduce-sales-call-no-show-rate-reminder-automation">how to reduce no-show rate</a>.</p>
<p>Call-heavy funnels such as <a href="/case-studies/coaching-116k-revenue-on-2214-ad-spend">174 coaching appointments that produced $115,500</a> depend on that attendance.</p>`,
      },
      {
        h2: "Common mistakes",
        html: `<ul>
<li><strong>Booking too far out.</strong> Calls booked a week away show far less than calls in the next 24 to 48 hours.</li>
<li><strong>Email-only reminders.</strong> Texts and calls get seen; emails often do not.</li>
<li><strong>No reason to attend.</strong> Tell the prospect what they will get from the call.</li>
<li><strong>No rebooking flow.</strong> A no-show contacted within minutes often rebooks.</li>
</ul>`,
      },
      {
        h2: "Related terms",
        html: `<p>Show rate depends on <a href="/glossary/speed-to-lead">speed to lead</a>, is often managed by an <a href="/glossary/ai-voice-agent">AI voice agent</a>, and is measured from stages in a <a href="/glossary/crm-pipeline">CRM pipeline</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "88%", label: "Show rate with 3-channel reminders", href: "/ai-appointment-setter" },
        { value: "174", label: "Coaching appointments on $2,214 spend", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "140", label: "Webinar appointments, $64,960 revenue", href: "/case-studies/webinar-65k-revenue-on-2184-ad-spend" },
        { value: "180", label: "Appointments on $2,824 spend", href: "/case-studies/agency-14k-revenue-on-2824-ad-spend" },
      ],
      more: { label: "See coaching and consulting results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "What is a good show rate for sales calls?", a: "It depends on the source and how far ahead calls are booked, but a show rate above 70% is healthy for paid traffic, and 80% or more is strong. With confirmation and reminders across call, text and email, our clients reach up to 88%. Below 60% usually points to a follow-up problem." },
      { q: "How do I calculate show rate?", a: "Divide appointments attended by appointments booked in the same period, then multiply by 100. If you booked 80 calls and 60 happened, your show rate is 75%. Count rescheduled calls only once and track them separately so moved appointments do not look like no-shows." },
      { q: "What reduces no-shows the most?", a: "Booking calls soon, ideally within 48 hours, confirming immediately, and sending reminders across three channels: a call, a text and an email. Giving people an easy way to reschedule also helps, because people who cannot attend will move the call instead of ghosting it." },
      { q: "Can an AI agent improve show rate?", a: "Yes. An AI appointment setter can confirm each booking by phone, send reminders, answer last-minute questions and reschedule people who cannot make it, at any hour. It also calls no-shows within minutes to rebook them, a task human setters often do not have time for." },
      { q: "Is show rate the same as close rate?", a: "No. Show rate measures how many booked calls happen. Close rate measures how many held calls turn into sales. A funnel can have a strong close rate and still lose revenue if many people never show, so track both and fix whichever has the larger gap first." },
    ],
    related: ["/ai-appointment-setter", "/tools/no-show-cost-calculator", "/glossary/speed-to-lead", "/glossary/ai-voice-agent", "/glossary/crm-pipeline", "/templates/no-show-reminder-sequence"],
    parent: G,
    updated: U,
  },
];
