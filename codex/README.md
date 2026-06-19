# Codex Workflow Prompts

These prompts are reusable scoped workflows for `open-proofline/website`.

The website is a static public site. Sibling repositories are source inputs:

- `../.github` for organization-level framing
- `../server` for backend behavior, deployment, API, and security facts
- `../web-client` for account portal and incident-review prototype facts

The website repository is also the project source for:

- `docs/governance-and-political-alignment.md` for Proofline public governance
  posture, political alignment, cooperative/public-good framing, and
  anti-capture commitments
- `docs/repository-readme-baseline.md` for reusable Proofline repository README
  structure and public voice guidance

Codex output is maintainer-reviewed work. It is not an audit, certification,
security review, or endorsement by OpenAI.

## Prompts

- `00-project-context-check.md`: read repo context before changes
- `05-codex-change-control.md`: decide whether a task is scoped enough
- `10-source-of-truth-content-review.md`: review public copy against source docs
- `20-website-content-update.md`: update website content without overclaiming
- `30-navigation-visual-polish.md`: polish navigation and visual layout
- `40-accessibility-and-responsive-review.md`: review accessibility and responsive behavior
- `45-public-readability-and-approachability-review.md`: review public copy for clarity and approachability
- `46-documentation-and-prompt-review.md`: comprehensive documentation, website content/source, and reusable-prompt consistency review
- `50-seo-metadata-review.md`: review metadata, sitemap, robots, and assets
- `60-security-claims-review.md`: review safety and security claims
- `70-ci-and-repository-hygiene-review.md`: review repository hygiene and CI
- `80-backlog-scan-issue-drafts.md`: create local backlog issue drafts
- `85-create-github-issues-from-drafts.md`: prepare issue creation commands from reviewed drafts

## Public Voice Guardrail

Proofline public copy should sound like serious public-interest infrastructure
with a dry sense of humour. Personality is welcome where it clarifies values,
cooperative/public-good alignment, anti-capture commitments, vendor-spam
boundaries, community-service separation, donation ethics, or harmless utility
pages.

Keep emergency warnings, implementation-status claims, security reporting,
encryption/decryption/key-custody claims, cryptocurrency transaction warnings,
navigation labels, metadata, and source-of-truth summaries plain and precise.
One sharp line per section is usually enough.

When tasks touch governance, public-good framing, funding posture, project-wide
README structure, public voice, or source-of-truth mapping, inspect the two
`docs/` source files above before editing.

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
