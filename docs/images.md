# Image Handling Guide

## Overview

This document explains how images are organized, stored, and used in the NS Land Consultant website.

---

## Directory Structure

```
public/
├── images/              # Main website images
│   ├── logo/           # Company logos
│   ├── team/           # Team member photos
│   ├── projects/       # Project showcase images
│   ├── icons/          # UI icons
│   └── backgrounds/    # Background images
├── promos/             # Promotional popup images
│   ├── promo-1.jpg
│   └── promo-2.jpg
└── favicon.ico         # Site favicon
```

---

## Image Categories

### 1. Logo Images (`/public/images/logo/`)

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `logo.png` | Main logo (header, footer) | 200x60px |
| `logo-white.png` | White version for dark backgrounds | 200x60px |
| `logo-icon.png` | Icon-only version | 64x64px |

**Usage in content.ts:**
```typescript
export const content = {
  company: {
    logo: '/images/logo/logo.png',
    logoWhite: '/images/logo/logo-white.png',
  }
}
```

---

### 2. Team Photos (`/public/images/team/`)

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `member-1.jpg` | Team member photo | 400x400px |
| `member-2.jpg` | Team member photo | 400x400px |

**Best practices:**
- Use consistent aspect ratio (1:1 square or 3:4 portrait)
- Professional headshots with neutral background
- Web-optimized (under 200KB each)

**Usage:**
```typescript
export const content = {
  team: {
    members: [
      { name: 'John Doe', photo: '/images/team/member-1.jpg' },
    ]
  }
}
```

---

### 3. Project Images (`/public/images/projects/`)

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `project-1.jpg` | Project showcase | 1200x800px |
| `project-2.jpg` | Project showcase | 1200x800px |

**Best practices:**
- High quality but web-optimized
- Landscape orientation preferred
- Descriptive filenames

---

### 4. Background Images (`/public/images/backgrounds/`)

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `hero-bg.jpg` | Homepage hero section | 1920x1080px |
| `about-bg.jpg` | About page background | 1920x1080px |

**Best practices:**
- Compress aggressively (use TinyPNG or similar)
- Consider using CSS gradients as overlays
- Darken images for better text readability

---

### 5. Icons (`/public/images/icons/`)

Store custom SVG icons here. Prefer inline SVGs or icon fonts for UI icons.

---

### 6. Promotional Images (`/public/promos/`)

Used for popup promotions on the homepage.

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `promo-1.jpg` | Single or first promo | 800x600px |
| `promo-2.jpg` | Second promo (enables carousel) | 800x600px |

**Configuration in content.ts:**
```typescript
export const promotions = {
  enabled: true,
  showOn: ['home'],
  images: [
    {
      src: '/promos/promo-1.jpg',
      alt: { ms: 'Promosi 20% diskaun', en: '20% discount promotion' },
      link: '/contact',
      startDate: '2026-04-01',
      endDate: '2026-05-31',
    },
    // Add second image to enable carousel
    {
      src: '/promos/promo-2.jpg',
      alt: { ms: 'Perkhidmatan baharu', en: 'New service' },
      link: '/services',
      startDate: '2026-04-01',
      endDate: '2026-05-31',
    },
  ],
  // Carousel settings (auto-enabled when 2+ images)
  carousel: {
    enabled: false,        // Auto-enabled when 2+ images
    interval: 5000,        // 5 seconds between slides
    transition: 400,       // 400ms fade transition
    showDots: true,        // Show dot indicators
    pauseOnHover: true,    // Pause when user hovers
  },
}
```

**Carousel behavior:**
- Automatically enabled when 2+ images are configured
- Auto-rotates every 5 seconds (configurable)
- Pauses on hover for desktop users
- Shows dot navigation indicators

---

## Git Storage Strategy

### Small Images (< 1MB each)
✅ **Store in Git** - Logos, icons, team photos, small project images

### Large/Many Images
⚠️ **Consider external storage:**
- **Cloudflare R2** (10GB free tier) - Recommended
- **Cloudinary** - Good for dynamic transformations
- **ImageKit** - Fast global CDN

**When to use external storage:**
- Image galleries with 20+ photos
- High-resolution project portfolios
- User-uploaded content

---

## Image Optimization Checklist

Before adding images to the project:

- [ ] **Resized** to appropriate dimensions
- [ ] **Compressed** using TinyPNG, Squoosh, or similar
- [ ] **Named descriptively** (e.g., `hero-bg.jpg` not `IMG_1234.jpg`)
- [ ] **Under 500KB** for web (preferably under 200KB)
- [ ] **Correct format** (JPG for photos, PNG for transparency, SVG for icons)

---

## Usage in Astro Components

### Static Images
```astro
<img src="/images/logo/logo.png" alt="NS Land Consultant Logo" />
```

### From Content.ts
```astro
---
import { content } from '../data/content.ts';
---
<img src={content.company.logo} alt="Logo" />
```

### Background Images
```astro
<div style="background-image: url('/images/backgrounds/hero-bg.jpg')">
  <!-- Content -->
</div>
```

---

## Adding New Images

1. Optimize the image (resize + compress)
2. Place in appropriate `/public/images/` subfolder
3. Reference in `src/data/content.ts`
4. Test locally: `npm run dev`
5. Commit to Git (if under 1MB)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Image not showing | Check path starts with `/` (root relative) |
| Slow loading | Compress image, check file size |
| Blurry on retina | Use 2x size and let browser scale down |
| Wrong aspect ratio | Crop to consistent ratio before uploading |

---

## Related Files

- `src/data/content.ts` - Image URLs and configuration
- `AGENTS.md` - Project guidelines
- `/public/images/` - Image storage location
