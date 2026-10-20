# Greys — a curious corner of the internet

Personal profile, high-level project notes, and a future blog for curious technical minds.

Live: https://greys5.github.io

## Local preview

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. No build step, packages, external fonts, or API keys.

- `index.html`: profile, project notes, toolbox, and clearly labeled blog placeholder.
- `style.css`: responsive retro paper/teal/terracotta design with reduced-motion support.
- `script.js`: cycles the character’s curious questions; all content remains readable without JavaScript.
- `assets/greys-character.png`: the character image supplied by Greys, used as-is.

GitHub Pages publishes the main branch root. Work notes omit internal names, endpoints, confidential code, and numerical outcome claims. No blog posts have been published yet.

## Asset caching

CSS, JavaScript, and favicon URLs use a SHA-256 content hash (first 12 characters) in `?v=`. Update the corresponding hash in `index.html` whenever an asset changes, so browsers do not mix releases.

## Languages

The header EN/ES switch translates visible copy, questions, accessibility labels, title, and description. English is the default; an explicit choice is remembered locally when storage is available. Spanish uses Argentine voseo. With JavaScript disabled, the English page remains readable and the switch is hidden.
