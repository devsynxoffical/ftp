import type { PageFaqItem } from "@/data/pageFaqs";

const BASE_URL = "https://www.funnelsthatprint.com";

interface PageFaqProps {
  faqs: PageFaqItem[];
  /** Path of the page, e.g. "/case-studies". Used for the FAQPage @id. */
  path: string;
  eyebrow?: string;
  title?: React.ReactNode;
  id?: string;
}

/**
 * Visible FAQ block plus matching FAQPage structured data. Answer-engine
 * friendly: short question headings followed by direct, self-contained
 * answers that read correctly when quoted out of context.
 */
export default function PageFaq({
  faqs,
  path,
  eyebrow = "Questions",
  title = (
    <>
      Frequently asked <span className="it">questions</span>.
    </>
  ),
  id = "faq",
}: PageFaqProps) {
  if (!faqs.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}${path}#${id}`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="sec box page-faq" id={id} aria-label="Frequently asked questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="head">
        <div>
          <div className="eyebrow mono">{eyebrow}</div>
          <h2 className="h2 d">{title}</h2>
        </div>
      </div>
      <div className="page-faq-list">
        {faqs.map((f) => (
          <div key={f.q} className="page-faq-item">
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
