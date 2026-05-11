/* Real data extracted from the CGMH Linkou brain-tumor surgical cohort
   (Aug 2020 – Jul 2025, N=3,309 surgeries / N=2,875 unique patients).
   Source: article.md §Results + Brain Tumor surgery_plots demo.pptx.

   This is the single source of truth for all charts. Update once, all
   pies + bars + cards reflect the change. */

export const STUDY_META = {
  totalSurgeries: 3309,
  totalPatients: 2875,
  totalFemalePatients: 1549,
  windowStart: "Aug 2020",
  windowEnd: "Jul 2025",
  meanAge: 54.2,
  meanAgeSd: 16.7,
  pctAgeOver40: 80.8,
  pctFemale: 53.9,
} as const;

export type HistologySlice = {
  id: string;
  label: string;
  shortLabel: string;
  pct: number;
  n?: number;
  group: "top4" | "minor"; // colour tier
};

/* All surgeries (n=3,309) — detailed pie, ordered by decreasing pct */
export const HISTOLOGY_ALL: HistologySlice[] = [
  { id: "meningioma-12",   label: "Meningioma, grade 1-2",                shortLabel: "Mening G1-2", pct: 20.6, n: 682, group: "top4" },
  { id: "metastatic",      label: "Metastatic tumors",                    shortLabel: "Metastatic",  pct: 18.7, n: 619, group: "top4" },
  { id: "pituitary",       label: "Pituitary tumors",                     shortLabel: "Pituitary",   pct: 16.5, n: 546, group: "top4" },
  { id: "glioma-g4",       label: "Diffuse glioma, grade 4 (GBM)",        shortLabel: "Glioma G4",   pct: 16.4, n: 543, group: "top4" },
  { id: "glioma-low",      label: "Diffuse glioma, low-grade",            shortLabel: "Glioma low",  pct: 5.0,                  group: "minor" },
  { id: "other-benign",    label: "Other benign tumors",                  shortLabel: "Other benign",pct: 4.9,                  group: "minor" },
  { id: "glioma-g3",       label: "Diffuse glioma, grade 3",              shortLabel: "Glioma G3",   pct: 4.2,                  group: "minor" },
  { id: "schwannoma",      label: "Schwannoma",                           shortLabel: "Schwannoma",  pct: 3.7,                  group: "minor" },
  { id: "lymphoma",        label: "Lymphoma",                             shortLabel: "Lymphoma",    pct: 2.6,                  group: "minor" },
  { id: "other-malignant", label: "Other malignant tumors",               shortLabel: "Other malig", pct: 2.0,                  group: "minor" },
  { id: "neuronal",        label: "Neuronal and mixed neuronal-glial",    shortLabel: "Neuronal",    pct: 1.2,                  group: "minor" },
  { id: "meningioma-3",    label: "Meningioma, grade 3",                  shortLabel: "Mening G3",   pct: 1.0,                  group: "minor" },
  { id: "germ-cell",       label: "Germ cell tumors",                     shortLabel: "Germ cell",   pct: 0.9,                  group: "minor" },
  { id: "other-astro",     label: "Other astrocytic glioma",              shortLabel: "Other astro", pct: 0.9,                  group: "minor" },
  { id: "ependymal",       label: "Ependymal tumors",                     shortLabel: "Ependymal",   pct: 0.8,                  group: "minor" },
  { id: "embryonal",       label: "Embryonal tumors",                     shortLabel: "Embryonal",   pct: 0.6,                  group: "minor" },
];

/* Female cohort (n=1,549). Source: pptx slide 7. */
export const HISTOLOGY_FEMALE: HistologySlice[] = [
  { id: "meningioma-12",   label: "Meningioma, grade 1-2",     shortLabel: "Mening G1-2", pct: 30.2, group: "top4"  },
  { id: "metastatic",      label: "Metastatic tumors",         shortLabel: "Metastatic",  pct: 18.0, group: "top4"  },
  { id: "pituitary",       label: "Pituitary tumors",          shortLabel: "Pituitary",   pct: 17.5, group: "top4"  },
  { id: "glioma-g4",       label: "Diffuse glioma, grade 4",   shortLabel: "Glioma G4",   pct: 10.7, group: "top4"  },
  { id: "glioma-low",      label: "Diffuse glioma, low-grade", shortLabel: "Glioma low",  pct: 4.5,  group: "minor" },
  { id: "schwannoma",      label: "Schwannoma",                shortLabel: "Schwannoma",  pct: 4.2,  group: "minor" },
  { id: "other-benign",    label: "Other benign",              shortLabel: "Other benign",pct: 3.7,  group: "minor" },
  { id: "lymphoma",        label: "Lymphoma",                  shortLabel: "Lymphoma",    pct: 3.1,  group: "minor" },
  { id: "glioma-g3",       label: "Diffuse glioma, grade 3",   shortLabel: "Glioma G3",   pct: 3.0,  group: "minor" },
  { id: "other-malignant", label: "Other malignant",           shortLabel: "Other malig", pct: 1.7,  group: "minor" },
  { id: "neuronal",        label: "Neuronal and mixed",        shortLabel: "Neuronal",    pct: 1.0,  group: "minor" },
  { id: "other-misc",      label: "Other (combined)",          shortLabel: "Other",       pct: 2.4,  group: "minor" },
];

/* Pediatric (age 0–14). Source: pptx slide 8. */
export const HISTOLOGY_PEDIATRIC: HistologySlice[] = [
  { id: "other-benign",    label: "Other benign tumors",          shortLabel: "Other benign", pct: 26.1, group: "top4"  },
  { id: "embryonal",       label: "Embryonal tumors",             shortLabel: "Embryonal",    pct: 14.8, group: "top4"  },
  { id: "germ-cell",       label: "Germ cell tumors",             shortLabel: "Germ cell",    pct: 13.6, group: "top4"  },
  { id: "other-astro",     label: "Other astrocytic glioma",      shortLabel: "Other astro",  pct: 12.5, group: "minor" },
  { id: "glioma-g4",       label: "Diffuse glioma, grade 4",      shortLabel: "Glioma G4",    pct: 10.2, group: "minor" },
  { id: "ependymal",       label: "Ependymal tumors",             shortLabel: "Ependymal",    pct: 9.1,  group: "minor" },
  { id: "glioma-low",      label: "Diffuse glioma, low-grade",    shortLabel: "Glioma low",   pct: 5.7,  group: "minor" },
  { id: "other-malignant", label: "Other malignant tumors",       shortLabel: "Other malig",  pct: 5.7,  group: "minor" },
  { id: "neuronal",        label: "Neuronal and mixed",           shortLabel: "Neuronal",     pct: 2.3,  group: "minor" },
];

/* Surgical procedures over 5 years (stacked bar).
   Source: pptx slide 4. Per-year totals confirmed; segments are
   proportional approximations based on the stable mix observed across
   years × yearly totals. The article states the mix stays proportional
   so segment ratios are roughly:
     ≤3cm resection      ~13.9%
     3.1–6cm resection   ~37.7%
     >6cm resection      ~16.4%
     transsphenoidal     ~16.6%
     skull base          ~12.0%
     biopsy              ~3.5%
   (year-2 TS peaked at 19.7% per article §Results) */
export type ProcedureKey =
  | "resectionSmall"
  | "resectionMedium"
  | "resectionLarge"
  | "transsphenoidal"
  | "skullBase"
  | "biopsy";

export const PROCEDURE_LABELS: Record<ProcedureKey, { mono: string; full: string }> = {
  resectionSmall:  { mono: "RESECT ≤3CM",   full: "Brain tumor resection, size ≤3 cm" },
  resectionMedium: { mono: "RESECT 3.1-6",  full: "Brain tumor resection, size 3.1-6 cm" },
  resectionLarge:  { mono: "RESECT >6CM",   full: "Brain tumor resection, size >6 cm" },
  transsphenoidal: { mono: "TRANSSPHEN",    full: "Transsphenoidal removal of pituitary tumors" },
  skullBase:       { mono: "SKULL BASE",    full: "Skull base tumor surgery" },
  biopsy:          { mono: "BIOPSY",        full: "Biopsy" },
};

export type VolumeYear = {
  label: string;
  yearIndex: number;
  total: number;
  segments: Record<ProcedureKey, number>;
};

export const VOLUME_BY_YEAR: VolumeYear[] = [
  {
    label: "2020-21",
    yearIndex: 1,
    total: 565,
    segments: {
      resectionSmall: 78,
      resectionMedium: 213,
      resectionLarge: 92,
      transsphenoidal: 93,
      skullBase: 68,
      biopsy: 21,
    },
  },
  {
    label: "2021-22",
    yearIndex: 2,
    total: 626,
    // article: TS peaked at 19.7% this year ⇒ 124 cases
    segments: {
      resectionSmall: 70,
      resectionMedium: 235,
      resectionLarge: 100,
      transsphenoidal: 124,
      skullBase: 77,
      biopsy: 20,
    },
  },
  {
    label: "2022-23",
    yearIndex: 3,
    total: 660,
    segments: {
      resectionSmall: 84,
      resectionMedium: 252,
      resectionLarge: 113,
      transsphenoidal: 116,
      skullBase: 75,
      biopsy: 20,
    },
  },
  {
    label: "2023-24",
    yearIndex: 4,
    total: 723,
    segments: {
      resectionSmall: 103,
      resectionMedium: 290,
      resectionLarge: 102,
      transsphenoidal: 109,
      skullBase: 95,
      biopsy: 24,
    },
  },
  {
    label: "2024-25",
    yearIndex: 5,
    total: 735,
    segments: {
      resectionSmall: 105,
      resectionMedium: 253,
      resectionLarge: 144,
      transsphenoidal: 108,
      skullBase: 93,
      biopsy: 32,
    },
  },
];

/* Demographic helpers */
export const TOTAL_SURGERIES_BY_AGE_OVER_40 = 2674;
export const TOTAL_PATIENTS_OVER_40 = 2347;
export const F_M_RATIO_MENINGIOMA = 2.5; // 2.5 : 1
export const M_F_RATIO_GERM_CELL = 3.0;  // 3 : 1
export const PCT_MET_AGE_OVER_40 = 95.8;

/* Age-by-tumor means (from article Table 3) — used by ch3 step 4 dot plot */
export const TUMOR_MEAN_AGES = [
  { id: "embryonal",   label: "Embryonal tumors", mean: 18, group: "young" as const },
  { id: "germ-cell",   label: "Germ cell tumors", mean: 19, group: "young" as const },
  { id: "cohort",      label: "Cohort overall",   mean: 54.2, group: "ref"   as const },
  { id: "metastatic",  label: "Metastatic tumors",mean: 60, group: "old"   as const },
  { id: "lymphoma",    label: "Lymphoma",         mean: 64, group: "old"   as const },
];

/* CBTRUS comparison numbers (Ostrom 2022) — used by ch5 */
export const CBTRUS = {
  meningiomaPctAllPrimary: 39.7, // % of all primary CNS tumors
  gbmPctAllTumors: 14.2,
  gbmPctMalignant: 50.1,
  pituitaryCommunityRange: [10, 22] as [number, number], // Molitch 2017
} as const;

/* Primary-CNS denominator for apples-to-apples comparison with CBTRUS.
   CBTRUS reports % of *primary* CNS tumors, so we must exclude
   metastatic surgeries from our cohort to match. */
export const PRIMARY_CNS = {
  // total surgeries minus metastatic (619 = 18.7% of 3309)
  n: 2690,
  // each share recomputed with denominator = PRIMARY_CNS.n
  meningiomaAllGradesPct: 26.6, // (682+33) / 2690
  meningiomaG12Pct: 25.4,        // 682 / 2690
  gbmPct: 20.2,                  // 543 / 2690
  pituitaryPct: 20.3,            // 546 / 2690
} as const;
