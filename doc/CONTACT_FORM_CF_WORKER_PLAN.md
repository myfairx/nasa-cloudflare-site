# Contact Form → Cloudflare Worker + Resend Plan

**Date:** 8 April 2026  
**Status:** Planned — awaiting implementation

---

## Overview

Connect the static contact form on `/contact` to a Cloudflare Worker that verifies Cloudflare Turnstile, sends an email notification via Resend, and returns a clean JSON response — all within the Cloudflare ecosystem.

---

## Architecture

```
User submits form
  → POST to /api/contact (Cloudflare Worker)
    → Verify Turnstile token
    → Send email via Resend API
    → Return JSON { status: 'success' | 'error' }
```

**Why this works for our stack:**
- Already on Cloudflare Pages — Worker lives in the same ecosystem
- Wrangler CLI handles deploy, secrets, and dev in one tool
- Turnstile secret stored securely via `wrangler secret put`
- Resend free tier: 3,000 emails/month (100/day) — more than enough
- No Google dependencies, no CORS issues, no slow cold starts

---

## Prerequisites

1. **Cloudflare account** — already set up (Pages is deployed here)
2. **Resend account** — sign up at resend.com, verify `nslandconsultant.com` domain
3. **Turnstile site** — create in Cloudflare Dashboard → Turnstile
4. **Wrangler CLI** — install as dev dependency: `npm install -D wrangler`

---

## Implementation Steps

### Step 1: Set Up Cloudflare Turnstile

- Go to [Cloudflare Dashboard → Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
- Create a new Turnstile site:
  - **Domain:** `nslandconsultant.com`
  - **Widget mode:** Managed (recommended) — auto-detects bots, shows challenge only if suspicious
- Copy the **Site Key** (public) and **Secret Key** (private)
- The Site Key goes in the frontend form
- The Secret Key is stored as a Worker secret (Step 3)

### Step 2: Set Up Resend

- Sign up at [resend.com](https://resend.com)
- Add and verify your domain (`nslandconsultant.com`):
  - Resend provides DNS records to add in Cloudflare Dashboard
  - Wait for DNS propagation (usually ~minutes)
- Generate an **API key** with `Sending` permission
- Note the **from email** address (e.g., `contact@nslandconsultant.com`)

### Step 3: Create & Deploy Cloudflare Worker

- Install Wrangler: `npm install -D wrangler`
- Create a `worker/` directory with the Worker code (see `Code` section below)
- Create `wrangler.toml` config file
- Deploy: `npx wrangler deploy`
- Store secrets:
  ```bash
  npx wrangler secret put TURNSTILE_SECRET   # paste the Turnstile Secret Key
  npx wrangler secret put RESEND_API_KEY     # paste the Resend API key
  ```
- Note the Worker URL: `https://nsland-contact-api.nslandconsultant.workers.dev`
  - Or use a custom route: `nslandconsultant.com/api/contact`

### Step 4: Update Contact Form

- Add Cloudflare Turnstile widget (`<div class="cf-turnstile">`) before the submit button
- Add a small client-side JS handler to:
  - Intercept form submit
  - `fetch()` POST to the Worker URL
  - Show loading → success/error states
  - Reset form on success
- Store the Worker URL and Turnstile Site Key in `src/data/content.ts` or as Astro env vars

### Step 5: Test

- Submit the form with test data
- Verify email arrives at `info@nslandconsultant.com`
- Verify Turnstile blocks automated submissions
- Test validation (empty fields, invalid email)
- Test error handling (network failure, Turnstile expired)
- Check Worker logs: `npx wrangler tail`

---

## Code

### Project Structure

```
nasa/
├── worker/
│   └── contact.ts          # Cloudflare Worker source
├── wrangler.toml           # Worker configuration
├── src/
│   ├── pages/contact.astro # Updated form with Turnstile + JS handler
│   └── data/content.ts     # Worker URL + Turnstile Site Key
```

### wrangler.toml

```toml
name = "nsland-contact-api"
main = "worker/contact.ts"
compatibility_date = "2026-04-08"

[observability]
enabled = true
```

### Cloudflare Worker (`worker/contact.ts`)

```typescript
interface Env {
  TURNSTILE_SECRET: string;
  RESEND_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Only allow POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const formData = await request.formData();
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const message = formData.get('message') as string;
      const turnstileToken = formData.get('cf-turnstile-response') as string;

      // 1. Validate required fields
      if (!name || !email || !message || !turnstileToken) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // 2. Verify Turnstile
      const turnstileUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
      const turnstileBody = new URLSearchParams();
      turnstileBody.set('secret', env.TURNSTILE_SECRET);
      turnstileBody.set('response', turnstileToken);

      const turnstileResponse = await fetch(turnstileUrl, {
        method: 'POST',
        body: turnstileBody,
      });
      const turnstileResult = await turnstileResponse.json();

      if (!turnstileResult.success) {
        return new Response(
          JSON.stringify({ error: 'Turnstile verification failed' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // 3. Send email via Resend
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'NS Land Contact <contact@nslandconsultant.com>',
          to: ['info@nslandconsultant.com'],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td></tr>
            </table>
            <p style="margin-top: 16px; color: #666; font-size: 12px;">Submitted at: ${new Date().toISOString()}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const resendError = await resendResponse.json();
        console.error('Resend error:', resendError);
        return new Response(
          JSON.stringify({ error: 'Failed to send email' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ status: 'success' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Contact form error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  },
};
```

### Updated Form (`src/pages/contact.astro`)

```html
<form id="contact-form" class="space-y-6">
  <!-- Name, Email, Phone, Message fields (existing) -->

  <!-- Cloudflare Turnstile Widget -->
  <div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>

  <button type="submit" id="submit-btn">
    {contact.form.submit}
  </button>

  <!-- Status messages (hidden by default) -->
  <div id="form-success" class="hidden p-4 bg-green-50 text-green-800 rounded-lg">
    Thank you! Your message has been sent. We'll get back to you soon.
  </div>
  <div id="form-error" class="hidden p-4 bg-red-50 text-red-800 rounded-lg">
    Something went wrong. Please try again or email us directly.
  </div>
</form>

<!-- Turnstile Script + Form Handler -->
<script is:inline>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    const workerUrl = 'YOUR_WORKER_URL';

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      successMsg.classList.add('hidden');
      errorMsg.classList.add('hidden');

      try {
        const formData = new FormData(form);
        const response = await fetch(workerUrl, {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (result.status === 'success') {
          form.reset();
          successMsg.classList.remove('hidden');
          // Reset Turnstile widget
          if (window.turnstile) window.turnstile.reset();
        } else {
          errorMsg.classList.remove('hidden');
        }
      } catch (error) {
        errorMsg.classList.remove('hidden');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  });
</script>

<!-- Load Turnstile SDK -->
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

---

## Files to Create

| File | Purpose |
|------|---------|
| `worker/contact.ts` | Cloudflare Worker source code |
| `wrangler.toml` | Worker configuration (name, entry point, settings) |

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/contact.astro` | Add Turnstile widget, JS form handler, success/error states |
| `src/data/content.ts` | Optionally add Worker URL + Turnstile Site Key to `contact` config |
| `package.json` | Add `wrangler` as dev dependency (if not already present) |

---

## Deploy Commands

```bash
# Install Wrangler
npm install -D wrangler

# Deploy Worker
npx wrangler deploy

# Store secrets (interactive — prompts for value)
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put RESEND_API_KEY

# Tail live logs
npx wrangler tail
```

---

## Considerations

### Turnstile Secret Key Security
- Stored securely via `wrangler secret put` — encrypted at rest, never exposed in frontend code
- Only the Worker runtime can access it
- Rotating the key: `wrangler secret put TURNSTILE_SECRET` again with the new value

### CORS
- The Worker is on the same domain (or a `*.workers.dev` subdomain)
- No CORS configuration needed — `fetch()` from the frontend just works
- If the Worker is on a different origin, add `Access-Control-Allow-Origin` headers

### Resend Domain Verification
- You must verify `nslandconsultant.com` by adding DNS records (provided by Resend)
- Until verified, emails will be sent from a Resend subdomain (still works, but looks unprofessional)
- DNS propagation takes ~minutes to hours

### Rate Limits
| Service | Free Tier Limit | Our Expected Usage |
|---------|----------------|-------------------|
| Cloudflare Worker | 100,000 req/day | ~10-50/day max |
| Resend | 3,000 emails/month, 100/day | ~10-50/month |
| Turnstile | 1M verifications/month | ~10-50/month |

### Error Handling
- Worker returns proper HTTP status codes (400, 403, 500)
- Frontend shows user-friendly success/error messages
- Worker logs errors for debugging via `wrangler tail`

### Turnstile Widget Options
| Mode | Description |
|------|-------------|
| Managed | Auto-detects bots, shows challenge only if suspicious (recommended) |
| Invisible | No visible widget, fully silent (may have higher false positives) |
| Interactive | Always shows a challenge (not recommended for UX) |

### Future Improvements
- Add Google Sheets integration (via Google Sheets API from the Worker) for a submission dashboard
- Add auto-reply email to the submitter ("We received your message...")
- Add Slack/Teams webhook notifications for instant alerts
- Add success/error toast notifications with better UX
- Add rate limiting via Cloudflare Rate Limiting rules

---

## Revisit Checklist

- [ ] Install Wrangler: `npm install -D wrangler`
- [ ] Create Cloudflare Turnstile site and get Site Key + Secret Key
- [ ] Sign up for Resend and verify domain (`nslandconsultant.com`)
- [ ] Generate Resend API key
- [ ] Create `worker/contact.ts` with the provided code
- [ ] Create `wrangler.toml` config file
- [ ] Deploy Worker: `npx wrangler deploy`
- [ ] Store secrets: `wrangler secret put TURNSTILE_SECRET` and `wrangler secret put RESEND_API_KEY`
- [ ] Update `contact.astro` with Turnstile widget + form handler
- [ ] Test form submission end-to-end (including Turnstile)
- [ ] Verify email delivery
- [ ] Check Worker logs: `npx wrangler tail`
- [ ] Commit and deploy to Cloudflare Pages
