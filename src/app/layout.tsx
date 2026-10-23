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
      url: BASE_URL,
      logo: `${BASE_URL}/img/logos/logo-01.webp`,
      description:
        "Funnel automation agency since 2019. We build high-converting sales funnels, CRM automations, and AI calling systems.",
      foundingDate: "2019",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@funnelsthatprint.com",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Funnels That Print",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Funnels That Print",
      url: BASE_URL,
      image: `${BASE_URL}/img/x/office.webp`,
      priceRange: "$$$",
      description:
        "Custom conversion journeys built around your offer, audience, and sales process. From first click to booked call.",
      areaServed: "Worldwide",
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
        <link rel="icon" href="/img/logos/logo-01.webp" />
        <meta
          name="google-site-verification"
          content="eiVneK8fO6fm24Qej8CRqkYHetGG1ZSQfG6oIxjf0UI"
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
