# Codex Prompt: Website Content Update

Update website content while preserving public safety and source-of-truth
boundaries.

Do **not** modify sibling `../.github`, `../server`, or `../web-client`.
Do **not** add backend, app, auth, recording, notification, billing, decryption,
export, mobile, protocol, or admin/operator behavior.

## Source Documents To Inspect

- `README.md`
- `AGENTS.md`
- `SECURITY.md`
- `../.github/profile/README.md`
- `../server/README.md`
- `../server/SECURITY.md`
- relevant `../server/docs/*`
- `../web-client/README.md`
- `../web-client/SECURITY.md`

## Requirements

- Keep edits under the current website repository.
- Write public-facing website copy, not internal review instructions.
- Separate implemented, experimental/partial, planned/future, and not
  implemented behavior.
- Keep safety language clear: Proofline is experimental and not an emergency
  service.
- Keep future concepts future-tense unless source docs say they are
  implemented.
- Include source links where the page summarizes implementation facts.

## Validation

```bash
npm run format:check
npm run check
npm run lint
npm run build
git diff --check
```

Run browser checks for visible page changes.
