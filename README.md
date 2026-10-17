# Greys / engineering workbench

Personal site about platform engineering, automation, security, and creative coding.

Live: https://greys5.github.io

## Run locally

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. No build step, packages, external fonts, or API keys.

- `index.html`: accessible page content and high-level project notes.
- `style.css`: responsive graphite/lime workbench and reduced-motion support.
- `script.js`: system-map inspector and project filters; page content remains available without JavaScript.

GitHub Pages publishes the main branch root. Work notes intentionally omit internal names, endpoints, confidential code, and numerical outcome claims.

## Asset caching

The HTML versions CSS, JavaScript, and favicon URLs with their SHA-256 content hash (first 12 characters). When changing one of these files, update its `?v=` value in `index.html` to prevent browsers from mixing releases during GitHub Pages caching.
