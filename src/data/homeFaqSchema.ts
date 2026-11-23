/**
 * FAQPage structured data for the home page only.
 * Lives here (not in the root layout) so blog posts and case studies do not
 * emit a second, unrelated FAQPage block on every URL.
 */
export const HOME_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `https://www.funnelsthatprint.com/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an AI automation agency do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It builds systems that answer, qualify and book your leads without manual work: AI receptionists, AI appointment setters, CRM pipelines and follow-up sequences.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an AI receptionist and funnel build cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our builds start at $999. The complete suite with CRM, AI receptionist and automations is $1,999. Platform usage such as call minutes is paid to the platform.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a build take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most builds are live in 5 to 10 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use GoHighLevel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most of our builds run on GoHighLevel, connected to your calendar, phone and ad accounts.",
      },
    },
    {
      "@type": "Question",
      name: "What results have clients seen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Published examples include 387 MVA appointments at $19.62 each and 174 coaching appointments on $2,214 in ad spend. See 275+ documented results on the site.",
      },
    },
  ],
};
