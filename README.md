# Siti Solehah Yunita Rahmawati – Portfolio

Production-ready personal portfolio for **Siti Solehah Yunita Rahmawati**, built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern, minimalist UI with AI-inspired accents and subtle micro-animations.
- Mobile-first responsive layout with light/dark toggle.
- Structured content sourced from `data/siteData.json` for easy updates.
- Accessible navigation, semantic HTML, and SEO-ready metadata.
- Contact form wired for Formspree (or swap to custom backend).
- Jest + React Testing Library unit test stub.
- Ready for deployment to Vercel or static export (GitHub Pages).

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to develop.

### Scripts

- `npm run clean` – Remove `.next/` + `out/` build artifacts (useful if you see stale chunk errors).
- `npm run dev` – Start local development.
- `npm run build` – Create production build.
- `npm run start` – Serve the production build.
- `npm run lint` – Run ESLint.
- `npm run test` – Execute Jest tests.
- `npm run typecheck` – Ensure TypeScript types are sound.
- `npm run format` – Format with Prettier.
- `npm run export` – Generate static export (for GitHub Pages).

## Tailwind & Fonts

- Tailwind is configured in `tailwind.config.ts`; global styles live in `app/globals.css`.
- `app/layout.tsx` loads the Poppins font from Google Fonts with `next/font`.

## Content Management

- Edit all experience, projects, awards, certifications, volunteer, and contact data in `data/siteData.json`.
- Replace placeholder images in `public/assets/`.
- Drop your resume PDF at `public/resume.pdf`.

## Running Tests

```bash
npm run test
```

Jest is configured via `jest.config.cjs`; see `__tests__/Hero.test.tsx` for an example.

## Deployment

### Deploy to Vercel

```bash
npm run build
npx vercel deploy --prebuilt --prod
```

Or connect the repository in the Vercel dashboard; framework preset **Next.js** works out of the box.

### Deploy to GitHub Pages

1. Update `next.config.mjs` with `output: "export"` and `basePath` if hosting in a subdirectory.
2. Run `npm run export` to populate the `out/` directory.
3. Push `out/` to the `gh-pages` branch (e.g., via `git subtree push` or GitHub Actions).

## Environment & Secrets

- Formspree endpoint is stored in `data/siteData.json`. Replace `https://formspree.io/f/yourFormId` with your form ID.
- For correct canonical URLs, OpenGraph/Twitter meta, and sitemap/robots in production, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`).
- If you switch to EmailJS or another service, update `ContactForm.tsx` accordingly.

## Folder Highlights

- `app/page.tsx` – Main landing page using modular components.
- `components/` – UI building blocks (Hero, Navbar, ProjectCard, ExperienceCard, AwardsGrid, ContactForm, ThemeToggle, Footer).
- `lib/animations.ts` – Shared Framer Motion variants.
- `styles/typography.css` – Additional typographic utilities.

## Deployment Script

Run `./deploy.sh` for a fast lint-build-deploy flow (requires Vercel CLI installed).

## License

All rights reserved © Siti Solehah Yunita Rahmawati.
