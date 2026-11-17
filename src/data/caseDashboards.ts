/**
 * Figures read from the dashboards shown in each case study video (Shopify
 * analytics and Meta Ads Manager screen recordings). Only numbers that are
 * clearly legible in the recording are listed; nothing is estimated.
 * Keyed by the post id. Add cases here as their videos are reviewed.
 */
export interface CaseDashboard {
  /** What the recording shows, e.g. "Shopify analytics, August 1 to 31, 2022". */
  source: string;
  rows: { label: string; value: string }[];
  /** One plain sentence that reads the numbers for the visitor. */
  note: string;
  /** Date the video frames were checked. */
  reviewed: string;
}

export const CASE_DASHBOARDS: Record<string, CaseDashboard> = {
  "Ch-08rOh7Ly": {
    source: "Shopify analytics, August 1 to 31, 2022",
    rows: [
      { label: "Gross orders", value: "$174,215.68" },
      { label: "Returns", value: "-$12,660.02" },
      { label: "Total sales", value: "$161,555.66" },
      { label: "Orders", value: "3,040" },
      { label: "Sales on August 31", value: "$5,011.15" },
    ],
    note: "Returns took about 7.3% off gross orders, and total sales averaged about $53 per order across the month.",
    reviewed: "2026-11-15",
  },
  Cm_skHlDG4T: {
    source: "Shopify analytics for January 1 to December 31, 2022, and the Meta Ads Manager totals shown in the same video",
    rows: [
      { label: "Total sales (Shopify, 2022)", value: "$2,328,777.45" },
      { label: "Amount spent (Meta Ads Manager)", value: "$200,455.46" },
    ],
    note: "Total sales divided by ad spend is about 11.6x, the return on ad spend quoted for this case.",
    reviewed: "2026-11-15",
  },
  ClNmKjfuASL: {
    source: "Shopify analytics recorded on November 21, 2022 at 11:11 AM, month to date",
    rows: [
      { label: "Gross orders, November 1 to 21", value: "$293,778.19" },
      { label: "Returns", value: "-$14,976.89" },
      { label: "Total sales, November 1 to 21", value: "$278,801.30" },
      { label: "Live view that morning: sales", value: "$7,734.13" },
      { label: "Live view that morning: orders", value: "83" },
      { label: "Live view that morning: sessions", value: "582" },
    ],
    note: "This is a snapshot taken nine days before the end of November, ahead of Black Friday and Cyber Monday; returns were about 5.1% of gross orders at that point.",
    reviewed: "2026-11-15",
  },
  CpSA2DYIUeU: {
    source: "Shopify analytics for February 1 to 28, 2023, recorded on March 1, 2023",
    rows: [
      { label: "Gross orders, February 2023", value: "$242,610.59" },
      { label: "Returns", value: "-$20,482.52" },
      { label: "Total sales, February 2023", value: "$222,128.07" },
      { label: "Orders, February 2023", value: "3,156" },
      { label: "Total sales on March 1, 2023", value: "$7,381.61" },
      { label: "Orders on March 1, 2023", value: "89" },
    ],
    note: "February total sales averaged about $70 per order, and returns took about 8.4% off gross orders.",
    reviewed: "2026-11-16",
  },
  CsVfgXouvaF: {
    source: "Shopify analytics for April 1 to 30, 2023",
    rows: [
      { label: "Gross orders, April 2023", value: "$168,442.87" },
      { label: "Returns", value: "-$2,269.43" },
      { label: "Total sales, April 2023", value: "$166,173.44" },
      { label: "Orders, April 2023", value: "2,205" },
    ],
    note: "Total sales averaged about $75 per order, and returns were about 1.3% of gross orders.",
    reviewed: "2026-11-16",
  },
  C8BoEiWvQPX: {
    source: "Meta Ads Manager, ads view for May 1 to 31, 2024 (top ad in the table)",
    rows: [
      { label: "Amount spent", value: "$32,763.62" },
      { label: "Purchase conversion value", value: "$121,714.75" },
      { label: "Purchases", value: "786" },
      { label: "Purchase ROAS", value: "3.71x" },
    ],
    note: "This single ad returned $3.71 in purchase value for every $1 of spend over the month; the other ads in the table are smaller.",
    reviewed: "2026-11-16",
  },
  DbCVqzFhiLU: {
    source: "Meta Ads Manager table totals shown in the video (amounts in euros)",
    rows: [
      { label: "Amount spent", value: "\u20ac59,254.77" },
      { label: "Purchase conversion value", value: "\u20ac126,168.44" },
      { label: "Purchases", value: "1,523" },
      { label: "Average purchase ROAS", value: "2.13x" },
    ],
    note: "Purchase value divided by spend is about 2.13x, and the average cost per purchase works out to about \u20ac38.91.",
    reviewed: "2026-11-16",
  },
  DCpIoi0hNhx: {
    source: "Shopify analytics, November 1 to 21, 2024 (mobile app screenshot)",
    rows: [
      { label: "Total sales", value: "$185,936.50" },
      { label: "Total orders", value: "2,241" },
      { label: "Conversion rate", value: "4.22%" },
      { label: "Change in sales vs the previous period", value: "+33%" },
      { label: "Change in orders vs the previous period", value: "+25%" },
    ],
    note: "Sales averaged about $83 per order over the 21 days. The profit margin in the headline comes from the client's own figures and is not shown on this screen.",
    reviewed: "2026-11-17",
  },
  DGSmcZRBic3: {
    source: "Meta Ads Manager, ads view with the date set to February 20, 2025 (one day)",
    rows: [
      { label: "Amount spent", value: "$5,310.59" },
      { label: "Purchase conversion value", value: "$19,167.92" },
      { label: "Purchases", value: "116" },
      { label: "Average purchase ROAS", value: "3.61x" },
      { label: "Top ad: spend and purchase value", value: "$4,128.89 and $15,908.12 (3.85x, 100 purchases)" },
    ],
    note: "This is a single day of spend. One ad produced about 83% of the day's purchase value, and the average cost per purchase was about $45.78.",
    reviewed: "2026-11-17",
  },
  DExlLMQS3cs: {
    source: "Meta Ads Manager, ad set view with the date set to January 13, 2025 (one day)",
    rows: [
      { label: "Amount spent", value: "$9,238.53" },
      { label: "Purchase conversion value", value: "$37,042.12" },
      { label: "Purchases", value: "253" },
      { label: "Average purchase ROAS", value: "4.01x" },
    ],
    note: "This screenshot shows one day inside the 21-day period in the headline. That day returned about $4.01 per $1 of spend at roughly $36.52 per purchase.",
    reviewed: "2026-11-17",
  },
  DEW_V11BhkT: {
    source: "Meta Ads Manager with the date set to January 2, 2025 (one day)",
    rows: [
      { label: "Amount spent", value: "$2,210.17" },
      { label: "Purchase conversion value", value: "$12,494.60" },
      { label: "Checkouts initiated", value: "110" },
      { label: "Adds of payment info", value: "30" },
    ],
    note: "For that one day, purchase value was about 5.65 times ad spend. The headline figure covers the wider scaling period, not this single day.",
    reviewed: "2026-11-17",
  },
  DZXMWaeEgLe: {
    source: "Meta Ads Manager, 10 ad sets across 10 campaigns, June 1 to 7, 2026",
    rows: [
      { label: "Amount spent", value: "$20,232.68" },
      { label: "Purchase conversion value", value: "$80,227.81" },
      { label: "Purchases", value: "568" },
      { label: "Cost per purchase", value: "$35.62" },
      { label: "Checkouts initiated", value: "2,579" },
    ],
    note: "Over the 7 days, purchase value averaged about $11,461 a day, and value divided by spend is about 3.97x.",
    reviewed: "2026-11-17",
  },
  DMd4wfWSKeL: {
    source: "Meta Ads Manager, the same account shown for three date ranges in July 2025",
    rows: [
      { label: "July 1 to 23, 2025: amount spent", value: "$25,183.12" },
      { label: "July 1 to 23, 2025: purchase value", value: "$67,394.86" },
      { label: "July 1 to 23, 2025: average ROAS", value: "2.68x" },
      { label: "July 17 to 23, 2025: spend and purchase value", value: "$2,497.80 and $11,068.76" },
      { label: "July 23, 2025: spend and purchase value", value: "$525.30 and $2,197.47 (4.18x)" },
    ],
    note: "Return on spend rose from 2.68x across the month to about 4.4x in the last 7 days, so the most recent week performed better than the month as a whole.",
    reviewed: "2026-11-17",
  },
};
