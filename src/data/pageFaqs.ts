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
      a: "A high-ticket consulting offer sold through an institutional-grade VSL and application funnel, with dynamic qualification filters placed before the sales call. The $1,520,000 was collected over 19 months from cold paid traffic.",
    },
    {
      q: "What follow-up automation was used?",
      a: "Multi-touch email and SMS follow-up triggered the moment a lead applied, plus a reminder sequence before each booked call. The reminder stack lifted show-up rates from 62% to 88.4%.",
    },
    {
      q: "How was ad tracking set up for this funnel?",
      a: "Meta Conversions API with offline conversion events for qualified calls and closed deals, so the ad algorithm optimized for buyers rather than form fills. Cost per booked call fell from $280 to $112.",
    },
    {
      q: "Can the same stack be built for my offer?",
      a: "Yes, if you sell a high-ticket service, coaching or consulting offer through a sales call. Builds take 5 to 10 business days. Book a strategy call and we will map the funnel, automation and tracking to your offer.",
    },
  ],
  scalelowticket: [
    {
      q: "What is a self-liquidating offer funnel?",
      a: "A funnel that sells a low-priced front-end product, here $27 with a $17 order bump, so front-end sales cover the ad spend while building a list of buyers for higher-ticket backend offers.",
    },
    {
      q: "How much of the $847,307 came from the front end?",
      a: "The front end recovered 112% of ad spend on day zero, but most of the collected revenue came from the backend ascension sequence sold to the buyer list.",
    },
    {
      q: "What average order value does an SLO funnel need?",
      a: "Average order value has to exceed cost per buyer. This funnel ran at $68.40 AOV, driven by the order bump and a one-click upsell after checkout.",
    },
    {
      q: "Is a low-ticket funnel right for my business?",
      a: "It fits info products, coaching, software and eCommerce offers that have a backend to sell. For high-ticket local services, an application funnel with AI lead qualification usually performs better.",
    },
  ],
  "case-studies": [
    {
      q: "How many case studies are listed here?",
      a: "275+ verified client results: 125+ lead generation funnels and 126+ eCommerce and DTC campaigns, each with real screenshots and numbers.",
    },
    {
      q: "Which industries do the case studies cover?",
      a: "Roofing, solar, HVAC, mortgage, medspa, dental, legal, coaching and consulting, real estate, local trades, and DTC brands in beauty, apparel, supplements and fitness.",
    },
    {
      q: "Are the results verified?",
      a: "Each case shows ad account or CRM screenshots with cost per lead, booked calls, return on ad spend or collected revenue as reported in the client's own platforms.",
    },
    {
      q: "How do I get similar results for my business?",
      a: "Book a strategy call. We take the closest case to your offer, map its funnel, automation and tracking stack to your business, and build it in 5 to 10 business days.",
    },
  ],
  "case-leadgen": [
    {
      q: "What counts as a lead generation case study?",
      a: "A campaign where the goal was leads or booked calls. Each case reports cost per lead, cost per booked call, contact rate and ad spend from the client's ad account and CRM.",
    },
    {
      q: "What cost per lead is typical in these results?",
      a: "It varies by industry. Home services and mortgage leads are usually cheaper than legal or high-ticket coaching leads. Every case shows its actual cost per lead and spend rather than an average.",
    },
    {
      q: "What makes these lead gen funnels convert?",
      a: "Interactive multi-step front ends, speed-to-lead follow-up inside 60 seconds, AI voice qualification, 3-channel appointment reminders and server-side tracking so Meta optimizes for booked calls.",
    },
    {
      q: "Do you have results in my industry?",
      a: "We have documented results in roofing, solar, HVAC, mortgage, medspa, dental, legal, coaching, consulting, real estate and local trades. Use the filters on this page to find your niche.",
    },
  ],
  "case-ecom": [
    {
      q: "What do the eCommerce case studies show?",
      a: "Return on ad spend, average order value, cost per purchase and scaling results for DTC brands on Meta ads, with screenshots from the ad account and store.",
    },
    {
      q: "Which eCommerce niches are included?",
      a: "Beauty and skincare, apparel, supplements, fitness equipment, home goods and direct-response dropshipping stores.",
    },
    {
      q: "What return on ad spend is realistic?",
      a: "It depends on margin and average order value. Direct-response landing pages, order bumps and post-purchase upsells typically lift AOV enough to make a 2x to 4x ROAS profitable.",
    },
    {
      q: "Do you build the store or only the funnel?",
      a: "We build the funnel pages, checkout flow, upsells and post-purchase follow-up, connect tracking through Meta CAPI, and integrate with Shopify and other store platforms.",
    },
  ],
};
