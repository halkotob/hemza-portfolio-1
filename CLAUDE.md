# Hemza Alkotob: portfolio (v2)

A static one-page site: `index.html`, `css/styles.css`, `script.js`. There's no build step. `films.html` and `code.html` only redirect old links to `#scripts` and `#games`. Hosted on GitHub Pages at https://halkotob.github.io/hemza-portfolio-1/. Preview locally with `python3 -m http.server`.

Design docs are in `docs/design/`: `BRIEF.md` (creative direction; read it before any visual change), `DESIGN.md` (tokens, type, layout) and `information-architecture.md` (structure, labels, URLs).

## Skills in `.claude/skills/`

Load `hemza-voice` before writing copy or adding sections.

| Task | Skill |
| --- | --- |
| Rethink the direction | `creative-direction` (update BRIEF.md), then `frontend-design` |
| New section, page or navigation change | `information-architecture` |
| Any visual change | `frontend-design`, then `avoid-ai-design` to check it |
| Any copy | `hemza-voice`, `stop-slop`, `better-writing` |
| Type, fonts, wrapping, punctuation | `better-typography` |
| Colors, contrast | `better-colors` |
| Spacing, layout, responsive | `better-layout` |
| Radius, shadows, hover and press polish | `better-ui` |
| Accessibility | `better-accessibility` |
| Whole-page review | `better-interface` |
| Review a diff before committing | `interface-review` |
| Best-practice checklist (Vercel) | `web-design-guidelines` |
| Multi-element timing | `choreograph` |
| A single animation | `animate`, `animation-vocabulary` |
| Where motion should or shouldn't go | `find-animation-opportunities`, `remove-animations` |
| Audit animations | `review-animations`, `improve-animations`, `animation-performance` |
| Stress-test a component | `break`, `break-ui` |
| Explore alternatives | `variant` |
| Taste and philosophy | `emil-design-eng` |

The third-party skills come from these repos at these commits:
- emilkowalski/skill (c8a7962)
- jakubkrehel/skills (60bf140)
- anthropics/skills (ca45fc4)
- vercel-labs/web-interface-guidelines (434b7f9)
- funboy322/avoid-ai-design (2b7c718)
- hardikpandya/stop-slop (8da1f03)
- rampstackco/claude-skills (9b90db2)

Licenses are in `.claude/skills/_licenses/`. Where skills conflict, `hemza-voice` wins on tone. For example, `web-design-guidelines` wants second person and title case, and the site uses first person and sentence case.

## House rules

- The script reader is an ARIA tablist. Each tab's `aria-controls` lists two panels: details and page. It supports arrow keys, Home and End, and deep links (`#scripts/<slug>`).
- Motion answers the pointer only. Keyboard actions are instant. Use the `--ease-out`, `--dur-hover`, `--dur-press` and `--dur-page` tokens. Never use `ease-in`, never `transition: all`, and put hover effects inside `@media (hover: hover)`. Respect `prefers-reduced-motion`.
- Every `<img>` gets `width` and `height` attributes. The animated gameplay preview stops on its still frame after 5s on screen (WCAG 2.2.2), using an animated `<img>` plus a still `<source media="(prefers-reduced-motion: reduce)">`.
- Use typographic punctuation in rendered text. Keep straight quotes in code.
- Before committing, check for overflow at 320px, at 200% zoom (640px) and on desktop, and run worst-case content through `break-ui`.
