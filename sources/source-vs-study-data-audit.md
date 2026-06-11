# Source vs presentation data audit

Audit date: 2026-06-11

## Source files

These are now treated as the highest available source of truth for the ASNO 2026 brain-tumor presentation, because the original monthly OP schedule Excel files are no longer available.

- `sources/Brain tumor surgery list_Jan2026.docx`
  - Analysis report / manuscript-source document.
  - Contains methods, exclusions, histopathology tables, procedure table, and discussion notes.
- `sources/Brain tumor surgery list_plots_Jan2026.xlsx`
  - Aggregate analysis workbook for plotting.
  - Sheets:
    - `Surgery手術數` — by-surgery aggregate tables, n = 3,309.
    - `Patient病人數` — by-patient aggregate tables, n = 2,875.

Raw case-level OP schedule files (`OP schedule 202008.xlsx` through `OP schedule 202507.xlsx`) are not available in this repo and are not considered available for reproduction.

## Overall conclusion

Most presentation data in `presentation/src/data/study-data.ts` matches the January 2026 source files, especially:

- cohort size: 3,309 surgeries / 2,875 patients
- final exclusion flow: 3,563 → exclude 57 → exclude 197 → 3,309
- patient demographics: 1,549 female patients; mean age 54.2 ± 16.7
- main histology counts and top-four surgery proportions
- female-patient pie chart values
- pediatric-patient pie chart values
- CBTRUS primary-CNS denominator calculation: 3,309 − 619 = 2,690

However, several procedure-table and minor histology values in the current presentation layer do **not** exactly match the source files.

## Matched values

### Cohort and demographics

| Item | Source | `study-data.ts` | Status |
|---|---:|---:|---|
| Total surgeries | 3,309 | 3,309 | match |
| Total patients | 2,875 | 2,875 | match |
| Female patients | 1,549 | 1,549 | match |
| Mean age | 54.2 | 54.2 | match |
| Age SD | 16.7 | 16.7 | match |
| Surgeries age ≥40 | 2,674 / 3,309 = 80.8% | 80.8% | match |
| Patient female % | 1,549 / 2,875 = 53.9% | 53.9% | match |

### Main by-surgery histology values

| Histology | Source count | Source % | `study-data.ts` | Status |
|---|---:|---:|---:|---|
| Meningioma G1-2 | 682 | 20.6% | 20.6%, n=682 | match |
| Metastatic tumors | 619 | 18.7% | 18.7%, n=619 | match |
| Pituitary tumors | 546 | 16.5% | 16.5%, n=546 | match |
| Diffuse glioma G4 / GBM | 543 | 16.4% | 16.4%, n=543 | match |
| Diffuse glioma low-grade | 167 | 5.0% | 5.0% | match |
| Other benign tumors | 161 | 4.9% | 4.9% | match |
| Diffuse glioma grade 3 | 140 | 4.2% | 4.2% | match |
| Schwannoma | 124 | 3.7% | 3.7% | match |
| Lymphoma | 86 | 2.6% | 2.6% | match |
| Other malignant tumors | 65 | 2.0% | 2.0% | match |
| Neuronal and mixed neuronal-glial | 39 | 1.2% | 1.2% | match |
| Meningioma G3 | 33 | 1.0% | 1.0% | match |
| Germ cell tumors | 29 | 0.9% | 0.9% | match |
| Embryonal tumors | 19 | 0.6% | 0.6% | match |

## Discrepancies found and fixed

Status: fixed in the presentation source after this audit.

### 1. Minor histology percentages: other astrocytic vs ependymal

Source is by-surgery table from `Surgery手術數`:

| Histology | Source count | Source % of 3,309 | Current `study-data.ts` | Recommended |
|---|---:|---:|---:|---:|
| Other astrocytic glioma | 25 | 0.8% | 0.8% | fixed |
| Ependymal tumors | 31 | 0.9% | 0.9% | fixed |

Earlier presentation data had these two minor percentages reversed/rounded incorrectly; `study-data.ts` now matches the source workbook.

### 2. Procedure totals in `study-data.ts` and Chapter 7 slide table

Source is Table 4 from DOCX and rows 138–144 in the XLSX `Surgery手術數` sheet.

| Procedure | Source total | Source % | Current visible slide value | Recommended |
|---|---:|---:|---|---|
| Resection ≤3 cm | 436 | 13.2% | 436 / 13.2% | fixed |
| Resection 3.1–6 cm | 1,243 | 37.7% | 1,243 / 37.7% | match |
| Resection >6 cm | 541 | 16.4% | 541 / 16.4% | match |
| Transsphenoidal pituitary | 550 | 16.6% | 550 / 16.6% | match |
| Skull base tumor surgery | 422 | 12.8% | 422 / 12.8% | fixed |
| Biopsy | 117 | 3.5% | 117 / 3.5% | match |

Earlier Chapter 7 duplicated the `541 / 16.4%` value for both `Resection >6 cm` and `Skull base resection`. The source files say skull base is `422 / 12.8%`; the chapter now uses that value.

### 3. Five-year procedure table in `VOLUME_BY_YEAR`

Earlier `VOLUME_BY_YEAR` in `study-data.ts` contained approximate values and middle-year totals that did not match the January 2026 source table. It now uses the exact source table below.

Recommended exact source values:

| Year | ≤3 cm | 3.1–6 cm | >6 cm | Transsphenoidal | Skull base | Biopsy | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2020-21 | 71 | 201 | 86 | 94 | 90 | 23 | 565 |
| 2021-22 | 72 | 237 | 103 | 124 | 73 | 21 | 630 |
| 2022-23 | 85 | 254 | 110 | 116 | 74 | 20 | 659 |
| 2023-24 | 103 | 291 | 103 | 102 | 93 | 28 | 720 |
| 2024-25 | 105 | 260 | 139 | 114 | 92 | 25 | 735 |
| Total | 436 | 1,243 | 541 | 550 | 422 | 117 | 3,309 |

Earlier `study-data.ts` values, before correction:

| Year | ≤3 cm | 3.1–6 cm | >6 cm | Transsphenoidal | Skull base | Biopsy | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2020-21 | 78 | 213 | 92 | 93 | 68 | 21 | 565 |
| 2021-22 | 70 | 235 | 100 | 124 | 77 | 20 | 626 |
| 2022-23 | 84 | 252 | 113 | 116 | 75 | 20 | 660 |
| 2023-24 | 103 | 290 | 102 | 109 | 95 | 24 | 723 |
| 2024-25 | 105 | 253 | 144 | 108 | 93 | 32 | 735 |

The current comment in `study-data.ts` explicitly says the segments are proportional approximations. Now that the exact source workbook is available, this should be replaced by the exact table above.

### 4. Manuscript/article downstream mismatch

`article.md` previously repeated older procedure values for resection ≤3 cm and skull base surgery.

The January 2026 source files say, and `article.md` now reflects:

- resection ≤3 cm = 436 / 3,309 = 13.2%
- skull base = 422 / 3,309 = 12.8%

The manuscript text has been corrected accordingly.

## Patch applied

The following files were updated to align with the January 2026 source files:

1. `presentation/src/data/study-data.ts`
   - replaced `VOLUME_BY_YEAR` with exact source values
   - corrected the comment above procedure data
   - corrected `other-astro` and `ependymal` minor percentages

2. `presentation/src/chapters/07-procedures/Procedures.tsx`
   - changed skull base row to `12.8%`, `n = 422`
   - changed resection ≤3 cm row to `13.2%`, `n = 436`

3. Synchronized narration/docs:
   - `presentation/src/chapters/07-procedures/narrations.ts`
   - `script.md`
   - `script.zh-TW.md`
   - `outline.md`
   - `outline.zh-TW.md`
   - `article.md`

## Source-of-truth rule after adding these files

Use this hierarchy going forward:

1. `sources/Brain tumor surgery list_Jan2026.docx` and `sources/Brain tumor surgery list_plots_Jan2026.xlsx`
2. `presentation/src/data/study-data.ts` for normalized presentation data
3. `presentation/src/chapters/*/*.tsx` for rendered slide copy/layout
4. `script.md` / `narrations.ts` for spoken content
5. `exports/*.pdf` / `exports/*.pptx` as static snapshots only
