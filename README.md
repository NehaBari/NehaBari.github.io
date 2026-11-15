# Little Corner — Quarto Website Starter

A small, privacy-conscious, one-page Quarto website featuring a playful Bugs Bunny tribute. No real name, contact details, analytics, tracking scripts, remote fonts, or API keys are included.

## Open the preview now

Open `preview/index.html` in your browser. This preview is generated from the same `content/home.html` source that Quarto uses, so you can see the design without installing Quarto first.

## Work with Quarto

1. Install Quarto from <https://quarto.org/docs/get-started/>.
2. In this directory, run `quarto preview`.
3. Edit `content/home.html` to change the page text and layout.
4. Edit `styles.css` to change colors, spacing, and animations.
5. Edit or replace `assets/rabbit.svg` to update the illustration.

The `index.qmd` page includes `content/home.html`. The generated site uses `_quarto.yml`. If you change the source, regenerate the stand-alone preview with `node scripts/build-preview.mjs`.

## Later: publish to GitHub Pages

Do this **only after reviewing the page for personal information**.

1. Create a public repository, typically `YOUR_USERNAME.github.io`.
2. In `_quarto.yml`, change `output-dir: _site` to `output-dir: docs`.
3. Run `quarto render`.
4. Commit and push the whole project, including `docs/`, to `main`.
5. In GitHub, use **Settings → Pages → Deploy from a branch → main → /docs**.

The website will be at `https://YOUR_USERNAME.github.io`. GitHub Pages and a public GitHub repository disclose the chosen GitHub username; use a separate professional account if you want separation from your personal identity. Also enable GitHub's `noreply` commit email before your first public commit.

## Notes

- The cartoon-rabbit illustration is an original SVG homage, not official Bugs Bunny artwork.
- This is an unofficial fan-made starter, not affiliated with Warner Bros.
- This starter has not been published. Quarto is not installed in the build environment, so the Quarto render itself still needs local verification.
