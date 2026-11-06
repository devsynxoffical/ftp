import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoChildren, getSeoPage, linkSummary, linkTitle, type SeoPage } from "@/data/seo";
import { ORG_PUBLISHER, personSchema } from "@/data/schemaOrg";
import PageFaq from "@/components/PageFaq";
import RoboSection from "@/components/RoboSection";
import ToolSlot from "@/components/seo/ToolSlot";
import CopyButton from "@/components/seo/CopyButton";
import LogoTicker from "@/components/LogoTicker";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import BookingSection from "@/components/BookingSection";
import { whatsappHref, whatsappMessage } from "@/lib/whatsapp";

const BASE_URL = "https://www.funnelsthatprint.com";
const OG = "/img/og/funnels-that-print-og.jpg";

export function seoMetadata(path: string): Metadata {
  const p = getSeoPage(path);
  if (!p) return {};
  const url = `${BASE_URL}${path}`;
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      type: p.kind === "compare" || p.kind === "template" || p.kind === "glossary" ? "article" : "website",
      images: [{ url: OG, width: 1200, height: 630, alt: p.h1 }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [OG] },
  };
}

function schemaFor(p: SeoPage) {
  const url = `${BASE_URL}${p.path}`;
  const crumbs = [
    { name: "Home", item: BASE_URL },
    ...(p.parent.path !== "/" ? [{ name: p.parent.name, item: `${BASE_URL}${p.parent.path}` }] : []),
    { name: p.h1, item: url },
  ];
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
    },
  ];
  const webPage = { "@type": "WebPage", "@id": `${url}#webpage`, url, name: p.title, description: p.description, isPartOf: { "@id": `${BASE_URL}/#website` }, inLanguage: "en-US", dateModified: `${p.updated}T09:00:00+00:00` };

  if (p.kind === "service" || p.kind === "industry") {
    graph.push(webPage, {
      "@type": "Service",
      "@id": `${url}#service`,
      name: p.h1,
      serviceType: p.serviceType ?? p.keyword,
      description: p.description,
      url,
      provider: ORG_PUBLISHER,
      areaServed: ["US", "GB", "CA", "AU", "AE"],
      mainEntityOfPage: { "@id": `${url}#webpage` },
    });
  } else if (p.kind === "tool") {
    graph.push(webPage, {
      "@type": "WebApplication",
      "@id": `${url}#app`,
      name: p.h1,
      url,
      description: p.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any (runs in the browser)",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: ORG_PUBLISHER,
    });
  } else if (p.kind === "glossary") {
    graph.push(webPage, {
      "@type": "DefinedTerm",
      "@id": `${url}#term`,
      name: p.term ?? p.keyword,
      description: p.quick.a,
      url,
      inDefinedTermSet: { "@type": "DefinedTermSet", "@id": `${BASE_URL}/glossary#set`, name: "Sales Funnel Glossary", url: `${BASE_URL}/glossary` },
    });
  } else if (p.kind === "compare" || p.kind === "template") {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: p.title,
      description: p.description,
      image: [`${BASE_URL}${OG}`],
      datePublished: "2026-11-05T09:00:00+00:00",
      dateModified: `${p.updated}T09:00:00+00:00`,
      author: personSchema(p.kind === "compare" ? "rahul" : "gaurav"),
      publisher: ORG_PUBLISHER,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "en-US",
    });
  } else if (p.kind === "hub") {
    const kids = getSeoChildren(p.path);
    graph.push({
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      url,
      name: p.h1,
      description: p.description,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: ORG_PUBLISHER,
      ...(p.path === "/glossary"
        ? { mainEntity: { "@type": "DefinedTermSet", "@id": `${BASE_URL}/glossary#set`, name: "Sales Funnel Glossary", hasDefinedTerm: kids.map((k) => ({ "@id": `${BASE_URL}${k.path}#term` })) } }
        : { mainEntity: { "@type": "ItemList", numberOfItems: kids.length, itemListElement: kids.map((k, i) => ({ "@type": "ListItem", position: i + 1, url: `${BASE_URL}${k.path}`, name: k.h1 })) } }),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

const slugify = (t: string) =>
  t.toLowerCase().replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

/** Splits an H1 so its last two words get the site's orange italic accent. */
function accentH1(h1: string) {
  const w = h1.split(" ");
  if (w.length < 4) return <>{h1}</>;
  return (
    <>
      {w.slice(0, -2).join(" ")} <span className="it">{w.slice(-2).join(" ")}</span>
    </>
  );
}

const SELLS = new Set(["service", "industry"]);

export default function SeoPageView({ path }: { path: string }) {
  const p = getSeoPage(path);
  if (!p) notFound();
  // Hubs list every child page; a service page lists its industry variants.
  const kids = getSeoChildren(p.path);
  const related = p.related.filter((r) => linkTitle(r));
  const toc = p.sections.map((s) => ({ id: slugify(s.h2), title: s.h2 }));
  const sells = SELLS.has(p.kind) || p.path === "/services" || p.path === "/funnels-for";
  const waTopic = ["glossary", "tool", "template", "compare"].includes(p.kind) ? p.h1 : p.eyebrow;
  const wa = whatsappHref(whatsappMessage(p.path, waTopic));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFor(p)) }} />

      {/* Hero: copy on the left, the answer-first card on the right. */}
      <header className="sx-hero" data-wa-topic={waTopic}>
        <div className="box">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {p.parent.path !== "/" && (
              <>
                <span aria-hidden="true">/</span>
                <Link href={p.parent.path}>{p.parent.name}</Link>
              </>
            )}
          </nav>
          <div className="sx-hero-grid">
            <div className="sx-hero-copy">
              <div className="eyebrow mono">{p.eyebrow}</div>
              <h1 className="h1 d">{accentH1(p.h1)}</h1>
              <div className="lead seo-intro" dangerouslySetInnerHTML={{ __html: p.intro }} />
              <div className="seo-cta">
                <a className="btn o" href="#book">
                  Book a strategy call <i>&#8599;</i>
                </a>
                <a className="btn wa" href={wa} target="_blank" rel="noopener">
                  WhatsApp us <i>&#8599;</i>
                </a>
              </div>
              <ul className="sx-trust" aria-label="Why Funnels That Print">
                <li><b>275+</b> documented results</li>
                <li><b>5-10</b> day builds</li>
                <li><b>$999</b> builds from</li>
              </ul>
            </div>
            <aside className="hx-qa sx-qa" aria-labelledby="seo-quick-h">
              <span className="hx-tag">Quick answer</span>
              <h2 id="seo-quick-h">{p.quick.q}</h2>
              <p>{p.quick.a}</p>
              {p.proof && p.proof.items.length > 1 && (
                <div className="hx-qa-stats">
                  {p.proof.items.slice(0, 3).map((it) => (
                    <div key={it.href + it.label}>
                      <b>{it.value}</b>
                      <span>{it.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </header>

      <LogoTicker />

      {p.tool && (
        <div className="box sx-tool">
          <ToolSlot id={p.tool} />
        </div>
      )}

      {kids.length > 0 && (
        <section className="sec box sx-kids" aria-labelledby="sx-kids-h">
          <div className="fx-head">
            <div>
              <div className="eyebrow mono">{p.kind === "hub" ? "Browse" : "By industry"}</div>
              <h2 id="sx-kids-h" className="h2 d">
                {p.kind === "hub" ? <>Every page in <span className="it">{p.eyebrow.toLowerCase()}.</span></> : <>Built for <span className="it">your industry.</span></>}
              </h2>
            </div>
          </div>
          <ul className="sx-cards">
            {kids.map((k, n) => (
              <li key={k.path}>
                <Link href={k.path}>
                  <span className="n mono">{String(n + 1).padStart(2, "0")}</span>
                  <b>{k.h1}</b>
                  <span className="d">{k.description}</span>
                  <i aria-hidden="true">&#8599;</i>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Main content: sticky table of contents + numbered section cards. */}
      <div className="box sx-body">
        <aside className="sx-toc" aria-label="On this page">
          <span className="mono">On this page</span>
          <ol>
            {toc.map((t, n) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>
                  <span>{String(n + 1).padStart(2, "0")}</span>
                  {t.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq">
                <span>{String(toc.length + 1).padStart(2, "0")}</span>
                Questions, answered
              </a>
            </li>
          </ol>
          <a className="btn o sx-toc-cta" href="#book">
            Book a call <i>&#8599;</i>
          </a>
        </aside>
        <div className="sx-main">
          {p.sections.map((s, n) => (
            <section key={s.h2} id={toc[n].id} className="sx-sec">
              <span className="sx-n mono">{String(n + 1).padStart(2, "0")}</span>
              <h2>{s.h2}</h2>
              <div className="seo-prose" dangerouslySetInnerHTML={{ __html: s.html }} />
            </section>
          ))}

          {p.template && (
            <section className="seo-template" aria-labelledby="seo-template-h">
              <div className="seo-template-head">
                <h2 id="seo-template-h">The template</h2>
                <div className="seo-template-actions">
                  <CopyButton text={p.template.body} />
                  <a className="btn g" href={`/templates/files/${p.template.file}`} download>
                    Download .txt <i>&#8599;</i>
                  </a>
                </div>
              </div>
              <pre>{p.template.body}</pre>
            </section>
          )}
        </div>
      </div>

      {p.proof && p.proof.items.length > 0 && (
        <section className="sx-proof" aria-labelledby="seo-proof-h">
          <div className="box">
            <div className="fx-head">
              <div>
                <div className="eyebrow mono">Proof</div>
                <h2 id="seo-proof-h" className="h2 d">
                  {p.proof.heading ?? (
                    <>
                      Real numbers from <span className="it">client campaigns.</span>
                    </>
                  )}
                </h2>
              </div>
              {p.proof.more && (
                <Link className="btn w" href={p.proof.more.href}>
                  {p.proof.more.label} <i>&#8599;</i>
                </Link>
              )}
            </div>
            <ul>
              {p.proof.items.map((it) => (
                <li key={it.href + it.label}>
                  <Link href={it.href}>
                    <b>{it.value}</b>
                    <span>{it.label}</span>
                    <i aria-hidden="true">&#8599;</i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {sells && <ProcessSection />}
      {sells && <PricingSection />}

      <BookingSection path={p.path} topic={waTopic} />

      {related.length > 0 && (
        <section className="sec box sx-related" aria-labelledby="seo-related-h">
          <div className="fx-head">
            <div>
              <div className="eyebrow mono">Keep reading</div>
              <h2 id="seo-related-h" className="h2 d">
                Related <span className="it">guides.</span>
              </h2>
            </div>
          </div>
          <ul className="sx-cards">
            {related.map((r, n) => (
              <li key={r}>
                <Link href={r}>
                  <span className="n mono">{String(n + 1).padStart(2, "0")}</span>
                  <b>{linkTitle(r)}</b>
                  {linkSummary(r) && <span className="d">{linkSummary(r)}</span>}
                  <i aria-hidden="true">&#8599;</i>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <PageFaq faqs={p.faqs} path={p.path} eyebrow={p.eyebrow} />
      <RoboSection />
    </>
  );
}
