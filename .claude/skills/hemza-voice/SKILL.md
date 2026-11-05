---
name: hemza-voice
description: Hemza Alkotob's portfolio voice and comic-book design language. Use whenever writing or editing any copy, section, page, card, or visual element on this site — new projects, scripts, bios, headings, buttons, alt text, meta descriptions, error or empty states — or when another design skill's advice might flatten the site's personality. Triggers on "add a project", "write copy", "new section", "rewrite", "make it sound like me", "on brand", "personality", "voice".
---

# Hemza's voice and the comic-book system

This site is a comic book about one person: a Muslim Syrian-American cloud engineer and screenwriter from Detroit who loves mash-ups. Every change should read like a new page in the same issue. Other skills (typography, UI, animation) own the craft. This one owns the character. When they conflict on tone, this wins; when they conflict on correctness or accessibility, they win.

## Who is talking

First person, warm, plain, a little playful. Confident without bragging. A film nerd who also gets paged at 3am.

- Short sentences. Concrete nouns. Real numbers when they exist ("75+ hosted client environments", not "many clients").
- Enthusiasm is shown through specifics, never adjectives like "passionate", "innovative", "cutting-edge", "seamless", "leverage".
- Faith and heritage are stated plainly and proudly, never explained or apologized for.
- Humor comes from juxtaposition, not jokes: "Carmy calls out on the day a food critic is coming."
- Mysteries and clues are the throughline: "looking for clues that lead to a larger truth", root-causing outages like breaking a pilot.

Real lines to calibrate against:

> I'm a proud Muslim Syrian-American, a film nerd with a computer science degree, and a big believer in mash-ups.
> Hiring for a cloud team, making something with a story in it, or just want to trade movie recs? I'd love to hear from you.
> Nothing matters until you know what matters.

## The mash-up formula (required on every work card)

Every project gets a one-line mash-up in the form `X <em>meets</em> Y`, in the `.mashup` element:

- Comps for scripts use `<cite>`: `<cite>30 Rock</cite> <em>meets</em> <cite>GLOW</cite>`.
- Concepts for games and code use plain words: `Masjid league <em>meets</em> arcade basketball`.
- Then a one- or two-sentence logline in `.card-logline`: protagonist + inciting situation + what's at stake. Present tense. No "This project is…".

Card kind labels are short and literal: `Game`, `TV Spec`, `TV Pilot`, `Feature`, `Terminal Game`.

## Comic-book structure

The page is an issue. Keep the metaphor consistent and don't overuse it:

- Hero is the title page (`Issue #1 · Detroit, MI`).
- Sections are chapters with a `.kicker`: `Chapter 1 · Origin story`, `Chapter 2 · The collected works`. A new section gets the next chapter number and a two-to-four-word comic-flavored subtitle.
- Contact is `Next issue…`. Footer offers to "Read the opening again".
- Speech bubbles (`.speech`) are Hemza talking. Caption boxes (`.caption-box`) are the narrator stating facts. Never put résumé facts in a speech bubble or jokes in a caption box.
- At most one or two comic devices per section. The comic layer frames the work; it never buries it.

## Visual language

- Palette tokens only (`--bg`, `--surface`, `--accent` orange, `--green`, `--ink`, `--paper`). No new hues without updating `:root`.
- Fonts have jobs: Bangers (`--font-comic`) for lettering, callouts, and SFX only; Playfair Display for headings; Courier Prime for body, a nod to screenplay format; Aref Ruqaa for the Arabic signature حمزة. Don't add a fifth family.
- Arabic text always carries `lang="ar" dir="rtl"`; decorative instances also get `aria-hidden="true"` with the English nearby.
- Comic lettering is tilted (−2° to −8°), hard offset shadows (`3px 3px 0 var(--ink)`), no blur shadows on comic elements.
- The Damascene star pattern stays subtle (opacity ≈ 0.035). Heritage is texture, not wallpaper.

## Motion

Motion is part of the comic: pops, slams, stamps. It plays once per visit on the intro, and is quiet elsewhere. Use the `choreograph` and `animate` skills for timing; the intro's timeline lives in CSS custom properties on `.comic-intro` (`--t-*`), so retime there, not in JS. Every effect must collapse under `prefers-reduced-motion`.

## Before you finish

- Does every new string sound like the calibration lines above? Read it aloud.
- Curly quotes and apostrophes in rendered text (’ “ ”), em dashes for breaks.
- Did a new work card get kind + mash-up + logline + a primary action?
- Are facts in captions and voice in bubbles?
- Any banned words (passionate, innovative, leverage, seamless, cutting-edge, synergy, "I am a … who …" openers)?
