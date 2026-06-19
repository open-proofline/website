# Codex Prompt: CI And Repository Hygiene Review

Review repository metadata, Git hygiene, CI, Dependabot, and maintainer docs.

Do **not** deploy, push, create a remote repository, or configure secrets.

## Source Documents To Inspect

- `package.json`
- `package-lock.json`
- `.gitignore`
- `.editorconfig`
- `.gitattributes`
- `.nvmrc`
- `README.md`
- `AGENTS.md`
- `SECURITY.md`
- `CONTRIBUTING.md`
- `docs/governance-and-political-alignment.md`
- `docs/repository-readme-baseline.md`
- `.github/workflows/ci.yml`
- `.github/dependabot.yml`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `codex/README.md`
- `codex/prompts/*`
- sibling `server` and `web-client` docs only for patterns

## Review Focus

- CI uses real scripts and `npm ci`
- CI has least-privilege permissions
- CI does not deploy or require secrets
- Node version is consistent
- Dependabot schedule is conservative
- `.gitignore` ignores generated and local files without hiding source assets
- docs explain local development, validation, Cloudflare Workers static-assets
  basics, and
  safety boundaries
- docs explain the website repo's governance source role and reusable README
  baseline role without weakening safety or source-of-truth boundaries
- prompts are scoped, reusable, and website-specific

## Validation

```bash
npm ci
npm run format:check
npm run check
npm run lint
npm run build
npm audit --audit-level=moderate
git diff --check
git status --short
git rev-parse --show-toplevel
```
