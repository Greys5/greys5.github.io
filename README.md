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
- `assets/greys-character-flat.png`: a new transparent character illustration based on Greys’s supplied reference. The original is retained as `assets/greys-character.png`.

GitHub Pages publishes the main branch root. Work notes omit internal names, endpoints, confidential code, and numerical outcome claims. No blog posts have been published yet.

## Asset caching

CSS, JavaScript, and favicon URLs use a SHA-256 content hash (first 12 characters) in `?v=`. Update the corresponding hash in `index.html` whenever an asset changes, so browsers do not mix releases.

## Languages

The header EN/ES switch translates visible copy, questions, accessibility labels, title, and description. English is the default; an explicit choice is remembered locally when storage is available. Spanish uses neutral phrasing without Argentine voseo. With JavaScript disabled, the English page remains readable and the switch is hidden.

## DevOps diagram attribution

`assets/devops-toolchain.svg` is **Devops-toolchain.svg** by **Kharnagy**, sourced from https://commons.wikimedia.org/wiki/File:Devops-toolchain.svg under **CC BY-SA 4.0**: https://creativecommons.org/licenses/by-sa/4.0/. The source SVG is unchanged. A separate SVG cross-out is displayed over it. This composite diagram is also made available under CC BY-SA 4.0; this attribution does not claim endorsement by the original author.

## Language-switch Easter egg

An explicit switch into Spanish shows a 210px JLo “mi gente latino” still-image popup for 3.5 seconds. Switching back, resizing, Escape, or the close button dismisses it. Restoring a saved language does not show it. The source is [Tenor’s Jlo Mi meme](https://tenor.com/view/jlo-mi-gente-latino-latina-gif-18597397); the downloaded thumbnail is a single-frame GIF, hosted locally with no audio or third-party runtime request.

## Toolbox organization and icons

Tools are grouped by delivery-lifecycle activity. AWS is the cloud platform; its individual services appear by purpose. Networking and Web Audio use original concept symbols. Logos are hosted locally; icon provenance is listed in `assets/tools/SOURCES.md`, with upstream license notices alongside the assets. AWS images are used unchanged.
