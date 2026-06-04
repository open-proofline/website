# Codex Prompt: Documentation And Prompt Review

Use very-high reasoning.

Review Proofline Website documentation, reusable Codex prompts, website content,
and website source/code for accuracy, consistency, safety, readability,
maintainability, and public-facing quality.

Default mode is review-only: inspect files and produce a structured report
without editing files.

Use edit mode only when the maintainer explicitly requests it. In edit mode,
make small, scoped documentation, prompt, website content, or website
source/code edits after producing or following review findings. Do not rewrite
large sections without need. Do not perform unrelated implementation work, add
features, deploy, or create public GitHub issues. Backlog findings should become
local draft Markdown only if a backlog prompt/workflow is explicitly requested.

## Source Files To Inspect

Start with current website source-of-truth files:

- `README.md`
- `AGENTS.md`
- `SECURITY.md`
- `CONTRIBUTING.md`, if present
- `codex/README.md`
- `codex/prompts/`
- package, config, CI, deployment, metadata, and content documentation

Review public website content, source, and metadata-relevant assets:

- `src/pages/`
- `src/components/`
- `src/layouts/`
- `src/content/`, if present
- `src/styles/`, if present
- `public/`
- `public/robots.txt`, if present
- `src/pages/robots.txt.ts`, if present
- `public/site.webmanifest`
- `public/sitemap.xml`, if generated or committed
- `site.config.mjs`
- `astro.config.*`
- `package.json`
- `.github/workflows/`
- `wrangler.jsonc` or `wrangler.toml`
- any docs, metadata, sitemap, SEO, accessibility, navigation, deployment, or
  content-related files

Inspect website source code for user-visible text, route labels, metadata, link
targets, navigation/footer content, page descriptions, headings, card copy,
button/link labels, image alt text, decorative image handling, `aria-label`
values, visually hidden text, safety notices, source links, and content
rendering that affects public claims.

Treat these sibling repositories as read-only source-of-truth references:

- `../.github/profile/README.md` for organization-level framing
- `../server/README.md`, `../server/SECURITY.md`, and relevant `../server/docs/`
  for backend behavior, API, deployment, and security facts
- `../web-client/README.md` and `../web-client/SECURITY.md` for web-client
  behavior, account portal status, browser/session boundaries, and prototype
  limitations

If a referenced file is missing, continue from available files and report the
gap. Do not rely on stale assumptions from this prompt when current docs or
source files disagree.

## Review Scope

Review:

- website documentation
- README, AGENTS, SECURITY, and CONTRIBUTING guidance
- public page/content files
- website source/code where it affects public text, metadata, navigation,
  accessibility, deployment, or content rendering
- reusable Codex prompt files
- public-facing project claims
- source-of-truth alignment
- technical accuracy
- linguistic coherence
- readability and approachability
- missing, stale, contradictory, or overly narrow documentation
- overbroad or stale Codex prompt instructions
- validation instructions and safety/security wording

Do not turn this prompt into a generic redesign workflow. It is a comprehensive
consistency and quality review prompt with optional targeted edits.

## Website Boundaries

Preserve these website-specific boundaries:

- This repo is the static public website for Proofline.
- The website summarizes Proofline but is not the source of truth for backend
  or web-client behavior.
- Treat `.github`, `server`, and `web-client` as source-of-truth references.
- If website copy conflicts with source docs, report the conflict and fix it
  only in edit mode.
- Future concepts must remain future-tense unless source docs prove they are
  implemented.
- Preserve Tailwind/Catalyst licensing boundaries if adapting visual style from
  the web-client.
- Do not create or redistribute a standalone UI kit, template, starter,
  package, or design asset set.

Do not add backend behavior, web-client app behavior, auth/session/API
behavior, recording/capture, notifications, billing/payment behavior,
decryption, export, key-custody behavior, admin/operator UI, emergency
dispatch, emergency-services behavior, deployment automation, or product
features unless explicitly scoped in a separate task.

Do not imply:

- production readiness
- emergency dispatch
- emergency-services integration
- guaranteed emergency response
- implemented production mobile recording clients
- implemented production GPS/location capture
- implemented trusted-contact SMS/email notifications
- implemented live location/context sharing
- implemented near-live audio/video upload as production behavior
- implemented billing/payment flows
- backend decryption
- browser decryption
- trusted-contact decryption
- key escrow
- raw server-held media keys
- playable media export
- public admin/operator tooling

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

## Review Checks

Check source-of-truth consistency:

- Do website docs and pages agree with current `README.md`, `AGENTS.md`,
  `SECURITY.md`, sibling source docs, and source files?
- Do Codex prompts agree with current repo rules?
- Are public claims supported by source repositories or website docs?
- Are current, experimental/partial, planned/future, and not implemented
  behavior clearly separated?

Check website content and public-facing copy:

- Is public-facing wording readable, humane, and technically accurate?
- Are route/page labels, headings, summaries, card copy, and calls to action
  consistent?
- Are warnings visible without becoming repetitive or overly heavy?
- Are stale internal/developer phrases identified?
- Are current source links, canonical/source references, and repository links
  clear and not misleading?
- Are missing pages, missing sections, or duplicated explanations identified?

Check website source/code where relevant:

- Do route labels, navigation, footer links, page descriptions, and metadata
  agree with the content model?
- Are heading hierarchy, page landmarks, source-list placement, safety notices,
  and content rendering coherent?
- Are image alt text, decorative-image handling, `aria-label` values, and
  visually hidden text accurate?
- Are accessible link/button labels clear without relying on visual context?
- Do metadata, SEO descriptions, canonical URLs, robots, sitemap behavior, and
  manifest descriptions avoid overclaims?
- Do deployment docs match actual Astro, Wrangler, and package configuration?
- Do Cloudflare/static deployment references avoid implying secrets,
  production guarantees, or unauthorised deployment automation?
- Do validation commands match `package.json` and documented CI behavior?

Check technical accuracy:

- Are website, metadata, deployment, route, source-repository, security,
  licensing, and validation claims accurate?
- Are planned/future features clearly separated from implemented behavior?
- Are deprecated or legacy names explained rather than silently mixed?
- Are current server and web-client capabilities not overstated?

Check documentation completeness:

- Are setup, validation, deployment, security, content, asset, and contribution
  workflows documented clearly enough?
- Are missing docs or stale sections identified?
- Are source-of-truth dependencies explicit where public claims depend on
  sibling repositories?

Check prompt quality:

- Are Codex prompts scoped?
- Do prompts tell Codex to inspect current source-of-truth files?
- Do prompts include allowed edit paths and non-goals where needed?
- Do prompts include current validation commands?
- Do prompts avoid stale assumptions?
- Do prompts avoid creating public issues or exposing sensitive material by
  default?
- Do prompts fit the naming and order conventions in `codex/README.md`?

Check readability and approachability:

- Are docs and public pages readable to a new contributor, reviewer, potential
  user, trusted contact, or safety-minded reader?
- Are public-facing docs understandable without internal context?
- Are technical docs precise without being needlessly dense?
- Is wording direct, humane, and clear?
- Are acronyms and project-specific terms explained where needed?
- Are there sections that sound like internal notes, legal fog, or startup
  hype?

Check safety and security wording:

- Are emergency-service limitations clear?
- Are production-readiness limitations clear?
- Are reporting instructions safe?
- Are sensitive-data warnings present where needed?
- Are decryption, key custody, notification, billing, hosted-service,
  emergency, and production-readiness boundaries accurate?

Check validation and maintenance:

- Are validation commands current?
- Are CI, docs, and check instructions aligned with package reality?
- Are recurring workflows represented by reusable prompts?
- Are one-off or historical prompts clearly separate from reusable prompts?

## Sensitive-Data Rules

Do not include raw sensitive material in public artifacts. Never include:

- raw tokens
- session tokens
- incident/viewer tokens
- Authorization headers
- request bodies
- uploaded bytes
- plaintext
- raw keys
- raw media keys
- contact private keys
- unwrapped secrets
- wrapped-key ciphertext
- verification credentials
- private deployment details
- Cloudflare tokens or private account/project details
- exploit payloads or proof-of-concept details
- object-store credentials
- stored paths
- object keys
- user safety data

If sensitive material is discovered, describe only the category and affected
file path, not the secret value.

## Review-Only Mode

Review-only mode is the default.

In review-only mode:

- inspect documentation, prompts, website source files, website content, and
  metadata files
- do not modify files
- report findings with file paths and section, route, or component names
- do not create issues, commits, branches, or pull requests
- do not run full application test suites unless the maintainer requests them
- recommend validation commands instead of claiming they passed

## Edit Mode

Use edit mode only when the maintainer explicitly requests edits.

In edit mode, make small, scoped changes only where needed to address the
review. Allowed edit areas include:

- documentation
- Codex prompts
- website page/content files
- website layout/component files where required to fix public-facing text,
  navigation labels, metadata presentation, accessibility text, or content
  rendering
- public metadata files where relevant
- configuration files only when required to correct documented validation or
  deployment behavior

In edit mode, scoped changes may include:

- fixing confusing public-facing copy
- updating headings, labels, and route copy
- improving documentation consistency
- updating Codex prompt guardrails
- fixing stale source links
- correcting metadata descriptions
- improving alt text or accessibility text
- reducing repeated warning text while preserving safety boundaries
- updating docs to match actual package scripts or deployment config
- adding small missing explanatory sections if clearly supported by source docs

In edit mode, do not:

- redesign the site broadly
- add new pages unless explicitly requested or clearly required by the review
  scope
- restructure routes unless explicitly requested
- perform unrelated implementation work
- add product features
- add backend behavior
- add web-client app behavior
- add auth/session/API behavior
- add recording/capture
- add notifications
- add billing/payment behavior
- add decryption/export/key-custody behavior
- add admin/operator UI
- add emergency dispatch or emergency-services behavior
- add Cloudflare deployment automation or secrets
- make source-of-truth claims not supported by `.github`, `server`, or
  `web-client`

Preserve all website boundaries above. Summarize exactly what changed after
edits.

## Validation

When edit mode changes files, inspect `package.json` and run the real available
equivalents of:

```bash
npm run format:check
npm run check
npm run lint
npm run build
git diff --check
```

If only Markdown/Codex prompt files changed, a lighter docs-safe validation
subset may be used when consistent with `AGENTS.md` and `README.md`:

```bash
npm run format:check
git diff --check
```

Do not claim validation passed unless commands actually ran. If a command is
unavailable or fails due to environment limitations, report that honestly.

## Required Report

Produce a structured report with:

1. Executive summary.
2. Mode used: review-only or edit mode.
3. Source files inspected.
4. Website source/code areas inspected.
5. Documentation consistency findings.
6. Technical accuracy findings.
7. Website content and public-facing copy findings.
8. Website source/code findings.
9. Readability and approachability findings.
10. Navigation, metadata, and link findings.
11. Accessibility text findings.
12. Codex prompt findings.
13. Missing documentation or missing website content gaps.
14. Safety/security wording findings.
15. Recommended edits grouped by priority:
    - High
    - Medium
    - Low
16. Suggested follow-up backlog draft titles, if any.
17. Validation commands recommended or run.
18. Clear statement whether files were changed.

Findings should include file paths and section/component names where possible.
If edit mode is used, the report must also summarize exactly what changed.
