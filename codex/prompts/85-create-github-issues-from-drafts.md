# Codex Prompt: Prepare GitHub Issue Creation Commands From Reviewed Drafts

Prepare a script for creating GitHub issues from maintainer-reviewed backlog
drafts.

Do **not** execute the script.
Do **not** create GitHub issues unless the maintainer explicitly tells you to
run the generated commands.
Do **not** include sensitive private notes in public issues.

## Repository

```text
open-proofline/website
```

## Draft Selection

Prefer an explicitly supplied draft directory. Otherwise inspect
`.backlog-drafts/` and choose the newest branch-scoped directory only when the
intended scope is clear. If unclear, stop and ask.

Exclude:

- `private-notes/`
- drafts marked private or sensitive
- drafts missing required metadata
- drafts that say they require revalidation before public issue creation

## Required Draft Metadata

Each included draft must contain:

```md
## Priority

## Type

## Labels

## Branch scope
```

Every public issue draft must include the `backlog` label.

## Label Validation

If GitHub CLI is available, list labels:

```bash
gh label list --repo open-proofline/website --limit 200
```

Exclude drafts with missing labels unless the maintainer explicitly approves
label creation. Do not create labels silently.

## Script Output

Create:

```text
scripts/create-backlog-issues.sh
```

The script must:

- use `set -euo pipefail`
- define `REPO="open-proofline/website"`
- refuse to run if the draft directory is missing
- refuse to run if `gh` is missing or unauthenticated
- derive the issue title from the first Markdown heading
- use `gh issue create --body-file`
- pass one `--label` argument per label
- warn that running the script twice may create duplicates

Do not execute the generated script.
