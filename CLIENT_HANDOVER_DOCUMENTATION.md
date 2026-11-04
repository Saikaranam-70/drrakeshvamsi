# Website Handover & Client Operations Manual

**Project Name:** Dr. G. Rakesh Vamsi — Consultant Urologist & Andrologist Medical Portal  
**Primary Brand / Domain:** [drrakeshvamsi.com](https://drrakeshvamsi.com)
**Client / Clinic:** Dr. G. Rakesh Vamsi (Consultant Urologist & Andrologist, KIMS Hospital, Nellore)  
**Deliverable Date:** November 2026  
**Document Version:** 1.0.0  
**Prepared By:** Development & Delivery Team  

---

## 1. Executive Summary & Project Overview

This document serves as the official client handover package and operational manual for the **Dr. G. Rakesh Vamsi (Consultant Urologist and Andrologist)** medical website and patient appointment booking portal.

The platform has been custom-developed to provide:
* A modern, fast, mobile-first web presence for Dr. G. Rakesh Vamsi and his urology/andrology practice at KIMS Hospital, Nellore.
* An automated patient appointment booking workflow with instant email confirmations and notifications.
* Educational resources including in-depth treatment pages, patient guides, clinical video showcases, and medical articles.
* Multilingual support (English and Telugu) for enhanced local patient reach and accessibility.
* Comprehensive compliance with medical confidentiality standards, privacy policies, and terms of service.

---

## 2. Deliverables & Features Directory

| Page / Feature | URL Route | Description & Key Functionality |
| :--- | :--- | :--- |
| **Homepage** | `/` | Hero section, doctor introduction, quick booking trigger, treatment cards, clinical video showcase, hospital location, and patient reviews. |
| **About Doctor** | `/about` | Detailed biography, surgical milestones, qualifications, career highlights, and philosophy of care. |
| **Treatments Directory** | `/treatments` | Categorized list of urological, andrological, and robotic surgical treatments. |
| **Treatment Detail** | `/treatments/[slug]` | Dedicated deep-dive for each condition with symptoms, causes, diagnosis, treatment options, recovery timelines, and FAQs. |
| **Book Appointment** | `/book-appointment` | Interactive step-by-step appointment scheduling form with slot selection, patient details, and validation. |
| **Appointment Confirmation**| `/appointment-confirmation`| Live confirmation card with reference ID, calendar details, and next steps for the patient. |
| **Patient Info & FAQs** | `/patient-info`, `/faqs` | Pre-op and post-op instructions, insurance information, hospital admission guide, and common patient questions. |
| **Clinical Video Showcase**| Component on Homepage | Curated clinical explanations, surgical insights, and patient awareness videos. |
| **Medical Blog** | `/blog`, `/blog/[slug]` | Educational medical blog posts to drive organic search (SEO) and patient awareness. |
| **Testimonials** | `/testimonials` | Verified patient reviews and success stories. |
| **Contact & Location** | `/contact` | Direct phone, email, WhatsApp, consultation timings, interactive Google Map, and enquiry form. |
| **Legal Pages** | `/privacy-policy`, `/terms-and-conditions` | GDPR/HIPAA/Indian IT Act aligned patient data privacy policy and website usage terms. |

---

## 3. Account Access & Credentials Checklist

> **Note for the Client:** Store these credentials securely. Do not share admin passwords over unencrypted channels.

### 3.1 Domain & DNS Management
* **Domain Name:** Practice domain (e.g., `drrakeshvamsi.com`)
* **Registrar / Provider:** [e.g., GoDaddy / Namecheap / Google Domains]
* **Login URL:** `[Insert Registrar URL]`
* **Account Username / Email:** `[Insert Client Email]`
* **DNS Settings Configured:**
  * `A` record pointing to Hosting IP / Vercel (`76.76.21.21`)
  * `CNAME` record for `www` pointing to `cname.vercel-dns.com`
  * `TXT` / `MX` records for email verification (Brevo / Google Workspace)

### 3.2 Website Hosting & Cloud Platform
* **Hosting Platform:** Vercel / Cloud Infrastructure
* **Dashboard URL:** `https://vercel.com`
* **Project Name:** `urology-andrology-medical-portal`
* **Account / Team Access:** `[Transferred to Client / Agency Email]`
* **Automatic Deployments:** Active via Git repository `main` branch.

### 3.3 Email Notification Service (SMTP)
The website is configured to dispatch transactional emails (appointment confirmations to patients and real-time alerts to the clinic team) using **Brevo (formerly Sendinblue)** with an automatic fallback to **Gmail SMTP**.

* **Primary Provider:** Brevo (`smtp-relay.brevo.com`, Port: `587`)
* **Brevo Dashboard:** `https://app.brevo.com`
* **Sender Email:** `info@drrakeshvamsi.com` (or verified clinic domain email)
* **Clinic Recipient Email:** Configured in `CLINIC_NOTIFICATION_EMAIL` (e.g., clinic coordinator or doctor's inbox)

### 3.4 Third-Party Integrations & Analytics
* **Google Maps API / Embed:** Integrated for KIMS Hospital, SP Nagar, Nellore location.
* **Google Analytics 4 (GA4):** `[Measurement ID: G-XXXXXXXXXX]`
* **Google Search Console:** Verified with XML sitemap submitted (`/sitemap.xml`).
* **WhatsApp Business Integration:** Configured to route patient clicks directly to the clinic hotline: `+91 76740 08057`.

---

## 4. Technical Architecture & Environment Configuration

### 4.1 Tech Stack
* **Framework:** Next.js 14 (App Router architecture with React Server Components)
* **Language:** TypeScript 5
* **Styling & Design System:** Tailwind CSS with responsive breakpoints and medical-grade color palette
* **Animation & UI Polish:** Framer Motion and Lucide React icons
* **Form Management & Validation:** React Hook Form + Zod Schema Validation
* **Email Engine:** Nodemailer with secure TLS/SSL transport
* **Deployment Target:** Vercel Edge & Serverless Functions

### 4.2 Environment Variables (`.env.local`)
When updating server configurations, the following environment variables are maintained in the hosting dashboard:

```bash
# ==============================================================================
# Email Configuration
# ==============================================================================

# Switching Variable: Set to 'true' to use Brevo, 'false' to use Gmail SMTP
USE_BREVO_MAIL=true

# Clinic/Doctor notification recipient email (where booking alerts arrive)
CLINIC_NOTIFICATION_EMAIL="doctor@example.com"

# Brevo (Sendinblue) Credentials
BREVO_MAIL_HOST="smtp-relay.brevo.com"
BREVO_MAIL_PORT=587
BREVO_MAIL_USERNAME="your-brevo-username"
BREVO_MAIL_PASSWORD="your-brevo-smtp-key"
BREVO_MAIL_FROM="doctor@example.com"

# SMTP Gmail Credentials (Fallback / Alternative)
GMAIL_MAIL_HOST="smtp.gmail.com"
GMAIL_MAIL_PORT=587
GMAIL_MAIL_USERNAME="your-gmail@gmail.com"
GMAIL_MAIL_PASSWORD="your-gmail-app-password"
GMAIL_MAIL_FROM="your-gmail@gmail.com"
```

---

## 5. Content Management & Routine Updates Guide

The website data is structured into clean, modular TypeScript data files located under `src/data/`. This enables easy updates without touching complex code or layout styles.

### 5.1 Updating Hospital Contact, Phone & Consultation Timings
* **File Location:** `src/data/hospitalData.ts`
* **What you can change:**
  * Clinic phone number (`phone: "+91 76740 08057"`)
  * Clinic email (`email: "info@drrakeshvamsi.com"`)
  * Consultation hours (`hours: "Mon - Sat: 9:00 AM - 5:00 PM"`)
  * Physical address and landmarks
  * Google Maps embed URL

### 5.2 Updating Doctor Profile, Stats & Achievements
* **File Location:** `src/data/doctorData.ts` (and `src/data/localizedDoctor.ts` for Telugu)
* **What you can change:**
  * Surgeries count (`surgeriesCount: "3,500+"`)
  * Years of experience (`experienceYears: "10+"`)
  * Qualifications and degrees
  * Philosophy quote, biography, and care highlights
  * Social links (Instagram handle `@dr.rakeshvamsi`)

### 5.3 Adding or Editing Treatments
* **File Location:** `src/data/treatmentsData.ts` (and `src/data/localizedTreatments.ts`)
* **To update an existing treatment:** Locate the treatment by its `slug` (e.g., `kidney-stones`, `prostate-enlargement`, `erectile-dysfunction`) and edit the symptoms, diagnostic tests, treatment options, or recovery details.
* **To add a new treatment:** Duplicate an existing object inside the `treatmentsData` array, provide a unique `slug`, and fill in the headline, description, symptoms, and FAQs.

### 5.4 Adding Medical Blog Posts
* **File Location:** `src/data/blogData.ts` (and `src/data/localizedBlog.ts`)
* Add a new entry with title, excerpt, publication date, author, category, reading time, and formatted markdown or HTML content.

### 5.5 Updating Clinical Videos
* **File Location:** `src/components/home/ClinicalVideoShowcase.tsx`
* Update video thumbnail images, titles, descriptions, and YouTube/Instagram video embed links.

---

## 6. Appointment Booking & Contact Workflow

```
[ Patient Visits Site ]
         │
         ▼
[ Fills /book-appointment Form ]
         │
         ▼
[ Client-side Validation via Zod ]
         │
         ├── (Passes) ──► [ POST /api/appointment ]
         │                         │
         │                         ├──► 1. Generates Unique Reference ID (e.g. URO-2026-XXXX)
         │                         ├──► 2. Sends Formatted Alert to Clinic Email
         │                         ├──► 3. Sends Confirmation Receipt to Patient Email
         │                         └──► 4. Redirects Patient to /appointment-confirmation
         │
         └── (Fails) ───► Inline Error Messages Highlight Required Missing Fields
```

### What to check if booking emails are not arriving:
1. Verify the `CLINIC_NOTIFICATION_EMAIL` in Vercel environment variables is correct.
2. Check your Brevo dashboard (`app.brevo.com`) under **Transactional > Statistics** to confirm the email was accepted.
3. Check the clinic spam/junk folder and mark the sender address as "Not Spam" or safe sender.
4. If Brevo quota is reached, toggle `USE_BREVO_MAIL=false` to use Gmail SMTP fallback.

---

## 7. SEO, Local Ranking & Google Search Domination Guide

The platform is fortified with **medical-grade Search Engine Optimization (SEO)** to ensure top-tier positioning in Google Search results, Google Maps Local 3-Pack, and Google Knowledge Graph.

### 7.1 Logo in Domain & Browser Presentation
* **Multi-Resolution Favicons:** Configured across 32x32, 48x48, 192x192, and 512x512 formats (`/favicon.ico`, `/icon.png`, `/apple-touch-icon.png`).
* **Google Mobile Search Logo:** Defined in `manifest.json` and Schema.org `logo` object so Google Search directly displays the clinic logo adjacent to the website domain in mobile search snippets.
* **Apple & PWA Ready:** Standalone web manifest with custom medical brand theme color (`#0d9488`).

### 7.2 Structured Data (Schema.org JSON-LD) Implemented
1. **`Physician` Schema:** Encodes Dr. G. Rakesh Vamsi's credentials, qualifications (MS, M.Ch Urology), 10+ years experience, and specific urological/andrological specializations.
2. **`MedicalClinic` & `LocalBusiness` Schema:** Encodes physical GPS coordinates (`14.434546, 79.965769`), opening hours (Mon-Sat 9AM-5PM), accepted payments, and direct link to KIMS Hospitals Nellore.
3. **`FAQPage` Rich Snippet Schema:** Injected on the Homepage, dedicated FAQs page, and every treatment page. This triggers expandable question-and-answer accordions directly within Google Search results, multiplying click-through rates (CTR).
4. **`MedicalWebPage` & `MedicalCondition` Schema:** Placed on all treatment pages (`/treatments/[slug]`) to help Google classify symptoms, diagnostic modalities, and surgical options (RIRS, PCNL, TURP).
5. **`MedicalScholarlyArticle` Schema:** Placed on every medical blog post to build Google E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness).

### 7.3 Local Nellore Geo-Targeting
* Hardcoded geographic tags:
  * `geo.region`: `IN-AP`
  * `geo.placename`: `Nellore, Andhra Pradesh, India`
  * `geo.position`: `14.434546;79.965769`
  * `ICBM`: `14.434546, 79.965769`
* Optimized for high-intent queries: *"Best Urologist in Nellore"*, *"Kidney stone laser surgery Nellore"*, *"Top Andrologist in Nellore"*, *"KIMS Hospital urology consultation"*.

### 7.4 Steps for the Client to Claim #1 Spot on Google:
1. **Google Search Console Verification:**
   * Go to `search.google.com/search-console`.
   * Add property: `https://drrakeshvamsi.com` (or practice domain).
   * Submit sitemap link: `https://drrakeshvamsi.com/sitemap.xml`.
2. **Google Business Profile (Google Maps) Link:**
   * Link the official website URL directly in the doctor's Google Business Profile profile.
   * Ensure clinic name, phone (`+91 76740 08057`), and hospital address match the structured data schema.

---

## 8. Warranty, Maintenance & Support Scope

### 8.1 Included Warranty Period (30 Days Post-Handover)
For a period of **30 days** starting from the date of final client sign-off, the development team provides complimentary bug-fixing support, which includes:
* Resolution of any broken links, layout misalignments, or display glitches across supported modern browsers (Chrome, Safari, Edge, Firefox).
* Fixing any serverless API errors in appointment or contact email dispatch.
* Correction of any typographical errors or initial content adjustments provided in the original scope.

### 8.2 Items Outside Free Warranty Scope
* New feature additions (e.g., integrating online payment gateways, building custom EHR/EMR patient portals).
* Third-party outages or policy changes (e.g., changes to Brevo pricing, Google Maps API billing, hosting suspension due to non-payment of domain fees).
* Major design changes or structural rewrites requested after final acceptance.

### 8.3 Ongoing Maintenance Options (Optional AMC)
An Annual/Monthly Maintenance Contract (AMC) is available covering:
* Monthly backups of source code and configurations.
* Continuous updates of underlying packages (Node.js, Next.js, security patches).
* Routine content updates (adding new blogs, doctor accolades, video uploads).
* Priority 24/48-hour turn-around for emergencies.

---

## 9. Final Sign-off & Project Acceptance

By signing below, the Client confirms that:
1. All agreed deliverables, pages, and features have been reviewed, tested, and accepted.
2. All administrative credentials, access rights, and source code ownership have been provided.
3. The 30-day warranty period commences from the date of this signed agreement.

<br/>

### Client Sign-off
* **Authorized Signatory:** __________________________________________________
* **Name & Designation:** Dr. G. Rakesh Vamsi / Clinic Representative
* **Signature:** _____________________________________________________________
* **Date:** ________________________

<br/>

### Developer / Agency Sign-off
* **Authorized Signatory:** __________________________________________________
* **Name & Designation:** Lead Developer / Project Delivery Manager
* **Signature:** _____________________________________________________________
* **Date:** ________________________

