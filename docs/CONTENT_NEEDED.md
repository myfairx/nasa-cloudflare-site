# NS Land Consultant - Content Checklist

**Status:** Waiting for client input  
**Last Updated:** 2026-04-27  
**Purpose:** Track all content items requiring client approval or information

---

## How to Use This Document

This checklist contains all content currently marked as `[NEEDS CLIENT INPUT]` in the website. Review each section and provide the final content to replace these placeholders.

**Priority Levels:**

- 🔴 **CRITICAL** - Required before launch (contact info, about story)
- 🟡 **HIGH** - Strongly recommended before launch (SEO descriptions, service details)
- 🟢 **MEDIUM** - Can launch with placeholders, but should be refined (marketing copy, values)

---

## 🔴 CRITICAL - Required Before Launch

### 1. Contact Information (`siteConfig`)

**Current Placeholders:**

```typescript
email: 'info@nslandconsultant.com',
phone: '+60 12-345 6789',
address: '[NEEDS CLIENT INPUT] - Full office address',
```

**Required from Client:**

- [ ] **Primary Email Address** - Main business contact email
- [ ] **Phone Number** - Business phone number (with country code)
- [ ] **Office Address** - Full physical address (street, city, state, postcode)
- [ ] **WhatsApp Number** - If different from phone (for WhatsApp button)

---

### 2. Social Media Links (`siteConfig.social`)

**Current Placeholders:**

```typescript
social: {
  facebook: '[NEEDS CLIENT INPUT]',
  instagram: '[NEEDS CLIENT INPUT]',
  linkedin: '[NEEDS CLIENT INPUT]',
  whatsapp: '[NEEDS CLIENT INPUT]',
}
```

**Required from Client:**

- [ ] **Facebook Page URL** - Full URL to business Facebook page (or "none")
- [ ] **Instagram Handle** - @username or full URL (or "none")
- [ ] **LinkedIn Page** - Company LinkedIn page URL (or "none")
- [ ] **WhatsApp Link** - wa.me link format (or use phone number above)

**Note:** If any platform is not used, we'll hide that icon from the footer.

---

### 3. Company Story / About Page

**Current Placeholder (Malay):**

```
[NEEDS CLIENT INPUT] Ditubuhkan dengan misi untuk menyederhanakan perundingan tanah di Malaysia,
NS Land Consultant telah berkembang menjadi rakan kongsi dipercayai untuk pemaju hartanah,
pelabur, dan pemilik tanah. Pasukan kami menggabungkan pengetahuan tempatan yang mendalam
dengan kepakaran profesional untuk memberikan hasil yang bermakna.
```

**Current Placeholder (English):**

```
[NEEDS CLIENT INPUT] Founded with a mission to simplify land consultancy in Malaysia,
NS Land Consultant has grown to become a trusted partner for property developers,
investors, and landowners. Our team combines deep local knowledge with professional
expertise to deliver results that matter.
```

**Required from Client:**

- [ ] **Founding Year** - When was the company established?
- [ ] **Founder/Owner Name** - Who started the company?
- [ ] **Company History** - Brief origin story (3-5 sentences)
- [ ] **Mission Statement** - What is the company's purpose?
- [ ] **Key Milestones** - Any notable achievements or growth points?
- [ ] **Team Size** - How many people work at the company?

**Guidelines:**

- Keep it authentic and personal
- Mention specific areas/regions served
- Include what makes your approach unique
- Aim for 100-150 words per language

---

## 🟡 HIGH - Strongly Recommended Before Launch

### 4. SEO Page Descriptions

Each page needs a unique meta description (150-160 characters) for search engines.

**Current Placeholders:**

**Home Page:**

```
[NEEDS CLIENT INPUT] - 150-160 character description of company services and unique value proposition
```

**About Page:**

```
[NEEDS CLIENT INPUT] - Company history, mission, and team overview
```

**Services Page:**

```
[NEEDS CLIENT INPUT] - Overview of land consultancy services offered
```

**Contact Page:**

```
[NEEDS CLIENT INPUT] - Contact information and office location
```

**Required from Client (in Malay AND English):**

- [ ] **Homepage Description** - What does the company do? Why choose you? (150-160 chars)
- [ ] **About Page Description** - Company overview for search results (150-160 chars)
- [ ] **Services Page Description** - What services do you offer? (150-160 chars)
- [ ] **Contact Page Description** - How to reach you and where you're located (150-160 chars)

**Examples of Good Descriptions:**

_Homepage:_

- EN: "Professional land consultancy in Malaysia. Expert guidance on property sales, land conversion, inheritance matters, and development planning."
- MS: "Perunding tanah profesional di Malaysia. Panduan pakar untuk jual beli hartanah, tukar syarat tanah, pusaka, dan perancangan pembangunan."

_Services:_

- EN: "Comprehensive land consultancy services including sales management, land conversion, inheritance handling, and development advisory in Malaysia."
- MS: "Perkhidmatan perundingan tanah menyeluruh termasuk pengurusan jual beli, tukar syarat, pusaka, dan khidmat nasihat pembangunan."

---

### 5. Service Descriptions

The website lists 10 services. Each needs a clear, specific description of what you actually do.

**Current:** All marked as `[PLACEHOLDER]` with generic descriptions.

**Required from Client for Each Service:**

**Service 1: Property & Land Consultation (Perundingan Hartanah & Tanah)**

- [ ] What specific advice do you provide?
- [ ] What types of clients do you help? (first-time buyers, investors, developers?)
- [ ] What's your consultation process?

**Service 2: Land Sale and Purchase Management**

- [ ] How do you find buyers/sellers?
- [ ] Do you handle marketing on specific platforms?
- [ ] What's your success rate or typical timeframe?

**Service 3: Inheritance Land Management (Pengurusan Tanah Pusaka)**

- [ ] Do you handle faraid calculations?
- [ ] Do you work with lawyers for legal documents?
- [ ] What types of inheritance cases? (simple transfers, disputed properties?)

**Service 4: Land Verification & Due Diligence**

- [ ] What do you check? (title, restrictions, land use category?)
- [ ] Do you verify with land offices directly?
- [ ] How long does verification typically take?

**Service 5: Land Conversion & Subdivision (Tukar Syarat & Pecah Lot)**

- [ ] Which land offices do you work with?
- [ ] What's the typical timeline for conversion?
- [ ] Do you handle both agriculture → building and other conversions?

**Service 6: Documentation & Legal Support**

- [ ] What specific documents do you prepare?
- [ ] Do you work with specific lawyers or can clients use their own?
- [ ] Do you handle Malay Reserve land (Tanah Rizab Melayu) issues?

**Service 7: Land Marketing & Listing**

- [ ] Which platforms do you use? (Facebook, TikTok, PropertyGuru, etc.)
- [ ] Do you create video content or just photos?
- [ ] Do you handle paid advertising budgets?

**Service 8: Land Development Advisory**

- [ ] What types of developments? (residential, commercial, industrial?)
- [ ] Do you help with feasibility studies?
- [ ] Do you work with architects/engineers?

**Service 9: Client Management**

- [ ] What does "end-to-end" service include?
- [ ] Do you handle paperwork until completion?
- [ ] What after-sales support do you provide?

**Service 10: Special Consultation Services**

- [ ] What makes a case "special" or "problematic"?
- [ ] Do you handle disputed land between family members?
- [ ] Do you handle land with missing documents?

**Guidelines for Writing:**

- Keep descriptions to 1-2 sentences
- Be specific about what YOU do (not generic industry descriptions)
- Mention any unique approaches or guarantees
- Malay and English versions needed

---

## 🟢 MEDIUM - Can Launch with Placeholders

### 6. Hero Section Messaging

**Current Placeholders:**

```
[PLACEHOLDER] Panduan pakar untuk semua keperluan pembangunan tanah dan hartanah anda di seluruh Malaysia
[PLACEHOLDER] Expert guidance for all your land development and property needs across Malaysia
```

**Optional - Can Improve:**

- [ ] **Hero Title Alternative** - Current: "Your Trusted Land Consultancy Partner" - any changes?
- [ ] **Hero Subtitle** - More specific value proposition (keep under 120 characters)
- [ ] **Call-to-Action Button Text** - Current: "Contact Us" / "Hubungi Kami" - OK?

---

### 7. Why Choose Us Section

**Current Placeholders (3 items):**

1. **Experienced Team**
   - "[PLACEHOLDER] Tahun kepakaran dalam peraturan tanah dan hartanah Malaysia."

2. **Trusted Partner**
   - "[PLACEHOLDER] Bina hubungan jangka panjang dengan perkhidmatan telus dan boleh dipercayai."

3. **Client-Focused**
   - "[PLACEHOLDER] Penyelesian disesuaikan untuk memenuhi keperluan unik anda."

**Optional - Can Refine:**

- [ ] **Differentiator 1** - What makes your team special? (certifications? years of experience? specific expertise?)
- [ ] **Differentiator 2** - What makes you trustworthy? (testimonials? success rate? transparent pricing?)
- [ ] **Differentiator 3** - How do you personalize service? (dedicated consultant? custom solutions?)

**Consider:**

- Can you provide specific numbers? ("15+ years experience", "500+ successful transactions")
- Any awards or certifications?
- Unique process or methodology?

---

### 8. Company Values

**Current Placeholders:**

```typescript
values: [
  '[PLACEHOLDER] Integriti dalam setiap urusan',
  '[PLACEHOLDER] Kecemerlangan dalam penyampaian perkhidmatan',
  '[PLACEHOLDER] Hubungan pelanggan jangka panjang',
];
```

**Optional - Can Use Generic:**

- [ ] **Value 1** - What principle guides your business?
- [ ] **Value 2** - What do you prioritize in client relationships?
- [ ] **Value 3** - What outcome do you aim for?

**Examples:**

- "Integrity in every transaction"
- "Transparent communication throughout the process"
- "Client success is our success"
- "Simplifying complex land matters"

---

### 9. Contact Page Subtitle

**Current Placeholder:**

```
[PLACEHOLDER] Sedia untuk membincangkan keperluan tanah atau hartanah anda? Hubungi kami hari ini.
[PLACEHOLDER] Ready to discuss your land or property needs? Contact us today.
```

**Optional:**

- [ ] **Alternative Contact CTA** - Any specific message you want on the contact page?
- [ ] **Consultation Offer** - Do you offer free initial consultations? Mention it here.

---

### 10. Footer Description

**Current Placeholder:**

```
[PLACEHOLDER] Perkhidmatan perundingan tanah profesional membantu pelanggan menavigasi landskap hartanah Malaysia dengan keyakinan.
[PLACEHOLDER] Professional land consultancy services helping clients navigate Malaysia's property landscape with confidence.
```

**Optional:**

- [ ] **Footer Tagline** - Brief description of company for footer (under 150 characters)

---

## 📝 Additional Assets Needed

### Visual Content

- [ ] **Company Logo** - SVG or high-res PNG (horizontal and vertical versions if available)
- [ ] **About Page Image** - Office photo, team photo, or founder photo
- [ ] **Hero Background** - Optional: custom hero image (if not provided, we'll use a professional stock image)
- [ ] **OpenGraph Image** - 1200x630px image for social media sharing (can be logo + text design)
- [ ] **Service Icons** - Currently using generic icons, can be replaced with custom graphics

### Optional Content

- [ ] **Client Testimonials** - 2-3 short testimonials with client names and locations
- [ ] **Team Member Photos & Bios** - If you want to showcase your team
- [ ] **Case Studies** - Brief success stories of challenging projects you've handled
- [ ] **FAQ** - Common questions clients ask about your services

---

## 📋 Submission Format

**Please provide content in this format:**

```
## Section: [Name]

**Malay:**
[Your Malay content here]

**English:**
[Your English content here]
```

**Or use a shared document** (Google Docs/Word) with sections clearly labeled.

**Email content to:** [your-email@example.com]

---

## ✅ Review Checklist (For Web Developer)

When client provides content:

- [ ] Copy content into `src/data/content.ts`
- [ ] Replace `[NEEDS CLIENT INPUT]` markers with actual content
- [ ] Verify content fits layout (check character limits)
- [ ] Update this checklist to mark items as complete
- [ ] Run `npm run check` to verify no TypeScript errors
- [ ] Run `npm run build` to verify build succeeds
- [ ] Preview changes on local dev server
- [ ] Share preview link with client for approval

---

## 🎯 Priority Summary

| Priority    | Items                                   | Status     |
| ----------- | --------------------------------------- | ---------- |
| 🔴 CRITICAL | Contact info, About story, Social links | ⏳ Waiting |
| 🟡 HIGH     | SEO descriptions, Service details       | ⏳ Waiting |
| 🟢 MEDIUM   | Marketing copy, Values, Hero text       | ⏳ Waiting |

---

## Questions?

**Contact:** [your-name]  
**Email:** [your-email]  
**Phone:** [your-phone]

**Notes:**

- We can launch with some `[PLACEHOLDER]` items if needed
- `[NEEDS CLIENT INPUT]` items should be finalized before launch
- Don't worry about perfection - we can refine content after launch
- Focus on accuracy (especially contact info) over marketing polish

(End of file)
