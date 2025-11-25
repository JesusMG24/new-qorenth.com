"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Bad response");

      window.location.href = "/thank-you";
    } catch (err) {
      alert("Submission failed. Please try again or email us directly.");
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-20 bg-ink text-marble border-b border-pale"
      aria-labelledby="contact-title"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="contact-title"
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          Start Your System Evaluation
        </h2>

        <p className="text-graphite text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Tell us about your operation. We’ll review your goals and send a
          tailored roadmap and fixed quote within 24 hours — no fluff, no
          surprises.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 text-left"
          aria-describedby="contact-instructions"
        >
          <input type="hidden" name="serious" value="yes" />

          <div id="contact-instructions" className="sr-only">
            All fields are required except budget.
          </div>

          <label className="block">
            <span className="sr-only">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-pale bg-transparent text-marble placeholder-graphite/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </label>

          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-pale bg-transparent text-marble placeholder-graphite/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </label>

          <label className="block">
            <span className="sr-only">Business</span>
            <input
              type="text"
              name="business"
              placeholder="Business or Brand"
              className="w-full px-4 py-3 rounded-lg border border-pale bg-transparent text-marble placeholder-graphite/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </label>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="sr-only">Budget</span>
              <select
                name="budget"
                className="w-full px-4 py-3 rounded-lg border border-pale bg-transparent text-marble focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              >
                <option value="">Estimated Budget</option>
                <option>$25k (Foundation)</option>
                <option>$45k (Growth)</option>
                <option>$65k–$80k (Enterprise)</option>
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Timeline</span>
              <select
                name="timeline"
                className="w-full px-4 py-3 rounded-lg border border-pale bg-transparent text-marble focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              >
                <option value="">Target Timeline</option>
                <option>4–6 weeks (Foundation)</option>
                <option>6–8 weeks (Growth)</option>
                <option>8–10 weeks (Enterprise)</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="We’re dying in Airtable + Notion + 47 Zapier rules. We do ~$___k MRR and lose ___ hours/week on manual bullshit. Fix it."
              className="w-full px-4 py-3 rounded-lg border border-pale bg-transparent text-marble placeholder-graphite/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
            ></textarea>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-ink font-semibold uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:bg-gold-hover focus:outline-none focus:ring-2 focus:ring-gold"
          >
            {loading ? "Sending…" : "Send It  →"}
          </button>
        </form>

        <p className="mt-10 text-sm text-graphite">
          Prefer direct contact? Email us at{" "}
          <a
            href="mailto:ink@qorenth.com"
            className="underline text-gold hover:text-gold-hover"
          >
            ink@qorenth.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
