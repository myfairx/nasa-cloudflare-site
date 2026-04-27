# NS Land Consultant - Website Fix Plan

**Status:** Ready for implementation  
**Scope:** Fix strategy, architecture, content ownership, i18n, SEO, contact flow, and launch readiness  
**Primary rule:** All copy changes must live in `src/data/content.ts` unless a file is explicitly a shared system layer such as layout metadata or route config.

---

## 1. Current Assessment

The site has a solid starting point for a 4-page corporate brochure site, but the current implementation is still a prototype in a few critical areas:

- Content is split across multiple files instead of being centralized.
- Multilingual support is mixed between server-rendered routes and client-side text swapping.
- The layout is missing mobile navigation.
- SEO fundamentals are incomplete.
- The contact form is not wired to a backend.
- The deployment config is more complex than needed for a mostly static site.

The result is a site that looks close to launch-ready visually, but is not yet reliable as a production business website.

---

## 2. Target Strategy

The recommended end state is:

1. **Single source of truth for content**
   - Keep all company copy, page copy, labels, and translation strings in `src/data/content.ts`.
   - Remove hardcoded marketing text from `.astro` pages where practical.

2. **Server-rendered language output**
   - Use separate locale routes or a consistent language rendering strategy.
   - Set `<html lang>` correctly on first render.
   - Use client-side language toggling only as a convenience layer, not the source of truth.

3. **Static-first architecture**
   - Keep the site static unless a specific page truly needs SSR.
   - Use Cloudflare Worker only for the contact form submission path.

4. **Launch-ready marketing site**
   - Add mobile navigation.
   - Add OpenGraph and canonical metadata.
   - Add a real contact submission flow.
   - Remove dead code and duplicated helpers.

---

## 3. Priority Order

Work should be done in this order:

1. Fix architecture decisions that affect all pages.
2. Fix content ownership and i18n structure.
3. Add SEO and navigation essentials.
4. Wire up the contact form.
5. Clean up deployment and validation.
6. Run final checks and verify the build.

This order matters because content and route strategy changes will affect every downstream page and component.

---

## 4. Implementation Plan

### Phase A. Consolidate Content Ownership

**Goal:** Make `src/data/content.ts` the authoritative content source.

Tasks:

- Move all remaining page copy from `src/pages/*.astro` into `src/data/content.ts`.
- Keep page templates thin and data-driven.
- Remove duplicated English/Malay strings from `Layout.astro`.
- Decide whether all strings should be stored in one object per language, or in page-specific sections grouped by page.

Recommended shape:

- `siteConfig`
- `translations.ms`
- `translations.en`
- Inside each language:
  - `nav`
  - `hero`
  - `services`
  - `whyUs`
  - `about`
  - `contact`
  - `footer`
  - `seo`

Acceptance criteria:

- No marketing copy remains hardcoded in page files unless it is structural HTML or icon markup.
- Adding or changing copy requires editing `src/data/content.ts` only.
- `Layout.astro` no longer contains its own translation table.

---

### Phase B. Rebuild i18n Strategy

**Goal:** Make multilingual behavior predictable, SEO-safe, and maintainable.

Current problem:

- `Layout.astro` initializes the page as `ms` unconditionally.
- Client-side JavaScript swaps text after load.
- Separate pages already attempt to use `lang` props and static paths.
- `src/utils/i18n.ts` is currently unused and duplicates behavior.

Recommended approach:

Option 1, preferred:
- Use route-based locale rendering.
- Keep a Malay default route.
- Add English routes explicitly.
- Render the correct language server-side for each page.

Option 2, fallback:
- Keep one route set, but still render the correct initial language server-side and use the client toggle only for preference persistence.

Tasks:

- Decide one language architecture and remove the other.
- Use the `lang` prop in `Layout.astro` to set `<html lang={lang}>`.
- Set the page description and title from the active language.
- Move browser language detection and localStorage handling into a single utility.
- Either delete `src/utils/i18n.ts` if unused, or make it the only shared i18n helper.

Acceptance criteria:

- The initial HTML language matches the rendered content.
- No JavaScript is required to see the correct language.
- The language toggle persists preference without causing text drift.
- There is only one i18n implementation path.

---

### Phase C. Clean Up Layout and Navigation

**Goal:** Make the shared layout production-ready.

Tasks:

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

Acceptance criteria:

- Header works well on small screens.
- Nav remains accessible without client-side breakage.
- Layout is no longer hardcoded to Malay.

---

### Phase D. Add SEO and Social Metadata

**Goal:** Make the site easy to crawl, easy to share, and consistent in search results.

Tasks:

- Add OpenGraph tags for every public page.
- Add Twitter card metadata.
- Add canonical URL support.
- Add page-specific descriptions and titles from shared content.
- Add `meta name="theme-color"` if the design system benefits from it.
- Add robots directives only if needed.
- Add structured data where appropriate for a local business.
- Ensure the homepage, About, Services, and Contact pages each have unique SEO copy.
- Ensure language metadata matches the rendered language.
- Decide whether to generate `sitemap.xml` and `robots.txt`.

Suggested metadata per page:

- Home
- About
- Services
- Contact

Suggested SEO extras:

- Local business schema
- `og:image` / social share image
- `twitter:image`
- canonical self-references
- indexable language-specific routes if multilingual SEO is required later

Acceptance criteria:

- Each page has a meaningful title, description, and canonical URL.
- Social previews are no longer blank or generic.
- Metadata comes from data, not repeated hardcoded values.
- Search engines can distinguish the site’s language and primary business location.
- Any structured data passes basic validation in browser/source inspection.

---

### Phase E. Fix the Contact Form Flow

**Goal:** Turn the contact page into an actual lead capture path.

Recommended backend:

- Cloudflare Worker for submission handling.
- Resend for email delivery.
- Optional Turnstile verification for spam protection.

Tasks:

- Add a backend endpoint for form submission.
- Add validation for required fields.
- Add spam protection.
- Add success and error states in the UI.
- Reset the form after successful submit.
- Provide a fallback mailto link or direct contact info if submission fails.

Implementation notes:

- Do not leave the form as a static HTML form with no action.
- Keep secrets out of frontend code.
- Store public configuration in `src/data/content.ts` only if it is not sensitive.
- Sensitive keys must live in platform secrets.

Acceptance criteria:

- A submitted form actually reaches the business inbox.
- Users receive clear success or error feedback.
- Spam protection is enforced.
- The contact page still works if JavaScript fails partially, or at least degrades clearly.

---

### Phase F. Simplify Astro and Deployment Configuration

**Goal:** Remove unnecessary complexity and make the deployment model obvious.

Current concern:

- `astro.config.mjs` uses a Cloudflare adapter only in production but still sets static output.
- That makes the environment model harder to reason about than necessary.

Tasks:

- Decide whether the site is:
  - purely static, or
  - static site plus one serverless contact endpoint.
- Align Astro output with that decision.
- Keep Cloudflare configuration minimal.
- Ensure build output matches the actual deployment target.

Recommended direction:

- If the site is brochure-only, keep static output and deploy to Cloudflare Pages.
- If one endpoint is required, isolate that endpoint in a Worker instead of turning the whole site into an SSR app.

Acceptance criteria:

- Build and deploy behavior are easy to explain in one sentence.
- There is no unnecessary adapter/output mismatch.

---

### Phase G. Remove Dead Code and Duplicates

**Goal:** Reduce maintenance risk.

Tasks:

- Remove or refactor the legacy exports in `src/data/content.ts` if they are no longer used.
- Remove duplicated translation data from `Layout.astro`.
- Remove unused helper logic from `src/utils/i18n.ts` if it is not part of the final strategy.
- Clean page-level hardcoded strings that duplicate content data.

Acceptance criteria:

- There is no duplicated content structure between layout, pages, and utility helpers.
- The repo has one clear path for content and one clear path for language state.

---

## 5. File-Level Work Queue

### High priority

- `src/data/content.ts`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/services.astro`
- `src/pages/contact.astro`

### Medium priority

- `src/utils/i18n.ts`
- `astro.config.mjs`
- `README.md`

### Optional launch assets

- `public/logo.svg` or equivalent logo asset
- OG image asset in `public/`

---

## 6. Suggested Task Breakdown for Another Agent

If a second agent is doing the implementation, split the work like this:

1. **Agent A - Content and i18n**
   - Own `src/data/content.ts`
   - Remove duplicate translation data from `Layout.astro`
   - Make page rendering respect active language

2. **Agent B - Layout and UX**
   - Own `src/layouts/Layout.astro`
   - Add mobile nav
   - Add metadata plumbing
   - Preserve accessibility and current styling direction

3. **Agent C - Contact and deployment**
   - Own `src/pages/contact.astro`
   - Own contact backend wiring
   - Align `astro.config.mjs`
   - Prepare deploy notes

Important coordination rule:

- The agents must not overwrite each other’s file areas blindly.
- If content changes affect layout or contact copy, they should coordinate through `src/data/content.ts` rather than reintroducing hardcoded text.

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
- The contact form submits successfully.
- OpenGraph metadata appears in page source.

---

## 8. Definition of Done

The website is ready to launch when all of the following are true:

- Content is centralized.
- i18n is consistent and server-rendered.
- Navigation works on mobile.
- SEO metadata exists.
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

---

## 10. Recommended Next Move

Implement in this order:

1. Consolidate content and i18n.
2. Fix the shared layout.
3. Add mobile nav and metadata.
4. Wire the contact form.
5. Simplify deployment.
6. Re-run checks and review the build output.
