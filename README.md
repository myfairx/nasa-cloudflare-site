# NS Land Consultant

Corporate landing page for NS Land Consultant — a land consultancy firm based in Malaysia.

## Stack

- **Astro 6** — Static Site Generation (SSG)
- **Tailwind CSS 4** — Styling (`@theme` syntax)
- **TypeScript 5** — Strict mode
- **Cloudflare Pages** — Deployment (static upload)
- **Node >= 22.12.0** — Required version

## Quick Start

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production (outputs to ./dist/)
npm run check     # TypeScript type check
npm run lint      # ESLint code quality check
npm run format    # Prettier formatting
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
│   │   └── Layout.astro  # Main layout (nav, footer, animations)
│   ├── pages/
│   │   ├── index.astro   # Home
│   │   ├── about.astro   # About
│   │   ├── services.astro # Services
│   │   └── contact.astro # Contact
│   └── styles/
│       └── global.css    # Tailwind config + custom styles
├── eslint.config.mjs     # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .husky/               # Git pre-commit hooks
└── astro.config.mjs      # Astro configuration
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
- **Primary Green**: `#166534` (primary-800)
- **Gold Accent**: `#d4af37`
- **Animations**: Scroll-reveal on sections (IntersectionObserver)
- **Mockups**: See `doc/` folder for design references

## Guardrails

| Tool | Purpose | Command |
|---|---|---|
| **TypeScript** | Type safety, strict mode | `npm run check` |
| **ESLint** | Code quality, bad patterns | `npm run lint` |
| **Prettier** | Consistent formatting | `npm run format` |
| **Husky** | Pre-commit hooks (auto-run) | Automatic on `git commit` |

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
| `npm run check` | TypeScript type check |
| `npm run lint` | ESLint code quality check |
| `npm run format` | Prettier code formatting |

## Pending Tasks

- [ ] Add company logo (replace favicon)
- [ ] Deploy to Cloudflare Pages
- [ ] Connect domain (nslandconsultant.com)
- [ ] Set up contact form handler (Formspree or similar)
