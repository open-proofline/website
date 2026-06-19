# Codex Prompt: Source-Of-Truth Content Review

Review website copy against current project source documents.

Do **not** modify files unless the maintainer explicitly asks for fixes.
Do **not** change backend, web-client, mobile, protocol, or organization repo
files.

## Repository

```text
open-proofline/website
```

## Source Documents To Inspect

- `README.md`
- `AGENTS.md`
- `SECURITY.md`
- `docs/governance-and-political-alignment.md`
- `docs/repository-readme-baseline.md`
- `../.github/profile/README.md`
- `../server/README.md`
- `../server/SECURITY.md`
- relevant `../server/docs/*`
- `../web-client/README.md`
- `../web-client/SECURITY.md`
- current `src/pages/*`
- current `src/components/*`

## Review Focus

- current behavior is labeled current
- experimental or partial behavior is not overstated
- planned/future behavior remains future-tense
- not implemented behavior is clearly absent
- Proofline is not described as production-ready emergency infrastructure
- no emergency dispatch, emergency-services integration, guaranteed response,
  production mobile recording, GPS/location capture, notifications,
  hosted-account billing, payment-gated product access, decryption, key escrow,
  raw server-held keys, or playable export is implied
- source links still point to relevant public docs
- governance, public-good, cooperative, political-alignment, funding, and
  reusable README claims align with the website repo `docs/` source documents
- dry humour, metaphor, or personality does not obscure whether a claim is
  current, partial, planned, not ready, source-backed, or safety-critical

## Output

List findings by severity with file paths and line numbers. Include recommended
copy changes, but do not apply them unless asked.
