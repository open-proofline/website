# Codex Prompt: Website Content Update

Update website content while preserving public safety and source-of-truth
boundaries.

Do **not** modify sibling `../.github`, `../server`, or `../web-client`.
Do **not** add backend, app, auth, recording, notification, hosted-account
billing, payment-gated product access, decryption, export, mobile, protocol, or
admin/operator behavior.

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
- Use `docs/governance-and-political-alignment.md` for governance,
  cooperative/public-good, political-alignment, anti-capture, and funding
  posture claims.
- Use `docs/repository-readme-baseline.md` for reusable README, public voice,
  and source-of-truth mapping claims.

## Public Voice And Personality

Website copy may use dry, principled, lightly witty wording where it supports
public trust. Proofline should sound like serious public-good infrastructure,
not a startup pitch deck, growth funnel, ownership-extraction SaaS product, or
generic vendor landing page.

Personality is appropriate in:

- governance and public-good alignment copy
- anti-SaaS, anti-capture, and unsolicited vendor outreach copy
- community services copy, when service boundaries are clear
- support and donation ethics copy
- harmless utility or error pages such as `404`
- limited home page framing, when safety and status remain clear

Personality must stay out of, or be extremely restrained in:

- emergency boundary warnings
- not-ready capability lists
- security reporting and vulnerability-handling instructions
- encryption, decryption, key-custody, key-escrow, and wrapped-key claims
- cryptocurrency transaction warnings
- metadata descriptions and social previews
- navigation labels
- source-of-truth implementation claims
- anything that could imply production readiness, emergency response, legal
  reliability, or implemented future behavior

One sharp line per section is usually enough. Do not turn the whole site into a
manifesto wearing Tailwind classes. Preserve current, planned, partial, and
not-ready boundaries even when making the copy more human.

## Validation

```bash
npm run format:check
npm run check
npm run lint
npm run build
git diff --check
```

Run browser checks for visible page changes.
