# Surgical Management of Brain Tumors in Taiwan — ASNO 2026 Oral

Click-driven web presentation for an ASNO 2026 oral abstract:
**A Five-Year Descriptive Analysis at Chang Gung Memorial Hospital, Linkou (2020–2025).**

🌐 **Live**: [haobbc.github.io/brain-tumor-asno](https://haobbc.github.io/brain-tumor-asno/)

> **⚠️ Data status — unpublished**
> The numbers shown are from an internal retrospective cohort (IRB-pending
> for journal submission). They are presented here as part of an ASNO 2026
> oral conference talk and may be cited as a conference presentation, but
> are **not** a peer-reviewed publication. The final dataset and analyses
> require IRB approval before submission to a peer-reviewed journal.

---

## Talk structure (9 chapters · 61 steps · ~7-9 min spoken)

| # | Chapter | Steps |
|---|---|---|
| 1 | Context — why Taiwan data matters | 9 |
| 2 | Methods — study design + cohort flow | 7 |
| 3 | Cohort + 5-year volume | 7 |
| 4 | Central finding — histopathology pie | 7 |
| 5 | CGMH × CBTRUS — alignment + divergence | 5 |
| 6 | Demographics — gender + pediatric | 9 |
| 7 | Surgical procedure mix | 4 |
| 8 | Limitations + clinical implications | 8 |
| 9 | Take-home + future directions | 5 |

## Key findings

- **N = 3,309** surgeries from **2,875** unique patients (Aug 2020 – Jul 2025)
- Top histopathologies: Meningioma G1-2 (20.6%) · Metastatic (18.7%) · Pituitary (16.5%) · GBM (16.4%)
- **+30%** surgical volume growth across 5 years (565 → 735)
- **Denominator-matched CBTRUS comparison** (n = 2,690 primary CNS surgeries, excludes metastatic):
  - Meningioma underrepresented vs CBTRUS (26.6% vs 39.7%) — conservatives stay in community
  - GBM **overrepresented** vs CBTRUS (20.2% vs 14.2%) — tertiary referral concentrates complex malignant cases
  - Pituitary 20.3% — within Molitch's community range 10–22%

## Workflow artifacts

- [`article.md`](article.md) — full English manuscript
- [`script.md`](script.md) — 9-chapter spoken script (~999 words / ~7.7 min @ 130 wpm)
- [`outline.md`](outline.md) — chapter × step development plan
- [`references-map.md`](references-map.md) — bibliographic mapping for every cited claim
- [`references.bib`](references.bib) — 57-entry BibTeX library
- [`exports/brain-tumor-asno-slides.pdf`](exports/brain-tumor-asno-slides.pdf) — 16:9 static slide backup PDF
- [`exports/brain-tumor-asno-slides.pptx`](exports/brain-tumor-asno-slides.pptx) — editable static slide backup deck

## Stack

- Vite + React + TypeScript
- Theme: monochrome-print (refined NEJM / Wallpaper print magazine aesthetic)
- All charts native SVG (`src/components/charts/Pie.tsx`, `StackedBar.tsx`) with real cohort data in `src/data/study-data.ts`
- Built with the [`web-video-presentation`](https://github.com/ConardLi/garden-skills/tree/main/skills/web-video-presentation) skill

## Local development

```bash
cd presentation
npm install
npm run dev          # http://localhost:5175
npm run build        # production bundle → dist/
```

## Citation note

When referencing data from this presentation in academic work, please
clarify that it represents a single-center retrospective cohort presented
at ASNO 2026 and is **not yet peer-reviewed**. The IRB-approved
manuscript is in preparation.

---

🤖 Built with [Claude Code](https://claude.com/claude-code).
