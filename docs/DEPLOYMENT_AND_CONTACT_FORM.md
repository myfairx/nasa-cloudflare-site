# Deployment and Contact Form Guide

This repo uses two separate Cloudflare deployments:

- **Cloudflare Pages** for the Astro website
- **Cloudflare Worker** for the contact form API

This separation keeps the public site simple while still allowing the contact form to verify Turnstile and send email through Resend.

## What Deploys Where

- [astro.config.mjs](/C:/Users/wan/Desktop/nasa/astro.config.mjs) builds the site as static output.
- [wrangler.jsonc](/C:/Users/wan/Desktop/nasa/wrangler.jsonc) is the Pages config.
- [worker/contact.ts](/C:/Users/wan/Desktop/nasa/worker/contact.ts) is the contact form Worker.
- [worker/wrangler.toml](/C:/Users/wan/Desktop/nasa/worker/wrangler.toml) is the Worker config.
- [src/pages/contact.astro](/C:/Users/wan/Desktop/nasa/src/pages/contact.astro) sends the form submission to the Worker URL.

## Current Live Setup

- Pages site: deployed from GitHub via Cloudflare Pages
- Contact API Worker URL: `https://nsland-contact-api.myfairx.workers.dev`
- Turnstile site key: already added in `src/pages/contact.astro`
- Turnstile secret: stored in the Worker
- Resend API key: must be stored in the Worker

## Pages Deployment

Use this for the main website.

### GitHub Flow

1. Push changes to GitHub.
2. Cloudflare Pages builds the repo.
3. Cloudflare serves the build output from `dist/`.

### Build Command

```bash
npm run build
```

### Output Directory

```text
dist
```

### Why the `docs/` Folder Does Not Ship

- `docs/` stays in the repository.
- Cloudflare Pages only serves the built site output, not the whole repo.
- Unless a file is copied into `dist/`, it is not public on the website.

## Contact Worker Deployment

Use this for the form backend only.

### Deploy

Run from the repo root:

```bash
npx wrangler deploy --config worker/wrangler.toml
```

### What This Does

- Deploys the Worker defined in `worker/wrangler.toml`
- Creates or updates the Worker named `nsland-contact-api`
- Prints the live `workers.dev` URL in the command output

### Worker URL

The contact form in `src/pages/contact.astro` must point to the live Worker URL:

```ts
const workerUrl = 'https://nsland-contact-api.myfairx.workers.dev';
```

If the Worker is renamed or moved to another Cloudflare account, update that URL in the contact page.

## Required Secrets

The Worker needs two secrets.

### 1. Turnstile Secret

Store this on the Worker as:

```text
TURNSTILE_SECRET
```

Add it in the Cloudflare dashboard under the Worker, or use:

```bash
npx wrangler secret put TURNSTILE_SECRET --config worker/wrangler.toml
```

### 2. Resend API Key

Store this on the Worker as:

```text
RESEND_API_KEY
```

Add it in the Cloudflare dashboard under the Worker, or use:

```bash
npx wrangler secret put RESEND_API_KEY --config worker/wrangler.toml
```

## Turnstile Setup

Turnstile has two different values:

- **Site key**: public, goes in the page
- **Secret key**: private, goes in the Worker

In this repo:

- Site key is in [src/pages/contact.astro](/C:/Users/wan/Desktop/nasa/src/pages/contact.astro)
- Secret key is stored in the Worker as `TURNSTILE_SECRET`

If the site key changes, update the `data-sitekey` value in the contact form.

## Resend Setup

The Worker sends email through Resend.

Make sure:

- your Resend account is active
- the sending domain or sender is verified
- the recipient address in [worker/contact.ts](/C:/Users/wan/Desktop/nasa/worker/contact.ts) is correct

The current Worker sends mail to:

```text
admin@nslandconsultant.com
```

The Worker also uses this sender:

```text
NS Land Contact <admin@nslandconsultant.com>
```

Make sure Resend allows that sender or domain.

## How the Contact Form Works

1. User submits the form on the contact page.
2. The page sends form data to the Worker URL.
3. The Worker checks required fields.
4. The Worker verifies the Turnstile token.
5. The Worker sends an email via Resend.
6. The page shows success or error feedback.

## Files to Edit for Contact Changes

- [src/pages/contact.astro](/C:/Users/wan/Desktop/nasa/src/pages/contact.astro)
  - form UI
  - Worker URL
  - Turnstile site key
- [worker/contact.ts](/C:/Users/wan/Desktop/nasa/worker/contact.ts)
  - validation
  - email sending
  - Turnstile verification
- [worker/wrangler.toml](/C:/Users/wan/Desktop/nasa/worker/wrangler.toml)
  - Worker deployment config

## Common Problems

### Form submits but nothing happens

- Check that the Worker URL in `contact.astro` is correct.
- Check the browser console and Worker logs.
- Confirm the Worker is deployed.

### Turnstile fails

- Confirm the site key in the page matches the Turnstile widget.
- Confirm `TURNSTILE_SECRET` is set on the Worker.
- Confirm the domain is allowed in Turnstile settings.

### Email is not sent

- Confirm `RESEND_API_KEY` is set on the Worker.
- Confirm the sending domain or sender is verified in Resend.
- Check the Worker logs for the Resend response error.

### Cloudflare Pages shows a `wrangler.toml` warning

- That warning appears when Pages sees a Worker config and skips it.
- This repo now uses `wrangler.jsonc` for Pages and `worker/wrangler.toml` for the Worker.
- Pages should use the root `wrangler.jsonc` file.

## Quick Command Reference

Build the site:

```bash
npm run build
```

Deploy the Worker:

```bash
npx wrangler deploy --config worker/wrangler.toml
```

Set Turnstile secret:

```bash
npx wrangler secret put TURNSTILE_SECRET --config worker/wrangler.toml
```

Set Resend API key:

```bash
npx wrangler secret put RESEND_API_KEY --config worker/wrangler.toml
```

## Short Version

- Pages hosts the website.
- Worker handles the contact form.
- Turnstile site key goes in the page.
- Turnstile secret and Resend key go in the Worker.
- Deploy Pages through GitHub.
- Deploy the Worker with Wrangler.
