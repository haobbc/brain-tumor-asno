import type { ChapterStepProps } from "../../registry/types";
import "./VsCbtrus.css";

export default function VsCbtrus({ step }: ChapterStepProps) {
  if (step === 0) return <Step1Opener />;
  if (step === 1) return <Step2Meningioma />;
  if (step === 2) return <Step3Gbm />;
  if (step === 3) return <Step4Referral />;
  return <Step5Pituitary />;
}

function Folio() {
  return <div className="vc-folio">CH 05 · CBTRUS COMPARISON</div>;
}

/* ──────────────────────────────────────────────────────────────
 * Step 1 — section opener
 * ────────────────────────────────────────────────────────────── */
function Step1Opener() {
  return (
    <div className="vc-scene vc-scene--opener">
      <Folio />
      <div className="vc-opener">
        <div className="vc-opener__eyebrow vc-mono">SECTION FIVE</div>
        <h1 className="vc-opener__title">
          CGMH <span className="vc-opener__times">×</span> CBTRUS
        </h1>
        <hr className="rule vc-opener__rule" />
        <div className="vc-opener__sub">
          alignment <span className="vc-opener__amp">+</span> divergence
        </div>
        <div className="vc-opener__tag vc-mono">
          THREE HISTOPATHOLOGIES · THREE DENOMINATORS · THREE READINGS
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Step 2 — Meningioma comparison: two-card spread
 * ────────────────────────────────────────────────────────────── */
function Step2Meningioma() {
  return (
    <div className="vc-scene vc-scene--compare">
      <Folio />
      <div className="vc-section">
        <div className="vc-section__eyebrow vc-mono">COMPARISON · 01 OF 03</div>
        <div className="vc-section__title">
          Meningioma · grade 1–2
        </div>
      </div>
      <ComparisonPair
        left={
          <ComparisonCard
            origin="left"
            kicker="CBTRUS · U.S. POPULATION"
            denomLabel="all primary CNS tumors"
            heroValue="39.7%"
            footnote="incidence-based · all diagnosed cases"
          />
        }
        right={
          <ComparisonCard
            origin="right"
            kicker="CGMH · OUR COHORT"
            denomLabel="primary CNS denominator · n = 2,690"
            heroValue="26.6%"
            footnote="715 meningiomas · all grades · denominator excludes 619 metastatic"
          />
        }
        verdict="UNDERREPRESENTED IN OUR COHORT"
        verdictNote="most CBTRUS meningiomas are managed conservatively — they never reach the OR"
      />
      <div className="vc-cite vc-mono">Ostrom et al · Neuro-Oncology 2022</div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Step 3 — GBM comparison
 * ────────────────────────────────────────────────────────────── */
function Step3Gbm() {
  return (
    <div className="vc-scene vc-scene--compare">
      <Folio />
      <div className="vc-section">
        <div className="vc-section__eyebrow vc-mono">COMPARISON · 02 OF 03</div>
        <div className="vc-section__title">
          Glioblastoma · diffuse glioma grade 4
        </div>
      </div>
      <ComparisonPair
        left={
          <ComparisonCard
            origin="left"
            kicker="CBTRUS · U.S. POPULATION"
            denomLabel="all primary CNS tumors"
            heroValue="14.2%"
            footnote="GBM = 50.1% of CBTRUS malignant cases"
          />
        }
        right={
          <ComparisonCard
            origin="right"
            kicker="CGMH · OUR COHORT"
            denomLabel="primary CNS denominator · n = 2,690"
            heroValue="20.2%"
            footnote="543 GBM · denominator excludes 619 metastatic"
          />
        }
        verdict="OVERREPRESENTED IN OUR COHORT"
        verdictNote="tertiary referral concentrates complex malignant cases"
      />
      <div className="vc-cite vc-mono">Ostrom et al · Neuro-Oncology 2022</div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Step 4 — Referral bias interpretation funnel
 * ────────────────────────────────────────────────────────────── */
function Step4Referral() {
  return (
    <div className="vc-scene vc-scene--funnel">
      <Folio />
      <div className="vc-section">
        <div className="vc-section__eyebrow vc-mono">INTERPRETATION</div>
        <div className="vc-section__title">
          The gap likely reflects <span className="vc-accent">referral bias</span>
        </div>
      </div>
      <ReferralFunnel />
      <div className="vc-cite vc-mono">Bondy et al · Cancer 2008</div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Step 5 — Pituitary range bar
 * ────────────────────────────────────────────────────────────── */
function Step5Pituitary() {
  return (
    <div className="vc-scene vc-scene--pituitary">
      <Folio />
      <div className="vc-section">
        <div className="vc-section__eyebrow vc-mono">COMPARISON · 03 OF 03</div>
        <div className="vc-section__title">
          Pituitary · within the community prevalence band
        </div>
      </div>
      <RangeBar />
      <div className="vc-pit-note card">
        <div className="vc-pit-note__mono vc-mono">CONSISTENT WITH</div>
        <div className="vc-pit-note__text">
          our institution's <em>pituitary expertise</em> — high-volume
          transsphenoidal program at a tertiary center concentrates these
          cases.
        </div>
      </div>
      <div className="vc-cite vc-mono">
        Molitch · JAMA 2017 · Ostrom et al · Neuro-Oncology 2022
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Helpers
 * ────────────────────────────────────────────────────────────── */

function ComparisonPair({
  left,
  right,
  verdict,
  verdictNote,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  verdict: string;
  verdictNote: string;
}) {
  return (
    <div className="vc-pair">
      <div className="vc-pair__cards">
        {left}
        <div className="vc-pair__vs">
          <span className="vc-pair__vs-line" />
          <span className="vc-pair__vs-word vc-mono">VS</span>
          <span className="vc-pair__vs-line" />
        </div>
        {right}
      </div>
      <div className="vc-verdict">
        <div className="vc-verdict__badge vc-mono">{verdict}</div>
        <div className="vc-verdict__note">{verdictNote}</div>
      </div>
    </div>
  );
}

function ComparisonCard({
  origin,
  kicker,
  denomLabel,
  heroValue,
  heroSuffix,
  footnote,
}: {
  origin: "left" | "right";
  kicker: string;
  denomLabel: string;
  heroValue: string;
  heroSuffix?: React.ReactNode;
  footnote: string;
}) {
  return (
    <div className={`vc-card card vc-card--${origin}`}>
      <div className="vc-card__kicker vc-mono">{kicker}</div>
      <div className="vc-card__denom vc-mono">{denomLabel}</div>
      <div className="vc-card__hero">
        <span className="vc-card__hero-num hero-num">{heroValue}</span>
        {heroSuffix}
      </div>
      <hr className="rule vc-card__rule" />
      <div className="vc-card__footnote vc-mono">{footnote}</div>
    </div>
  );
}

function ReferralFunnel() {
  return (
    <div className="vc-funnel">
      <div className="vc-funnel__inflows">
        <InflowRow
          label="COMPLEX MALIGNANT"
          detail="GBM · referred for surgical resection"
          delayMs={250}
        />
        <InflowRow
          label="PITUITARY CASES"
          detail="endocrine work-up · functioning adenoma"
          delayMs={550}
        />
        <InflowRow
          label="CONSERVATIVE MENINGIOMA"
          detail="stays in community · observation only"
          delayMs={850}
          dim
        />
      </div>

      <FunnelGraphic />

      <div className="vc-funnel__outputs">
        <OutputChip
          mono="GBM"
          value="20.2%"
          tone="up"
          delayMs={1700}
        />
        <OutputChip
          mono="PITUITARY"
          value="20.3%"
          tone="up"
          delayMs={1900}
        />
        <OutputChip mono="MENINGIOMA" value="26.6%" tone="dim" delayMs={2100} />
      </div>

      <div className="vc-funnel__caption">
        <span className="vc-mono vc-funnel__caption-mono">
          NET EFFECT
        </span>
        <span className="vc-funnel__caption-text">
          GBM + pituitary <em>concentrate</em> via referral · meningioma
          share <em>underrepresents</em> the population
        </span>
      </div>
    </div>
  );
}

function InflowRow({
  label,
  detail,
  delayMs,
  dim,
}: {
  label: string;
  detail: string;
  delayMs: number;
  dim?: boolean;
}) {
  return (
    <div
      className={`vc-inflow${dim ? " vc-inflow--dim" : ""}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span className="vc-inflow__label vc-mono">{label}</span>
      <span className="vc-inflow__detail">{detail}</span>
      <svg
        className="vc-inflow__arrow"
        viewBox="0 0 120 16"
        width="120"
        height="16"
        aria-hidden="true"
      >
        <line
          x1="2"
          y1="8"
          x2="110"
          y2="8"
          stroke="currentColor"
          strokeWidth="1"
        />
        <polyline
          points="100,3 112,8 100,13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function FunnelGraphic() {
  return (
    <div className="vc-funnel__center">
      <svg
        className="vc-funnel__svg"
        viewBox="0 0 220 260"
        width="220"
        height="260"
        aria-hidden="true"
      >
        {/* funnel outline */}
        <path
          d="M 10 20 L 210 20 L 140 150 L 140 240 L 80 240 L 80 150 Z"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeWidth="1.25"
        />
        {/* hairline divider in neck */}
        <line
          x1="80"
          y1="180"
          x2="140"
          y2="180"
          stroke="var(--rule)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <text
          x="110"
          y="100"
          textAnchor="middle"
          fill="var(--accent)"
          fontFamily="var(--font-mono)"
          fontSize="11"
          letterSpacing="0.18em"
        >
          TERTIARY
        </text>
        <text
          x="110"
          y="118"
          textAnchor="middle"
          fill="var(--accent)"
          fontFamily="var(--font-mono)"
          fontSize="11"
          letterSpacing="0.18em"
        >
          CENTER
        </text>
        <text
          x="110"
          y="220"
          textAnchor="middle"
          fill="var(--text-mute)"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="0.16em"
        >
          OUR OR
        </text>
      </svg>
    </div>
  );
}

function OutputChip({
  mono,
  value,
  tone,
  delayMs,
}: {
  mono: string;
  value: string;
  tone: "up" | "dim";
  delayMs: number;
}) {
  return (
    <div
      className={`vc-output vc-output--${tone}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span className="vc-output__mono vc-mono">{mono}</span>
      <span className="vc-output__value hero-num">{value}</span>
      <span className="vc-output__tone vc-mono">
        {tone === "up" ? "↑ CONCENTRATED" : "↓ DILUTED"}
      </span>
    </div>
  );
}

function RangeBar() {
  // Position of CGMH 16.5% within the 10-22% band.
  // (16.5 - 10) / (22 - 10) = 0.5417 → 54.17%
  const cgmhPos = ((16.5 - 10) / (22 - 10)) * 100;
  return (
    <div className="vc-range">
      <div className="vc-range__header">
        <div className="vc-range__header-left">
          <div className="vc-mono vc-range__title-mono">
            COMMUNITY PREVALENCE BAND
          </div>
          <div className="vc-range__title">
            Molitch · <em>10–22%</em>
          </div>
        </div>
        <div className="vc-range__header-right">
          <div className="vc-mono vc-range__title-mono">CGMH SURGICAL · 20.3% OF PRIMARY CNS</div>
          <div className="vc-range__cgmh-hero hero-num">16.5%</div>
        </div>
      </div>

      <div className="vc-range__track">
        <div className="vc-range__band">
          <span className="vc-range__band-edge vc-range__band-edge--left">
            <span className="vc-mono">10%</span>
          </span>
          <span className="vc-range__band-fill" />
          <span className="vc-range__band-edge vc-range__band-edge--right">
            <span className="vc-mono">22%</span>
          </span>
        </div>

        <div
          className="vc-range__marker"
          style={{ left: `${cgmhPos}%` }}
        >
          <span className="vc-range__marker-stem" />
          <span className="vc-range__marker-dot" />
          <span className="vc-range__marker-label vc-mono">
            CGMH 16.5%
          </span>
        </div>
      </div>

      <div className="vc-range__legend vc-mono">
        OUR NUMBER FITS THE RANGE · NO DENOMINATOR ANOMALY
      </div>
    </div>
  );
}
