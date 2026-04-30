# Zahra Afrookhteh — Personal Brand Site

Two decades building program management functions from the ground up.
Oracle · Salesforce · Sunverge · SFMTA · Zeeba.

## Stack
- Static HTML + React 18 (via UMD CDN) + Babel standalone
- Per-section CSS in `styles/`, per-section components in `components/`
- No build step — push and serve

## Run locally
Open `index.html` directly, or:
```bash
python3 -m http.server 8000
```

## Deploy to GitHub Pages
1. Push to `zahra-afrookhteh.github.io` (or any repo with Pages enabled)
2. The empty `.nojekyll` file disables Jekyll so the `components/` folder serves correctly
3. Settings → Pages → Source: `main` / root

## Structure
```
index.html              — entry, loads fonts + CSS + JSX
styles.css              — tokens (cream + terracotta) + nav/footer/buttons
styles/                 — one CSS file per section
components/             — one JSX file per section
  App.jsx               — root, nav, footer, scroll observer
  Hero.jsx              — name, throughline, CTA, marquee
  Metrics.jsx           — 6-tile numbers grid
  Transformations.jsx   — three things she does best
  Philosophy.jsx        — Kind Candor + 6 principles
  CaseStudies.jsx       — SFMTA, Sunverge, Oracle
  Now.jsx               — Zeeba Consulting, current
  Timeline.jsx          — career arc
  SkillsCerts.jsx       — toolkit + credentials
  Contact.jsx           — what's next + reach out
assets/                 — drop portrait.jpg here
```

## To finish
- [ ] Add a portrait at `assets/portrait.jpg` (4:5 aspect), swap the placeholder in `components/Hero.jsx`
- [ ] Update LinkedIn URL in `components/Contact.jsx` and `components/App.jsx` (footer)
- [ ] Optional: favicon, OG image, custom domain
