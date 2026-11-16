import { BLOG_POSTS } from "@/data/blogPosts";
import BlogIndexSchema from "@/components/BlogIndexSchema";
import BlogIndexClient, { type BlogCard } from "@/components/BlogIndexClient";

// Server component: passes only the card fields to the interactive index, so
// the full text of every article is not sent to the browser.
export default function BlogIndexPage() {
  const posts: BlogCard[] = BLOG_POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
    headline: p.headline,
    excerpt: p.excerpt,
    image: p.image,
    imageAlt: p.imageAlt,
    category: p.category,
    readTime: p.readTime,
    publishedAt: p.publishedAt,
    author: p.author,
    metrics: p.metrics,
  }));
  return (
    <>
      <BlogIndexSchema />
      <BlogIndexClient posts={posts} />
    </>
  );
}
