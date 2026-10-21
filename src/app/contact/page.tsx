"use client";

import { useState, useRef } from "react";
import { LOGOS } from "@/data/siteContent";

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Step 1: Goal
  const [packageChoice, setPackageChoice] = useState("Design + Copy Build");
  const [extras, setExtras] = useState<string[]>([]);

  // Step 2: You
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [phone, setPhone] = useState("");
  const [spend, setSpend] = useState("Not running ads yet");

  // Step 3: Details
  const [msg, setMsg] = useState("");
  const [reachVia, setReachVia] = useState("Email");

  const [nameBad, setNameBad] = useState(false);
  const [emailBad, setEmailBad] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleExtraToggle = (val: string) => {
    setExtras((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const validateStep = (s: number): boolean => {
    setErrorMsg("");
    if (s !== 1) return true;

    let bad = "";
    const isNameValid = !!name.trim();
    const isEmailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());

    setNameBad(!isNameValid);
    setEmailBad(!isEmailValid);

    if (!isNameValid) {
      bad = "Please add your name.";
    } else if (!isEmailValid) {
      bad = "Please add a valid email.";
    }

    setErrorMsg(bad);
    return !bad;
  };

  const goToStep = (target: number) => {
    if (target > step) {
      for (let j = step; j < target; j++) {
        if (!validateStep(j)) {
          setStep(j);
          return;
        }
      }
    }
    setStep(target);
  };

  const handleNext = () => {
    if (step < 2) {
      if (validateStep(step)) {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep(1)) {
      setStep(1);
      return;
    }

    const body = `Name: ${name.trim()}
Email: ${email.trim()}
Company: ${site.trim()}
Phone: ${phone.trim()}
Ad spend: ${spend}
Package: ${packageChoice}
Also: ${extras.join(", ")}
Reach via: ${reachVia}

${msg.trim()}`;

    window.location.href = `mailto:info@funnelsthatprint.com?subject=${encodeURIComponent(
      "New funnel enquiry from " + name.trim()
    )}&body=${encodeURIComponent(body)}`;

    setIsSent(true);
  };

  return (
    <main className="box wh" id="top">
      <section className="cx">
        {/* Left column - sticky as you scroll */}
        <div className="cxl">
          <div className="eyebrow mono">Contact</div>
          <h1 className="h1 d">
            Let&apos;s build your <span className="it">funnel.</span>
          </h1>
          <p className="lead">
            Tell us what you sell, who buys it and where your traffic comes from.
            We reply within one business day with the right package and a
            realistic timeline.
          </p>

          <div className="cxcall">
            <div className="cxav">
              <img src="/img/team/gaurav.webp" alt="Gaurav Kapoor" />
              <img src="/img/team/rahul.webp" alt="Rahul Kapoor" />
            </div>
            <div>
              <b>Gaurav &amp; Rahul read every message</b>
              <span>
                <i />Replies within one business day
              </span>
            </div>
          </div>

          <ol className="cxs">
            <li>
              <b>01</b>
              <div>
                <h3>Send your details</h3>
                <p>
                  Two minutes. Your offer, your traffic and what is not working.
                </p>
              </div>
            </li>
            <li>
              <b>02</b>
              <div>
                <h3>We review your funnel</h3>
                <p>We look at your pages, ads and follow-up before we talk.</p>
              </div>
            </li>
            <li>
              <b>03</b>
              <div>
                <h3>Strategy call and plan</h3>
                <p>
                  A short call, then a package, a price and a launch timeline.
                </p>
              </div>
            </li>
          </ol>

          <div className="cxch">
            <a href="mailto:info@funnelsthatprint.com">
              <span>Email</span>
              <b>info@funnelsthatprint.com</b>
              <i>&#8599;</i>
            </a>
            <a
              href="https://funnelsthatprint.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Website</span>
              <b>funnelsthatprint.com</b>
              <i>&#8599;</i>
            </a>
          </div>
        </div>

        {/* Right column - 3-step form with progress bar */}
        <form
          ref={formRef}
          className={`cxf ${isSent ? "sent" : ""}`}
          id="cform"
          data-s={step}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="cxtop">
            <span className="mono">Project brief</span>
            <div className="cxsteps" role="tablist">
              <button
                type="button"
                className={`${step === 0 ? "on" : ""} ${step > 0 ? "done" : ""}`}
                data-s={0}
                onClick={() => goToStep(0)}
              >
                01 Goal
              </button>
              <button
                type="button"
                className={`${step === 1 ? "on" : ""} ${step > 1 ? "done" : ""}`}
                data-s={1}
                onClick={() => goToStep(1)}
              >
                02 You
              </button>
              <button
                type="button"
                className={`${step === 2 ? "on" : ""} ${step > 2 ? "done" : ""}`}
                data-s={2}
                onClick={() => goToStep(2)}
              >
                03 Details
              </button>
            </div>
          </div>

          <div className="cxbar">
            <i
              id="cxbar"
              style={{
                width: `${((step + 1) / 3) * 100}%`,
              }}
            />
          </div>

          <div className="cxpanes" id="cxpanes">
            {/* Step 1: Goal */}
            <div
              role="group"
              className={`cxp ${step === 0 ? "on" : step > 0 ? "back" : ""}`}
              data-s={0}
            >
              <div className="lg">What should we build?</div>
              <div className="cxpk">
                <label>
                  <input
                    type="radio"
                    name="pkg"
                    value="Design Only"
                    checked={packageChoice === "Design Only"}
                    onChange={() => setPackageChoice("Design Only")}
                  />
                  <span>
                    <b>Design Only</b>
                    <em>Strategy and visual funnel assets</em>
                    <s>$999</s>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="pkg"
                    value="Design + Copy Build"
                    checked={packageChoice === "Design + Copy Build"}
                    onChange={() => setPackageChoice("Design + Copy Build")}
                  />
                  <span>
                    <b>Design + Copy Build</b>
                    <em>Launch-ready AC Funnel, copy included</em>
                    <s>$1,499</s>
                    <u>Most popular</u>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="pkg"
                    value="Full AC Funnel Suite"
                    checked={packageChoice === "Full AC Funnel Suite"}
                    onChange={() => setPackageChoice("Full AC Funnel Suite")}
                  />
                  <span>
                    <b>Full AC Funnel Suite</b>
                    <em>Full build, systems and 30 days support</em>
                    <s>$1,999</s>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="pkg"
                    value="Not sure yet"
                    checked={packageChoice === "Not sure yet"}
                    onChange={() => setPackageChoice("Not sure yet")}
                  />
                  <span>
                    <b>Not sure yet</b>
                    <em>We will recommend one after a call</em>
                    <s>Free call</s>
                  </span>
                </label>
              </div>

              <div className="lg q2">Also interested in</div>
              <div className="cxchip">
                {[
                  "Email & SMS",
                  "CRM automation",
                  "AI calling agent",
                  "Ads management",
                ].map((extra) => (
                  <label key={extra}>
                    <input
                      type="checkbox"
                      name="extra"
                      value={extra}
                      checked={extras.includes(extra)}
                      onChange={() => handleExtraToggle(extra)}
                    />
                    <span>{extra}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 2: You */}
            <div
              role="group"
              className={`cxp ${step === 1 ? "on" : step > 1 ? "back" : ""}`}
              data-s={1}
            >
              <div className="lg">Who are we talking to?</div>
              <div className="r2">
                <label>
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={name}
                    className={nameBad ? "bad" : ""}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameBad) setNameBad(false);
                      if (errorMsg) setErrorMsg("");
                    }}
                  />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={email}
                    className={emailBad ? "bad" : ""}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailBad) setEmailBad(false);
                      if (errorMsg) setErrorMsg("");
                    }}
                  />
                </label>
              </div>
              <div className="r2">
                <label>
                  Company or website
                  <input
                    name="site"
                    placeholder="company.com"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                  />
                </label>
                <label>
                  WhatsApp or phone (optional)
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 555 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
              </div>

              <div className="lg q2">Monthly ad spend</div>
              <div className="cxchip one">
                {[
                  { label: "Not yet", val: "Not running ads yet" },
                  { label: "Under $5K", val: "Under $5K" },
                  { label: "$5K to $20K", val: "$5K to $20K" },
                  { label: "$20K to $50K", val: "$20K to $50K" },
                  { label: "$50K+", val: "$50K+" },
                ].map((s) => (
                  <label key={s.val}>
                    <input
                      type="radio"
                      name="spend"
                      value={s.val}
                      checked={spend === s.val}
                      onChange={() => setSpend(s.val)}
                    />
                    <span>{s.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3: Details */}
            <div
              role="group"
              className={`cxp ${step === 2 ? "on" : ""}`}
              data-s={2}
            >
              <div className="lg">Tell us about the offer</div>
              <label>
                What are you selling?
                <textarea
                  name="msg"
                  placeholder="Offer, price point, audience, and what is not working right now."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </label>

              <div className="lg q2">Best way to reach you</div>
              <div className="cxchip one">
                {["Email", "WhatsApp", "Call"].map((v) => (
                  <label key={v}>
                    <input
                      type="radio"
                      name="via"
                      value={v}
                      checked={reachVia === v}
                      onChange={() => setReachVia(v)}
                    />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {errorMsg && (
            <p className="cxerr" id="cxerr" role="alert">
              {errorMsg}
            </p>
          )}

          <div className="cxnav">
            <button
              type="button"
              className="cxb ghost"
              id="cxback"
              style={{ visibility: step === 0 ? "hidden" : "visible" }}
              onClick={handleBack}
            >
              Back
            </button>
            {step < 2 ? (
              <button
                type="button"
                className="cxb"
                id="cxnext"
                onClick={handleNext}
              >
                Continue <i>&#8594;</i>
              </button>
            ) : (
              <button type="submit" className="cxb send" id="cxsend">
                Send message <i>&#8599;</i>
              </button>
            )}
          </div>

          {/* Success Overlay */}
          <div className="cxok" id="cxok">
            <span>&#10003;</span>
            <b>Your brief is ready</b>
            <p>
              Your email app opened with everything filled in. Press send and we
              reply within one business day.
            </p>
            <button
              type="button"
              className="cxb ghost"
              id="cxre"
              onClick={() => setIsSent(false)}
            >
              Edit brief
            </button>
          </div>
        </form>
      </section>

      {/* Infinite logo strip along the bottom */}
      <section className="cxlogos">
        <span className="mono">
          Trusted by teams across coaching, B2B and high-ticket services
        </span>
        <div className="cxm">
          <div className="cxt">
            {LOGOS.concat(LOGOS).map((logo, i) => (
              <img
                key={`${logo}-${i}`}
                src={`/img/logos/${logo}`}
                alt=""
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
