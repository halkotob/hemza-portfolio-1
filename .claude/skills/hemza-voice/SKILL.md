---
name: hemza-voice
description: Hemza Alkotob's portfolio voice and the v2 "reading desk" design rules. Use whenever writing or editing copy, sections, scripts, projects, bios, headings, buttons, alt text or meta descriptions on this site, or when another design skill's advice might flatten its personality. Triggers on "add a script", "add a project", "write copy", "new section", "rewrite", "make it sound like me", "on brand", "personality", "voice".
---

# Hemza's voice and the reading desk

The site is a reading desk: a visitor should be reading Hemza's actual writing within five seconds. The full brief is `docs/design/BRIEF.md`, the system is `docs/design/DESIGN.md`, and the structure is `docs/design/information-architecture.md`. Read the brief before any visual change. Other skills own craft: typography, UI, animation, accessibility. This one owns character. It wins on tone. They win on correctness and accessibility.

## Who is talking

First person, conversational, peer to peer. A writer talking to another writer, an engineer talking to a teammate.

- Short sentences with concrete nouns. True numbers from the résumé go inside sentences ("75+ AWS environments… at 99.9% availability"), never in a stat strip.
- Show enthusiasm through specifics. Never use "passionate", "innovative", "leverage", "seamless", "cutting-edge" or "synergy", and never open with "I am a … who …".
- State faith and heritage plainly. Don't explain them.
- Humor comes from juxtaposition and the work itself (a kitchen full of bears), not from jokes in the chrome.
- Follow `stop-slop`: cut adverbs in site copy, use active voice, avoid "not X, it's Y", vary sentence rhythm, avoid pull-quote lines. Site copy avoids em dashes. Screenplay excerpts are his text and stay as written.

Calibration lines:

> I write for TV and film, and I run cloud infrastructure at Alfa. Detroit is home.
> When production breaks, I run the root-cause analysis and write the recovery runbook, so it doesn't break the same way twice.
> Hiring for a cloud team, making something with a story in it, or want to trade movie recs? Email me.

## Adding a script

1. Pick the next revision color in industry order: white, blue, pink, yellow, green, goldenrod (blue, pink and yellow are taken). Add it as a `--rev-*` token.
2. Add a tab (`role="tab"`, with `aria-controls` pointing at both the details panel and the page panel), a details panel, and a page panel. Copy an existing set.
3. Write the details: a meta sentence (format, genre, runtime, pages, comps), a logline (protagonist, situation, stakes, in present tense), "Read the first 10 pages" and "Full script (N pages)".
4. Set page one as text: `pdftotext -layout -f 1 -l 1 file.pdf -`, then mark it up with `sp-scene`, `sp-action`, `sp-char`, `sp-dialogue` and `sp-transition-in`. Run about 25 lines so the text reaches past the fade. Never print a page number on page one.
5. Fix obvious typos in the excerpt only, and tell Hemza. The PDF stays as it is.

## Adding a game or other project

The newest or strongest one is the `.feature`: a real screenshot or capture, never a fake window. The rest go in `.minor-list` as title, year and one sentence.

## Visual rules (v2)

- Color has a job. Revision paper marks scripts, pen blue (`--pen`) marks actions only, and everything else is black on white. Never add a hue without a job.
- Archivo is the only interface face. Use the width axis for hierarchy (`font-stretch: 68%` at weight 800 for display). Courier Prime is for screenplay text only.
- No all-caps labels, no middle-dot meta strings, no arrows on links, no icons, no pills, no card grids, no decorative numbering, no backdrop blur, no dark mode. Run `avoid-ai-design` on any visual change.
- One moment of motion: a clicked tab brings its page in from behind. Keyboard switching is instant. Nothing animates on scroll.

## Before you finish

- Does every new string sound like the calibration lines? Read it aloud.
- Curly quotes and apostrophes in rendered text.
- Is any new label carrying information the heading doesn't? If not, cut it.
- Did `avoid-ai-design`'s checks still pass (see `CLAUDE.md`)?
