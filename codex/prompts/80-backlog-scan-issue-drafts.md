# Codex Prompt: Backlog Scan And Issue Drafts

Scan the website repository and create local backlog issue drafts for future
work.

Do **not** create GitHub issues.
Do **not** run `gh issue create`.
Do **not** modify website source unless the maintainer separately asks for a
fix.
Do **not** include sensitive security details in public drafts.

## Repository

```text
open-proofline/website
```

## Branch Scope

Record:

```bash
git status --short --branch --untracked-files=all
git branch --show-current
git rev-parse HEAD
```

Use the current branch as the draft scope. If detached, stop and ask for the
intended branch scope.

## Source Documents To Inspect

- `README.md`
- `AGENTS.md`
- `SECURITY.md`
- `CONTRIBUTING.md`
- `../.github/profile/README.md`
- `../server/README.md`
- `../server/SECURITY.md`
- relevant `../server/docs/*`
- `../web-client/README.md`
- `../web-client/SECURITY.md`
- `src/pages/*`
- `src/components/*`
- `src/layouts/*`
- `src/styles/global.css`
- `public/*`
- `.github/workflows/*`
- `.github/dependabot.yml`
- `codex/prompts/*`

## Draft Location

Create drafts under:

```text
.backlog-drafts/YYYY-MM-DD/<branch-slug>/
```

If the date is unavailable, use:

```text
.backlog-drafts/current/<branch-slug>/
```

Create a `README.md` index and numbered public drafts named
`NNN-short-kebab-title.md`.

## Candidate Areas

- content gaps or stale source links
- accessibility and responsive layout issues
- metadata, sitemap, robots, and favicon issues
- security or safety claim ambiguity
- repository hygiene and CI gaps
- validation gaps
- Codex workflow improvements
- Cloudflare Pages documentation gaps

## Sensitive Findings

If a likely vulnerability should not be public, create a private note under:

```text
.backlog-drafts/YYYY-MM-DD/<branch-slug>/private-notes/
```

Mark it:

```text
PRIVATE SECURITY NOTE - DO NOT CREATE PUBLIC ISSUE
```

Do not include exploit payloads, secrets, tokens, private deployment details, or
user safety data.
