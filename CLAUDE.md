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
| Intro / multi-element timing | `choreograph` |
| A single animation | `animate`, `animation-vocabulary` |
| Where motion should or shouldn't go | `find-animation-opportunities`, `remove-animations` |
| Audit existing animations | `review-animations`, `improve-animations`, `animation-performance` |
| Stress-test a component | `break`, `break-ui` |
| Explore alternatives | `variant` |
| Taste and philosophy | `emil-design-eng` |

Third-party skills are vendored from emilkowalski/skill (c8a7962), jakubkrehel/skills (60bf140) and anthropics/skills (ca45fc4). Licenses are in `.claude/skills/_licenses/`.

## House rules

- The comic intro's timeline lives in the `--t-*` custom properties on `.comic-intro`. The JS ends the intro on `animationend`, so retime it in CSS only.
- Respect `prefers-reduced-motion` everywhere. The intro is skipped entirely under it.
- Use typographic punctuation in rendered text (’ “ ” —). Keep straight quotes inside code samples.
- Arabic text: `lang="ar" dir="rtl"`.
