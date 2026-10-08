# Nithelan Jayakumar — portfolio

Personal portfolio built with [Astro](https://astro.build) and TypeScript. Plain CSS
with design tokens and cascade layers; client-side JavaScript only where the page
needs it (header menu, theme switch, copy-email, and the project dialogs).

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check, then build to dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  components/     Header, Footer, Hero, ProjectPlates, Achievements, Stack, Freelance, …
  content/       projects/*.md — one case study each, schema in content.config.ts
  data/           verified facts: site, journey, stack
  layouts/        Base.astro — head, theme bootstrap, view transitions
  pages/          routes
  styles/         tokens.css (colour, type, spacing) + global.css (layers)
public/           fonts, résumé, favicon
docs/             migration plan and fact sources
```

Every number on the site is traced to a repository or supplied by Nithelan — see
`docs/migration-plan.md`. The static site this replaced is kept at the git tag
`legacy-static-v1`.

## Deploy

Vercel detects Astro automatically; the build output is fully static.
