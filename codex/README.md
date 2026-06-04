# Codex Workflow Prompts

These prompts are reusable scoped workflows for `open-proofline/website`.

The website is a static public site. Sibling repositories are source inputs:

- `../.github` for organization-level framing
- `../server` for backend behavior, deployment, API, and security facts
- `../web-client` for account portal and incident-review prototype facts

Codex output is maintainer-reviewed work. It is not an audit, certification,
security review, or endorsement by OpenAI.

## Prompts

- `05-project-context-check.md`: read repo context before changes
- `10-codex-change-control.md`: decide whether a task is scoped enough
- `15-source-of-truth-content-review.md`: review public copy against source docs
- `20-website-content-update.md`: update website content without overclaiming
- `30-navigation-visual-polish.md`: polish navigation and visual layout
- `40-accessibility-and-responsive-review.md`: review accessibility and responsive behavior
- `50-seo-metadata-review.md`: review metadata, sitemap, robots, and assets
- `60-security-claims-review.md`: review safety and security claims
- `70-ci-and-repository-hygiene-review.md`: review repository hygiene and CI
- `80-backlog-scan-issue-drafts.md`: create local backlog issue drafts
- `85-create-github-issues-from-drafts.md`: prepare issue creation commands from reviewed drafts

## Standard Validation

```bash
npm ci
npm run format:check
npm run check
npm run lint
npm run build
npm audit --audit-level=moderate
git diff --check
```

Run browser screenshots or responsive checks when routes, navigation, styling,
assets, or layout change.

## Generated Artifacts

Generated local backlog drafts belong outside `codex/`, usually under:

```text
.backlog-drafts/YYYY-MM-DD/<branch-slug>/
```

Do not place generated issue drafts, screenshots, logs, or reports under
`codex/`. Do not include secrets, tokens, private deployment details, exploit
details, or user safety data in public drafts.
