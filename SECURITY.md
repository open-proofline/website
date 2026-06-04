# Security Policy

Proofline Website is the static public website for Proofline. It is
experimental project documentation, not production emergency infrastructure.

Do not report security vulnerabilities through public GitHub issues.

Use GitHub private vulnerability reporting where available. If the issue belongs
to another component, report it in the matching repository:

- backend/API/deployment issues: `open-proofline/server`
- account portal or web-app issues: `open-proofline/web-client`
- website copy, static-site, dependency, or metadata issues:
  `open-proofline/website`

## Website Security Scope

Website reports may include:

- misleading safety, emergency-response, or production-readiness claims
- dangerous deployment or source-of-truth claims
- XSS or unsafe static-site behavior
- dependency or build-tool risk
- leaked secrets or private deployment details
- incorrect security reporting links
- public copy that could mislead users about emergency-services contact, legal
  reporting, production readiness, decryption, access-control guarantees, or
  support availability

Response timelines are best-effort.

## Do Not Publish

Do not include any of the following in public issues, pull requests, screenshots,
logs, tests, examples, or Codex artifacts:

- raw incident tokens
- session tokens
- secrets
- request bodies
- Authorization headers
- uploaded bytes
- plaintext
- raw keys
- raw media keys
- contact private keys
- wrapped-key ciphertext
- private deployment details
- exploit details
- object-store credentials
- stored paths
- object keys
- user safety data

For sensitive findings, keep the public report minimal and use private
reporting.
