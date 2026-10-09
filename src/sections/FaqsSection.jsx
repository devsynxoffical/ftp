import React, { useState } from "react";

const faqsData = [
  {
    num: "1",
    q: "What does Funnels That Print build?",
    a: "We build conversion-focused funnels and the supporting systems around them, including landing pages, high-ticket funnels, VSLs, low-ticket funnels, bridge funnels, application flows, automations, CRM workflows, and AI calling."
  },
  {
    num: "2",
    q: "Can you build the funnel from scratch?",
    a: "Yes. We can handle the strategy, structure, copy, design, development, integrations, and automation required for the build."
  },
  {
    num: "3",
    q: "Can you work with my existing funnel?",
    a: "Yes. If you already have a funnel, we can improve, rebuild, or connect it to the systems you need."
  },
  {
    num: "4",
    q: "Do you build low-ticket funnels?",
    a: "Yes. We can build the complete customer journey, including sales pages, checkout, upsells, downsells, and follow-up sequences."
  },
  {
    num: "5",
    q: "What is a bridge funnel?",
    a: "A bridge funnel prepares a prospect before they reach the main offer. It's particularly useful when you're sending cold traffic toward an offer that requires additional education or trust."
  },
  {
    num: "6",
    q: "What does the AI Calling Agent do?",
    a: "It can engage leads automatically, have an initial conversation, ask qualifying questions, handle common questions, and help move suitable prospects toward booking an appointment."
  },
  {
    num: "7",
    q: "Can you set up my automations?",
    a: "Yes. We can build workflows for lead nurturing, email, SMS, appointment reminders, no-shows, reactivation, CRM movement, and other parts of your sales process."
  },
  {
    num: "8",
    q: "Do you integrate with CRMs?",
    a: "Yes. We can connect the funnel with your CRM, calendar, communication tools, tracking, and other required platforms."
  },
  {
    num: "9",
    q: "Do I need paid advertising?",
    a: "No. Your funnel can work with paid traffic, organic traffic, email, referrals, or other acquisition channels."
  },
  {
    num: "10",
    q: "How long does a funnel take to build?",
    a: "Most projects take approximately 5–10 business days, depending on the scope, number of pages, integrations, and automation requirements."
  },
  {
    num: "11",
    q: "Do you guarantee results?",
    a: "A funnel's performance depends on several factors, including the offer, market, traffic, sales process, and follow-up. We don't promise an arbitrary number of appointments. Our focus is building the infrastructure to give your traffic the best possible path toward becoming a qualified booked call."
  }
];

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="framer-193gfb" data-framer-name="FAQs">
      <div className="framer-k6rhkw" data-border="true" data-framer-name="Container" style={{ width: "100%", maxWidth: "1120px", margin: "0 auto" }}>
        <div className="framer-1hpf12c" data-framer-name="FAQs Content" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          {/* Header */}
          <div className="framer-spbmfz" data-framer-name="Header" style={{ marginBottom: "48px" }}>
            <div className="framer-1mrhwwa" data-framer-name="Heading &amp; Title">
              <div className="framer-g01zzu" data-framer-name="Title">
                <div className="framer-19m1e6x" data-framer-name="Number" style={{ transform: "rotate(-20deg)" }}>
                  <div className="framer-sxkxpi" data-framer-name="07" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p className="framer-text framer-styles-preset-10gosz4" data-styles-preset="gsZKPt0ge" dir="auto" style={{ "--framer-text-color": "var(--token-cd0e4b39-d412-4786-8464-f96703fa50b9, rgb(82, 82, 82))" }}>
                      07
                    </p>
                  </div>
                </div>
                <div className="framer-63k42l" data-framer-name="Name" style={{ transform: "rotate(12deg)" }}>
                  <div className="framer-4wf0t5" data-framer-name="faqs" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p className="framer-text framer-styles-preset-10gosz4" data-styles-preset="gsZKPt0ge" dir="auto" style={{ "--framer-text-color": "var(--token-c6def8b1-53e1-4b6e-88c6-f76095f3377b, rgb(217, 217, 217))" }}>
                      FAQs
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-db7dji" data-framer-name="Heading" data-framer-component-type="RichTextContainer" style={{ transform: "none", marginTop: "16px" }}>
                <h2 className="framer-text framer-styles-preset-1c9qbxs" data-styles-preset="Tn59MLvQJ" dir="auto" style={{ textAlign: "center", "--framer-text-alignment": "center", "--framer-text-color": "var(--token-c5ac9015-f2e5-48a7-9317-85dc7ef59171, rgb(255, 255, 255))" }}>
                  GOT QUESTIONS?
                </h2>
              </div>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div style={{ width: "100%", maxWidth: "944px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqsData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.num}
                  className="framer-eLgIX framer-SvZjy framer-TZPec framer-iDV62 framer-XVrSL framer-kj25cf"
                  data-framer-name="FAQ Item"
                  tabIndex={0}
                  style={{
                    backgroundColor: isOpen ? "rgba(170, 157, 236, 0.1)" : "rgba(255, 255, 255, 0.02)",
                    border: isOpen ? "1px solid rgba(170, 157, 236, 0.2)" : "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "32px",
                    width: "100%",
                    padding: "24px 28px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box"
                  }}
                  onClick={() => toggle(idx)}
                >
                  <div
                    className="framer-6gkzte"
                    data-framer-name="Question Wrap"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      userSelect: "none"
                    }}
                  >
                    <div className="framer-csw7tj" data-framer-name="Question" style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1 }}>
                      <div
                        className="framer-v1217o"
                        data-framer-name="Number"
                        style={{
                          backgroundColor: isOpen ? "var(--token-c5ac9015-f2e5-48a7-9317-85dc7ef59171, rgb(255, 255, 255))" : "rgba(255, 255, 255, 0.08)",
                          borderRadius: "12px",
                          width: "36px",
                          height: "36px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "background-color 0.2s ease"
                        }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1rgoota"
                          data-styles-preset="nl5egLyzz"
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            fontWeight: 600,
                            color: isOpen ? "rgb(18, 18, 20)" : "rgba(255, 255, 255, 0.6)"
                          }}
                        >
                          {faq.num}
                        </p>
                      </div>
                      <div className="framer-kg7wsu" data-framer-name="Question" style={{ flex: 1 }}>
                        <p
                          className="framer-text framer-styles-preset-ps3cvy"
                          data-styles-preset="IGOfvmM1K"
                          style={{
                            margin: 0,
                            fontSize: "18px",
                            fontWeight: 600,
                            lineHeight: "1.4",
                            color: "var(--token-c5ac9015-f2e5-48a7-9317-85dc7ef59171, rgb(255, 255, 255))"
                          }}
                        >
                          {faq.q}
                        </p>
                      </div>
                    </div>
                    
                    {/* Toggle Icon */}
                    <div
                      className="framer-6paxum"
                      data-framer-name="Icon Wrap"
                      style={{
                        backgroundColor: isOpen ? "var(--token-a281d3d3-8074-4276-b377-59dd81ca3f41, rgb(56, 26, 201))" : "rgba(255, 255, 255, 0.06)",
                        borderRadius: "16px",
                        width: "36px",
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginLeft: "16px",
                        transition: "background-color 0.2s ease"
                      }}
                    >
                      <div style={{ position: "relative", width: "14px", height: "14px" }}>
                        {/* Horizontal Bar */}
                        <div
                          style={{
                            position: "absolute",
                            top: "6px",
                            left: "0",
                            width: "14px",
                            height: "2px",
                            backgroundColor: "rgb(255, 255, 255)",
                            borderRadius: "1px"
                          }}
                        />
                        {/* Vertical Bar */}
                        <div
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "6px",
                            width: "2px",
                            height: "14px",
                            backgroundColor: "rgb(255, 255, 255)",
                            borderRadius: "1px",
                            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                            opacity: isOpen ? 0 : 1,
                            transition: "transform 0.2s ease, opacity 0.2s ease"
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Answer */}
                  {isOpen && (
                    <div
                      className="framer-11jd2sk"
                      data-framer-name="Answer Wrap"
                      style={{
                        marginTop: "16px",
                        paddingLeft: "52px",
                        paddingRight: "16px"
                      }}
                    >
                      <p
                        className="framer-text framer-styles-preset-yctu3a"
                        data-styles-preset="dLJsxXALZ"
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: "1.6",
                          color: "var(--token-a5cbaa21-8a90-448d-9f57-e1d1b61de1a6, rgba(255, 255, 255, 0.8))"
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
