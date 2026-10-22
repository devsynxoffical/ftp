import type { Metadata } from "next";
import Link from "next/link";
import RoboSection from "@/components/RoboSection";
import UFSquareMarquee from "@/components/UFSquareMarquee";

export const metadata: Metadata = {
  title: "Client Case Studies: Lead Gen & eCommerce Funnels",
  description:
    "Browse 250+ verified case studies and proof across high-ticket lead generation and DTC eCommerce funnels built by Funnels That Print.",
  alternates: {
    canonical: "https://www.funnelsthatprint.com/case-studies",
  },
  openGraph: {
    title: "Client Case Studies: Lead Gen & eCommerce Funnels | Funnels That Print",
    description:
      "Browse 250+ verified client results across service businesses, high-ticket consulting, and high-growth DTC brands.",
    url: "https://www.funnelsthatprint.com/case-studies",
    type: "website",
    images: [
      {
        url: "/img/x/office.webp",
        width: 1200,
        height: 630,
        alt: "Funnels That Print Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies: Lead Gen & eCommerce Funnels",
    description:
      "Browse 250+ verified case studies across Lead Generation and eCommerce.",
    images: ["/img/x/office.webp"],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <div className="box">
      <header className="cshero">
        <h1 className="h1 d">
          Case <span className="it">studies</span>
        </h1>
        <p className="lead">
          Two libraries of real, verified results. Pick the one that matches your
          business.
        </p>
      </header>

      <div className="hub">
        <Link className="hc lg" href="/case-leadgen">
          <div className="fan">
            <img
              src="/img/lg/Dd9D3rnSCMT.webp"
              alt="Lead generation case study proof"
              loading="lazy"
              style={{ "--r": "-8deg", "--x": "-30%" } as React.CSSProperties}
            />
            <img
              src="/img/lg/DdN7bs-xSg7.webp"
              alt="Lead generation case study proof"
              loading="lazy"
              style={{ "--r": "0deg", "--x": "0%" } as React.CSSProperties}
            />
            <img
              src="/img/lg/DbHD8X3ksnz.webp"
              alt="Lead generation case study proof"
              loading="lazy"
              style={{ "--r": "8deg", "--x": "30%" } as React.CSSProperties}
            />
          </div>
          <div className="hb">
            <span className="ht">QualifiedLeadsX&trade;</span>
            <h2>Lead generation</h2>
            <div className="hn">
              <b>125</b>
              <span>case studies</span>
            </div>
            <p>
              Booked calls, verified leads and lower cost per lead for service
              businesses, agencies, coaches and local trades.
            </p>
            <div className="hch">
              <span>Roofing</span>
              <span>Legal / MVA</span>
              <span>Mortgage</span>
              <span>MedSpa</span>
              <span>Coaching</span>
              <span>Low-ticket</span>
            </div>
            <span className="btn hbtn">
              Explore lead gen cases <i>&#8599;</i>
            </span>
          </div>
        </Link>

        <Link className="hc ec" href="/case-ecom">
          <div className="fan">
            <img
              src="/img/cs2/C-4VFNmBfUA.webp"
              alt="E-commerce case study proof"
              loading="lazy"
              style={{ "--r": "-8deg", "--x": "-30%" } as React.CSSProperties}
            />
            <img
              src="/img/cs2/DMLC9R1Bn-m.webp"
              alt="E-commerce case study proof"
              loading="lazy"
              style={{ "--r": "0deg", "--x": "0%" } as React.CSSProperties}
            />
            <img
              src="/img/cs2/DCpIoi0hNhx.webp"
              alt="E-commerce case study proof"
              loading="lazy"
              style={{ "--r": "8deg", "--x": "30%" } as React.CSSProperties}
            />
          </div>
          <div className="hb">
            <span className="ht">Brand Scaling Hacks</span>
            <h2>Ecom &amp; DTC</h2>
            <div className="hn">
              <b>126</b>
              <span>case studies</span>
            </div>
            <p>
              Revenue and ROAS for direct-response eCommerce and DTC brands scaled
              with Meta ads and creative engines.
            </p>
            <div className="hch">
              <span>eCommerce</span>
              <span>DTC brands</span>
              <span>Beauty &amp; skincare</span>
              <span>Apparel</span>
              <span>Fitness</span>
              <span>Supplements</span>
            </div>
            <span className="btn hbtn">
              Explore ecom cases <i>&#8599;</i>
            </span>
          </div>
        </Link>
      </div>

      <div style={{ textAlign: "center", padding: "clamp(60px,8vw,100px) 0 40px" }}>
        <p className="lead" style={{ margin: "0 auto 24px", textAlign: "center" }}>
          Want your campaign on this page?
        </p>
        <Link className="btn o" href="/#robo">
          Build my funnel <i>&#8599;</i>
        </Link>
      </div>
    </div>
    <UFSquareMarquee />
    <RoboSection />
  </>
  );
}
