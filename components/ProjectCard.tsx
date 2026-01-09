"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  imagePosition?: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, tech, githubUrl, liveUrl, image, imagePosition } = project;
  const objectPosition =
    imagePosition === "top" ? "top" : imagePosition === "bottom" ? "bottom" : imagePosition === "left" ? "left" : imagePosition === "right" ? "right" : "center";
  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:border-brand/60 hover:shadow-2xl dark:border-slate-800/80 dark:bg-slate-900/70"
    >
      <div className="relative h-52 w-full overflow-hidden bg-slate-900/5">
        {image ? (
          <Image
            src={image}
            alt={`${title} cover`}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            style={{ objectPosition }}
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Screenshot coming soon
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/12 via-transparent to-brand-light/35 opacity-70 transition group-hover:opacity-95 dark:from-brand/25 dark:to-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/35 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-slate-950/55" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/25"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-4 text-sm font-semibold">
          {githubUrl && (
            <Link
              href={githubUrl}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/60 hover:text-brand dark:border-slate-700/70 dark:bg-slate-950/25 dark:text-slate-200"
              target={isExternalLink(githubUrl) ? "_blank" : undefined}
              rel={isExternalLink(githubUrl) ? "noopener noreferrer" : undefined}
            >
              <Github size={16} />
              Code
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-dark"
              target={isExternalLink(liveUrl) ? "_blank" : undefined}
              rel={isExternalLink(liveUrl) ? "noopener noreferrer" : undefined}
            >
              <ExternalLink size={16} />
              Demo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
