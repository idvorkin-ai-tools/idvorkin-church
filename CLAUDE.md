# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Saint Demetrios Greek Orthodox Church website — a static React SPA with a modern "Editorial Sanctuary" visual identity. Built with React 19, TypeScript, Tailwind CSS v4, and Vite 7. Uses `vite-plugin-singlefile` to produce a single self-contained HTML file on build.

## Commands

- `npm run dev` — Start dev server with HMR
- `npm run build` — Type-check (`tsc -b`) then bundle via Vite
- `npm run lint` — ESLint across all TS/TSX files
- `npm run preview` — Serve the production build locally

No test framework is configured.

## Architecture

**Routing:** HashRouter (react-router-dom v7) — all routes defined in `src/App.tsx`. Layout wraps all pages via a `<Route element={<Layout />}>` parent route with `<Outlet />`.

**Component organization:**
- `src/components/layout/` — Layout shell: Header (with scroll transparency), Footer, MobileNav (full-screen overlay)
- `src/components/ui/` — Reusable primitives: Button (primary/secondary/accent pill variants), Card, HeroSection (light page hero), SectionHeading (with accent-line), IconLabel
- `src/components/{page}/` — Page-specific components grouped by section name (home, about, services, ministries, community, stewardship, contact)
- `src/pages/` — One page component per route

**Data:** Static JSON files in `src/data/` (clergy.json, ministries.json) imported directly — no API layer.

**Types:** Shared interfaces in `src/types.ts` (ClergyMember, Ministry, Service, Sacrament, Event, NavItem, ChurchInfo).

**Styling:**
- Tailwind CSS v4 with `@tailwindcss/vite` plugin (configured in `vite.config.ts`, not a separate tailwind config file)
- Custom theme tokens defined via `@theme` in `src/index.css`: color palettes (cloud, ink, iris, ember, sage) and font families (display: Bricolage Grotesque, heading: Fraunces, body: Outfit)
- Utility CSS classes in `src/index.css`: `.modern-card`, `.accent-line` / `.accent-line-center`, `.link-underline`, `.text-gradient-iris`, `.reveal` / `.reveal-stagger`
- `src/utils/cn.ts` — lightweight className joiner (no clsx/tailwind-merge dependency)

**Animations:** Scroll-triggered reveal system using IntersectionObserver in `src/hooks/useReveal.ts`. Apply `.reveal` class to elements and `.reveal-stagger` to parents for staggered entrance. The hook returns a ref to attach to the container. Header scroll transparency via `src/hooks/useScrolled.ts`.

**Build:** `vite-plugin-singlefile` inlines all assets into a single `dist/index.html`. `assetsInlineLimit` is set very high (1MB) to force inlining. Images are in `public/images/` (all .webp).

**Icons:** lucide-react for all iconography.
