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
};
