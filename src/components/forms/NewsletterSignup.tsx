"use client";

import { useState, type FormEvent } from "react";

/**
 * UI only for now — newsletter platform hasn't been chosen yet
 * (see "Open items" in PROJECT-STATE.md). Wire this up to the real
 * platform's API before launch.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <p className="font-semibold text-white">Newsletter</p>
      <p className="mt-3 text-sm text-white/70">
        Get workshop dates and planning tips in your inbox.
      </p>

      {submitted ? (
        <p className="mt-4 text-sm text-gold">Thanks — you&apos;re on the list.</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            Join
          </button>
        </form>
      )}
    </div>
  );
}
