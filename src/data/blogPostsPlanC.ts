import type { BlogPost } from "./blogPosts";
import { AUTHORS } from "./authors";

export const PLAN_POSTS_C: BlogPost[] = [
  {
    slug: "speed-to-lead-statistics",
    metaTitle: "Speed to Lead Statistics 2026: Research and Our Data",
    metaDescription: "Speed to lead statistics from HBR and the Lead Response Management study, plus our data from 60+ deployments: a 38-second median first contact.",
    keyTakeaways: [
      "The best-known research agrees on direction: leads contacted within minutes are far more likely to be reached and qualified than leads contacted hours later, and many companies still take more than a day to respond.",
      "Across 60+ Funnels That Print deployments, automated follow-up produced a median first contact of 38 seconds and reached 84% of leads inside the first minute.",
      "On the same ads and pages, that speed layer lifted lead-to-booking 2.4x. Response time is usually the cheapest conversion lever a lead gen business has.",
      "Measure your own speed to lead as the time from form submit to the first real two-way contact attempt, reported as a median and as the share of leads reached inside 60 seconds.",
    ],
    title: "Speed to Lead Statistics 2026: What the Research Says and What 60+ Deployments Showed Us",
    headline: "The published research on lead response time, read carefully, next to our own first-party numbers: a 38-second median first contact, 84% of leads reached inside a minute and a 2.4x lift in lead-to-booking.",
    excerpt: "Most speed to lead statistics online are recycled from two studies, often misquoted. Here is what that research actually covers, what our own data from 60+ deployments shows, how response time plays out by industry, and how to measure your own number this week.",
    category: "AI & Automation",
    author: AUTHORS.rahul,
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    readTime: "8 min read",
    image: "/img/blog/speed-to-lead-statistics.jpg",
    imageAlt: "Dashboard showing a lead response time histogram with most first contacts under 60 seconds next to a phone receiving an instant text message",
    keywords: [
      "speed to lead statistics",
      "lead response time statistics",
      "speed to lead",
      "lead response time study",
      "how fast to respond to leads",
      "lead response management study",
      "5 minute lead response rule",
    ],
    metrics: [
      { label: "Median First Contact", value: "38 sec", sub: "across 60+ deployments" },
      { label: "Reached in Minute One", value: "84%", sub: "of new leads" },
      { label: "Lead-to-Booking Lift", value: "2.4x", sub: "same ads, same pages" },
      { label: "Show-Up Rate", value: "Up to 88%", sub: "with 3-channel reminders" },
    ],
    toc: [
      { id: "why-it-matters", title: "1. Why Speed to Lead Statistics Matter" },
      { id: "published-research", title: "2. What the Published Research Says" },
      { id: "our-data", title: "3. Our First-Party Data From 60+ Deployments" },
      { id: "stats-table", title: "4. Speed to Lead Statistics at a Glance" },
      { id: "by-industry", title: "5. Speed to Lead by Industry" },
      { id: "measure-yours", title: "6. How to Measure Your Own Speed to Lead" },
      { id: "why-slow", title: "7. Why Most Businesses Are Still Slow" },
      { id: "improve-it", title: "8. How to Get Under 60 Seconds" },
      { id: "faq", title: "9. Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "What is a good speed to lead time?",
        answer: "Under a minute for the first contact attempt is achievable with automation, and that is the target we build to. Across our 60+ deployments the median first contact was 38 seconds and 84% of leads were reached inside the first minute. Anything measured in hours means you are paying for leads that competitors reach first.",
      },
      {
        question: "Is the 5-minute rule for lead response real?",
        answer: "It comes from the Lead Response Management study by James Oldroyd and InsideSales.com, which found contact and qualification odds fell sharply when calls came 30 minutes after an inquiry instead of 5. It is vendor data rather than a peer-reviewed paper, so treat the exact multipliers as directional, but the pattern is consistent.",
      },
      {
        question: "Where does the Harvard speed to lead statistic come from?",
        answer: "From the 2011 Harvard Business Review article The Short Life of Online Sales Leads by Oldroyd, McElheran and Elkington. It reported that firms contacting a lead within an hour were far more likely to qualify it than firms that waited longer, and that many companies took more than a day to respond or never responded.",
      },
      {
        question: "Does speed to lead matter for high-ticket offers?",
        answer: "Yes, though the goal shifts from closing on the first call to booking a qualified conversation while intent is high. In high-ticket funnels we pair instant contact with an application and reminders. The first minute protects the booking, and the reminder sequence protects the show-up rate, which reached up to 88% with three channels.",
      },
      {
        question: "Can an AI voice agent improve speed to lead?",
        answer: "It removes the human bottleneck. An AI voice agent can call every new lead within seconds, at any hour, ask qualifying questions and book the appointment. In our deployments AI calling cost roughly $0.10 to $0.25 per minute, about $3 to $9 per booked appointment, compared with $40 to $120 using human setters.",
      },
      {
        question: "How do I measure speed to lead in my CRM?",
        answer: "Record two timestamps per lead: the form submit time and the first outbound call or two-way message. Subtract them, then report the median, the share under 60 seconds and the share never contacted. Split by source and by hour of day, because nights and weekends usually hide the worst delays.",
      },
    ],
    related: [
      "speed-to-lead-automation-gohighlevel-60-second-follow-up",
      "ai-appointment-setter-voice-agent-cost-setup-results",
      "reduce-sales-call-no-show-rate-reminder-automation",
    ],
    contentHtml: `
<section id="why-it-matters">
  <h2>1. Why Speed to Lead Statistics Matter</h2>
  <p><strong>Speed to lead statistics</strong> answer one practical question: how much revenue do you lose for every minute a new lead waits? The answer from both published research and our own client data is the same in direction, if not in exact size. Leads go cold fast, and the business that reaches them first usually gets the conversation.</p>
  <p>The problem with most statistics pages on this topic is that they repeat the same few numbers without saying where they came from, and some of the figures in circulation cannot be traced to any study at all. In this article we separate three things clearly: what the two best-known studies actually covered, what we measured ourselves across more than 60 deployments, and what you should measure in your own business.</p>
  <p>If you need the definition first, see our <a href="/glossary/speed-to-lead">speed to lead glossary entry</a>. If you already know the theory and want the system, our <a href="/speed-to-lead">speed-to-lead service</a> page shows what we build.</p>
</section>

<section id="published-research">
  <h2>2. What the Published Research Says</h2>
  <p>Two pieces of research are behind almost every lead response statistic you will see. Both are more than a decade old, both were run before AI calling existed, and both point the same way.</p>
  <h3>Harvard Business Review, "The Short Life of Online Sales Leads" (2011)</h3>
  <p>Written by James Oldroyd, Kristina McElheran and David Elkington and published in Harvard Business Review in March 2011, this article reported an audit of 2,241 US companies that were sent web-generated test leads and timed on their response. The headline findings, as reported in the article and widely summarized since, were that companies which tried to contact a lead within an hour were nearly seven times as likely to qualify it as those that waited even an hour longer, and that a large share of companies took more than 24 hours to respond or never responded at all. Average response times were measured in days, not minutes.</p>
  <h3>The Lead Response Management study (Oldroyd and InsideSales.com)</h3>
  <p>The second source is the Lead Response Management study, a 2007 analysis of call data from InsideSales.com customers led by James Oldroyd, then at MIT. It is often called "the MIT study", although it was vendor data analyzed by an academic rather than a peer-reviewed paper. Its most quoted finding is that the odds of reaching a lead fell around 100 times, and the odds of qualifying it around 21 times, when the first call came 30 minutes after the inquiry instead of 5 minutes.</p>
  <div class="callout-box">
    <div class="callout-badge">How to read these numbers</div>
    <p>Treat the exact multipliers as directional. The samples are old, the methods differ, and many pages online quote figures neither study published. What holds up is the shape of the curve: response odds are highest in the first few minutes and fall steeply after that. That is why we measure our own results in seconds.</p>
  </div>
</section>

<section id="our-data">
  <h2>3. Our First-Party Data From 60+ Deployments</h2>
  <p>Since 2019 we have documented more than 275 client results, and more than 60 of those builds included an automated speed-to-lead layer: an instant text, an immediate call attempt, CRM routing and a booking link. Here is what that layer produced.</p>
  <ul>
    <li><strong>Median first contact: 38 seconds.</strong> Measured from form submit to the first outbound contact attempt.</li>
    <li><strong>84% of leads reached inside the first minute.</strong> The remaining leads were mostly submissions with wrong numbers or leads who asked for a later callback.</li>
    <li><strong>Lead-to-booking up 2.4x.</strong> Compared with the same client's previous follow-up process, on the same ads and landing pages.</li>
    <li><strong>Show-up rate up to 88%</strong> once the booked call was protected with three-channel reminders across SMS, email and calls.</li>
  </ul>
  <p>The important detail is what did not change. The ads, the offer and the pages stayed the same. The only difference was how quickly and how consistently a human or an <a href="/ai-voice-agents">AI voice agent</a> reached the lead. We walk through the exact workflow in our <a href="/blog/speed-to-lead-automation-gohighlevel-60-second-follow-up">60-second follow-up automation guide</a>.</p>
</section>

<section id="stats-table">
  <h2>4. Speed to Lead Statistics at a Glance</h2>
  <p>The table keeps each figure next to its source and how much weight it can carry.</p>
  <div class="table-wrap">
    <table class="data-table">
      <thead>
        <tr><th>Statistic</th><th>Source</th><th>How to use it</th></tr>
      </thead>
      <tbody>
        <tr><td>Contact within an hour: nearly 7x more likely to qualify than an hour later</td><td>Harvard Business Review, 2011</td><td>Directional; B2B and B2C web leads audited in 2010</td></tr>
        <tr><td>Many companies took more than 24 hours or never responded</td><td>Harvard Business Review, 2011</td><td>Shows how low the bar still is in most markets</td></tr>
        <tr><td>Contact odds about 100x lower at 30 minutes vs 5 minutes</td><td>Lead Response Management study, 2007</td><td>Directional; vendor call data, not peer reviewed</td></tr>
        <tr><td>Qualification odds about 21x lower at 30 minutes vs 5 minutes</td><td>Lead Response Management study, 2007</td><td>Directional; same caveats</td></tr>
        <tr class="highlight-row"><td><strong>Median first contact 38 seconds</strong></td><td><strong>Funnels That Print, 60+ deployments</strong></td><td><strong>A realistic automated benchmark</strong></td></tr>
        <tr class="highlight-row"><td><strong>84% of leads reached inside 60 seconds</strong></td><td><strong>Funnels That Print, 60+ deployments</strong></td><td><strong>Target share for your own reporting</strong></td></tr>
        <tr class="highlight-row"><td><strong>Lead-to-booking 2.4x higher</strong></td><td><strong>Funnels That Print, 60+ deployments</strong></td><td><strong>Expected scale of the upside</strong></td></tr>
      </tbody>
    </table>
  </div>
</section>

<section id="by-industry">
  <h2>5. Speed to Lead by Industry</h2>
  <p>The first minute matters everywhere, but the reason it matters changes by industry. These notes come from our builds; the linked case studies show the lead volumes involved.</p>
  <h3>Roofing, HVAC and home services</h3>
  <p>Homeowners often submit to several contractors at once, so the first company to call usually sets the inspection. When leads are this cheap, for example <a href="/case-studies/roofing-537-leads-at-4-27-cpl">537 roofing leads at $4.27</a>, the leak is almost never the ad. It is the leads nobody called that afternoon.</p>
  <h3>Personal injury</h3>
  <p>Accident victims tend to sign with the first firm that sounds credible. Intake speed decides cases, which is why our MVA funnels route verified leads straight to an intake call. One build produced <a href="/case-studies/mva-388k-revenue-on-20k-ad-spend">$388,000 in revenue from 1,079 leads</a> on $20,324 of ad spend.</p>
  <h3>Real estate and mortgage</h3>
  <p>Buyer and refinance leads are time-sensitive and comparison-shop heavily. Agents who are showing homes cannot answer in seconds, so this is where an AI first touch earns its keep. Our <a href="/ai-appointment-setter/real-estate">AI appointment setter for real estate</a> page covers that setup, and the <a href="/case-studies/real-estate-lead-generation">real estate case studies</a> show typical lead costs.</p>
  <h3>Med spas</h3>
  <p>Treatment leads are impulse-driven. A fast text with a booking link converts interest into an appointment before the visitor scrolls to a competitor. See the <a href="/case-studies/med-spa-marketing">med spa case studies</a> for volumes.</p>
  <h3>Coaching and consulting</h3>
  <p>High-ticket buyers will wait a little longer, but they rarely wait a day. Here the first contact books a qualified call, and reminders do the rest. Our <a href="/milliondollarcasestudy">$1.52M consulting funnel</a> combined fast multi-touch follow-up with qualification filters.</p>
</section>

<section id="measure-yours">
  <h2>6. How to Measure Your Own Speed to Lead</h2>
  <p>Industry statistics are useful for motivation. Your own number is what you can manage. Here is the measurement we set up on every build:</p>
  <ol>
    <li><strong>Capture two timestamps per lead.</strong> The form submit time and the first outbound contact attempt, either a call or a two-way message. An automated "thanks, we got it" email does not count.</li>
    <li><strong>Report the median, not the average.</strong> A handful of weekend leads answered on Monday will wreck an average and hide how fast your typical response really is.</li>
    <li><strong>Track three shares:</strong> leads reached inside 60 seconds, inside 5 minutes and never contacted.</li>
    <li><strong>Split by source and hour of day.</strong> Night, weekend and lunch-hour leads are usually where the delays sit.</li>
    <li><strong>Connect speed to outcomes.</strong> Compare booking rate for leads reached in the first minute against those reached later. That gap is your business case.</li>
  </ol>
  <p>Put these numbers on one weekly view. Our <a href="/templates/funnel-kpi-dashboard">funnel KPI dashboard template</a> includes a speed-to-lead row, and the <a href="/tools/funnel-conversion-calculator">funnel conversion calculator</a> shows what a higher booking rate is worth at your lead volume.</p>
</section>

<section id="why-slow">
  <h2>7. Why Most Businesses Are Still Slow</h2>
  <p>If the research has been public for over a decade, why do so many audits still find response times measured in hours? In the accounts we review before a build, the causes are nearly always the same:</p>
  <ul>
    <li><strong>Leads land in an inbox, not a pipeline.</strong> Form notifications go to a shared email address that someone checks between other jobs.</li>
    <li><strong>Nobody owns the first touch.</strong> Sales assumes marketing has followed up, and marketing assumes sales has.</li>
    <li><strong>Business hours.</strong> A large share of paid leads arrive in the evening and at weekends, exactly when nobody is at a desk.</li>
    <li><strong>Lead ads without integration.</strong> Instant form leads sit inside the ad platform until someone downloads them.</li>
    <li><strong>No reporting.</strong> If response time is not on a dashboard, it is not managed, and it drifts.</li>
  </ul>
  <p>None of these are effort problems. They are wiring problems, which is why a one-time build fixes them for good.</p>
</section>

<section id="improve-it">
  <h2>8. How to Get Under 60 Seconds</h2>
  <p>No sales team answers every lead in under a minute by trying harder. Getting there is a systems problem with four parts:</p>
  <ul>
    <li><strong>Instant text on submit</strong> with the lead's name and a booking link. Our <a href="/templates/sms-follow-up-templates">SMS follow-up templates</a> include the first message we use.</li>
    <li><strong>An immediate call attempt</strong> from a human queue or an <a href="/ai-appointment-setter">AI appointment setter</a> that qualifies and books on the spot.</li>
    <li><strong>CRM routing</strong> so every lead lands in a pipeline stage with an owner and a timer, set up through <a href="/crm-automation">CRM automation</a>.</li>
    <li><strong>A retry cadence</strong> over the first hour and day for leads who did not pick up.</li>
  </ul>
  <p>This is the layer that produced our 38-second median, and it is part of the $1,999 complete suite, built in 5 to 10 business days. If you want to see what it would change in your pipeline, <a href="/contact">book a strategy call</a> and bring your current response time.</p>
</section>
`,
  },
  {
    slug: "quiz-funnel-examples",
    metaTitle: "Quiz Funnel Examples: 7 Real Builds and Patterns",
    metaDescription: "Quiz funnel examples from roofing, MVA, med spa and coaching builds, plus product finder, assessment and calculator patterns, with question structures.",
    keyTakeaways: [
      "The best quiz funnel examples ask three to six easy multiple-choice questions, collect contact details last and end on a result page that leads to one clear next step.",
      "Our real builds show the range: 537 roofing leads at $4.27 from a multi-step estimator, 1,079 MVA leads that produced $388,000 in revenue, and 174 coaching appointments on $2,214 of ad spend.",
      "Product finders, assessments and calculators are reusable patterns. Pick the one that matches what the buyer wants to know about themselves.",
      "A quiz only pays off when the follow-up uses the answers. Instant, answer-specific texts and calls reached 84% of leads inside the first minute across our deployments.",
    ],
    title: "Quiz Funnel Examples: 7 Real Builds and Patterns With Questions, Result Pages and Follow-Up",
    headline: "Four quiz and estimator funnels from real client builds with their numbers, three reusable patterns clearly labeled as patterns, and the question structures, result pages and follow-up that make each one work.",
    excerpt: "Most quiz funnel examples are screenshots with no numbers. These seven break down question structure, result page and follow-up: four real client builds in roofing, personal injury, med spa and coaching, plus product finder, assessment and calculator patterns.",
    category: "Funnel Architecture",
    author: AUTHORS.gaurav,
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    readTime: "8 min read",
    image: "/img/blog/quiz-funnel-examples.jpg",
    imageAlt: "Three phone screens showing a multiple-choice quiz question, a progress bar and a personalized result page with a booking button",
    keywords: [
      "quiz funnel examples",
      "quiz funnel",
      "lead generation quiz examples",
      "interactive quiz funnel",
      "estimator funnel",
      "assessment funnel examples",
      "product finder quiz",
    ],
    metrics: [
      { label: "Roofing Estimator", value: "$4.27", sub: "cost per lead, 537 leads" },
      { label: "MVA Qualification", value: "$388K", sub: "revenue on $20,324 spend" },
      { label: "Coaching Appointments", value: "174", sub: "on $2,214 ad spend" },
      { label: "Med Spa Leads", value: "1,011", sub: "on $4,703 ad spend" },
    ],
    toc: [
      { id: "what-makes-a-good-quiz", title: "1. What Makes a Good Quiz Funnel" },
      { id: "roofing-estimator", title: "2. Roofing Estimator: 537 Leads at $4.27" },
      { id: "mva-qualification", title: "3. MVA Qualification Quiz: $388K on $20K" },
      { id: "med-spa-quiz", title: "4. Med Spa Treatment Quiz: 1,011 Leads" },
      { id: "coaching-diagnostic", title: "5. Coaching Diagnostic: 174 Appointments" },
      { id: "patterns", title: "6. Three Reusable Patterns (Not Client Builds)" },
      { id: "comparison", title: "7. All Seven Compared" },
      { id: "writing-questions", title: "8. How to Write Quiz Questions" },
      { id: "follow-up", title: "9. Result Pages and Follow-Up That Convert" },
      { id: "mistakes", title: "10. Common Quiz Funnel Mistakes" },
      { id: "faq", title: "11. Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "What is a quiz funnel?",
        answer: "A quiz funnel replaces a plain opt-in form with a short series of questions. The visitor answers three to six multiple-choice questions, enters contact details at the end and sees a personalized result with one next step, such as booking a call or claiming an offer. The answers also qualify and segment the lead.",
      },
      {
        question: "How many questions should a quiz funnel have?",
        answer: "Three to six for most lead generation offers. Local services do well with three or four quick questions, while high-ticket diagnostics can stretch to six or seven if each question feels relevant. Put the easiest questions first, ask for contact details last, and remove any question you will not use in follow-up or routing.",
      },
      {
        question: "Do quiz funnels work for local businesses?",
        answer: "Yes, usually as estimators. A roofing or HVAC estimator asks about the job, the property and timing, then promises a quote. One of our roofing builds generated 537 leads at $4.27 each. The key is fast follow-up, because a homeowner who just requested an estimate is often comparing several contractors at once.",
      },
      {
        question: "What should a quiz result page include?",
        answer: "A result that reflects the answers, a short explanation of why it fits, one piece of proof and a single call to action. For booked-call offers, put the calendar on the result page. For products, show the recommended item with a direct checkout button. Generic results that ignore the answers waste the trust the quiz built.",
      },
      {
        question: "Is a quiz funnel better than a VSL funnel?",
        answer: "Neither wins everywhere. Quizzes tend to convert cold traffic into leads more efficiently and qualify as they go, while a VSL does more selling for complex, high-priced offers. Many of our high-ticket builds combine both, with a short diagnostic first and a video on the result page before the calendar.",
      },
      {
        question: "Which tools can build a quiz funnel?",
        answer: "Most funnel builders and CRMs, including GoHighLevel, support multi-step forms with conditional logic, and dedicated quiz tools exist too. The tool matters less than the connection: answers must flow into the CRM as fields and tags so follow-up messages, routing and ad conversion events can use them immediately.",
      },
    ],
    related: [
      "high-ticket-vsl-vs-interactive-quiz-funnel-2026",
      "sales-funnel-examples",
      "how-to-increase-funnel-conversion-rate",
    ],
    contentHtml: `
<section id="what-makes-a-good-quiz">
  <h2>1. What Makes a Good Quiz Funnel</h2>
  <p>The <strong>quiz funnel examples</strong> in this article come from two places. Four are real client builds from our case studies, with the ad spend and results attached. Three are reusable patterns we use when scoping new builds, and they are labeled as patterns because they are not tied to a single client result.</p>
  <p>Every quiz funnel that worked for us shared the same skeleton:</p>
  <ul>
    <li><strong>A specific promise in the ad and headline</strong>, such as an estimate, a case review or a personalized plan, rather than "take our quiz".</li>
    <li><strong>Three to six easy multiple-choice questions</strong>, one per screen, with a progress bar.</li>
    <li><strong>Contact details last</strong>, after the visitor has invested in the answers, with phone verification where junk leads are a risk.</li>
    <li><strong>A result page with one next step</strong>: book, buy or talk.</li>
    <li><strong>Follow-up that uses the answers</strong>, starting within the first minute.</li>
  </ul>
  <p>Our <a href="/templates/lead-qualification-questions">lead qualification questions template</a> lists the questions that do the most sorting work by industry, and the <a href="/quiz-funnels">quiz funnel service</a> page shows how we build them.</p>
</section>

<section id="roofing-estimator">
  <h2>2. Roofing Estimator: 537 Leads at $4.27</h2>
  <p><strong>Type:</strong> real client build, local home services.</p>
  <p><strong>Question structure:</strong> a short estimator behind a Meta ad. What does the roof need (repair, replacement, storm damage, not sure)? What type of property? How soon do you want the work done? Is the homeowner the decision-maker? Then name, address and phone, verified by a text code.</p>
  <p><strong>Result page:</strong> confirms the estimate request and tells the homeowner exactly what happens next and when.</p>
  <p><strong>Follow-up:</strong> an instant text and a call attempt within a minute, using the job type from the answers.</p>
  <p><strong>Result:</strong> <a href="/case-studies/roofing-537-leads-at-4-27-cpl">537 leads at $4.27 cost per lead</a> on $2,292 of ad spend. Phone verification kept the cheap leads real. More builds are on the <a href="/case-studies/roofing-lead-generation">roofing case studies</a> hub.</p>
</section>

<section id="mva-qualification">
  <h2>3. MVA Qualification Quiz: $388K on $20K</h2>
  <p><strong>Type:</strong> real client build, personal injury.</p>
  <p><strong>Question structure:</strong> a multi-step free case review. When did the accident happen? Were you injured and did you get medical treatment? Were you at fault? Do you already have a lawyer? Each answer screens out leads the firm cannot take, before intake staff spend time on them.</p>
  <p><strong>Result page:</strong> tells qualified claimants an intake specialist is calling now, and gives everyone else a polite exit.</p>
  <p><strong>Follow-up:</strong> an instant intake call to verified, qualified leads.</p>
  <p><strong>Result:</strong> <a href="/case-studies/mva-388k-revenue-on-20k-ad-spend">1,079 leads at $18.94, producing $388,000 in revenue on $20,324 of ad spend</a>, a 19.09x return. A separate MVA build with the same multi-step approach delivered <a href="/case-studies/mva-1865-leads-at-5-24-cpl">1,865 leads at $5.24</a>.</p>
  <p><strong>Lesson:</strong> qualification questions may raise cost per lead slightly, but they lower cost per signed case, which is the number that matters.</p>
</section>

<section id="med-spa-quiz">
  <h2>4. Med Spa Treatment Quiz: 1,011 Leads</h2>
  <p><strong>Type:</strong> real client build, aesthetics.</p>
  <p><strong>Question structure:</strong> a few quick taps on treatment interest, the area of concern, whether the visitor has had the treatment before and how soon they want to book. Short, visual and mobile-first, because med spa traffic is almost entirely on phones.</p>
  <p><strong>Result page:</strong> recommends the matching treatment and offer with a booking link.</p>
  <p><strong>Follow-up:</strong> a fast text with the offer and calendar, then appointment reminders.</p>
  <p><strong>Result:</strong> <a href="/case-studies/med-spa-1011-leads">1,011 leads on $4,703 of ad spend</a>. In another med spa build, <a href="/case-studies/med-spa-12k-revenue-on-590-ad-spend">$590 of spend produced $11,700 in revenue</a> from 45 leads. See <a href="/funnels-for/med-spas">med spa funnels</a> for the full structure.</p>
</section>

<section id="coaching-diagnostic">
  <h2>5. Coaching Diagnostic: 174 Appointments</h2>
  <p><strong>Type:</strong> real client build, high-ticket coaching.</p>
  <p><strong>Question structure:</strong> a diagnostic-style application. Where is the business today? What is the main bottleneck? What have you tried? How soon do you want to fix it, and are you able to invest if it is a fit? The last two questions do the qualifying.</p>
  <p><strong>Result page:</strong> a short summary of the bottleneck and a calendar for qualified applicants, with a video that explains the approach before the call.</p>
  <p><strong>Follow-up:</strong> instant confirmation, a call to confirm the booking, and three-channel reminders.</p>
  <p><strong>Result:</strong> <a href="/case-studies/coaching-116k-revenue-on-2214-ad-spend">174 appointments and $115,500 in revenue on $2,214 of ad spend</a>. More are on the <a href="/case-studies/coaching-consulting-funnels">coaching and consulting case studies</a> hub.</p>
</section>

<section id="patterns">
  <h2>6. Three Reusable Patterns (Not Client Builds)</h2>
  <p>The following are patterns, not client results. Use them as starting structures and measure your own numbers.</p>
  <div class="step-card">
    <div class="step-badge">Pattern 1</div>
    <h4>Product finder</h4>
    <p><strong>For:</strong> ecommerce stores with more than a handful of products. <strong>Questions:</strong> who it is for, the main goal or problem, preferences such as skin type or size, budget. <strong>Result page:</strong> one primary recommendation with a direct add-to-cart button, plus one alternative. <strong>Follow-up:</strong> an email that repeats the recommendation and a reminder for abandoned carts.</p>
  </div>
  <div class="step-card">
    <div class="step-badge">Pattern 2</div>
    <h4>Assessment or scorecard</h4>
    <p><strong>For:</strong> B2B services, agencies and consultants. <strong>Questions:</strong> eight to twelve quick yes-or-no or scale questions about current practices. <strong>Result page:</strong> a score, the two weakest areas and an offer to review the results on a call. <strong>Follow-up:</strong> a short email series based on the lowest-scoring area.</p>
  </div>
  <div class="step-card">
    <div class="step-badge">Pattern 3</div>
    <h4>Calculator</h4>
    <p><strong>For:</strong> offers with a clear financial outcome, such as solar savings, mortgage payments or cost of no-shows. <strong>Questions:</strong> a few numeric inputs. <strong>Result page:</strong> the calculated figure and what it would take to improve it. Our free <a href="/tools/no-show-cost-calculator">no-show cost calculator</a> is an example of the format.</p>
  </div>
</section>

<section id="comparison">
  <h2>7. All Seven Compared</h2>
  <div class="table-wrap">
    <table class="data-table">
      <thead>
        <tr><th>Example</th><th>Type</th><th>Questions</th><th>Next step</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr><td>Roofing estimator</td><td>Client build</td><td>4 plus contact</td><td>Inspection call</td><td>537 leads at $4.27</td></tr>
        <tr><td>MVA qualification</td><td>Client build</td><td>4 to 5 plus contact</td><td>Intake call</td><td>$388K on $20,324</td></tr>
        <tr><td>Med spa treatment quiz</td><td>Client build</td><td>3 to 4 plus contact</td><td>Booking</td><td>1,011 leads on $4,703</td></tr>
        <tr><td>Coaching diagnostic</td><td>Client build</td><td>5 to 6 plus contact</td><td>Strategy call</td><td>174 appointments on $2,214</td></tr>
        <tr><td>Product finder</td><td>Pattern</td><td>4 to 5</td><td>Checkout</td><td>Measure your own</td></tr>
        <tr><td>Assessment</td><td>Pattern</td><td>8 to 12</td><td>Review call</td><td>Measure your own</td></tr>
        <tr><td>Calculator</td><td>Pattern</td><td>3 to 5 inputs</td><td>Consult</td><td>Measure your own</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section id="writing-questions">
  <h2>8. How to Write Quiz Questions</h2>
  <p>Across the four client builds above, the questions followed the same rules, whatever the industry.</p>
  <ol>
    <li><strong>Start with the easiest, most interesting question.</strong> "What does your roof need?" or "Which area would you like to treat?" is about the visitor, not about you, and it takes one tap to answer.</li>
    <li><strong>Every question must change something.</strong> If an answer does not affect the result page, the routing or the first follow-up message, delete the question. Each extra screen costs completions.</li>
    <li><strong>Put qualifying questions in the middle.</strong> Timing, decision-maker and budget questions work best after two or three easy answers, once the visitor is committed.</li>
    <li><strong>Offer four or five answers at most</strong>, including an honest "not sure" option so nobody stalls.</li>
    <li><strong>Ask for contact details last</strong>, framed as where to send the result, estimate or case review.</li>
    <li><strong>Verify the phone number</strong> when lead quality matters. A text code filters typos and fake numbers before your team dials them.</li>
  </ol>
  <p>Write the questions in the customer's words, not your internal labels. A homeowner says "my roof is leaking", not "repair inquiry". Our <a href="/templates/funnel-copy-template">funnel copy template</a> has prompts for the headline and result page copy that sit around the questions.</p>
</section>

<section id="follow-up">
  <h2>9. Result Pages and Follow-Up That Convert</h2>
  <p>A quiz earns trust by asking good questions. The result page and follow-up are where that trust either becomes a sale or leaks away.</p>
  <ul>
    <li><strong>Reflect the answers.</strong> Name the job type, injury, treatment or bottleneck the visitor chose. A generic thank-you page throws away the personalization you just collected.</li>
    <li><strong>One call to action.</strong> A calendar, a checkout button or a "we are calling you now" message. Not three options.</li>
    <li><strong>Add proof near the button.</strong> One relevant result or testimonial is enough.</li>
    <li><strong>Use the answers in the first message.</strong> Pass every answer into the CRM as a field so the first text and call can reference it. Our <a href="/speed-to-lead">speed-to-lead</a> layer reached 84% of leads inside the first minute across 60+ deployments and lifted lead-to-booking 2.4x.</li>
    <li><strong>Send answers to your ad platform.</strong> Qualified answers make better conversion events than raw opt-ins, which helps ads find more people like your best leads.</li>
  </ul>
  <p>Deciding between a quiz and a video front end? Our <a href="/blog/high-ticket-vsl-vs-interactive-quiz-funnel-2026">VSL vs interactive quiz funnel comparison</a> covers when each wins, and the <a href="/blog/sales-funnel-examples">sales funnel examples</a> roundup shows other funnel types. When you want one built, <a href="/contact">book a strategy call</a>; builds go live in 5 to 10 business days.</p>
</section>

<section id="mistakes">
  <h2>10. Common Quiz Funnel Mistakes</h2>
  <p>When a quiz funnel underperforms, it is usually one of these:</p>
  <ul>
    <li><strong>A trivia-style promise.</strong> "Which type of entrepreneur are you?" attracts curiosity clicks, not buyers. Promise something the buyer actually wants: an estimate, a case review, a plan.</li>
    <li><strong>Too many questions.</strong> Ten screens for a local service is too many. Cut until every question earns its place.</li>
    <li><strong>Asking for contact details first.</strong> It turns the quiz back into a form and loses the commitment effect.</li>
    <li><strong>A result page with no next step.</strong> If the result does not lead straight to a booking or checkout, most visitors leave.</li>
    <li><strong>Answers that never reach the CRM.</strong> The sales team calls blind and asks the same questions again, which annoys the lead and wastes the quiz.</li>
    <li><strong>Slow follow-up.</strong> A quiz lead is a warm lead for minutes, not days. The <a href="/glossary/speed-to-lead">speed to lead</a> principle applies here more than anywhere.</li>
  </ul>
  <p>Fix these and a quiz is one of the most reliable front ends for cold traffic we build.</p>
</section>
`,
  },
  {
    slug: "vsl-funnel-examples",
    metaTitle: "VSL Funnel Examples: 6 Builds Broken Down Page by Page",
    metaDescription: "VSL funnel examples from real builds, including a $1.52M consulting funnel, with page-by-page structure, script beats and application and booking steps.",
    keyTakeaways: [
      "A VSL funnel is an ad, a video sales letter page, a short application or checkout, and follow-up that protects the next step. The video sells; the steps around it decide how many buyers you keep.",
      "Our largest high-ticket example, a consulting VSL funnel with qualification filters, CAPI tracking and multi-touch follow-up, collected $1.52M over 19 months.",
      "Video-led selling also works at lower prices and in webinar form: the $847K low-ticket front end ran at 3.32x ROAS, and one webinar funnel returned 29.7x on ad spend.",
      "Strong VSL scripts follow the same beats: hook, problem, mechanism, proof, offer, qualification and one call to action, with the application asking about budget and timing.",
    ],
    title: "VSL Funnel Examples: 6 Builds Broken Down Page by Page, With Script Beats and Booking Steps",
    headline: "Real VSL funnels from our case studies in high-ticket consulting, coaching, webinars and low-ticket offers, broken down page by page, plus two reusable patterns labeled as patterns.",
    excerpt: "Six VSL funnel examples with the structure laid bare: what is on each page, the beats in the video script, how the application or checkout works and what happens after someone books. Four are real client builds with numbers; two are clearly labeled patterns.",
    category: "Case Breakdowns",
    author: AUTHORS.rahul,
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-06",
    readTime: "8 min read",
    image: "/img/blog/vsl-funnel-examples.jpg",
    imageAlt: "Laptop playing a video sales letter above an application form and a booking calendar laid out as a three-step funnel diagram",
    keywords: [
      "vsl funnel examples",
      "video sales letter funnel examples",
      "vsl funnel",
      "high ticket vsl funnel",
      "vsl script structure",
      "vsl application funnel",
      "video sales letter examples",
    ],
    metrics: [
      { label: "High-Ticket VSL Funnel", value: "$1.52M", sub: "collected over 19 months" },
      { label: "Low-Ticket Front End", value: "$847K", sub: "at 3.32x ROAS" },
      { label: "Webinar ROAS", value: "29.7x", sub: "$64,960 on $2,184 spend" },
      { label: "Coaching Revenue", value: "$680K", sub: "34 sales on $15,483 spend" },
    ],
    toc: [
      { id: "anatomy", title: "1. The Anatomy of a VSL Funnel" },
      { id: "high-ticket-consulting", title: "2. High-Ticket Consulting: $1.52M in 19 Months" },
      { id: "coaching-vsl", title: "3. Coaching VSL Into Application: $680K" },
      { id: "webinar-vsl", title: "4. Webinar as a Long-Form VSL: 29.7x" },
      { id: "low-ticket-vsl", title: "5. Low-Ticket VSL Checkout: $847K" },
      { id: "patterns", title: "6. Two Reusable Patterns (Not Client Builds)" },
      { id: "script-beats", title: "7. The Script Beats Every Example Shares" },
      { id: "application-booking", title: "8. Application and Booking Steps" },
      { id: "mistakes", title: "9. Common VSL Funnel Mistakes" },
      { id: "which-to-copy", title: "10. Which Example Should You Copy?" },
      { id: "faq", title: "11. Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "What is a VSL funnel?",
        answer: "A VSL funnel uses a video sales letter as the main selling tool. Traffic from an ad lands on a page with the video, then moves to an application, a booking calendar or a checkout. Follow-up texts, calls and reminders protect that next step. It suits offers that need explanation before someone is ready to buy.",
      },
      {
        question: "How long should a VSL be?",
        answer: "As long as the offer needs, and no longer. High-ticket mechanism videos often run 10 to 20 minutes for cold traffic, while a bridge video on a quiz result page can work at 4 to 6 minutes. Low-ticket product videos are usually shorter. Watch retention data and cut the sections where viewers drop off.",
      },
      {
        question: "Should a VSL funnel use an application or a direct calendar?",
        answer: "Use an application when sales calls are expensive and you need to screen for budget, timing and fit. Use a direct calendar when lead volume is low and every conversation is worth having. Most of our high-ticket builds use a short application of four to six questions, followed by the calendar for qualified applicants only.",
      },
      {
        question: "Can a VSL funnel work for low-ticket offers?",
        answer: "Yes. A short video on the sales page can explain a $27 product as well as a long letter, and the checkout, order bump and upsells do the rest. Our $847K low-ticket front end paired the offer with a two-step checkout and fixed tracking, turning $255,130 of ad spend into $847,307 at 3.32x ROAS.",
      },
      {
        question: "What is the difference between a VSL funnel and a webinar funnel?",
        answer: "A VSL is short and available on demand the moment someone clicks. A webinar is longer, often scheduled, and needs registration and attendance reminders. Webinars suit offers that need teaching; VSLs suit offers where a tighter argument is enough. Our comparison page covers the trade-offs, costs and conversion points in detail.",
      },
      {
        question: "How much does it cost to build a VSL funnel?",
        answer: "With Funnels That Print, a VSL funnel is a one-time fee: $999 for design only, $1,499 including copy and the full build, or $1,999 for the complete suite with CRM, automation, an AI booking agent and tracking. Builds go live in 5 to 10 business days. Video production and ad spend are separate.",
      },
    ],
    related: [
      "sales-funnel-examples",
      "how-to-build-a-high-ticket-funnel",
      "low-ticket-self-liquidating-offer-funnel-847k-breakdown",
    ],
    contentHtml: `
<section id="anatomy">
  <h2>1. The Anatomy of a VSL Funnel</h2>
  <p>The <strong>vsl funnel examples</strong> below are broken down the same way: the pages in order, the beats in the video, the application or checkout step, and the follow-up. Four are real client builds from our case studies with their numbers. Two are reusable patterns, labeled as patterns because they are not tied to one client result.</p>
  <p>Every VSL funnel has four layers. If you are new to the format, the <a href="/glossary/vsl">VSL glossary entry</a> covers the basics.</p>
  <ol>
    <li><strong>The ad</strong>, which makes one promise and sends cold traffic to the video.</li>
    <li><strong>The VSL page</strong>: headline, video, a few proof points and one button.</li>
    <li><strong>The next step</strong>: an application and calendar for high-ticket offers, or a checkout for low-ticket offers.</li>
    <li><strong>Follow-up</strong>: instant contact, reminders and tracking that tells the ad platform which viewers became buyers.</li>
  </ol>
  <p>The video gets the attention, but in our builds the biggest gains usually came from layers three and four. You can see how we approach all four on our <a href="/vsl-funnels">VSL funnel service</a> page.</p>
  <p>One more point before the examples: a VSL funnel is not only for high-ticket offers. The same video-led argument works on a checkout page for a $27 product and in a scheduled webinar for a coaching program. What changes from one example to the next is the length of the video and what the viewer is asked to do afterwards, which is why we break down each step separately.</p>
</section>

<section id="high-ticket-consulting">
  <h2>2. High-Ticket Consulting: $1.52M in 19 Months</h2>
  <p><strong>Type:</strong> real client build, high-ticket consulting.</p>
  <p><strong>Before:</strong> a strong offer with inconsistent conversion on cold traffic, attribution leaks and manual follow-up that let qualified leads slip away.</p>
  <p><strong>Page by page:</strong></p>
  <ul>
    <li><strong>Ad:</strong> cold Meta traffic with a single outcome-led promise.</li>
    <li><strong>VSL page:</strong> a mechanism-led video sales letter with the call to action below it.</li>
    <li><strong>Application:</strong> qualification filters on revenue, timeline and fit, so only qualified prospects reached the calendar.</li>
    <li><strong>Booking and follow-up:</strong> automated multi-touch follow-up across channels before the call.</li>
    <li><strong>Tracking:</strong> full attribution and Meta Conversions API events for qualified calls and sales.</li>
  </ul>
  <p><strong>Result:</strong> <a href="/milliondollarcasestudy">$1.52M collected over 19 months</a>. <strong>Lesson:</strong> the video sold the program, but qualification and follow-up kept the calendar full of the right people.</p>
</section>

<section id="coaching-vsl">
  <h2>3. Coaching VSL Into Application: $680K</h2>
  <p><strong>Type:</strong> real client build, coaching.</p>
  <p><strong>Page by page:</strong> an ad into a VSL page, a short application, a calendar for qualified applicants, and confirmation plus reminder messages before the sales call.</p>
  <p><strong>Script beats:</strong> a hook naming the result, the reason past attempts failed, the mechanism, client proof, who the program is and is not for, and an invitation to apply.</p>
  <p><strong>Result:</strong> <a href="/case-studies/coaching-680k-revenue-on-15k-ad-spend">$680,125 in revenue from 34 sales on $15,483 of ad spend</a>. Another coaching build produced <a href="/case-studies/coaching-116k-revenue-on-2214-ad-spend">174 appointments and $115,500 on $2,214</a>.</p>
  <p><strong>Lesson:</strong> at high prices, few sales carry the whole funnel. An application that screens for budget protects the closer's time. More builds are on the <a href="/case-studies/coaching-consulting-funnels">coaching and consulting case studies</a> hub.</p>
</section>

<section id="webinar-vsl">
  <h2>4. Webinar as a Long-Form VSL: 29.7x</h2>
  <p><strong>Type:</strong> real client build, coaching webinar.</p>
  <p><strong>Page by page:</strong> a registration page, a confirmation page, email and text reminders, the training itself, and a booking calendar for application calls at the end.</p>
  <p><strong>Script beats:</strong> the same beats as a VSL, stretched out with more teaching in the middle. The pitch comes after the audience has had a real win from the content.</p>
  <p><strong>Result:</strong> <a href="/case-studies/webinar-65k-revenue-on-2184-ad-spend">$64,960 in revenue and 140 appointments on $2,184 of ad spend</a>, a 29.7x return.</p>
  <p><strong>Lesson:</strong> when an offer needs more teaching than a 15-minute video allows, a webinar is a long-form VSL with a scheduling step. Attendance reminders matter as much as the content. Our <a href="/compare/vsl-funnel-vs-webinar-funnel">VSL funnel vs webinar funnel comparison</a> covers when to choose which.</p>
</section>

<section id="low-ticket-vsl">
  <h2>5. Low-Ticket VSL Checkout: $847K</h2>
  <p><strong>Type:</strong> real client build, coaching and info-product front end.</p>
  <p><strong>Before:</strong> the business was stuck chasing high-ticket sales with no profitable front end to pay for ads.</p>
  <p><strong>Page by page:</strong> an ad into a sales page for a $27 product, a two-step checkout with a $17 order bump, a one-click upsell and a thank-you page that seeded the high-ticket backend.</p>
  <p><strong>Result:</strong> <a href="/scalelowticket">$847,307 collected on $255,130 of ad spend at 3.32x ROAS</a>, with 13,630 buyers and 112% of ad spend recovered on day zero.</p>
  <p><strong>Lesson:</strong> at low prices the video and page must sell in one sitting, and average order value decides whether the funnel scales. We break down the numbers in the <a href="/blog/low-ticket-self-liquidating-offer-funnel-847k-breakdown">$847K self-liquidating offer breakdown</a>.</p>
</section>

<section id="patterns">
  <h2>6. Two Reusable Patterns (Not Client Builds)</h2>
  <p>These are patterns we use when scoping, not client results. Measure your own numbers before you scale them.</p>
  <div class="step-card">
    <div class="step-badge">Pattern 1</div>
    <h4>Quiz first, VSL on the result page</h4>
    <p>A short diagnostic captures and qualifies the lead, then a four to six minute bridge video on the result page explains the mechanism before the calendar. It suits cold traffic that will not watch a long video before giving any information. Our <a href="/quiz-funnels">quiz funnels</a> often use this hybrid.</p>
  </div>
  <div class="step-card">
    <div class="step-badge">Pattern 2</div>
    <h4>Local service explainer VSL</h4>
    <p>A 90-second video from the owner on a lead page for a higher-value local service, such as solar or a cosmetic procedure, followed by a short form and an instant call. The video builds trust before the form; the speed of the call does the rest.</p>
  </div>
</section>

<section id="script-beats">
  <h2>7. The Script Beats Every Example Shares</h2>
  <p>Length and production quality varied across these builds. The order of the argument did not.</p>
  <div class="table-wrap">
    <table class="data-table">
      <thead>
        <tr><th>Beat</th><th>Job</th><th>Common mistake</th></tr>
      </thead>
      <tbody>
        <tr><td>Hook</td><td>Name the outcome and who it is for in the first seconds</td><td>Opening with a long personal story</td></tr>
        <tr><td>Problem</td><td>Explain why past attempts failed</td><td>Blaming the viewer</td></tr>
        <tr><td>Mechanism</td><td>Show the new way and why it works</td><td>Listing features instead of a reason</td></tr>
        <tr><td>Proof</td><td>Specific results with numbers</td><td>Vague testimonials</td></tr>
        <tr><td>Offer</td><td>What they get, what it costs, what happens next</td><td>Hiding the next step</td></tr>
        <tr><td>Qualification</td><td>Who it is not for</td><td>Inviting everyone to book</td></tr>
        <tr><td>Call to action</td><td>One button, repeated</td><td>Several competing links</td></tr>
      </tbody>
    </table>
  </div>
  <p>Our free <a href="/templates/vsl-script-template">VSL script template</a> walks through each beat with prompts and examples.</p>
</section>

<section id="application-booking">
  <h2>8. Application and Booking Steps</h2>
  <p>Most VSL funnels lose more buyers after the video than during it. The steps that protected revenue in our builds:</p>
  <ul>
    <li><strong>A four to six question application</strong> covering current situation, goal, timeline and ability to invest. Our <a href="/templates/lead-qualification-questions">lead qualification questions</a> template lists the ones we use.</li>
    <li><strong>Calendar only for qualified applicants</strong>, with a polite resource page for everyone else.</li>
    <li><strong>Instant contact.</strong> Across 60+ deployments our <a href="/speed-to-lead">speed-to-lead</a> layer had a median first contact of 38 seconds and lifted lead-to-booking 2.4x.</li>
    <li><strong>Three-channel reminders</strong> by SMS, email and call, which took show-up rates up to 88%.</li>
    <li><strong>Server-side tracking</strong> through the <a href="/meta-conversions-api-setup">Meta Conversions API</a>, which recovered 31% more events in our builds.</li>
  </ul>
  <p>Each of these steps is small on its own. Together they decide how many of the people your video convinced actually end up on a call or in a checkout.</p>
</section>

<section id="mistakes">
  <h2>9. Common VSL Funnel Mistakes</h2>
  <p>When we audit VSL funnels that are not working, the video is rarely the only problem. These are the issues we find most often:</p>
  <ul>
    <li><strong>A slow opening.</strong> If the first 30 seconds do not name the outcome and the audience, most cold viewers leave before the argument starts. Check the retention curve before reshooting anything else.</li>
    <li><strong>Too many exits on the page.</strong> Navigation menus, social links and several buttons pull viewers away. A VSL page needs one action.</li>
    <li><strong>No qualification.</strong> A calendar open to everyone fills with people who cannot buy, and closers burn out on bad calls.</li>
    <li><strong>A gap between booking and the call.</strong> Calls booked three or more days out without reminders are the ones that no-show. Our <a href="/templates/no-show-reminder-sequence">no-show reminder sequence</a> closes that gap.</li>
    <li><strong>Pixel-only tracking.</strong> If the ad platform only sees page views and opt-ins, it optimizes for viewers, not buyers. Send qualified-call and sale events back.</li>
    <li><strong>Judging too early.</strong> High-ticket funnels need weeks of data because closes lag ad spend. Agree a test budget and timeline before launch.</li>
  </ul>
</section>

<section id="which-to-copy">
  <h2>10. Which Example Should You Copy?</h2>
  <p>Match the example to your price and buying process rather than to whatever looks most impressive:</p>
  <ul>
    <li><strong>You sell a high-ticket service or program and can take calls:</strong> copy the consulting or coaching structure, with a VSL, a short application and a protected calendar.</li>
    <li><strong>Your offer needs real teaching before people understand it:</strong> copy the webinar structure and invest in attendance reminders. Our <a href="/webinar-funnels">webinar funnels</a> page covers the build.</li>
    <li><strong>You sell a product under about $50:</strong> copy the low-ticket structure, where checkout, order bump and upsell matter as much as the video.</li>
    <li><strong>Your cold traffic will not watch a long video:</strong> start with the quiz-first pattern and move the video to the result page.</li>
  </ul>
  <p>For more formats, see the <a href="/blog/sales-funnel-examples">sales funnel examples</a> roundup or our guide on <a href="/blog/how-to-build-a-high-ticket-funnel">how to build a high ticket funnel</a>. When you are ready, <a href="/contact">book a strategy call</a>; a complete VSL funnel goes live in 5 to 10 business days.</p>
</section>
`,
  },
];
