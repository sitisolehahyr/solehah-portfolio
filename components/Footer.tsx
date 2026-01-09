import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail
};

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

type FooterProps = {
  name: string;
  socials: SocialLink[];
  email: string;
};

const Footer = ({ name, socials, email }: FooterProps) => (
  <footer className="relative overflow-hidden border-t border-brand/20 bg-gradient-to-br from-white via-brand-light/60 to-white py-12 backdrop-blur dark:border-brand/30 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950">
    <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-brand/8 blur-3xl" />
    <div className="pointer-events-none absolute -right-16 top-8 h-32 w-32 rounded-full bg-brand/12 blur-3xl" />
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {name}
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          <Link href={`mailto:${email}`} className="hover:text-brand">
            {email}
          </Link>
        </p>
      </div>
      <div className="flex items-center gap-3">
        {socials.map((social) => {
          const Icon = iconMap[social.icon?.toLowerCase() ?? "email"] ?? Mail;
          const isExternalLink = /^https?:\/\//i.test(social.href);
          return (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-white/80 text-slate-600 transition hover:border-brand hover:bg-brand-light hover:text-brand dark:border-brand/40 dark:bg-slate-900/70 dark:text-slate-200"
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
            >
              <Icon size={18} />
            </Link>
          );
        })}
      </div>
    </div>
  </footer>
);

export default Footer;
