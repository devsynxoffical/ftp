"use client";

import { useState, useEffect, useRef, useMemo } from "react";

interface FAQItem {
  q: string;
  a: string;
  cat: "build" | "auto" | "work";
  tags: string[];
}

const FAQS_DATA: FAQItem[] = [
  {
    q: "What does Funnels That Print build?",
    a: "We build conversion-focused funnels and the supporting systems around them, including landing pages, high-ticket funnels, VSLs, low-ticket funnels, bridge funnels, application flows, automations, CRM workflows and AI calling.",
    cat: "build",
    tags: ["Funnels", "Pages", "Automation"],
  },
  {
    q: "Can you build the funnel from scratch?",
    a: "Yes. We can handle the strategy, structure, copy, design, development, integrations and automation required for the build.",
    cat: "build",
    tags: ["Strategy", "Copy", "Build"],
  },
  {
    q: "Can you work with my existing funnel?",
    a: "Yes. If you already have a funnel, we can improve, rebuild or connect it to the systems you need.",
    cat: "build",
    tags: ["Audit", "Rebuild", "Integrations"],
  },
  {
    q: "Do you build low-ticket funnels?",
    a: "Yes. We can build the complete customer journey, including sales pages, checkout, upsells, downsells and follow-up sequences.",
    cat: "build",
    tags: ["Checkout", "Upsell", "Follow-up"],
  },
  {
    q: "What is a bridge funnel?",
    a: "A bridge funnel prepares a prospect before they reach the main offer. It is particularly useful when you are sending cold traffic toward an offer that requires additional education or trust.",
    cat: "build",
    tags: ["Cold traffic", "Pre-frame"],
  },
  {
    q: "What does the AI Calling Agent do?",
    a: "It can engage leads automatically, have an initial conversation, ask qualifying questions, handle common questions and help move suitable prospects toward booking an appointment.",
    cat: "auto",
    tags: ["AI calling", "Qualification"],
  },
  {
    q: "Can you set up my automations?",
    a: "Yes. We can build workflows for lead nurturing, email, SMS, appointment reminders, no-shows, reactivation, CRM movement and other parts of your sales process.",
    cat: "auto",
    tags: ["Email", "SMS", "CRM"],
  },
  {
    q: "Do you integrate with CRMs?",
    a: "Yes. We can connect the funnel with your CRM, calendar, communication tools, tracking and other required platforms.",
    cat: "auto",
    tags: ["CRM", "Calendar", "Tracking"],
  },
  {
    q: "Do I need paid advertising?",
    a: "No. Your funnel can work with paid traffic, organic traffic, email, referrals or other acquisition channels.",
    cat: "work",
    tags: ["Traffic", "Organic", "Paid"],
  },
  {
    q: "How long does a funnel take to build?",
    a: "Most projects take approximately 5 to 10 business days, depending on the scope, number of pages, integrations and automation requirements.",
    cat: "work",
    tags: ["5 to 10 days", "Scope"],
  },
  {
    q: "Do you guarantee results?",
    a: "A funnel's performance depends on several factors, including the offer, market, traffic, sales process and execution. What we guarantee is a high-converting, professional build built around direct response best practices.",
    cat: "work",
    tags: ["Performance", "Honesty"],
  },
];

export default function FAQSection() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [customQuestion, setCustomQuestion] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [displayedAnswer, setDisplayedAnswer] = useState<string>(FAQS_DATA[0].a);
  const [userSubmittedQ, setUserSubmittedQ] = useState<string | null>(null);

  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const listRef = useRef<HTMLOListElement>(null);

  // Filtered indices based on tab and search
  const visibleIndices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FAQS_DATA.map((item, idx) => ({ ...item, idx })).filter(
      (item) =>
        (activeTab === "all" || item.cat === activeTab) &&
        (!q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q))
    ).map((item) => item.idx);
  }, [activeTab, searchQuery]);

  // When selected question changes, animate the response typing
  useEffect(() => {
    if (userSubmittedQ) {
      setUserSubmittedQ(null);
    }

    const currentFaq = FAQS_DATA[selectedIdx];
    if (!currentFaq) return;

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    setIsTyping(true);
    setDisplayedAnswer("");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsTyping(false);
      setDisplayedAnswer(currentFaq.a);
      return;
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      const words = currentFaq.a.split(" ");
      let k = 0;
      function typeWord() {
        if (k <= words.length) {
          setDisplayedAnswer(words.slice(0, k).join(" "));
          k++;
          typingTimeoutRef.current = setTimeout(typeWord, 18);
        }
      }
      typeWord();
    }, 450);

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [selectedIdx]);

  const handleSelect = (idx: number, scrollIntoList = false) => {
    setSelectedIdx(idx);
    if (scrollIntoList && listRef.current) {
      const btn = listRef.current.querySelector<HTMLElement>(`[data-i="${idx}"]`);
      if (btn) {
        listRef.current.scrollTo({
          top: btn.offsetTop - listRef.current.offsetTop - 60,
          behavior: "smooth",
        });
      }
    }
  };

  const handleStep = (direction: 1 | -1) => {
    if (!visibleIndices.length) return;
    const currentPos = visibleIndices.indexOf(selectedIdx);
    const nextPos =
      currentPos === -1
        ? 0
        : (currentPos + direction + visibleIndices.length) % visibleIndices.length;
    handleSelect(visibleIndices[nextPos], true);
  };

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = customQuestion.trim();
    if (!q) return;

    setUserSubmittedQ(q);
    setCustomQuestion("");

    setTimeout(() => {
      window.location.href = `mailto:info@funnelsthatprint.com?subject=${encodeURIComponent(
        "Question from the website"
      )}&body=${encodeURIComponent(q)}`;
    }, 1200);
  };

  const currentFaq = FAQS_DATA[selectedIdx];

  // Related questions in same category
  const relatedIndices = useMemo(() => {
    if (!currentFaq) return [];
    return FAQS_DATA.map((item, idx) => idx)
      .filter((idx) => idx !== selectedIdx && FAQS_DATA[idx].cat === currentFaq.cat)
      .slice(0, 2);
  }, [selectedIdx, currentFaq]);

  return (
    <section className="sec box" id="faq">
      <div className="fx-head">
        <div>
          <div className="eyebrow mono">FAQ</div>
          <h2 className="h2 d">
            Questions, <span className="it">answered.</span>
          </h2>
          <p className="lead">
            Pick a question and get a straight answer, the same way we would
            answer on a call.
          </p>
        </div>
        <div className="fx-stats">
          <div>
            <b>5-10</b>
            <span>days per build</span>
          </div>
          <div>
            <b>&lt;24h</b>
            <span>reply time</span>
          </div>
          <div>
            <b>275+</b>
            <span>case studies</span>
          </div>
        </div>
      </div>

      <div className="fx" id="fx">
        <aside className="fx-l">
          <label className="fx-search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              id="fxs"
              type="search"
              placeholder="Search questions"
              aria-label="Search questions"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>

          <div className="fx-tabs" id="fxt">
            <button
              type="button"
              className={activeTab === "all" ? "on" : ""}
              onClick={() => setActiveTab("all")}
            >
              All <b>11</b>
            </button>
            <button
              type="button"
              className={activeTab === "build" ? "on" : ""}
              onClick={() => setActiveTab("build")}
            >
              Builds <b>5</b>
            </button>
            <button
              type="button"
              className={activeTab === "auto" ? "on" : ""}
              onClick={() => setActiveTab("auto")}
            >
              Automation <b>3</b>
            </button>
            <button
              type="button"
              className={activeTab === "work" ? "on" : ""}
              onClick={() => setActiveTab("work")}
            >
              Working together <b>3</b>
            </button>
          </div>

          <ol className="fx-list" id="fxl" ref={listRef}>
            {FAQS_DATA.map((item, idx) => {
              const isVisible = visibleIndices.includes(idx);
              const isSelected = selectedIdx === idx;
              return (
                <li key={item.q} className={isVisible ? "" : "hide"}>
                  <button
                    type="button"
                    data-i={idx}
                    className={isSelected ? "on" : ""}
                    onClick={() => handleSelect(idx)}
                  >
                    <span className="n">{String(idx + 1).padStart(2, "0")}</span>
                    <span>{item.q}</span>
                    <i>&rarr;</i>
                  </button>
                </li>
              );
            })}
          </ol>

          {visibleIndices.length === 0 && (
            <div className="fx-empty on" id="fxe">
              No match. Ask it below and we will answer.
            </div>
          )}
        </aside>

        <div className="fx-r">
          <div className="fx-top">
            <span className="fx-av">FTP</span>
            <div>
              <b>Funnels That Print</b>
              <small>Usually replies within a day</small>
            </div>
            <span className="fx-ct" id="fxc">
              <em>{String(selectedIdx + 1).padStart(2, "0")}</em> /{" "}
              {FAQS_DATA.length}
            </span>
            <div className="fx-nav">
              <button
                type="button"
                id="fxp"
                aria-label="Previous question"
                onClick={() => handleStep(-1)}
              >
                &larr;
              </button>
              <button
                type="button"
                id="fxn"
                aria-label="Next question"
                onClick={() => handleStep(1)}
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="fx-chat" id="fxchat" aria-live="polite">
            {userSubmittedQ ? (
              <>
                <div className="fx-m u">{userSubmittedQ}</div>
                <div className="fx-m b">
                  <span className="who">FTP Team</span>
                  Good question. Opening your email app so it reaches us
                  directly, we reply within a day.
                </div>
              </>
            ) : (
              <>
                <div className="fx-m u">{currentFaq?.q}</div>
                <div className="fx-m b">
                  <span className="who">FTP Team</span>
                  {isTyping ? (
                    <span className="fx-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                  ) : (
                    <span>{displayedAnswer}</span>
                  )}
                  {!isTyping && currentFaq?.tags && (
                    <div className="tg on">
                      {currentFaq.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="fx-rel" id="fxr">
            {!userSubmittedQ &&
              relatedIndices.map((relIdx, n) => (
                <button
                  key={relIdx}
                  type="button"
                  data-i={relIdx}
                  style={{ animationDelay: `${n * 0.08}s` }}
                  onClick={() => handleSelect(relIdx, true)}
                >
                  {FAQS_DATA[relIdx].q}
                </button>
              ))}
          </div>

          <form className="fx-ask" id="fxa" onSubmit={handleAskSubmit}>
            <input
              id="fxq"
              placeholder="Ask your own question..."
              aria-label="Ask your own question"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
            />
            <button type="submit">
              <span>Send</span> &#8599;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
