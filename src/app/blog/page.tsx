"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";
import RoboSection from "@/components/RoboSection";
import UFSquareMarquee from "@/components/UFSquareMarquee";
import RealClientResults from "@/components/RealClientResults";

const CATEGORIES = [
  "All Articles",
  "AI & Automation",
  "Funnel Architecture",
];

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  const filteredPosts =
    activeCategory === "All Articles"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubmitted(true);
      setNewsletterEmail("");
    }
  };

  return (
    <>
      <div className="box">
        {/* Header Hero */}
        <header className="cshero" style={{ paddingBottom: "30px" }}>
          <div className="eyebrow">
            <span className="tag">
              Engineering Insights &middot; 2026 Direct-Response Frameworks
            </span>
          </div>
          <h1 className="h1 d">
            The Performance <span className="it">Journal</span>
          </h1>
          <p className="lead" style={{ maxWidth: "54ch" }}>
            Deep-dive architectures, real-world revenue telemetry, and tactical
            blueprints for scaling high-ticket consulting, services, and DTC
            funnels with AI.
          </p>
        </header>

        {/* Featured Article Card */}
        {featuredPost && activeCategory === "All Articles" && (
          <section className="blog-featured-wrap in">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="blog-featured-card"
            >
              <div className="blog-featured-media">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="blog-featured-badge">Featured Masterclass</span>
              </div>
              <div className="blog-featured-content">
                <div className="blog-meta-row">
                  <span className="tag">{featuredPost.category}</span>
                  <span className="mono">{featuredPost.readTime}</span>
                  <span className="mono">&middot;</span>
                  <span className="mono">{featuredPost.publishedAt}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.headline}</p>

                {/* Metrics Highlight Pills */}
                <div className="blog-metrics-row">
                  {featuredPost.metrics.map((m, idx) => (
                    <div key={idx} className="blog-metric-pill">
                      <b>{m.value}</b>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="blog-author-row">
                  <div className="blog-author-info">
                    <span className="blog-author-name">
                      {featuredPost.author.name}
                    </span>
                    <span className="mono">{featuredPost.author.role}</span>
                  </div>
                  <span className="btn o" style={{ height: "42px" }}>
                    Read Architecture <i>&#8599;</i>
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Category Filter Tabs */}
        <div className="blog-filter-bar in">
          <div className="blog-filter-pills" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`blog-filter-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="mono" style={{ alignSelf: "center" }}>
            Showing {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {/* Blog Post Grid */}
        <section className="blog-grid in">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-media">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="blog-card-cat">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="mono">{post.readTime}</span>
                    <span className="mono">&middot;</span>
                    <span className="mono">{post.publishedAt}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="blog-card-foot">
                    <span className="blog-card-cta">
                      Read full breakdown <i>&#8599;</i>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>

        {/* Newsletter & Funnel Audit Callout */}
        <section className="blog-newsletter-box in">
          <div className="blog-nl-left">
            <span className="tag" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
              Private Dispatches
            </span>
            <h2 className="d h2" style={{ color: "#fff", marginTop: "16px" }}>
              Get our proprietary <span className="it">funnel splits</span> &amp; AI scripts.
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.8)", marginTop: "12px" }}>
              Every two weeks, we break down our latest $1M+ customer acquisition
              funnels, voice AI prompt scripts, and direct-response split tests.
              Zero spam. Pure direct-response telemetry.
            </p>
          </div>
          <div className="blog-nl-right">
            {submitted ? (
              <div className="blog-nl-success">
                <span className="tag" style={{ background: "var(--or)", color: "#fff" }}>
                  ✓ You are subscribed
                </span>
                <p style={{ marginTop: "12px", color: "#fff", fontSize: "15px" }}>
                  Welcome to the inner circle. Check your inbox for our 2026 AI
                  Voice Script Playbook.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="blog-nl-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="blog-nl-input"
                />
                <button type="submit" className="btn o" style={{ width: "100%", justifyContent: "center" }}>
                  Join 14,800+ Operators <i>&#8599;</i>
                </button>
                <span className="mono" style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", textAlign: "center", display: "block", marginTop: "10px" }}>
                  We respect your privacy. Unsubscribe with 1 click anytime.
                </span>
              </form>
            )}
          </div>
        </section>
      </div>

      <RealClientResults />
      <UFSquareMarquee />
      <RoboSection />
    </>
  );
}
