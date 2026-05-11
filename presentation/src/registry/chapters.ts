import type { ChapterDef } from "./types";
import HookContext from "../chapters/01-hook-context/HookContext";
import { narrations as hookContextNarrations } from "../chapters/01-hook-context/narrations";
import Methods from "../chapters/02-methods/Methods";
import { narrations as methodsNarrations } from "../chapters/02-methods/narrations";
import CohortVolume from "../chapters/03-cohort-volume/CohortVolume";
import { narrations as cohortVolumeNarrations } from "../chapters/03-cohort-volume/narrations";
import HistologyMain from "../chapters/04-histology-main/HistologyMain";
import { narrations as histologyMainNarrations } from "../chapters/04-histology-main/narrations";
import VsCbtrus from "../chapters/05-vs-cbtrus/VsCbtrus";
import { narrations as vsCbtrusNarrations } from "../chapters/05-vs-cbtrus/narrations";
import Demographics from "../chapters/06-demographics/Demographics";
import { narrations as demographicsNarrations } from "../chapters/06-demographics/narrations";
import Procedures from "../chapters/07-procedures/Procedures";
import { narrations as proceduresNarrations } from "../chapters/07-procedures/narrations";
import LimitationsImplications from "../chapters/08-limitations-implications/LimitationsImplications";
import { narrations as limitationsNarrations } from "../chapters/08-limitations-implications/narrations";
import Takeaway from "../chapters/09-takeaway/Takeaway";
import { narrations as takeawayNarrations } from "../chapters/09-takeaway/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "hook-context",
    title: "Context",
    narrations: hookContextNarrations,
    Component: HookContext,
  },
  {
    id: "methods",
    title: "Methods",
    narrations: methodsNarrations,
    Component: Methods,
  },
  {
    id: "cohort-volume",
    title: "Cohort",
    narrations: cohortVolumeNarrations,
    Component: CohortVolume,
  },
  {
    id: "histology-main",
    title: "Histology",
    narrations: histologyMainNarrations,
    Component: HistologyMain,
  },
  {
    id: "vs-cbtrus",
    title: "vs CBTRUS",
    narrations: vsCbtrusNarrations,
    Component: VsCbtrus,
  },
  {
    id: "demographics",
    title: "Demographics",
    narrations: demographicsNarrations,
    Component: Demographics,
  },
  {
    id: "procedures",
    title: "Procedures",
    narrations: proceduresNarrations,
    Component: Procedures,
  },
  {
    id: "limitations-implications",
    title: "Limitations",
    narrations: limitationsNarrations,
    Component: LimitationsImplications,
  },
  {
    id: "takeaway",
    title: "Takeaway",
    narrations: takeawayNarrations,
    Component: Takeaway,
  },
];
