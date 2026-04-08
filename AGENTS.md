# NS Land Consultant Website

## Project Structure
```
/DATA/nasa
├── src/
│   ├── data/
│   │   └── content.ts   # All site content (editable)
│   ├── pages/           # Astro pages (index, about, services, contact)
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   └── styles/          # Global styles
├── public/              # Static assets
├── doc/                 # Design references & docs
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Key Info
- **Stack**: Astro + Tailwind CSS + Cloudflare Pages
- **Design**: See `doc/mock1-classic.html` for reference
- **Full docs**: See `doc/README.md`

## GitHub
- **Repo**: https://github.com/myfairx/nasa-cloudflare-site
- **Token**: Stored in `.env` (not committed)

## Deployment
- Connect repo to Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`