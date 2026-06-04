# Codex Prompt: Public Readability And Approachability Review

Use this prompt to review the Proofline public website for readability, clarity,
and public-facing approachability.

Default mode is review-only. Do not edit website content unless the maintainer
explicitly asks for edit mode in the same request.

## Scope

Work from the `open-proofline/website` repository.

Review public-facing website text for whether it is clear, humane, accurate,
approachable, and understandable to likely readers, including non-developers,
potential users, trusted contacts, open-source contributors, safety-minded
reviewers, and people evaluating whether Proofline is appropriate for their
needs.

Focus on wording, framing, information hierarchy, terminology, and calls to
action. Do not perform a broad visual redesign, route restructuring, metadata
rewrite, component rewrite, or feature implementation unless the maintainer
explicitly requests that work separately.

Keep sibling repositories read-only. Treat them as source-of-truth inputs.

## Required Reasoning

Think carefully before reporting findings or proposing wording. This review is
about public trust, safety expectations, and accurate framing, not just style.

For each concern, distinguish:

- readability or approachability issues
- possible public misunderstanding
- current behavior versus future/planned behavior ambiguity
- security, safety, emergency, or production-readiness boundary risk
- dense, internal, developer-centric, or legalistic wording
- inconsistent terminology or calls to action

Do not weaken necessary warnings. Do not make Proofline sound more finished,
more staffed, more operational, more secure, more emergency-ready, or more
capable than the source documents support.

## Source Documents To Inspect

Before reporting findings, inspect:

- `AGENTS.md`
- `README.md`
- `SECURITY.md`
- `codex/README.md`
- existing files under `codex/prompts/`
- `../.github/profile/README.md`
- `../server/README.md`
- `../server/SECURITY.md`
- `../web-client/README.md`
- `../web-client/SECURITY.md`

Also inspect website content and chrome, including:

- `site.config.mjs`
- `src/pages/`
- `src/layouts/`
- `src/components/`
- metadata/head text
- navigation text
- footer text
- static public-facing content under `public/` when relevant
- any content collections or content directories if present

If a public claim depends on backend, web-client, security, deployment,
licensing, emergency, recording, notification, decryption, key custody, billing,
or account behavior, verify it against the source documents before suggesting a
change.

## Public Framing To Preserve

Preserve these boundaries:

- Proofline is experimental.
- Proofline is not production-ready emergency infrastructure.
- Proofline is not an emergency service, dispatch system, emergency-services
  integration, staffed response center, or guaranteed real-time safety system.
- Users and trusted contacts remain responsible for contacting emergency
  services.
- Mobile recording clients, GPS/location capture, trusted-contact alerts,
  notifications, live context sharing, near-live upload, hosted accounts,
  billing, decryption, account recovery, production deployment hardening, and
  key-custody workflows remain future/planned unless source documents say they
  are implemented.
- The website must not add backend, web-client, admin/operator, recording,
  notification, billing, decryption, export, protocol, or mobile-client
  behavior.
- Do not expose secrets, tokens, private deployment details, exploit details,
  request bodies, uploaded bytes, plaintext, raw keys, wrapped-key ciphertext,
  object-store credentials, object keys, stored paths, or user safety data.
- Preserve Tailwind/Catalyst licensing boundaries if comparing or adapting
  language from the web client.

## Review Focus

Review whether the website:

- explains what Proofline is in plain, non-hypey language
- makes the experimental status visible without sounding evasive
- separates current implementation, partial/experimental work, planned work,
  and not-implemented behavior
- speaks to non-developer readers without losing technical accuracy
- uses humane safety wording that is serious, calm, and not fear-based
- avoids implying emergency response, production readiness, legal reliability,
  evidence admissibility, staffed operations, or guaranteed preservation
- avoids internal project jargon where a clearer public phrase would work
- keeps unavoidable technical terms close to a plain-language explanation
- uses consistent terms for incidents, evidence, encrypted chunks, trusted
  contacts, hosted service direction, source code, licensing, and repositories
- presents open-source and funding language plainly, without SaaS hype or
  unsupported nonprofit/charity implications
- gives useful calls to action for source code, security reporting,
  self-hosting, and repository links
- keeps warnings visible enough but not so heavy that every page becomes hard
  to read
- avoids duplicate explanations that make the site feel dense or repetitive
- uses page headings, summaries, and section order to help readers scan

## Review-Only Mode

In default review-only mode:

- do not modify files
- do not rewrite website content in place
- report findings with concrete locations
- include concise suggested replacement wording when helpful
- identify when no change is needed because current wording is already clear or
  boundary-preserving
- do not run build or browser validation unless the maintainer asks for it

Run only documentation-safe validation commands that exist and are relevant,
such as:

```bash
git diff --check
npm run format:check
```

Do not claim validation passed unless the commands actually ran.

## Optional Edit Mode

Use edit mode only when the maintainer explicitly asks for edits.

In edit mode:

- make small, scoped wording edits under the website repository only
- preserve Astro route behavior, layout structure, component behavior, and
  visual design unless explicitly requested otherwise
- inspect source documents before changing public claims
- keep current/future/not-implemented boundaries intact
- keep safety and emergency warnings accurate and visible
- avoid broad rewrites when a targeted wording fix is enough
- do not modify sibling repositories
- do not add new claims that source documents do not support

After edit mode, run relevant validation commands that exist. Prefer:

```bash
npm run format:check
npm run check
npm run lint
npm run build
git diff --check
```

Run browser checks or screenshots only if wording edits affect layout,
navigation, responsive behavior, or visible UI fit.

## Output Format

Report:

1. Files and source documents inspected.
2. Whether this was review-only mode or edit mode.
3. Findings by page or shared component, ordered by priority.
4. Public-facing approachability findings.
5. Confusing or overly technical phrases.
6. Places where current, experimental, planned, future, or not-implemented
   behavior could be clearer.
7. Safety, emergency, production-readiness, or security wording that is too
   weak, too heavy, or potentially misleading.
8. Suggested replacement wording for each actionable finding.
9. Priority for each finding: high, medium, or low.
10. Whether edits were made.
11. Validation commands run and their results.
12. Remaining follow-up, if any.

If there are no findings, say that clearly and mention any residual risk or
areas not covered.
