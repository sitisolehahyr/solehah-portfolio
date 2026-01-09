"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";

type SocialLink = {
  label: string;
  href: string;
  icon?: string;
};

type HeroProps = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  resumeUrl: string;
  email: string;
  socials: SocialLink[];
};

const Hero = ({ name, title, tagline, location, resumeUrl, email, socials }: HeroProps) => {
  const externalSocials = socials.filter((social) => !social.href.startsWith("mailto:"));
  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-brand-light p-10 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900/40">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_60%_at_50%_40%,rgba(10,102,194,0.22),transparent)] dark:opacity-70" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center rounded-full border border-brand/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand shadow-sm backdrop-blur">
            {title}
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{name}</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300">{tagline}</p>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-0.5 hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/60 dark:bg-brand dark:text-white dark:hover:bg-brand-dark"
            >
              View Projects
              <ArrowDownRight size={16} />
            </Link>
            <Link
              href={resumeUrl}
              className="group inline-flex rounded-full bg-gradient-to-r from-brand/25 via-transparent to-brand/25 p-[1px] transition hover:-translate-y-0.5 hover:from-brand/40 hover:to-brand/40"
              download
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition group-hover:bg-brand/10 group-hover:text-brand dark:bg-slate-900 dark:text-white dark:group-hover:bg-brand/20 dark:group-hover:text-brand">
                <Download size={16} />
                Download Resume
              </span>
            </Link>
          </div>
        </div>
        <motion.div
          className="relative mt-6 flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-inner dark:border-slate-800 dark:bg-slate-900/70"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Quick Snapshot</p>
          <div className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl bg-gradient-to-r from-brand-light via-white to-brand-light p-4 font-medium text-slate-700 shadow-sm dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:text-slate-200">
              Project-minded AI engineer focused on production-ready, user-centric AI products.
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand/10 dark:bg-slate-800/60">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Location</p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-100">
                <MapPin size={16} className="text-brand" />
                <span>{location}</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand/10 dark:bg-slate-800/60">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Contact</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-brand" />
                  <Link href={`mailto:${email}`} className="font-medium text-slate-700 transition hover:text-brand dark:text-slate-100">
                    {email}
                  </Link>
                </li>
                {externalSocials.map((social) => (
                  <li key={social.label} className="flex items-center gap-2">
                    <ArrowUpRight size={16} className="text-brand" />
                    <Link
                      href={social.href}
                      className="transition hover:text-brand"
                      target={isExternalLink(social.href) ? "_blank" : undefined}
                      rel={isExternalLink(social.href) ? "noopener noreferrer" : undefined}
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
