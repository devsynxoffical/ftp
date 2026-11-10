import type { BlogPost } from "./blogPosts";
import { AUTHORS } from "./authors";
import { cplBenchmarkTable, cplCampaigns, industryBenchmark, int, money, MIN_N } from "./benchmarks";

/* ------------------------------------------------------------------ data */
// Every figure in the cost per lead article is computed from the published
// case studies, so the article updates itself when cases are added.
const CAMPAIGNS = cplCampaigns()
  .filter((c) => (industryBenchmark(c.industry).cpl?.n ?? 0) >= MIN_N)
  .sort((a, b) => a.label.localeCompare(b.label) || a.cpl - b.cpl);
const med = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const N = CAMPAIGNS.length;
const MEDIAN = med(CAMPAIGNS.map((c) => c.cpl));
const FULL = CAMPAIGNS.filter((c) => c.leads && c.spend);
const SPEND = FULL.reduce((a, c) => a + c.spend!, 0);
const LEADS = FULL.reduce((a, c) => a + c.leads!, 0);
const WEIGHTED = SPEND / LEADS;
const UNDER10 = CAMPAIGNS.filter((c) => c.cpl < 10).length;
const UNDER20 = CAMPAIGNS.filter((c) => c.cpl < 20).length;
const LOW = Math.min(...CAMPAIGNS.map((c) => c.cpl));
const HIGH = Math.max(...CAMPAIGNS.map((c) => c.cpl));
const pct = (n: number) => `${Math.round((n / N) * 100)}%`;

const campaignRows = CAMPAIGNS.map(
  (c) =>
    `<tr><td>${c.label}</td><td><a href="/case-studies/${c.slug}">${money(c.cpl)}</a></td><td>${c.leads ? int(c.leads) : "Not published"}</td><td>${c.spend ? money(c.spend) : "Not published"}</td></tr>`,
).join("\n        ");

/* ------------------------------------------------------------------ posts */
export const PLAN_POSTS_D: BlogPost[] = [
  {
    slug: "facebook-ads-cost-per-lead-benchmarks",
    metaTitle: "Facebook Ads Cost Per Lead: Benchmarks From Real Campaigns",
    metaDescription: `Facebook ads cost per lead benchmarks from ${N} real Meta campaigns: median ${money(MEDIAN)}, ranges by industry, what a good CPL is and why it rises.`,
    keyTakeaways: [
      `Across ${N} published Meta (Facebook and Instagram) lead generation campaigns, the median cost per lead was ${money(MEDIAN)}, with a range from ${money(LOW)} to ${money(HIGH)}.`,
      `In the ${FULL.length} campaigns that published both spend and lead count, ${money(SPEND)} bought ${int(LEADS)} leads, a blended cost per lead of ${money(WEIGHTED)}.`,
      `${pct(UNDER10)} of campaigns came in under $10 per lead and ${pct(UNDER20)} under $20. Cost per lead varied as much inside one industry as between industries.`,
      "A good cost per lead is one below your break-even cost per lead: revenue per customer × gross margin × lead-to-customer rate. Judge campaigns on cost per booked call or sale, not on cost per lead alone.",
    ],
    title: `Facebook Ads Cost Per Lead: Benchmarks From ${N} Real Campaigns, by Industry`,
    headline: `What Meta lead generation campaigns actually paid per lead, campaign by campaign: a ${money(MEDIAN)} median, industry ranges, what makes a cost per lead good, and why it climbs.`,
    excerpt: `Most cost per lead benchmarks online are survey averages with no campaigns behind them. These come from ${N} Meta ad campaigns we ran and published, with every number linked to its case study, plus the break-even math that decides whether your own cost per lead is good.`,
    category: "Case Breakdowns",
    author: AUTHORS.gaurav,
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readTime: "9 min read",
    image: "/img/blog/facebook-ads-cost-per-lead-benchmarks.jpg",
    imageAlt: "Laptop on a wooden desk showing an ads reporting dashboard with a cost per lead bar chart, next to a blank benchmark grid and an orange pen",
    keywords: [
      "facebook ads cost per lead",
      "good cost per lead facebook ads",
      "facebook ads cost per lead benchmark",
      "average cost per lead facebook",
      "meta ads cost per lead",
      "cost per lead vs cost per acquisition",
      "why does cost per lead increase",
    ],
    metrics: [
      { label: "Median Cost Per Lead", value: money(MEDIAN), sub: `${N} Meta campaigns` },
      { label: "Blended Cost Per Lead", value: money(WEIGHTED), sub: `${int(LEADS)} leads on ${money(SPEND)}` },
      { label: "Campaigns Under $10", value: pct(UNDER10), sub: "of published campaigns" },
      { label: "Lowest to Highest", value: `${money(LOW)} to ${money(HIGH)}`, sub: "cost per lead range" },
    ],
    toc: [
      { id: "short-answer", title: "1. The Short Answer" },
      { id: "by-industry", title: "2. Facebook Ads Cost Per Lead by Industry" },
      { id: "every-campaign", title: "3. Every Campaign Behind the Numbers" },
      { id: "good-cpl", title: "4. What Is a Good Cost Per Lead on Facebook Ads?" },
      { id: "why-it-varies", title: "5. Why Cost Per Lead Varies So Much" },
      { id: "cpl-vs-cpa", title: "6. Cost Per Lead vs Cost Per Acquisition" },
      { id: "why-it-rises", title: "7. Why Does Cost Per Lead Increase?" },
      { id: "faq", title: "8. Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "What is the average cost per lead on Facebook ads?",
        answer: `Across the ${N} Meta lead generation campaigns we have published, the median cost per lead was ${money(MEDIAN)} and the blended figure, total spend divided by total leads, was ${money(WEIGHTED)}. Industry medians ranged from about $8 to $15. Treat any average as a reference point, then compare it with your own break-even cost per lead.`,
      },
      {
        question: "What is a good cost per lead for Facebook ads?",
        answer: "Any cost per lead comfortably below your break-even cost per lead, which is revenue per customer times gross margin times your lead-to-customer rate. A $40 lead is cheap for a business that closes 10% of leads at $5,000, and a $5 lead is expensive if nobody buys. The cost per lead calculator works it out for you.",
      },
      {
        question: "Why is my Facebook ads cost per lead so high?",
        answer: "The usual causes are a weak offer, creative fatigue, a narrow or saturated audience, a slow landing page and broken tracking that starves Meta of conversion data. Seasonality and competition matter too. Check the offer and first screen first, then make sure leads and booked calls are reaching Meta through the Conversions API.",
      },
      {
        question: "Are Facebook lead ads cheaper than a landing page funnel?",
        answer: "Instant forms usually produce a lower cost per lead because they are prefilled and never leave Facebook. They also produce more low-intent and mistyped leads. A funnel with qualifying questions and phone verification costs more per lead but often less per booked call. Compare the two on cost per sale, not cost per lead.",
      },
      {
        question: "How many leads do I need before trusting my cost per lead?",
        answer: "Cost per lead settles quickly, often after a few hundred dollars of spend and 30 to 50 leads per ad set. Lead quality takes longer, because you need leads to book, attend and buy. Give a new campaign at least one full sales cycle before judging it on cost per customer.",
      },
    ],
    related: [
      "how-to-reduce-cost-per-lead",
      "facebook-lead-ads-vs-funnels",
      "meta-conversions-api-capi-lead-gen-funnel-setup-guide-2026",
      "roofing-lead-generation-funnel-cost-per-lead-playbook",
    ],
    contentHtml: `
<section id="short-answer">
  <h2>1. The Short Answer</h2>
  <p>Across <strong>${N} Meta (Facebook and Instagram) lead generation campaigns</strong> we ran and published, the median <strong>Facebook ads cost per lead</strong> was <strong>${money(MEDIAN)}</strong>. The cheapest campaign paid ${money(LOW)} per lead and the most expensive paid ${money(HIGH)}. In the ${FULL.length} campaigns that published both their spend and their lead count, ${money(SPEND)} of ad spend bought ${int(LEADS)} leads, a blended cost per lead of ${money(WEIGHTED)}.</p>
  <p>${pct(UNDER10)} of the campaigns came in under $10 per lead and ${pct(UNDER20)} under $20. These are leads from our own funnels: landing pages or quizzes with qualifying questions, most with phone verification, followed by instant calls and texts. They are not survey estimates, and every figure below links to the case study it comes from.</p>
  <p>The number that decides whether your own cost per lead is good is not on any benchmark table. It is your <a href="/tools/cost-per-lead-calculator">break-even cost per lead</a>, which section 4 explains.</p>
</section>

<section id="by-industry">
  <h2>2. Facebook Ads Cost Per Lead by Industry</h2>
  <p>Median and range for each industry with at least three published campaigns. The table recalculates automatically whenever we publish a new case.</p>
  ${cplBenchmarkTable()}
  <p>Two patterns stand out. First, industry medians sit close together, roughly between $8 and $15, even though the businesses sell very different things. Second, the range inside each industry is wide: roofing went from $4.27 to $24, MVA personal injury from $4.38 to $27. The industry sets the starting point, but the offer, the market and how strictly the funnel qualifies leads move cost per lead far more.</p>
</section>

<section id="every-campaign">
  <h2>3. Every Campaign Behind the Numbers</h2>
  <p>Each row is one published campaign. Some case studies show only the cost per lead from a dashboard screenshot, so lead count or spend is marked as not published rather than estimated.</p>
  <div class="table-wrap">
    <table class="data-table">
      <thead><tr><th>Industry</th><th>Cost per lead</th><th>Leads</th><th>Ad spend</th></tr></thead>
      <tbody>
        ${campaignRows}
      </tbody>
    </table>
  </div>
  <p>The biggest campaigns are worth a closer look. <a href="/case-studies/mva-8810-leads-at-7-61-cpl">8,810 MVA leads at $7.61</a> on $67,013 and <a href="/case-studies/mva-6275-leads-at-4-38-cpl">6,275 MVA leads at $4.38</a> show that cost per lead does not have to rise steeply at volume when the offer and follow-up hold up. The full industry breakdowns are in the <a href="/case-leadgen">lead generation case studies</a>.</p>
</section>

<section id="good-cpl">
  <h2>4. What Is a Good Cost Per Lead on Facebook Ads?</h2>
  <p>A good cost per lead is one below the most you can afford to pay. That ceiling is your <strong>break-even cost per lead</strong>:</p>
  <p><strong>Break-even cost per lead = revenue per customer × gross margin × lead-to-customer rate</strong></p>
  <div class="table-wrap">
    <table class="data-table">
      <thead><tr><th>Business</th><th>Revenue per customer</th><th>Gross margin</th><th>Lead-to-customer rate</th><th>Break-even CPL</th></tr></thead>
      <tbody>
        <tr><td>Roofing replacement</td><td>$12,000</td><td>30%</td><td>3%</td><td>$108</td></tr>
        <tr><td>Med spa first treatment</td><td>$600</td><td>60%</td><td>15%</td><td>$54</td></tr>
        <tr><td>Mortgage refinance</td><td>$3,000</td><td>70%</td><td>2%</td><td>$42</td></tr>
        <tr><td>Coaching program</td><td>$3,000</td><td>80%</td><td>4%</td><td>$96</td></tr>
      </tbody>
    </table>
  </div>
  <p>These are illustrative inputs, not client figures; put your own into the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a>. The point is that a ${money(MEDIAN)} lead can be wildly profitable for one business and a loss for another. If your cost per lead sits well below break-even, scale spend even if cost per lead rises. If it sits above, the fix is usually a higher lead-to-customer rate rather than a cheaper lead: doubling the close rate doubles what you can pay.</p>
</section>

<section id="why-it-varies">
  <h2>5. Why Cost Per Lead Varies So Much</h2>
  <ul>
    <li><strong>Offer.</strong> "Free roof inspection after the storm" and "Get a quote" target the same homeowner at very different prices. The offer is the biggest lever we see.</li>
    <li><strong>Qualification.</strong> Every extra question and phone verification step removes some leads. Cost per lead rises, cost per booked call usually falls. Our cheapest leads are not always our most profitable.</li>
    <li><strong>Form type.</strong> Instant forms on Facebook are cheaper per lead than a landing page funnel and lower in intent. We compare them in <a href="/blog/facebook-lead-ads-vs-funnels">Facebook lead ads vs funnels</a>.</li>
    <li><strong>Market and season.</strong> Storm season for roofing, rate changes for mortgage and open enrollment for insurance all change competition in the auction.</li>
    <li><strong>Creative.</strong> Real footage of the crew, the clinic or the founder usually beats stock imagery, and fresh angles hold cost per lead down longer.</li>
    <li><strong>Signal.</strong> Campaigns that send booked calls and sales back to Meta through the <a href="/meta-conversions-api-setup">Conversions API</a> give the algorithm better data to find buyers.</li>
  </ul>
</section>

<section id="cpl-vs-cpa">
  <h2>6. Cost Per Lead vs Cost Per Acquisition</h2>
  <div class="table-wrap">
    <table class="data-table">
      <thead><tr><th>Metric</th><th>Formula</th><th>Use it to</th></tr></thead>
      <tbody>
        <tr><td>Cost per lead (CPL)</td><td>Ad spend ÷ leads</td><td>Compare ads and audiences quickly</td></tr>
        <tr><td>Cost per qualified lead</td><td>Ad spend ÷ leads that pass qualification</td><td>Strip out junk and duplicate leads</td></tr>
        <tr><td>Cost per booked call</td><td>Ad spend ÷ booked calls</td><td>Judge follow-up and intent</td></tr>
        <tr><td>Cost per acquisition (CPA or CAC)</td><td>Ad spend ÷ new customers, or CPL ÷ lead-to-customer rate</td><td>Decide budget and profitability</td></tr>
      </tbody>
    </table>
  </div>
  <p>Cost per lead arrives first, so it is the number everyone watches. Cost per acquisition is the number that pays the bills. A $20 lead that closes at 5% is a $400 customer; a $35 lead that closes at 12% is a $292 customer. That is why we send qualified events back to Meta and judge every test on cost per booked call or sale. The <a href="/glossary/cost-per-lead">cost per lead glossary entry</a> covers which leads to count.</p>
</section>

<section id="why-it-rises">
  <h2>7. Why Does Cost Per Lead Increase?</h2>
  <ol>
    <li><strong>Creative fatigue.</strong> Frequency climbs, click-through falls and Meta charges more to reach the same people. Refresh angles before performance drops, not after.</li>
    <li><strong>Audience saturation.</strong> Small local markets run out of new people quickly. Broaden the radius or the offer rather than narrowing targeting further.</li>
    <li><strong>Lost signal.</strong> Browser privacy limits and ad blockers hide conversions from the pixel. Server-side tracking recovered 31% more events on our builds.</li>
    <li><strong>Learning resets.</strong> Large budget jumps and frequent edits push ad sets back into learning. Scale in steps of 20 to 30%.</li>
    <li><strong>Seasonal competition.</strong> Q4 retail spend and industry seasons raise auction prices for everyone.</li>
    <li><strong>A slower page.</strong> A new script or heavy chat widget can cut conversion rate, which shows up as higher cost per lead.</li>
  </ol>
  <p>For the fixes in order of impact, read <a href="/blog/how-to-reduce-cost-per-lead">how to reduce cost per lead</a>. If you want us to find the leak in your account, a <a href="/sales-funnel-audit">sales funnel audit</a> runs this analysis on your own data, and our <a href="/facebook-ads-agency">Facebook ads agency</a> page shows how we manage campaigns.</p>
</section>
`,
  },
  {
    slug: "membership-funnel",
    metaTitle: "Membership Funnel: How to Sell Subscriptions With Ads",
    metaDescription: "How a membership funnel works: entry offer, checkout, onboarding and retention math, plus three real campaigns that sold 537 to 2,063 memberships.",
    keyTakeaways: [
      "A membership funnel sells a recurring subscription, so it is judged on cost per member against lifetime value, not on the first payment alone.",
      "The standard path is ad, offer page, checkout with an order bump, onboarding sequence and a retention system that keeps members past month three.",
      "In one of our campaigns, $22,774.44 of ad spend produced 537 memberships and $57,577.57 of revenue, a 2.53x ROAS and about $42 of ad spend per member.",
      "Retention decides profit: lifetime value equals monthly price times average months retained, so adding one month of retention often beats any ad optimization.",
    ],
    title: "Membership Funnel: How to Sell Subscriptions With Paid Ads, With Three Real Campaigns",
    headline: "The structure, the math and the retention system behind a membership funnel, with real numbers from campaigns that sold 537, 1,566 and 2,063 memberships.",
    excerpt: "A membership funnel is a low-ticket funnel with a second job: keep people paying. Here is how the entry offer, checkout, onboarding and retention fit together, how to work out what you can pay per member, and what three of our membership campaigns produced.",
    category: "Funnel Architecture",
    author: AUTHORS.rahul,
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readTime: "8 min read",
    image: "/img/blog/membership-funnel.jpg",
    imageAlt: "Smartphone on a stand showing a membership signup screen with a join button, next to a laptop chart of members growing over time",
    keywords: [
      "membership funnel",
      "membership sales funnel",
      "subscription funnel",
      "subscription sales funnel",
      "membership funnel template",
      "low ticket subscription funnel",
    ],
    metrics: [
      { label: "Memberships Sold", value: "2,063", sub: "$65,600 revenue" },
      { label: "ROAS", value: "2.53x", sub: "537 memberships, $57,577.57" },
      { label: "Ad Spend per Member", value: "$42.41", sub: "$22,774.44 ÷ 537" },
      { label: "Memberships Sold", value: "1,566", sub: "dashboard proof" },
    ],
    toc: [
      { id: "what-it-is", title: "1. What Is a Membership Funnel?" },
      { id: "structure", title: "2. The Membership Funnel Step by Step" },
      { id: "math", title: "3. The Math: What Can You Pay Per Member?" },
      { id: "our-campaigns", title: "4. Three Real Membership Campaigns" },
      { id: "retention", title: "5. Retention: Where the Profit Is" },
      { id: "template", title: "6. Membership Funnel Template" },
      { id: "mistakes", title: "7. Common Mistakes" },
      { id: "faq", title: "8. Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "What is a membership funnel?",
        answer: "A membership funnel is a sales funnel that sells a recurring subscription, such as a paid community, course library, coaching group or app, instead of a one-time product. It usually runs ad, offer page, checkout, onboarding and retention, and it is measured on cost per member against lifetime value.",
      },
      {
        question: "Should a membership start with a free trial or a paid first month?",
        answer: "A paid first month, even a low one, usually brings members who stay longer, because they have already decided to pay. Free trials raise sign-ups but often lower trial-to-paid conversion. Test both on the same traffic and compare paying members after day 30 and day 90, not sign-ups.",
      },
      {
        question: "How much should I spend to acquire a member?",
        answer: "Work out lifetime gross profit first: monthly price times average months retained times gross margin. You can spend up to that figure and break even. Many businesses target one or two months of revenue so ads pay back quickly. In one of our campaigns, ad spend per member was $42.41 against $107.22 of revenue per member.",
      },
      {
        question: "Which platform should I use for a membership funnel?",
        answer: "Use a checkout that supports recurring billing, order bumps and failed-payment recovery, connected to a CRM that can tag members, run onboarding messages and flag cancellations. GoHighLevel, ClickFunnels and Kajabi all handle memberships; the follow-up and tracking matter more than the page builder.",
      },
      {
        question: "Does a membership funnel work for creators and influencers?",
        answer: "Yes, an audience lowers acquisition cost because warm followers convert better than cold traffic. The same structure applies: a clear promise, a simple checkout, fast onboarding and a reason to stay each month. Paid ads then extend the offer to lookalike audiences once the funnel converts warm traffic profitably.",
      },
    ],
    related: [
      "low-ticket-funnel-guide",
      "low-ticket-self-liquidating-offer-funnel-847k-breakdown",
      "sales-funnel-examples",
      "how-to-increase-funnel-conversion-rate",
    ],
    contentHtml: `
<section id="what-it-is">
  <h2>1. What Is a Membership Funnel?</h2>
  <p>A <strong>membership funnel</strong> is a sales funnel built to sell a recurring subscription: a paid community, a course library, a coaching group, a software tool or a monthly box. It works like a <a href="/blog/low-ticket-funnel-guide">low-ticket funnel</a> at the front, with a low and easy first payment, and then takes on a second job a one-time funnel never has: keeping people paying month after month.</p>
  <p>That second job changes how you measure it. A one-time funnel is judged on revenue per buyer against cost per buyer. A membership funnel is judged on <strong>lifetime value</strong> against <strong>cost per member</strong>, and lifetime value depends on retention. A funnel that looks unprofitable on day one can be very profitable by month four, and one that looks great on day one can lose money if members cancel after the first charge.</p>
</section>

<section id="structure">
  <h2>2. The Membership Funnel Step by Step</h2>
  <ol>
    <li><strong>Ad.</strong> One clear promise for one audience. Show what a member gets in the first week, not the whole library.</li>
    <li><strong>Offer page.</strong> The outcome, what is inside, the price and a guarantee. Video works well because membership buyers are buying into a person or community.</li>
    <li><strong>Checkout.</strong> Short form, the monthly or annual choice, and an <a href="/glossary/order-bump">order bump</a> such as a starter pack or a one-to-one onboarding call.</li>
    <li><strong>Upsell.</strong> An annual plan at a discount right after purchase. Annual members cannot churn for a year and pay for ads immediately.</li>
    <li><strong>Onboarding.</strong> A welcome message within minutes, one quick win in the first 48 hours and a reminder of what is coming next.</li>
    <li><strong>Retention.</strong> Regular new content or sessions, check-ins for inactive members and failed-payment recovery.</li>
  </ol>
  <p>Steps one to four are the same as any <a href="/glossary/tripwire-offer">tripwire offer</a> funnel. Steps five and six are what make it a membership business.</p>
</section>

<section id="math">
  <h2>3. The Math: What Can You Pay Per Member?</h2>
  <p><strong>Lifetime value = monthly price × average months retained</strong>. Multiply by gross margin to get lifetime gross profit, which is the most you can pay for a member and break even.</p>
  <div class="table-wrap">
    <table class="data-table">
      <thead><tr><th>Monthly price</th><th>Average months retained</th><th>Lifetime value</th><th>Break-even cost per member at 80% margin</th></tr></thead>
      <tbody>
        <tr><td>$27</td><td>3</td><td>$81</td><td>$64.80</td></tr>
        <tr><td>$27</td><td>6</td><td>$162</td><td>$129.60</td></tr>
        <tr><td>$47</td><td>4</td><td>$188</td><td>$150.40</td></tr>
        <tr><td>$97</td><td>5</td><td>$485</td><td>$388</td></tr>
      </tbody>
    </table>
  </div>
  <p>These are illustrative inputs. Notice what one extra month of retention does: moving a $27 membership from three to six months doubles what you can afford per member. Most businesses would struggle to halve their ad cost, but many can add a month of retention with better onboarding. Our <a href="/tools/roas-calculator">ROAS calculator</a> shows break-even ROAS for your margin.</p>
</section>

<section id="our-campaigns">
  <h2>4. Three Real Membership Campaigns</h2>
  <div class="table-wrap">
    <table class="data-table">
      <thead><tr><th>Campaign</th><th>Memberships</th><th>Revenue</th><th>Ad spend</th><th>What it shows</th></tr></thead>
      <tbody>
        <tr><td><a href="/case-studies/low-ticket-funnel-66k-in-revenue">$66K membership launch</a></td><td>2,063</td><td>$65,600</td><td>Not published</td><td>About $31.80 of revenue per membership at volume</td></tr>
        <tr><td><a href="/case-studies/low-ticket-funnel-58k-revenue-on-23k-ad-spend">$58K on $23K ad spend</a></td><td>537</td><td>$57,577.57</td><td>$22,774.44</td><td>2.53x ROAS, $42.41 of ad spend and $107.22 of revenue per member</td></tr>
        <tr><td><a href="/case-studies/low-ticket-funnel-1566-memberships-sold">1,566 memberships sold</a></td><td>1,566</td><td>Not published</td><td>Not published</td><td>Dashboard proof of sales volume</td></tr>
      </tbody>
    </table>
  </div>
  <p>The $58K campaign is the clearest example of the math: at $42.41 of ad spend per member and $107.22 of revenue per member in the period reported, the front end paid for its own ads before counting any later renewals. That is the same principle as a <a href="/glossary/self-liquidating-offer">self-liquidating offer</a>, applied to a subscription. All three campaigns are in our <a href="/case-studies/low-ticket-funnels">low-ticket funnel case studies</a>, and the <a href="/scalelowticket">$847K low-ticket breakdown</a> shows the same front-end structure on a one-time product.</p>
</section>

<section id="retention">
  <h2>5. Retention: Where the Profit Is</h2>
  <ul>
    <li><strong>A fast first win.</strong> Members who get a result in the first two days cancel less. Point new members at one short lesson, template or session, not the whole library.</li>
    <li><strong>Activity tracking.</strong> Tag members who have not logged in or attended for 14 days and send a personal check-in by text or email.</li>
    <li><strong>Failed-payment recovery.</strong> Expired cards cause a share of cancellations that members never chose. Automated retries and update-your-card messages recover many of them.</li>
    <li><strong>A cancellation offer.</strong> A pause option or a lower tier keeps some members who would otherwise leave.</li>
    <li><strong>A reason to stay.</strong> Monthly live sessions, new releases or community challenges give members something to look forward to.</li>
  </ul>
  <p>We build these sequences in the CRM as part of our <a href="/crm-automation">CRM automation</a> work, and the <a href="/blog/lead-nurturing-strategies">lead nurturing strategies</a> guide covers message timing.</p>
</section>

<section id="template">
  <h2>6. Membership Funnel Template</h2>
  <div class="table-wrap">
    <table class="data-table">
      <thead><tr><th>Step</th><th>Page or message</th><th>Number to track</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Ad with one promise and real footage</td><td>Click-through rate, cost per click</td></tr>
        <tr><td>2</td><td>Offer page with video, inclusions, price and guarantee</td><td>Page-to-checkout rate</td></tr>
        <tr><td>3</td><td>Checkout with monthly or annual choice and an order bump</td><td>Checkout conversion, bump take rate</td></tr>
        <tr><td>4</td><td>Annual upgrade offer after purchase</td><td>Upgrade take rate</td></tr>
        <tr><td>5</td><td>Welcome message and first-win lesson within minutes</td><td>Day-2 activation rate</td></tr>
        <tr><td>6</td><td>Inactivity check-ins, payment recovery, cancellation offer</td><td>Month-1 and month-3 retention</td></tr>
      </tbody>
    </table>
  </div>
  <p>Track the whole chain in one place; the <a href="/templates/funnel-kpi-dashboard">funnel KPI dashboard template</a> has the columns for it.</p>
</section>

<section id="mistakes">
  <h2>7. Common Mistakes</h2>
  <ul>
    <li><strong>Judging the funnel on day one.</strong> A membership funnel that breaks even on the first payment is already a strong result. Judge it on cohort revenue at 90 days.</li>
    <li><strong>Selling the whole library.</strong> Nobody joins for 400 videos. Sell the first outcome.</li>
    <li><strong>No onboarding.</strong> Members who never log in cancel at the first charge they notice.</li>
    <li><strong>Hiding the cancel button.</strong> It creates chargebacks and complaints, and in many places it breaks consumer rules. Make cancelling easy and offer a pause.</li>
    <li><strong>Tracking only purchases.</strong> Send renewals and cancellations to your reporting so you can see which ads bring members who stay.</li>
  </ul>
  <p>If you want a membership funnel built and tracked end to end, our <a href="/sales-funnel-agency">sales funnel agency</a> builds them in 5 to 10 business days.</p>
</section>
`,
  },
];
