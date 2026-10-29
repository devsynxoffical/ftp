/**
 * Real people behind the journal. Used for visible bylines, author boxes
 * and Person structured data (E-E-A-T). Mirrors the team section on the
 * home page (#team).
 */
export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  expertise: string[];
}

export const AUTHORS: Record<string, Author> = {
  gaurav: {
    id: "gaurav",
    name: "Gaurav Kapoor",
    role: "Founder & Funnel Strategist, Funnels That Print",
    avatar: "/img/team/gaurav.webp",
    bio: "Founder of Funnels That Print. Since 2019 Gaurav has architected high-ticket and low-ticket acquisition funnels for coaching, consulting, home services, finance and DTC brands, including the $1.52M high-ticket consulting funnel and the $847K self-liquidating offer funnel documented on this site.",
    expertise: [
      "Sales funnel architecture",
      "Offer positioning",
      "VSL and application funnels",
      "Direct-response copywriting",
      "Conversion rate optimization",
    ],
  },
  rahul: {
    id: "rahul",
    name: "Rahul Kapoor",
    role: "Co-founder & Automation Lead, Funnels That Print",
    avatar: "/img/team/rahul.webp",
    bio: "Co-founder of Funnels That Print and lead on CRM automation, speed-to-lead systems, AI voice calling agents and server-side tracking. Rahul has built the GoHighLevel workflows, Meta Conversions API pipelines and reminder automations behind 275+ client funnels.",
    expertise: [
      "GoHighLevel and CRM automation",
      "Speed-to-lead and SMS/email workflows",
      "AI voice calling agents",
      "Meta Conversions API and server-side tracking",
      "Pipeline and appointment automation",
    ],
  },
};
