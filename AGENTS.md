# AGENTS.md

## Project Rules

- This repository is `open-proofline/website`.
- This is the static public website for Proofline only.
- Keep changes under `website/` unless the maintainer explicitly scopes a
  cross-repository task.
- Treat sibling `.github`, `server`, and `web-client` repositories as read-only
  source-of-truth inputs.
- Treat `docs/governance-and-political-alignment.md` as this repository's
  canonical source for Proofline public governance posture, political alignment,
  cooperative/public-good framing, and anti-capture commitments.
- Treat `docs/repository-readme-baseline.md` as the baseline for future
  Proofline repository README structure and public voice. Other repositories
  may read or link these docs, but this repository task scope does not modify
  sibling repos.
- Inspect source docs before changing public claims about implemented behavior,
  planned behavior, security posture, deployment, or safety.
- Inspect the governance and README baseline docs before changing public claims
  about governance, political alignment, project-wide framing, funding posture,
  public-good structure, or reusable README guidance.
- Keep current, experimental/partial, planned/future, and not implemented
  behavior clearly separated.
- Do not imply production readiness, emergency dispatch, emergency-services
  integration, guaranteed emergency response, or a staffed response center.
- Do not add backend behavior, auth/session behavior, recording/capture
  behavior, notification delivery, hosted-account billing, payment-gated
  product access, decryption, export workflows, admin/operator UI,
  mobile-client behavior, or protocol behavior.
- Preserve Tailwind/Catalyst licensing boundaries if visual ideas from
  `web-client` are adapted. Do not create a standalone UI kit, template,
  starter, package, or redistributed design asset set.
- Never put secrets, tokens, private deployment details, exploit details,
  request bodies, uploaded bytes, plaintext, raw keys, wrapped-key ciphertext,
  object-store credentials, object keys, stored paths, or user safety data into
  public docs, issues, tests, screenshots, logs, or Codex artifacts.
- Backlog scanning creates draft Markdown files first. Do not create public
  GitHub issues from drafts until the maintainer has reviewed them.
- Do not push, deploy, configure Cloudflare secrets, or create remote
  repositories unless explicitly requested.

## Current Shape

- Astro static site.
- TypeScript.
- Tailwind CSS through the Vite Tailwind plugin.
- Static assets under `public/`.
- Routes under `src/pages/`.
- Layouts under `src/layouts/`.
- Site-local components under `src/components/`.
- Central site metadata in `site.config.mjs`.
- Project-level governance and README baseline docs under `docs/`.
- Cloudflare Workers static-assets deployment is configured through
  `wrangler.jsonc`; do not add deployment automation, account IDs, API tokens,
  or private deployment details without an explicit maintainer request.

## Commands

```bash
npm ci
npm run format:check
npm run check
npm run lint
npm run build
npm audit --audit-level=moderate --omit=dev
git diff --check
```

Use `npm run dev` for local preview and `npm run preview` for built-site
preview. Use `npm run cf:preview` for local Wrangler preview after building the
site. Run browser checks or screenshots when visual layout, navigation, assets,
or responsive behavior changes.

Do not claim validation passed unless the commands actually ran.

## Review Expectations

Before accepting changes, check:

- edits stayed in `website/`
- source documents were inspected for public claims
- governance and README baseline docs were inspected for public governance,
  political alignment, funding, public-good, source-map, or README-structure
  claims
- safety wording still says Proofline is experimental and not an emergency
  service
- future mobile, GPS/location, notifications, live context, near-live upload,
  hosted accounts, hosted-account billing, payment-gated product access,
  decryption, and key custody remain future-tense unless source docs say
  otherwise
- no backend/app/admin/decryption/notification/recording/hosted-account
  billing, payment-gated product access, or export behavior was added
- no secrets, tokens, private deployment details, exploit details, or user
  safety data were added
- validation passed
