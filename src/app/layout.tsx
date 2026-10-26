import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Funnels That Print — High-Converting Funnels & Acquisition Systems",
    template: "%s | Funnels That Print",
  },
  description:
    "We build high-converting funnels, landing pages, CRM automations, and AI calling agents that turn traffic into qualified sales appointments. Built since 2019.",
  keywords: [
    "Funnels That Print",
    "High-Ticket Funnels",
    "Conversion Funnels",
    "VSL Funnels",
    "Sales Funnel Agency",
    "CRM Automation",
    "AI Calling Agent",
    "Conversion Rate Optimization",
    "Lead Generation Funnels",
    "Low-Ticket Funnels",
    "Direct Response Funnel Design",
    "ClickFunnels",
    "GoHighLevel Agency",
  ],
  authors: [{ name: "Funnels That Print Team", url: BASE_URL }],
  creator: "Funnels That Print",
  publisher: "Funnels That Print",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Funnels That Print — High-Converting Funnels & Acquisition Systems",
    description:
      "Turn traffic into qualified sales calls with high-converting funnels, CRM automations, and AI calling agents built around your offer, audience, and sales process.",
    url: BASE_URL,
    siteName: "Funnels That Print",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "Funnels That Print — Funnel Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funnels That Print — High-Converting Funnels & Acquisition Systems",
    description:
      "Turn traffic into qualified sales calls with bespoke funnels, CRM automations, and AI calling agents.",
    images: ["/img/x/office.webp"],
    creator: "@funnelsthatprint",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "eiVneK8fO6fm24Qej8CRqkYHetGG1ZSQfG6oIxjf0UI",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ff5a1f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Funnels That Print",
      alternateName: ["FTP", "FunnelsThatPrint"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.svg`,
        width: "512",
        height: "512",
      },
      image: `${BASE_URL}/img/x/office.webp`,
      description:
        "Funnel automation and direct-response engineering agency since 2019. We build high-converting sales funnels, CRM automations, and AI voice calling systems.",
      foundingDate: "2019",
      sameAs: [
        "https://www.linkedin.com/company/funnelsthatprint",
        "https://instagram.com/funnelsthatprint",
        "https://x.com/funnelsthatprint",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales & client strategy",
        email: "info@funnelsthatprint.com",
        availableLanguage: ["English"],
        url: `${BASE_URL}/contact`,
      },
      knowsAbout: [
        "Sales Funnel Architecture",
        "Conversion Rate Optimization",
        "High-Ticket Client Acquisition",
        "Low-Ticket Self-Liquidating Offer (SLO) Funnels",
        "CRM Automation & Workflows",
        "AI Calling Agents & Conversational AI",
        "Meta Conversion API (CAPI)",
        "Direct Response Copywriting",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.98",
        reviewCount: "275",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Funnel Systems & Automations",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Turnkey High-Ticket Acquisition Funnels",
              description:
                "Engineered VSL funnels, dynamic application filters, and qualification pipelines that turn cold traffic into high-ticket appointments.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Low-Ticket Front Door Scaling Systems",
              description:
                "Self-liquidating acquisition funnels with frictionless checkout, order bumps, and post-purchase backend upsells.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack CRM & Multi-Touch Automation",
              description:
                "Speed-to-lead nurturing, SMS/email sequences, calendar sync, and no-show recovery flows built in GoHighLevel and major CRMs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "24/7 Autonomous AI Voice Calling Agents",
              description:
                "Conversational voice agents that call new leads within 60 seconds, qualify prospects, and book calendar meetings automatically.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Funnels That Print",
      description:
        "Turn traffic into qualified sales calls with high-converting funnels, CRM automations, and AI calling agents.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/case-studies?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Funnels That Print — Acquisition & Automation Agency",
      url: BASE_URL,
      image: `${BASE_URL}/img/x/office.webp`,
      priceRange: "$$$",
      description:
        "Custom conversion journeys built around your offer, audience, and sales process. From first click to booked call.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Global",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
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
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM Context"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Loader />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
