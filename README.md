# NS Land Consultant

Corporate landing page for NS Land Consultant — a land consultancy firm based in Malaysia.

## Stack

- **Astro 6** — Static Site Generation
- **Tailwind CSS 4** — Styling
- **TypeScript** — Type safety
- **Cloudflare Pages** — Deployment

## Quick Start

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production (outputs to ./dist/)
```

## Project Structure

```
/
├── doc/                  # Design mockups & project specs
├── public/               # Static assets (favicon, images)
├── src/
│   ├── data/
│   │   └── content.ts    # All site content — edit here
│   ├── layouts/
│   │   └── Layout.astro  # Main layout with nav, footer, animations
│   ├── pages/
│   │   ├── index.astro   # Home
│   │   ├── about.astro   # About
│   │   ├── services.astro # Services
│   │   └── contact.astro # Contact
│   └── styles/
│       └── global.css    # Tailwind config + custom styles
└── astro.config.mjs
```

## Content Management

All text content is centralized in `src/data/content.ts`. Edit this file to update:
- Site name, tagline, contact info
- Navigation labels
- Hero section text
- Services descriptions
- About page content
- Footer links

## Design System

- **Theme**: Green + Gold (professional, premium)
- **Animations**: Scroll-reveal on sections (IntersectionObserver)
- **Mockups**: See `doc/` folder for design references

## Deployment

Build output goes to `./dist/`. Deploy to Cloudflare Pages via:
- Drag & drop `dist/` folder in Cloudflare dashboard
- GitHub integration (auto-deploy on push)
- Wrangler CLI: `npx wrangler pages deploy dist`

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Type check with Astro |
