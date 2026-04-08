# NS Land Consultant Website

## Project Overview
- **Type**: Corporate landing page for land consultancy firm (Malaysia)
- **Domain**: nslandconsultant.com (on Cloudflare)
- **Stack**: Astro + Tailwind CSS + Cloudflare Pages

## Design System
- **Reference**: `doc/mock1-classic.html` (selected design)
- **Theme**: Green + Gold (professional, growth, premium)
- **Colors**:
  - Primary: `#1B5E20` (deep forest green)
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
- **Deployment**: Cloudflare Pages (connect GitHub repo)

## To Do
- [ ] Write actual content (services, about, etc.)
- [ ] Finalize brand colors
- [ ] Add company logo
- [ ] Deploy to Cloudflare Pages
- [ ] Connect domain