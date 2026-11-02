# Sunbrilo Technologies Website - Handover Documentation

**Project Name:** Sunbrilo Technologies Corporate Website  
**Repository / Directory:** `sunbrilo-website`  
**Date:** October 2026  
**Primary Framework:** Next.js (App Router) with TypeScript  
**Production URL:** [https://sunbrilotechnologies.com](https://sunbrilotechnologies.com)  
**Backend API URL:** [https://api.sunbrilotechnologies.com](https://api.sunbrilotechnologies.com)

---

## 1. Executive Summary & Overview

The **Sunbrilo Website** is the official corporate web portal for Sunbrilo Technologies. It serves as the primary marketing, service presentation, solution showcase, recruitment, and lead generation platform for the company. 

The website operates in conjunction with the **Sunbrilo CMS Dashboard** (`sunbrilo_dashboard`), fetching dynamic content such as blog articles, announcements, job openings, team profiles, and testimonials from a central Express + MongoDB backend API.

---

## 2. Tech Stack & Dependencies

### Core Frameworks & Libraries
| Component | Technology | Version / Details |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `^16.3.6` |
| **Language** | TypeScript | `^5` |
| **UI Library** | React & React DOM | `19.2.4` |
| **Styling** | Tailwind CSS & PostCSS | Tailwind `^4.x` |
| **3D & Canvas** | Three.js & React Three Fiber | `three` (`^0.184.0`), `@react-three/fiber` (`^9.6.0`), `postprocessing` |
| **Animations** | GSAP & Framer Motion & AOS | `gsap` (`^3.15.0`), `@gsap/react`, `framer-motion` (`^12.38.0`), `aos` |
| **Icons** | Lucide React | `^1.16.0` |
| **Email Transport** | Nodemailer | `^9.0.0` |

---

## 3. Project Structure & Code Organization

```
sunbrilo-website/
├── app/                                 # Next.js App Router root
│   ├── layout.tsx                       # Global root layout (fonts, header, footer, metadata)
│   ├── page.tsx                         # Main landing page
│   ├── globals.css                      # Tailwind & global stylesheet
│   │
│   ├── aboutus/                         # About Us page & components
│   ├── announcements/                   # Announcements page
│   ├── blogs/                           # Blog listing and single post routes
│   │   ├── page.tsx                     # Blog list page
│   │   ├── BlogPageClient.tsx           # Interactive client component (search, filters, pagination)
│   │   └── [slug]/                      # Dynamic blog post route
│   │       ├── page.tsx
│   │       └── BlogDetailClient.tsx
│   ├── career/                          # Career listings & application portal
│   │   ├── page.tsx                     # Open positions listing & form modal
│   │   └── [jobTitle]/                  # Dynamic job detail route
│   ├── contact-us/                      # Contact Us page, inquiry forms, maps
│   ├── events/                          # Events listing & event registration modal
│   ├── gallery/                         # Gallery page
│   ├── media/                           # Media & press release page
│   ├── newsletters/                     # Newsletter subscription page
│   ├── privacy-policy/                  # Privacy policy static page
│   ├── terms-and-conditions/            # Terms & conditions static page
│   ├── thank-you/                       # Post-submission confirmation page
│   │
│   ├── services/                        # Service detail pages
│   │   ├── implementation-services/
│   │   ├── managed-it-services/
│   │   ├── monitoring-and-support/
│   │   └── offshoring-services/
│   │
│   ├── solutions/                       # Enterprise solutions showcase pages
│   │   ├── cognitive-dining-workforce-orchestration/
│   │   ├── equipment-leasing-platform/
│   │   ├── hrms-empowering-your-workforce/
│   │   ├── intelligent-asset-performance-management/
│   │   ├── logistic-and-supply-chain-solutions/
│   │   ├── order-management/
│   │   ├── remote-geofencing-attendance-system/
│   │   └── tablet-based-biometric-attendance-system/
│   │
│   ├── api/                             # Serverless API routes (Route Handlers)
│   │   ├── contact/route.ts             # Contact inquiry submission & email dispatcher
│   │   └── career/route.ts              # Job application form & resume upload emailer
│   │
│   └── components/                      # Reusable components
│       ├── Header.tsx                   # Main navigation header & mobile drawer
│       ├── footer.tsx                   # Footer with quick links, contacts, newsletter
│       ├── AnnouncementPopup.tsx        # Dynamic banner popup for latest updates
│       ├── Banner.tsx                   # Hero banner component
│       ├── blog.tsx                     # Blog preview carousel / grid
│       ├── testimonials.tsx             # Client testimonials carousel
│       ├── hometeam.tsx                 # Team member showcase
│       ├── FAQSection.tsx               # Expandable accordion FAQs
│       ├── LetsTalkModal.tsx            # Global contact / inquiry popup modal
│       └── ui/                          # Reusable UI primitives (buttons, modals, cards)
│
├── public/                              # Static public assets (images, icons, logos)
├── .env                                 # Environment variables (see section 4)
├── next.config.ts                       # Next.js build & deployment configuration
├── tsconfig.json                        # TypeScript configuration
└── package.json                         # Project dependencies and run scripts
```

---

## 4. Environment Variables & External Configurations

### Environment Variables (`.env`)

| Variable | Description | Example / Recommended Value |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_BASE_URL` | Base URL for CMS Backend API (blogs, jobs, faqs, leads) | Local: `http://localhost:5000`<br>Production: `https://api.sunbrilotechnologies.com` |

> [!IMPORTANT]
> **Action Required - Move Email Credentials to `.env.local`:**  
> Currently, `app/api/contact/route.ts` and `app/api/career/route.ts` have SMTP email credentials hardcoded. It is strongly recommended to extract these into environment variables:
> ```env
> SMTP_SERVICE=gmail
> SMTP_USER=sunbrilotechnologies.digital@gmail.com
> SMTP_PASS=<your-google-app-password>
> CONTACT_RECIPIENT_EMAIL=sunbrilotechnologies.digital@gmail.com
> CONTACT_CC_EMAILS=sales@sunbrilotechnologies.com,info@sunbrilotechnologies.com
> CAREER_CC_EMAILS=recruitment@sunbrilotechnologies.com,Prajakta.Kale@sunbrilotechnologies.com
> ```

### Next.js Configuration (`next.config.ts`)

- **Host Canonical Redirect:** Redirects `www.sunbrilotechnologies.com` to `https://sunbrilotechnologies.com` permanently (308).
- **Server External Packages:** Whitelisted `nodemailer` for Next.js server runtime.
- **Allowed Remote Images (`images.remotePatterns`):**
  - `images.unsplash.com`
  - `test-api.sunbrilotechnologies.com`
  - `localhost:5000`
  - `127.0.0.1:5000`
  
  *(Note: Verify if `api.sunbrilotechnologies.com` is needed in production for uploaded media/avatars).*

---

## 5. Key Integrations & Dynamic Workflows

### 1. CMS Backend Integration (`CMS_backend`)
The website interacts with the Express + MongoDB backend for dynamic data:
- **Blogs:** `GET ${NEXT_PUBLIC_BASE_URL}/blogs` & `GET ${NEXT_PUBLIC_BASE_URL}/blogs/:slug`
- **Announcements:** `GET ${NEXT_PUBLIC_BASE_URL}/announcements`
- **Testimonials:** `GET ${NEXT_PUBLIC_BASE_URL}/testimonials`
- **Team:** `GET ${NEXT_PUBLIC_BASE_URL}/team`
- **FAQs:** `GET ${NEXT_PUBLIC_BASE_URL}/faqs`
- **Newsletter Subscription:** `POST ${NEXT_PUBLIC_BASE_URL}/newsletter` or contact endpoint

### 2. Contact & Lead Generation (`/app/api/contact/route.ts`)
- **Triggered By:** Contact Us page, "Let's Talk" modal, and Split-Screen consultation forms.
- **Payload:** Name, email, phone number, company name, service interest, message.
- **Email Dispatch:**
  - Sender: `sunbrilotechnologies.digital@gmail.com`
  - Recipient: `sunbrilotechnologies.digital@gmail.com`
  - CC: `sales@sunbrilotechnologies.com`, `info@sunbrilotechnologies.com`
  - Reply-To: Submitter's email address.

### 3. Career Applications & Resume Processing (`/app/api/career/route.ts`)
- **Triggered By:** Career page & individual job application forms.
- **Features:** Supports multipart form data, candidate details (experience, notice period, CTC/ECTC, LinkedIn, portfolio) and PDF/DOC resume attachment.
- **Email Dispatch:**
  - Recipient: `sunbrilotechnologies.digital@gmail.com`
  - CC: `recruitment@sunbrilotechnologies.com`, `Prajakta.Kale@sunbrilotechnologies.com`
  - Attachments: Dynamic buffer buffer attachment from the uploaded resume file.

---

## 6. Local Setup & Getting Started

### Prerequisites
- **Node.js:** v20.x or v22.x LTS (recommended)
- **Package Manager:** `npm` (v10+) or `pnpm`
- **Backend API:** Either a running local `CMS_backend` instance on `http://localhost:5000` or the live production API `https://api.sunbrilotechnologies.com`.

### Installation Steps

1. **Clone / Navigate to repository:**
   ```bash
   cd sunbrilo-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Create or verify `.env` (or `.env.local`):
   ```env
   NEXT_PUBLIC_BASE_URL=https://api.sunbrilotechnologies.com
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Linting and Type Checking:**
   ```bash
   npm run lint
   npx tsc --noEmit
   ```

---

## 7. Build & Deployment Instructions

### Production Build
```bash
npm run build
npm run start
```
`next build` will optimize static pages, compile server routes, and bundle CSS/JS assets into the `.next` directory.

### Deployment Options

#### Option A: Vercel (Recommended for Next.js)
1. Import repository into Vercel.
2. Framework Preset: **Next.js**.
3. Environment Variables:
   - `NEXT_PUBLIC_BASE_URL` = `https://api.sunbrilotechnologies.com`
   - Any SMTP variables configured.
4. Automatic deployment on push to `main` branch.

#### Option B: Standalone Node / VPS / Docker / PM2
1. Ensure Node.js 20+ is installed on the server.
2. Run build: `npm run build`.
3. Use PM2 to run and monitor the application:
   ```bash
   pm2 start npm --name "sunbrilo-website" -- start -- -p 3000
   pm2 save
   ```
4. Set up Nginx as a reverse proxy forwarding port 80/443 to `http://127.0.0.1:3000`.

---

## 8. Maintenance Notes, Cleanup & Recommendations

1. **Duplicate Directory Cleanup:**
   - Notice the folder `app/solutions/order-management copy` exists in the repository. This should be reviewed and removed to avoid route confusion.
   - Clean up temporary files (`content.txt`, `temp_blog_content.txt`, `temp_blog_data.txt`, `last_user_input.json`) prior to production releases.

2. **Image Remote Patterns:**
   - In `next.config.ts`, verify that `api.sunbrilotechnologies.com` is added under `images.remotePatterns` if backend-uploaded images (CMS blog covers, team photos) are hosted directly from the API domain without a separate CDN.

3. **SEO & Metadata:**
   - Each route inside `app/services/*` and `app/solutions/*` has its dedicated `layout.tsx` or metadata export. Keep titles, descriptions, and OpenGraph tags updated when launching new services or campaigns.

4. **Security & Credentials:**
   - Immediately migrate hardcoded Gmail App Passwords from route files to encrypted environment variables on the hosting platform.

---

## 9. Contacts & Ownership

- **Lead Developer / Engineering Team:** Sunbrilo Tech Core Team
- **Recruitment Contact:** recruitment@sunbrilotechnologies.com / Prajakta.Kale@sunbrilotechnologies.com
- **General Inquiries:** info@sunbrilotechnologies.com / sales@sunbrilotechnologies.com

