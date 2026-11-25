# Arpit Pareek — Dark Research Portfolio

A responsive, dark academic/research-style portfolio with a restrained NASA-inspired visual atmosphere. Built with plain HTML, CSS and JavaScript: no framework, build step or package installation is needed.

## Design and motion

- Deep-space navy and near-black surfaces with cool cyan/blue accents.
- Subtle starfield drift and orbital motion around the opening portrait.
- Scroll-triggered section reveals and a thin page-reading progress indicator.
- Hover details on project/research cards, with restrained movement rather than game-like effects.
- Motion respects the visitor's `prefers-reduced-motion` accessibility setting.
- Responsive layout and a compact mobile navigation.

## Files

- `index.html` — page structure, metadata and image placement.
- `styles.css` — colours, typography, layout, responsive styling and animations.
- `content.js` — **the main file to edit**: introduction, biography, interests, project descriptions, press links, milestones and contact details.
- `script.js` — fills the page from `content.js`, handles mobile navigation, scroll reveals and reading progress.
- `assets/arpit-portrait.jpg` — blue-background portrait in the opening section.
- `assets/arpit-about.jpg` — black-suit side-facing photo in the profile/About section.
- `assets/favicon.svg` — AP monogram favicon.
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing.

## Change your content

1. Open `content.js` in VS Code or another code editor.
2. Edit the values under `hero`, `about`, `focus`, `projects`, `press`, `journey`, `principles` or `contact`.
3. Save and refresh `index.html` in your browser.
4. To add a project, copy one object inside `projects.items` and update its title, description, tags and links. Keep the commas and quotation marks valid.

The images are separate files in `assets/`. Keep their filenames unchanged when replacing them, or update their `src` values in `index.html`.

## Preview locally

Open `index.html` directly, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to the existing GitHub Pages site

1. Extract the ZIP.
2. Open the existing `arpit-portfolio` GitHub repository.
3. Upload/replace the files and the complete `assets` folder, keeping the same folder structure.
4. Commit the changes to the branch configured for GitHub Pages (usually `main`).
5. Check **Settings → Pages** if the repository does not deploy automatically.

Your existing URL should update after GitHub Pages publishes the commit:
`https://arpitprk89.github.io/arpit-portfolio/`

## Press-link note

The Hindu card links directly to the exact URL supplied by Arpit. No publication date or additional article details have been inferred. The Shekhawati Live link and date are retained from the original portfolio content.
