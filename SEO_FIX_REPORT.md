# SEO / AEO / GEO fix report: funnelsthatprint.com

Started 2026-11-13 from `CLAUDE_CODE_SEO_AEO_GEO_PROMPT.md`. Phases run so far: 0 (baseline) and 1 (crawl access). Everything below is measured, not estimated.

## CONFIG

Filled from the codebase (`src/data/brand.ts`, `src/app/layout.tsx`) and earlier owner input:

| Field | Value | Status |
| --- | --- | --- |
| DOMAIN | https://www.funnelsthatprint.com | Confirmed (single canonical host) |
| BRAND_NAME | Funnels That Print | Confirmed |
| LEGAL_ENTITY + ADDRESS | Dubai, AE (city only in schema) | **MISSING: legal entity name and full street address** |
| FOUNDER / AUTHOR | Gaurav Kapoor (founder), Rahul Kapoor; author pages /team/gaurav-kapoor, /team/rahul-kapoor | **MISSING: LinkedIn URLs** |
| FOUNDED_YEAR | 2019 | Confirmed in site copy |
| NICHE + ICP | Sales funnels, GoHighLevel automation, AI voice agents, Meta CAPI for businesses selling through booked calls or checkouts | From site copy |
| CORE OFFER + PRICE | Builds $999 / $1,499 / $1,999 one-time | Confirmed in site copy |
| PRIMARY CONVERSION | /book-a-call (Google Calendar booking) + WhatsApp | Confirmed |
| STACK + HOST | Next.js 16 on Vercel | Confirmed |
| SOCIAL / sameAs | None live (placeholder links removed Nov 7) | **MISSING: real LinkedIn company, YouTube, Instagram, Facebook, Clutch URLs** |
| SISTER SITES | contractorleads.us, qualifiedleadsx.com, rankempire.us (sitewide footer links) | **DECISION NEEDED (Phase 4.6)** |
| TOP 10 MONEY KEYWORDS | From Search Console: sales funnel agency, done-for-you sales funnel, gohighlevel agency, hire gohighlevel expert, ai appointment setter, speed to lead automation, meta conversions api setup, facebook ads agency, low ticket funnel agency, med spa funnel | Proposed, confirm |
| TOP 10 BUYER QUESTIONS | Not supplied | Proposed from GSC/PAA, confirm |

Per the prompt, phases that need the missing values (6 entity facts, 7 Organization address/sameAs, 4.6 sister-site links, 5 merges) wait for the owner.

## Phase 0: baseline (2026-11-13)

Script: `scripts/seo-audit.mjs` (read-only). Run against the local production build of the deployed commit; output in `audit/baseline.json` and `audit/baseline.csv`.

| Check | Result |
| --- | --- |
| URLs audited (sitemaps + nav/footer links) | 394 |
| Sitemaps | index + 5 children: core 26, industries 26, locations 7, content 69, case-studies 266 |
| robots.txt / llms.txt / llms-full.txt / feed.xml | all 200; llms.txt 1,281 words; llms-full.txt 37 KB |
| Non-200 URLs | 0 |
| Redirect chains | 0 |
| Not self-canonical | 0 |
| noindex pages | 0 |
| Pages without exactly one H1 | 0 |
| Duplicate titles | 0 |
| Titles over 60 chars | 0 (82 are under 50) |
| Meta descriptions outside 140-158 | 152 (143 short, 9 long) |
| JSON-LD parse errors | 0 |
| Pages without BreadcrumbList | 1 (`/`, expected for the home page) |
| Images without alt | 0 |
| Images with empty alt and no aria-hidden on the tag | 4,472 (decorative logo marquee inside an aria-hidden container; correct) |
| Pages missing OG or Twitter tags | 0 |
| Orphan pages / pages with under 3 links in | 0 / 0 |
| Pages under 600 words of main content | 54 (52 case studies, /book-a-call, 1 core) |
| Average response (local build) | 67 ms |

### Near-duplicate scores (5-word shingles, Jaccard, main content)

| Section | Pages | Average | Pairs over 0.35 |
| --- | --- | --- | --- |
| core | 28 | 0.110 | 0 |
| industries | 23 | 0.159 | 0 |
| locations | 7 | 0.150 | 0 |
| blog | 30 | 0.057 | 0 |
| compare / tools / templates / glossary | 8 / 6 / 9 / 16 | under 0.08 | 0 |
| case-studies | 266 | 0.127 | **4,048** |

No section average is above 0.35, but 245 of 266 case pages have at least one twin above 0.35 and 43 above 0.6, concentrated in eCommerce (`shopify-store-*` 51, `dtc-brand-*` 42) and low-ticket (24). These are the same pages Search Console reports as "Discovered, currently not indexed".

Proposed decisions for the 37 pairs above 0.6: `audit/programmatic_decisions.csv`. Possible duplicates of the same campaign (owner must confirm before any 301):

- `shopify-store-162k-in-q4-at-4-7x-oct-2024` and `shopify-store-162k-in-q4-at-4-7x-roas` (0.87)
- `dtc-brand-11k-day-in-sales-at-4-2x-roas`, `-jul-2022` and `-nov-2023` (0.62 to 0.77; dates differ, so they may be separate campaigns)

### Top problems (ranked)

1. Templated eCommerce case-study copy (4,048 similar pairs) keeps those pages out of Google's index.
2. Domain authority: about 17 inbound links seen by Bing; competitors outrank on authority, not content.
3. No sameAs profiles and no street address in Organization schema (entity signals for AI search).
4. Sitewide footer links to three sister sites (link-network pattern).
5. 52 case studies under 600 words of main content.
6. 143 meta descriptions under 140 characters.
7. GA4 data not readable by reporting (Analytics Data API disabled in the Cloud project).

## Phase 1: crawl access (2026-11-13)

Tested live from an external server: top 20 URLs x 13 user agents (Chrome, Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot).

| Check | Result |
| --- | --- |
| HTTP status for every bot | 200 on all 260 requests |
| Main content identical to Chrome | Yes, 0 pages differ by more than 15 words |
| robots.txt | Allows all search and AI bots; disallows only /api/; references the sitemap index on the canonical host |
| Canonical host redirects | https non-www, trailing slash and legacy /case URLs: 1 hop (308) to the canonical URL. http://funnelsthatprint.com: 2 hops (Vercel upgrades to https first) |
| Server-rendered content | Main text, headings, FAQs and links are in the initial HTML (checked without JavaScript) |

No code change needed in Phase 1. Note: Vercel uses 308 (permanent) rather than 301; search engines treat both as permanent.

## MANUAL ACTIONS FOR OWNER

1. Send: legal entity name, full street address, LinkedIn URLs for Gaurav and Rahul, and the real company profiles (LinkedIn page, YouTube, Instagram, Facebook, Clutch) to use as sameAs.
2. Decide on the footer "Partner sites" links to contractorleads.us, qualifiedleadsx.com and rankempire.us (prompt recommends removing sitewide links; keep at most one contextual link on /about, nofollow if they target the same buyers).
3. Confirm whether the two groups of possible duplicate case studies above are the same campaigns.
4. Google Cloud project 351359628625: enable the Google Analytics Data API and Admin API; add the Search Console service account as Viewer on the GA4 property; in GA4 mark `generate_lead`, `whatsapp_click` and `booking_click` as key events.

## UNVERIFIED CLAIMS

- `lead-gen-501-leads-at-40-cpl`: $40 vs $15.65 cost per lead (excluded from benchmarks).
- UK skincare case: EUR 118K vs $118K.
- `med-spa-74k-revenue-on-10k-ad-spend`: 303 clients vs 453 appointments.
