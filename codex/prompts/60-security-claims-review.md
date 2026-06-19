# Codex Prompt: Security Claims Review

Review website security and safety claims.

Do **not** publish sensitive vulnerability details.
Do **not** add exploit payloads, real tokens, secrets, private deployment
details, or user safety data to public docs or issue drafts.

## Source Documents To Inspect

- `README.md`
- `AGENTS.md`
- `SECURITY.md`
- `../.github/profile/README.md`
- `../server/SECURITY.md`
- `../server/docs/security-model.md`
- `../server/docs/threat-model.md`
- `../server/docs/deployment.md`
- `../server/docs/key-custody.md`
- `../server/docs/browser-decryption.md`
- `../server/docs/contact-key-sharing-grants.md`
- `../web-client/SECURITY.md`
- `../web-client/README.md`
- current website pages and metadata

## Review Focus

- private reporting paths are clear
- website, server, and web-client issue scopes are not confused
- no production-readiness claim is introduced
- no emergency dispatch, emergency-services integration, or guaranteed response
  claim is introduced
- decryption, key custody, key escrow, wrapped keys, and browser decryption are
  described only within current source limits
- no sensitive data appears in docs, examples, prompts, screenshots, logs, or
  issue drafts
- public copy does not encourage unsafe deployment of current `/v1` or admin
  surfaces
- humour, metaphor, or personality does not weaken security or safety precision
- emergency, encryption, decryption, key-custody, key-escrow, wrapped-key,
  vulnerability-reporting, and security-response copy stays plain enough to be
  actionable under stress
- dry humour in adjacent public copy does not make security claims sound casual,
  stronger than implemented, legally reliable, production-ready, or less
  source-bound than they are
- vendor-spam, public-good, donation, or community-service personality does not
  bleed into security reporting instructions, sensitive-data warnings, crypto
  transaction warnings, or not-ready capability lists

## Output

List findings with file paths and line numbers. If sensitive, summarize the
category and recommend private reporting rather than public detail.
Include any voice/personality finding where wording makes a security, safety,
source-of-truth, emergency, encryption, decryption, or key-custody claim less
precise.
