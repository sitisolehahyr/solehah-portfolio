"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

type NavItem = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

type NavbarProps = {
  navItems: NavItem[];
  socials: SocialLink[];
};

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail
};

const Navbar = ({ navItems, socials }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center bg-gradient-to-b from-brand-light/70 via-white/70 to-transparent py-4 backdrop-blur dark:from-slate-900/90 dark:via-slate-950/70">
      <nav className="relative flex w-full max-w-6xl items-center justify-between overflow-hidden rounded-full border border-brand/20 bg-gradient-to-r from-white/95 via-brand-light/50 to-white/95 px-4 py-2 shadow-sm backdrop-blur dark:border-brand/30 dark:from-slate-950/80 dark:via-slate-900/70 dark:to-slate-950/80 sm:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(10,102,194,0.12),transparent_55%)]" />
        <Link href="#top" className="inline-flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-900/5 dark:ring-white/10">
            <Image
              src="/assets/nita.jpg"
              alt="Siti Solehah Yunita Rahmawati"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </span>
          <span className="sr-only">Back to top</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand dark:text-slate-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {socials.slice(0, 2).map((social) => {
            const Icon = iconMap[social.icon?.toLowerCase() ?? "email"] ?? Mail;
            return (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-white/70 text-slate-600 transition hover:border-brand hover:text-brand dark:border-brand/40 dark:bg-slate-900/70 dark:text-slate-200"
                aria-label={social.label}
                target={isExternalLink(social.href) ? "_blank" : undefined}
                rel={isExternalLink(social.href) ? "noopener noreferrer" : undefined}
              >
                <Icon size={18} />
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-white/70 text-slate-700 transition hover:border-brand hover:text-brand dark:border-brand/40 dark:bg-slate-900/70 dark:text-slate-200 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[4.5rem] w-full max-w-6xl px-4 md:hidden"
          >
            <div className="rounded-3xl border border-brand/20 bg-gradient-to-br from-white via-brand-light/60 to-white p-6 shadow-lg backdrop-blur dark:border-brand/30 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-base font-semibold text-slate-700 transition hover:text-brand dark:text-slate-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon?.toLowerCase() ?? "email"] ?? Mail;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-white/70 text-slate-600 transition hover:border-brand hover:text-brand dark:border-brand/40 dark:bg-slate-900/70 dark:text-slate-200"
                      aria-label={social.label}
                      target={isExternalLink(social.href) ? "_blank" : undefined}
                      rel={isExternalLink(social.href) ? "noopener noreferrer" : undefined}
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
