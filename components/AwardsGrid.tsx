"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export type Award = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

type AwardsGridProps = {
  awards: Award[];
};

const AwardsGrid = ({ awards }: AwardsGridProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {awards.map((award, index) => (
        <motion.article
          key={`${award.title}-${award.year}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/60"
        >
          <div className="absolute -top-6 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand bg-brand/10 text-brand dark:border-brand/60 dark:bg-brand/20">
            <BadgeCheck size={26} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{award.year}</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{award.title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{award.issuer}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{award.description}</p>
        </motion.article>
      ))}
    </div>
  );
};

export default AwardsGrid;
