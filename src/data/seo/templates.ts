import type { SeoPage } from "./types";

const HUB = { name: "Templates", path: "/templates" };
const U = "2026-11-05";

export const TEMPLATE_PAGES: SeoPage[] = [
  {
    path: "/templates",
    kind: "hub",
    keyword: "free sales funnel templates",
    title: "Free Sales Funnel Templates: Scripts, SMS & KPIs",
    description: "Free sales funnel templates: VSL script, funnel copy, SMS and email follow-up, AI voice script, no-show reminders, qualifying questions, KPI dashboard.",
    eyebrow: "Templates",
    h1: "Free sales funnel templates you can use today",
    intro:
      "These <strong>free sales funnel templates</strong> are the working documents behind our client builds: the scripts, page copy, follow-up messages and tracking sheet we start every project from. Each one is plain text, downloads in one click, needs no email address, and uses {placeholders} so you can fill it in for your own offer in under an hour.",
    quick: {
      q: "Which sales funnel templates do I need first?",
      a: "Start with the funnel copy template for the page and the SMS follow-up templates for the first minutes after opt-in, because speed decides most bookings. Add the no-show reminder sequence once calls are booking, then the KPI dashboard so you can see which stage to fix next.",
    },
    sections: [
      {
        h2: "The eight templates",
        html: `<div class="table-wrap"><table><thead><tr><th>Template</th><th>Use it for</th></tr></thead><tbody>
<tr><td><a href="/templates/vsl-script-template">VSL script template</a></td><td>An 8 to 15 minute sales video for a high-ticket offer</td></tr>
<tr><td><a href="/templates/funnel-copy-template">Sales funnel copy template</a></td><td>Landing, quiz, booking and thank-you page copy</td></tr>
<tr><td><a href="/templates/sms-follow-up-templates">SMS follow-up templates</a></td><td>Ten texts from instant response to reactivation</td></tr>
<tr><td><a href="/templates/email-nurture-sequence">Email nurture sequence</a></td><td>Seven emails over 14 days for leads who did not book</td></tr>
<tr><td><a href="/templates/ai-voice-agent-script">AI voice agent script</a></td><td>Prompt, call flow and objection handling for an AI caller</td></tr>
<tr><td><a href="/templates/no-show-reminder-sequence">No-show reminder sequence</a></td><td>SMS, email and voice reminders plus no-show recovery</td></tr>
<tr><td><a href="/templates/lead-qualification-questions">Lead qualification questions</a></td><td>Scored questions by industry for forms, quizzes and calls</td></tr>
<tr><td><a href="/templates/funnel-kpi-dashboard">Funnel KPI dashboard</a></td><td>A weekly spreadsheet with formulas and targets</td></tr>
</tbody></table></div>`,
      },
      {
        h2: "How to use the templates together",
        html: `<p>The templates follow a lead from first click to closed deal. The copy and VSL templates get the opt-in. The SMS, email and AI voice templates handle the first minutes and days, which is where most funnels leak: across 60+ <a href="/speed-to-lead">speed-to-lead</a> deployments, contacting leads inside a minute lifted lead-to-booking 2.4x on the same ads. The reminder sequence protects booked calls, and the qualification questions keep closers on buyers. The KPI dashboard ties it together so you can see where the next fix belongs.</p>
<p>Pair the dashboard with our <a href="/tools">free funnel calculators</a> to put a dollar value on each gap, and see the <a href="/glossary/sales-funnel">sales funnel</a> glossary entry for the stage names we use.</p>`,
      },
      {
        h2: "Templates or a done-for-you build?",
        html: `<p>Templates save writing time; they do not wire up the automation. Someone still has to build the pages, connect the CRM, set the triggers and test every path. If you would rather have that done, our <a href="/services">services</a> cover the full build, from $999 for design only to $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking, live in 5 to 10 business days.</p>`,
      },
    ],
    proof: {
      heading: "Results built on these templates",
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "$847K", label: "Low-ticket front end, $27 product + $17 bump", href: "/scalelowticket" },
        { value: "$115,500", label: "Coaching revenue from 174 appointments", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "$4.38", label: "Cost per lead across 6,275 MVA leads", href: "/case-studies/mva-6275-leads-at-4-38-cpl" },
      ],
      more: { label: "See 275+ results", href: "/case-studies" },
    },
    faqs: [
      { q: "Are these sales funnel templates really free?", a: "Yes. Every template downloads as a plain-text file with no sign-up or email gate. Copy it into your funnel builder, CRM, Google Docs or voice platform and edit freely. They are the same starting documents we use on client builds, adjusted to remove anything specific to one client." },
      { q: "Which platforms do the templates work with?", a: "All of them. The files are plain text, so they paste into GoHighLevel, ClickFunnels, HubSpot, Klaviyo, Google Sheets, or any AI voice platform. Placeholders in braces, like {first_name}, map to the merge fields your software uses. Swap the brace syntax for your platform's version before sending." },
      { q: "Do I need to customize them?", a: "Yes. The structure is proven, but the words must match your buyer, offer and industry. Replace every placeholder, rewrite examples in your customers' language, and add real proof. Each template page includes notes on how to adapt it for local services, legal, finance, coaching and eCommerce." },
      { q: "Are the SMS and voice templates compliant?", a: "They include consent language, opt-out instructions such as Reply STOP, and AI disclosure lines, which are good practice. Compliance also depends on how you collected consent, when you send and where your leads live. Rules vary by state and country, so review your setup with counsel before launch." },
      { q: "Can you set the templates up for me?", a: "Yes. Our full suite build includes the funnel pages, follow-up sequences, reminders, an AI voice booking agent and tracking, customized to your offer and connected to your CRM. Most builds go live in 5 to 10 business days. Book a strategy call to see which pieces you need." },
    ],
    related: ["/templates/funnel-copy-template", "/templates/sms-follow-up-templates", "/templates/funnel-kpi-dashboard", "/tools", "/services"],
    parent: { name: "Home", path: "/" },
    updated: U,
  },
  {
    path: "/templates/vsl-script-template",
    kind: "template",
    keyword: "vsl script template",
    title: "VSL Script Template for High-Ticket Offers (Free)",
    description: "Free VSL script template for high-ticket offers: hook, story, problem, three-pillar method, proof stack, offer and close, timed for an 8 to 15 min video.",
    eyebrow: "Free template",
    h1: "VSL script template for high-ticket offers",
    intro:
      "This <strong>VSL script template</strong> is the seven-part structure we use for video sales letters that book calls for coaching, consulting, agency and professional service offers. It is timed for an 8 to 15 minute video, uses {placeholders} for every variable, and ends with a checklist to run before you record.",
    template: { file: "vsl-script-template.txt", body: `VSL SCRIPT TEMPLATE
Funnels That Print | funnelsthatprint.com/templates/vsl-script-template

Target length: 8 to 15 minutes for a high-ticket offer sold on a call.
Speaking pace: about 150 words per minute. Replace everything in {braces}.
Write it the way you talk. Read it out loud before you record.

------------------------------------------------------------
PART 1. THE HOOK (0:00 to 0:45)
------------------------------------------------------------
Goal: stop the right viewer and tell them why to keep watching.

"If you are a {audience} doing {current situation, e.g. $20K to $50K a month} and you want {desired result} without {main thing they hate, e.g. cold calling, discounting, working weekends}, this video will show you exactly how {number} {audience} are doing it right now."

"In the next {length} minutes I will show you:
 1. Why {common approach} keeps {bad outcome}.
 2. The {name of your method} we use to {result}.
 3. How to find out if it fits your {business/practice/company}."

Disqualifier line (filters bad leads and builds trust):
"This is not for {who it is not for, e.g. brand-new businesses with no offer yet}. If that is you, this will not help."

------------------------------------------------------------
PART 2. WHO I AM AND WHY LISTEN (0:45 to 2:00)
------------------------------------------------------------
"My name is {name}. I {role} at {company}. Over the last {years} we have helped {number} {audience} {result}."

Proof, one or two specifics only:
"{Client name or type} went from {before number} to {after number} in {time frame}."

Short origin: "I started this because {personal reason or moment you saw the problem}."

------------------------------------------------------------
PART 3. THE PROBLEM (2:00 to 4:00)
------------------------------------------------------------
Name the pain in their words:
"Most {audience} we talk to are dealing with one of three things:
 - {pain 1, e.g. leads that never pick up the phone}
 - {pain 2, e.g. paying for ads that bring tire-kickers}
 - {pain 3, e.g. a calendar full of no-shows}"

Make it cost something:
"Every month this continues, it costs you roughly {cost in money, time or missed opportunity}."

Blame the old method, not the viewer:
"It is not your fault. You were told to {old advice}. That worked in {year/context}. It does not work now because {reason the market changed}."

------------------------------------------------------------
PART 4. THE NEW WAY (4:00 to 8:00)
------------------------------------------------------------
"Here is what works instead. We call it {method name}. It has {3} parts."

Pillar 1: {name}
 What it is: {one sentence}
 Why it works: {one sentence}
 Example: {short client story with a number}

Pillar 2: {name}
 What it is: {one sentence}
 Why it works: {one sentence}
 Example: {short client story with a number}

Pillar 3: {name}
 What it is: {one sentence}
 Why it works: {one sentence}
 Example: {short client story with a number}

Bridge: "When all three work together, {result} becomes predictable instead of hoping for a good month."

------------------------------------------------------------
PART 5. PROOF STACK (8:00 to 10:00)
------------------------------------------------------------
Three short case snapshots. Same structure each time:
"{Client}, a {type of business} in {location or niche}. Before: {number}. What we changed: {one thing}. After: {number} in {time}."

Only use results you can document. Show screenshots on screen while you speak.

------------------------------------------------------------
PART 6. THE OFFER AND NEXT STEP (10:00 to 12:00)
------------------------------------------------------------
"If you want us to {do the thing} for you, here is how it works.
 Step 1: Book a {length}-minute call using the calendar below this video.
 Step 2: On the call we will look at {what you review, e.g. your numbers, your current funnel}.
 Step 3: If it is a fit, we will map out {deliverable} and show you exactly what it costs.
 If it is not a fit, I will tell you, and point you to {alternative}."

Risk reversal (only if true): "{guarantee or promise}."

Scarcity (only if true): "We only take on {number} new {clients} each {month} because {real reason}."

------------------------------------------------------------
PART 7. CLOSE (12:00 to end)
------------------------------------------------------------
"So here is the choice. Keep {current situation} and hope it changes, or take {length} minutes to see if {method name} works for you. Click the button below, answer {number} quick questions and pick a time. I will see you on the call."

------------------------------------------------------------
CHECKLIST BEFORE RECORDING
------------------------------------------------------------
[ ] The hook names the audience in the first sentence.
[ ] Every claim has a number, a name or a screenshot.
[ ] The call to action appears at least twice.
[ ] The disqualifier is in the first two minutes.
[ ] No results are promised that you cannot document.
[ ] Captions are added for viewers watching muted.
` },
    quick: {
      q: "What should a VSL script include?",
      a: "A VSL script needs a hook that names the audience, a short credibility section, the problem stated in the buyer's words, a named method with three pillars, a proof stack of real results, a clear offer with one next step, and a close that repeats the call to action. Most high-ticket VSLs run 8 to 15 minutes.",
    },
    sections: [
      {
        h2: "How to use this template",
        html: `<ol>
<li><strong>Collect inputs first:</strong> your audience, their top three pains, your method, three documented results and the exact next step.</li>
<li><strong>Write the hook last.</strong> Once the body is done you know which promise the proof supports.</li>
<li><strong>Read it aloud and time it.</strong> At about 150 words per minute, a 1,500-word script runs ten minutes.</li>
<li><strong>Record in one take per section</strong> and cut between them. Add captions; many viewers watch muted.</li>
<li><strong>Place it on a page</strong> with the booking calendar or application directly below. See <a href="/vsl-funnels">VSL funnels</a> for page layouts that work.</li>
</ol>
<p>New to the format? The <a href="/glossary/vsl">VSL glossary entry</a> covers when a video beats a long-form page.</p>`,
      },
      {
        h2: "Customizing it by industry",
        html: `<ul>
<li><strong>Coaching and consulting:</strong> lean on the method and proof stack. Revenue numbers and before-and-after stories carry the video. See our <a href="/funnels-for/coaches">funnels for coaches</a>.</li>
<li><strong>Agencies and SaaS:</strong> replace the origin story with a short demo or teardown and use client metrics like cost per lead.</li>
<li><strong>Local services and finance:</strong> keep it under five minutes, focus on the problem and the free assessment, and cut the method to one pillar.</li>
<li><strong>Low-ticket products:</strong> use a shorter sales video that ends in a checkout rather than a call.</li>
</ul>`,
      },
      {
        h2: "Mistakes that sink a VSL",
        html: `<ul>
<li><strong>A slow start.</strong> If the first 30 seconds is about you, most viewers leave. Lead with them.</li>
<li><strong>Vague proof.</strong> "Clients love us" persuades nobody. Use names, numbers and time frames you can document.</li>
<li><strong>No disqualifier.</strong> Without one, the calendar fills with people who cannot buy and close rates drop.</li>
<li><strong>One call to action at the very end.</strong> Mention the next step at least twice.</li>
<li><strong>Testing the script before the offer.</strong> A weak offer does not get fixed by better words. Our comparison of <a href="/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026">VSL vs quiz funnels</a> helps decide the format first.</li>
</ul>
<p>Once it is live, model the booked-call economics with the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "$680K", label: "34 coaching sales on $15,483 ad spend", href: "/case-studies/coaching-680k-revenue-on-15k-ad-spend" },
        { value: "52x", label: "ROAS: $115,500 from 174 appointments", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
      ],
      more: { label: "See coaching and consulting results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "How long should a VSL be?", a: "For a high-ticket offer sold on a call, 8 to 15 minutes is typical, because the video has to explain a method and show proof. For local services or a free assessment, three to five minutes is enough. Cut anything that does not move the viewer toward the next step." },
      { q: "Should I show my face or use slides?", a: "Face to camera usually builds more trust for coaching, consulting and services, since buyers are choosing a person. Slides or screen recordings work for software, data-heavy offers and teardown-style videos. Many strong VSLs mix both: face for the hook and close, screen for proof." },
      { q: "Where does the VSL go in the funnel?", a: "Usually on the landing page, with the application or booking calendar directly underneath. Some funnels put a short VSL after opt-in instead, on the booking page, to warm the lead before they pick a time. The thank-you page is a good place for a second, shorter pre-call video." },
      { q: "Do I need a script or can I talk freely?", a: "Use the script as structure, even if you speak naturally. Unscripted videos tend to run long, bury the offer and forget the call to action. Many people write bullet points for each section, rehearse twice, then record section by section so mistakes only cost one short retake." },
      { q: "How do I know if my VSL is working?", a: "Track play rate, average watch time, and opt-in or booking rate from the page. If viewers drop in the first minute, rewrite the hook. If they watch but do not book, the offer or proof is the problem. Compare booked calls per 1,000 visitors before and after each change." },
    ],
    related: ["/templates", "/vsl-funnels", "/glossary/vsl", "/templates/funnel-copy-template", "/tools/funnel-conversion-calculator", "/blog/how-to-build-a-high-ticket-funnel", "/blog/vsl-funnel-examples"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/templates/funnel-copy-template",
    kind: "template",
    keyword: "sales funnel copy template",
    title: "Sales Funnel Copy Template: Every Page, Fill-In Ready",
    description: "Free sales funnel copy template for the landing page, quiz or application, booking page and thank-you page, with headline formulas and consent language.",
    eyebrow: "Free template",
    h1: "Sales funnel copy template for every page",
    intro:
      "This <strong>sales funnel copy template</strong> gives you fill-in copy for the four pages most lead funnels need: the landing page, a quiz or application, the booking page and the thank-you page. It includes three headline formulas, a proof bar, an objection FAQ and the consent line every phone-number form should carry.",
    template: { file: "funnel-copy-template.txt", body: `SALES FUNNEL COPY TEMPLATE
Funnels That Print | funnelsthatprint.com/templates/funnel-copy-template

Covers: opt-in or landing page, application or quiz page, booking page, thank-you page.
Replace everything in {braces}. Keep sentences short. One idea per line on mobile.

============================================================
PAGE 1. LANDING PAGE
============================================================

PRE-HEADLINE (call out the audience)
For {audience} who {qualifier, e.g. already do $30K a month / own a home in {city}}

HEADLINE (the outcome + time frame or mechanism)
Option A: How {audience} {get result} in {time frame} without {pain}
Option B: Get {specific result} with our {named method}, or {risk reversal}
Option C: {Number} {audience} {got result} last {period}. Here is how.

SUBHEADLINE (who it is for, what happens next)
{One sentence explaining the method}. Answer {3} quick questions to see {what they get, e.g. your estimate / if you qualify / your custom plan}.

PRIMARY BUTTON
{Action verb} + {what they get}: "Check My Eligibility", "Get My Free Estimate", "See If I Qualify"
Under button: Takes {30 seconds}. No {thing they fear, e.g. sales pressure, credit check}.

PROOF BAR
{Number} {customers/projects/clients} | {rating} average rating | {years} years

PROBLEM SECTION
Heading: Sound familiar?
 - {Pain point 1 in their words}
 - {Pain point 2}
 - {Pain point 3}
Line: It is not you. It is {the old approach}.

HOW IT WORKS
Step 1: {Action}. {One line on what happens}.
Step 2: {Action}. {One line}.
Step 3: {Result}. {One line}.

BENEFITS (outcomes, not features)
 - {Feature} so you can {outcome}
 - {Feature} so you can {outcome}
 - {Feature} so you can {outcome}

TESTIMONIALS (name, location or business, specific result)
"{Quote with a specific number or change}." - {Name}, {business or city}

OBJECTION FAQ
Q: How much does it cost?  A: {Honest range or how pricing is decided}.
Q: How long does it take?  A: {Real time frame}.
Q: What if {main fear}?    A: {Direct answer}.

FINAL CALL TO ACTION
Heading: Ready to {result}?
Button: {same as primary}

============================================================
PAGE 2. QUIZ OR APPLICATION
============================================================

Intro line: Answer {number} quick questions so we can {benefit to them}.

Question 1 (easy, no personal data): What best describes you? {option A} / {option B} / {option C}
Question 2: What is your biggest challenge right now? {options}
Question 3: How soon do you want to {result}? Right away / Within 3 months / Just researching
Question 4 (qualifier): {budget, revenue, property type, injury date, etc.} {options}
Contact step heading: Where should we send your {result/estimate/plan}?
Fields: First name, Email, Mobile phone
Consent line: By submitting, you agree to receive calls and texts from {Company} about your request, including automated and AI-assisted messages. Consent is not a condition of purchase. Msg and data rates may apply. Reply STOP to opt out.

============================================================
PAGE 3. BOOKING PAGE
============================================================

Headline: Great news, {first_name}. You qualify for a {call name}.
Subheadline: Pick a time below. The call takes {length} minutes and you will leave with {specific takeaway}.
Bullets under calendar:
 - We will review {their situation}.
 - You will see {deliverable}.
 - No obligation. If it is not a fit, we will tell you.

============================================================
PAGE 4. THANK-YOU PAGE
============================================================

Headline: You are booked for {day} at {time}.
Step 1: Add it to your calendar. {button}
Step 2: Watch this {length}-minute video so the call is useful. {video}
Step 3: Reply to the text we just sent with "YES" to confirm.
Line: Need to reschedule? Use the link in your confirmation email.

============================================================
FINAL CHECK
============================================================
[ ] Headline names a result a buyer would pay for.
[ ] The button says what they get, not "Submit".
[ ] Every testimonial includes a specific detail.
[ ] Consent and opt-out language is on every form that collects a phone number.
[ ] Page reads cleanly on a phone with no zooming.
` },
    quick: {
      q: "What copy does a sales funnel need?",
      a: "A lead funnel needs a landing page headline that names the outcome, a subheadline explaining the next step, a button that says what the visitor gets, proof, a short how-it-works section and an objection FAQ. Then a quiz or application, a booking page that sells the call, and a thank-you page that confirms it.",
    },
    sections: [
      {
        h2: "How to use this template",
        html: `<ol>
<li><strong>Write the offer in one sentence</strong> before touching the headline. If you cannot, the page will not fix it.</li>
<li><strong>Draft three headlines</strong> with the formulas and pick the one with the most specific result.</li>
<li><strong>Collect proof</strong> with names and numbers, then fill the proof bar and testimonials.</li>
<li><strong>Write the quiz questions</strong> from easy to hard, using our <a href="/templates/lead-qualification-questions">lead qualification questions</a>.</li>
<li><strong>Build and test on a phone first.</strong> Most paid traffic is mobile.</li>
</ol>
<p>If you are giving away a guide or checklist, the <a href="/glossary/lead-magnet">lead magnet</a> entry explains how to frame it.</p>`,
      },
      {
        h2: "Customizing it by industry",
        html: `<ul>
<li><strong>Roofing, HVAC and solar:</strong> turn the quiz into a short estimator (property type, issue, ZIP code). See <a href="/funnels-for/roofing">roofing funnels</a>.</li>
<li><strong>Personal injury:</strong> lead with eligibility ("See if your accident qualifies") and keep the form short and private.</li>
<li><strong>Mortgage and insurance:</strong> use a rate or savings check and verify phone numbers with a one-time code.</li>
<li><strong>Coaching and B2B:</strong> use an application with revenue and team-size questions, and add a VSL above the form.</li>
<li><strong>eCommerce:</strong> swap the booking page for checkout with an order bump and one-click upsell.</li>
</ul>`,
      },
      {
        h2: "Copy mistakes we fix most often",
        html: `<ul>
<li><strong>Clever headlines.</strong> Clear beats clever. Name the buyer and the result.</li>
<li><strong>"Submit" buttons.</strong> Say what they get: "Get My Estimate".</li>
<li><strong>Asking for a phone number first.</strong> Micro-commitments come before contact details.</li>
<li><strong>Missing consent language.</strong> Without it you cannot legally follow up by text, which is where <a href="/speed-to-lead">speed-to-lead</a> wins most bookings.</li>
<li><strong>Dead thank-you pages.</strong> Use it to confirm the call and show a pre-call video.</li>
</ul>
<p>Measure the result with the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a>, or have our <a href="/sales-funnel-agency">sales funnel agency</a> write and build it for you.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$5.31", label: "Cost per lead across 686 roofing leads", href: "/case-studies/roofing-686-leads-at-5-31-cpl" },
        { value: "$5.23", label: "Cost per lead across 492 mortgage leads", href: "/case-studies/mortgage-492-leads-at-5-23-cpl" },
        { value: "$847K", label: "Low-ticket front end, $27 product + $17 bump", href: "/scalelowticket" },
      ],
      more: { label: "Browse all case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "How long should funnel page copy be?", a: "As long as the decision requires. A free estimate needs a short page because the ask is small. A high-ticket application needs more proof and objection handling because the ask is bigger. Start short, then add sections that answer the questions prospects ask on calls." },
      { q: "Should I use a quiz or a simple form?", a: "On cold traffic, a short quiz usually beats a form because the first questions feel easy and personal, so more people finish. Forms work when intent is already high, such as retargeting or branded search. Test both if you have the volume, using the same offer and headline." },
      { q: "What makes a good funnel headline?", a: "It names who the page is for and the result they want, ideally with a number, a time frame or a named method. Read it to someone in your audience: if they cannot repeat what you offer in one sentence, rewrite it. Clarity beats wordplay on paid traffic." },
      { q: "Do I need consent language on my form?", a: "If you plan to call or text leads, yes. State that they agree to receive calls and texts, including automated or AI-assisted ones, that consent is not a condition of purchase, and how to opt out. Requirements vary by location, so confirm wording with counsel." },
      { q: "How do I test which copy works best?", a: "Change one element at a time, starting with the headline, then the offer framing, then the button. Run each version until it has at least 100 leads or a clear difference in opt-in rate. Judge by booked calls or sales, not just opt-ins, because cheap leads can hide a worse page." },
    ],
    related: ["/templates", "/sales-funnel-agency", "/quiz-funnels", "/glossary/lead-magnet", "/tools/funnel-conversion-calculator", "/blog/sales-funnel-examples"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/templates/sms-follow-up-templates",
    kind: "template",
    keyword: "sms follow up templates",
    title: "SMS Follow Up Templates for New Leads (10 Texts)",
    description: "Free SMS follow up templates: instant response, missed call, booking, day 1 to 7 follow-ups, breakup and reactivation texts, with opt-out and AI lines.",
    eyebrow: "Free template",
    h1: "SMS follow up templates for new leads",
    intro:
      "These <strong>SMS follow up templates</strong> cover the first week after a lead opts in: an instant reply within 60 seconds, a missed-call text, a qualifying question, a booking link, five follow-ups through day 7 and a reactivation text for old leads. Each includes the consent, opt-out and AI disclosure lines texting programs need.",
    template: { file: "sms-follow-up-templates.txt", body: `SMS FOLLOW-UP TEMPLATES
Funnels That Print | funnelsthatprint.com/templates/sms-follow-up-templates

Before you send anything:
 - Text only people who gave consent to receive texts from your business at opt-in.
 - Identify your business in the first message of every conversation.
 - Include opt-out language ("Reply STOP to opt out") in the first message and regularly after.
 - If replies are handled by an AI assistant, say so.
 - Send between 8am and 8pm in the lead's local time unless they text you first.
 - Keep each message under 160 characters where you can. Replace {braces}.

------------------------------------------------------------
1. INSTANT RESPONSE (send within 60 seconds of opt-in)
------------------------------------------------------------
Hi {first_name}, this is {agent_name} with {company}. Thanks for requesting {offer}. Is now a good time for a quick call? Reply STOP to opt out.

AI version:
Hi {first_name}, this is {company}'s AI assistant. Thanks for requesting {offer}! A few quick questions so we can help. Reply STOP to opt out.

------------------------------------------------------------
2. MISSED CALL FOLLOW-UP (right after an unanswered call)
------------------------------------------------------------
Hi {first_name}, just tried calling about your {offer} request. When is a better time today, morning or afternoon?

------------------------------------------------------------
3. QUALIFYING QUESTION (if they reply but have not booked)
------------------------------------------------------------
Quick question so I can point you the right way: {qualifying question, e.g. "Is the property you want to refinance your primary home?"}

------------------------------------------------------------
4. BOOKING LINK
------------------------------------------------------------
Perfect, {first_name}. Grab a time that works here: {booking_link}. Takes {length} min and you will leave with {takeaway}.

------------------------------------------------------------
5. DAY 1 EVENING (no reply)
------------------------------------------------------------
Hi {first_name}, {agent_name} from {company} again. Still want help with {problem}? Just reply YES and I will send a couple of times.

------------------------------------------------------------
6. DAY 2 (value or proof)
------------------------------------------------------------
{first_name}, we just helped a {similar customer type} in {city/niche} {specific result}. Happy to show you how it would work for you. Want a quick call?

------------------------------------------------------------
7. DAY 3 (easy yes/no)
------------------------------------------------------------
Hi {first_name}, should I keep your {offer} request open or close it out? A simple yes or no is perfect.

------------------------------------------------------------
8. DAY 5 (objection handler)
------------------------------------------------------------
A lot of people hold off because {common objection, e.g. "they think it will be expensive"}. {One-line answer}. Want me to send details?

------------------------------------------------------------
9. DAY 7 (breakup message)
------------------------------------------------------------
Hi {first_name}, I have not heard back so I will stop reaching out. If you still want {result}, reply anytime and we will pick it up. Reply STOP to opt out.

------------------------------------------------------------
10. REACTIVATION (30 to 90 days later, old leads)
------------------------------------------------------------
Hi {first_name}, it is {agent_name} from {company}. You asked about {offer} a while back. Are you still looking for help with that? Reply STOP to opt out.

------------------------------------------------------------
REPLY HANDLING
------------------------------------------------------------
Reply "YES" or a time         -> send booking link (message 4) or book directly.
Reply with a question         -> answer in one message, then ask for the call.
Reply "not now" or "later"    -> ask "No problem, when should I check back?" and set a task.
Reply "wrong number"          -> apologize, mark the contact as invalid, stop the sequence.
Reply STOP / UNSUBSCRIBE / END / QUIT / CANCEL -> stop all texts immediately. Send one confirmation: "You are unsubscribed from {company} texts. No more messages will be sent."
Angry or asks for a human     -> stop automation and notify a team member right away.

------------------------------------------------------------
SEQUENCE RULES
------------------------------------------------------------
 - Stop the sequence the moment the lead books, replies STOP, or asks a human question.
 - Pair texts with calls. A text after a missed call gets more replies than a text alone.
 - Never send more than two unanswered texts in a single day.
 - Log every message and opt-out in the CRM.
 - Review your consent language and sending rules with counsel. Requirements vary by state and country.
` },
    quick: {
      q: "What should a lead follow-up text say?",
      a: "The first text should name your business and the person sending it, reference what the lead asked for, ask one easy question, and include opt-out language such as Reply STOP. If an AI assistant handles replies, say so. Send it within 60 seconds of opt-in, paired with a phone call.",
    },
    sections: [
      {
        h2: "How to use these templates",
        html: `<ol>
<li><strong>Confirm consent</strong> is captured on your form before any text goes out.</li>
<li><strong>Load messages 1 and 2</strong> as an instant workflow: text plus call within a minute of opt-in.</li>
<li><strong>Schedule messages 5 to 9</strong> on days 1, 2, 3, 5 and 7, stopping the moment the lead books or replies.</li>
<li><strong>Route replies</strong> using the reply-handling table, including STOP keywords.</li>
<li><strong>Run message 10</strong> on leads older than 30 days.</li>
</ol>
<p>The <a href="/glossary/speed-to-lead">speed-to-lead</a> entry explains why the first minute matters: across our 60+ deployments, median first contact was 38 seconds and lead-to-booking rose 2.4x.</p>`,
      },
      {
        h2: "Customizing the texts by industry",
        html: `<ul>
<li><strong>Home services:</strong> ask about the property and urgency in message 3, and offer two estimate windows rather than a link. See <a href="/funnels-for/home-services">home services funnels</a>.</li>
<li><strong>Personal injury:</strong> keep texts discreet, avoid case details in SMS, and push quickly to a call.</li>
<li><strong>Mortgage and insurance:</strong> ask buy, refinance or cash-out first; never quote rates by text.</li>
<li><strong>Med spas:</strong> mention the treatment and any intro offer, and book straight into the calendar.</li>
<li><strong>Coaching and B2B:</strong> use message 6 for a case story, and send a booking link rather than calling unannounced.</li>
</ul>`,
      },
      {
        h2: "Mistakes that kill reply rates",
        html: `<ul>
<li><strong>Waiting hours to send the first text.</strong> Speed matters more than wording.</li>
<li><strong>No business name.</strong> Unknown numbers get ignored or reported.</li>
<li><strong>Long messages with links in the first text.</strong> Ask a question first; links come after a reply.</li>
<li><strong>Ignoring opt-outs.</strong> Stop every channel immediately and log it.</li>
<li><strong>Texting without calling.</strong> Text after a missed call gets more replies than text alone.</li>
</ul>
<p>We build these sequences in <a href="/crm-automation">CRM automation</a> projects, and the <a href="/tools/ai-voice-agent-roi-calculator">AI voice agent ROI calculator</a> shows what instant calling adds.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "276+", label: "OTP-verified MVA calls in 5 days", href: "/case-studies/mva-276-otp-verified-calls-in-5-days" },
        { value: "337", label: "Home services appointments on $1,621 ad spend", href: "/case-studies/home-services-337-appointments-booked" },
        { value: "387", label: "MVA appointments booked", href: "/case-studies/mva-387-appointments-booked" },
      ],
      more: { label: "See lead generation results", href: "/case-leadgen" },
    },
    faqs: [
      { q: "How soon should I text a new lead?", a: "Within 60 seconds, ideally alongside a phone call. Interest drops quickly once a lead leaves your page and starts comparing competitors. In our speed-to-lead deployments, 84% of leads were reached inside the first minute, and booking rates rose 2.4x compared with slower follow-up on the same ads." },
      { q: "How many follow-up texts are too many?", a: "We recommend no more than two unanswered texts in a day and about seven touches over the first week, then a monthly or quarterly check-in. Stop immediately when the lead books, opts out or asks for a person. Volume without replies hurts deliverability and your brand." },
      { q: "Do I need to include Reply STOP in every text?", a: "Include opt-out language in the first message of a conversation and regularly after, especially in marketing or reactivation messages. Always honor STOP, UNSUBSCRIBE and similar keywords instantly. Exact requirements depend on your carrier registration and location, so check your setup with counsel." },
      { q: "Should I tell leads an AI is texting them?", a: "Yes. If an AI assistant writes or answers messages, say so in the first message and whenever asked. It builds trust, avoids complaints, and some jurisdictions require it. People generally respond well when the AI is fast and helpful and hands off to a person when they ask." },
      { q: "What tool should I send these from?", a: "Any CRM with SMS and workflow triggers will work. We build most of these sequences in GoHighLevel because texts, calls, calendars and pipelines live in one account, so the sequence can stop the moment a lead books. Make sure your sending numbers are registered for business texting." },
    ],
    related: ["/templates", "/speed-to-lead", "/glossary/speed-to-lead", "/templates/email-nurture-sequence", "/tools/ai-voice-agent-roi-calculator", "/blog/speed-to-lead-automation-gohighlevel-60-second-follow-up"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/templates/email-nurture-sequence",
    kind: "template",
    keyword: "email nurture sequence template",
    title: "Email Nurture Sequence Template: 7 Emails, 14 Days",
    description: "Free email nurture sequence template: seven plain-text emails over 14 days to turn opted-in leads into booked calls, with subject lines and send timing.",
    eyebrow: "Free template",
    h1: "Email nurture sequence template",
    intro:
      "This <strong>email nurture sequence template</strong> is seven plain-text emails over 14 days for leads who opted in but did not book or buy. Each email has one job, one link and a subject line, moving from delivery to education, proof, process, objections, a direct offer and a close-the-loop message.",
    template: { file: "email-nurture-sequence.txt", body: `EMAIL NURTURE SEQUENCE TEMPLATE
Funnels That Print | funnelsthatprint.com/templates/email-nurture-sequence

Use for: leads who opted in but did not book or buy.
Length: 7 emails over 14 days. Stop the sequence when the lead books or buys.
From name: a real person at {company}. Plain text style. One link per email.
Every email must include your business address and an unsubscribe link in the footer.

------------------------------------------------------------
EMAIL 1. DAY 0 (immediately). DELIVER WHAT THEY ASKED FOR
------------------------------------------------------------
Subject: Your {lead magnet / estimate / guide} is here
Preview: Plus the one thing to do next

Hi {first_name},

Here is your {lead magnet}: {link}

Quick tip before you dive in: start with {specific section or step}. It is where most {audience} see the fastest result.

If you would rather talk it through, you can book a {length}-minute call here: {booking_link}

{sender_name}
{company}

------------------------------------------------------------
EMAIL 2. DAY 1. THE BIG MISTAKE
------------------------------------------------------------
Subject: The mistake that costs {audience} {cost}
Preview: Almost everyone makes it at first

Hi {first_name},

The most common mistake we see with {audience} is {mistake}.

It feels right because {why people do it}. But it leads to {bad outcome}, which usually costs {money/time}.

What to do instead: {one clear alternative}.

If you want us to look at how this applies to you, reply to this email with your biggest question.

{sender_name}

------------------------------------------------------------
EMAIL 3. DAY 3. CASE STORY
------------------------------------------------------------
Subject: How {client name or type} got {result}
Preview: Before, after and what changed

Hi {first_name},

{Client} came to us with {situation}. They had tried {previous attempt}.

We changed three things:
1. {change 1}
2. {change 2}
3. {change 3}

Result: {specific result with number} in {time frame}.

Want to see what the same approach would look like for you? {booking_link}

{sender_name}

------------------------------------------------------------
EMAIL 4. DAY 5. HOW IT WORKS
------------------------------------------------------------
Subject: What working with us actually looks like
Preview: Step by step, no surprises

Hi {first_name},

People often ask what happens after they book. Here is the full process:

Step 1: {call/assessment}. We look at {what you review}.
Step 2: {plan}. You get {deliverable}.
Step 3: {delivery}. {time frame}.
Step 4: {result/support}.

Most clients {typical outcome} within {time}.

Book your call here: {booking_link}

{sender_name}

------------------------------------------------------------
EMAIL 5. DAY 7. OBJECTIONS
------------------------------------------------------------
Subject: "{common objection in their words}"
Preview: Fair question. Here is the honest answer.

Hi {first_name},

We hear this a lot: "{objection}."

Here is the honest answer: {answer, with a number or example}.

And if {second objection}, {short answer}.

Still have a question? Reply and I will answer personally.

{sender_name}

------------------------------------------------------------
EMAIL 6. DAY 10. DIRECT OFFER
------------------------------------------------------------
Subject: Want us to {do the thing} for you?
Preview: {Short benefit}

Hi {first_name},

If you are ready to {result}, here is the next step: a {length}-minute call where we {what happens on the call}.

You will leave with {specific takeaway}, whether you work with us or not.

Pick a time: {booking_link}

{sender_name}

------------------------------------------------------------
EMAIL 7. DAY 14. CLOSE THE LOOP
------------------------------------------------------------
Subject: Should I close your file?
Preview: One quick question

Hi {first_name},

I have not heard back, so I am guessing the timing is not right. That is completely fine.

Reply with a number so I know what to do:
1 - I am still interested, send me times.
2 - Check back in a few months.
3 - I am all set.

{sender_name}

------------------------------------------------------------
AFTER DAY 14
------------------------------------------------------------
Move non-responders to a monthly newsletter with one useful idea and one case story per issue.
Reply "1" -> send times or book. Reply "2" -> set a 90-day task. Reply "3" -> remove from sales emails.
` },
    quick: {
      q: "What is a good email nurture sequence?",
      a: "A good nurture sequence delivers what the lead asked for immediately, then sends five to seven short emails over about two weeks: a common mistake, a case story, how working together looks, answers to objections, a direct offer, and a final yes-or-no email. It stops the moment the lead books or buys.",
    },
    sections: [
      {
        h2: "How to use this template",
        html: `<ol>
<li><strong>Trigger it from opt-in,</strong> with email 1 sending immediately.</li>
<li><strong>Add an exit condition:</strong> booked or purchased removes the contact from the sequence.</li>
<li><strong>Write from a real person</strong> in plain text. Designed newsletters read like marketing and land in promotions tabs.</li>
<li><strong>Fill email 3 with a real case</strong> you can document, with numbers.</li>
<li><strong>Run it alongside texts.</strong> Email nurtures; SMS and calls book. Use the <a href="/templates/sms-follow-up-templates">SMS follow-up templates</a> for the first hours.</li>
</ol>
<p>If your opt-in is a guide or checklist, read the <a href="/glossary/lead-magnet">lead magnet</a> entry for how to tie emails back to it.</p>`,
      },
      {
        h2: "Customizing it by industry",
        html: `<ul>
<li><strong>Coaching and consulting:</strong> stretch to 10 emails, add a second case story and a short video. See <a href="/funnels-for/consultants">funnels for consultants</a>.</li>
<li><strong>Local services:</strong> shorten to four emails over a week; buyers decide fast. Add seasonal reasons to act.</li>
<li><strong>Mortgage and insurance:</strong> lead with education on the process and timeline, never rate promises.</li>
<li><strong>SaaS:</strong> replace the case email with a use-case walkthrough, and make email 6 a demo or trial offer.</li>
<li><strong>eCommerce:</strong> turn it into a welcome flow: offer, bestsellers, reviews, founder story and a deadline.</li>
</ul>`,
      },
      {
        h2: "Mistakes that make nurture emails fail",
        html: `<ul>
<li><strong>No exit condition.</strong> Sending "book a call" emails to someone already booked looks careless.</li>
<li><strong>Several links and asks per email.</strong> One email, one action.</li>
<li><strong>All value, no ask.</strong> Every email should make the next step easy, even the educational ones.</li>
<li><strong>Generic case stories.</strong> Specific numbers and time frames persuade; adjectives do not.</li>
<li><strong>Ignoring replies.</strong> A reply is a hot lead. Route it to a person the same day.</li>
</ul>
<p>We build nurture flows inside <a href="/crm-automation">CRM automation</a> projects. Check what nurture is worth with the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a>: a higher lead-to-customer rate raises the CPL you can afford.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$115,000", label: "Webinar revenue from 527 leads", href: "/case-studies/webinar-115k-revenue-on-15k-ad-spend" },
        { value: "$85K", label: "Coaching agency client revenue in one month", href: "/case-studies/coaching-agency-client-at-85k-in-a-month" },
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
      ],
      more: { label: "See coaching and consulting results", href: "/case-studies/coaching-consulting-funnels" },
    },
    faqs: [
      { q: "How many emails should a nurture sequence have?", a: "Five to seven over about two weeks is a solid default for most lead funnels. Longer sales cycles, like coaching or B2B, can run 10 or more over a month. After the sequence ends, move non-buyers to a regular newsletter so you stay in touch without hard selling." },
      { q: "How often should nurture emails go out?", a: "Daily for the first two days while interest is high, then every two or three days. The template sends on days 0, 1, 3, 5, 7, 10 and 14. If unsubscribes spike after a particular email, check that email's content before changing the schedule." },
      { q: "Should nurture emails be plain text or designed?", a: "Plain text for service businesses and high-ticket offers. It reads like a personal note, tends to reach the primary inbox, and invites replies. Designed emails suit eCommerce, where product images and buttons help. Either way, keep one clear link and a recognizable sender name." },
      { q: "What should I do when a lead replies?", a: "Treat it as a hot lead. Remove them from the automated sequence, answer personally within hours, and offer a call time. Replies like 1, 2 or 3 to the final email can be routed automatically: book, set a 90-day reminder, or remove from sales emails." },
      { q: "Do I still need SMS if I have email nurture?", a: "Yes, for booking. Email is good for education and proof over several days, but texts and calls are what get a lead on the calendar in the first hour. Use both: instant text and call at opt-in, then email nurture for leads who do not book." },
    ],
    related: ["/templates", "/crm-automation", "/glossary/lead-magnet", "/templates/sms-follow-up-templates", "/tools/cost-per-lead-calculator", "/blog/lead-nurturing-strategies"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/templates/ai-voice-agent-script",
    kind: "template",
    keyword: "ai voice agent script",
    title: "AI Voice Agent Script Template: Prompt + Call Flow",
    description: "Free AI voice agent script: system prompt, AI disclosure opening, qualifying questions, booking flow, objection replies, voicemail and CRM handoff fields.",
    eyebrow: "Free template",
    h1: "AI voice agent script template",
    intro:
      "This <strong>AI voice agent script</strong> template gives you everything an AI caller needs to call new leads, qualify them and book appointments: a system prompt with guardrails, a call flow that opens with AI disclosure, objection replies, a voicemail and the fields to write back to your CRM. It is built for speed-to-lead calls to people who consented at opt-in.",
    template: { file: "ai-voice-agent-script.txt", body: `AI VOICE AGENT SCRIPT TEMPLATE
Funnels That Print | funnelsthatprint.com/templates/ai-voice-agent-script

Use for: inbound callbacks and speed-to-lead calls to new form leads who consented to be called.
Goal: confirm interest, qualify, book an appointment, hand off when needed.
Replace {braces}. Paste the PROMPT section into your voice platform's system prompt and the
CALL FLOW into its conversation instructions.

============================================================
PART A. AGENT PROMPT
============================================================
You are {agent_name}, an AI assistant calling on behalf of {company}, a {business type} in {location}.
You are calling {first_name}, who requested {offer} on {source} {minutes} minutes ago.
Your goal is to confirm their interest, ask the qualifying questions below, and book them for a {appointment type} with {human_name/team}.

Rules:
- Always say you are an AI assistant in your first sentence. If asked again, confirm it.
- Be warm, brief and natural. Use short sentences. Never talk for more than 20 seconds at a time.
- Ask one question at a time and wait for the answer.
- Never give legal, medical, financial or pricing advice beyond the facts listed below.
- Never promise results, approvals, settlements or savings.
- If the person asks to stop being contacted, apologize, confirm they will not be called or texted again, and end the call.
- If the person is upset, asks for a human, or asks something you cannot answer, offer a transfer or a callback from {human_name}.
- If you reach voicemail, leave the voicemail message below and end the call.

Facts you may share:
- {fact 1, e.g. Estimates are free and take about 45 minutes on site.}
- {fact 2, e.g. We serve {service area}.}
- {fact 3, e.g. Hours: Monday to Saturday, 8am to 6pm.}

============================================================
PART B. CALL FLOW
============================================================

1. OPENING AND DISCLOSURE
"Hi, is this {first_name}? This is {agent_name}, an AI assistant with {company}. You just asked about {offer} on our website, so I am calling to help you get that set up. Do you have two minutes?"

 - Yes -> step 2.
 - Busy -> "No problem. When is a better time to call back?" Book the callback, confirm, end.
 - Wrong person -> "Sorry to bother you. I will update our records." End and mark as wrong number.

2. CONFIRM THE NEED
"Great. Can you tell me a little about what is going on with {topic}?"
Listen. Reflect it back in one sentence: "Got it, so {summary}."

3. QUALIFY (ask in order, one at a time)
 Q1: {qualifier 1, e.g. "Do you own the home?"}
     Disqualify if: {answer}. Say: "Thanks for sharing. We are not the best fit for that, but {referral or resource}."
 Q2: {qualifier 2, e.g. "How soon are you hoping to get this done?"}
 Q3: {qualifier 3, e.g. "Is anyone else involved in the decision?"} If yes: "Can they join the appointment?"
 Q4: {qualifier 4, e.g. budget range, accident date, current insurer}

4. BOOK
"Based on what you shared, the next step is a {appointment type} with {human_name}. I have {slot 1} or {slot 2}. Which works better?"
 - Confirm the time, their email and the address or call number.
 - "You will get a text and email confirmation in a moment. Reply STOP to any text if you want to opt out."

5. CLOSE
"Is there anything you want {human_name} to know before the appointment?"
"Perfect. Thanks, {first_name}. Talk soon."

============================================================
PART C. OBJECTION RESPONSES
============================================================
"Are you a robot?"        -> "Yes, I am an AI assistant for {company}. I can get you booked, or I can have a person call you back. Which would you prefer?"
"How much does it cost?"  -> "It depends on {factor}. {human_name} will give you exact numbers at the {appointment}. Would {slot} work?"
"I am just looking."      -> "Totally fair. The {appointment} is free and there is no obligation. It just gives you real numbers to compare."
"Send me info instead."   -> "Sure. I will text you a link now. Would it help to also pencil in a time, so you do not have to chase us?"
"Stop calling me."        -> "I am sorry about that. I have removed you from our calls and texts. Have a good day." End call. Mark do not contact.

============================================================
PART D. VOICEMAIL
============================================================
"Hi {first_name}, this is {agent_name}, an AI assistant with {company}, following up on your {offer} request. I will send you a text with a link to book. Talk soon."

============================================================
PART E. HANDOFF FIELDS TO WRITE INTO THE CRM
============================================================
call_outcome (booked / callback / not qualified / not interested / do not contact / voicemail)
appointment_time, q1_answer, q2_answer, q3_answer, q4_answer, summary (two sentences), transfer_requested (yes/no)

Compliance note: get prior consent to call and text at opt-in, honor opt-outs immediately, and confirm AI calling rules for each state or country you call with counsel before launch.
` },
    quick: {
      q: "What should an AI voice agent script include?",
      a: "A clear role and goal, an opening line that discloses the caller is an AI, a short need check, three or four qualifying questions in order, a booking step with two time options, replies to common objections, a voicemail, and rules for opt-outs and handing off to a human. Keep each turn under 20 seconds.",
    },
    sections: [
      {
        h2: "How to use this template",
        html: `<ol>
<li><strong>Fill Part A</strong> with your company, offer and the facts the agent may share. Anything not listed should be handed to a person.</li>
<li><strong>Write the qualifiers</strong> in Part B using our <a href="/templates/lead-qualification-questions">lead qualification questions</a>.</li>
<li><strong>Connect the calendar</strong> so the agent offers real open slots, and map Part E fields to your CRM.</li>
<li><strong>Test 30 to 50 calls</strong> internally with different personalities: rushed, skeptical, off-topic, wrong number.</li>
<li><strong>Launch on new leads only,</strong> triggered within 60 seconds of opt-in, and review recordings weekly.</li>
</ol>
<p>The <a href="/glossary/ai-voice-agent">AI voice agent</a> glossary entry covers how these systems work.</p>`,
      },
      {
        h2: "Customizing it by industry",
        html: `<ul>
<li><strong>Personal injury:</strong> qualify accident date, injury and treatment, and whether they have an attorney; transfer qualified callers live to intake.</li>
<li><strong>Roofing, HVAC and solar:</strong> confirm homeownership, address and urgency, then book an on-site estimate window.</li>
<li><strong>Mortgage and insurance:</strong> qualify purpose and timeline only; leave numbers to a licensed person.</li>
<li><strong>Med spas and clinics:</strong> confirm the treatment and location, and avoid any medical advice.</li>
<li><strong>Coaching and B2B:</strong> qualify revenue and decision-maker, then book a strategy call with the closer.</li>
</ul>
<p>See how it compares with a team in <a href="/compare/ai-voice-agent-vs-human-setter">AI voice agent vs human setter</a>.</p>`,
      },
      {
        h2: "Mistakes to avoid",
        html: `<ul>
<li><strong>Hiding that it is AI.</strong> Disclose in the first sentence and whenever asked.</li>
<li><strong>Long monologues.</strong> Callers interrupt; short turns keep the conversation natural.</li>
<li><strong>Letting the agent improvise prices or promises.</strong> List allowed facts and forbid the rest.</li>
<li><strong>No human escape hatch.</strong> Always offer a transfer or callback.</li>
<li><strong>Calling without consent.</strong> Capture consent at opt-in and honor opt-outs immediately.</li>
</ul>
<p>Estimate the payback with the <a href="/tools/ai-voice-agent-roi-calculator">AI voice agent ROI calculator</a>, or have us build it through our <a href="/ai-voice-agents">AI voice agent service</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "276+", label: "OTP-verified MVA calls in 5 days", href: "/case-studies/mva-276-otp-verified-calls-in-5-days" },
        { value: "5,628", label: "HVAC appointments booked", href: "/case-studies/hvac-5628-appointments-booked" },
        { value: "387", label: "MVA appointments booked", href: "/case-studies/mva-387-appointments-booked" },
      ],
      more: { label: "See lead generation results", href: "/case-leadgen" },
    },
    faqs: [
      { q: "Does an AI voice agent need to say it is an AI?", a: "Yes. Our template discloses it in the first sentence and confirms it whenever asked. Disclosure builds trust, reduces complaints and is required in some places. Rules on AI calling, consent and recording vary by state and country and are changing, so review your setup with counsel." },
      { q: "How long should an AI sales call be?", a: "Most qualifying and booking calls run two to four minutes. The calculator on our ROI page assumes three minutes per lead across all attempts. Keep the agent's turns short, ask one question at a time, and book as soon as the lead qualifies rather than continuing to chat." },
      { q: "How much does it cost to run?", a: "In our deployments, AI calling costs roughly $0.10 to $0.25 per minute, which works out to about $3 to $9 per booked appointment, compared with $40 to $120 from human setters. Add the cost of building, testing and maintaining the agent and its integrations." },
      { q: "Can the agent transfer calls to my team?", a: "Yes, most voice platforms support live transfer to a phone number or queue. Use it for qualified high-value leads, upset callers and anyone who asks for a person. If nobody is available, the agent should book a callback with a specific time rather than leaving the lead waiting." },
      { q: "How do I improve the script after launch?", a: "Review 20 to 30 recordings a week. Look for where callers hang up, repeat questions or get confused, and tighten those lines. Track booking rate on contacted leads and show rate on booked calls. Change one part at a time so you can see what moved the number." },
    ],
    related: ["/templates", "/ai-voice-agents", "/ai-appointment-setter", "/glossary/ai-voice-agent", "/tools/ai-voice-agent-roi-calculator", "/blog/ai-calling-for-lead-generation"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/templates/no-show-reminder-sequence",
    kind: "template",
    keyword: "no-show reminder sequence",
    title: "No-Show Reminder Sequence: SMS, Email & Voice",
    description: "Free no-show reminder sequence: booking confirmation, 24-hour and 1-hour reminders, a voice confirmation call and recovery messages for missed calls.",
    eyebrow: "Free template",
    h1: "No-show reminder sequence for sales calls and appointments",
    intro:
      "This <strong>no-show reminder sequence</strong> uses three channels, SMS, email and a voice confirmation call, to get booked prospects to show up, and a recovery sequence to rebook the ones who do not. It is the structure behind show-up rates of up to 88% in our client builds.",
    template: { file: "no-show-reminder-sequence.txt", body: `NO-SHOW REMINDER SEQUENCE
Funnels That Print | funnelsthatprint.com/templates/no-show-reminder-sequence

Three channels: SMS, email and a voice confirmation call.
Trigger: appointment booked. Stop: appointment attended, cancelled, or contact opts out.
Replace {braces}. Use the lead's time zone for every send.
Only text and call people who consented at booking. Honor STOP and opt-out requests immediately.

============================================================
STEP 1. AT BOOKING (immediately)
============================================================
SMS:
Hi {first_name}, you are booked with {host_name} at {company} on {day}, {date} at {time} {timezone}. Reply YES to confirm or R to reschedule. Reply STOP to opt out.

Email:
Subject: Confirmed: {appointment type} on {day} at {time}
Hi {first_name},
You are booked for your {appointment type} with {host_name}.
When: {day}, {date} at {time} {timezone}
Where: {address / phone number / video link}
What to have ready: {item 1}, {item 2}
To get the most from the call, watch this {length}-minute video first: {video_link}
Need a different time? {reschedule_link}
{host_name}, {company}

============================================================
STEP 2. 24 HOURS BEFORE
============================================================
SMS:
Hi {first_name}, quick reminder: your {appointment type} with {host_name} is tomorrow at {time}. Reply YES to confirm or R to pick a new time.

Email:
Subject: Tomorrow at {time}: your {appointment type}
Hi {first_name}, a reminder that we are meeting tomorrow at {time}. Here is what we will cover:
 - {agenda item 1}
 - {agenda item 2}
 - {agenda item 3}
Join here: {link}. See you then.

============================================================
STEP 3. VOICE CONFIRMATION CALL (morning of, or 24h before if no YES)
============================================================
Human or AI caller. If AI, disclose it in the first sentence.
"Hi {first_name}, this is {caller_name}, an AI assistant with {company}. I am calling to confirm your {appointment type} with {host_name} today at {time}. Are you still good for that time?"
 - Yes -> "Great, {host_name} is looking forward to it. You will get the link by text." End.
 - No -> "No problem. Would {slot 1} or {slot 2} work better?" Rebook. End.
 - Voicemail -> "Hi {first_name}, {caller_name}, an AI assistant with {company}, confirming your appointment today at {time}. Reply to our text if you need a new time."

============================================================
STEP 4. 1 HOUR BEFORE
============================================================
SMS:
{first_name}, see you in an hour! Here is your link: {link}. {host_name} has your notes ready.

============================================================
STEP 5. 5 MINUTES AFTER START (if not joined)
============================================================
SMS:
Hi {first_name}, {host_name} is on the call now and waiting for you: {link}. Running late? Reply and let us know.

Call: place one call from {host_name} or the assistant. If no answer, go to step 6.

============================================================
STEP 6. NO-SHOW RECOVERY
============================================================
Same day, 30 minutes after:
SMS: Hi {first_name}, sorry we missed you today. Life happens. Want to grab another time? {reschedule_link}

Next day:
Email:
Subject: Missed you yesterday
Hi {first_name}, we had your {appointment type} set for yesterday and did not connect. No problem at all. If you still want {result}, pick a new time here: {reschedule_link}.

Day 3:
SMS: {first_name}, still want help with {problem}? Reply YES and I will send two open times. Reply STOP to opt out.

Day 7:
Email:
Subject: Should we close your file?
Hi {first_name}, I have not heard back, so I will close your request for now. If anything changes, reply to this email and we will pick it up.

============================================================
CRM RULES
============================================================
 - Tag every booking with source and booking lead time (hours between booking and appointment).
 - Mark confirmed when the lead replies YES or confirms by phone.
 - Unconfirmed 2 hours before: alert the host and attempt one more call.
 - Track show rate weekly: attended / booked. Target 80% or higher.
 - Exclude cancelled and rescheduled appointments from recovery messages.
 - Log opt-outs and stop every channel for that contact.
` },
    quick: {
      q: "What is the best reminder sequence to reduce no-shows?",
      a: "Confirm by text and email the moment someone books, remind them 24 hours before, place a confirmation call the morning of, text again one hour before, and message five minutes after start if they have not joined. Then run a recovery sequence over seven days to rebook anyone who missed.",
    },
    sections: [
      {
        h2: "How to use this template",
        html: `<ol>
<li><strong>Trigger on booking</strong> in your CRM, with each step timed relative to the appointment.</li>
<li><strong>Ask for a reply.</strong> "Reply YES to confirm" turns a reminder into a commitment and tells you who is at risk.</li>
<li><strong>Call the unconfirmed.</strong> Use a person or an AI assistant that discloses it is AI.</li>
<li><strong>Exit cleanly</strong> on attendance, cancellation, reschedule or opt-out.</li>
<li><strong>Track show rate weekly</strong> on the <a href="/templates/funnel-kpi-dashboard">funnel KPI dashboard</a>.</li>
</ol>
<p>The <a href="/glossary/show-rate">show rate</a> entry explains how to calculate and benchmark attendance.</p>`,
      },
      {
        h2: "Customizing it by industry",
        html: `<ul>
<li><strong>Coaching and consulting calls:</strong> add a pre-call video to the confirmation and 24-hour messages so prospects arrive warm.</li>
<li><strong>Home services estimates:</strong> confirm the address and arrival window, and text when the estimator is on the way.</li>
<li><strong>Med spas and dental:</strong> include preparation instructions and the cancellation policy. See <a href="/funnels-for/med-spas">med spa funnels</a>.</li>
<li><strong>Legal intake:</strong> remind clients which documents to bring and keep case details out of texts.</li>
<li><strong>Webinars:</strong> send reminders at 24 hours, 1 hour and live, then a replay sequence.</li>
</ul>`,
      },
      {
        h2: "Mistakes that keep no-shows high",
        html: `<ul>
<li><strong>Email-only reminders.</strong> Texts get read; emails often do not.</li>
<li><strong>Booking too far out.</strong> The longer the gap, the more people forget. Offer slots within 48 hours.</li>
<li><strong>No reason to attend.</strong> Tell them what they will leave with.</li>
<li><strong>Giving up after one miss.</strong> Many no-shows rebook if you ask kindly.</li>
<li><strong>Ignoring opt-outs.</strong> Stop every channel the moment someone replies STOP.</li>
</ul>
<p>Put a dollar figure on the problem with the <a href="/tools/no-show-cost-calculator">no-show cost calculator</a>. We build these flows in <a href="/crm-automation">CRM automation</a> and <a href="/ai-appointment-setter">AI appointment setter</a> projects.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$115,500", label: "Revenue from 174 coaching appointments", href: "/case-studies/coaching-116k-revenue-on-2214-ad-spend" },
        { value: "$64,960", label: "Webinar revenue from 140 appointments", href: "/case-studies/webinar-65k-revenue-on-2184-ad-spend" },
        { value: "$14,040", label: "Agency revenue from 180 appointments", href: "/case-studies/agency-14k-revenue-on-2824-ad-spend" },
      ],
      more: { label: "Browse all case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "How many reminders should I send before an appointment?", a: "Four touches works for most businesses: confirmation at booking, a reminder 24 hours before, a confirmation call or text the morning of, and a final text one hour before. Add a message five minutes after start for anyone who has not joined. More than that starts to feel pushy." },
      { q: "Do confirmation calls really help?", a: "Yes, especially for high-value appointments. A short call asks for an explicit yes and catches people who need to reschedule before they ghost. If staffing is a problem, an AI assistant can make these calls, provided it discloses that it is AI and offers a human when asked." },
      { q: "What show rate should I aim for?", a: "With three-channel reminders, our clients reach show-up rates of up to 88%. A realistic first target is 80% for calls booked from paid ads. If you sit below 70%, reminders are the fastest fix, followed by booking appointments sooner after opt-in." },
      { q: "What should I send after a no-show?", a: "A kind, short text within 30 minutes offering a new time, an email the next day, a final text on day 3 and a close-the-loop email on day 7. Avoid guilt or sarcasm. Many people missed for ordinary reasons and will rebook if it is easy." },
      { q: "Can I use this sequence in GoHighLevel?", a: "Yes. GoHighLevel workflows support appointment-based triggers, wait steps relative to the start time, SMS, email and call tasks, and exit conditions on status changes. The same structure also works in HubSpot, Calendly with Zapier, or any CRM that can schedule messages relative to an appointment." },
    ],
    related: ["/templates", "/tools/no-show-cost-calculator", "/glossary/show-rate", "/ai-appointment-setter", "/crm-automation", "/blog/reduce-sales-call-no-show-rate-reminder-automation"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/templates/lead-qualification-questions",
    kind: "template",
    keyword: "lead qualification questions",
    title: "Lead Qualification Questions by Industry (Scored)",
    description: "Free lead qualification questions for forms, quizzes, AI agents and setters: need, timing, authority, budget and fit by industry, with a scoring model.",
    eyebrow: "Free template",
    h1: "Lead qualification questions with a scoring model",
    intro:
      "These <strong>lead qualification questions</strong> cover need, timing, authority, budget, fit and commitment, with industry-specific fit questions for home services, personal injury, mortgage, coaching, B2B and med spas. A simple scoring model tells you which leads go straight to a closer and which go to nurture.",
    template: { file: "lead-qualification-questions.txt", body: `LEAD QUALIFICATION QUESTIONS
Funnels That Print | funnelsthatprint.com/templates/lead-qualification-questions

Use these on forms, quiz funnels, applications, AI voice agents and setter calls.
Pick 3 to 5 per stage. Ask easy questions first and contact details last.
Score each answer. Leads at or above your threshold go to a closer; the rest go to nurture.

============================================================
1. NEED (is there a real problem?)
============================================================
 - What made you reach out today?
 - What is the main thing you want to fix or achieve?
 - What happens if nothing changes in the next 6 months?
 - Have you tried to solve this before? What happened?

============================================================
2. TIMING (will they act soon?)
============================================================
 - How soon do you want to get this done?
     Right away (3) | Within 30 days (2) | 1 to 3 months (1) | Just researching (0)
 - Is there a deadline or event driving that timing?

============================================================
3. AUTHORITY (can they say yes?)
============================================================
 - Who else is involved in this decision?
 - If it makes sense on the call, could you move forward, or would you need to check with someone?
     I decide (2) | Me and a partner, both attending (2) | Someone else decides (0)

============================================================
4. BUDGET OR ABILITY TO PAY
============================================================
 - Have you set aside a budget for this?
     Yes, {range above minimum} (3) | Yes, {lower range} (1) | Not yet (0)
 - Our {service} typically starts at {starting price}. Does that fit what you had in mind?

============================================================
5. FIT (are they the customer you serve?)
============================================================
Adapt per industry:
 Home services / roofing / HVAC / solar
  - Do you own the property? (must be yes)
  - What is the property address or ZIP code? (inside service area)
  - Is this an emergency, a repair or a replacement?
 Personal injury
  - When did the accident happen? (inside statute window for your state)
  - Were you injured and did you receive medical treatment?
  - Do you already have an attorney? (must be no)
 Mortgage / insurance
  - Are you looking to buy, refinance or take cash out?
  - What is the approximate property value and loan balance?
  - Roughly what is your credit score range?
 Coaching / consulting / B2B
  - What is your current monthly revenue?
  - How many people are on your team?
  - What have you already invested in solving this?
 Med spa / clinic
  - Which treatment are you interested in?
  - Have you had this treatment before?
  - Which location is most convenient?

============================================================
6. COMMITMENT (will they show up?)
============================================================
 - If we find a plan that works, are you ready to start in the next {time frame}?
 - What would make this call a great use of your time?

============================================================
SCORING EXAMPLE
============================================================
Timing: 0 to 3 | Authority: 0 to 2 | Budget: 0 to 3 | Fit: pass/fail
Fit fail                  -> polite decline + resource or referral.
Score 6 to 8 + Fit pass   -> book directly with a closer.
Score 3 to 5 + Fit pass   -> book with a setter or AI agent for a second qualifying call.
Score 0 to 2              -> nurture sequence; re-ask timing in 30 days.

============================================================
WRITING RULES
============================================================
 - Use multiple-choice answers on forms; open questions on calls.
 - Never ask more than one question at a time.
 - Put the hardest question (budget, revenue) after the lead has answered three easy ones.
 - Save every answer to a CRM field so the closer sees it before the call.
 - Send qualified-lead events back to your ad platform so it learns which leads matter.
` },
    quick: {
      q: "What are the best lead qualification questions?",
      a: "Ask about need (what made you reach out), timing (how soon you want this done), authority (who else decides), budget (have you set one aside) and fit (do you own the property, what is your revenue). Ask easy questions first, score each answer, and send only qualified leads to a closer.",
    },
    sections: [
      {
        h2: "How to use these questions",
        html: `<ol>
<li><strong>Pick 3 to 5 questions</strong> for your form or quiz, and a fuller set for calls.</li>
<li><strong>Order them easy to hard.</strong> Contact details and budget come last.</li>
<li><strong>Score every answer</strong> and save it to a CRM field so closers see it before the call.</li>
<li><strong>Route by score:</strong> book qualified leads directly, send the middle tier to a setter or <a href="/ai-voice-agents">AI voice agent</a>, and nurture the rest.</li>
<li><strong>Feed results back to ads.</strong> Send qualified-lead events through <a href="/meta-conversions-api-setup">Conversions API setup</a> so the algorithm learns who matters.</li>
</ol>
<p>The <a href="/glossary/crm-pipeline">CRM pipeline</a> entry shows how scored leads move through stages.</p>`,
      },
      {
        h2: "Customizing by industry",
        html: `<p>Fit questions change most by industry. Home services must confirm ownership and service area. Personal injury must check accident date and existing representation. Mortgage needs purpose, property value and credit range. Coaching and B2B need revenue and team size. Med spas need treatment interest and location. Our <a href="/funnels-for">funnels by industry</a> pages show how each question set is built into a quiz.</p>`,
      },
      {
        h2: "Qualification mistakes",
        html: `<ul>
<li><strong>Too many questions on the form.</strong> Each extra field costs opt-ins. Move depth to the call.</li>
<li><strong>Budget first.</strong> It scares people off before they are invested.</li>
<li><strong>Open questions on forms.</strong> Use multiple choice; save open questions for conversation.</li>
<li><strong>Not saving answers.</strong> A closer who re-asks everything wastes the first ten minutes.</li>
<li><strong>Optimizing ads for form fills.</strong> Cheap leads that fail qualification raise cost per sale.</li>
</ul>
<p>See what better qualification is worth with the <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a>.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$388,000", label: "MVA revenue from 1,079 leads at 19.09x ROAS", href: "/case-studies/mva-388k-revenue-on-20k-ad-spend" },
        { value: "$65K+", label: "Mortgage revenue from 208 leads", href: "/case-studies/mortgage-65k-plus-revenue-on-5300-ad-spend" },
        { value: "20.3x", label: "ROAS on 152 B2B leads", href: "/case-studies/lead-gen-152-leads" },
      ],
      more: { label: "See lead generation results", href: "/case-leadgen" },
    },
    faqs: [
      { q: "How many qualification questions should a form have?", a: "Three to five on a form or quiz, with contact details last. That is enough to filter obvious mismatches without killing opt-in rate. Ask deeper questions on the first call, where a setter or AI agent can follow up on answers and build rapport at the same time." },
      { q: "Should I ask about budget on the form?", a: "For high-ticket offers, a multiple-choice budget or revenue question near the end of the quiz works well, because it filters people who cannot buy. For local services, skip budget on the form and ask about timing and ownership instead. Budget comes up naturally at the estimate." },
      { q: "What is BANT and do I still need it?", a: "BANT stands for budget, authority, need and timing. It is a useful checklist, and our template covers all four plus fit and commitment. Treat it as a guide rather than a gate: a lead with strong need and urgency is often worth a call even if budget is unclear." },
      { q: "Can an AI agent ask these questions?", a: "Yes. AI voice agents work well for structured qualification because they ask every question in order, record answers to the CRM and book qualified leads immediately. Keep the questions short, one at a time, and give the agent a clear rule for when to transfer to a person." },
      { q: "How do I set the qualification threshold?", a: "Start with your closers' judgment: score the last 50 deals and see which answers the buyers gave. Set the threshold where most past buyers would pass. Review monthly, and if closers say too many weak calls get through, raise it a point and watch cost per sale." },
    ],
    related: ["/templates", "/quiz-funnels", "/glossary/crm-pipeline", "/templates/ai-voice-agent-script", "/tools/cost-per-lead-calculator", "/blog/ai-sales-funnels-voice-lead-qualification-2026", "/blog/quiz-funnel-examples"],
    parent: HUB,
    updated: U,
  },
  {
    path: "/templates/funnel-kpi-dashboard",
    kind: "template",
    keyword: "funnel kpi dashboard template",
    title: "Funnel KPI Dashboard Template (Google Sheets Ready)",
    description: "Free funnel KPI dashboard template: weekly ad, lead, booking, show, close and revenue metrics with formulas, targets, color rules and a review routine.",
    eyebrow: "Free template",
    h1: "Funnel KPI dashboard template",
    intro:
      "This <strong>funnel KPI dashboard template</strong> is a three-tab spreadsheet layout for tracking a lead funnel week by week: ad spend through revenue with formulas for every rate, a speed-and-follow-up tab, and a targets tab with break-even rules. Paste it into Google Sheets or Excel and fill one row per week.",
    template: { file: "funnel-kpi-dashboard.txt", body: `FUNNEL KPI DASHBOARD TEMPLATE
Funnels That Print | funnelsthatprint.com/templates/funnel-kpi-dashboard

Paste into Google Sheets or Excel. One row per week. Columns A to T below.
Fill the INPUT columns from your ad manager, funnel builder and CRM.
CALCULATED columns use the formulas shown (row 2 shown; copy down).

============================================================
TAB 1. WEEKLY FUNNEL (one row per week)
============================================================
Col | Metric                         | Type       | Source / formula
A   | Week starting                  | INPUT      | Monday date
B   | Ad spend                       | INPUT      | Ad manager
C   | Impressions                    | INPUT      | Ad manager
D   | Link clicks                    | INPUT      | Ad manager
E   | Landing page visitors          | INPUT      | Funnel analytics
F   | Leads                          | INPUT      | CRM (new contacts from ads)
G   | Verified / qualified leads     | INPUT      | CRM tag or score
H   | Calls booked                   | INPUT      | Calendar
I   | Calls attended                 | INPUT      | Calendar / CRM
J   | Sales                          | INPUT      | CRM or payments
K   | Revenue (cash collected)       | INPUT      | Payments
L   | CTR                            | CALC       | =D2/C2
M   | Opt-in rate                    | CALC       | =F2/E2
N   | Cost per lead                  | CALC       | =B2/F2
O   | Qualified lead rate            | CALC       | =G2/F2
P   | Booking rate                   | CALC       | =H2/F2
Q   | Show rate                      | CALC       | =I2/H2
R   | Close rate                     | CALC       | =J2/I2
S   | Cost per sale                  | CALC       | =B2/J2
T   | ROAS                           | CALC       | =K2/B2

Wrap each formula in IFERROR(...,"") so empty weeks do not show errors.

============================================================
TAB 2. SPEED AND FOLLOW-UP (one row per week)
============================================================
A   | Week starting                  | INPUT
B   | Median time to first contact   | INPUT  | CRM report (seconds or minutes)
C   | % leads contacted < 1 minute   | INPUT  | CRM report
D   | % leads contacted < 5 minutes  | INPUT  | CRM report
E   | Leads never contacted          | INPUT  | CRM report
F   | Calls confirmed before start   | INPUT  | CRM tag
G   | Confirmation rate              | CALC   | =F2/'Weekly funnel'!H2
H   | No-shows rebooked              | INPUT  | CRM

============================================================
TAB 3. TARGETS (set once, review monthly)
============================================================
Metric              | Your target | Red if
Cost per lead       | {target}    | above break-even CPL
Booking rate        | {target}%   | down 20% vs 4-week average
Show rate           | 80%+        | below 70%
Close rate          | {target}%   | down 20% vs 4-week average
Cost per sale       | {target}    | above gross profit per sale
ROAS                | {target}x   | below break-even ROAS (1 / gross margin)
Time to first contact | under 60 seconds | over 5 minutes

Break-even CPL = revenue per customer x gross margin x lead-to-customer rate.
Break-even ROAS = 1 / gross margin.

============================================================
CONDITIONAL FORMATTING
============================================================
Green: at or better than target. Amber: within 10% of target. Red: worse than the "Red if" rule.
Apply to columns L to T on Tab 1 and B to D on Tab 2.

============================================================
WEEKLY REVIEW (15 minutes, same time every week)
============================================================
1. Which metric turned red this week?
2. Is it a volume problem (spend, CTR, opt-in) or a follow-up problem (booking, show, close)?
3. What is the one change we will make this week? Owner: {name}. Due: {date}.
4. Did last week's change move its metric? Keep, adjust or roll back.

Notes:
 - Use cash collected for revenue, not contract value, unless you track both.
 - Count leads only once, even if they opt in twice.
 - Compare 4-week rolling averages before reacting to a single week.
` },
    quick: {
      q: "What KPIs should a sales funnel dashboard track?",
      a: "Track ad spend, landing page visitors, leads, qualified leads, calls booked, calls attended, sales and cash collected. From those, calculate opt-in rate, cost per lead, booking rate, show rate, close rate, cost per sale and ROAS. Add time to first contact, because speed drives booking rate.",
    },
    sections: [
      {
        h2: "How to use this template",
        html: `<ol>
<li><strong>Create three tabs</strong> named as in the file and paste the column headers.</li>
<li><strong>Enter inputs every Monday</strong> for the previous week from your ad manager, funnel builder and CRM.</li>
<li><strong>Copy the formulas down</strong> and wrap them in IFERROR so empty weeks stay clean.</li>
<li><strong>Set targets</strong> using break-even cost per lead and break-even ROAS from our <a href="/tools/cost-per-lead-calculator">cost per lead calculator</a> and <a href="/tools/roas-calculator">ROAS calculator</a>.</li>
<li><strong>Hold a 15-minute weekly review</strong> and commit to one change.</li>
</ol>
<p>The <a href="/glossary/cost-per-lead">cost per lead</a> entry explains which leads to count.</p>`,
      },
      {
        h2: "Customizing it by business type",
        html: `<ul>
<li><strong>Call-based offers:</strong> use the template as is. Add a column for pipeline value if deals take weeks to close.</li>
<li><strong>Local services:</strong> rename calls to estimates and add jobs won and average ticket.</li>
<li><strong>eCommerce and low-ticket:</strong> drop booking and show columns, add checkout conversion, average order value and bump take rate. Our <a href="/scalelowticket">$847K low-ticket case</a> tracks exactly these.</li>
<li><strong>Webinars:</strong> add registrations, attendance and replay views between leads and calls.</li>
</ul>`,
      },
      {
        h2: "Dashboard mistakes",
        html: `<ul>
<li><strong>Tracking only ad metrics.</strong> CTR and CPL tell you nothing about the leak after the form.</li>
<li><strong>Using platform revenue.</strong> Use cash collected; platforms miss events without <a href="/meta-conversions-api-setup">Conversions API</a> tracking.</li>
<li><strong>Reacting to one week.</strong> Compare four-week rolling averages.</li>
<li><strong>No owner.</strong> Each red metric needs a name and a due date.</li>
</ul>
<p>If the dashboard shows a gap you cannot close, our <a href="/services">services</a> cover the fix.</p>`,
      },
    ],
    proof: {
      items: [
        { value: "$1.52M", label: "High-ticket consulting funnel in 19 months", href: "/milliondollarcasestudy" },
        { value: "$7.61", label: "Cost per lead across 8,810 MVA leads", href: "/case-studies/mva-8810-leads-at-7-61-cpl" },
        { value: "$135,143", label: "Low-ticket revenue from 892 sales", href: "/case-studies/low-ticket-funnel-135k-revenue-on-36k-ad-spend" },
      ],
      more: { label: "Browse all case studies", href: "/case-studies/all" },
    },
    faqs: [
      { q: "Should I track funnel KPIs weekly or daily?", a: "Weekly for decisions, daily only for spend and obvious breakages. Daily numbers swing too much on normal volumes to act on, and reacting to them causes constant changes that never get a fair test. Review four-week rolling averages before changing offers, pages or budgets." },
      { q: "Which KPI matters most?", a: "Cost per sale against gross profit per sale, because it combines every stage. When it is off, the stage rates show where: opt-in rate points to the page, booking rate to follow-up speed, show rate to reminders and close rate to qualification or the sales call." },
      { q: "Can I automate this dashboard?", a: "Yes. Most inputs can sync automatically from ad platforms and your CRM using native integrations or connectors into Google Sheets or a reporting tool. Start manually for a month so you understand every number, then automate the inputs that take the most time to copy." },
      { q: "Why track time to first contact?", a: "Because it predicts booking rate better than almost anything else after the click. Across our 60+ speed-to-lead deployments, median first contact was 38 seconds and lead-to-booking rose 2.4x. If booking rate drops, check this column first before rewriting ads or pages." },
      { q: "What if I do not track show rate or close rate yet?", a: "Start now with a simple CRM tag or calendar status for attended and sold. Even two weeks of data beats a guess. Until you have it, use conservative estimates in the targets tab and the funnel conversion calculator, and replace them as real numbers come in." },
    ],
    related: ["/templates", "/tools/funnel-conversion-calculator", "/tools/roas-calculator", "/glossary/cost-per-lead", "/meta-conversions-api-setup", "/blog/sales-funnel-stages"],
    parent: HUB,
    updated: U,
  },
];
