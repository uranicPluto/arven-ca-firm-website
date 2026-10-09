# ARVÉN & CO. — Chartered Accountants & Business Advisors

> **A modern, institutional website prototype and client acquisition platform for Indian Chartered Accountancy practices & advisory firms.**

---

## 🌟 Overview

**ARVÉN & CO.** is a modern Chartered Accountancy and business advisory digital presence based in Pune, Maharashtra. Built with an editorial aesthetic, generous whitespace, confident typography, and calm authority, it balances statutory precision with practical commercial advisory.

### Key Highlights
- **Premium Editorial Aesthetics**: Deep Navy (`#081A2B`), Warm Ivory (`#F7F6F1`), and Muted Gold/Brass (`#B79A61`).
- **Core Practice Areas**:
  1. **Tax & GST**: Income tax advisory, GST filings, and assessment defense.
  2. **Accounting & Bookkeeping**: Monthly ledger maintenance, bank reconciliation, and MIS reporting.
  3. **Audit & Assurance**: Statutory audit, Tax audit u/s 44AB, and internal controls.
  4. **Business Advisory**: Financial planning, due diligence, and capital structuring.
  5. **Company Formation & Compliance**: Private Limited, LLP, and annual ROC governance.
  6. **Virtual CFO**: Cash-flow planning, budgeting, and fractional financial leadership.
- **Client Conversion Channels**:
  - **Consultation Booking Flow**: Modal & full-page booking with reference ID generation.
  - **WhatsApp Advisory Desk**: Floating widget with practice area selectors and pre-filled messaging.
  - **Mobile Sticky Action Dock**: 1-tap phone dialer, direct WhatsApp chat, and consultation trigger.
- **Modular White-Label Data Layer**: Rebrand the entire firm (name, phone numbers, branch addresses, city, team bios) by editing a single configuration file (`src/data/firmConfig.ts`).
- **ICAI Regulatory Compliance**: Fully compliant with the Chartered Accountants Act, 1949 and ICAI non-solicitation guidelines.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vite.dev/) with `@tailwindcss/vite`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/uranicPluto/arven-ca-firm-website.git
cd arven-ca-firm-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates the optimized production build in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── consultation/      # Consultation booking form & modal wizard
│   ├── home/              # 10 core homepage sections
│   ├── layout/            # Navbar, Footer, StickyMobileCTA, WhatsAppFloat
│   ├── seo/               # SEOHead component with JSON-LD schema
│   └── ui/                # Button, Badge, Modal, SectionHeading
├── data/
│   ├── firmConfig.ts      # Global white-label configuration
│   ├── industriesData.ts  # Industry vertical solutions
│   ├── insightsData.ts    # Practical articles & tax perspectives
│   ├── servicesData.ts    # 6 core practice areas & deliverables
│   ├── teamData.ts        # Partner credentials & leadership profiles
│   └── testimonialsData.ts# Authentic client feedback
├── pages/                 # Full pages for routing
├── types/                 # TypeScript type declarations
├── App.tsx                # App routes & global state
├── main.tsx               # Root entrypoint
└── index.css              # Tailwind v4 theme tokens
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
