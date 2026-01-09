"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as "light" | "dark" | null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");

    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 opacity-0 dark:border-slate-700 dark:bg-slate-900"
        aria-hidden="true"
        tabIndex={-1}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
    >
      {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </button>
  );
};

export default ThemeToggle;
