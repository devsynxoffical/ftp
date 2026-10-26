import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getAllBlogSlugs,
  BlogPost,
} from "@/data/blogPosts";
import RoboSection from "@/components/RoboSection";
import RealClientResults from "@/components/RealClientResults";

const BASE_URL = "https://www.funnelsthatprint.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Funnels That Print",
      description: "The requested performance marketing article could not be found.",
    };
  }

  const url = `${BASE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | Funnels That Print`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  // Structured Data Schema Graph (BlogPosting + BreadcrumbList + FAQPage)
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Journal",
            item: `${BASE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        headline: post.title,
        alternativeHeadline: post.headline,
        description: post.excerpt,
        image: `${BASE_URL}${post.image}`,
        datePublished: `${post.publishedAt}T08:00:00+00:00`,
        dateModified: `${post.updatedAt}T12:00:00+00:00`,
        author: {
          "@type": "Organization",
          name: post.author.name,
          url: BASE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "Funnels That Print",
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/img/logos/logo-01.webp`,
          },
        },
        keywords: post.keywords.join(", "),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": postUrl,
        },
      },
      ...(post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div className="box">
        <article className="post-wrap">
          {/* Back Navigation */}
          <div className="post-nav-back in">
            <Link className="kback" href="/blog">
              &larr; Back to Journal
            </Link>
          </div>

          {/* Header Section */}
          <header className="post-header in">
            <div className="post-meta-top">
              <span className="tag">{post.category}</span>
              <span className="mono">{post.readTime}</span>
              <span className="mono">&middot;</span>
              <span className="mono">Updated {post.updatedAt}</span>
            </div>

            <h1 className="post-h1 d">{post.title}</h1>
            <p className="post-subdeck lead">{post.headline}</p>

            {/* Author Byline */}
            <div className="post-author-byline">
              <div className="post-author-pic">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={44}
                  height={44}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
              <div>
                <b>{post.author.name}</b>
                <span className="mono">{post.author.role}</span>
              </div>
            </div>
          </header>

          {/* Metrics Highlight Banner */}
          {post.metrics && post.metrics.length > 0 && (
            <div className="post-metrics-banner in">
              {post.metrics.map((m, idx) => (
                <div key={idx} className="post-metric-col">
                  <span className="post-metric-val">{m.value}</span>
                  <span className="post-metric-lbl">{m.label}</span>
                  {m.sub && <span className="mono">{m.sub}</span>}
                </div>
              ))}
            </div>
          )}

          {/* Hero Featured Visual */}
          <div className="post-hero-image-wrap in">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Two-Column Reader Layout */}
          <div className="post-layout-grid in">
            {/* Main Content Body */}
            <div className="post-content-col">
              <div
                className="post-prose"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              {/* In-Article Strategy CTA Card */}
              <div className="post-cta-banner">
                <span className="tag">Turnkey Execution</span>
                <h3>Want this autonomous AI funnel built for your business?</h3>
                <p>
                  We engineer high-converting sales funnels, CRM speed-to-lead
                  automations, and 24/7 AI calling agents in 5 to 10 business
                  days. 275+ verified client proofs.
                </p>
                <div className="post-cta-actions">
                  <Link className="btn o" href="/contact">
                    Book a Funnel Strategy Call <i>&#8599;</i>
                  </Link>
                  <Link className="btn g" href="/case-studies">
                    View Verified Case Studies <i>&#8599;</i>
                  </Link>
                </div>
              </div>

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <section id="faq" className="post-faq-section">
                  <h2>Frequently Asked Questions</h2>
                  <div className="post-faq-list">
                    {post.faqs.map((faq, idx) => (
                      <div key={idx} className="post-faq-item">
                        <h4>{faq.question}</h4>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Author Bio Box */}
              <div className="post-author-box">
                <div className="post-author-box-pic">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={72}
                    height={72}
                    style={{ objectFit: "cover", borderRadius: "18px" }}
                  />
                </div>
                <div>
                  <span className="tag">Written By</span>
                  <h4>{post.author.name}</h4>
                  <p>
                    Direct-response funnel engineers, AI telephony architects,
                    and conversion optimization specialists at Funnels That
                    Print. Responsible for over $28M in verified client pipeline
                    revenue.
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="post-sidebar-col">
              <div className="post-sidebar-sticky">
                {post.toc && post.toc.length > 0 && (
                  <div className="post-toc-card">
                    <h4>Table of Contents</h4>
                    <nav className="post-toc-list">
                      {post.toc.map((item) => (
                        <a key={item.id} href={`#${item.id}`} className="post-toc-link">
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="post-sidebar-cta">
                  <span className="mono">Ready to scale?</span>
                  <b>Build Your Custom Funnel</b>
                  <p>
                    Turn cold traffic into qualified calls with our turnkey
                    acquisition architecture.
                  </p>
                  <Link className="btn o" href="/contact" style={{ width: "100%", justifyContent: "center" }}>
                    Get Strategy Call <i>&#8599;</i>
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Carousel / Grid */}
          {otherPosts.length > 0 && (
            <section className="post-related-section in">
              <div className="head" style={{ marginBottom: "28px" }}>
                <div>
                  <span className="tag">Continue Reading</span>
                  <h3 className="h3 d" style={{ marginTop: "12px" }}>
                    More Architectural <span className="it">Dispatches</span>
                  </h3>
                </div>
                <Link className="btn g lead" href="/blog">
                  View all articles <i>&#8599;</i>
                </Link>
              </div>

              <div className="blog-grid" style={{ marginTop: 0 }}>
                {otherPosts.map((related) => (
                  <article key={related.slug} className="blog-card">
                    <Link href={`/blog/${related.slug}`} className="blog-card-link">
                      <div className="blog-card-media">
                        <Image
                          src={related.image}
                          alt={related.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />
                        <span className="blog-card-cat">{related.category}</span>
                      </div>
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span className="mono">{related.readTime}</span>
                          <span className="mono">&middot;</span>
                          <span className="mono">{related.publishedAt}</span>
                        </div>
                        <h3>{related.title}</h3>
                        <p>{related.excerpt}</p>
                        <div className="blog-card-foot">
                          <span className="blog-card-cta">
                            Read breakdown <i>&#8599;</i>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      <RealClientResults />
      <RoboSection />
    </>
  );
}
