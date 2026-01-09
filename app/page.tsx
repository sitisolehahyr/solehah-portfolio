import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Globe2, GraduationCap, HeartHandshake, Mail, MapPin, Sparkles } from "lucide-react";
import siteData from "@/data/siteData.json";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import AwardsGrid from "@/components/AwardsGrid";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: siteData.personal.title,
  description: siteData.personal.tagline
};

export default function HomePage() {
  const { personal, experiences, projects, awards, certifications, volunteer, contact } = siteData;
  const aboutParagraphs = (personal.bio ?? "").split(/\n\s*\n/).filter(Boolean);
  const aboutIntro = aboutParagraphs.slice(0, 2);
  const aboutMore = aboutParagraphs.slice(2);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Awards", href: "#awards" },
    { label: "Certifications", href: "#certifications" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
    >
      <Navbar navItems={navItems} socials={personal.socials} />
      <main
        id="main"
        className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-16 pt-24 sm:px-6 lg:px-8"
      >
        <Hero
          name={personal.name}
          title={personal.title}
          tagline={personal.tagline}
          location={personal.location}
          resumeUrl={personal.resume}
          email={personal.email}
          socials={personal.socials}
        />

        <section id="about" className="scroll-mt-24">
          <header className="mb-8 flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">About</span>
            <h2 className="text-3xl font-semibold">A little more about me</h2>
          </header>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.55fr)]">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-slate-900/5 dark:ring-white/10">
                    <Image
                      src="/assets/nita.jpg"
                      alt={personal.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                      priority={false}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{personal.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{personal.title}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 self-start rounded-full border border-brand/20 bg-brand-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand dark:border-brand/30 dark:bg-slate-800/50">
                  <Sparkles size={14} />
                  Building useful systems
                </div>
              </div>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {aboutIntro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {aboutMore.length > 0 ? (
                  <details className="group">
                    <summary className="mt-2 inline-flex cursor-pointer select-none items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200">
                      Read more
                      <span className="text-xs text-slate-400 transition group-open:rotate-180">▾</span>
                    </summary>
                    <div className="mt-4 space-y-4">
                      {aboutMore.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </details>
                ) : null}
              </div>
            </div>

            <aside className="grid gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand">Quick facts</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 text-brand" />
                    <span>{personal.location}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 text-brand" />
                    <Link href={`mailto:${personal.email}`} className="font-medium hover:text-brand">
                      {personal.email}
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase size={18} className="mt-0.5 text-brand" />
                    <span>Cross-platform apps (iOS, Android, Web)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe2 size={18} className="mt-0.5 text-brand" />
                    <span>Cloud + data-driven systems (AWS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HeartHandshake size={18} className="mt-0.5 text-brand" />
                    <span>Social impact + sustainability projects</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand">Focus areas</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "AI",
                    "Machine Learning",
                    "Deep Learning",
                    "Cloud (AWS)",
                    "Data Pipelines",
                    "Product Engineering"
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-brand-light via-white to-brand-light px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:text-slate-200">
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap size={18} className="text-brand" />
                    Always learning
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {certifications.length} certifications
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24">
          <header className="mb-8 flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">Experience</span>
            <h2 className="text-3xl font-semibold">Impactful roles across AI and software engineering</h2>
          </header>
          <div className="grid gap-6">
            {experiences.map((experience) => (
              <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <header className="mb-8 flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">Projects</span>
            <h2 className="text-3xl font-semibold">Selected work</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Production-ready prototypes and research-driven builds across computer vision, EdTech, and simulation.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="awards" className="scroll-mt-24">
          <header className="mb-8 flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">
              Awards & Publications
            </span>
            <h2 className="text-3xl font-semibold">Recognitions</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Celebrating milestones from international competitions, academia, and research dissemination.
            </p>
          </header>
          <AwardsGrid awards={awards} />
        </section>

        <section id="certifications" className="scroll-mt-24">
          <header className="mb-8 flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">Certifications</span>
            <h2 className="text-3xl font-semibold">Continuous learning</h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((cert) => {
              const hasCredentialUrl = Boolean(cert.credentialUrl && cert.credentialUrl !== "#");
              return (
                <article
                  key={cert.name}
                  className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {cert.logo ? (
                        <div className="relative isolate h-14 w-14 overflow-hidden rounded-full bg-white ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10">
                          <Image
                            src={cert.logo}
                            alt={`${cert.issuer} logo`}
                            fill
                            className="object-contain p-1"
                            sizes="56px"
                          />
                        </div>
                      ) : null}
                      <div>
                        <h3 className="text-xl font-semibold">{cert.name}</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                      {cert.issued ? <p>Issued {cert.issued}</p> : null}
                      {cert.expires ? <p>Expires {cert.expires}</p> : null}
                    </div>
                  </div>
                  {cert.credentialId ? (
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Credential ID: {cert.credentialId}</p>
                  ) : null}
                  {hasCredentialUrl ? (
                    <Link
                      href={cert.credentialUrl}
                      className="mt-4 inline-flex text-sm font-medium text-brand transition hover:text-brand"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Show credential
                    </Link>
                  ) : (
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Credential link not added yet.</p>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="volunteer" className="scroll-mt-24">
          <header className="mb-8 flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">
              Volunteer & Leadership
            </span>
            <h2 className="text-3xl font-semibold">Giving back to the community</h2>
          </header>
          <div className="grid gap-6">
            {volunteer.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/60"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.start} – {item.end}
                  </span>
                </div>
                <p className="mt-1 text-base font-medium text-brand">{item.organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <header className="mb-8 flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">Contact</span>
            <h2 className="text-3xl font-semibold">Let’s collaborate</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">{contact.availability}</p>
          </header>
          <ContactForm
            formAction={contact.formspreeEndpoint}
            email={personal.email}
            socials={personal.socials}
            resumeUrl={personal.resume}
          />
        </section>
      </main>
      <Footer name={personal.name} socials={personal.socials} email={personal.email} />
    </div>
  );
}
