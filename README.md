# Amir Mustafa — Portfolio (v2)

A from-scratch rebuild of your portfolio: fully responsive, 30+ languages
preserved from the old site, a day/night toggle, and 10 selectable color
themes. Plain HTML/CSS/JS — no build step, no framework, no npm install.

## Run it locally

You just need a static file server (browsers block `fetch()` on `file://`
URLs, which the site uses to load translations, so double‑clicking
`index.html` won't work for the language switcher).

Pick whichever you have installed:

```bash
# Python (most common)
cd new-portfolio
python3 -m http.server 8000
# then open http://localhost:8000

# Node
cd new-portfolio
npx serve .
# then open the URL it prints

# VS Code
# Right-click index.html → "Open with Live Server"
```

## Project structure

```
new-portfolio/
├── index.html                     # all page markup
├── assets/
│   ├── css/style.css              # design system + all styling
│   ├── js/
│   │   ├── content.js             # structural data: which project/exp/award
│   │   │                          #   ids exist, which image goes with each
│   │   ├── themes.js              # the 10 color themes (day + night each)
│   │   └── main.js                # i18n loader, renderers, nav, toggles
│   ├── data/localization/*.json   # your original 30+ language files, as-is
│   └── images/                    # profile, project, award, QR images
```

## How the pieces fit together

- **Text content** (names, descriptions, experience bullet points, etc.)
  lives entirely in `assets/data/localization/*.json` — the same files
  from your old site. Nothing was retranslated; every language you already
  had still works.
- **Which projects/jobs/awards exist**, and which image belongs to each,
  is in `assets/js/content.js`. To add a new project, add one object to
  the `PROJECTS` array and matching keys to `en.json` (and optionally the
  other language files — English is used as a fallback for anything
  missing).
- **Color themes** are defined in `assets/js/themes.js` as plain color
  values — no CSS build step. To tweak a theme, edit the hex values there.
- **`assets/js/main.js`** wires it all together: loads the right language
  JSON, renders every section from the manifests, and drives the language
  select, theme select, day/night toggle, mobile nav, and testimonial
  carousel.

## Making changes

| I want to...                        | Edit this |
|--------------------------------------|-----------|
| Change any text (any language)       | `assets/data/localization/<lang>.json` |
| Add/remove a project, job, award     | `assets/js/content.js` |
| Add/edit a color theme               | `assets/js/themes.js` |
| Change fonts, spacing, layout        | `assets/css/style.css` |
| Change page structure/sections       | `index.html` |
| Replace a photo                      | drop the file in `assets/images/...` and update the path in `content.js` or `index.html` |

## Deploying to GitHub Pages (same as your old site)

1. Copy everything inside `new-portfolio/` into the root of your
   `AmirMustafa.github.io` repo (replacing the old files — you may want
   to keep a backup branch of the old version first).
2. Commit and push to the `main` branch.
3. GitHub Pages will publish it automatically at
   `https://amirmustafa.github.io/` within a minute or two.

No build step, no CI needed — it's static files.

## Notes

- Fonts (Google Fonts) and icons (Font Awesome, via cdnjs) load from a
  CDN in `index.html`. This needs an internet connection when the page
  loads — normal for any live website, just flagging it in case you test
  fully offline.
- Images were resized/compressed from your originals to keep the site
  fast; if you want higher-resolution versions swapped in, replace the
  files in `assets/images/` (same filenames) with your originals.
- A handful of images from your old repo (extra project screenshots,
  duplicate QR codes, generic Microsoft Learn badges, brand/company
  logos) weren't wired into this version to keep things focused — let me
  know if you'd like any of them added back in (e.g. company logos next
  to each job in the Experience timeline).
