# Udon Thani International Horticultural Expo 2026 — Website

A production-quality, multilingual (Thai / English / Chinese) promotional website for the
**Udon Thani International Horticultural Expo 2026**, built with Next.js 15 (App Router),
React 19, TypeScript, Tailwind CSS, shadcn-style components, next-intl, next-themes and
Framer Motion.

## Content basis

Copy and facts are drawn from the official expo site (`udonthaniexpo2026.com`) and public
reporting: theme "Diversity of Life," dates (1 Nov 2026 – 14 Mar 2027), the 1,030-rai Nong Dae
Wetland site, the six themed zones, and expected visitor/impact figures.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/th` (default locale). Switch languages
with the switcher in the navbar (`/th`, `/en`, `/zh`).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

> **Note on fonts:** this project loads Fraunces, Plus Jakarta Sans, Noto Sans Thai and Noto
> Sans SC via `next/font/google`, which fetches font files at build time. This requires
> outbound access to `fonts.googleapis.com` / `fonts.gstatic.com`. If you build in a network-
> restricted environment, that step will fail — it is not a code issue. Any environment with
> normal internet access (local machine, Vercel, CI, etc.) builds cleanly.

## Project structure

```
src/
  app/[locale]/        # App Router pages, scoped per locale (th/en/zh)
  components/ui/       # shadcn-style primitives (Button, Card, Tabs, Accordion, Sheet, ...)
  components/layout/   # Navbar, Footer, ThemeProvider, ThemeToggle, LanguageSwitcher
  components/shared/   # SectionHeader, WaveDivider (shared visual building blocks)
  features/            # One folder per page section (hero, about, highlights, zones, ...)
  hooks/                # useCounter, useScrollPosition, useMediaQuery
  lib/                  # utils.ts (cn helper), constants.ts (zone icons, images, links)
  types/                # Shared TypeScript types
  i18n/                 # next-intl routing/navigation/request config
messages/               # th.json, en.json, zh.json translation catalogs
middleware.ts           # next-intl locale routing middleware
```

## Design

- **Palette:** deep wetland green primary, warm rice-paper cream background, temple-gold
  accent — a nature/tourism/government-official register rather than a generic template.
- **Type:** Fraunces (display, botanical/editorial serif) paired with Plus Jakarta Sans (body);
  Noto Sans Thai / Noto Sans SC layered in for non-Latin locales.
- **Signature element:** an organic wetland-water wave divider marks the transitions between
  major sections, echoing the Expo's "water is the foundation" concept.
- Dark mode via `next-themes`, fully responsive from 390px to 1536px+, sticky navbar with a
  mobile drawer (Sheet), reduced-motion support, and semantic/accessible markup throughout.

## i18n

Every string is sourced from `messages/{locale}.json` via `next-intl` — no hardcoded UI text.
Routes are locale-prefixed (`/th`, `/en`, `/zh`) via `next-intl`'s routing + middleware, with
`generateStaticParams` prerendering all three locales at build time.
