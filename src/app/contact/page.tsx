"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [packageChoice, setPackageChoice] = useState("Design + Copy Build");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const site = formData.get("site") as string;
    const spend = formData.get("spend") as string;
    const msg = formData.get("msg") as string;

    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${site}\nAd spend: ${spend}\nPackage: ${packageChoice}\n\n${msg}`;
    window.location.href = `mailto:info@funnelsthatprint.com?subject=${encodeURIComponent(
      "New funnel enquiry from " + name
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <div className="box">
      <section className="ct">
        <div>
          <div className="eyebrow mono">Contact</div>
          <h1 className="h1 d">
            Let&apos;s build your <span className="it">funnel.</span>
          </h1>
          <p className="lead">
            Tell us what you sell, who buys it and where your traffic comes from.
            We reply within one business day with the right package and a
            realistic timeline.
          </p>

          <div className="info">
            <a href="mailto:info@funnelsthatprint.com">
              <i>@</i>
              <div style={{ padding: 0, background: "none" }}>
                <span>Email</span>info@funnelsthatprint.com
              </div>
            </a>
            <a href="https://funnelsthatprint.com/">
              <i>&#8599;</i>
              <div style={{ padding: 0, background: "none" }}>
                <span>Website</span>funnelsthatprint.com
              </div>
            </a>
          </div>
        </div>

        <form
          className={`cf2 ${submitted ? "sent" : ""}`}
          id="cform"
          onSubmit={handleSubmit}
        >
          <div className="r2">
            <label>
              Your name
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Smith"
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@company.com"
              />
            </label>
          </div>

          <div className="r2">
            <label>
              Company or website
              <input name="site" placeholder="company.com" />
            </label>
            <label>
              Monthly ad spend
              <select name="spend" defaultValue="Not running ads yet">
                <option value="Not running ads yet">Not running ads yet</option>
                <option value="Under $5K">Under $5K</option>
                <option value="$5K to $20K">$5K to $20K</option>
                <option value="$20K to $50K">$20K to $50K</option>
                <option value="$50K+">$50K+</option>
              </select>
            </label>
          </div>

          <label>
            Package
            <div className="pk">
              {[
                "Design Only",
                "Design + Copy Build",
                "Full AC Funnel Suite",
                "Not sure yet",
              ].map((pkg) => (
                <label key={pkg}>
                  <input
                    type="radio"
                    name="pkg"
                    value={pkg}
                    checked={packageChoice === pkg}
                    onChange={() => setPackageChoice(pkg)}
                  />
                  <span>{pkg}</span>
                </label>
              ))}
            </div>
          </label>

          <label>
            What are you selling?
            <textarea
              name="msg"
              placeholder="Offer, price point, audience, and what is not working right now."
            />
          </label>

          <button type="submit">
            Send message <i>&#8599;</i>
          </button>
          <div className="ok">
            Thanks. Your email app is opening with the details filled in.
          </div>
        </form>
      </section>
    </div>
  );
}
