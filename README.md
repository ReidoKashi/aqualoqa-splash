# AQUALOQA Splash Page

Static splash page with responsive desktop and mobile video masks.

## Local Preview

Run a static server from this folder:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Deployment Package

Upload these files and folders together to any static host:

- `index.html`
- `styles.css`
- `script.js`
- `.nojekyll` if using GitHub Pages
- `assets/bg.webp`
- `assets/bg.png`
- `assets/video-repeat.mp4`
- `assets/video-mobile.mp4`

The site uses relative paths, so it can live at a domain root or inside a subpath.

## Video Breakpoints

- Desktop/tablet: `assets/video-repeat.mp4` at `1770 x 1080`
- Mobile: `assets/video-mobile.mp4` at `548 x 960`

## Background

- Preferred: `assets/bg.webp`, lossless WebP
- Fallback: `assets/bg.png`

## Audio Autoplay Note

The video is configured for autoplay with sound and no visible controls. Some browsers block audible autoplay until the visitor interacts with the page. The script retries playback with sound on the first tap/click or keypress without adding visible UI.
