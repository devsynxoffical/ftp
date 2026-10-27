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
      name: "What does Funnels That Print build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build conversion-focused funnels and the supporting systems around them, including landing pages, high-ticket funnels, VSLs, low-ticket funnels, bridge funnels, application flows, automations, CRM workflows and AI calling.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build the funnel from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can handle the strategy, structure, copy, design, development, integrations and automation required for the build.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with my existing funnel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you already have a funnel, we can improve, rebuild or connect it to the systems you need.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build low-ticket funnels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can build the complete customer journey, including sales pages, checkout, upsells, downsells and follow-up sequences.",
      },
    },
    {
      "@type": "Question",
      name: "What is a bridge funnel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A bridge funnel prepares a prospect before they reach the main offer. It is particularly useful when you are sending cold traffic toward an offer that requires additional education or trust.",
      },
    },
    {
      "@type": "Question",
      name: "What does the AI Calling Agent do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can engage leads automatically, have an initial conversation, ask qualifying questions, handle common questions and help move suitable prospects toward booking an appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you set up my automations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can build workflows for lead nurturing, email, SMS, appointment reminders, no-shows, reactivation, CRM movement and other parts of your sales process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you integrate with CRMs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can connect the funnel with your CRM, calendar, communication tools, tracking and other required platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need paid advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your funnel can work with paid traffic, organic traffic, email, referrals or other acquisition channels.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a funnel take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take approximately 5 to 10 business days, depending on the scope, number of pages, integrations and automation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A funnel's performance depends on several factors, including the offer, market, traffic, sales process and execution. What we guarantee is a high-converting, professional build built around direct response best practices.",
      },
    },
  ],
};
