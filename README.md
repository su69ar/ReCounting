# ReCounting

<div align="center">

**Professional Accounting & Tax Services for SMEs and Expats in Bali**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?logo=greensock)](https://gsap.com/)

[Website](https://recounting.asia) · [Bali Micro Technology](https://balimicrotechnology.com)

</div>

---

## Overview

ReCounting is a modern web application for professional accounting and tax compliance services, specifically designed for small-to-medium enterprises (SMEs) and expatriates operating in Bali, Indonesia.

This project is developed and maintained by **[Bali Micro Technology](https://balimicrotechnology.com)**.

## Features

- **Bookkeeping Services** — Comprehensive financial record management
- **Tax Compliance** — Indonesian tax filing and regulatory compliance
- **Financial Reporting** — Clear, actionable business insights
- **Expat Tax Advisory** — Specialized guidance for foreign nationals
- **Free Consultation** — No-obligation initial assessment

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [GSAP](https://gsap.com/) | 3.14 | Premium animations |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/su69ar/ReCounting.git
cd ReCounting

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── blog/               # Blog articles
│   ├── contact/            # Contact page
│   ├── free-consultation/  # Consultation booking
│   ├── services/           # Service pages
│   │   ├── bookkeeping/
│   │   └── tax-compliance/
│   └── api/                # API routes
├── components/
│   ├── animations/         # GSAP animation components
│   ├── layout/             # Header, Footer, Navigation
│   ├── seo/                # SEO & JSON-LD components
│   └── ui/                 # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & configuration
├── data/                   # Static data & content
└── styles/                 # Global styles
```

## Animation System

ReCounting features a sophisticated motion design system built with GSAP:

- **Reveal animations** — Scroll-triggered content reveals
- **Stagger groups** — Coordinated element animations
- **Split text headings** — Character-by-character text reveals
- **Story scroll** — Pinned storytelling sections
- **Micro-interactions** — Delightful hover effects

All animations respect `prefers-reduced-motion` for accessibility.

## SEO

- Server-side metadata with Next.js Metadata API
- JSON-LD structured data (ProfessionalService, FAQ, Breadcrumbs)
- Dynamic OpenGraph and Twitter images
- Automated sitemap and robots.txt generation

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Lead capture webhook (optional)
LEAD_WEBHOOK_URL=
LEAD_WEBHOOK_SECRET=
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/su69ar/ReCounting)

### Other Platforms

```bash
npm run build
npm run start
```

## Contact

**ReCounting**
- Website: [recounting.asia](https://recounting.asia)
- Email: recountingasia@gmail.com
- WhatsApp: +62 811-3940-4640
- Address: Jalan Sedap Malam No 9A, Sanur Kaja, Denpasar, Bali

**Developed by**
- [Bali Micro Technology](https://balimicrotechnology.com)

## License

This project is proprietary software. All rights reserved.

---

<div align="center">

**Part of [Bali Micro Technology](https://balimicrotechnology.com)**

</div>
