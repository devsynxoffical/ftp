import { BLOG_POSTS } from "@/data/blogPosts";

const BASE_URL = "https://www.funnelsthatprint.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * RSS 2.0 feed of the journal. A second discovery channel for Google, Bing
 * and feed readers; also submitted to Search Console as a sitemap.
 */
export function GET() {
  const posts = [...BLOG_POSTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
  const lastBuild = new Date(
    posts.reduce((m, p) => (p.updatedAt > m ? p.updatedAt : m), "2000-01-01")
  ).toUTCString();

  const items = posts
    .map((p) => {
      const url = `${BASE_URL}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.metaTitle)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.publishedAt}T08:00:00Z`).toUTCString()}</pubDate>
      <dc:creator>${esc(p.author.name)}</dc:creator>
      <category>${esc(p.category)}</category>
      <description>${esc(p.metaDescription)}</description>
      <content:encoded><![CDATA[<p>${esc(p.excerpt)}</p><ul>${p.keyTakeaways
        .map((t) => `<li>${esc(t)}</li>`)
        .join("")}</ul><p><a href="${url}">Read the full guide</a></p>]]></content:encoded>
      <enclosure url="${BASE_URL}${p.image}" type="image/jpeg" length="0" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Funnels That Print Journal</title>
    <link>${BASE_URL}/blog</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Guides on AI sales funnels, speed-to-lead automation, GoHighLevel workflows, Meta Conversions API tracking and high-ticket funnel strategy.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <image>
      <url>${BASE_URL}/img/og/funnels-that-print-og.jpg</url>
      <title>Funnels That Print Journal</title>
      <link>${BASE_URL}/blog</link>
    </image>
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
