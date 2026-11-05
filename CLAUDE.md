# Hemza Alkotob — Portfolio

Static site: `index.html`, `films.html`, `code.html`, one stylesheet (`css/styles.css`), one script (`script.js`). No build step. Hosted on GitHub Pages at https://halkotob.github.io/hemza-portfolio-1/. Preview locally with `python3 -m http.server`.

## Skills in `.claude/skills/`

Always load `hemza-voice` before writing copy or adding sections. It defines the voice, the mash-up card formula, and the comic-book system.

| Task | Skill |
| --- | --- |
| New page or big visual change | `frontend-design`, then `hemza-voice` |
| Any copy | `hemza-voice`, `better-writing` |
| Type, fonts, wrapping, punctuation | `better-typography` |
| Colors, contrast | `better-colors` |
| Spacing, layout, responsive, RTL | `better-layout` |
| Radius, shadows, hover/press polish | `better-ui` |
| Accessibility | `better-accessibility` |
| Whole-page review | `better-interface` |
| Review a diff before committing | `interface-review` |
| Best-practice checklist (Vercel) | `web-design-guidelines` |
| Intro / multi-element timing | `choreograph` |
| A single animation | `animate`, `animation-vocabulary` |
| Where motion should or shouldn't go | `find-animation-opportunities`, `remove-animations` |
| Audit existing animations | `review-animations`, `improve-animations`, `animation-performance` |
| Stress-test a component | `break`, `break-ui` |
| Explore alternatives | `variant` |
| Taste and philosophy | `emil-design-eng` |

Third-party skills are vendored from emilkowalski/skill (c8a7962), jakubkrehel/skills (60bf140), anthropics/skills (ca45fc4) and vercel-labs/web-interface-guidelines (434b7f9). Licenses are in `.claude/skills/_licenses/`.

## House rules

- The comic intro's timeline lives in the `--t-*` custom properties on `.comic-intro`. The JS ends the intro on `animationend`, so retime it in CSS only.
- Respect `prefers-reduced-motion` everywhere. The intro is skipped entirely under it.
- Use typographic punctuation in rendered text (’ “ ” —). Keep straight quotes inside code samples.
- Arabic text: `lang="ar" dir="rtl"`.
- Motion uses the `--ease-out`, `--dur-hover` (200ms) and `--dur-press` (160ms) tokens. Never use `ease-in` or `transition: all`. Put hover transforms inside `@media (hover: hover)`.
- One hover gesture per card: the panel lifts up-left and its hard shadow grows. Don't stack more effects on top.
- Control edges (buttons, toggles) use `--border-strong`, which is 3:1 or better. `--border` is for decorative dividers only.
- Every `<img>` gets `width`/`height` attributes. The global `img { height: auto }` keeps the ratio.
- Small labels are sentence case. Caps belong to the Bangers comic lettering only.
- The animated gameplay preview stops on its still frame after 5s on screen (WCAG 2.2.2) and replays on hover or focus. New animated previews need the same `<picture>` setup: an animated `<img>` plus a still `<source media="(prefers-reduced-motion: reduce)">`.
