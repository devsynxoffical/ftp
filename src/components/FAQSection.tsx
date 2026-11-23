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
    q: "What does an AI automation agency do?",
    a: "It builds systems that answer, qualify and book your leads without manual work: AI receptionists, AI appointment setters, CRM pipelines and follow-up sequences.",
    cat: "build",
    tags: ["AI receptionist", "AI setter", "CRM"],
  },
  {
    q: "How much does an AI receptionist and funnel build cost?",
    a: "Our builds start at $999. The complete suite with CRM, AI receptionist and automations is $1,999. Platform usage such as call minutes is paid to the platform.",
    cat: "work",
    tags: ["From $999", "$1,999 suite"],
  },
  {
    q: "How long does a build take?",
    a: "Most builds are live in 5 to 10 days.",
    cat: "work",
    tags: ["5 to 10 days", "Scope"],
  },
  {
    q: "Do you use GoHighLevel?",
    a: "Yes. Most of our builds run on GoHighLevel, connected to your calendar, phone and ad accounts.",
    cat: "auto",
    tags: ["GoHighLevel", "Calendar", "Ads"],
  },
  {
    q: "What results have clients seen?",
    a: "Published examples include 387 MVA appointments at $19.62 each and 174 coaching appointments on $2,214 in ad spend. See 275+ documented results on the site.",
    cat: "work",
    tags: ["Case studies", "Proof"],
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
