import { BLOG_POSTS } from "@/data/blogPosts";
import { CASE_INDUSTRIES } from "@/data/caseIndustries";
import FooterClient, { type FooterLink } from "./FooterClient";

// Server component: works out the footer link lists from the data files and
// hands only those links to the client footer.
export default function Footer() {
  const latestGuides: FooterLink[] = [...BLOG_POSTS]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 4)
    .map((post) => ({ href: `/blog/${post.slug}`, label: post.metaTitle }));
  const industries: FooterLink[] = CASE_INDUSTRIES.map((i) => ({
    href: `/case-studies/${i.slug}`,
    label: i.hubTitle.replace(/ Case Studies$/, "").replace(/ Lead Generation$/, ""),
  }));
  return <FooterClient latestGuides={latestGuides} industries={industries} />;
}
