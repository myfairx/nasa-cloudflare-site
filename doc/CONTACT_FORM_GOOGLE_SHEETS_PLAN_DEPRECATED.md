# Contact Form → Google Workspace Integration Plan

**Date:** 8 April 2026  
**Status:** Planned — awaiting implementation

---

## Overview

Connect the static contact form on `/contact` to Google Workspace via Google Apps Script, so form submissions are captured in a Google Sheet with optional email notifications — all free, no third-party services.

---

## Architecture

```
User submits form → POST to Google Apps Script webhook → Appends row to Google Sheet → (Optional) Sends email notification
```

**Why this works for our stack:**
- Cloudflare Pages = static site only (no server-side form handling)
- Google Apps Script acts as a free, always-on webhook endpoint
- Google Sheets serves as our "database" for submissions
- No dependencies, no cost, no rate limits for expected volume

---

## Implementation Steps

### Step 1: Create Google Sheet
- Create a new Google Sheet (or use existing)
- Name it: `NS Land — Contact Form Submissions`
- Set up header row: `Timestamp | Name | Email | Phone | Message`

### Step 2: Deploy Google Apps Script Web App
- Open Extensions → Apps Script in the Google Sheet
- Paste the provided script (see `Code` section below)
- Deploy as a **Web App**:
  - **Execute as:** Me (your Google account)
  - **Who has access:** Anyone (anonymous) — required for POST from our static site
- Copy the deployed **web app URL** — this is our webhook endpoint

### Step 2.5: Set Up Cloudflare Turnstile
- Go to [Cloudflare Dashboard → Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
- Create a new Turnstile site:
  - **Domain:** `nslandconsultant.com`
  - **Widget mode:** Managed (recommended) or Invisible
- Copy the **Site Key** (public) and **Secret Key** (private)
- Store Secret Key somewhere secure — needed for server-side verification

### Step 3: Update Contact Form
- Add Cloudflare Turnstile widget to the form (client-side)
  - Load Turnstile script: `https://challenges.cloudflare.com/turnstile/v0/api.js`
  - Add `<div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>` before submit button
- Add `id="contact-form"` to the `<form>` element
- Add loading/success/error states with a small client-side JS handler
- The Turnstile token will be sent as `cf-turnstile-response` in the POST data

### Step 4: Test
- Submit the form with test data
- Verify row appears in Google Sheet
- Verify email notification (if enabled)
- Test validation (empty fields, invalid email)
- Test error handling (network failure, script timeout)

### Step 5: (Optional) Email Notifications
- The Apps Script can send an email to `info@nslandconsultant.com` on each submission
- Email includes: Name, Email, Phone, Message, Timestamp

---

## Code

### Google Apps Script (with Turnstile verification)

```javascript
// Turnstile Secret Key — store securely (e.g., Cloudflare Workers with Secrets)
// For Apps Script, you can hardcode it (less ideal) or use PropertiesService
const TURNSTILE_SECRET = PropertiesService.getScriptProperties().getProperty('TURNSTILE_SECRET');
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit';

// doPost(e) — receives POST requests from the contact form
function doPost(e) {
  try {
    const params = e.parameter;

    // 1. Verify Cloudflare Turnstile token
    if (!params['cf-turnstile-response']) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'Missing Turnstile token' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const turnstileUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const turnstileResponse = UrlFetchApp.fetch(turnstileUrl, {
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      payload: {
        secret: TURNSTILE_SECRET,
        response: params['cf-turnstile-response']
      }
    });

    const turnstileResult = JSON.parse(turnstileResponse.getContentText());
    if (!turnstileResult.success) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'Turnstile verification failed' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Append row to Google Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      params.name || '',
      params.email || '',
      params.phone || '',
      params.message || ''
    ]);

    // 3. Optional: Send email notification
    // MailApp.sendEmail({
    //   to: 'info@nslandconsultant.com',
    //   subject: 'New Contact Form Submission',
    //   htmlBody: `
    //     <h3>New Contact Form Submission</h3>
    //     <p><strong>Name:</strong> ${params.name}</p>
    //     <p><strong>Email:</strong> ${params.email}</p>
    //     <p><strong>Phone:</strong> ${params.phone || 'N/A'}</p>
    //     <p><strong>Message:</strong><br>${params.message}</p>
    //   `
    // });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Updated Form (contact.astro)

```html
<form id="contact-form" class="space-y-6">
  <!-- Existing fields: name, email, phone, message -->

  <!-- Cloudflare Turnstile Widget -->
  <div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>

  <button type="submit" id="submit-btn">
    {contact.form.submit}
  </button>
</form>

<!-- Turnstile Script + Form Handler -->
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<script>
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const webhookUrl = 'YOUR_APPS_SCRIPT_URL';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const formData = new FormData(form);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.status === 'success') {
        // Show success message
        form.reset();
        // Turnstile auto-resets on submission
      } else {
        // Show error message
      }
    } catch (error) {
      // Show network error message
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
</script>
```

---

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/contact.astro` | Add Turnstile widget, client-side JS handler, success/error states |
| `src/data/content.ts` | Optionally add webhook URL + Turnstile site key to `contact` config |

## Files to Create

| File | Purpose |
|------|---------|
| *(None)* | Apps Script lives in Google's editor. Store webhook URL + site key in `.env` or `content.ts` |

---

## Considerations

### Turnstile Secret Key Security
- The Secret Key **must not** be exposed in frontend code
- Storing it in Google Apps Script `PropertiesService` is acceptable for this use case
- Alternative: Use a Cloudflare Worker as a proxy to keep the secret entirely out of Apps Script

### CORS
- Google Apps Script web apps support CORS when deployed with "Anyone" access
- The `doPost()` function returns JSON, which works with `fetch()`
- Turnstile widget loads from Cloudflare CDN — no CORS issues

### Security
- Turnstile blocks bots at the form level before submission
- Server-side Turnstile verification in Apps Script adds a second layer
- Webhook URL is public but protected by Turnstile verification
- No sensitive data in the form (just name, email, phone, message)

### Rate Limits
- Google Apps Script: ~20,000 executions/day for free accounts
- Cloudflare Turnstile: 1M verifications/month (free tier)
- More than sufficient for a contact form

### Reliability
- Google Sheets is the source of truth — all submissions are saved there
- If the script fails, the Sheet won't get a new row
- Can add retry logic on the client side

### Turnstile Widget Options
| Mode | Description |
|------|-------------|
| Managed | Auto-detects bots, shows challenge only if suspicious (recommended) |
| Invisible | No visible widget, fully silent (may have higher false positives) |
| Interactive | Always shows a challenge (not recommended for UX) |

### Future Improvements
- Use a Cloudflare Worker as a proxy to keep Turnstile Secret Key out of Apps Script
- Add Slack/Teams webhook notifications for instant alerts
- Export submissions to CSV/CRM
- Add success/error toast notifications with better UX

---

## Revisit Checklist

- [ ] Create Google Sheet for submissions
- [ ] Create Cloudflare Turnstile site and get Site Key + Secret Key
- [ ] Deploy Google Apps Script (with Turnstile verification) and get webhook URL
- [ ] Store Turnstile Secret Key in Apps Script PropertiesService
- [ ] Update `contact.astro` with Turnstile widget + form handler
- [ ] Test form submission end-to-end (including Turnstile)
- [ ] Enable/disable email notifications
- [ ] Commit and deploy to Cloudflare Pages
