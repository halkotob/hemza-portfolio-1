# Information architecture (v2)

Produced with the `information-architecture` skill.

## Summary

The old site split nine items of content across three pages, repeated the same project cards on two of them, and mixed in-page links with page links in one nav. The new site is a single page with five sections, a script reader built into the top, and redirects from the old URLs. Six projects and two jobs don't need a hierarchy deeper than one level.

## Audiences and mental models

- **Readers (film/TV)** think in projects: title, format, logline, pages. They want to start reading immediately.
- **Hiring managers (engineering)** think in roles: employer, title, scale, stack. They scan for numbers, then open the résumé.
- **Everyone** expects contact details at the end and in the nav.

## Sitemap

```
/                         Home (one page)
├── #scripts              Script reader: 3 scripts, first page inline, PDFs on demand
├── #engineering          Day jobs: Alfa (cloud), Masjidal (IoT)
├── #games                IslamDunk (featured), SuperPy, Watto's Junkyard
├── #about                Short bio
└── #contact              Email and profiles
/pdfs/*.pdf               Scripts (first 10 and full) and résumé
/films.html  → /#scripts  Redirect (old links keep working)
/code.html   → /#games    Redirect
```

## URL structure

- Sections use fragment ids with one lowercase word each: `#scripts`, `#engineering`, `#games`, `#about`, `#contact`.
- A deep link to a script uses its tab id in the hash, for example `#scripts/the-bear`. The reader opens that script. That's the URL-reflects-state rule from `web-design-guidelines`.
- PDF names stay as they are, because people may have bookmarked them.

## Navigation

- **Primary:** Scripts, Engineering, Games, About, Contact. All five are in-page links in the same order as the page.
- **Utility:** Résumé (a PDF that opens in a new tab), set apart visually from the section links.
- **Footer:** an email line and the four profiles. No link columns (L8).
- No breadcrumbs: one level deep.

## Labels

| Concept | Label | Rejected and why |
| --- | --- | --- |
| Screenplays | Scripts | "Films" was wrong: none are films yet |
| Day jobs | Engineering | "Work" is ambiguous on a writer's site |
| Code projects | Games | Every code project on the site is a game |
| Read excerpt | Read the first 10 pages | Specific beats "Read" |
| Full PDF | Full script (37 pages) | The page count sets expectations |

## Taxonomy

Scripts: format (TV spec, TV pilot, feature), genre, pages, comps. Games: platform, year, stack. That's flat, with no tags, because six items don't need faceting.

## Implementation notes

- The script reader is an ARIA tablist with keyboard arrows, Home and End, and roving tabindex. Each panel holds the page-one excerpt as real text, not an image, so it's selectable and searchable.
- Page-one excerpts come from the PDFs (`pdftotext`) and are set as HTML with screenplay classes: scene heading, action, character, dialogue, parenthetical.
- The redirect pages use `<meta http-equiv="refresh">` plus a visible link and `rel="canonical"`.
