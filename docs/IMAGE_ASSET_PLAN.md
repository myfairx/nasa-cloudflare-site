# Image Asset Plan

**Project:** NS Land Consultant  
**Scope:** Static website image storage, naming, and deployment policy  
**Status:** Draft for implementation

## 1. Purpose

This document defines how images should be organized for the NS Land Consultant website, where they should live, and how they should be referenced in the codebase.

The goal is to keep image handling simple, predictable, and compatible with Git-based deployment on Cloudflare Pages.

## 2. Recommended Directory Structure

```txt
public/
  images/
    logo/         company logo variants and favicon source assets
    backgrounds/  hero and section background images
    team/         staff and profile photos
    projects/     project showcase images
    icons/        UI and feature icons
    og/           OpenGraph and social preview images
  promos/         homepage promotional modal images
```

### Folder Purpose

- `logo/` for header/footer logo, light/dark variants, and icon-only marks
- `backgrounds/` for hero images and page-section backgrounds
- `team/` for staff photos or company profile imagery
- `projects/` for project showcase visuals
- `icons/` for custom SVGs or small UI graphics
- `og/` for social sharing images such as OpenGraph previews
- `promos/` for temporary homepage promotion images

## 3. Git Storage Policy

### Store in Git

Store optimized web-ready assets in Git when they are part of the site experience and remain reasonably small.

Examples:

- logos
- favicons
- icons
- team photos
- optimized background images
- promo popup images
- OpenGraph preview images

### Avoid Storing in Git

Do not store large source files or heavy asset bundles in Git unless there is a clear reason.

Examples:

- PSD, AI, or layered design files
- uncompressed exports
- large image libraries
- raw photo archives
- frequently changing bulk media

### Practical Rule

- Prefer Git for images that are part of the static website
- Consider external storage only when image volume, file size, or update frequency becomes a problem

## 4. Cloudflare Deployment Policy

This site is a static Astro build, so anything placed in `public/` is copied into the final build output and served through Cloudflare Pages.

That means:

- images in `public/images/` deploy automatically
- images in `public/promos/` deploy automatically
- no extra runtime image service is required for the current site scope

### When Cloudflare Pages Is Enough

Use Cloudflare Pages only when:

- the asset is static
- the file size is reasonable
- the site does not need on-the-fly image transformation

### When to Consider R2 or Another CDN

Move beyond Git + Pages only if:

- the site grows into a large gallery
- project photos become numerous
- assets are updated frequently
- you need image resizing, transformation, or access controls

## 5. Naming Convention

Use descriptive, stable file names.

Good examples:

- `logo.png`
- `logo-white.png`
- `hero-bg.jpg`
- `office-team-01.jpg`
- `project-03.jpg`
- `og-home.jpg`
- `promo-1.jpg`

Avoid:

- `IMG_1234.jpg`
- `final-final.png`
- `banner-new-new.jpg`

## 6. Reference Rules

All image URLs should be root-relative and stored in `src/data/content.ts` where content needs to be configurable.

### Example

```ts
export const content = {
  company: {
    logo: '/images/logo/logo.png',
    logoWhite: '/images/logo/logo-white.png',
  },
  hero: {
    backgroundImage: '/images/backgrounds/hero-bg.jpg',
  },
};
```

### Astro Usage

In `.astro` files, use root-relative paths directly when the image is not content-driven.

```astro
<img src="/images/logo/logo.png" alt="NS Land Consultant logo" />
```

## 7. Optimization Rules

Before adding an image:

1. Resize it to the display size it actually needs.
2. Compress it for web delivery.
3. Choose the correct format.
4. Verify it still looks sharp on retina screens.
5. Keep the filename descriptive.

### Format Guidance

- `JPG` for photos
- `PNG` for transparency
- `SVG` for logos and icons when possible
- `WebP` only if the site is explicitly set up to use it

## 8. Proposed Asset Set for This Site

The current site only needs a small, stable set of assets:

- company logo variants
- favicon assets
- one homepage hero/background image
- optional about-page image
- optional project showcase images
- promo modal images if promotions are enabled
- a small icon set for UI polish

This is enough for the current 4-page corporate website.

## 9. Implementation Order

1. Add logo assets
2. Add favicon variants
3. Add hero/background images
4. Add optional about and project images
5. Add promo images only if the promo modal is being used
6. Reference all URLs from `src/data/content.ts`
7. Verify deployment on Cloudflare Pages

## 10. Decision Summary

- Use `public/` for all static website images
- Commit optimized site images to Git
- Deploy images through Cloudflare Pages with the rest of the site
- Reserve external storage for future growth or heavy media usage
- Keep image paths in `src/data/content.ts` instead of hardcoding content values in page files

