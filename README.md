# ⚡ Battle Core — Digital Agency & Technology Solutions

> **Empowering forward-thinking enterprises with end-to-end digital transformation, cutting-edge UI/UX engineering, and scalable web solutions.**

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.11-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.525.0-F56565?style=for-the-badge)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Primary & Alternative Contact Matrix](#-primary--alternative-contact-matrix)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Component Breakdown](#-component-breakdown)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [SEO & Performance Optimizations](#-seo--performance-optimizations)
- [License & Copyright](#-license--copyright)

---

## 🌟 Overview

**Battle Core** is a next-generation digital agency platform tailored for modern businesses seeking high-impact web design, robust engineering, and seamless digital deployment. Built using **React 19**, **Vite 7**, **Tailwind CSS v4**, and **GSAP ScrollTrigger**, the site features ultra-fluid micro-interactions, dark-mode glassmorphism aesthetics, responsive carousels, and dual-channel communication lines.

---

## 🚀 Key Features

- **Futuristic Visual Identity**: Deep dark canvas (`#001515`) paired with energetic lime-green highlights (`#AAD468`) and glassmorphic card overlays.
- **Scroll-Triggered Motion**: Cinematic GSAP animations and scroll interactions across all major page sections.
- **Dual-Channel Contact System**: Clear, segregated **Primary** and **Alternative** communication options ensuring zero downtime for client requests.
- **Interactive Case Studies**: Smooth portfolio showcasing real-world client success stories and project outcomes.
- **Multi-Category Services Carousel**: Interactive slider with category filters, dynamic layout responsiveness, and directional controls.
- **Leadership & Team Showcase**: Modern member profiles with status badges, hover reveals, and touch-enabled carousel navigation.
- **Lead Capture Contact Form**: Validated contact form equipped with subject selection dropdown, interactive status indicators, and anti-spam verification.
- **Fully Responsive Navigation**: Floating pill navbar on desktop transitioning into an animated drawer on mobile viewports.

---

## 📞 Primary & Alternative Contact Matrix

Battle Core provides multiple verified communication lines to ensure uninterrupted collaboration, rapid SLA response times, and emergency support availability:

| Communication Channel | Badge | Primary Details | Alternative / Secondary Details | Availability & SLA |
| :--- | :---: | :--- | :--- | :--- |
| **📧 Corporate & Business Email** | `Primary` | **[hello@battlecore.com](mailto:hello@battlecore.com)** | — | Response within 24 hours |
| **🛠️ Priority Technical Support** | `Alternative` | — | **[support@battlecore.com](mailto:support@battlecore.com)** | 24/7 Dedicated Client Desk |
| **📞 Telephone / Hotline** | `Primary` | **[+1 (800) 582-2673](tel:+18005822673)** | — | Mon – Fri: 9:00 AM – 6:00 PM EST |
| **💬 Direct Line & WhatsApp** | `Alternative` | — | **[+1 (555) 349-8291](tel:+15553498291)** | Urgent calls & instant chat |
| **🏢 Global Headquarters** | `HQ` | **100 Innovation Way, Suite 400**<br>Austin, TX 78701, United States | — | Corporate HQ & Executive Suite |
| **🔬 Regional Innovation Hub** | `Alternative` | — | **75 Silicon Vista Blvd, Floor 8**<br>San Francisco, CA 94105, United States | Engineering & Research Lab |

### 🌐 Official Social Channels

- **LinkedIn**: [linkedin.com/company/battlecore](https://linkedin.com/company/battlecore)
- **Twitter / X**: [twitter.com/battlecore](https://twitter.com/battlecore)
- **Instagram**: [instagram.com/battlecore](https://instagram.com/battlecore)
- **Facebook**: [facebook.com/battlecore](https://facebook.com/battlecore)

---

## 🛠️ Tech Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | [React](https://react.dev/) | `^19.1.0` | Declarative, component-based user interface |
| **Build Tool & Dev Server** | [Vite](https://vitejs.dev/) | `^7.0.4` | Lightning-fast HMR and optimized production bundling |
| **Styling & CSS** | [Tailwind CSS](https://tailwindcss.com/) | `^4.1.11` | Modern utility-first styling with `@tailwindcss/vite` |
| **Animation Engine** | [GSAP](https://greensock.com/) | `^3.13.0` | Scroll-triggered timelines, tweens, and entrance effects |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.525.0` | Lightweight, scalable vector iconography |
| **Routing** | [React Router](https://reactrouter.com/) | `^7.6.3` | Client-side routing support |

---

## 📂 Project Architecture

```
Battle-Core/
├── public/                 # Static assets & favicon icons
├── src/
│   ├── assets/             # Brand logos, team portraits, case study imagery
│   ├── components/         # Reusable UI sections
│   │   ├── AppLoader.jsx   # Animated fallback loading skeleton
│   │   ├── CaseStudies.jsx # Interactive project showcases with GSAP transitions
│   │   ├── ContactUs.jsx   # Lead capture form & primary/alternative contact matrix
│   │   ├── Footer.jsx      # Multi-column sitemap, newsletter signup & social links
│   │   ├── Hero.jsx        # Landing hero banner, headline & client logos
│   │   ├── Navbar.jsx      # Floating desktop pill navigation & mobile menu drawer
│   │   ├── Services.jsx    # Categorized services slider with directional controls
│   │   ├── Team.jsx        # Leadership & engineering team carousel
│   │   └── WhyUs.jsx       # Value proposition cards & differentiator grid
│   ├── pages/
│   │   └── Home.jsx        # Main landing page assembling all components
│   ├── App.jsx             # Top-level application component
│   ├── index.css           # Global Tailwind CSS styles and font definitions
│   └── main.jsx            # Application entry point with React DOM rendering
├── index.html              # HTML5 template with Battle Core SEO & OpenGraph meta tags
├── package.json            # Scripts and project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration with React & Tailwind plugins
```

---

## 💻 Getting Started & Local Development

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "Battle-Core"
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🧩 Component Breakdown

### 1. `Navbar.jsx`
- Floating pill structure with backdrop blur (`backdrop-blur-2xl`) and subtle borders.
- Responsive toggle button with animated sliding drawer on mobile viewports.
- High-contrast CTA button for immediate client conversion.

### 2. `Hero.jsx`
- Prominent headline: *Design. Develop. Deploy.*
- Top announcement tag emphasizing Battle Core's user-centric conversion focus.
- Interactive partner brand logos strip showcasing ecosystem trust.

### 3. `CaseStudies.jsx`
- Real-world case study presentations with high-resolution imagery.
- Scroll-triggered entrance animations powered by GSAP.

### 4. `Services.jsx`
- Horizontal scrolling carousel displaying specialized services: UI/UX, Web Architecture, Mobile Apps, Growth Strategy, and Cloud DevOps.
- Intuitive navigation buttons with boundary disabling.

### 5. `WhyUs.jsx`
- Interactive card grid highlighting core differentiators: Strategic Innovation, High-Velocity Delivery, End-to-End Ownership, and Technical Excellence.

### 6. `Team.jsx`
- Visual cards displaying agency talent with category tags and role descriptions.
- Responsive carousel with desktop pagination arrows and touch swipe support.

### 7. `ContactUs.jsx`
- **Dual-Channel Matrix**: Displays badges for `Primary`, `Alternative`, and `HQ` channels.
- Full interactive inquiry form with subject picker, custom input icons, and message dispatch simulations.

### 8. `Footer.jsx`
- 5-column responsive layout featuring service directories, direct contact hotline, headquarters locations, and newsletter subscription form.
- Social links to Battle Core's official profiles and copyright notice.

---

## 🎨 Design System & Aesthetics

- **Primary Accent**: `#AAD468` (Lime Glow) — energetic, modern, and forward-looking.
- **Secondary Accent**: `#9BC859` (Vibrant Olive / Meadow).
- **Deep Canvas Background**: `#001515` (Teal Void) — immersive dark-mode foundation.
- **Card Backgrounds**: `#002424` / `white/5` with backdrop blur (`backdrop-blur-sm`).
- **Typography**: Google Fonts [`Sora`](https://fonts.google.com/specimen/Sora) — contemporary geometric sans-serif engineered for digital readability.

---

## 🔍 SEO & Performance Optimizations

- **Meta Tags**: Fully configured `<title>`, description, keywords, and author tags tailored for search engines.
- **OpenGraph & Twitter Cards**: High-resolution social previews for rich embeds when shared across Twitter, LinkedIn, and messaging apps.
- **Resource Preloading**: Strategic `rel="preload"` hints in `index.html` for critical imagery assets to optimize Largest Contentful Paint (LCP).
- **Optimized Bundle**: Built with Vite 7 tree-shaking, code-splitting, and CSS minification.

---

## 📄 License & Copyright

© 2026 **Battle Core**. All rights reserved.  
Unauthorized distribution, modification, or commercial reproduction is strictly prohibited.
