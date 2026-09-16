# CamBest School

Bilingual (English / Khmer) school website built with **React + Vite**.

## Stack

- React 18 + Vite 5
- React Router (hash-based routing)
- Context API for language switching (EN / KM)
- Code-splitting per page via `React.lazy`

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Project structure

```
src/
├── components/
│   ├── layout/     # Header, Footer, LanguageSwitcher, Layout
│   └── ui/         # Carousel, PageHero, SectionHeading
├── context/        # LanguageContext (language state + translation lookup)
├── hooks/          # usePageTitle
├── pages/          # Home, About, Programs, Gallery, Contact
├── styles/         # style.css (migrated from original)
├── translations/   # en/km string dictionaries
├── App.jsx         # routes
└── main.jsx        # entry point
public/             # static assets (images)
legacy/             # original static HTML/CSS/JS for reference
```

## Key features

- **Single-page routing** — one route per page; language toggles content in place (no duplicated `_km` pages).
- **Language persistent** — choice saved in `localStorage`.
- **Reusable Carousel** — powers the hero, school, and teacher carousels.
- **Fixed legacy bugs** — Khmer school carousel, broken contact iframe, wrong `_km` links, missing `</div>` tags.