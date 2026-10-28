import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";

interface JournalPreviewProps {
  /** Hand-picked slugs to show, in order. Falls back to the newest posts. */
  slugs?: string[];
  limit?: number;
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: string;
  id?: string;
}

/**
 * Reusable "from the journal" block used across the site for internal
 * linking: home page, case study pages and case study hubs all point into
 * the blog with contextual, keyword-bearing anchor text.
 */
export default function JournalPreview({
  slugs,
  limit = 3,
  eyebrow = "From the journal",
  title = (
    <>
      Playbooks behind the <span className="it">results</span>.
    </>
  ),
  lead = "The frameworks we use on every build: AI qualification, speed-to-lead automation, server-side tracking and funnel architecture.",
  id = "journal",
}: JournalPreviewProps) {
  const picked: BlogPost[] = (slugs ?? [])
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p));
  const fill = [...BLOG_POSTS]
    .filter((p) => !picked.some((q) => q.slug === p.slug))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const posts = [...picked, ...fill].slice(0, limit);

  if (!posts.length) return null;

  return (
    <section className="sec box journal-preview" id={id} aria-label="Articles from the journal">
      <div className="head">
        <div>
          <div className="eyebrow mono">{eyebrow}</div>
          <h2 className="h2 d">{title}</h2>
        </div>
        <p className="lead" style={{ maxWidth: "40ch" }}>{lead}</p>
      </div>

      <div className="blog-grid journal-grid">
        {posts.map((post) => (
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
                <h3>{post.metaTitle}</h3>
                <p>{post.metaDescription}</p>
                <div className="blog-card-foot">
                  <span className="blog-card-cta">
                    Read the guide <i>&#8599;</i>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="journal-all">
        <Link className="btn g" href="/blog">
          All articles on AI sales funnels &amp; automation <i>&#8599;</i>
        </Link>
      </div>
    </section>
  );
}
