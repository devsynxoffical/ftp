/** WhatsApp chat links with a first message tailored to the current page. */
/** WhatsApp Business number (international format, digits only). */
export const WHATSAPP_NUMBER = "919625695456";
const SITE = "https://www.funnelsthatprint.com";

/**
 * First message tailored to the page the visitor is on, so the chat opens
 * with context instead of a blank "Hi". Uses the page's H1 as the topic.
 */
export function whatsappMessage(path: string, h1: string): string {
  const topic = h1 ? `"${h1}"` : "your website";
  const hi = "Hi Funnels That Print!";
  let body: string;
  if (path === "/") body = "I found your website and I'd like to discuss a sales funnel for my business.";
  else if (path.startsWith("/contact")) body = "I'd like to book a strategy call about my funnel.";
  else if (path === "/blog") body = "I'm reading your journal and have a question about my funnel.";
  else if (path.startsWith("/blog/")) body = `I just read ${topic} on your blog and have a question about it for my business.`;
  else if (path.startsWith("/case-studies") || path.startsWith("/case-") || path === "/milliondollarcasestudy" || path === "/scalelowticket")
    body = `I saw your case study ${topic} and I want similar results for my business.`;
  else if (path.startsWith("/funnels-for")) body = `I saw ${topic}. I'd like to know how you would build a funnel for my business.`;
  else if (path.startsWith("/tools")) body = `I used ${topic} on your site and want help improving my numbers.`;
  else if (path.startsWith("/templates")) body = `I'm looking at ${topic} and want help setting it up for my business.`;
  else if (path.startsWith("/compare")) body = `I read your comparison ${topic} and need help choosing the right setup.`;
  else if (path.startsWith("/glossary")) body = `I was reading ${topic} on your site and have a question.`;
  else if (path.startsWith("/team")) body = `I'd like to speak with ${h1 || "your team"} about my funnel.`;
  else body = `I'm interested in ${topic} and would like to know pricing and next steps.`;
  return `${hi} ${body}\n\n(Page: ${SITE}${path === "/" ? "" : path})`;
}

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

