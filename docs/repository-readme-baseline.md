# Repository README Baseline

This document is the reusable README baseline for Proofline repositories. It is
intended for human maintainers and future Codex tasks that need to update a repo
README without turning it into either a startup pitch or a maze of stale
implementation claims.

Repository READMEs should explain the specific repository clearly. Project-wide
governance and political posture should link to
[`docs/governance-and-political-alignment.md`](governance-and-political-alignment.md)
instead of being rewritten differently in every repository.

## Recommended Structure

Use this structure as the default shape:

1. Project or repository name.
2. Short public role statement.
3. Current status.
4. What this repository is.
5. What this repository is not.
6. Source-of-truth links.
7. Safety and emergency boundaries.
8. Security reporting.
9. Local development.
10. Validation.
11. Governance and public-good posture link.
12. License.

Add repository-specific sections only when they help a reader understand the
repo's actual role, current behavior, or maintenance workflow.

## Standard GitHub Badges Layout

Place a small badge block immediately below the repository title or hero
identity. Customize the links, workflow names, runtime badges, package badges,
and repository slug for each repo.

Default layout:

```md
<p align="center">
  <a href="https://github.com/open-proofline/<repo>/actions/workflows/ci.yml">
    <img alt="CI" src="https://github.com/open-proofline/<repo>/actions/workflows/ci.yml/badge.svg" />
  </a>
  <a href="LICENSE">
    <img alt="License: AGPL-3.0-only" src="https://img.shields.io/badge/license-AGPL--3.0--only-blue.svg" />
  </a>
  <a href="#current-status">
    <img alt="Status: Experimental" src="https://img.shields.io/badge/status-experimental-orange.svg" />
  </a>
  <a href="SECURITY.md">
    <img alt="Security policy" src="https://img.shields.io/badge/security-policy-blue.svg" />
  </a>
  <a href="https://proofline.live/support/">
    <img alt="Support Proofline" src="https://img.shields.io/badge/support-%E2%99%A5%20Proofline-d946ef.svg" />
  </a>
</p>
```

Recommended ordering:

1. CI or validation workflow.
2. Runtime or language version, if the repo has one clear runtime.
3. License.
4. Project status.
5. Security policy.
6. Support.
7. Release, package, or container badges, only when the repo actually publishes
   those artifacts.

Rules:

- Keep badges accurate and boring.
- Omit badges that are not backed by current repo files.
- Do not add coverage, package, release, container, deployment, or production
  badges unless the repo really maintains that signal.
- The standard Support badge should link to `https://proofline.live/support/`.
  It must not imply support priority, paid accounts, feature access, or
  emergency assistance.
- Do not add analytics, tracking, sales, popularity, vanity, or additional
  donation badges.
- Status badges should not imply production readiness. `Experimental` is the
  default unless current source docs support a different status.
- Badge links should point to local repo pages, workflow files, package pages,
  release pages, or documented source-of-truth pages.

## Public Voice

Proofline should sound like serious public-interest infrastructure with a dry
sense of humour, not a growth funnel that found a dictionary.

Use:

- clear, humane, public-facing wording
- direct current-status language
- dry humour where it clarifies values or anti-capture boundaries
- plain wording for safety, security, implementation status, metadata,
  navigation, and cryptocurrency warnings
- one sharp line per section at most

Avoid:

- generic startup or SaaS hype
- vague community-washing
- over-legalistic fog
- jokes inside emergency, security, encryption, decryption, key-custody,
  not-ready, or vulnerability-reporting sections
- wording that makes future behavior sound implemented

## Standard Opening Snippet

Adapt this:

```md
# Proofline [Repository Role]

Proofline is experimental public-interest open-source privacy and evidence
infrastructure. This repository contains [specific role].

Proofline is not an emergency service, emergency dispatch system,
emergency-services integration, staffed response center, or guaranteed
real-time response system.
```

For the website repository, the public identity line is:

```md
Record the truth. Keep the keys.
```

Use it where it helps. Do not force it into technical subrepositories where a
precise role statement would be clearer.

## Current Status Snippet

Adapt this:

```md
## Current Status

This repository is experimental and maintainer-led. It is not production-ready
emergency infrastructure. Current, partial, planned, and not-implemented
behavior are documented separately below.
```

If a repository has production-like tooling, hosted artifacts, or deployment
docs, describe them precisely without implying the full Proofline system is
production-ready or emergency-safe.

## What This Repository Is

Be concrete:

```md
## What This Repository Is

This repository contains [backend/API/static website/web-client/etc.]. It is
responsible for [specific current responsibilities].
```

Repository-specific claims belong in that repository's README. If the source of
truth lives elsewhere, link it instead of copying broad project claims.

## What This Repository Is Not

Most Proofline READMEs should include a plain exclusion list. Adapt the list
below to the repository:

```md
## What This Repository Is Not

This repository is not:

- an emergency service
- an emergency dispatch system
- emergency-services integration
- a staffed response center
- a production safety workflow
- a production mobile recording client
- a notification delivery system
- a decryption service
- key escrow
- a hosted-account billing system unless that behavior is implemented and
  documented here
- a public admin/operator surface
```

Do not list implemented repository responsibilities as absent. For example, the
server README can describe implemented authenticated `/v1` routes, but it must
still separate them from production public deployment approval.

## Source-Of-Truth Links

Use links that match the claim:

- website/public framing: `open-proofline/website`
- governance and political posture:
  `open-proofline/website/docs/governance-and-political-alignment.md`
- reusable README guidance:
  `open-proofline/website/docs/repository-readme-baseline.md`
- backend behavior and deployment: `open-proofline/server`
- web-client behavior and prototype limitations: `open-proofline/web-client`
- organization-level overview: `open-proofline/.github/profile/README.md`

When a README summarizes another repository, treat that repository as the source
input and keep the summary short.

## Current, Partial, Planned, And Not Implemented

Keep these categories separate.

Use wording like:

- `Current`
- `Experimental`
- `Partial`
- `Planned`
- `Future`
- `Not implemented`
- `Not ready today`

Avoid:

- `coming soon` for safety-sensitive features
- `ready` unless implementation and validation support it
- capability language that hides prototype or deployment limits

## Governance And Public-Good Posture

Link to
[`docs/governance-and-political-alignment.md`](governance-and-political-alignment.md)
for project-wide governance posture.

Short snippet:

```md
## Governance And Public-Good Posture

Proofline is intended to grow as public-good open-source infrastructure. The
planned long-term direction is a non-distributing cooperative or similar
mission-locked structure aligned with cooperative and libertarian socialist
principles. Pay should be for defined labour, not ownership extraction.

Read the canonical project posture in
[`open-proofline/website/docs/governance-and-political-alignment.md`](https://github.com/open-proofline/website/blob/main/docs/governance-and-political-alignment.md).
```

Keep legal claims future-tense unless legal documents later prove otherwise.

## Funding And Donation Boundaries

Funding language must not imply:

- emergency assistance
- support priority
- ownership
- investment returns
- tax-deductible charity status
- production readiness
- accounts or feature access unless implemented and documented

Short snippet:

```md
Donations and contributions do not create accounts, unlock features, provide
support priority, or provide emergency assistance.
```

## Security Reporting

Use plain language:

```md
## Security Reporting

Do not report security vulnerabilities through public GitHub issues. Use GitHub
private vulnerability reporting where available, and use the matching repository
security policy for the component involved.
```

Always warn against publishing secrets, raw tokens, private deployment details,
request bodies, uploaded bytes, plaintext, raw keys, wrapped-key ciphertext,
exploit details, object-store details, or user safety data.

## Local Development And Validation

Keep commands exact for the repository. Do not add placeholder test scripts or
validation commands that do not exist.

Use fenced shell blocks:

```bash
npm ci
npm run dev
npm run build
```

or the relevant Go/client commands for non-website repositories.

## Claims To Avoid Unless Implemented And Documented

Do not imply:

- production readiness
- emergency dispatch
- emergency-services integration
- guaranteed response
- staffed response center
- production mobile capture
- trusted-contact notifications
- live context sharing
- backend decryption
- browser decryption
- trusted-contact decryption
- raw server-held media keys
- key escrow
- hosted-account billing, subscriptions, or payment-gated access
- public admin/operator surfaces
- legal admissibility or legal reliability

Future work should stay future-tense: `planned`, `intended`, `future`, `aims
to`, `should`, and `if the project reaches that stage` are useful words.

## Maintenance Rule

When in doubt, make the repository-specific README shorter and link the
source-of-truth document. Duplicated project mythology ages badly. Links age
slightly better, which is not glamorous, but it does keep the floor from moving
under reviewers.
