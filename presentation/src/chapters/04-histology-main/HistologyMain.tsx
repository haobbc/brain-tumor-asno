import type { ChapterStepProps } from "../../registry/types";
import { Pie } from "../../components/charts/Pie";
import { HISTOLOGY_ALL } from "../../data/study-data";
import "./HistologyMain.css";

/* Chapter 4 architecture
   The Pie is rendered ONCE at the top level and persists across all 7
   step transitions — only the `highlight` prop changes, which animates
   slice opacity via the existing CSS transition. Side-panel callouts
   fade in/out by step. This avoids the entry-animation restart bug.

   step 0 — reveal: no highlight, no callouts. Pie shows all slices full
   step 1 — meningioma highlighted, callout 1 active
   step 2 — + metastatic active, meningioma lingering
   step 3 — pie unchanged; 95.8% age-skew sub-callout appears at bottom
   step 4 — + pituitary active, others lingering
   step 5 — + GBM active, others lingering
   step 6 — pie fades; "TOP 4 = ~72%" summary appears centered
*/

type SliceKey = "meningioma" | "metastatic" | "pituitary" | "gbm";

const SLICE_TO_DATA: Record<SliceKey, string> = {
  meningioma: "meningioma-12",
  metastatic: "metastatic",
  pituitary: "pituitary",
  gbm: "glioma-g4",
};

interface CalloutSpec {
  key: SliceKey;
  mono: string;
  percent: string;
  caption: string;
  state: "active" | "lingering";
}

function calloutsForStep(step: number): CalloutSpec[] {
  const list: CalloutSpec[] = [];
  const push = (key: SliceKey, mono: string, pct: string, caption: string, state: "active" | "lingering") => {
    list.push({ key, mono, percent: pct, caption, state });
  };
  if (step >= 1) push("meningioma", "MENINGIOMA · G1-2", "20.6%", "n = 682", step === 1 ? "active" : "lingering");
  if (step >= 2) push("metastatic", "METASTATIC",       "18.7%", "n = 619", step === 2 || step === 3 ? "active" : "lingering");
  if (step >= 4) push("pituitary",  "PITUITARY",        "16.5%", "n = 546", step === 4 ? "active" : "lingering");
  if (step >= 5) push("gbm",        "DIFFUSE GLIOMA · G4", "16.4%", "n = 543 · glioblastoma", step === 5 ? "active" : "lingering");
  return list;
}

function highlightForStep(step: number): string[] | undefined {
  if (step === 0) return undefined; // all slices full
  if (step === 6) return undefined; // pie fades, summary
  const keys: SliceKey[] = [];
  if (step >= 1) keys.push("meningioma");
  if (step >= 2) keys.push("metastatic");
  if (step >= 4) keys.push("pituitary");
  if (step >= 5) keys.push("gbm");
  return keys.map((k) => SLICE_TO_DATA[k]);
}

export default function HistologyMain({ step }: ChapterStepProps) {
  const callouts = calloutsForStep(step);
  const highlight = highlightForStep(step);
  const pieFaded = step === 6;

  return (
    <div className="hm-scene">
      <div className="hm-folio">CH 04 · HISTOPATHOLOGY</div>

      {step === 0 && (
        <div className="hm-eyebrow-bar">
          <span className="hm-mono hm-eyebrow">CENTRAL FINDING</span>
          <span className="hm-eyebrow-bar__sep">·</span>
          <span className="hm-mono hm-eyebrow-bar__sub">ALL 3,309 SURGERIES</span>
        </div>
      )}

      <div className="hm-stage">
        <div className="hm-stage__grid">
          <div className={"hm-pie" + (pieFaded ? " hm-pie--faded" : "")}>
            <Pie
              data={HISTOLOGY_ALL}
              size={620}
              minLabelPct={1.0}
              highlight={highlight}
            />
          </div>

          <div className="hm-side">
            {callouts.map((c) => (
              <div
                key={c.key}
                className={
                  "hm-callout card hm-callout--" + c.key + " hm-callout--" + c.state
                }
              >
                <div className="hm-mono hm-callout__mono">{c.mono}</div>
                <div className="hm-callout__percent hero-num">{c.percent}</div>
                <div className="hm-mono hm-callout__caption">{c.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {step === 3 && (
          <div className="hm-sub-callout card">
            <div className="hm-mono hm-sub-callout__mono">
              AGE SKEW · METASTATIC COHORT
            </div>
            <div className="hm-sub-callout__line">
              <span className="hero-num hm-sub-callout__num">95.8%</span>
              <span className="hm-sub-callout__en">
                of metastatic cases · age ≥ 40
              </span>
            </div>
            <hr className="rule hm-sub-callout__rule" />
            <div className="hm-mono hm-sub-callout__foot">
              more pronounced than reported Western series · aging Taiwan
              cancer population
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="hm-summary">
            <div className="hm-mono hm-summary__mono">
              COMPOSITE · TOP FOUR DIAGNOSES
            </div>
            <div className="hm-summary__hero">
              <span className="hero-num hm-summary__num">~72%</span>
            </div>
            <hr className="rule hm-summary__rule" />
            <div className="hm-summary__sub">
              of the entire surgical workload — four diagnoses
            </div>
          </div>
        )}
      </div>

      {step === 3 && (
        <div className="hm-cite hm-mono">Chen et al · CA Cancer J Clin 2016</div>
      )}
    </div>
  );
}
