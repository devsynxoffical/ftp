import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Funnels That Print — High-Converting Funnels & Acquisition Systems",
  description:
    "Turn traffic into qualified sales calls with high-converting funnels, CRM automations, and AI calling agents built around your offer, audience, and sales process.",
  keywords: [
    "Funnels That Print",
    "High-Ticket Funnels",
    "VSL Funnels",
    "CRM Automation",
    "AI Calling Agent",
    "Conversion Rate Optimization",
    "Lead Generation",
  ],
  authors: [{ name: "Funnels That Print Team" }],
  openGraph: {
    title: "Funnels That Print — High-Converting Funnels & Acquisition Systems",
    description:
      "Conversion journeys built around your offer, audience and sales process. From first click to booked call.",
    url: "https://funnelsthatprint.com",
    siteName: "Funnels That Print",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funnels That Print",
    description:
      "Turn traffic into qualified sales calls with bespoke funnels, CRM automations, and AI calling agents.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ff5a1f",
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
