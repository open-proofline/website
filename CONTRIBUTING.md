# Contributing

Thanks for helping with the Proofline website.

This repository contains the static public website only. It should summarize
the project accurately without expanding product scope.

## Before Changing Content

Read the relevant source documents:

- `../.github/profile/README.md` for organization-level framing
- `../server/README.md`, `../server/SECURITY.md`, and server docs for backend facts
- `../web-client/README.md` and `../web-client/SECURITY.md` for web-client facts

Keep implemented, experimental/partial, planned, and not implemented behavior
separate.

Proofline is experimental and not production-ready emergency infrastructure.
Do not introduce claims that the website, server, or web client provide
emergency dispatch, emergency-services integration, guaranteed emergency
response, production recording, notifications, billing, decryption, key escrow,
or admin/operator behavior.

## Development

```bash
npm ci
npm run dev
```

## Validation

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
runner configured yet.

## Pull Requests

Include screenshots or a preview link for visual changes. Do not include
secrets, tokens, private deployment details, exploit details, or user safety
data.

## License

By contributing to this repository, you agree that your contributions are
licensed under `AGPL-3.0-only`, matching the repository license.
