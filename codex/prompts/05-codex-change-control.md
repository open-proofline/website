# Codex Prompt: Codex Change-Control Check

Review the requested Codex task before implementation.

Do **not** change files unless the maintainer explicitly requests changes after
this assessment.
Do **not** add features.
Do **not** broaden the requested scope.

## Goal

Decide whether the requested task is ready for scoped website work, needs
clarification, should become a backlog draft, needs sensitive handling, requires
a source-of-truth update first, or is out of website scope.

Distinguish required work for the current request from future work that should
not be implemented now.

## Source Of Truth

Read current source-of-truth files as relevant before assessing readiness:

- `README.md`
- `AGENTS.md`
- `SECURITY.md`
- `codex/README.md`
- relevant files in `codex/prompts/`
- relevant website source, asset, metadata, CI, or documentation files
- relevant issue or pull request, if this is issue/PR work

If public claims, safety wording, implemented behavior, planned behavior,
security posture, deployment readiness, or repository role are involved, treat
these sibling documents as read-only source inputs:

- `../.github/profile/README.md`
- `../server/README.md`
- `../server/SECURITY.md`
- `../web-client/README.md`
- `../web-client/SECURITY.md`

Do not rely on stale prompt assumptions if current repository files disagree.

## Global Constraints

- Keep changes scoped and reviewable.
- Keep edits inside the website repository unless the maintainer explicitly
  requests cross-repository work.
- Treat `../.github`, `../server`, and `../web-client` as read-only
  source-of-truth inputs.
- Do not add backend behavior.
- Do not add web-client app behavior such as auth/session/API client behavior.
- Do not add recording, notification, hosted-account billing, payment-gated
  product access, decryption, export, admin/operator UI, emergency dispatch, or
  production-safety behavior.
- Do not imply production readiness.
- Do not imply emergency dispatch, emergency-services integration, or
  guaranteed emergency response.
- Keep current behavior and future/planned behavior clearly separated.
- Do not expose admin/operator routes or private deployment details.
- Do not include secrets, raw tokens, private deployment details, request
  bodies, raw keys, uploaded bytes, exploit details, object-store credentials,
  stored paths, object keys, or user safety data in public docs, prompts,
  issues, logs, or tests.
- Preserve Tailwind/Catalyst licensing boundaries if adapting visual style from
  `web-client`.
- Do not create or redistribute a standalone UI kit/template.
- Do not create GitHub issues directly from backlog discovery unless the
  maintainer explicitly requests it.

## Public Framing To Preserve

Proofline is an experimental open-source safety and evidence-capture project.

It is maintained by one person, is not operated as a for-profit business, and is
not production-ready emergency infrastructure.

Proofline is being built as an encrypted incident-capture and safety-context
system.

Future designs may include mobile recording clients, GPS/location context,
trusted-contact SMS/email notifications, live location/context sharing, and
near-live encrypted audio/video evidence upload, but those workflows are not
production-ready today.

Proofline must not be treated as emergency dispatch, emergency-services
integration, or a guaranteed real-time safety system.

## Check

Assess whether the task has:

- clear goal
- target files/areas
- non-goals
- validation commands
- source-of-truth docs to inspect
- current-vs-future behavior boundaries
- safety/emergency wording boundaries
- public-sensitive data risk
- clean enough working tree or checkpoint
- likely follow-up backlog items

## Readiness Results

Return exactly one primary result:

- `Ready`
- `Needs clarification`
- `Create backlog draft`
- `Sensitive security handling`
- `Source-of-truth update required first`
- `Out of website scope`

## Output

Include:

- readiness result
- short rationale
- likely affected files
- files/areas that must not change
- validation commands
- recommended next reusable prompt
- suggested backlog draft title, if applicable
- one or two clarifying questions only if required
