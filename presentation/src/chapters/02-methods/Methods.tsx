import type { ChapterStepProps } from "../../registry/types";
import "./Methods.css";

export default function Methods({ step }: ChapterStepProps) {
  if (step === 0) return <Step1Opener />;
  if (step === 1) return <Step2Institution />;
  if (step === 2) return <Step3Initial />;
  if (step === 3) return <Step4Flow />;
  if (step === 4) return <Step5Final />;
  if (step === 5) return <Step6Classification />;
  return <Step7Procedures />;
}

function Page() {
  return (
    <>
      <div className="mt-masthead">
        <span className="mt-mono mt-masthead__issue">ASNO 2026 · ORAL · SESSION</span>
        <span className="mt-masthead__sep">·</span>
        <span className="mt-mono mt-masthead__topic">SURGICAL BRAIN-TUMOR REGISTRY · TAIWAN</span>
      </div>
      <div className="mt-folio">CH 02 · METHODS</div>
    </>
  );
}

/* ── Step 1 — methods opener ── */
function Step1Opener() {
  return (
    <div className="mt-scene mt-scene--opener">
      <Page />
      <div className="mt-opener">
        <div className="mt-opener__eyebrow mt-mono">STUDY DESIGN</div>
        <h1 className="mt-opener__title">
          Briefly, <span className="mt-accent">the methods</span>.
        </h1>
        <hr className="rule mt-opener__rule" />
        <div className="mt-opener__sub">
          Cohort assembly · classification framework · procedure taxonomy
        </div>
      </div>
    </div>
  );
}

/* ── Step 2 — Institution card ── */
function Step2Institution() {
  return (
    <div className="mt-scene mt-scene--institution">
      <Page />
      <div className="mt-section">
        <div className="mt-section__eyebrow mt-mono">SETTING</div>
        <div className="mt-section__title">
          A tertiary referral center in northern Taiwan
        </div>
      </div>
      <div className="mt-inst">
        <div className="mt-inst__card">
          <div className="mt-inst__name">Chang Gung Memorial Hospital</div>
          <div className="mt-inst__branch">Linkou Branch · Taoyuan, Taiwan</div>
          <hr className="rule mt-inst__rule" />
          <div className="mt-inst__rows">
            <InstRow mono="DESIGN" en="Retrospective descriptive analysis" />
            <InstRow mono="SOURCE" en="Electronic health records · operative schedule" />
            <InstRow mono="WINDOW" en="August 2020 — July 2025 · five years" />
            <InstRow mono="ROLE" en="One of Taiwan's largest tertiary referral centers" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Step 3 — initial 3,563 hero ── */
function Step3Initial() {
  return (
    <div className="mt-scene mt-scene--initial">
      <Page />
      <div className="mt-section">
        <div className="mt-section__eyebrow mt-mono">RAW COHORT</div>
        <div className="mt-section__title">
          We pulled every brain-tumor case from the OR schedule
        </div>
      </div>
      <div className="mt-initial">
        <div className="mt-initial__caption mt-mono">SURGERIES INITIALLY IDENTIFIED</div>
        <div className="mt-initial__num hero-num">3,563</div>
        <hr className="rule mt-initial__rule" />
        <div className="mt-initial__sub">
          operative records · Aug 2020 – Jul 2025
        </div>
      </div>
    </div>
  );
}

/* ── Step 4 — exclusion flow ── */
function Step4Flow() {
  return (
    <div className="mt-scene mt-scene--flow">
      <Page />
      <div className="mt-section">
        <div className="mt-section__eyebrow mt-mono">EXCLUSION CRITERIA</div>
        <div className="mt-section__title">
          Two exclusions to clean the cohort
        </div>
      </div>
      <FlowDiagram />
    </div>
  );
}

/* ── Step 5 — final 3,309 / 2,875 paired ── */
function Step5Final() {
  return (
    <div className="mt-scene mt-scene--final">
      <Page />
      <div className="mt-section">
        <div className="mt-section__eyebrow mt-mono">FINAL COHORT</div>
        <div className="mt-section__title">
          What we analyzed
        </div>
      </div>
      <div className="mt-final">
        <FinalNum mono="SURGERIES" value="3,309" caption="operations analyzed" delayMs={250} />
        <div className="mt-final__sep">·</div>
        <FinalNum mono="PATIENTS" value="2,875" caption="unique individuals" delayMs={750} />
      </div>
      <div className="mt-final__note mt-mono">
        ratio 1.15 — some patients underwent staged or recurrent surgery
      </div>
    </div>
  );
}

/* ── Step 6 — classification framework ── */
function Step6Classification() {
  return (
    <div className="mt-scene mt-scene--classify">
      <Page />
      <div className="mt-section">
        <div className="mt-section__eyebrow mt-mono">HISTOPATHOLOGY</div>
        <div className="mt-section__title">
          Classified under both WHO editions{" "}
          <span className="mt-accent">+ CBTRUS grouping</span>
        </div>
      </div>
      <div className="mt-classify">
        <ClassifyCard
          mono="WHO 2016"
          title="Classical histology"
          rows={["Tumor type", "WHO grade I-IV", "Cell-lineage groups"]}
          delayMs={250}
        />
        <div className="mt-classify__op mt-mono">⊕</div>
        <ClassifyCard
          mono="WHO 2021"
          title="Molecular-integrated"
          rows={["IDH status", "1p/19q codeletion", "Methylation markers"]}
          delayMs={550}
        />
        <div className="mt-classify__op mt-mono">→</div>
        <ClassifyCard
          mono="CBTRUS GROUPING"
          title="International comparability"
          rows={["Standardized buckets", "US registry alignment", "Small-n pooling"]}
          accent
          delayMs={850}
        />
      </div>
      <div className="mt-cite mt-mono">
        Louis et al · Acta Neuropathol 2016 · Louis et al · Neuro-Oncology 2021 · Ostrom et al · Neuro-Oncology 2022
      </div>
    </div>
  );
}

/* ── Step 7 — NHI procedure code table ── */
function Step7Procedures() {
  return (
    <div className="mt-scene mt-scene--procedures">
      <Page />
      <div className="mt-section">
        <div className="mt-section__eyebrow mt-mono">SURGICAL TAXONOMY</div>
        <div className="mt-section__title">
          Six categories · Taiwan NHI procedure codes
        </div>
      </div>
      <div className="mt-codes">
        <div className="mt-codes__head">
          <span className="mt-mono mt-codes__h-num">#</span>
          <span className="mt-mono mt-codes__h-cat">CATEGORY</span>
          <span className="mt-mono mt-codes__h-detail">DESCRIPTION</span>
          <span className="mt-mono mt-codes__h-code">NHI CODE</span>
        </div>
        <CodeRow num="01" cat="Resection — small"  detail="tumor diameter ≤ 3 cm"           code="83017B"    delayMs={200} />
        <CodeRow num="02" cat="Resection — mid"    detail="tumor diameter 3.1 – 6 cm"       code="83018B"    delayMs={300} />
        <CodeRow num="03" cat="Resection — large"  detail="tumor diameter > 6 cm"           code="83019B"    delayMs={400} />
        <CodeRow num="04" cat="Transsphenoidal"    detail="pituitary tumor removal"         code="83057B(A)" delayMs={500} />
        <CodeRow num="05" cat="Skull base"         detail="skull-base tumor surgery"        code="83088B"    delayMs={600} />
        <CodeRow num="06" cat="Biopsy"             detail="diagnostic biopsy only"          code="83081B / 83082B / 83010B" delayMs={700} />
      </div>
      <div className="mt-codes__note mt-mono">
        priority hierarchy when multiple codes recorded: 83088B → 83057B → 83019B → 83018B → 83017B
      </div>
    </div>
  );
}

/* ─────────────────── helpers ─────────────────── */

function InstRow({ mono, en }: { mono: string; en: string }) {
  return (
    <div className="mt-inst__row">
      <span className="mt-mono mt-inst__row-mono">{mono}</span>
      <span className="mt-inst__row-en">{en}</span>
    </div>
  );
}

function FinalNum({
  mono,
  value,
  caption,
  delayMs,
}: {
  mono: string;
  value: string;
  caption: string;
  delayMs: number;
}) {
  return (
    <div className="mt-final__col" style={{ animationDelay: `${delayMs}ms` }}>
      <div className="mt-mono mt-final__mono">{mono}</div>
      <div className="mt-final__value hero-num">{value}</div>
      <div className="mt-mono mt-final__caption">{caption}</div>
    </div>
  );
}

function ClassifyCard({
  mono,
  title,
  rows,
  accent,
  delayMs,
}: {
  mono: string;
  title: string;
  rows: string[];
  accent?: boolean;
  delayMs: number;
}) {
  return (
    <div
      className={`mt-cls card ${accent ? "mt-cls--accent" : ""}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="mt-mono mt-cls__mono">{mono}</div>
      <div className="mt-cls__title">{title}</div>
      <hr className="rule mt-cls__rule" />
      <ul className="mt-cls__rows">
        {rows.map((r) => (
          <li key={r} className="mt-cls__row">
            <span className="mt-cls__dot" aria-hidden="true" />
            <span className="mt-cls__row-en">{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CodeRow({
  num,
  cat,
  detail,
  code,
  delayMs,
}: {
  num: string;
  cat: string;
  detail: string;
  code: string;
  delayMs: number;
}) {
  return (
    <div className="mt-codes__row" style={{ animationDelay: `${delayMs}ms` }}>
      <span className="mt-mono mt-codes__num">{num}</span>
      <span className="mt-codes__cat">{cat}</span>
      <span className="mt-codes__detail">{detail}</span>
      <span className="mt-mono mt-codes__code">{code}</span>
    </div>
  );
}

function FlowDiagram() {
  /* SVG-driven flow: 3,563 (top) → minus 57 → minus 197 → 3,309 (bottom)
     The vertical spine + arrowheads + exclusion off-shoots draw in via
     stroke-dashoffset animation. Boxes fade in staggered. */
  return (
    <div className="mt-flow">
      <svg className="mt-flow__svg" viewBox="0 0 1640 660" aria-hidden="true">
        {/* Vertical spine */}
        <line
          className="mt-flow__spine"
          x1="320" y1="100"
          x2="320" y2="560"
          stroke="var(--rule)"
          strokeWidth="1"
        />
        {/* Arrowhead bottom of spine */}
        <path
          className="mt-flow__arrow"
          d="M 312 560 L 320 575 L 328 560"
          fill="none"
          stroke="var(--text-2)"
          strokeWidth="1.5"
        />
        {/* Off-shoot 1 — exclude 57 (biopsy duplicates) */}
        <line
          className="mt-flow__branch mt-flow__branch--1"
          x1="320" y1="240"
          x2="640" y2="240"
          stroke="var(--rule)"
          strokeWidth="1"
        />
        <line
          className="mt-flow__branch-tick mt-flow__branch-tick--1"
          x1="320" y1="240"
          x2="320" y2="100"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        {/* Off-shoot 2 — exclude 197 (non-neoplastic) */}
        <line
          className="mt-flow__branch mt-flow__branch--2"
          x1="320" y1="420"
          x2="640" y2="420"
          stroke="var(--rule)"
          strokeWidth="1"
        />
        <line
          className="mt-flow__branch-tick mt-flow__branch-tick--2"
          x1="320" y1="420"
          x2="320" y2="240"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      </svg>

      {/* Node — initial */}
      <div className="mt-node mt-node--start" style={{ top: "60px", left: "120px" }}>
        <div className="mt-mono mt-node__mono">INITIAL · OR SCHEDULE</div>
        <div className="mt-node__num hero-num">3,563</div>
        <div className="mt-mono mt-node__cap">surgeries</div>
      </div>

      {/* Exclusion 1 */}
      <div className="mt-excl mt-excl--1" style={{ top: "200px", left: "660px" }}>
        <div className="mt-mono mt-excl__tag">EXCLUSION 1</div>
        <div className="mt-excl__title">Staged biopsy duplicates</div>
        <hr className="rule mt-excl__rule" />
        <div className="mt-excl__body">
          <span className="mt-excl__count hero-num">−57</span>
          <span className="mt-excl__detail">
            diagnostic biopsies followed by definitive resection within 100 days — counted once
          </span>
        </div>
      </div>

      {/* Exclusion 2 */}
      <div className="mt-excl mt-excl--2" style={{ top: "380px", left: "660px" }}>
        <div className="mt-mono mt-excl__tag">EXCLUSION 2</div>
        <div className="mt-excl__title">Non-neoplastic pathology</div>
        <hr className="rule mt-excl__rule" />
        <div className="mt-excl__body">
          <span className="mt-excl__count hero-num">−197</span>
          <span className="mt-excl__detail">
            cases initially suspected as tumor on imaging — pathology returned non-tumor
          </span>
        </div>
      </div>

      {/* Node — final */}
      <div className="mt-node mt-node--end" style={{ top: "540px", left: "120px" }}>
        <div className="mt-mono mt-node__mono mt-node__mono--accent">FINAL · ANALYZED</div>
        <div className="mt-node__num mt-node__num--accent hero-num">3,309</div>
        <div className="mt-mono mt-node__cap">surgeries from 2,875 patients</div>
      </div>
    </div>
  );
}
