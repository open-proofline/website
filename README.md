# Proofline Website

This repository is the static public website for Proofline. Published here: [Proofline Website](https://proofline.live).

Proofline is an experimental open-source safety and evidence-capture project.
It is maintained by one person, is not operated as a for-profit business, and is
not production-ready emergency infrastructure.

This website is not the Go backend, React account portal, mobile client,
protocol repository, admin/operator tool, or production emergency system.

## Source Documents

Website copy summarizes the current project state. Keep public claims aligned
with these repositories:

- `open-proofline/.github`: organization profile and high-level project framing
- `open-proofline/server`: backend behavior, deployment boundaries, security
  model, and current API implementation
- `open-proofline/web-client`: account portal and incident-review prototype
  behavior

Read the relevant source documents before changing claims about implemented
features, safety behavior, security posture, deployment readiness, or future
work.

## Local Development

Requirements:

- Node.js 22, matching `.nvmrc`
- npm

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview a production build locally:

```bash
npm run preview
```

## Validation

Run these checks before opening or merging a pull request:

```bash
npm run format:check
npm run check
npm run lint
npm run build
npm audit --audit-level=moderate
git diff --check
```

CI runs the validation commands above, using a tracked-file whitespace scan in
place of local `git diff --check`. There is no separate unit or end-to-end test
runner configured yet. Do not add a placeholder test script that passes without
testing.

## Cloudflare Workers Static Assets

This site is configured for Cloudflare Workers static-assets deployment through
Wrangler. Astro builds the static output into `dist/`, and Wrangler reads
`wrangler.jsonc` to deploy that directory as static assets.

Build the site before deployment:

```bash
npm run build
```

Preview the Worker locally:

```bash
npm run cf:preview
```

Deploy from an authenticated maintainer environment:

```bash
npm run deploy
```

No Cloudflare API tokens, account IDs, project IDs, or deployment credentials
belong in this repository. CI is validation-only; it does not deploy this site.
If deployment automation is added later, configure required Cloudflare access
through repository or environment secrets, not committed files. Do not treat a
temporary preview URL as the canonical production site unless project
documentation explicitly changes the canonical site URL.

## Content Boundaries

The website may explain:

- Proofline's public project framing
- current server and web-client status
- planned iOS, Android, and protocol repositories
- self-hosting and future hosted-account direction
- safety and security boundaries
- source repository links

The website must not imply that Proofline currently provides:

- production readiness
- emergency dispatch or emergency-services integration
- guaranteed emergency response
- production mobile recording clients
- production GPS/location capture in clients
- trusted-contact SMS, email, push, or Messenger notifications
- live location/context sharing
- near-live audio/video upload as production behavior
- hosted-account billing, subscriptions, payment-gated product access, or
  active paid account creation
- backend, browser, or trusted-contact decryption
- key escrow or raw server-held media keys
- playable media export
- public admin/operator tooling

Future concepts must stay clearly future-tense unless the source repositories
document them as implemented.

## Branding And Assets

Proofline logos, favicons, and generated app icons live in `public/`. The
favicon set is based on the generated assets used by the web-client repository.

When updating assets:

1. Keep source assets under `public/`.
2. Verify favicon and manifest paths in `src/layouts/BaseLayout.astro`.
3. Build the site and visually check desktop and mobile navigation.
4. Do not copy web-client auth, API, session, or app internals into this site.

## Tailwind And Component Boundaries

The website uses Astro and Tailwind CSS. It may take visual direction from the
web client, but site components must remain site-local.

Do not turn Catalyst-derived ideas or copied component source into a standalone
UI kit, template, starter, package, or redistributed design asset set.

## Codex Prompts

Reusable Codex prompts live under `codex/prompts/`.

To use one:

1. Read `AGENTS.md`.
2. Read `codex/README.md`.
3. Choose the prompt that matches the task.
4. Inspect the source-of-truth docs named by the prompt.
5. Keep edits under `website/` unless the maintainer explicitly scopes
   otherwise.

Backlog prompts create local draft Markdown files first. They do not create
public GitHub issues unless the maintainer explicitly asks for that follow-up.

## Pull Request Review

Before merge, review that:

- source documents were checked for public claims
- current, experimental/partial, planned, and not implemented behavior remain
  separate
- safety wording still says Proofline is experimental and not an emergency
  service
- no backend, auth, recording, notification, billing, decryption, export, or
  admin/operator behavior was added
- no secrets, tokens, private deployment details, exploit details, or user
  safety data were added
- formatting, typecheck, lint, build, audit, and `git diff --check` passed
- screenshots or preview links were provided for visual changes

## License

Proofline Website is licensed under the GNU Affero General Public License v3.0
only (`AGPL-3.0-only`). See [`LICENSE`](LICENSE).
