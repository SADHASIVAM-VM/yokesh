# Yokesh D — Premium Personal Portfolio Website
### MBA Candidate — Finance & Operations

A luxury editorial-style personal portfolio website for **Yokesh D**, an MBA candidate specializing in Finance and Operations with a solid background in Commerce, accounting systems, and financial research.

---

## 🏛️ Design Concept & Visual Identity
- **Design Philosophy**: High-end financial publication aesthetic inspired by investment banking, private wealth management, and luxury editorial design (Financial Times, McKinsey, Morgan Stanley).
- **Color Architecture**:
  - Primary Background: `#0B1018` (Obsidian Navy)
  - Secondary Background: `#111923` (Deep Slate Navy)
  - Surface: `#151F2A` (Rich Dark Surface)
  - Primary Accent: `#C6A36A` (Champagne Gold)
  - Secondary Accent: `#A98A5B` (Muted Brass Gold)
  - Primary Text: `#F1EEE7` (Ivory Cream)
  - Secondary Text: `#A5ADB7` (Soft Slate Silver)
  - Hairline Separators: `rgba(255, 255, 255, 0.10)` & `rgba(198, 163, 106, 0.22)`
- **Typography**:
  - Headings: Playfair Display & Cormorant Garamond
  - Body & UI: Inter & Manrope
  - Micro-Labels & Badges: Monospace / Uppercase Tracking-Widest

---

## 📂 Architecture & Components

```
src/
├── components/
│   ├── Navbar.jsx           # Minimal sticky navigation with monogram, live status indicator & anchor links
│   ├── Hero.jsx             # Cinematic editorial hero with asymmetric layout & financial research matrix
│   ├── About.jsx            # Section 01: Professional Profile (editorial 2-col with lead quote & pillars)
│   ├── Education.jsx        # Section 02: Academic Background (MBA Candidate & B.Com timeline)
│   ├── Experience.jsx       # Section 03: Professional Experience (Visomax & Universal Engineering internships)
│   ├── Skills.jsx           # Section 04: Areas of Expertise (4 distinct categories, zero fake percentage bars)
│   ├── Certifications.jsx   # Section 05: Certifications (Tally Prime & SAP FICO panels with date badges)
│   ├── Interests.jsx        # Section 06: Professional Interests (Asymmetric 4-part analytical composition)
│   ├── Languages.jsx        # Section 07: Communication (English & Tamil presentation)
│   ├── Contact.jsx          # Section 08: Let's Connect (Direct inquiry composer, phone, email & LinkedIn)
│   ├── Footer.jsx           # Editorial footer with YD. monogram, copyright & back-to-top interaction
│   ├── SectionHeading.jsx   # Standardized luxury section headers with gold accents
│   ├── AnimatedSection.jsx  # Staggered Framer Motion scroll wrappers
│   └── ResumeModal.jsx      # Interactive full-screen resume document viewer & PDF download launcher
├── data/
│   └── portfolio.js         # Centralized, single-source-of-truth portfolio data
├── App.jsx                  # Single-page layout assembly
├── main.jsx                 # Clean React 18 root
└── index.css                # Tailwind directives, subtle grid textures, and custom scrollbars
public/
├── resume.pdf               # Verified, production-ready PDF resume document
└── logo.svg                 # Gold YD monogram brand icon
```

---

## ⚡ Tech Stack
- **Framework**: React.js 18 + Vite
- **Styling**: Tailwind CSS with custom editorial design tokens
- **Motion**: Framer Motion for subtle, restrained editorial reveals
- **Icons**: Lucide React for crisp, minimalist iconography
- **Typography**: Google Fonts (Playfair Display, Cormorant Garamond, Inter, Manrope)

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
