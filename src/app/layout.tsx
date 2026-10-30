import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { AUTHORS } from "@/data/authors";

const BASE_URL = "https://www.funnelsthatprint.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sales Funnel Agency: AI Funnels, CRM Automation & AI Calling",
    template: "%s | Funnels That Print",
  },
  description:
    "Funnels That Print builds high-converting sales funnels, GoHighLevel CRM automation and AI calling agents that turn ad traffic into booked calls. 275+ results.",
  keywords: [
    "sales funnel agency",
    "AI sales funnel",
    "funnel builder agency",
    "high ticket funnel",
    "lead generation funnel",
    "GoHighLevel agency",
    "GoHighLevel funnel builder",
    "CRM automation agency",
    "AI calling agent",
    "AI appointment setter",
    "speed to lead automation",
    "VSL funnel",
    "self-liquidating offer funnel",
    "Meta Conversions API setup",
    "conversion rate optimization agency",
    "Funnels That Print",
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
    types: {
      "application/rss+xml": `${BASE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: "Sales Funnel Agency: AI Funnels, CRM Automation & AI Calling",
    description:
      "High-converting sales funnels, GoHighLevel CRM automation and 24/7 AI calling agents that turn ad traffic into booked sales calls. 275+ verified client results.",
    url: BASE_URL,
    siteName: "Funnels That Print",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/og/funnels-that-print-og.jpg",
        width: 1200,
        height: 630,
        alt: "Funnels That Print: sales funnel, CRM automation and AI calling agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Funnel Agency: AI Funnels, CRM Automation & AI Calling",
    description:
      "High-converting sales funnels, CRM automation and AI calling agents that turn ad traffic into booked calls.",
    images: ["/img/og/funnels-that-print-og.jpg"],
    creator: "@funnelsthatprint",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
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
      image: `${BASE_URL}/img/og/funnels-that-print-og.jpg`,
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
      founder: [
        { "@id": `${BASE_URL}/#person-gaurav` },
        { "@id": `${BASE_URL}/#person-rahul` },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      areaServed: ["US", "GB", "CA", "AU", "AE", "Worldwide"],
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
    },
    ...Object.values(AUTHORS).map((a) => ({
      "@type": "Person",
      "@id": `${BASE_URL}/#person-${a.id}`,
      name: a.name,
      jobTitle: a.role,
      description: a.bio,
      image: `${BASE_URL}${a.avatar}`,
      url: `${BASE_URL}/#team`,
      knowsAbout: a.expertise,
      worksFor: { "@id": `${BASE_URL}/#organization` },
    })),
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Funnels That Print — Acquisition & Automation Agency",
      url: BASE_URL,
      image: `${BASE_URL}/img/og/funnels-that-print-og.jpg`,
      priceRange: "$$$",
      description:
        "Custom conversion journeys built around your offer, audience, and sales process. From first click to booked call.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      areaServed: ["US", "GB", "CA", "AU", "AE", "Worldwide"],
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
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
