# NS Land Consultant - Task Tracker

**Last Updated:** 28 April 2026
**Status:** UI/UX Implementation Phase

---

## Phase A: Consolidate Content Ownership ✅ COMPLETED

- [x] Reorganized `src/data/content.ts` with clear sections and comments
- [x] Added SEO metadata structure for all pages (home, about, services, contact)
- [x] Added `[PLACEHOLDER]` markers for realistic temporary content
- [x] Added `[NEEDS CLIENT INPUT]` markers for content requiring approval
- [x] Added social media links configuration
- [x] Added form success/error messages
- [x] Included legacy exports for backward compatibility (to be removed later)

---

## Phase B: Rebuild i18n Strategy ✅ COMPLETED

- [x] Updated all pages to support URL-based language switching (`?lang=en` or `?lang=ms`)
- [x] Fixed hardcoded Malay language in all pages
- [x] Pages now default to Malay (`ms`) if no lang param is set
- [x] Language toggle uses `<a>` links that reload page with correct language
- [x] Server-rendered language matches `<html lang>` attribute
- [x] Mobile and desktop language toggles work correctly

**Files Modified:**

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/services.astro`
- `src/pages/contact.astro`
- `src/layouts/Layout.astro`

---

## Phase C: Clean Up Layout and Navigation ✅ COMPLETED

- [x] Added mobile navigation with drawer and backdrop
- [x] Kept desktop nav behavior intact
- [x] Moved language switch UI into predictable shared header state
- [x] Added proper footer links and contact details from data
- [x] Layout accepts page-specific metadata props (title, description, canonical, ogImage, lang)
- [x] Mobile menu closes on escape key and backdrop click
- [x] Mobile menu prevents body scroll when open

**Acceptance Criteria Met:**

- Header works well on small screens ✅
- Nav remains accessible without client-side breakage ✅
- Layout is no longer hardcoded to Malay ✅

---

## Phase D: Add SEO and Social Metadata ✅ COMPLETED (Structure Ready)

- [x] OpenGraph tags structure in place in `src/data/content.ts`
- [x] Twitter card metadata structure ready
- [x] Canonical URL support implemented
- [x] Page-specific descriptions and titles from shared content
- [x] Meta theme-color configured

**Client Action Needed:**

- [ ] Review and approve all SEO descriptions in content.ts
- [ ] Provide final keywords for each page
- [ ] Confirm if multilingual SEO (separate URLs for each language) is required
- [ ] Add actual OG image asset to `/public/images/og-default.jpg`

---

## Phase E: Fix the Contact Form Flow ✅ COMPLETED (Backend Ready)

- [x] Created Cloudflare Worker at `worker/contact.ts`
- [x] Added `worker/wrangler.toml` configuration
- [x] Added root `wrangler.jsonc` Pages configuration
- [x] Installed `wrangler` as dev dependency
- [x] Form submission handler with validation
- [x] Success/error states in UI with messages
- [x] Turnstile CAPTCHA widget placeholder added
- [x] Client-side JavaScript handler for form submission
- [x] Form resets after successful submit
- [x] Loading state during submission

**Client Action Needed:**

- [ ] Create Cloudflare Turnstile site and get Site Key
- [ ] Store Turnstile Secret Key: `npx wrangler secret put TURNSTILE_SECRET`
- [ ] Sign up for Resend and verify domain (`nslandconsultant.com`)
- [ ] Generate Resend API key
- [ ] Store Resend API Key: `npx wrangler secret put RESEND_API_KEY`
- [ ] Deploy Worker: `npx wrangler deploy --config worker/wrangler.toml`
- [ ] Update Worker URL in `contact.astro` (line 224)
- [ ] Update Turnstile Site Key in `contact.astro` (line 184)

---

## Phase F: Simplify Astro and Deployment Configuration ✅ COMPLETED

- [x] Build output is static (`output: 'static'` in `astro.config.mjs`)
- [x] No adapter/output mismatch
- [x] Cloudflare Worker isolated for contact form only
- [x] Deployment target is Cloudflare Pages (static site + Worker)

---

## Phase G: Remove Dead Code and Duplicates ⏳ PENDING

**Tasks:**

- [ ] Remove legacy exports in `src/data/content.ts` once pages fully updated
  - `navigation`, `hero`, `services`, `whyUs`, `about`, `contact`, `footer` exports (lines ~622-718)
- [ ] Verify no duplicated translation data in Layout.astro
- [ ] Remove unused helper logic from `src/utils/i18n.ts` if not part of final strategy
- [ ] Clean page-level hardcoded strings that duplicate content data

**Blockers:** Need to verify all pages are using new content structure before removing legacy exports

---

## Phase H: UI/UX Implementation ⏳ IN PROGRESS

See `docs/UI_UX_PLAN.md` for full specifications.

### Phase 1: Core Structure (CRITICAL) - Partially Done

**Mobile Navigation (Hamburger Menu) ✅ DONE**
- Slide-in drawer from right (300px width)
- Backdrop blur when open
- Language toggle inside drawer
- Close on backdrop tap or swipe right
- Mobile menu closes on Escape key and backdrop click
- Mobile menu prevents body scroll when open

**Services Page Redesign (Category Accordion) ⏳ PENDING**
- Current: Flat 3-column grid with 10 services
- Required: Category-based accordion (3 categories: Perundingan, Pengurusan, Pemasaran)
- Mobile: Accordion with expandable sections
- Desktop: Tab navigation or sticky sidebar
- **Status:** NOT IMPLEMENTED - needs complete rebuild

**Contact Page Mobile Layout ⏳ PARTIAL**
- Form left, info right on desktop ✅
- Stacked on mobile (form above info) - needs CSS verification
- Missing: Business hours section
- Missing: WhatsApp quick action button

**Footer Responsive Layout ✅ DONE**
- 3-column grid that stacks on mobile
- Social media icons row

### Phase 2: Visual Polish ⏳ PENDING

**Hero Background Image Support ⏳ PENDING**
- Current: Plain gradient (`bg-gradient-to-br from-primary-50 to-white`)
- Required: Background image with dark gradient overlay
- Image specs: 1920x1080 (desktop), 768x1024 (mobile), WebP/JPG, <200KB
- **Status:** NOT IMPLEMENTED

**Service Card Enhancements (Homepage) ⏳ PENDING**
- Current: 3-column grid
- Required (mobile): Horizontal scroll with snap or stacked cards
- Card specs (mobile): 280px width, scroll-snap-type: x mandatory
- **Status:** NOT IMPLEMENTED

**About Page Stats/Trust Indicators ⏳ PENDING**
- Required: Stats row (e.g., "500+ Transaksi | 15+ Tahun Pengalaman")
- Required: Large team/office photo
- Stats: 3-column grid with icon + number + label
- **Status:** NOT IMPLEMENTED

**Scroll Animations ⏳ PARTIAL**
- Current: Fade-in on scroll (IntersectionObserver)
- Enhancement needed: Add `translateY(20px → 0)` transition
- Duration: 600ms, easing: cubic-bezier(0.4, 0, 0.2, 1)
- **Status:** Fade works, translateY enhancement NOT IMPLEMENTED

### Phase 3: Enhancements ⏳ PENDING

- [ ] Loading/skeleton states - NOT IMPLEMENTED
- [ ] Form validation UI - NOT IMPLEMENTED
- [ ] Social media icons with actual links - PENDING client input
- [ ] SEO image optimizations - PENDING (OG image missing)

### Section 15: Promo Modal ⏳ PENDING

**New Component Required:**
- [ ] Create `src/components/PromoModal.astro`
- [ ] Add `promotions` data structure to `content.ts`
- [ ] Create `/public/promos/` folder for images

**Features:**
- Shows only on homepage after 2 second delay
- Once per visitor per day (localStorage)
- Auto-rotates if multiple images (every 5 seconds)
- Close: X button, backdrop click, ESC key
- Touch/swipe support on mobile
- Desktop: Max 600px width, centered
- Mobile: 92% viewport width

**Data Structure in content.ts:**
```typescript
export const promotions = {
  enabled: true,
  showOn: ['home'],
  settings: { delay: 2000, oncePerDay: true, storageKey: 'nslc-promo-shown', expiryDays: 30 },
  images: [{ src: '/promos/promo-1.jpg', alt: { ms: '', en: '' }, link: '/contact', startDate: '2026-04-01', endDate: '2026-05-31' }],
  carousel: { enabled: false, interval: 5000, transition: 400, showDots: true, pauseOnHover: true },
};
```

### Accessibility (WCAG 2.1 AA) ⏳ PARTIAL

- [x] Visible focus states (ring-2 ring-primary-500)
- [ ] Skip-to-content link - NOT IMPLEMENTED
- [ ] Touch targets ≥ 44px - needs verification
- [x] Heading hierarchy (h1 → h2 → h3) - verified
- [ ] Alt text for images - needs verification

### Other UI/UX Items ⏳ PENDING

- [ ] Back-to-top button (sticky footer)
- [ ] Sticky header behavior (hide on scroll down, show on scroll up)
- [ ] WhatsApp floating button on mobile

---

## Content Status

### `[PLACEHOLDER]` Items (Can launch with these)

- Service descriptions
- Hero subtitle
- Why Us section
- CTA text
- Footer description
- Values list

### `[NEEDS CLIENT INPUT]` Items (Must provide before launch)

- [ ] Office address (`content.ts` line 15)
- [ ] Phone number (currently generic)
- [ ] Social media links: Facebook, Instagram, LinkedIn, WhatsApp
- [ ] SEO descriptions for all pages (home, about, services, contact)
- [ ] Company founding story (About page)
- [ ] Specific statistics or achievements
- [ ] Turnstile Site Key
- [ ] Worker URL
- [ ] Resend domain verification
- [ ] OG image (`/public/images/og-default.jpg`)
- [ ] Promo images (`/public/promos/promo-1.jpg`)

---

## Validation Checklist

Run these commands after changes:

- [x] `npm run check` ✅
- [x] `npm run lint` ✅
- [x] `npm run format` ✅
- [x] `npm run build` ✅

---

## Deployment Steps

1. **Before Deploy:**
   - [ ] Client provides all `[NEEDS CLIENT INPUT]` content
   - [ ] Replace all placeholder markers
   - [ ] Upload logo to `/public/logo.svg` (optional)
   - [ ] Upload OG image to `/public/images/og-default.jpg`
   - [ ] Complete Phase H (UI/UX) implementation

2. **Deploy Worker:**
   - [ ] `npx wrangler deploy`
   - [ ] `npx wrangler secret put TURNSTILE_SECRET`
   - [ ] `npx wrangler secret put RESEND_API_KEY`

3. **Deploy Site:**
   - [ ] `npm run build`
   - [ ] Deploy to Cloudflare Pages
   - [ ] Connect domain `nslandconsultant.com`

4. **Test:**
   - [ ] Test contact form submission
   - [ ] Verify email delivery
   - [ ] Test Turnstile challenge
   - [ ] Test language switching
   - [ ] Test mobile navigation
   - [ ] Check SEO meta tags in browser dev tools
   - [ ] Promo modal (if enabled)
   - [ ] Google Mobile-Friendly Test
   - [ ] Lighthouse accessibility score > 90

---

## Notes

- **Phase G (Cleanup)** can be done after client content is finalized
- **Phase H (UI/UX)** is the current active work - see `docs/UI_UX_PLAN.md`
- All placeholder markers intentionally left in place as audit trail
- Language switching uses URL query params (`?lang=en`) which is SEO-friendly
- Contact form degrades gracefully if JavaScript fails (shows error message)
- Phase H (UI/UX) implementation is the priority before Phase G cleanup
