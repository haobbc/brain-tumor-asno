# Citation map for script + outline

Every empirical claim or comparison in the talk traces back to one of the
entries below. Verified against `references.bib` on 2026-05-11.

| # | Used in | Claim / context | bib key | Citation badge for on-screen |
|---|---|---|---|---|
| 1 | ch1, ch5 | CBTRUS as global registry / meningioma 39.7% / GBM 14.2% / GBM = 50.1% of malignant | `ostrom2022CBTRUSStatisticalReport` | Ostrom et al · Neuro-Oncology 2022 |
| 2 | ch6 (pediatric) | Pediatric CBTRUS reference | `price2025CBTRUSStatisticalReport` | Price et al · Neuro-Oncology 2025 |
| 3 | ch2 | WHO 2016 CNS tumor classification | `louis20162016WorldHealth` | Louis et al · Acta Neuropathol 2016 |
| 4 | ch2, ch8 | WHO 2021 CNS tumor classification (molecular markers: IDH, 1p19q, MGMT) | `louis20212021WHOClassification` | Louis et al · Neuro-Oncology 2021 |
| 5 | ch1, ch8 | Brain tumor epi consensus (referral bias / risk factors) | `bondy2008BrainTumorEpidemiology` | Bondy et al · Cancer 2008 |
| 6 | ch5 | Pituitary 10-22% community prevalence | `molitch2017DiagnosisTreatmentPituitary` | Molitch · JAMA 2017 |
| 7 | ch6 | Meningioma hormonal hypothesis / female predominance | `wiemels2010EpidemiologyEtiologyMeningioma` | Wiemels et al · J Neurooncol 2010 |
| 8 | ch1, ch3 | Asian context — Korea cancer statistics | `jung2019CancerStatisticsKorea` | Jung et al · Cancer Res Treat 2019 |
| 9 | ch1 | Asian context — China cancer statistics | `chen2016CancerStatisticsChina` | Chen et al · CA Cancer J Clin 2016 |

## On-screen rendering convention

Each citation badge appears as a small mono-typeface line at corner of slide:
- Format: `<First-author> et al · <journal abbrev> <year>`
- Position: bottom-right of stage, mono, low contrast
- Should ONLY appear on steps where the claim is being made
- Multiple cites on one step: separate with `;` (rare; only if comparing two sources)

## Denominator note (important for ch5 + ch9)

CBTRUS (Ostrom 2022) reports proportions as **% of all primary CNS tumors**.
To compare apples-to-apples, our cohort uses a primary-CNS denominator
that excludes the 619 metastatic surgeries:

- Primary CNS in our cohort = 3,309 − 619 = **2,690**
- All-meningioma share (primary CNS) = (682 + 33) / 2,690 = **26.6%**
- GBM share (primary CNS) = 543 / 2,690 = **20.2%**
- Pituitary share (primary CNS) = 546 / 2,690 = **20.3%**

Under this denominator:
- Meningioma is **lower** than CBTRUS 39.7% (consistent with conservative
  management diverting many CBTRUS meningiomas away from the OR)
- GBM is **higher** than CBTRUS 14.2% (direction reversed from the article's
  original framing, which used mismatched denominators — supports
  tertiary-referral concentration of complex malignant cases)
- Pituitary sits within Molitch's community-prevalence band of 10–22%

## Verification

All 9 keys above confirmed present in `references.bib`. Available DOIs:
- Ostrom 2022 → 10.1093/neuonc/noac202
- Price 2025 → 10.1093/neuonc/noaf168
- Louis 2016 → 10.1007/s00401-016-1545-1
- Louis 2021 → 10.1093/neuonc/noab106
- Bondy 2008 → 10.1002/cncr.23741
- Molitch 2017 → 10.1001/jama.2016.19699
- Wiemels 2010 → 10.1007/s11060-010-0386-3
- Jung 2019 → 10.4143/crt.2019.138
- Chen 2016 → 10.3322/caac.21338

If user wants additional supporting refs (e.g., Stupp 2005 for GBM survival; Simpson 1957 for meningioma grading), they're already in `references.bib` and can be added by editing this map and the relevant chapter info pool.
