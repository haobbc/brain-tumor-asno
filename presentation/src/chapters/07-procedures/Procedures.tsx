import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import { StackedBar } from "../../components/charts/StackedBar";
import { VOLUME_BY_YEAR } from "../../data/study-data";
import "./Procedures.css";

export default function Procedures({ step }: ChapterStepProps) {
  if (step === 0) return <Step1Opener />;
  if (step === 1) return <Step2Hero />;
  if (step === 2) return <Step3Table />;
  return <Step4Stability />;
}

function Page() {
  return (
    <>
      <div className="pc-masthead">
        <span className="pc-mono pc-masthead__issue">ASNO 2026 · ORAL · SESSION</span>
        <span className="pc-masthead__sep">·</span>
        <span className="pc-mono pc-masthead__topic">SURGICAL BRAIN-TUMOR REGISTRY · TAIWAN</span>
      </div>
      <div className="pc-folio">CH 07 · PROCEDURES</div>
    </>
  );
}

/* ── Step 1 — section opener ── */
function Step1Opener() {
  return (
    <div className="pc-scene pc-scene--opener">
      <Page />
      <div className="pc-opener">
        <div className="pc-opener__eyebrow pc-mono">PROCEDURE MIX · n=3,309 surgeries</div>
        <h1 className="pc-opener__title">
          What <span className="pc-accent">operations</span> are we doing?
        </h1>
        <hr className="rule pc-opener__rule" />
        <div className="pc-opener__sub">
          Six NHI categories · five years · one stable distribution
        </div>
      </div>
    </div>
  );
}

/* ── Step 2 — dominant procedure hero ── */
function Step2Hero() {
  return (
    <div className="pc-scene pc-scene--hero">
      <Page />
      <div className="pc-section">
        <div className="pc-section__eyebrow pc-mono">THE DOMINANT PROCEDURE</div>
        <div className="pc-section__title">
          One category does <span className="pc-accent">over a third</span> of the work
        </div>
      </div>
      <div className="pc-hero">
        <div className="pc-hero__num hero-num">37.7%</div>
        <hr className="rule pc-hero__rule" />
        <div className="pc-hero__label">3.1 – 6 cm tumor resection</div>
        <div className="pc-hero__sub pc-mono">n = 1,243 surgeries · NHI 83018B</div>
      </div>
    </div>
  );
}

/* ── Step 3 — full breakdown table ── */
function Step3Table() {
  // pct = percent of 3,309 surgeries. Sorted by pct descending.
  const rows: BreakdownRow[] = [
    { mono: "01", cat: "Resection 3.1 – 6 cm",        code: "83018B",    pct: 37.7, n: "1,243", dominant: true },
    { mono: "02", cat: "Transsphenoidal pituitary",   code: "83057B(A)", pct: 16.6, n: "550" },
    { mono: "03", cat: "Resection > 6 cm",            code: "83019B",    pct: 16.4, n: "541" },
    { mono: "04", cat: "Skull base resection",        code: "83088B",    pct: 16.4, n: "541" },
    { mono: "05", cat: "Resection ≤ 3 cm",            code: "83017B",    pct: 13.9, n: "459" },
    { mono: "06", cat: "Biopsy only",                 code: "83081 / 82 / 010B", pct:  3.5, n: "117" },
  ];
  return (
    <div className="pc-scene pc-scene--table">
      <Page />
      <div className="pc-section">
        <div className="pc-section__eyebrow pc-mono">FULL BREAKDOWN · TABLE 4</div>
        <div className="pc-section__title">
          Six categories · one workload
        </div>
      </div>
      <div className="pc-table">
        <div className="pc-table__head">
          <span className="pc-mono pc-table__h-num">#</span>
          <span className="pc-mono pc-table__h-cat">CATEGORY</span>
          <span className="pc-mono pc-table__h-bar">SHARE OF 3,309</span>
          <span className="pc-mono pc-table__h-pct">%</span>
          <span className="pc-mono pc-table__h-n">n</span>
        </div>
        {rows.map((r, i) => (
          <BreakRow key={r.mono} row={r} delayMs={300 + i * 200} />
        ))}
      </div>
      <div className="pc-table__note pc-mono">
        priority hierarchy when multi-coded: 83088B → 83057B → 83019B → 83018B → 83017B
      </div>
    </div>
  );
}

/* ── Step 4 — 5-year stability (reuses generic StackedBar with real data) ── */
function Step4Stability() {
  return (
    <div className="pc-scene pc-scene--stability">
      <Page />
      <div className="pc-section">
        <div className="pc-section__eyebrow pc-mono">FIVE-YEAR STABILITY</div>
        <div className="pc-section__title">
          Volume grew — <span className="pc-accent">structure didn't shift</span>
        </div>
      </div>
      <div className="pc-stab">
        <div className="pc-stab__chart-wrap">
          <StackedBar data={VOLUME_BY_YEAR} width={1100} height={520} />
        </div>
        <div className="pc-stab__annotation">
          <div className="pc-mono pc-stab__ann-tag">OBSERVATION</div>
          <div className="pc-stab__ann-head">
            Volume <span className="pc-accent">+30%</span> · structure stable
          </div>
          <div className="pc-stab__ann-body">
            consistent case-mix · consistent referral pattern
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── types + helpers ─────────────────── */

interface BreakdownRow {
  mono: string;
  cat: string;
  code: string;
  pct: number;
  n: string;
  dominant?: boolean;
}

function BreakRow({ row, delayMs }: { row: BreakdownRow; delayMs: number }) {
  // Bar width scales to pct of total (max 37.7 → fills column).
  const widthPct = (row.pct / 37.7) * 100;
  return (
    <div
      className={`pc-table__row ${row.dominant ? "pc-table__row--dominant" : ""}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span className="pc-mono pc-table__num">{row.mono}</span>
      <span className="pc-table__cat">
        {row.cat}
        <span className="pc-mono pc-table__code">{row.code}</span>
      </span>
      <span className="pc-table__bar-cell">
        <span
          className="pc-table__bar"
          style={{ "--bar-w": `${widthPct}%`, animationDelay: `${delayMs + 250}ms` } as CSSProperties}
        />
      </span>
      <span className="pc-table__pct hero-num">{row.pct.toFixed(1)}%</span>
      <span className="pc-mono pc-table__n">n = {row.n}</span>
    </div>
  );
}
