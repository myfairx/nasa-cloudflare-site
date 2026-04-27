# NS Land Consultant - UI/UX Plan

**Status:** Ready for implementation  
**Last Updated:** 2026-04-27  
**Purpose:** Modern, mobile-first UI/UX strategy for NS Land Consultant website

---

## Overview

This document outlines the UI/UX improvements needed to transform the current prototype into a professional, mobile-first land consultancy website. All designs prioritize **mobile experience** while maintaining desktop quality.

**Key Principles:**

- Mobile-first design (60%+ traffic will be mobile)
- Progressive disclosure (show less initially, expand on interaction)
- Professional, trustworthy aesthetic
- Fast loading (lightweight assets)
- Accessible (WCAG 2.1 AA compliant)

---

## 1. Global Components

### 1.1 Mobile Navigation (Hamburger Menu) ⭐ CRITICAL

**Current Problem:** Navigation disappears on mobile

**Solution:**

- Fixed header with logo left, hamburger menu right
- Slide-in drawer from right (300px width)
- Backdrop blur when open
- Smooth animation (300ms ease-out)
- Language toggle inside drawer
- Close on backdrop tap or swipe right

**Mobile Navigation Structure:**

```
┌─────────────────────────────────┐
│ Logo              ☰ ≡          │  ← Fixed header (h=64px)
├─────────────────────────────────┤
│                                 │
│   ┌──────────────────────┐      │  ← Slide-in drawer
│   │ ✕ Close              │      │
│   ├──────────────────────┤      │
│   │ Laman Utama          │      │
│   │ Tentang Kami         │      │
│   │ Perkhidmatan ▼       │      │  ← Expandable services
│   │   - Perundingan      │      │
│   │   - Pengurusan...    │      │
│   │ Hubungi              │      │
│   ├──────────────────────┤      │
│   │ [EN] Tukar Bahasa    │      │  ← Language toggle
│   └──────────────────────┘      │
│                                 │
└─────────────────────────────────┘
```

**Animation Specs:**

- Drawer slide: `transform: translateX(0)` from `translateX(100%)`
- Backdrop: `opacity: 0` → `opacity: 1` (black 50%)
- Menu icon: Morph to X (or keep simple toggle)
- Duration: 300ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Breakpoints:**

- Mobile: < 768px (show hamburger)
- Tablet/Desktop: ≥ 768px (show full nav)

---

### 1.2 Hero Section Background

**Current:** Plain gradient background

**Proposed:**

- Subtle background image with dark gradient overlay
- Gradient: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))`
- Image fallback: Clean gradient if no image available
- Text: White for contrast
- Mobile: Slightly stronger overlay (0.8 opacity) for readability

**Hero Layout (Mobile):**

```
┌─────────────────────────────┐
│ [Background Image + Dark     │
│  Gradient Overlay]           │
│                              │
│   Company Logo               │
│   (if available)            │
│                              │
│   Rakan Perunding           │
│   Tanah Yang Dipercayai     │
│   (h1, 28-32px)             │
│                              │
│   Panduan pakar untuk...    │
│   (subtitle, 16-18px)       │
│                              │
│   [ Hubungi Kami ]          │
│   (full width, h=48px)      │
│                              │
└─────────────────────────────┘
```

**Image Requirements:**

- Desktop: 1920x1080px
- Mobile: 768x1024px (portrait-friendly)
- Format: WebP with JPG fallback
- Size: < 200KB (optimized)
- Subject: Malaysian property/landscape

---

### 1.3 Scroll Animations (Keep Current)

**Current:** Fade-in on scroll
**Keep:** Yes, this works well
**Enhancement:** Add subtle translateY (20px → 0)

**Specs:**

- Trigger: 10% visibility
- Duration: 600ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Stagger: 100ms between items

---

## 2. Homepage Sections

### 2.1 Hero Section

**Mobile Priority:** ⭐ CRITICAL

**Layout:**

- Full viewport height (100vh)
- Content vertically centered
- Text center-aligned
- CTA button: Full width, rounded-lg

**Typography (Mobile):**

- H1: 28-32px, bold, white
- Subtitle: 16-18px, white/gray-100
- CTA: 16px, semibold, white bg, primary text

**Enhancement - Trust Indicators:**
Add below CTA (optional):

```
"500+ Transaksi Berjaya | 15+ Tahun Pengalaman"
(small text, white/70)
```

---

### 2.2 Services Preview (Homepage)

**Current:** 3 cards in grid
**Problem:** On mobile, cards are small, descriptions cut off

**Proposed Solution:**

- Desktop: Keep 3-column grid
- Mobile: Horizontal scroll or stacked cards

**Option A: Horizontal Scroll (Recommended)**

```
┌─────────────────────────────────────┐
│ Perkhidmatan Kami                   │
│ Panduan pakar...                    │
│                                     │
│ ┌──────┬──────┬──────┐             │
│ │Card 1│Card 2│Card 3│ →  [swipe]   │
│ └──────┴──────┴──────┘             │
│                                     │
│        [Lihat semua →]              │
└─────────────────────────────────────┘
```

**Card Specs (Mobile):**

- Width: 280px (fixed)
- Height: Auto (content-driven)
- Margin-right: 16px
- Snap scrolling: `scroll-snap-type: x mandatory`

**Option B: Stacked Cards**

- Full width cards
- Icon + title + 2-line description
- Vertical stack with 16px gap

---

### 2.3 Why Choose Us

**Current:** 3 cards in grid
**Keep:** Simple 3-column layout (works on mobile if cards stack)

**Mobile Enhancement:**

- Full width cards
- Icon above title (centered)
- More padding for touch targets
- Stagger animation on scroll

---

## 3. Services Page - Major Redesign ⭐ CRITICAL

### 3.1 Current Problem

- 10 services in 3-column grid
- On mobile: Very long scroll, small text
- No hierarchy or grouping
- All services appear equal

### 3.2 Proposed Solution: Category-Based with Expandable Accordion

**Service Categories:**

```
Category A: Perundingan & Khidmat Nasihat (3 services)
├── Perundingan Hartanah & Tanah
├── Pengurusan Jual Beli Tanah
└── Khidmat Nasihat Pembangunan Tanah

Category B: Pengurusan & Pentadbiran (4 services)
├── Pengurusan Tanah Pusaka
├── Semakan & Due Diligence Tanah
├── Tukar Syarat Tanah & Pecah Lot
└── Pengurusan Dokumentasi & Sokongan Legal

Category C: Pemasaran & Sokongan Pelanggan (3 services)
├── Pemasaran & Listing Tanah
├── Pengurusan Pelanggan
└── Khidmat Perundingan Khas
```

### 3.3 Mobile Layout - Accordion

```
┌─────────────────────────────────┐
│ Perkhidmatan Kami               │
│ ━━━━━━━━━━━━━━                  │
│                                 │
│ ┌───────────────────────────┐   │
│ │ 📋 Perundingan &          │   │
│ │    Khidmat Nasihat   [▼]  │   │  ← Category card
│ └───────────────────────────┘   │
│                                 │
│ ┌───────────────────────────┐   │
│ │ 📋 Pengurusan &           │   │
│ │    Pentadbiran       [▼]  │   │  ← Collapsed
│ └───────────────────────────┘   │
│                                 │
│ ┌───────────────────────────┐   │
│ │ 📋 Pemasaran &            │   │
│ │    Sokongan          [▲]  │   │  ← Expanded
│ ├───────────────────────────┤   │
│ │                             │   │
│ │ ① Perundingan Hartanah     │   │
│ │    Nasihat jual beli...    │   │  ← Service item
│ │    [Butiran →]             │   │
│ │                             │   │
│ │ ② Pengurusan Jual Beli     │   │
│ │    Urusan pemasaran...     │   │
│ │    [Butiran →]             │   │
│ │                             │   │
│ └───────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

### 3.4 Desktop Layout - Tabs or Sticky Sidebar

**Option A: Tab Navigation (Recommended)**

```
┌─────────────────────────────────────────────────┐
│                                                 │
│ [Tab 1] [Tab 2] [Tab 3]                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                 │
│ ┌─────────────────┐ ┌─────────────────┐        │
│ │  Service Card   │ │  Service Card   │        │
│ │                 │ │                 │        │
│ └─────────────────┘ └─────────────────┘        │
│                                                 │
│ ┌─────────────────┐ ┌─────────────────┐        │
│ │  Service Card   │ │  Service Card   │        │
│ └─────────────────┘ └─────────────────┘        │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Option B: Sticky Category Sidebar**

```
┌─────────────────────────────────────────────────┐
│                                                 │
│ ┌──────────┐ ┌───────────────────────────────┐ │
│ │Category 1│ │                                 │ │
│ │Category 2│ │   Service cards grid           │ │
│ │Category 3│ │   (updates on click)           │ │
│ │Category 4│ │                                 │ │
│ └──────────┘ └───────────────────────────────┘ │
│          ↑                                      │
│     sticky on scroll                            │
└─────────────────────────────────────────────────┘
```

### 3.5 Service Card Design

**Mobile Card:**

```
┌─────────────────────────────┐
│ [Icon]                      │
│                             │
│ Title (18px, semibold)      │
│                             │
│ 2-line description...     │
│ (14px, text-gray-600)       │
│                             │
│ [Butiran →]                 │
└─────────────────────────────┘
```

**Desktop Card:**

```
┌─────────────────────────────┐
│ ┌────────┐                  │
│ │  Icon  │  Title           │
│ └────────┘  Description...   │
│            [Learn More →]   │
└─────────────────────────────┘
```

### 3.6 Service Detail Modal/Page

**Option A: Expandable Card (Mobile)**

- Tap "Butiran" expands card inline
- Shows full description + contact CTA

**Option B: Full Detail Page**

- Separate route: `/services/[service-id]`
- Better for SEO
- Can add more content (process, FAQ, etc.)

**Recommendation:** Start with Option A (accordion), upgrade to Option B later if needed.

---

## 4. About Page

### 4.1 Current State

- Text story + values list
- Plain, text-heavy

### 4.2 Proposed Enhancements

**Add Visual Elements:**

```
┌─────────────────────────────────┐
│ Tentang NS Land Consultant      │
│ ━━━━━━━━━━━━━━━━━━━━━━        │
│                                 │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ │    [Team/Office Photo]     │ │  ← Large image
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│ Company story text...           │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📊 Stats Row               │ │  ← Trust indicators
│ │ ┌────┐ ┌────┐ ┌────┐       │ │
│ │ │500+│ │15+ │ │100%│       │ │
│ │ │Proj│ │Year│ │Rate│       │ │
│ │ └────┘ └────┘ └────┘       │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Values                      │ │
│ │ • Integriti...              │ │
│ │ • Kecemerlangan...          │ │
│ └─────────────────────────────┘ │
│                                 │
└─────────────────────────────────┘
```

**Mobile Layout:**

- Single column, full width
- Image: 16:9 aspect ratio, rounded-xl
- Stats: 3-column grid (small cards)
- Values: Full width cards with icons

---

## 5. Contact Page

### 5.1 Current Layout

- 2-column grid
- Form left, contact info right

### 5.2 Mobile Optimization

**Mobile Layout (Stacked):**

```
┌─────────────────────────────────┐
│ Hubungi Kami                    │
│ ━━━━━━━━━━━━━━                  │
│                                 │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ │  [Contact Form]            │ │  ← Full width
│ │                             │ │
│ │  Nama: [________]          │ │
│ │  Emel: [________]          │ │
│ │  Tel:  [________]          │ │
│ │  Mesej: [        ]         │ │
│ │          [        ]        │ │
│ │                             │ │
│ │  [ Hantar Mesej ]          │ │  ← Full width button
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│ Atau hubungi kami:              │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📍 Alamat                   │ │  ← Compact info cards
│ │    [Office Address]        │ │
│ ├─────────────────────────────┤ │
│ │ 📧 Emel                     │ │
│ │    info@...                │ │
│ ├─────────────────────────────┤ │
│ │ 📞 Telefon                  │ │
│ │    +60 12-345 6789         │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 🕐 Waktu Operasi           │ │  ← NEW: Business hours
│ │ Isnin - Jumaat: 9am-6pm    │ │
│ │ Sabtu: 9am - 1pm           │ │
│ └─────────────────────────────┘ │
│                                 │
└─────────────────────────────────┘
```

**Enhancements:**

- Form first (primary action)
- Contact cards with icons
- Add business hours section
- WhatsApp quick action button (floating?)
- Map embed (optional)

---

## 6. Footer

### 6.1 Current State

- 3-column grid
- Desktop layout doesn't work well on mobile

### 6.2 Mobile Footer

```
┌─────────────────────────────────┐
│                                 │
│   [Logo]                        │
│   Company tagline...            │
│                                 │
│   📍 Alamat                     │
│   📧 emel@...                   │
│   📞 +60 12...                  │
│                                 │
│   [FB] [IG] [LinkedIn]         │  ← Social icons
│                                 │
│   Pautan Pantas                 │
│   • Laman Utama                 │
│   • Tentang Kami                │
│   • Perkhidmatan                │
│   • Hubungi                     │
│                                 │
│   ─────────────────────────     │
│   © 2026 NS Land Consultant     │
│                                 │
└─────────────────────────────────┘
```

**Enhancements:**

- Stacked layout on mobile
- Social media icons row
- Collapsible quick links (optional)
- Back to top button (sticky?)

---

## 7. Component Specifications

### 7.1 Spacing System

**Mobile:**

- Section padding: `py-12` (48px)
- Card padding: `p-6` (24px)
- Gap between cards: `gap-4` (16px)
- Horizontal padding: `px-4` (16px)

**Desktop:**

- Section padding: `py-20` (80px)
- Card padding: `p-8` (32px)
- Gap between cards: `gap-8` (32px)
- Horizontal padding: `px-8` (32px)

### 7.2 Typography Scale

**Mobile:**

- H1: 28-32px (hero), 24-28px (page titles)
- H2: 22-24px (section titles)
- H3: 18-20px (card titles)
- Body: 16px
- Small: 14px

**Desktop:**

- H1: 40-48px
- H2: 32-36px
- H3: 20-24px
- Body: 16-18px
- Small: 14px

### 7.3 Color System

**Primary:** Brand color (blue/indigo)

- Primary-600: #2563eb (buttons, links)
- Primary-100: #dbeafe (backgrounds)

**Neutral:**

- Gray-900: #111827 (headings)
- Gray-600: #4b5563 (body)
- Gray-400: #9ca3af (secondary)
- White: #ffffff (backgrounds)

**Semantic:**

- Success: Green (form success)
- Error: Red (form errors)
- Warning: Yellow (cautions)

### 7.4 Border Radius

- Cards: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px) or `rounded-full` (pill)
- Images: `rounded-xl` (12px) or `rounded-2xl` (16px)
- Inputs: `rounded-lg` (8px)

---

## 8. Mobile-First Breakpoints

```css
/* Mobile First Approach */

/* Base styles (Mobile) */
/* 0px - 639px */

/* Tablet */
@media (min-width: 640px) {
  /* sm */
}
@media (min-width: 768px) {
  /* md */
}

/* Desktop */
@media (min-width: 1024px) {
  /* lg */
}
@media (min-width: 1280px) {
  /* xl */
}
```

**Key Breakpoints:**

- **Mobile:** < 768px (single column, full width)
- **Tablet:** 768px - 1023px (2 columns possible)
- **Desktop:** ≥ 1024px (full layout)

---

## 9. Animation & Interaction

### 9.1 Micro-interactions

**Buttons:**

- Hover: `transform: scale(1.02)` + shadow increase
- Active: `transform: scale(0.98)`
- Duration: 150ms

**Cards:**

- Hover: `translateY(-4px)` + shadow-lg
- Duration: 300ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Links:**

- Underline animation from left to right
- Color transition: 200ms

### 9.2 Loading States

**Skeleton Screens:**

- For services, about page
- Pulse animation on gray blocks

**Form Submission:**

- Button shows spinner
- Success: Green checkmark
- Error: Red message below form

### 9.3 Scroll Behavior

**Smooth Scroll:**

- Navigation links scroll smoothly to sections
- Back to top button

**Sticky Header:**

- Header becomes sticky on scroll down
- Add shadow when scrolled
- Optional: Hide on scroll down, show on scroll up

---

## 10. Accessibility Requirements

### 10.1 Focus States

- All interactive elements have visible focus ring
- Focus ring: `ring-2 ring-primary-500 ring-offset-2`
- Skip to content link (for keyboard users)

### 10.2 Touch Targets

- Minimum size: 44x44px
- Spacing between touch targets: 8px minimum
- All buttons and links meet this

### 10.3 Text Contrast

- Normal text: 4.5:1 ratio minimum
- Large text: 3:1 ratio minimum
- Use contrast checker tool

### 10.4 Screen Reader Support

- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images
- ARIA labels for icons
- Skip navigation link

---

## 11. Implementation Priority

### Phase 1: Core Structure ⭐ CRITICAL

1. Mobile navigation (hamburger menu)
2. Services page redesign (category accordion)
3. Contact page mobile layout
4. Footer responsive layout

### Phase 2: Visual Polish

5. Hero background image support
6. Service card enhancements
7. About page stats/trust indicators
8. Scroll animations refinement

### Phase 3: Enhancements

9. Loading states
10. Form validation UI
11. Social media integration
12. SEO image optimizations

---

## 12. Design Decisions Log

| Decision                    | Status      | Notes                     |
| --------------------------- | ----------- | ------------------------- |
| Hamburger menu (right side) | ✅ Approved | Standard mobile pattern   |
| Accordion for services      | ✅ Approved | Progressive disclosure    |
| 3 service categories        | ✅ Approved | Logical grouping          |
| Full-width mobile buttons   | ✅ Approved | Better touch targets      |
| Stacked contact layout      | ✅ Approved | Form first priority       |
| Horizontal scroll (home)    | 🤔 Optional | Consider stacked cards    |
| Tab navigation (desktop)    | 🤔 Optional | Could use sidebar instead |

---

## 13. Files to Modify

| File                       | Changes                                       |
| -------------------------- | --------------------------------------------- |
| `src/layouts/Layout.astro` | Add hamburger menu, mobile navigation         |
| `src/pages/services.astro` | Complete redesign with categories + accordion |
| `src/pages/contact.astro`  | Stack form + info on mobile                   |
| `src/pages/about.astro`    | Add stats, improve layout                     |
| `src/pages/index.astro`    | Hero background, service cards mobile         |
| `src/data/content.ts`      | Add service categories                        |

---

## 14. Success Metrics

After implementation:

- ✅ Mobile navigation works smoothly
- ✅ Services page fits on screen without excessive scroll
- ✅ All touch targets ≥ 44px
- ✅ Text readable on small screens (no zoom needed)
- ✅ Page loads in < 3s on 3G
- ✅ Passes Google Mobile-Friendly Test
- ✅ Accessibility score > 90 (Lighthouse)

---

## 15. Promotional Modal (Promo Popup)

### 15.1 Overview

**Purpose:** Display promotional images on homepage to announce offers, new services, or important updates.

**Behavior:**

- ✅ Shows only on homepage
- ✅ Triggers after 2 second delay
- ✅ Shows once per visitor per day
- ✅ Auto-rotates if multiple images
- ✅ Easy to close (X, backdrop, ESC)

---

### 15.2 Functional Requirements

**Trigger Rules:**

```
1. Page: Homepage only (/ or /index)
2. Delay: 2000ms (2 seconds)
3. Frequency: Once per day per visitor
4. Storage: localStorage (promo_last_shown + promo_date)
5. Respect: Do not show if user closed it today
```

**Display Logic:**

```typescript
// Pseudo-code
if (page === 'home' &&
    !isMobileMenuOpen &&
    timeOnPage > 2000ms) {

  const lastShown = localStorage.getItem('promo_last_shown');
  const today = new Date().toDateString();

  if (lastShown !== today) {
    showModal();
    localStorage.setItem('promo_last_shown', today);
  }
}
```

---

### 15.3 Layout Specifications

**Desktop Modal:**

```
┌─────────────────────────────────────────┐
│                                         │
│      ┌─────────────────────────────┐    │
│      │                      ✕    │    │
│      │  ┌───────────────────┐     │    │
│      │  │                   │     │    │
│      │  │   Promo Image     │     │    │
│      │  │   (aspect ratio   │     │    │
│      │  │    preserved)     │     │    │
│      │  │                   │     │    │
│      │  └───────────────────┘     │    │
│      │                             │    │
│      │  [Optional: Dots indicator]│    │
│      └─────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
     ↑ Backdrop: rgba(0,0,0,0.6)
```

**Mobile Modal:**

```
┌─────────────────────────────────┐
│                                 │
│    ┌───────────────────────┐    │
│    │                  ✕    │    │
│    │  ┌───────────────┐   │    │
│    │  │               │   │    │
│    │  │ Promo Image   │   │    │
│    │  │ (full width)  │   │    │
│    │  │               │   │    │
│    │  └───────────────┘   │    │
│    │                       │    │
│    │  ● ○ (dots)          │    │
│    └───────────────────────┘    │
│                                 │
└─────────────────────────────────┘
```

**Dimensions:**

- **Desktop:** Max 600px width, auto height
- **Mobile:** 92% viewport width, max 90% viewport height
- **Padding:** 0 (image bleeds to edge), close button outside
- **Border radius:** rounded-2xl (16px)

---

### 15.4 Image Specifications

**Image Storage:** `/public/promos/`

**Naming Convention:**

```
/promos/promo-1.jpg (current promotion)
/promos/promo-2.jpg (optional second)
```

**Supported Aspect Ratios:**

- **1:1** (Square) - 600x600px
- **2:3** (Portrait) - 400x600px
- **3:2** (Landscape) - 600x400px
- **16:9** (Wide) - 600x338px

**Technical Specs:**

- **Format:** JPG or WebP
- **Max size:** 200KB per image
- **Quality:** 85%
- **Background:** Can be transparent PNG (if graphic design)

**Responsive Behavior:**

```css
.promo-image {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
}
```

---

### 15.5 Auto-Rotate (Multiple Images)

**If 2+ images configured:**

```
Settings:
├── Rotation: Every 5 seconds
├── Transition: Fade (400ms ease)
├── Indicators: Dots at bottom
├── Pause on hover: Yes
└── Loop: Infinite
```

**User Controls:**

- Tap/swipe to navigate
- Dots indicate current position
- Auto-pause when user interacts

**Desktop:** Arrow buttons on sides (optional)
**Mobile:** Swipe gestures + dots

---

### 15.6 Close Mechanisms

**Three ways to close:**

1. **X Button** (top right)
   - Size: 44x44px (touch target)
   - Icon: ✕ or close icon
   - Position: Absolute, top-right corner

2. **Backdrop Click**
   - Click outside modal content
   - Entire backdrop area (not just edges)

3. **ESC Key**
   - Keyboard accessibility
   - Event listener on document

**Animation:**

- Duration: 300ms
- Effect: Scale down (1 → 0.95) + opacity (1 → 0)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

---

### 15.7 Data Structure

**Add to `src/data/content.ts`:**

```typescript
export const promotions = {
  // Toggle entire promo system
  enabled: true,

  // Show on homepage only
  showOn: ['home'], // ['home', 'services', 'about', 'contact']

  // Display settings
  settings: {
    delay: 2000, // milliseconds before showing
    oncePerDay: true, // true = once per day, false = once per session
    storageKey: 'nslc-promo', // localStorage key
    expiryDays: 30, // How long to remember close action
  },

  // Images array (1 or 2 images)
  images: [
    {
      src: '/promos/promo-1.jpg',
      alt: {
        ms: 'Promosi perundingan tanah - diskaun 20%',
        en: 'Land consultancy promotion - 20% discount',
      },
      // Optional: link when clicking image
      link: {
        ms: '/contact',
        en: '/contact',
      },
      // Optional: only show between dates
      startDate: '2026-04-01',
      endDate: '2026-05-31',
    },
    // Second image (optional)
    {
      src: '/promos/promo-2.jpg',
      alt: {
        ms: 'Perkhidmatan baharu - Pengurusan tanah komersial',
        en: 'New service - Commercial land management',
      },
      link: {
        ms: '/services',
        en: '/services',
      },
      startDate: '2026-04-01',
      endDate: '2026-05-31',
    },
  ],

  // Auto-rotation settings (only if 2+ images)
  carousel: {
    enabled: true,
    interval: 5000, // 5 seconds
    transition: 400, // 400ms fade
    showDots: true,
    pauseOnHover: true,
  },
};
```

---

### 15.8 Content.ts Integration

**Add to content.ts structure:**

```typescript
// ============================================================================
// PROMOTIONS
// Promotional images and popup configuration
// [CLIENT ACTION] Upload images to /public/promos/ folder
// [CLIENT ACTION] Update dates when promotions expire
// ============================================================================

export const promotions = {
  enabled: true,
  showOn: ['home'],

  settings: {
    delay: 2000,
    oncePerDay: true,
    storageKey: 'nslc-promo-shown',
    expiryDays: 30,
  },

  images: [
    {
      src: '/promos/promo-1.jpg',
      alt: {
        ms: '[NEEDS CLIENT INPUT] - Promo alt text',
        en: '[NEEDS CLIENT INPUT] - Promo alt text',
      },
      link: '/contact',
      startDate: '2026-04-01',
      endDate: '2026-05-31',
    },
  ],

  carousel: {
    enabled: false, // Set true if 2+ images
    interval: 5000,
    transition: 400,
    showDots: true,
    pauseOnHover: true,
  },
};
```

---

### 15.9 Component Architecture

**New Component: `src/components/PromoModal.astro`**

**Props:**

```typescript
interface Props {
  enabled: boolean;
  images: PromoImage[];
  settings: PromoSettings;
  carousel: CarouselSettings;
}
```

**Features:**

- Client-side only (no SSR needed)
- Lazy load images
- localStorage integration
- Touch/swipe support
- Keyboard navigation

**Logic Flow:**

```
Page Load
    ↓
Check: enabled? → No → Exit
    ↓ Yes
Check: page in showOn? → No → Exit
    ↓ Yes
Wait: delay (2000ms)
    ↓
Check: shown today? → Yes → Exit
    ↓ No
Show Modal
    ↓
Start carousel (if 2+ images)
    ↓
User closes → Save to localStorage
```

---

### 15.10 Mobile Behavior

**Touch Gestures:**

- **Swipe left:** Next image
- **Swipe right:** Previous image
- **Tap backdrop:** Close
- **Tap X:** Close

**Viewport Handling:**

- Prevent body scroll when modal open (optional)
- Ensure modal never exceeds screen
- Safe area padding for notched phones

**Performance:**

- Lazy load images (loading="lazy")
- Use `transform` for animations (GPU accelerated)
- Debounce resize handlers

---

### 15.11 Accessibility

**Required ARIA:**

```html
<div role="dialog" aria-modal="true" aria-label="Promosi">
  <button aria-label="Tutup promosi">✕</button>
  <img alt="Deskripsi promosi" />
  <div role="region" aria-roledescription="carousel" aria-label="Promosi">
    <div aria-live="polite" aria-atomic="true">
      <!-- Current slide announced -->
    </div>
  </div>
</div>
```

**Focus Management:**

- Trap focus inside modal when open
- Return focus to trigger element on close
- ESC key closes modal

**Screen Readers:**

- Announce "Promosi" or "Promotion" when opens
- Read image alt text
- Announce current slide position ("Image 1 of 2")

---

### 15.12 Image Management Guide

**For Client:**

**To Add New Promotion:**

1. Create image (see specs in 15.4)
2. Save to `/public/promos/promo-[number].jpg`
3. Update `content.ts` promotions.images array
4. Set startDate and endDate
5. Update alt text for both languages
6. Test on mobile and desktop

**To Disable:**

```typescript
// In content.ts
promotions: {
  enabled: false, // Set to false
  // ... rest of config
}
```

**To Show Multiple:**
Simply add second image object to images array:

```typescript
images: [
  { src: '/promos/promo-1.jpg', ... },
  { src: '/promos/promo-2.jpg', ... }  // Add this
]
```

---

### 15.13 Files to Create/Modify

| File                              | Action | Description                    |
| --------------------------------- | ------ | ------------------------------ |
| `src/components/PromoModal.astro` | Create | Modal component with all logic |
| `src/data/content.ts`             | Update | Add promotions data structure  |
| `src/pages/index.astro`           | Update | Import and include PromoModal  |
| `/public/promos/`                 | Create | Folder for promo images        |
| `IMAGES_NEEDED.md`                | Update | Add promo image specs          |

---

### 15.14 Testing Checklist

**Functionality:**

- [ ] Shows after 2 second delay
- [ ] Shows only on homepage
- [ ] Shows once per day
- [ ] Closes with X button
- [ ] Closes with backdrop click
- [ ] Closes with ESC key
- [ ] Saves to localStorage
- [ ] Doesn't show again same day

**Multiple Images:**

- [ ] Auto-rotates every 5 seconds
- [ ] Dots indicator works
- [ ] Swipe gestures work (mobile)
- [ ] Fade transition smooth

**Responsive:**

- [ ] Fits mobile screen
- [ ] Fits tablet screen
- [ ] Desktop centered
- [ ] Image maintains aspect ratio
- [ ] Close button easy to tap (44x44px)

**Accessibility:**

- [ ] Screen reader announces dialog
- [ ] Focus trapped inside
- [ ] ESC key works
- [ ] Alt text read correctly

---

## Questions for Discussion

1. **Service categories:** Are the 3 proposed categories logical? Should we reorder?
2. **Desktop services layout:** Tabs vs sticky sidebar - which feels more professional?
3. **Hero image:** Do we have budget for custom photography, or use stock?
4. **Contact form:** Add file upload for documents? (user can attach land docs)
5. **WhatsApp integration:** Add floating WhatsApp button on mobile?
6. **Promo images:** Will client provide 1:1 or 2:3 ratio images? Should we support multiple sizes?

(End of file)
