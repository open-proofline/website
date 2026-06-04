# Codex Prompt: Navigation And Visual Polish

Polish website navigation, layout, icons, and responsive visual details.

Do **not** redesign content strategy unless needed for clarity or accessibility.
Do **not** copy web-client app internals, auth/session/API logic, or Catalyst
components as a reusable UI kit.

## Source Documents To Inspect

- `AGENTS.md`
- `README.md`
- `../web-client/README.md`
- current `src/components/BrandHeader.astro`
- current `src/layouts/*`
- current `src/styles/global.css`
- current `public/*` assets

## Requirements

- Keep navigation labels clear and user-facing.
- Preserve active route state.
- Keep desktop nav and mobile hamburger menu accessible.
- Use decorative icons with `aria-hidden="true"`.
- Keep GitHub and repository links accessible.
- Avoid horizontal overflow at mobile and desktop widths.
- Preserve Proofline safety wording and current/future boundaries.

## Validation

```bash
npm run format:check
npm run check
npm run lint
npm run build
git diff --check
```

Use browser screenshots for desktop and mobile navigation before reporting
success.
