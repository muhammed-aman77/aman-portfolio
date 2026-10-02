# Aman Universe

An existing React 18 and Vite portfolio for Muhammed Aman Shaminas. The site presents a personal digital universe, an interactive domain map, five confirmed academic or prototype projects, and the existing resume PDF.

## Stack

- React 18 and React Router
- Vite
- Lucide React
- CSS modules by page/component with shared design tokens
- Space Grotesk and DM Mono web fonts

## Routes

- `/` — interactive system map and project index
- `/work` — five-project archive and schematic preview
- `/work/:projectId` — project case study
- `/about` — academic profile and project-linked technologies
- `/lab` — empty index for future published notes
- `/contact` — existing email and profile links
- `/resume` — viewer for the PDF in `public/resume.pdf`
- `/404` — not-found page; unknown routes use the same page

Project content and the existing contact links are held in `src/data/portfolioData.js`. Project descriptions are intentionally concise where further details have not been supplied. Proposed features are labeled as proposed; no performance results are stated.

## Local Development

Use Node.js 18 or newer.

```bash
npm install
npm run dev
```

Vite serves the development app at `http://localhost:3000`.

## Build and Preview

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. Vite's SPA fallback supports direct navigation to portfolio routes in local preview and typical Vercel deployments.

## Resume

The viewer and navigation use the actual `/resume.pdf` asset from `public/resume.pdf`. Replace that file when the resume changes; the viewer includes open-in-new-tab and download actions.