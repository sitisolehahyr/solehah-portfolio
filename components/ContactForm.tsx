"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2, Mail, Send, Github, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SocialItem = {
  label: string;
  href: string;
  icon: string;
};

type ContactFormProps = {
  formAction?: string;
  email: string;
  socials: SocialItem[];
  resumeUrl: string;
};

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail
};

const ContactForm = ({ formAction, email, socials, resumeUrl }: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);
  const isConfiguredFormAction = (value?: string): value is string => {
    if (!value) return false;
    const trimmed = value.trim();
    if (!trimmed) return false;
    if (/yourFormId/i.test(trimmed)) return false;
    return /^https?:\/\//i.test(trimmed);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!isConfiguredFormAction(formAction)) {
      const formData = new FormData(form);
      const name = String(formData.get("name") ?? "").trim();
      const senderEmail = String(formData.get("email") ?? "").trim();
      const userMessage = String(formData.get("message") ?? "").trim();
      const subject = encodeURIComponent("Portfolio Inquiry");
      const body = encodeURIComponent(
        [
          "Hi Siti,",
          "",
          name ? `Name: ${name}` : null,
          senderEmail ? `Email: ${senderEmail}` : null,
          "",
          userMessage ? `Message:\n${userMessage}` : null
        ]
          .filter(Boolean)
          .join("\n")
      );

      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    const action = formAction.trim();
    const formData = new FormData(form);
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setMessage("Thanks for reaching out! I'll get back to you shortly.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      <div className="space-y-6">
        <p className="text-base text-slate-600 dark:text-slate-300">
          Prefer a quick intro? Drop a note here or email{" "}
          <Link href={`mailto:${email}`} className="font-medium text-brand hover:text-brand">
            {email}
          </Link>
          .
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.icon?.toLowerCase() ?? "email"] ?? Mail;
            return (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-brand hover:text-brand dark:border-slate-700"
                target={isExternalLink(social.href) ? "_blank" : undefined}
                rel={isExternalLink(social.href) ? "noopener noreferrer" : undefined}
              >
                <Icon size={16} />
                {social.label}
              </Link>
            );
          })}
        </div>
        <Link
          href={resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand-light dark:border-brand/70 dark:hover:bg-brand/10"
        >
          <Send size={16} />
          Download Resume (PDF)
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-inner dark:border-slate-700 dark:bg-slate-950/70"
        aria-live="polite"
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-slate-700 dark:bg-slate-900"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-slate-700 dark:bg-slate-900"
            placeholder="name@example.com"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-slate-700 dark:bg-slate-900"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {message && (
          <p className={`text-sm ${status === "error" ? "text-red-500" : "text-brand"}`}>{message}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
