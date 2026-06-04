# Codex Prompt: Project Context Check

Read current website repository context before making changes.

Do **not** change files.
Do **not** add features.
Do **not** review, rewrite, or update website content unless a later prompt
explicitly asks for that work.

## Goal

Summarize the current `open-proofline/website` repository state and the likely
impact of the requested task before implementation work begins.

Treat current repository files as higher priority than stale assumptions in this
prompt. If the request mentions an issue or pull request, inspect that issue or
pull request before answering.

## Source Of Truth

Read current website files as relevant:

- `README.md`
- `AGENTS.md`
- `SECURITY.md`
- `codex/README.md`
- relevant files in `codex/prompts/`
- `src/pages/`
- `src/components/`
- `src/layouts/`
- `src/content/`, if present
- `public/`
- `package.json`
- `astro.config.*`
- relevant local files for the requested task

If public claims, safety wording, source links, implemented behavior, planned
behavior, security posture, deployment readiness, or repository role are
involved, also read the relevant sibling source documents as read-only inputs:

- `../.github/profile/README.md`
- `../server/README.md`
- `../server/SECURITY.md`
- `../web-client/README.md`
- `../web-client/SECURITY.md`

If a referenced source file is unavailable locally, say so and continue from the
available files.

## Issue Or Pull Request Context

If the task references a GitHub issue or pull request, inspect it first:

```bash
gh issue view <ISSUE_NUMBER> --repo open-proofline/website
gh pr view <PR_NUMBER> --repo open-proofline/website
```

Use whichever command is relevant. If GitHub CLI is unavailable or
unauthenticated, say so and continue from local files.

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

## Output

Return:

1. Current website repo scope.
2. Current public website purpose.
3. Current source-of-truth docs and linked repos.
4. Current safety/public-claim boundaries.
5. Current known exclusions and not-yet-implemented product behavior.
6. Current implementation status, clearly separating implemented,
   experimental/partial, planned/future, and not implemented behavior.
7. Files likely affected by the requested task.
8. Files or areas that must not change.
9. Likely validation commands.
10. Recommended next reusable prompt to use.
11. Clarifying questions, only if required to avoid a bad change.
