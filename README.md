# Muhammed Aman Shaminas — Engineering Portfolio

A premium, modern personal portfolio website built for **Muhammed Aman Shaminas** (3rd-year Artificial Intelligence & Machine Learning engineering student).

Designed with a dark, high-contrast, technical developer aesthetic featuring precision typography, subtle background grid mechanics, terminal telemetry elements, and responsive architecture.

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Bundler & Tooling**: Vite
- **Icons**: Lucide React
- **Styling**: Modular CSS System with custom CSS variables (no bloated third-party CSS frameworks)
- **Typography**: Inter, Plus Jakarta Sans, JetBrains Mono

---

## 📁 Project Structure

```text
aman-portfolio/
├── dist/                      # Production build output
├── node_modules/              # Dependencies
├── public/                    # Static assets & favicon
├── src/
│   ├── components/            # Modular React components
│   │   ├── ActionModal.jsx    # System notifications & config hints
│   │   ├── About.jsx          # Technical profile narrative & focus pillars
│   │   ├── Contact.jsx        # Direct communication CTA & channel placeholders
│   │   ├── Education.jsx      # Academic foundation & timeline placeholder
│   │   ├── Footer.jsx         # Minimalist technical footer
│   │   ├── Hero.jsx           # Editorial typography & developer telemetry
│   │   ├── Navbar.jsx         # Sticky blur header & mobile drawer
│   │   ├── ProjectCard.jsx    # Individual project card with hover states
│   │   ├── Projects.jsx       # Selected engineering builds showcase
│   │   └── Skills.jsx         # Categorized skills matrix
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all portfolio data
│   ├── styles/
│   │   ├── about.css          # Styles for About section
│   │   ├── contact.css        # Styles for Contact section
│   │   ├── education.css      # Styles for Education section
│   │   ├── footer.css         # Styles for Footer
│   │   ├── global.css         # Base resets, subtle grid, responsive utilities
│   │   ├── hero.css           # Styles for Hero section & telemetry
│   │   ├── navbar.css         # Styles for Navbar & mobile drawer
│   │   ├── projects.css       # Styles for Projects showcase
│   │   ├── skills.css         # Styles for Skills matrix
│   │   └── variables.css      # Design tokens (colors, typography, radii)
│   ├── App.jsx                # Main application wrapper
│   └── main.jsx               # React entry point
├── index.html                 # HTML shell with Google Fonts & meta tags
├── package.json               # Dependencies & build scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Development

To start the local development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

To build the static optimized assets for deployment:

```bash
npm run build
```

The output will be placed in the `dist/` directory, ready to be hosted on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Updating Content & Placeholders

All portfolio text, projects, skills, education, and links are managed in a single file:
👉 **`src/data/portfolioData.js`**

### When Ready for Public Deployment:

1. **Resume**:
   - Place your resume PDF in the `public/` directory (e.g., `public/aman-resume.pdf`).
   - In `src/data/portfolioData.js`, update `personalInfo.contact.resumePlaceholder` to `/aman-resume.pdf`.

2. **Contact Links**:
   - In `src/data/portfolioData.js`, update:
     - `emailPlaceholder` -> Your actual email address
     - `githubPlaceholder` -> Your GitHub profile URL
     - `linkedinPlaceholder` -> Your LinkedIn profile URL

3. **Project Repositories & Demos**:
   - In `src/data/portfolioData.js`, update `githubUrl` and `liveUrl` inside each project object in the `projects` array.

4. **Education Timeline**:
   - In `src/data/portfolioData.js`, replace `periodPlaceholder` with your exact academic timeline (e.g., `2022 — 2026`).
