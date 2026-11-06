import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AUTHORS, type Author } from "@/data/authors";
import { BLOG_POSTS } from "@/data/blogPosts";
import { ORG_PUBLISHER } from "@/data/schemaOrg";
import RoboSection from "@/components/RoboSection";

const BASE_URL = "https://www.funnelsthatprint.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

const bySlug = (slug: string): Author | undefined => Object.values(AUTHORS).find((a) => a.slug === slug);

export function generateStaticParams() {
  return Object.values(AUTHORS).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const a = bySlug(slug);
  if (!a) return {};
  const role = a.role.split(",")[0];
  const title = `${a.name}, ${role} at Funnels That Print`;
  const description = a.metaDescription;
  const url = `${BASE_URL}/team/${a.slug}`;
  return {
    title: title.length > 60 ? { absolute: `${a.name}, ${role}` } : { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "profile", images: [{ url: a.avatar, alt: a.name }] },
    twitter: { card: "summary", title, description, images: [a.avatar] },
  };
}

/** Author profile page: who wrote the journal, what they know, and what they published. */
export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const a = bySlug(slug);
  if (!a) notFound();
  const url = `${BASE_URL}/team/${a.slug}`;
  const posts = BLOG_POSTS.filter((p) => p.author.id === a.id).sort((x, y) => y.publishedAt.localeCompare(x.publishedAt));
  const lastUpdated = posts.reduce((m, p) => (p.updatedAt > m ? p.updatedAt : m), "2026-01-01");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Team", item: `${BASE_URL}/#team` },
          { "@type": "ListItem", position: 3, name: a.name, item: url },
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: `${a.name} | Funnels That Print`,
        dateCreated: "2026-10-30T09:00:00+00:00",
        dateModified: `${lastUpdated}T12:00:00+00:00`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        mainEntity: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person-${a.id}`,
          name: a.name,
          jobTitle: a.role,
          description: a.bio,
          image: `${BASE_URL}${a.avatar}`,
          url,
          knowsAbout: a.expertise,
          worksFor: ORG_PUBLISHER,
          ...(a.sameAs.length ? { sameAs: a.sameAs } : {}),
          agentInteractionStatistic: {
            "@type": "InteractionCounter",
            interactionType: "https://schema.org/WriteAction",
            userInteractionCount: posts.length,
          },
        },
        hasPart: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.metaTitle,
          url: `${BASE_URL}/blog/${p.slug}`,
          datePublished: `${p.publishedAt}T08:00:00+00:00`,
          image: `${BASE_URL}${p.image}`,
          author: { "@id": `${BASE_URL}/#person-${a.id}` },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="box">
        <section className="kc author-page">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#team">Team</Link>
          </nav>
          <div className="author-head">
            <Image src={a.avatar} alt={a.name} width={160} height={160} className="author-pic" priority />
            <div>
              <div className="eyebrow mono">Author</div>
              <h1 className="h2 d">{a.name}</h1>
              <p className="author-role">{a.role}</p>
              <p className="lead">{a.bio}</p>
              {a.sameAs.length > 0 && (
                <p className="author-links">
                  {a.sameAs.map((s) => (
                    <a key={s} href={s} target="_blank" rel="noopener noreferrer me">
                      {s.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} <i>&#8599;</i>
                    </a>
                  ))}
                </p>
              )}
            </div>
          </div>

          <section className="case-card author-expertise">
            <h2>Areas of expertise</h2>
            <ul>
              {a.expertise.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>

          <section className="case-guides" aria-labelledby="author-posts-h">
            <h2 id="author-posts-h">Articles by {a.name.split(" ")[0]} ({posts.length})</h2>
            <ul>
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`}>
                    <b>{p.metaTitle}</b>
                    <span>
                      {p.category} &middot; {p.readTime} &middot; Updated {p.updatedAt}
                    </span>
                    <span>{p.metaDescription}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="kcta">
            <h2>Work with {a.name.split(" ")[0]}&rsquo;s team</h2>
            <Link className="btn" href="/book-a-call">
              Book a strategy call <i>&#8599;</i>
            </Link>
          </div>
        </section>
      </div>
      <RoboSection />
    </>
  );
}
