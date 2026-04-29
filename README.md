# NS Land Consultant

Corporate landing page for a Malaysian land consultancy firm.

## Stack

- **Astro 6** — Static Site Generation
- **Tailwind CSS 4** — Styling (`@theme` syntax)
- **TypeScript 5** — Strict mode
- **Cloudflare Pages** — Deployment
- **Node >= 22.12.0**

## Quick Start

```bash
npm install
npm run dev       # localhost:4321
npm run build     # output: ./dist/
npm run check     # TypeScript
npm run lint      # ESLint
npm run format    # Prettier
```

## Project Structure

```
src/
├── data/content.ts    # All text content (edit here)
├── layouts/Layout.astro  # Main layout (nav, footer, animations)
├── pages/            # index, about, services, contact
└── styles/global.css # Tailwind config + custom styles
public/               # Static assets
doc/                  # Design mockups (mock1-classic.html, etc.)
worker/               # Contact form Worker code and Worker wrangler config
```

## Architecture

- **Content**: All text in `src/data/content.ts` — never hardcode in `.astro` files
- **Layout**: `src/layouts/Layout.astro` handles nav, footer, scroll-reveal animations
- **Pages**: 4 pages in `src/pages/` — import Layout and content
- **Styling**: Tailwind utility classes + `@theme` in `global.css`

## Design System

- **Theme**: Green + Gold (professional, premium)
- **Primary**: `#166534` (primary-800)
- **Gold**: `#d4af37`
- **Animations**: `.reveal` class + IntersectionObserver

## Deployment

```bash
npm run build  # builds to ./dist/
```

Deploy `dist/` to Cloudflare Pages via:

- Drag & drop in dashboard
- GitHub integration
- `npx wrangler pages deploy dist`

Pages config lives in `wrangler.jsonc`. The contact API Worker uses `worker/wrangler.toml`, so the two deploy targets stay separate.

To deploy the Worker later:

```bash
npx wrangler deploy --config worker/wrangler.toml
```

## Pending Tasks

- [ ] Add company logo
- [ ] Add mobile navigation
- [ ] Add OpenGraph tags
- [ ] Add i18n support (MS default, EN toggle, localStorage)
- [ ] Deploy to Cloudflare Pages
- [ ] Connect domain
- [ ] Set up contact form handler (CF Worker + Resend)
