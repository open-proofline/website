# Codex Prompt: Accessibility And Responsive Review

Review the static website for accessibility and responsive layout issues.

Do **not** change product claims unless accessibility or clarity requires a
small copy correction.

## Source Documents To Inspect

- `AGENTS.md`
- `README.md`
- current `src/pages/*`
- current `src/components/*`
- current `src/layouts/*`
- current `src/styles/global.css`

## Review Focus

- one visible `h1` per page
- useful page titles and descriptions
- skip link works
- header, main, and footer landmarks exist
- nav menus are keyboard reachable
- current page is indicated
- icons are decorative or labelled appropriately
- links have accessible names
- text does not overflow buttons, cards, or nav items
- mobile and desktop widths do not horizontally scroll
- source links remain usable

## Validation

Run available checks:

```bash
npm run format:check
npm run check
npm run lint
npm run build
git diff --check
```

Use browser automation or manual screenshots across representative mobile and
desktop widths. Report any checks that were not available.
