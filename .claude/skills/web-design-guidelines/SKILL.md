---
name: web-design-guidelines
description: Review UI code for Vercel Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
---

# Web Interface Guidelines

Review the given files (or all of `*.html`, `css/`, `script.js` when none are named) against the rules in [GUIDELINES.md](GUIDELINES.md).

That file is a pinned snapshot of vercel-labs/web-interface-guidelines (commit 434b7f9, MIT). It is read locally on purpose: the upstream skill fetches fresh rules from the internet on every run, and a pinned copy keeps reviews repeatable and can't change under you. To update, replace GUIDELINES.md with a newer `command.md` after reading the diff.

## On this site

- The rules assume a React app. Translate them: `onClick` → event listeners in `script.js`, `focus-visible:ring-*` → the `:focus-visible` rule in `css/styles.css`, hydration rules don't apply (static HTML).
- Two copy rules conflict with the site's voice and lose to `hemza-voice`: "Second person; avoid first person" (it's a personal site, first person is the point) and "Title Case for headings/buttons" (the site uses sentence case on buttons).

## Output

Group by file. `file:line - finding`. Terse. `✓ pass` for files with nothing. No preamble.
