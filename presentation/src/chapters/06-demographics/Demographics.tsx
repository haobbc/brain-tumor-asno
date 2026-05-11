import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import { Pie } from "../../components/charts/Pie";
import { HISTOLOGY_FEMALE, HISTOLOGY_PEDIATRIC } from "../../data/study-data";
import "./Demographics.css";

export default function Demographics({ step }: ChapterStepProps) {
  if (step <= 1) return <FemalePhase step={step} />;
  if (step === 2) return <Step3MeningiomaRatio />;
  if (step === 3) return <Step4MaleSide />;
  if (step === 4) return <Step5GermCellReverse />;
  if (step >= 5 && step <= 7) return <PediatricPhase step={step} />;
  return <Step9EastAsianPattern />;
}

/* Female-pie phase: steps 0-1 share the same Pie mount.
   The Pie persists across the step boundary; only highlight + callouts
   + heading copy change. */
function FemalePhase({ step }: { step: number }) {
  const isOpener = step === 0;
  const highlight = isOpener ? undefined : ["meningioma-12", "metastatic", "pituitary"];
  return (
    <div className={`dm-scene ${isOpener ? "dm-scene--opener" : "dm-scene--callouts"}`}>
      <Page />
      {isOpener ? (
        <div className="dm-section">
          <div className="dm-section__eyebrow dm-mono">DEMOGRAPHIC PATTERNS</div>
          <div className="dm-section__title">
            1,549 <span className="dm-accent">female</span> patients
          </div>
          <div className="dm-section__sub">
            Histopathologic distribution at first surgery
          </div>
        </div>
      ) : (
        <div className="dm-section dm-section--compact">
          <div className="dm-section__eyebrow dm-mono">FEMALE PATIENTS · TOP HISTOLOGIES</div>
          <div className="dm-section__title dm-section__title--small">
            Three diagnoses take two-thirds of female surgeries
          </div>
        </div>
      )}
      <div className={`dm-pie-stage ${isOpener ? "dm-pie-stage--enter" : "dm-pie-stage--with-callouts"}`}>
        <div className="dm-pie-frame">
          <Pie data={HISTOLOGY_FEMALE} size={520} minLabelPct={2.5} highlight={highlight} />
        </div>
        {isOpener && <div className="dm-pie-meta dm-mono">FEMALE COHORT · n = 1,549</div>}
        {!isOpener && (
          <>
            <Callout position={{ top: "8%", right: "0%" }} mono="MENINGIOMA G1-2" value="30.2%" caption="n ≈ 468 · female cohort" delayMs={250} />
            <Callout position={{ top: "42%", right: "0%" }} mono="METASTATIC" value="18.0%" caption="systemic cancer brain mets" delayMs={700} />
            <Callout position={{ top: "76%", right: "0%" }} mono="PITUITARY" value="17.5%" caption="adenomas + craniopharyngioma" delayMs={1150} />
          </>
        )}
      </div>
    </div>
  );
}

/* Pediatric-pie phase: steps 5-7 share the same Pie mount. Highlight,
   callouts, and absence card change per step. */
function PediatricPhase({ step }: { step: number }) {
  // step 5 = pivot (no highlight, intro)
  // step 6 = key histologies callouts (4 highlighted)
  // step 7 = absence card (other-benign highlighted)
  const highlight =
    step === 5 ? undefined :
    step === 6 ? ["embryonal", "germ-cell", "ependymal", "other-astro"] :
    ["other-benign"];
  return (
    <div className={`dm-scene ${step === 5 ? "dm-scene--pivot" : step === 6 ? "dm-scene--ped-callouts" : "dm-scene--absence"}`}>
      <Page />
      {step === 5 && (
        <div className="dm-section">
          <div className="dm-section__eyebrow dm-mono">SECTION PIVOT</div>
          <div className="dm-section__title dm-section__title--large">
            Pediatric · <span className="dm-accent">under 15</span>
          </div>
          <div className="dm-section__sub">A completely different distribution</div>
        </div>
      )}
      {step === 6 && (
        <div className="dm-section dm-section--compact">
          <div className="dm-section__eyebrow dm-mono">PEDIATRIC · KEY HISTOLOGIES</div>
          <div className="dm-section__title dm-section__title--small">
            Embryonal · germ cell · ependymal · astrocytic
          </div>
        </div>
      )}
      {step === 7 && (
        <div className="dm-section dm-section--compact">
          <div className="dm-section__eyebrow dm-mono">PEDIATRIC · LEADING SLICE + ABSENCE</div>
          <div className="dm-section__title dm-section__title--small">
            Other benign leads · adult diseases are missing
          </div>
        </div>
      )}

      <div className={`dm-pie-stage ${step === 5 ? "dm-pie-stage--pivot" : step === 6 ? "dm-pie-stage--with-callouts" : "dm-pie-stage--absence"}`}>
        <div className="dm-pie-frame dm-pie-frame--pediatric">
          <Pie data={HISTOLOGY_PEDIATRIC} size={520} minLabelPct={2.5} highlight={highlight} />
        </div>

        {step === 5 && <div className="dm-pie-meta dm-mono">PEDIATRIC COHORT · AGE 0 – 14</div>}

        {step === 6 && (
          <>
            <Callout position={{ top: "6%", right: "0%" }} mono="EMBRYONAL" value="14.8%" caption="medulloblastoma · AT/RT · ETMR" delayMs={200} />
            <Callout position={{ top: "30%", right: "0%" }} mono="GERM CELL" value="13.6%" caption="germinoma · NGGCT" delayMs={550} />
            <Callout position={{ top: "54%", right: "0%" }} mono="EPENDYMAL" value="9.1%" caption="posterior fossa ependymoma" delayMs={900} />
            <Callout position={{ top: "78%", right: "0%" }} mono="OTHER ASTROCYTIC" value="12.5%" caption="pilocytic · DNET · ganglioglioma" delayMs={1250} />
          </>
        )}

        {step === 7 && (
          <>
            <Callout position={{ top: "12%", right: "0%" }} mono="OTHER BENIGN · LEADING SLICE" value="26.1%" caption="craniopharyngioma · choroid plexus · neurofibroma" delayMs={200} accent />
            <div className="dm-absence" style={{ top: "56%", right: 0 }}>
              <div className="dm-mono dm-absence__tag">ABSENT FROM PANEL</div>
              <div className="dm-absence__line">
                <span className="dm-absence__strike">MENINGIOMA</span>
              </div>
              <div className="dm-absence__line">
                <span className="dm-absence__strike">PITUITARY</span>
              </div>
              <hr className="rule dm-absence__rule" />
              <div className="dm-absence__note dm-italic">
                Adult diseases — they do not exist at this age
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <div className="dm-masthead">
        <span className="dm-mono dm-masthead__issue">ASNO 2026 · ORAL · SESSION</span>
        <span className="dm-masthead__sep">·</span>
        <span className="dm-mono dm-masthead__topic">SURGICAL BRAIN-TUMOR REGISTRY · TAIWAN</span>
      </div>
      <div className="dm-folio">CH 06 · DEMOGRAPHICS</div>
    </>
  );
}


/* ── Step 3 — F:M divergent bar for meningioma ── */
function Step3MeningiomaRatio() {
  return (
    <div className="dm-scene dm-scene--ratio">
      <Page />
      <div className="dm-section">
        <div className="dm-section__eyebrow dm-mono">MENINGIOMA · F : M RATIO</div>
        <div className="dm-section__title">
          A strong{" "}
          <span className="dm-accent">female predominance</span>{" "}
          for grade 1-2 meningioma
        </div>
      </div>
      <div className="dm-ratio">
        <div className="dm-ratio__hero">
          <div className="dm-ratio__hero-num hero-num">2.5 : 1</div>
          <div className="dm-mono dm-ratio__hero-cap">female to male</div>
        </div>
        <div className="dm-ratio__viz">
          <DivergentBar femalePct={71.3} malePct={28.7} femaleLabel="468" maleLabel="188" />
        </div>
        <div className="dm-ratio__note">
          Consistent with the{" "}
          <span className="dm-accent dm-italic">hormonal hypothesis</span> —
          progesterone-receptor expression on meningioma cells.
        </div>
      </div>
      <div className="dm-cite dm-mono">Wiemels et al · J Neurooncol 2010</div>
    </div>
  );
}

/* ── Step 4 — male side: GBM dominance card ── */
function Step4MaleSide() {
  return (
    <div className="dm-scene dm-scene--male">
      <Page />
      <div className="dm-section">
        <div className="dm-section__eyebrow dm-mono">MALE PATIENTS</div>
        <div className="dm-section__title">
          Among men ·{" "}
          <span className="dm-accent">diffuse glioma grade 4</span> dominates
        </div>
      </div>
      <div className="dm-male">
        <div className="dm-male__card card">
          <div className="dm-mono dm-male__eyebrow">GLIOBLASTOMA · WHO GRADE 4</div>
          <div className="dm-male__main">
            <div className="dm-male__ratio">
              <div className="dm-male__ratio-num hero-num">1.7 : 1</div>
              <div className="dm-mono dm-male__ratio-cap">male to female · CGMH</div>
            </div>
            <div className="dm-male__divider" aria-hidden="true" />
            <div className="dm-male__compare">
              <div className="dm-mono dm-male__compare-eyebrow">CBTRUS REFERENCE</div>
              <div className="dm-male__compare-val">~1.6 : 1</div>
              <div className="dm-male__compare-cap dm-italic">
                US malignant glioma cohort
              </div>
            </div>
          </div>
          <hr className="rule dm-male__rule" />
          <div className="dm-male__caption">
            Direction matches the literature · magnitude slightly higher in our cohort
          </div>
        </div>
      </div>
      <div className="dm-cite dm-mono">Ostrom et al · Neuro-Oncology 2022</div>
    </div>
  );
}

/* ── Step 5 — germ cell reverse pattern ── */
function Step5GermCellReverse() {
  return (
    <div className="dm-scene dm-scene--germ">
      <Page />
      <div className="dm-section">
        <div className="dm-section__eyebrow dm-mono">GERM CELL TUMORS</div>
        <div className="dm-section__title">
          One diagnosis flips the other way
        </div>
      </div>
      <div className="dm-germ">
        <div className="dm-germ__hero">
          <div className="dm-mono dm-germ__eyebrow">M : F RATIO · GERM CELL</div>
          <div className="dm-germ__num hero-num">3 : 1</div>
          <div className="dm-mono dm-germ__cap">male to female</div>
        </div>
        <div className="dm-germ__viz">
          <DivergentBar
            femalePct={25}
            malePct={75}
            femaleLabel="1"
            maleLabel="3"
            invert
          />
        </div>
        <div className="dm-germ__note dm-italic">
          A reversed pattern — male predominance, mostly pineal & suprasellar germinoma in
          adolescents.
        </div>
      </div>
    </div>
  );
}

/* ── Step 9 — east asian pattern interpretation card ── */
function Step9EastAsianPattern() {
  return (
    <div className="dm-scene dm-scene--takeaway">
      <Page />
      <div className="dm-takeaway">
        <div className="dm-takeaway__eyebrow dm-mono">PEDIATRIC INTERPRETATION</div>
        <div className="dm-takeaway__hero">
          An{" "}
          <span className="dm-accent dm-italic">East-Asian</span>{" "}
          pediatric pattern
        </div>
        <hr className="rule dm-takeaway__rule" />
        <div className="dm-takeaway__grid">
          <div className="dm-takeaway__col">
            <div className="dm-mono dm-takeaway__col-eyebrow">BROADLY ALIGNED</div>
            <div className="dm-takeaway__col-body">
              Embryonal, ependymal, astrocytic proportions match global pediatric registries.
            </div>
          </div>
          <div className="dm-takeaway__sep" aria-hidden="true" />
          <div className="dm-takeaway__col dm-takeaway__col--accent">
            <div className="dm-mono dm-takeaway__col-eyebrow">DIVERGENT</div>
            <div className="dm-takeaway__col-body">
              Germ-cell representation notably <span className="dm-accent">higher</span>{" "}
              than Western reports — a recognized East-Asian signature.
            </div>
          </div>
        </div>
      </div>
      <div className="dm-cite dm-mono">Price et al · Neuro-Oncology 2025</div>
    </div>
  );
}

/* ─────────────────── helpers ─────────────────── */

function Callout({
  position,
  mono,
  value,
  caption,
  delayMs,
  accent,
}: {
  position: { top: string; left?: string; right?: string };
  mono: string;
  value: string;
  caption: string;
  delayMs: number;
  accent?: boolean;
}) {
  const style: CSSProperties = {
    top: position.top,
    animationDelay: `${delayMs}ms`,
  };
  if (position.left !== undefined) style.left = position.left;
  if (position.right !== undefined) style.right = position.right;
  return (
    <div
      className={`dm-callout ${accent ? "dm-callout--accent" : ""}`}
      style={style}
    >
      <div className="dm-callout__tick" aria-hidden="true" />
      <div className="dm-callout__body">
        <div className="dm-mono dm-callout__mono">{mono}</div>
        <div className="dm-callout__value hero-num">{value}</div>
        <div className="dm-mono dm-callout__cap">{caption}</div>
      </div>
    </div>
  );
}

function DivergentBar({
  femalePct,
  malePct,
  femaleLabel,
  maleLabel,
  invert,
}: {
  femalePct: number;
  malePct: number;
  femaleLabel: string;
  maleLabel: string;
  invert?: boolean;
}) {
  // when invert (germ cell), put male on left bigger, female right smaller.
  // when normal (meningioma), female on left bigger, male right smaller.
  const leftPct = invert ? malePct : femalePct;
  const rightPct = invert ? femalePct : malePct;
  const leftLabel = invert ? "MALE" : "FEMALE";
  const rightLabel = invert ? "FEMALE" : "MALE";
  const leftN = invert ? maleLabel : femaleLabel;
  const rightN = invert ? femaleLabel : maleLabel;
  const leftClass = invert ? "dm-bar__seg--male" : "dm-bar__seg--female";
  const rightClass = invert ? "dm-bar__seg--female" : "dm-bar__seg--male";
  return (
    <div className="dm-bar">
      <div className="dm-bar__row">
        <span className="dm-mono dm-bar__rowlabel">{leftLabel}</span>
        <div className={`dm-bar__seg ${leftClass}`} style={{ width: `${leftPct}%` }}>
          <span className="dm-bar__seg-pct">{leftPct.toFixed(1)}%</span>
        </div>
        <span className="dm-mono dm-bar__rowcount">n = {leftN}</span>
      </div>
      <div className="dm-bar__row">
        <span className="dm-mono dm-bar__rowlabel">{rightLabel}</span>
        <div className={`dm-bar__seg ${rightClass}`} style={{ width: `${rightPct}%` }}>
          <span className="dm-bar__seg-pct">{rightPct.toFixed(1)}%</span>
        </div>
        <span className="dm-mono dm-bar__rowcount">n = {rightN}</span>
      </div>
    </div>
  );
}
