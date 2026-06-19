# Codex Prompt: SEO And Metadata Review

Review static-site metadata, sitemap, robots, favicons, and social preview
assets.

Do **not** change production domain assumptions unless the maintainer confirms
the canonical site URL.
Do **not** add analytics, tracking scripts, remote fonts, or deployment secrets.

## Source Documents To Inspect

- `README.md`
- `AGENTS.md`
- `site.config.mjs`
- `astro.config.mjs`
- `src/layouts/BaseLayout.astro`
- `src/pages/robots.txt.ts`
- `public/site.webmanifest`
- `public/*favicon*`
- `public/android-chrome-*.png`
- `../.github/profile/README.md`

## Review Focus

- title template
- page descriptions
- canonical URLs from central config
- Open Graph and Twitter metadata
- favicon links and manifest
- sitemap generation
- robots output
- no temporary preview URL treated as canonical without confirmation
- no overclaims in metadata descriptions
- metadata, title, Open Graph, Twitter, manifest, and social-preview text remain
  mostly plain, concise, and source-of-truth aligned
- dry humour or personality is not added to metadata where it could confuse
  search results, social previews, accessibility tooling, or safety/status
  expectations
- metadata does not imply production readiness, emergency response, legal
  reliability, implemented future behavior, decryption, notifications, hosted
  accounts, billing, or stronger security than source docs support

## Validation

```bash
npm run format:check
npm run check
npm run lint
npm run build
git diff --check
```

Inspect built `dist/robots.txt`, `dist/sitemap-index.xml`, and representative
HTML head output.
