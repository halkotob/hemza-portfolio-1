# Design system (v2)

Built with the `frontend-design` two-pass method, then checked against the `avoid-ai-design` catalog before any code was written. Brief: [BRIEF.md](BRIEF.md). Structure: [information-architecture.md](information-architecture.md).

## Color

| Token | Hex | Job |
| --- | --- | --- |
| `--paper` | `#FFFFFF` | Page ground. White bond paper. Not cream (SD1). |
| `--desk` | `#E6E7E2` | The surface the script pages sit on, in the reader only |
| `--ink` | `#000000` | Toner black. Screenplay text and headings. |
| `--ink-2` | `#45464A` | Secondary prose, 9.4:1 on white |
| `--pen` | `#1F3A9A` | Ballpoint blue. Every action (links, buttons, focus), nothing else. 9.9:1 on white. |
| `--rev-blue` / `--rev-pink` / `--rev-yellow` | `#CFE0F5` / `#F7D3DC` / `#F5EBA0` | Revision paper. One per script, in the industry's revision order. |

## Type

- **Archivo** (variable width and weight) is the only interface face. The width axis is the design tool: `wdth 68` at weight 800 for the name and section heads, so they read like the condensed type on a slate or a call sheet, and `wdth 100` at weight 400 for prose.
- **Courier Prime** is for screenplay text only. Never for labels.
- Scale (rem): 0.875 small, 1.125 body, 1.5 subhead, 2.75 section, clamp(3.5, 11vw, 9) name. Line heights: 0.9 display, 1.15 heads, 1.55 body. Measure 62ch.
- Everything is sentence case. The only caps are where a screenplay uses them: scene headings and character names.

## Layout

12 columns, max width 1280px, with column spans that change by section (L6):

```
HERO + READER (#scripts): asymmetric split
┌──────────────── 5 ───────────────┬──────────────────── 7 ─────────────────────┐
│ Hemza                            │  [The Bear][Squared Circle][Chivalry]  tabs │
│ Alkotob        (condensed, huge) │  ┌──────── blue paper ───────────────┐▌▌   │
│                                  │  │ INT. THE BEAR/KITCHEN              │      │
│ I write TV and features, and I   │  │ Carmy preps for dinner service…    │      │
│ run cloud infrastructure. Detroit│  │            CARMY                   │      │
│                                  │  │       …dialogue…                   │      │
│ TV spec, comedy-drama, 37 pages  │  │ ░░░░░░░░ fades into the desk ░░░░░ │      │
│ logline…                         │  └────────────────────────────────────┘      │
│ [Read the first 10 pages] Full ↗ │        the other two pages peek out behind  │
└──────────────────────────────────┴──────────────────────────────────────────────┘

ENGINEERING: heading in 3 columns, prose in 6, résumé link in 3
GAMES: IslamDunk gameplay in 7, text in 5; then 2 smaller entries as a plain list
ABOUT: a single 6-column reading column, offset to start at column 4
CONTACT: the email address set at section-head size as the main action
```

Mobile (<820px): one column. Name, intro, tabs, script details, page.

## Principles

1. **His writing is the hero.** The first page is real, selectable text set to screenplay spec: action full width, character cue at about 37% of the line, dialogue at 17% with a 35-character measure, parentheticals at 27%.
2. **Color has a job.** Revision colors mark scripts. Pen blue marks actions. Nothing else gets color.
3. **True numbers in sentences.** No stat strips.
4. **One moment of motion.** Clicking a tab slides the new page in from behind. Keyboard switches are instant (`remove-animations`: no motion on keyboard actions). There's nothing on scroll.
5. **No chrome without information.** No eyebrows, no icons, no pills, no window dots, no decorative rules.

## Pass two: review against the generic defaults

| Risk in the first-pass plan | Verdict |
| --- | --- |
| Split hero with a headline on the left and a visual on the right (L1 family) | Kept. The visual is the actual product (his writing), not a stock mock. The split is asymmetric (5/7). |
| Pastel colors can read as "friendly startup" | Kept, because each is tied to the revision-paper meaning and there are only three, used solely on script pages. |
| Blue links are a web default | Kept, deliberately: a ballpoint, not `#0000EE` or Tailwind `blue-600`. Its hue (~226°) stays clear of the indigo CTA tell (C2). |
| Condensed heavy sans as display | Kept. Width comes from a single variable family, and Archivo isn't on the T2 tasteful-font list. |
| Revised from the first pass: a numbered page header ("1.") on the script | Cut. Real scripts don't number page one, and screenwriters would notice. |
| Revised from the first pass: a sticky header with backdrop blur | Cut (K3). The header is static. The page is short enough. |
| Revised from the first pass: role cards for engineering | Cut (L2). Prose with real numbers instead. |
