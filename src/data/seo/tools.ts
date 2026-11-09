import type { SeoPage } from "./types";

const HUB = { name: "Tools", path: "/tools" };
const U = "2026-11-05";

export const TOOL_PAGES: SeoPage[] = [
  {
    path: "/tools",
    kind: "hub",
    keyword: "free funnel calculators",
    title: "Free Funnel Calculators for Leads, ROAS & No-Shows",
    description: "Free funnel calculators for conversion rate, cost per lead, ROAS, no-show cost and AI voice agent ROI. Plug in your numbers and see where revenue leaks.",
    eyebrow: "Tools",
    h1: "Free funnel calculators for the numbers that decide profit",
    intro:
      "These <strong>free funnel calculators</strong> turn your ad spend, conversion rates and deal values into the five numbers we check first on every audit: funnel conversion, cost per lead, ROAS, the cost of no-shows and the return on an AI voice agent. Each one runs in your browser, shows its formula and needs no email address.",
    quick: {
      q: "Which funnel calculator should I use first?",
      a: "Start with the funnel conversion calculator, because it shows every stage from visitor to sale and reveals the weakest step. Then use the cost per lead calculator to find your break-even lead price, the ROAS calculator to check profit, and the no-show and AI voice calculators to price the follow-up gaps.",
    },
    sections: [
      {
        h2: "The five calculators",
        html: `<div class="table-wrap"><table><thead><tr><th>Calculator</th><th>Answers</th><th>Inputs you need</th></tr></thead><tbody>
<tr><td><a href="/tools/funnel-conversion-calculator">Funnel conversion calculator</a></td><td>How many visitors become leads, calls and sales, and what each costs</td><td>Visitors, ad spend, opt-in, booking, show and close rates, deal value</td></tr>
<tr><td><a href="/tools/cost-per-lead-calculator">Cost per lead calculator</a></td><td>What you pay per lead and the most you can afford to pay</td><td>Ad spend, leads, lead-to-customer rate, revenue per customer, margin</td></tr>
<tr><td><a href="/tools/roas-calculator">ROAS calculator</a></td><td>Whether ad revenue is profitable after margin</td><td>Ad spend, attributed revenue, gross margin</td></tr>
<tr><td><a href="/tools/no-show-cost-calculator">No-show cost calculator</a></td><td>Revenue lost to missed calls and what fixing it recovers</td><td>Calls booked, current and target no-show rate, close rate, deal value</td></tr>
<tr><td><a href="/tools/ai-voice-agent-roi-calculator">AI voice agent ROI calculator</a></td><td>Cost per booking for an AI caller versus a human setter</td><td>Lead volume, setter cost, contact and booking rates, AI minutes and price</td></tr>
</tbody></table></div>`,
      },
      {
        h2: "How to use them together",
        html: `<p>Run them in order of the funnel. The conversion calculator gives you a baseline. If cost per lead looks high, the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a> tells you whether it actually is, because a $60 lead is cheap when a customer is worth $10,000. If leads are fine but revenue is not, the problem is usually after the form: slow follow-up or missed calls, which the no-show and AI voice calculators put a dollar figure on.</p>
<p>Use real numbers from the last 30 to 90 days, not hopes. If you do not track show rate or close rate yet, that is the first fix, and our <a href="/templates/funnel-kpi-dashboard">funnel KPI dashboard template</a> lays out what to record each week.</p>`,
      },
      {
        h2: "What the numbers usually reveal",
        html: `<p>Across our audits, the leak is rarely the ad. Most accounts we review lose more revenue between the form and the sales call than on the landing page. Our <a href="/speed-to-lead">speed-to-lead automation</a> lifted lead-to-booking 2.4x across 60+ deployments on the same ads, and three-channel reminders push show-up rates as high as 88%. When the calculators point to a gap you cannot close in-house, the <a href="/services">services</a> page lists the build that fixes it, and the <a href="/glossary/cost-per-lead">cost per lead</a> glossary entry explains the terms.</p>`,
      },
    ],
    proof: {
      heading: "Real numbers behind the benchmarks",
      items: [
        { value: "$7.61", label: "Cost per lead across 8,810 MVA leads", href: "/case-studies/mva-8810-leads-at-7-61-cpl" },
        { value: "19.09x", label: "ROAS on $20,324 of MVA ad spend", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "4.2x", label: "ROAS on $449,221 of Shopify sales in 49 days", href: "/case-studies/shopify-store-449k-in-49-days-at-4-2x-roas" },
      ],
      more: { label: "Browse all case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "Are the funnel calculators really free?", a: "Yes. Every calculator runs in your browser with no sign-up, no email gate and no data sent to us. Change any input and the results update instantly. The formula is printed under each calculator so you can rebuild it in a spreadsheet and check the math against your own reports." },
      { q: "Where do I find the numbers to enter?", a: "Ad spend, clicks and leads come from your ad manager. Booked calls, show rate and close rate come from your CRM or calendar. Deal value and margin come from your books. If any stage is not tracked, estimate it, then start recording it weekly so the next run uses real data." },
      { q: "How accurate are the results?", a: "The math is exact; the output is only as good as the inputs. Use averages from at least 30 days and enough volume to be meaningful, ideally 100 or more leads. Small samples swing wildly, so treat early numbers as direction rather than a forecast you plan budget around." },
      { q: "Which number matters most in a sales funnel?", a: "Cost per acquired customer against the gross profit that customer brings. Cost per lead and ROAS are useful because they arrive faster, but a cheap lead that never closes is expensive. The funnel conversion calculator shows cost per sale alongside cost per lead for exactly this reason." },
      { q: "Can you help if the calculators show a problem?", a: "Yes. Each calculator page lists the fixes that move that number, from offer and page changes to speed-to-lead, reminders, AI voice qualification and Conversions API tracking. Builds go live in 5 to 10 business days and start at $999. Book a strategy call and bring your calculator results." },
    ],
    related: ["/tools/funnel-conversion-calculator", "/tools/cost-per-lead-calculator", "/tools/roas-calculator", "/templates", "/blog/how-to-increase-funnel-conversion-rate"],
    parent: { name: "Home", path: "/" },
    updated: U,
  },
  {
    path: "/tools/funnel-conversion-calculator",
    kind: "tool",
    tool: "funnel-conversion",
    keyword: "funnel conversion calculator",
    title: "Funnel Conversion Calculator: Visitors to Sales & ROAS",
    description: "Free funnel conversion calculator. Enter visitors, opt-in, booking, show and close rates to see leads, sales, cost per sale, revenue and ROAS.",
    eyebrow: "Free tool",
    h1: "Funnel conversion calculator",
    intro:
      "This <strong>funnel conversion calculator</strong> follows a visitor all the way to a sale: landing page opt-in, booked call, attended call and closed deal. Enter your traffic, ad spend and the rate at each step, and it returns leads, sales, cost per lead, cost per attended call, cost per sale, revenue and ROAS so you can see which stage is costing you the most.",
    quick: {
      q: "How do you calculate funnel conversion rate?",
      a: "Multiply the rate at each stage. Leads equal visitors times opt-in rate, booked calls equal leads times booking rate, attended calls equal booked times show rate, and sales equal attended times close rate. Visitor-to-sale conversion is sales divided by visitors. With 8%, 30%, 70% and 20%, that is 0.34%.",
    },
    sections: [
      {
        h2: "How to use the calculator",
        html: `<ol>
<li><strong>Visitors and ad spend.</strong> Use landing page sessions and spend for the same month, not ad clicks, which overcount.</li>
<li><strong>Opt-in rate.</strong> Leads divided by landing page visitors.</li>
<li><strong>Booking rate.</strong> Booked calls divided by leads. If you sell at checkout, set booking and show rate to 100% and use close rate as checkout conversion.</li>
<li><strong>Show-up rate.</strong> Attended calls divided by booked calls. See the <a href="/glossary/show-rate">show rate</a> definition.</li>
<li><strong>Close rate and deal value.</strong> Sales divided by attended calls, and average first-payment or contract value.</li>
</ol>`,
      },
      {
        h2: "Worked example with the default numbers",
        html: `<p>The calculator opens with 5,000 visitors, $5,000 of ad spend, an 8% opt-in rate, 30% booking rate, 70% show rate, 20% close rate and a $3,000 deal:</p>
<div class="table-wrap"><table><thead><tr><th>Stage</th><th>Math</th><th>Result</th></tr></thead><tbody>
<tr><td>Leads</td><td>5,000 × 8%</td><td>400 (cost per lead $12.50)</td></tr>
<tr><td>Booked calls</td><td>400 × 30%</td><td>120</td></tr>
<tr><td>Attended calls</td><td>120 × 70%</td><td>84 (cost per attended call $59.52)</td></tr>
<tr><td>Sales</td><td>84 × 20%</td><td>16.8 (cost per sale $298)</td></tr>
<tr><td>Revenue</td><td>16.8 × $3,000</td><td>$50,400, ROAS 10.08x</td></tr>
</tbody></table></div>
<p>Visitor-to-sale conversion is 0.34%. Now test one lever at a time. Raising show rate from 70% to 85% gives 102 attended calls, 20.4 sales and $61,200 of revenue on the same spend, a bigger gain than most landing page redesigns deliver.</p>`,
      },
      {
        h2: "How to read the results",
        html: `<p>Look at cost per attended call and cost per sale before ROAS. ROAS on a high-ticket offer looks healthy even with a broken stage, because one deal covers a lot of spend. The stage with the biggest drop against benchmark is where the next dollar of effort pays most. Compare cost per sale with gross profit per sale: if cost per sale is above it, the funnel loses money no matter how good the ROAS figure looks.</p>`,
      },
      {
        h2: "Benchmarks from our client work",
        html: `<p>Lead costs vary by industry. In our documented results, roofing leads came in at $4.27 to $24, MVA leads at $4.38 to $27 and mortgage leads at $4.31 to $25.48. Show-up rates reach up to 88% with three-channel reminders, and speed-to-lead follow-up lifted lead-to-booking 2.4x across 60+ deployments. The <a href="/milliondollarcasestudy">$1.52M consulting funnel</a> shows what a full high-ticket path looks like over 19 months.</p>`,
      },
      {
        h2: "What to fix when a number is bad",
        html: `<ul>
<li><strong>Low opt-in rate:</strong> the offer or page. A <a href="/quiz-funnels">quiz funnel</a> or <a href="/vsl-funnels">VSL funnel</a> usually beats a long form. Start from the <a href="/templates/funnel-copy-template">funnel copy template</a>.</li>
<li><strong>Low booking rate:</strong> slow follow-up. Install <a href="/speed-to-lead">speed-to-lead automation</a> so every lead is contacted inside a minute.</li>
<li><strong>Low show rate:</strong> reminders. Use the <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a> and price the gap with the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a>.</li>
<li><strong>Low close rate:</strong> lead quality. Add <a href="/templates/lead-qualification-questions">qualification questions</a> or an <a href="/ai-voice-agents">AI voice agent</a> that screens before the closer.</li>
</ul>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "52x", label: "ROAS: $115,500 from 174 booked appointments", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "29.7x", label: "ROAS: $64,960 from a webinar funnel, 140 appointments", href: "/case-studies/webinar-65k-revenue-on-2184-ad-spend" },
        { value: "$680K", label: "34 coaching sales on $15,483 ad spend", href: "/case-studies/coaching-680k-revenue-on-15k-ad-spend" },
      ],
      more: { label: "See coaching and consulting funnel results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "What is a good sales funnel conversion rate?", a: "There is no single number, because it depends on offer price and traffic temperature. For a high-ticket call funnel, visitor-to-sale rates under 1% are normal and can be very profitable. Judge the funnel by cost per sale against gross profit per sale rather than by the conversion percentage alone." },
      { q: "Should I use ad clicks or landing page visitors?", a: "Landing page visitors. Ad platforms count link clicks, and many of those never load the page, especially on mobile. Using clicks makes your opt-in rate look worse than it is. Pull sessions from your analytics or funnel builder for the same date range as your ad spend." },
      { q: "How do I use it for a checkout funnel with no calls?", a: "Set the booking rate and show rate to 100% so every lead passes straight through, then enter checkout conversion as the close rate and average order value as the deal value. The ROAS calculator is a simpler option if you already know revenue and spend." },
      { q: "Which stage should I fix first?", a: "Fix the stage furthest below its benchmark that sits closest to revenue. A 15-point gain in show rate or close rate usually beats a similar gain at the top, because it applies to leads you already paid for. Change one input at a time in the calculator to compare the revenue impact." },
      { q: "Why does my ROAS look good when I am not profitable?", a: "ROAS ignores delivery costs, refunds, sales commissions and the margin on the product. A 3x ROAS on a 30% margin offer loses money. Run the ROAS calculator with your gross margin to see the break-even ROAS, then compare it to the ROAS this calculator gives you." },
    ],
    related: ["/tools", "/tools/roas-calculator", "/tools/no-show-cost-calculator", "/glossary/sales-funnel", "/templates/funnel-kpi-dashboard", "/blog/how-to-increase-funnel-conversion-rate", "/sales-funnel-audit"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/tools/cost-per-lead-calculator",
    kind: "tool",
    tool: "cost-per-lead",
    keyword: "cost per lead calculator",
    title: "Cost Per Lead Calculator With Break-Even CPL",
    description: "Free cost per lead calculator. See your CPL, cost per customer and the break-even cost per lead your margin allows, with real industry benchmarks.",
    eyebrow: "Free tool",
    h1: "Cost per lead calculator with break-even CPL",
    intro:
      "This <strong>cost per lead calculator</strong> does two jobs. It divides ad spend by leads to give your cost per lead, then works backwards from revenue, margin and close rate to the break-even cost per lead: the most you can pay for a lead before it stops making money. The gap between the two numbers tells you whether to scale or fix.",
    quick: {
      q: "How do you calculate cost per lead?",
      a: "Cost per lead is ad spend divided by the number of leads. $5,000 spent for 250 leads is a $20 cost per lead. To know if that is good, multiply revenue per customer by gross margin and by your lead-to-customer rate. That is your break-even cost per lead, here $100.",
    },
    sections: [
      {
        h2: "How to use the calculator",
        html: `<ol>
<li><strong>Ad spend and leads</strong> for the same period. Count only leads that reach your CRM, not raw form opens.</li>
<li><strong>Lead-to-customer rate:</strong> paying customers divided by leads over a period long enough for leads to close.</li>
<li><strong>Revenue per customer:</strong> first-sale value, or lifetime value if you are confident in it.</li>
<li><strong>Gross margin:</strong> revenue minus cost of delivery, as a percentage.</li>
</ol>
<p>The <a href="/glossary/cost-per-lead">cost per lead</a> glossary entry covers which leads to count and why verified leads change the math.</p>`,
      },
      {
        h2: "Worked example with the default numbers",
        html: `<p>The calculator opens with $5,000 of spend, 250 leads, a 5% lead-to-customer rate, $4,000 revenue per customer and a 50% gross margin:</p>
<ul>
<li>Cost per lead: $5,000 ÷ 250 = <strong>$20</strong>.</li>
<li>Customers: 250 × 5% = 12.5. Cost per customer (CAC): $5,000 ÷ 12.5 = $400.</li>
<li>Gross profit per customer: $4,000 × 50% = $2,000.</li>
<li>Break-even cost per lead: $4,000 × 50% × 5% = <strong>$100</strong>.</li>
<li>Headroom: ($100 − $20) ÷ $100 = 80%.</li>
</ul>
<p>With 80% headroom, this business should be spending more, not trying to make leads cheaper.</p>`,
      },
      {
        h2: "How to read the results",
        html: `<p>Positive headroom means each lead earns more gross profit than it costs, so scaling spend is the right move even if cost per lead rises. Negative headroom means you lose money on average, and the fix is either a cheaper lead or a higher lead-to-customer rate. The second is usually easier: doubling close rate doubles break-even CPL.</p>`,
      },
      {
        h2: "Cost per lead benchmarks from our clients",
        html: `<div class="table-wrap"><table><thead><tr><th>Industry</th><th>Documented cost per lead</th></tr></thead><tbody>
<tr><td>Roofing</td><td>$4.27 to $24</td></tr>
<tr><td>MVA personal injury</td><td>$4.38 to $27</td></tr>
<tr><td>Mortgage and final expense</td><td>$4.31 to $25.48</td></tr>
<tr><td>HVAC</td><td>$5.57 to $23.09</td></tr>
<tr><td>Real estate</td><td>$11.57 to $28</td></tr>
<tr><td>B2B lead generation</td><td>$6.72 to $40</td></tr>
</tbody></table></div>
<p>Each range comes from real campaigns in our <a href="/case-studies/all">case studies</a>. Lower is not automatically better: a $40 B2B lead can beat a $5 consumer lead on cost per customer.</p>`,
      },
      {
        h2: "What to fix when the number is bad",
        html: `<ul>
<li><strong>CPL above break-even:</strong> test a new offer and page. A <a href="/quiz-funnels">quiz funnel</a> often lowers CPL on cold traffic.</li>
<li><strong>Cheap leads that never close:</strong> add OTP verification and <a href="/templates/lead-qualification-questions">qualification questions</a>, then send qualified events back with <a href="/meta-conversions-api-setup">Conversions API setup</a>.</li>
<li><strong>Leads that go cold:</strong> install <a href="/speed-to-lead">speed-to-lead automation</a> and the <a href="/templates/sms-follow-up-templates">SMS follow-up templates</a>.</li>
</ul>
<p>Our guide on <a href="/blog/how-to-reduce-cost-per-lead">how to reduce cost per lead</a> goes deeper.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$5.31", label: "Cost per lead across 686 roofing leads", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
        { value: "$4.38", label: "Cost per lead across 6,275 MVA leads", href: "/case-studies/mva-6275-leads-at-4-38-cpl" },
        { value: "$7.79", label: "Cost per lead across 2,440 final expense leads", href: "/case-studies/final-expense-2440-leads-at-7-79-cpl" },
        { value: "$6.72", label: "Cost per lead across 1,890 agency leads", href: "/case-studies/agency-1890-leads-at-6-72-cpl" },
      ],
      more: { label: "Browse lead generation case studies", href: "/case-leadgen" },
    },
    faqs: [
      { q: "What is a good cost per lead?", a: "A good cost per lead is any figure comfortably below your break-even cost per lead. For a business with a 5% close rate, $4,000 customers and 50% margin, that ceiling is $100. Industry averages are a rough guide only, because offer, market and lead quality change what each lead is worth." },
      { q: "Should I use first-sale value or lifetime value?", a: "Use first-sale value if you need ads to pay back quickly or cash is tight. Use lifetime value only when you have at least a year of retention data. Many businesses run both: first-sale break-even sets the safe limit, and lifetime break-even sets how aggressive scaling can get." },
      { q: "Why is my cost per lead low but sales are poor?", a: "The ad platform is optimizing for form fills, so it finds people who fill forms rather than people who buy. Add verification and qualification, then send booked calls or sales back through the Conversions API so the algorithm learns which leads matter. Cost per lead may rise while cost per sale falls." },
      { q: "How is cost per lead different from cost per acquisition?", a: "Cost per lead counts every form fill or call. Cost per acquisition, also called CAC, counts only paying customers, so it equals cost per lead divided by your lead-to-customer rate. In the default example, a $20 lead with a 5% close rate produces a $400 cost per customer." },
      { q: "How many leads do I need for a reliable number?", a: "Aim for at least 100 leads and a full sales cycle before trusting the lead-to-customer rate. Cost per lead stabilizes faster, often within a few hundred dollars of spend, but close rate takes longer because leads need time to book, attend and buy before you can count them." },
    ],
    related: ["/tools", "/tools/funnel-conversion-calculator", "/tools/roas-calculator", "/glossary/cost-per-lead", "/blog/how-to-reduce-cost-per-lead", "/blog/roofing-lead-generation-funnel-cost-per-lead-playbook", "/facebook-ads-agency"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/tools/roas-calculator",
    kind: "tool",
    tool: "roas",
    keyword: "roas calculator",
    title: "ROAS Calculator: Break-Even ROAS and Real Profit",
    description: "Free ROAS calculator. Enter ad spend, revenue and gross margin to get ROAS, break-even ROAS and profit after ad spend, with real client benchmarks.",
    eyebrow: "Free tool",
    h1: "ROAS calculator with break-even ROAS and profit",
    intro:
      "This <strong>ROAS calculator</strong> gives you return on ad spend, then answers the question ROAS alone cannot: are you making money? Add your gross margin and it returns break-even ROAS and profit after ad spend, so a 3x that loses money and a 2x that prints are no longer confused.",
    quick: {
      q: "How do you calculate ROAS?",
      a: "ROAS is revenue attributed to ads divided by ad spend. $42,000 of revenue on $10,000 of spend is a 4.2x ROAS. Break-even ROAS is 1 divided by gross margin, so a 40% margin needs 2.5x to cover ad spend. Above that line, every extra dollar of spend returns profit.",
    },
    sections: [
      {
        h2: "How to use the calculator",
        html: `<ol>
<li><strong>Ad spend:</strong> the total for the period across the campaigns you are judging.</li>
<li><strong>Revenue attributed to the ads:</strong> from your store, CRM or ad platform. If you rely on platform reporting, make sure <a href="/meta-conversions-api-setup">Conversions API</a> tracking is in place, since browser-only pixels miss sales.</li>
<li><strong>Gross margin:</strong> revenue minus product, fulfillment, shipping and payment costs, as a percentage.</li>
</ol>`,
      },
      {
        h2: "Worked example with the default numbers",
        html: `<p>The calculator opens with $10,000 of ad spend, $42,000 of attributed revenue and a 40% gross margin:</p>
<ul>
<li>ROAS: $42,000 ÷ $10,000 = <strong>4.2x</strong>, or 420%.</li>
<li>Gross profit from ad revenue: $42,000 × 40% = $16,800.</li>
<li>Profit after ad spend: $16,800 − $10,000 = <strong>$6,800</strong>.</li>
<li>Break-even ROAS: 1 ÷ 40% = 2.5x.</li>
</ul>
<p>Change the margin to 25% and the same 4.2x ROAS leaves only $500 of profit, because break-even rises to 4x. Margin decides how much ROAS you need.</p>`,
      },
      {
        h2: "How to read the results",
        html: `<p>Compare your ROAS with break-even ROAS, not with someone else's ROAS. If you are above break-even, you can usually scale spend and accept some ROAS decline. If you are below it, check attribution first, then the offer: an <a href="/glossary/order-bump">order bump</a> or upsell raises revenue per buyer without raising ad cost, which is how low-ticket funnels like our <a href="/scalelowticket">$847K front end</a> recovered 112% of ad spend on day zero.</p>`,
      },
      {
        h2: "ROAS benchmarks from our client work",
        html: `<p>Across our Shopify and DTC results, 4.2x to 5.1x ROAS is the common range, with $449,221 in 49 days at 4.2x and $2.3M at 11.6x at the top end. Lead generation and coaching numbers run higher because one deal is worth thousands: $388,000 of MVA revenue at 19.09x and $115,500 of coaching revenue at 52x. Low-ticket front ends often sit at 2.5x to 3.7x because the goal is to self-liquidate, not profit up front. See the <a href="/case-ecom">eCommerce case studies</a> for the full set.</p>`,
      },
      {
        h2: "What to fix when ROAS is bad",
        html: `<ul>
<li><strong>Tracking gaps:</strong> server-side events through <a href="/meta-conversions-api-setup">Meta CAPI</a> recovered 31% more events for our clients.</li>
<li><strong>Low revenue per buyer:</strong> add bumps and upsells with a <a href="/sales-funnel-agency">funnel rebuild</a>.</li>
<li><strong>Weak conversion:</strong> rewrite the page with the <a href="/templates/funnel-copy-template">funnel copy template</a>.</li>
</ul>`,
      },
    ],
    proof: {
      items: [
        { value: "4.2x", label: "ROAS on $449,221 of Shopify sales in 49 days", href: "/case-studies/shopify-store-449k-in-49-days-at-4-2x-roas" },
        { value: "11.6x", label: "ROAS on $2.3M of Shopify sales", href: "/case-studies/shopify-store-2-3m-in-sales-at-11-6x-roas" },
        { value: "19.09x", label: "ROAS on $20,324 of MVA ad spend", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "3.65x", label: "Low-ticket funnel: $69,652 in 8 days", href: "/case-studies/low-ticket-funnel-69652-in-8-days-at-3-65x" },
      ],
      more: { label: "See all eCommerce results", href: "/case-ecom" },
    },
    faqs: [
      { q: "What is a good ROAS?", a: "A good ROAS is one above your break-even ROAS with room to scale. For a 40% margin business that means comfortably above 2.5x. For a 70% margin service, anything above about 1.4x covers spend. Our Shopify clients commonly run 4.2x to 5.1x, but their margins set what that means in profit." },
      { q: "What is the difference between ROAS and ROI?", a: "ROAS divides revenue by ad spend only. ROI divides profit by total investment, including product cost, staff, software and the funnel build. ROAS is faster to measure and good for daily decisions, while ROI tells you whether the whole acquisition system makes money. This calculator bridges them with profit after ad spend." },
      { q: "Why does my ad platform ROAS differ from my store?", a: "Platforms use their own attribution windows and lose events to browser privacy settings and ad blockers. Your store counts every order but cannot tell which ad caused it. Server-side tracking narrows the gap. Use store revenue for profit decisions and platform ROAS to compare campaigns against each other." },
      { q: "Should I include returning customer revenue?", a: "Only if the ads drove that return purchase. For a clean read, calculate ROAS on new-customer revenue and track repeat revenue separately as lifetime value. Mixing them makes prospecting look better than it is and can hide a front end that is quietly losing money on every new buyer." },
      { q: "Can ROAS be too high?", a: "Yes, in practice. A very high ROAS on small spend often means you are under-spending and leaving profitable buyers to competitors. If you sit far above break-even, raise budget in steps of 20 to 30% and watch whether profit after ad spend keeps climbing, even as ROAS drifts down." },
    ],
    related: ["/tools", "/tools/funnel-conversion-calculator", "/tools/cost-per-lead-calculator", "/glossary/conversions-api", "/templates/funnel-kpi-dashboard", "/blog/low-ticket-self-liquidating-offer-funnel-847k-breakdown", "/compare/meta-pixel-vs-conversions-api", "/funnels-for/skincare-brands", "/funnels-for/fashion-brands"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/tools/no-show-cost-calculator",
    kind: "tool",
    tool: "no-show-cost",
    keyword: "no-show cost calculator",
    title: "No-Show Cost Calculator: Revenue Lost to Missed Calls",
    description: "Free no-show cost calculator. See revenue lost to missed sales calls each month and year, and how much a lower no-show rate recovers.",
    eyebrow: "Free tool",
    h1: "No-show cost calculator for sales calls and appointments",
    intro:
      "This <strong>no-show cost calculator</strong> puts a dollar figure on empty calendar slots. Enter calls booked, your current and target no-show rates, close rate and deal value, and it shows how many calls you miss, the revenue those calls would have produced, and how much you recover by closing the gap.",
    quick: {
      q: "How do you calculate the cost of no-shows?",
      a: "Multiply booked calls by your no-show rate to get missed calls, then multiply by close rate and deal value. With 120 calls, a 35% no-show rate, 20% close rate and $3,000 deals, no-shows cost $25,200 a month. Cutting no-shows to 12% recovers $16,560 of that monthly revenue.",
    },
    sections: [
      {
        h2: "How to use the calculator",
        html: `<ol>
<li><strong>Calls booked per month:</strong> every appointment on the calendar, including reschedules.</li>
<li><strong>Current no-show rate:</strong> missed calls divided by booked calls. Count late cancellations as no-shows.</li>
<li><strong>Target no-show rate:</strong> what you believe reminders and confirmation can reach.</li>
<li><strong>Close rate and deal value:</strong> from attended calls only.</li>
</ol>
<p>No-show rate is the inverse of <a href="/glossary/show-rate">show rate</a>: a 35% no-show rate is a 65% show rate.</p>`,
      },
      {
        h2: "Worked example with the default numbers",
        html: `<p>The calculator opens with 120 booked calls, a 35% no-show rate, a 12% target, a 20% close rate and a $3,000 deal:</p>
<ul>
<li>Missed calls: 120 × 35% = 42 per month.</li>
<li>Revenue lost: 42 × 20% × $3,000 = <strong>$25,200 a month</strong>, or $302,400 a year.</li>
<li>Extra attended calls at target: 120 × (35% − 12%) = 27.6, shown as 28.</li>
<li>Revenue recovered at target: 27.6 × 20% × $3,000 = <strong>$16,560 a month</strong>.</li>
</ul>
<p>No ad spend changes. Those calls were already paid for.</p>`,
      },
      {
        h2: "How to read the results",
        html: `<p>The recovered revenue figure is the budget ceiling for fixing no-shows. If reminders and an AI confirmation call cost a fraction of that each month, the decision is easy. Treat the lost-revenue figure as an upper bound: some no-shows would never have bought, so recovered calls may close slightly below your average rate.</p>`,
      },
      {
        h2: "Benchmarks from our client work",
        html: `<p>With three-channel reminders across SMS, email and voice, our clients reach show-up rates of up to 88%, which is a 12% no-show rate, the calculator's default target. Booking volume matters as much as attendance: one coaching client turned 174 booked appointments into $115,500, and a webinar funnel turned 140 appointments into $64,960. Read <a href="/blog/reduce-sales-call-no-show-rate-reminder-automation">how to reduce sales call no-shows</a> for the full reminder playbook.</p>`,
      },
      {
        h2: "What to fix when no-shows are high",
        html: `<ul>
<li><strong>No reminders:</strong> deploy the <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a> through <a href="/crm-automation">CRM automation</a>.</li>
<li><strong>Calls booked days out:</strong> book sooner with <a href="/speed-to-lead">speed-to-lead</a> follow-up so the call happens while intent is high.</li>
<li><strong>No human touch:</strong> an <a href="/ai-appointment-setter">AI appointment setter</a> can call to confirm and rebook missed slots automatically.</li>
</ul>`,
      },
    ],
    proof: {
      items: [
        { value: "$115,500", label: "Revenue from 174 coaching appointments", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "387", label: "MVA appointments booked", href: "/case-studies/mva-387-appointments-booked" },
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "$14,040", label: "Agency revenue from 180 appointments", href: "/case-studies/agency-14k-revenue-on-2824-ad-spend" },
      ],
      more: { label: "Browse all case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "What is a normal no-show rate for sales calls?", a: "It varies with how the call was booked and how far out. Calls booked from cold ads with no reminders often see a third or more missed. With three-channel reminders and a confirmation step, our clients reach show-up rates of up to 88%, so a 12% no-show rate is a realistic target." },
      { q: "Should I count reschedules as no-shows?", a: "Count a reschedule as attended only if the rescheduled call actually happens. A lead who reschedules twice and then disappears is a no-show. Track reschedules separately in your CRM so you can see whether your reminder sequence is rescuing calls or just pushing them back." },
      { q: "How fast do reminders reduce no-shows?", a: "Usually within the first week, because reminders affect calls already on the calendar. Set up a confirmation message at booking, a reminder the day before, another an hour before, and a missed-call follow-up. Measure the next 30 days of booked calls against the previous 30." },
      { q: "Does the calculator work for clinics and service appointments?", a: "Yes. For med spas, dental offices or home service estimates, enter appointments booked, your no-show rate, the share of attended appointments that buy, and average ticket. For clinics where every attended appointment is paid, set close rate to 100% and use the appointment value." },
      { q: "Is the lost revenue figure realistic?", a: "It is an upper bound. Some people who skip calls would not have bought anyway, so recovered calls often close a little below average. Even at half the calculated figure, most businesses find no-shows cost more each month than the reminder automation and confirmation calls needed to reduce them." },
    ],
    related: ["/tools", "/tools/funnel-conversion-calculator", "/tools/ai-voice-agent-roi-calculator", "/glossary/show-rate", "/templates/no-show-reminder-sequence", "/blog/reduce-sales-call-no-show-rate-reminder-automation", "/sales-funnel-audit"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/tools/ai-voice-agent-roi-calculator",
    kind: "tool",
    tool: "ai-voice-roi",
    keyword: "ai voice agent roi calculator",
    title: "AI Voice Agent ROI Calculator vs a Human Setter",
    description: "Free AI voice agent ROI calculator. Compare bookings and cost per booking for an AI caller against a human setter using your lead volume and rates.",
    eyebrow: "Free tool",
    h1: "AI voice agent ROI calculator",
    intro:
      "This <strong>AI voice agent ROI calculator</strong> compares two ways of working your leads: a human setter on salary and commission, and an AI voice agent that calls every lead within 60 seconds. It returns bookings, total cost and cost per booking for each, so you can see whether the gain comes from lower cost, more bookings, or both.",
    quick: {
      q: "Is an AI voice agent cheaper than a human appointment setter?",
      a: "Usually, per booking. With the default inputs, 600 leads a month, a human setter books 81 calls at $49.38 each, while an AI voice agent books 144 calls at $5.35 each. The bigger gain is volume: calling inside a minute reaches more leads, which adds 63 bookings a month.",
    },
    sections: [
      {
        h2: "How to use the calculator",
        html: `<ol>
<li><strong>New leads per month</strong> and the <strong>human setter cost</strong>, including salary, commission and tools.</li>
<li><strong>Human contact rate:</strong> share of leads your team actually speaks to today.</li>
<li><strong>AI contact rate:</strong> share an AI reaches by calling within 60 seconds and retrying. Our speed-to-lead deployments reach 84% inside the first minute.</li>
<li><strong>Booking rate:</strong> share of contacted leads that book. Keep it the same for both to isolate the effect of speed.</li>
<li><strong>AI minutes per lead, cost per minute and monthly build and maintenance.</strong></li>
</ol>
<p>New to the term? Read the <a href="/glossary/ai-voice-agent">AI voice agent</a> definition.</p>`,
      },
      {
        h2: "Worked example with the default numbers",
        html: `<p>The calculator opens with 600 leads, a $4,000 setter, 45% human contact, 80% AI contact, 30% booking, 3 AI minutes per lead at $0.15 and $500 a month for build and maintenance:</p>
<div class="table-wrap"><table><thead><tr><th></th><th>Human setter</th><th>AI voice agent</th></tr></thead><tbody>
<tr><td>Bookings</td><td>600 × 45% × 30% = 81</td><td>600 × 80% × 30% = 144</td></tr>
<tr><td>Monthly cost</td><td>$4,000</td><td>600 × 3 × $0.15 + $500 = $770</td></tr>
<tr><td>Cost per booking</td><td>$49.38</td><td>$5.35</td></tr>
</tbody></table></div>
<p>The AI books 63 extra calls a month for less than a fifth of the cost.</p>`,
      },
      {
        h2: "How to read the results",
        html: `<p>Look at extra bookings first, then cost per booking. Extra bookings come from contact rate, which is mostly speed. If your human team already calls inside a minute around the clock, the gap shrinks and the case rests on cost. Run the extra bookings through the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a> with your show and close rates to see revenue, not just calls.</p>`,
      },
      {
        h2: "Benchmarks from our deployments",
        html: `<p>AI calling runs about $0.10 to $0.25 per minute, which works out to roughly $3 to $9 per booked appointment against $40 to $120 from human setters. Across 60+ speed-to-lead deployments, median first contact was 38 seconds and lead-to-booking rose 2.4x on the same ads. Compare the trade-offs in <a href="/compare/ai-voice-agent-vs-human-setter">AI voice agent vs human setter</a>.</p>`,
      },
      {
        h2: "What to fix when the ROI is weak",
        html: `<ul>
<li><strong>Low booking rate:</strong> tighten the script with the <a href="/templates/ai-voice-agent-script">AI voice agent script template</a>.</li>
<li><strong>Low contact rate:</strong> verify phone numbers at opt-in and retry missed calls by SMS.</li>
<li><strong>Booked calls not showing:</strong> pair the agent with reminders from an <a href="/ai-appointment-setter">AI appointment setter</a> build.</li>
</ul>
<p>We build and maintain agents as part of our <a href="/ai-voice-agents">AI voice agent service</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "276+", label: "OTP-verified MVA calls in 5 days", href: "/case-studies/mva-276-otp-verified-calls-in-5-days" },
        { value: "387", label: "MVA appointments booked", href: "/case-studies/mva-387-appointments-booked" },
        { value: "337", label: "Home services appointments on $1,621 ad spend", href: "/case-studies/home-services-337-appointments-booked" },
        { value: "1,956", label: "HVAC appointments and $36,444 revenue", href: "/case-studies/hvac-36k-in-revenue" },
      ],
      more: { label: "See lead generation results", href: "/case-leadgen" },
    },
    faqs: [
      { q: "How much does an AI voice agent cost per minute?", a: "In our deployments, AI calling runs about $0.10 to $0.25 per minute depending on the voice, model and telephony provider. The calculator default is $0.15. Add a monthly figure for building, testing and maintaining the agent, because scripts and integrations need updates as offers and calendars change." },
      { q: "Will an AI voice agent replace my setters?", a: "It usually replaces the first call, not the whole team. The AI handles instant contact, qualification and booking around the clock, then hands warm or complex conversations to people. Many clients redeploy setters to confirmation calls, reactivation and closing, where human judgment earns more per hour." },
      { q: "Why is the AI contact rate higher than the human rate?", a: "Speed. An AI calls within seconds of the form, while the lead is still on their phone and thinking about you. Human teams call minutes or hours later and miss nights and weekends. Across our deployments, 84% of leads were reached inside the first minute." },
      { q: "Do I need to disclose that callers are talking to AI?", a: "Yes. Identify the agent as an AI assistant at the start of the call, get consent to call and text at opt-in, and honor opt-out requests immediately. Rules vary by state and country and change often, so confirm requirements with counsel before you launch outbound calling." },
      { q: "What booking rate should I assume?", a: "Use the booking rate your team gets today on contacted leads, and keep it the same for the AI to start. That isolates the effect of speed and coverage. After a few weeks of live calls, replace the AI figure with real data, which can land above or below your human rate." },
    ],
    related: ["/tools", "/tools/no-show-cost-calculator", "/ai-voice-agents", "/compare/ai-voice-agent-vs-human-setter", "/templates/ai-voice-agent-script", "/blog/ai-appointment-setter-voice-agent-cost-setup-results", "/ai-agents", "/ai-receptionist"],
    parent: HUB,
    updated: U,
  },
];
