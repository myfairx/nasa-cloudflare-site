# NS Land Consultant Website

## Project Overview
- **Type**: Corporate landing page for land consultancy firm (Malaysia)
- **Domain**: nslandconsultant.com (on Cloudflare)
- **Stack**: Astro + Tailwind CSS + Cloudflare Pages

## Design System
- **Reference**: `mock1-classic.html` (selected design)
- **Theme**: Green + Gold (professional, growth, premium)
- **Colors**:
  - Primary: `#166534` (lighter forest green)
  - Primary Light: `#4CAF50` (lighter green)
  - Gold: `#d4af37`
  - Gold Light: `#fde68a`
- **Animations**: Scroll-reveal animations on each section (IntersectionObserver)
  - Elements fade in and slide up when entering viewport
  - Staggered delays for sequential elements

## Pages
1. **Home** - Hero, services overview, why us, contact CTA
2. **About** - Company story, values
3. **Services** - Land consultancy services offered
4. **Contact** - Contact form and info

## Tech Details
- **Adapter**: `@astrojs/cloudflare` for Cloudflare Pages
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages

## To Do
- [ ] Add company logo
- [x] Deploy to Cloudflare Pages
- [ ] Connect domain

## Content
All site content is managed in `src/data/content.ts`. Edit this file to change:
- Site name, contact info
- Navigation labels
- Hero section text
- Services descriptions
- About page content
- Footer links

## GitHub
- **Repo**: https://github.com/myfairx/nasa-cloudflare-site
- **Token**: Stored in `.env` (not committed)

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with Astro