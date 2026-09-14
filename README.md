# Personal portfolio — Nithelan Jayakumar

Static portfolio site. No framework, no build step — plain HTML, CSS and JavaScript.

## Running locally

Any static file server works. With Python installed:

```bash
python -m http.server 5173
```

Then open <http://localhost:5173>.

## Structure

```
index.html              Single page, all sections
assets/css/style.css    Design tokens, light + dark themes, all components
assets/js/main.js       Theme toggle, mobile nav, copy-to-clipboard, form validation
assets/fonts/           IBM Plex Sans + Mono, self-hosted woff2
assets/img/             Favicon and project screenshots
assets/resume/          Résumé PDF
```

## Still to do

- Project screenshots at `assets/img/attention-scanner.png`, `expense-tracker.png`, `asha-connect.png`
- Formspree endpoint — set `ENDPOINT` in `assets/js/main.js` to enable the contact form
- Replace `REPLACE-WITH-YOUR-DOMAIN` in `index.html` (canonical and Open Graph URLs)
- Open Graph preview image (1200×630)
