# NS Land Consultant - Task Tracker

**Last Updated:** 28 April 2026  
**Status:** In Progress

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
- [x] Added `wrangler.toml` configuration
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
- [ ] Deploy Worker: `npx wrangler deploy`
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
   - [ ] Upload OG image to `/public/images/og-default.jpg` (optional)

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

---

## Notes

- **Phase G (Cleanup)** can be done after client content is finalized
- All placeholder markers intentionally left in place as audit trail
- Language switching uses URL query params (`?lang=en`) which is SEO-friendly
- Contact form degrades gracefully if JavaScript fails (shows error message)
