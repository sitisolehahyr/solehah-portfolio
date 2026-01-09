"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  logo?: string;
  logoBlend?: string;
  logoFit?: string;
  logoScale?: number;
  achievements: string[];
  tech: string[];
};

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const {
    company,
    role,
    start,
    end,
    location,
    logo,
    logoBlend = "multiply",
    logoFit = "contain",
    logoScale = 1,
    achievements,
    tech
  } = experience;
  const blendClass =
    logoBlend === "screen" ? "mix-blend-screen" : logoBlend === "normal" ? "" : "mix-blend-multiply";
  const fitClass = logoFit === "cover" ? "object-cover" : "object-contain";
  const paddingClass = logoFit === "cover" ? "p-0" : "p-2";
  const imageStyle = logoScale !== 1 ? { transform: `scale(${logoScale})` } : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/70"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {logo && (
            <div className="relative isolate h-12 w-12 overflow-hidden rounded-full bg-brand-light/80 ring-1 ring-slate-900/5 shadow-sm dark:bg-slate-800/80 dark:ring-white/10">
              <Image
                src={logo}
                alt={`${company} logo`}
                fill
                className={`${fitClass} ${paddingClass} ${blendClass} dark:brightness-110 dark:contrast-110`}
                style={imageStyle}
                sizes="48px"
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{role}</h3>
            <p className="text-sm font-medium text-brand">{company}</p>
          </div>
        </div>
        <div className="text-right text-sm text-slate-500 dark:text-slate-400">
          <p>
            {start} – {end}
          </p>
          {location && <p>{location}</p>}
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/25"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
