/**
 * Visible FAQ content for case study and hub pages. Rendered by PageFaq,
 * which also emits matching FAQPage structured data. Keep the visible text
 * and the schema identical (they come from the same object).
 */
export interface PageFaqItem {
  q: string;
  a: string;
}

export const PAGE_FAQS: Record<string, PageFaqItem[]> = {
  milliondollarcasestudy: [
    {
      q: "What funnel generated the $1.52M result?",
      a: "A high-ticket consulting offer sold through an institutional-grade VSL and application funnel, with dynamic qualification filters placed before the sales call. The $1,520,000 was collected over 19 months from cold paid traffic. The filters kept unqualified prospects off the calendar, so closers spent their time on buyers who matched the offer's budget and situation.",
    },
    {
      q: "What follow-up automation was used?",
      a: "Multi-touch email and SMS follow-up triggered the moment a lead applied, plus a reminder sequence before each booked call. The reminder stack lifted show-up rates from 62% to 88.4%. Applicants who did not book received further follow-up, so interested prospects who hesitated on their first visit still had a path to a call.",
    },
    {
      q: "How was ad tracking set up for this funnel?",
      a: "Meta Conversions API with offline conversion events for qualified calls and closed deals, so the ad algorithm optimized for buyers rather than form fills. Cost per booked call fell from $280 to $112. Sending downstream outcomes back to Meta is what let the campaign keep improving as spend increased instead of getting worse.",
    },
    {
      q: "Can the same stack be built for my offer?",
      a: "Yes, if you sell a high-ticket service, coaching or consulting offer through a sales call. Builds take 5 to 10 business days. Book a strategy call and we will map the funnel, automation and tracking to your offer, using this case as the blueprint and adjusting the qualification questions to your buyers.",
    },
    {
      q: "How much does a high-ticket funnel like this cost to build?",
      a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. A stack like this one corresponds to the complete suite. Ad spend is separate, and there is no revenue share on what the funnel sells.",
    },
  ],
  scalelowticket: [
    {
      q: "What is a self-liquidating offer funnel?",
      a: "A funnel that sells a low-priced front-end product, here $27 with a $17 order bump, so front-end sales cover the ad spend while building a list of buyers for higher-ticket backend offers. Because acquisition pays for itself, the business can scale ad spend without waiting months for backend revenue to arrive.",
    },
    {
      q: "How much of the $847,307 came from the front end?",
      a: "The front end recovered 112% of ad spend on day zero, but most of the collected revenue came from the backend ascension sequence sold to the buyer list. The front end's job was to acquire buyers at break-even or better; the email and SMS sequences that followed turned those buyers into the bulk of the $847,307.",
    },
    {
      q: "What average order value does an SLO funnel need?",
      a: "Average order value has to exceed cost per buyer. This funnel ran at $68.40 AOV, driven by the order bump and a one-click upsell after checkout. With a $27 front-end price, the bump and upsell more than doubled what each buyer spent, which is what allowed the front end to self-liquidate.",
    },
    {
      q: "Is a low-ticket funnel right for my business?",
      a: "It fits info products, coaching, software and eCommerce offers that have a backend to sell. For high-ticket local services, an application funnel with AI lead qualification usually performs better. A good test: if buyers of a $7 to $97 product would naturally want your higher-priced offer next, a low-ticket front end can work.",
    },
    {
      q: "What does a low ticket funnel agency do?",
      a: "A low ticket funnel agency builds the full front-end system: the offer, sales page, checkout, order bump, one-click upsell, buyer email and SMS sequences and purchase tracking. Funnels That Print builds that stack in 5 to 10 business days for a one-time fee of $999, $1,499 or $1,999, with no revenue share.",
    },
    {
      q: "Can you build a self-liquidating offer funnel for my business?",
      a: "Yes. As an SLO funnel builder we plan the front-end product, price, order bump and upsell, then build the sales page, checkout, buyer follow-up and purchase tracking, usually in 5 to 10 business days from $999. We model average order value against your expected cost per buyer before launch, so you know what the front end must do to cover ad spend.",
    },
  ],
  "case-studies": [
    {
      q: "How many case studies are listed here?",
      a: "275+ verified client results since 2019: 125+ lead generation funnels and 126+ eCommerce and DTC campaigns, each with real screenshots and numbers. Cases are grouped into industry hubs such as roofing, MVA, mortgage, coaching and Shopify, so you can jump straight to results from businesses similar to yours.",
    },
    {
      q: "Which industries do the case studies cover?",
      a: "Roofing, solar, HVAC, mortgage, medspa, dental, legal, coaching and consulting, real estate, local trades, and DTC brands in beauty, apparel, supplements and fitness. Low-ticket info products, agencies and SaaS offers are covered too. Each industry hub summarizes typical cost per lead or ROAS and links to every case in that niche.",
    },
    {
      q: "Are the results verified?",
      a: "Each case shows ad account or CRM screenshots with cost per lead, booked calls, return on ad spend or collected revenue as reported in the client's own platforms. We publish the figures as recorded rather than averaging them, so ranges like $4.27 to $24 per roofing lead reflect real campaigns in different markets.",
    },
    {
      q: "How do I get similar results for my business?",
      a: "Book a strategy call. We take the closest case to your offer, map its funnel, automation and tracking stack to your business, and build it in 5 to 10 business days. Results depend on your offer, market and budget, so we use the closest documented cases to set realistic targets before launch.",
    },
    {
      q: "How much does a funnel build cost?",
      a: "Builds are a one-time fee rather than a retainer: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and runs through your own accounts, which you keep.",
    },
    {
      q: "Which case studies are the biggest results?",
      a: "Two have their own full breakdowns: a high-ticket consulting funnel that collected $1.52M from cold traffic, and a low-ticket funnel that collected $847,307 with a $27 offer and a $17 order bump. In eCommerce, the largest documented scale is $2,300,000 at 11.6x return on ad spend.",
    },
  ],
  "case-leadgen": [
    {
      q: "What counts as a lead generation case study?",
      a: "A campaign where the goal was leads or booked calls rather than direct online sales. Each case reports cost per lead, cost per booked call, contact rate and ad spend from the client's ad account and CRM, and where clients shared them, appointments, signed jobs or closed revenue are included as well.",
    },
    {
      q: "What cost per lead is typical in these results?",
      a: "It varies by industry. Home services and mortgage leads are usually cheaper than legal or high-ticket coaching leads. Documented examples run from $4.27 per roofing lead and $4.31 per mortgage lead to $40 for some B2B campaigns. Every case shows its actual cost per lead and spend rather than an average.",
    },
    {
      q: "What makes these lead gen funnels convert?",
      a: "Interactive multi-step front ends, speed-to-lead follow-up inside 60 seconds, AI voice qualification, 3-channel appointment reminders and server-side tracking so Meta optimizes for booked calls. Across 60+ deployments, median first contact is 38 seconds, 84% of leads are reached inside the first minute and lead-to-booking improves 2.4x.",
    },
    {
      q: "Do you have results in my industry?",
      a: "We have documented results in roofing, solar, HVAC, mortgage, medspa, dental, legal, coaching, consulting, real estate and local trades. Use the filters on this page to find your niche, or open the industry hubs, which summarize cost per lead, appointments and revenue for each market and link to every case.",
    },
    {
      q: "Are the leads exclusive?",
      a: "Yes. Every lead comes from a funnel and ad account owned by the client, so it is never resold to competitors the way marketplace leads often are. Multi-step qualification and OTP phone verification filter out fake numbers and poor-fit requests before a lead reaches the sales team or AI setter.",
    },
    {
      q: "How long does a lead gen funnel take to build and what does it cost?",
      a: "Builds go live in 5 to 10 business days for a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and paid from your own account.",
    },
  ],
  "case-ecom": [
    {
      q: "What do the eCommerce case studies show?",
      a: "Return on ad spend, average order value, cost per purchase and scaling results for DTC brands on Meta ads, with screenshots from the ad account and store. Cases range from small tests of a few thousand dollars to stores scaling past $1,000,000, including Q4 and Black Friday pushes.",
    },
    {
      q: "Which eCommerce niches are included?",
      a: "Beauty and skincare, apparel, supplements, fitness equipment, home goods and direct-response dropshipping stores. Each niche has its own hub page summarizing typical ROAS and the creative and offer structure that worked, so you can compare results from brands with similar margins, price points and buying cycles to yours.",
    },
    {
      q: "What return on ad spend is realistic?",
      a: "It depends on margin and average order value. Direct-response landing pages, order bumps and post-purchase upsells typically lift AOV enough to make a 2x to 4x ROAS profitable. Most documented scaling cases here run between roughly 4x and 5x, with a top result of 11.6x on a $2,300,000 scale.",
    },
    {
      q: "Do you build the store or only the funnel?",
      a: "We build the funnel pages, checkout flow, upsells and post-purchase follow-up, connect tracking through Meta CAPI, and integrate with Shopify and other store platforms. Your existing store, products and fulfillment stay in place. In our setups, server-side tracking recovered 31% more purchase events than the browser pixel alone.",
    },
    {
      q: "How much does an eCommerce funnel build cost?",
      a: "Builds are a one-time fee: $999 for design only, $1,499 for design, copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Ad spend is separate and stays in your own Meta account, so budget and data remain under your control.",
    },
    {
      q: "How fast can an eCommerce funnel launch?",
      a: "Landing pages, offer structure, upsells and server-side tracking are live in 5 to 10 business days. Scaling speed then depends on creative testing. Some documented launches moved quickly, such as $105,000 in 5 days and $126,000 in 14 days, but most brands need a few weeks of testing before budgets increase.",
    },
  ],
};

/** Quick answer under the hero of the main hub pages (SEO plan). 40-60 words. */
export const PAGE_QUICK: Record<string, PageFaqItem> = {
  "case-studies": {
    q: "What results do Funnels That Print case studies show?",
    a: "Funnels That Print has documented 275+ client results since 2019 across lead generation and eCommerce. Highlights include roofing leads from $4.27, 8,810 MVA leads at $7.61, a $1.52M high-ticket consulting funnel, an $847,307 low-ticket funnel and a $2,300,000 DTC scale at 11.6x ROAS. Every figure comes from client ad accounts or CRMs.",
  },
  "case-leadgen": {
    q: "What cost per lead do these lead generation funnels achieve?",
    a: "Documented lead generation campaigns range from about $4 to $40 per exclusive lead depending on industry. Examples include roofing at $4.27, mortgage at $4.31, 8,810 MVA leads at $7.61 and B2B leads at $40. Speed-to-lead follow-up reaches leads in a median 38 seconds, and each case shows its real ad spend.",
  },
  "case-ecom": {
    q: "What ROAS do these eCommerce brands achieve?",
    a: "Most documented eCommerce and DTC cases scale at roughly 4x to 5x ROAS on Meta. Highlights include $2,300,000 scaled at 11.6x, $1,000,000+ at 4.6x, $449,221 in 49 days, $340,000 for a skincare brand at 5.4x and $192,000 per month for a supplement brand at 4.7x, with screenshots from each ad account.",
  },
  scalelowticket: {
    q: "What does a low ticket funnel agency build?",
    a: "A low ticket funnel agency builds the offer, sales page, checkout, order bump, upsell and buyer follow-up that turn cold traffic into profitable buyers. In this case, a $27 offer with a $17 bump recovered 112% of day-zero ad spend, and the backend sequence brought total collected revenue to $847,307.",
  },
};
