/**
 * "Quick answer" block shown directly under a page hero (SEO plan): the page's
 * main question and a 40-60 word answer an answer engine can quote verbatim.
 */
export default function QuickAnswer({ q, a, id = "quick-h", className = "" }: { q: string; a: string; id?: string; className?: string }) {
  return (
    <section className={`seo-quick ${className}`.trim()} aria-labelledby={id}>
      <span className="tag">Quick answer</span>
      <h2 id={id}>{q}</h2>
      <p>{a}</p>
    </section>
  );
}
