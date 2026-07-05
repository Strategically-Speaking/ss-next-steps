"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!formspreeId) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl bg-navy/5 p-6 text-navy" role="status">
        Thanks for reaching out — we&apos;ll get back to you within 1 business day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-navy/20 px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-navy/20 px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-lg border border-navy/20 px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {formspreeId
            ? "Something went wrong — please try again or email us directly."
            : "This form isn't fully wired up yet — email bessie@nextsteps.com directly for now."}
        </p>
      )}

      <Button variant="primary" type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
