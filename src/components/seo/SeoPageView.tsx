import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoChildren, getSeoPage, linkSummary, linkTitle, type SeoPage } from "@/data/seo";
import { ORG_PUBLISHER, personSchema } from "@/data/schemaOrg";
import PageFaq from "@/components/PageFaq";
import RoboSection from "@/components/RoboSection";
import ToolSlot from "@/components/seo/ToolSlot";
import CopyButton from "@/components/seo/CopyButton";

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

export default function SeoPageView({ path }: { path: string }) {
  const p = getSeoPage(path);
  if (!p) notFound();
  const kids = p.kind === "hub" ? getSeoChildren(p.path) : [];
  const related = p.related.filter((r) => linkTitle(r));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFor(p)) }} />
      <div className="box">
        <article className="kc seo-page">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {p.parent.path !== "/" && (
              <>
                <span aria-hidden="true">/</span>
                <Link href={p.parent.path}>{p.parent.name}</Link>
              </>
            )}
          </nav>

          <header className="seo-hero">
            <div className="eyebrow mono">{p.eyebrow}</div>
            <h1 className="h1 d">{p.h1}</h1>
            <div className="lead seo-intro" dangerouslySetInnerHTML={{ __html: p.intro }} />
            <div className="seo-cta">
              <Link className="btn o" href="/contact">
                Book a strategy call <i>&#8599;</i>
              </Link>
              <Link className="btn g" href="/case-studies">
                See 275+ client results <i>&#8599;</i>
              </Link>
            </div>
          </header>

          <section className="seo-quick" aria-labelledby="seo-quick-h">
            <span className="tag">Quick answer</span>
            <h2 id="seo-quick-h">{p.quick.q}</h2>
            <p>{p.quick.a}</p>
          </section>

          {p.tool && <ToolSlot id={p.tool} />}

          {kids.length > 0 && (
            <section className="seo-kids" aria-label={`${p.h1}: all pages`}>
              <ul>
                {kids.map((k) => (
                  <li key={k.path}>
                    <Link href={k.path}>
                      <b>{k.h1}</b>
                      <span>{k.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="seo-body">
            {p.sections.map((s) => (
              <section key={s.h2}>
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

          {p.proof && p.proof.items.length > 0 && (
            <section className="seo-proof" aria-labelledby="seo-proof-h">
              <h2 id="seo-proof-h">{p.proof.heading ?? "Proof from client campaigns"}</h2>
              <ul>
                {p.proof.items.map((it) => (
                  <li key={it.href + it.label}>
                    <Link href={it.href}>
                      <b>{it.value}</b>
                      <span>{it.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {p.proof.more && (
                <p className="seo-proof-more">
                  <Link href={p.proof.more.href}>
                    {p.proof.more.label} <i>&#8599;</i>
                  </Link>
                </p>
              )}
            </section>
          )}

          {related.length > 0 && (
            <section className="seo-related" aria-labelledby="seo-related-h">
              <h2 id="seo-related-h">Keep reading</h2>
              <ul>
                {related.map((r) => (
                  <li key={r}>
                    <Link href={r}>
                      <b>{linkTitle(r)}</b>
                      {linkSummary(r) && <span>{linkSummary(r)}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </div>
      <PageFaq faqs={p.faqs} path={p.path} eyebrow={p.eyebrow} />
      <RoboSection />
    </>
  );
}
