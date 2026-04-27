# NS Land Consultant - Website Fix Plan

**Status:** Ready for implementation  
**Scope:** Fix strategy, architecture, content ownership, i18n, SEO, contact flow, and launch readiness  
**Primary rule:** All copy changes must live in `src/data/content.ts` unless a file is explicitly a shared system layer such as layout metadata or route config.

**Update:** All content now uses placeholder markers: `[PLACEHOLDER]` (temporary acceptable content), `[NEEDS CLIENT INPUT]` (must verify before launch)

---

## 1. Current Assessment

The site has a solid starting point for a 4-page corporate brochure site, but the current implementation is still a prototype in a few critical areas:

- Content is centralized in `src/data/content.ts` with placeholder markers
- Multilingual support is defined in `content.ts` with both Malay and English strings
- The layout is missing mobile navigation
- SEO fundamentals are partially complete (metadata structure added, needs client review)
- The contact form is not wired to a backend
- The deployment config is more complex than needed for a mostly static site

**New:** Content structure now supports:

- Placeholder markers for easy identification of temporary content
- Complete SEO metadata structure per page and language
- Social media links configuration
- Form success/error messages
- All copy organized by language and section

The result is a site that looks close to launch-ready visually, with a clear path to replace placeholders with final content.

---

## 2. Target Strategy

The recommended end state is:

1. **Single source of truth for content**
   - Keep all company copy, page copy, labels, and translation strings in `src/data/content.ts`.
   - Remove hardcoded marketing text from `.astro` pages where practical.
   - All placeholders are clearly marked and searchable

2. **Server-rendered language output**
   - Use separate locale routes or a consistent language rendering strategy.
   - Set `<html lang>` correctly on first render.
   - Use client-side language toggling only as a convenience layer, not the source of truth.

3. **Static-first architecture**
   - Keep the site static unless a specific page truly needs SSR.
   - Use Cloudflare Worker only for the contact form submission path.

4. **Launch-ready marketing site**
   - Add mobile navigation.
   - Add OpenGraph and canonical metadata (structure ready, needs client review).
   - Add a real contact submission flow.
   - Remove dead code and duplicated helpers.

---

## 3. Priority Order

Work should be done in this order:

1. Fix architecture decisions that affect all pages.
2. Fix content ownership and i18n structure. ✅ **COMPLETED** - Content structure reorganized with placeholders
3. Add SEO and navigation essentials.
4. Wire up the contact form.
5. Clean up deployment and validation.
6. Run final checks and verify the build.

This order matters because content and route strategy changes will affect every downstream page and component.

---

## 4. Implementation Plan

### Phase A. Consolidate Content Ownership ✅ COMPLETED

**Status:** Content structure reorganized with placeholder markers

**What was done:**

- Reorganized `src/data/content.ts` with clear sections and comments
- Added SEO metadata structure for all pages (home, about, services, contact)
- Added `[PLACEHOLDER]` markers for realistic temporary content
- Added `[NEEDS CLIENT INPUT]` markers for content requiring approval
- Added social media links configuration
- Added form success/error messages
- Included legacy exports for backward compatibility (to be removed later)

**New Content Structure:**

```typescript
siteConfig         // Contact info, social links (some placeholders)
seo               // Page metadata per language (needs client review)
translations      // All UI text organized by language and section
  ├── ms         // Malay content
  │   ├── nav, hero, services, whyUs, about, contact, footer, cta
  └── en         // English content
      ├── nav, hero, services, whyUs, about, contact, footer, cta
```

**Next:** Client needs to review CONTENT_NEEDED.md and provide final content

---

### Phase B. Rebuild i18n Strategy

**Goal:** Make multilingual behavior predictable, SEO-safe, and maintainable.

**Current status:** Content structure ready, needs implementation

**Recommended approach:**

Option 1, preferred:

- Use route-based locale rendering.
- Keep a Malay default route.
- Add English routes explicitly.
- Render the correct language server-side for each page.

**Tasks:**

- Decide one language architecture and remove the other.
- Use the `lang` prop in `Layout.astro` to set `<html lang={lang}>`.
- Set the page description and title from the active language using `seo` object.
- Move browser language detection and localStorage handling into a single utility.
- Either delete `src/utils/i18n.ts` if unused, or make it the only shared i18n helper.

**Acceptance criteria:**

- The initial HTML language matches the rendered content.
- No JavaScript is required to see the correct language.
- The language toggle persists preference without causing text drift.
- There is only one i18n implementation path.

---

### Phase C. Clean Up Layout and Navigation

**Goal:** Make the shared layout production-ready.

**Tasks:**

- Add mobile navigation.
- Keep desktop nav behavior intact.
- Move language switch UI into a predictable shared header state.
- Add a proper logo slot or brand mark placeholder for the future company logo.
- Add footer links and contact details from data only.
- Ensure the layout can accept page-specific metadata props such as:
  - `title`
  - `description`
  - `canonical`
  - `ogImage`
  - `lang`

**Acceptance criteria:**

- Header works well on small screens.
- Nav remains accessible without client-side breakage.
- Layout is no longer hardcoded to Malay.

---

### Phase D. Add SEO and Social Metadata

**Goal:** Make the site easy to crawl, easy to share, and consistent in search results.

**Current status:** Structure in place, needs implementation

**Tasks:**

- Add OpenGraph tags for every public page (data in `seo` object).
- Add Twitter card metadata.
- Add canonical URL support.
- Add page-specific descriptions and titles from shared content.
- Add `meta name="theme-color"` if the design system benefits from it.
- Add robots directives only if needed.
- Add structured data where appropriate for a local business.
- Ensure the homepage, About, Services, and Contact pages each have unique SEO copy.
- Ensure language metadata matches the rendered language.
- Decide whether to generate `sitemap.xml` and `robots.txt`.

**Metadata now available in content.ts:**

```typescript
seo.home.ms / en; // Home page titles, descriptions, keywords
seo.about.ms / en; // About page metadata
seo.services.ms / en; // Services page metadata
seo.contact.ms / en; // Contact page metadata
seo.global; // Site-wide settings (ogImage, themeColor)
```

**Client action needed:**

- Review and approve all SEO descriptions in content.ts
- Provide final keywords for each page
- Confirm if multilingual SEO (separate URLs for each language) is required

**Suggested SEO extras:**

- Local business schema
- `og:image` / social share image (path configured in `seo.global.defaultOgImage`)
- `twitter:image`
- canonical self-references
- indexable language-specific routes if multilingual SEO is required later

**Acceptance criteria:**

- Each page has a meaningful title, description, and canonical URL.
- Social previews are no longer blank or generic.
- Metadata comes from data, not repeated hardcoded values.
- Search engines can distinguish the site's language and primary business location.
- Any structured data passes basic validation in browser/source inspection.

---

### Phase E. Fix the Contact Form Flow

**Goal:** Turn the contact page into an actual lead capture path.

**Recommended backend:**

- Cloudflare Worker for submission handling.
- Resend for email delivery.
- Optional Turnstile verification for spam protection.

**Tasks:**

- Add a backend endpoint for form submission.
- Add validation for required fields.
- Add spam protection.
- Add success and error states in the UI (messages in `translations.[lang].contact.form`).
- Reset the form after successful submit.
- Provide a fallback mailto link or direct contact info if submission fails.

**Implementation notes:**

- Do not leave the form as a static HTML form with no action.
- Keep secrets out of frontend code.
- Store public configuration in `src/data/content.ts` only if it is not sensitive.
- Sensitive keys must live in platform secrets.

**Acceptance criteria:**

- A submitted form actually reaches the business inbox.
- Users receive clear success or error feedback.
- Spam protection is enforced.
- The contact page still works if JavaScript fails partially, or at least degrades clearly.

---

### Phase F. Simplify Astro and Deployment Configuration

**Goal:** Remove unnecessary complexity and make the deployment model obvious.

**Current concern:**

- `astro.config.mjs` uses a Cloudflare adapter only in production but still sets static output.
- That makes the environment model harder to reason about than necessary.

**Tasks:**

- Decide whether the site is:
  - purely static, or
  - static site plus one serverless contact endpoint.
- Align Astro output with that decision.
- Keep Cloudflare configuration minimal.
- Ensure build output matches the actual deployment target.

**Recommended direction:**

- If the site is brochure-only, keep static output and deploy to Cloudflare Pages.
- If one endpoint is required, isolate that endpoint in a Worker instead of turning the whole site into an SSR app.

**Acceptance criteria:**

- Build and deploy behavior are easy to explain in one sentence.
- There is no unnecessary adapter/output mismatch.

---

### Phase G. Remove Dead Code and Duplicates

**Goal:** Reduce maintenance risk.

**Tasks:**

- Remove or refactor the legacy exports in `src/data/content.ts` if they are no longer used.
  - `navigation`, `hero`, `services`, `whyUs`, `about`, `contact`, `footer` exports (lines ~334-430)
- Remove duplicated translation data from `Layout.astro`.
- Remove unused helper logic from `src/utils/i18n.ts` if it is not part of the final strategy.
- Clean page-level hardcoded strings that duplicate content data.

**Acceptance criteria:**

- There is no duplicated content structure between layout, pages, and utility helpers.
- The repo has one clear path for content and one clear path for language state.

---

## 5. File-Level Work Queue

### High priority

- `src/data/content.ts` ✅ **COMPLETED** - Restructured with placeholders and SEO metadata
- `src/layouts/Layout.astro` - Add mobile nav, metadata plumbing, i18n support
- `src/pages/index.astro` - Update to use new content structure
- `src/pages/about.astro` - Update to use new content structure
- `src/pages/services.astro` - Update to use new content structure
- `src/pages/contact.astro` - Update to use new content structure, wire form

### Medium priority

- `src/utils/i18n.ts` - Consolidate or remove (verify usage first)
- `astro.config.mjs` - Simplify deployment config
- `README.md` - Document placeholder system and content update process

### Client deliverables needed

- `CONTENT_NEEDED.md` - Checklist of all placeholders requiring client input
- Review and approval of all `[NEEDS CLIENT INPUT]` items in content.ts

### Optional launch assets

- `public/logo.svg` or equivalent logo asset (currently placeholder)
- OG image asset in `public/` (currently configured as `/images/og-default.jpg`)
- Real office photos for about page
- Team photos if applicable

---

## 6. Suggested Task Breakdown for Another Agent

If a second agent is doing the implementation, split the work like this:

1. **Agent A - Content and i18n** ✅ **COMPLETED**
   - Restructured `src/data/content.ts` with placeholders and SEO
   - Created CONTENT_NEEDED.md checklist
   - All content now searchable by placeholder markers

2. **Agent B - Layout and UX**
   - Own `src/layouts/Layout.astro`
   - Add mobile nav
   - Add metadata plumbing (using `seo` object from content.ts)
   - Preserve accessibility and current styling direction
   - Remove hardcoded translations from layout

3. **Agent C - Contact and deployment**
   - Own `src/pages/contact.astro`
   - Own contact backend wiring (Cloudflare Worker + Resend)
   - Align `astro.config.mjs`
   - Prepare deploy notes

**Important coordination rule:**

- The agents must not overwrite each other's file areas blindly.
- If content changes affect layout or contact copy, they should coordinate through `src/data/content.ts` rather than reintroducing hardcoded text.
- **All new text must use placeholder markers:** `[PLACEHOLDER]` or `[NEEDS CLIENT INPUT]`

---

## 7. Validation Checklist

Run these checks after each major phase:

- `npm run check`
- `npm run lint`
- `npm run format`
- `npm run build`

If the environment still throws the same `spawn EPERM` issue, note that explicitly and isolate whether it comes from the current Cloudflare/esbuild setup or the local machine policy.

Also verify manually:

- Home page renders correctly on mobile and desktop.
- English and Malay content both render correctly.
- The active language is reflected in the document `lang`.
- All `[PLACEHOLDER]` and `[NEEDS CLIENT INPUT]` markers are visible for client review.
- SEO meta tags are rendered in page source (check browser dev tools).
- The contact form submits successfully.
- OpenGraph metadata appears in page source.

**Content validation:**

- Search for all `[PLACEHOLDER]` markers and verify they are acceptable temporary content
- Search for all `[NEEDS CLIENT INPUT]` markers and ensure client has been notified
- Verify no hardcoded text exists in `.astro` files (except structural HTML)

---

## 8. Definition of Done

The website is ready to launch when all of the following are true:

- Content is centralized. ✅ **COMPLETED**
- All placeholders are either:
  - Replaced with final content, OR
  - Marked as acceptable to launch with `[PLACEHOLDER]`
- All `[NEEDS CLIENT INPUT]` items have been reviewed and approved by client
- i18n is consistent and server-rendered.
- Navigation works on mobile.
- SEO metadata exists and is optimized (descriptions reviewed, keywords approved).
- Search-facing metadata is unique per page and aligned with the active language.
- The contact form sends real submissions.
- Deployment config is simple and documented.
- The project passes linting, formatting, and build checks in a working environment.

---

## 9. Non-Goals

This plan does not require:

- Rebuilding the site into a heavy framework.
- Adding unnecessary client-side interactivity.
- Introducing database storage for contact submissions.
- Expanding the site beyond the current 4-page scope unless the business explicitly asks for it.
- **Do not remove placeholder markers until content is finalized** - they serve as audit trail

---

## 10. Recommended Next Move

**Phase A is complete.** Content structure now supports placeholders and SEO metadata.

**Next steps:**

1. **Share CONTENT_NEEDED.md with client** - Get approval on all `[NEEDS CLIENT INPUT]` items
2. **Proceed with Phase B** (i18n implementation) - Route-based language switching
3. **Phase C** (Layout/Navigation) - Mobile nav, metadata plumbing
4. **Phase D** (SEO) - Implement meta tags using `seo` object from content.ts
5. **Phase E** (Contact form) - Cloudflare Worker + Resend setup
6. **Phase F** (Deployment) - Simplify config
7. **Phase G** (Cleanup) - Remove legacy exports once pages updated

**Before proceeding, ensure:**

- Client has received and reviewed CONTENT_NEEDED.md
- Any urgent `[NEEDS CLIENT INPUT]` items are prioritized
- Team understands the placeholder system: `[PLACEHOLDER]` = OK to launch, `[NEEDS CLIENT INPUT]` = must verify

---

## 11. Placeholder System Reference

**Two types of markers used:**

### `[PLACEHOLDER]`

- **Meaning:** Temporary content that is realistic and acceptable for launch
- **Examples:** Generic service descriptions, standard business values, standard CTA text
- **Action:** Can launch with these, should be refined before major marketing push
- **Location:** Services descriptions, whyUs items, hero subtitle, CTAs

### `[NEEDS CLIENT INPUT]`

- **Meaning:** Content requiring specific client approval or information
- **Examples:** Company founding story, specific statistics, contact details, office address, social media links
- **Action:** Must get client approval before launch
- **Location:** About story, siteConfig (address, social), SEO descriptions, contact info

**How to find all placeholders:**

```bash
# Search for all markers in content.ts
grep -E '\[PLACEHOLDER|NEEDS CLIENT INPUT\]' src/data/content.ts

# Count how many of each
grep -o '\[PLACEHOLDER\]' src/data/content.ts | wc -l
grep -o '\[NEEDS CLIENT INPUT\]' src/data/content.ts | wc -l
```

**Update process:**

1. Client reviews CONTENT_NEEDED.md
2. Replace `[NEEDS CLIENT INPUT]` with approved text
3. Optionally replace `[PLACEHOLDER]` with refined text
4. Run validation checks
5. Remove marker comments if desired (keep markers for version control history)

(End of file)
