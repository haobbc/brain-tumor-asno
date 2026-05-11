import type { ChapterStepProps } from "../../registry/types";
import "./LimitationsImplications.css";

export default function LimitationsImplications({ step }: ChapterStepProps) {
  if (step === 0) return <Step1LimitsPivot />;
  if (step === 1) return <Step2SingleCenter />;
  if (step === 2) return <Step3SurgicalOnly />;
  if (step === 3) return <Step4NoMolecular />;
  if (step === 4) return <Step5ImplicationsPivot />;
  if (step === 5) return <Step6Pituitary />;
  if (step === 6) return <Step7Meningioma />;
  return <Step8TrueIncidence />;
}

/* ── shared page chrome ── */
function Page({ folio }: { folio: string }) {
  return (
    <>
      <div className="lm-masthead">
        <span className="lm-mono lm-masthead__issue">ASNO 2026 · ORAL · SESSION</span>
        <span className="lm-masthead__sep">·</span>
        <span className="lm-mono lm-masthead__topic">SURGICAL BRAIN-TUMOR REGISTRY · TAIWAN</span>
      </div>
      <div className="lm-folio">{folio}</div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * STEP 1 · LIMITATIONS PIVOT
 * "Three limitations before we conclude."
 * ───────────────────────────────────────────────────────────────── */
function Step1LimitsPivot() {
  return (
    <div className="lm-scene lm-scene--pivot lm-scene--pivot-limits">
      <Page folio="CH 08 · LIMITATIONS + IMPLICATIONS" />
      <div className="lm-pivot">
        <div className="lm-pivot__mono lm-mono lm-pivot__mono--caution">
          THREE LIMITATIONS · BEFORE WE CONCLUDE
        </div>
        <hr className="rule lm-pivot__rule" />
        <div className="lm-pivot__title">
          What this five-year cohort <em>cannot</em> tell us.
        </div>
        <div className="lm-pivot__numbers">
          <span className="lm-pivot__num">01</span>
          <span className="lm-pivot__num-sep">·</span>
          <span className="lm-pivot__num">02</span>
          <span className="lm-pivot__num-sep">·</span>
          <span className="lm-pivot__num">03</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * STEP 2 · LIMITATION 1 — single-center tertiary referral
 * funnel schematic: complex cases concentrate, simple cases bypass
 * ───────────────────────────────────────────────────────────────── */
function Step2SingleCenter() {
  return (
    <div className="lm-scene lm-scene--limit">
      <Page folio="CH 08 · LIMITATION 01 / 03" />
      <div className="lm-limit">
        <div className="lm-limit__header">
          <div className="lm-mono lm-limit__num">LIMITATION 01</div>
          <div className="lm-limit__title">SINGLE-CENTER TERTIARY</div>
          <div className="lm-limit__sub">
            distribution overweights complex cases · community-managed
            benign tumors underrepresented
          </div>
        </div>
        <ReferralFunnel />
        <div className="lm-mono lm-limit__pill lm-limit__pill--caution">
          REFERRAL BIAS
        </div>
      </div>
      <div className="lm-cite lm-mono">Bondy et al · Cancer 2008</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * STEP 3 · LIMITATION 2 — surgical-only cohort
 * Venn diagram showing exclusion regions
 * ───────────────────────────────────────────────────────────────── */
function Step3SurgicalOnly() {
  return (
    <div className="lm-scene lm-scene--limit">
      <Page folio="CH 08 · LIMITATION 02 / 03" />
      <div className="lm-limit">
        <div className="lm-limit__header">
          <div className="lm-mono lm-limit__num">LIMITATION 02</div>
          <div className="lm-limit__title">SURGICAL-ONLY COHORT</div>
          <div className="lm-limit__sub">
            imaging-only diagnoses · conservatively managed lesions
            · small meningiomas · incidental pituitary microadenomas
          </div>
        </div>
        <SurgicalVenn />
        <div className="lm-mono lm-limit__pill lm-limit__pill--caution">
          ASCERTAINMENT GAP
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * STEP 4 · LIMITATION 3 — no molecular data
 * empty-cell card: IDH / 1p19q / MGMT placeholders
 * ───────────────────────────────────────────────────────────────── */
function Step4NoMolecular() {
  return (
    <div className="lm-scene lm-scene--limit">
      <Page folio="CH 08 · LIMITATION 03 / 03" />
      <div className="lm-limit">
        <div className="lm-limit__header">
          <div className="lm-mono lm-limit__num">LIMITATION 03</div>
          <div className="lm-limit__title">NO MOLECULAR DATA YET</div>
          <div className="lm-limit__sub">
            2021 WHO classification requires molecular status · our
            retrospective records predate routine capture
          </div>
        </div>
        <MolecularCard />
        <div className="lm-mono lm-limit__pill lm-limit__pill--caution">
          RETROSPECTIVE GAP
        </div>
      </div>
      <div className="lm-cite lm-mono">Louis et al · Neuro-Oncology 2021</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * STEP 5 · IMPLICATIONS PIVOT
 * "Despite these caveats, three findings warrant attention."
 * ───────────────────────────────────────────────────────────────── */
function Step5ImplicationsPivot() {
  return (
    <div className="lm-scene lm-scene--pivot lm-scene--pivot-impl">
      <Page folio="CH 08 · LIMITATIONS + IMPLICATIONS" />
      <div className="lm-pivot lm-pivot--impl">
        <div className="lm-pivot__mono lm-mono lm-pivot__mono--accent">
          DESPITE CAVEATS · THREE FINDINGS WARRANT ATTENTION
        </div>
        <hr className="rule lm-pivot__rule lm-pivot__rule--accent" />
        <div className="lm-pivot__title">
          Three signals worth <span className="lm-accent">reading</span>.
        </div>
        <div className="lm-pivot__numbers lm-pivot__numbers--accent">
          <span className="lm-pivot__num">01</span>
          <span className="lm-pivot__num-sep">·</span>
          <span className="lm-pivot__num">02</span>
          <span className="lm-pivot__num-sep">·</span>
          <span className="lm-pivot__num">03</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * STEP 6 · IMPLICATION 1 — Pituitary disproportionately high
 * hero 16.5% + interpretation cards
 * ───────────────────────────────────────────────────────────────── */
function Step6Pituitary() {
  return (
    <div className="lm-scene lm-scene--impl">
      <Page folio="CH 08 · IMPLICATION 01 / 03" />
      <div className="lm-impl">
        <div className="lm-impl__header">
          <div className="lm-mono lm-impl__num lm-impl__num--accent">IMPLICATION 01</div>
          <div className="lm-impl__title">PITUITARY DISPROPORTIONATELY HIGH</div>
        </div>
        <div className="lm-impl__hero">
          <div className="lm-mono lm-impl__hero-mono">PITUITARY · SURGICAL SHARE</div>
          <div className="lm-impl__hero-num hero-num">16.5%</div>
          <div className="lm-impl__hero-caption">n = 546 surgeries</div>
        </div>
        <div className="lm-interp">
          <InterpCard
            mono="SIGNAL · 01"
            title="genuine prevalence"
            body="aligns with community estimates of 10-22% (Molitch)"
          />
          <InterpCard
            mono="SIGNAL · 02"
            title="care concentration"
            body="expert pituitary centers attract referrals — case-mix amplified"
          />
          <InterpCard
            mono="SIGNAL · 03"
            title="fellowship training need"
            body="workforce planning · sustaining endocrine-neurosurgical expertise"
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * STEP 7 · IMPLICATION 2 — Meningioma F:M 2.5:1
 * ratio hero + hormonal hypothesis cards
 * ───────────────────────────────────────────────────────────────── */
function Step7Meningioma() {
  return (
    <div className="lm-scene lm-scene--impl">
      <Page folio="CH 08 · IMPLICATION 02 / 03" />
      <div className="lm-impl">
        <div className="lm-impl__header">
          <div className="lm-mono lm-impl__num lm-impl__num--accent">IMPLICATION 02</div>
          <div className="lm-impl__title">MENINGIOMA F:M 2.5:1</div>
        </div>
        <div className="lm-ratio">
          <div className="lm-ratio__bar">
            <div className="lm-ratio__seg lm-ratio__seg--female">
              <span className="lm-mono lm-ratio__seg-mono">FEMALE</span>
              <span className="lm-ratio__seg-pct">2.5</span>
            </div>
            <div className="lm-ratio__seg lm-ratio__seg--male">
              <span className="lm-mono lm-ratio__seg-mono">MALE</span>
              <span className="lm-ratio__seg-pct">1.0</span>
            </div>
          </div>
          <div className="lm-ratio__hero">
            <span className="lm-ratio__hero-num hero-num">2.5 : 1</span>
            <span className="lm-mono lm-ratio__hero-caption">
              female-to-male · meningioma G1-2 · our cohort
            </span>
          </div>
        </div>
        <div className="lm-interp lm-interp--two">
          <InterpCard
            mono="MECHANISM"
            title="hormonal hypothesis supported"
            body="estrogen / progesterone receptor expression in meningioma tissue · consistent with global literature"
          />
          <InterpCard
            mono="DIRECTION"
            title="receptor-driven therapeutics"
            body="motivates ongoing research into hormone-receptor-targeted treatment"
          />
        </div>
      </div>
      <div className="lm-cite lm-mono">Wiemels et al · J Neurooncol 2010</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
 * STEP 8 · IMPLICATION 3 — True incidence increase
 * +30% growth arrow + stable case-mix bars
 * ───────────────────────────────────────────────────────────────── */
function Step8TrueIncidence() {
  return (
    <div className="lm-scene lm-scene--impl">
      <Page folio="CH 08 · IMPLICATION 03 / 03" />
      <div className="lm-impl">
        <div className="lm-impl__header">
          <div className="lm-mono lm-impl__num lm-impl__num--accent">IMPLICATION 03</div>
          <div className="lm-impl__title">TRUE INCIDENCE INCREASE</div>
        </div>
        <div className="lm-growth">
          <div className="lm-growth__left">
            <div className="lm-mono lm-growth__mono">VOLUME · 5 YEARS</div>
            <div className="lm-growth__hero hero-num">+30%</div>
            <div className="lm-growth__sub">
              565 (2020-21) → 735 (2024-25) surgeries
            </div>
            <GrowthArrow />
          </div>
          <div className="lm-growth__right">
            <div className="lm-mono lm-growth__mono">CASE-MIX · STABLE</div>
            <StableMix />
            <div className="lm-growth__caption">
              proportions held across the 5-year window
            </div>
          </div>
        </div>
        <div className="lm-takeaway">
          <span className="lm-mono lm-takeaway__mono">READING</span>
          <span className="lm-takeaway__body">
            volume up · mix flat &nbsp;→&nbsp;&nbsp;<em>true incidence rise</em>
            &nbsp;rather than a shift in diagnostic threshold
          </span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
 * HELPER COMPONENTS
 * ════════════════════════════════════════════════════════════════ */

/* ── referral funnel SVG (limitation 1) ── */
function ReferralFunnel() {
  return (
    <div className="lm-funnel">
      <svg viewBox="0 0 920 360" width="920" height="360" aria-hidden="true">
        {/* community pool — left */}
        <text x="40" y="60" className="lm-svg-mono" fill="var(--text-mute)">
          COMMUNITY POPULATION
        </text>
        <rect
          x="40" y="80" width="220" height="240"
          fill="var(--surface-3)"
          stroke="var(--rule)" strokeWidth="1"
        />
        {/* dots representing patients */}
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, c) => {
            const x = 70 + c * 35;
            const y = 110 + r * 28;
            const isComplex = (r * 5 + c) % 6 === 0;
            return (
              <circle
                key={`${r}-${c}`}
                cx={x}
                cy={y}
                r={isComplex ? 6 : 4}
                fill={isComplex ? "var(--accent)" : "var(--text-faint)"}
                opacity={isComplex ? 1 : 0.7}
              />
            );
          })
        )}

        {/* bypass arrow — simple cases stay in community */}
        <path
          d="M 260 130 C 320 130, 360 110, 420 110 L 880 110"
          stroke="var(--text-faint)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          fill="none"
        />
        <text x="440" y="98" className="lm-svg-mono" fill="var(--text-faint)">
          simple cases · managed locally
        </text>

        {/* funnel — concentrates complex */}
        <path
          d="M 260 180 L 530 220 L 530 280 L 260 320 Z"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeWidth="1.2"
        />
        <text x="350" y="350" className="lm-svg-mono" fill="var(--accent)">
          REFERRAL FUNNEL
        </text>

        {/* tertiary center — right */}
        <text x="640" y="200" className="lm-svg-mono" fill="var(--accent)">
          TERTIARY CENTER (CGMH)
        </text>
        <rect
          x="640" y="220" width="200" height="100"
          fill="var(--surface-2)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        {/* hospital-like glyph: cross */}
        <line x1="740" y1="240" x2="740" y2="300" stroke="var(--accent)" strokeWidth="2" />
        <line x1="710" y1="270" x2="770" y2="270" stroke="var(--accent)" strokeWidth="2" />
        {/* arrow into hospital */}
        <line
          x1="530" y1="250" x2="640" y2="270"
          stroke="var(--accent)" strokeWidth="1.5"
          markerEnd="url(#lm-arrow)"
        />
        <text x="540" y="240" className="lm-svg-mono" fill="var(--accent)">
          complex cases concentrate
        </text>

        <defs>
          <marker id="lm-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

/* ── Venn diagram (limitation 2) ── */
function SurgicalVenn() {
  return (
    <div className="lm-venn">
      <svg viewBox="0 0 920 360" width="920" height="360" aria-hidden="true">
        {/* big circle — all brain tumors */}
        <circle
          cx="380" cy="180" r="170"
          fill="var(--surface-3)"
          stroke="var(--rule)"
          strokeWidth="1.2"
        />
        <text x="200" y="80" className="lm-svg-mono" fill="var(--text-mute)">
          ALL BRAIN TUMORS · TAIWAN
        </text>

        {/* small overlapping circle — surgical cohort */}
        <circle
          cx="560" cy="180" r="110"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text x="540" y="80" className="lm-svg-mono" fill="var(--accent)">
          SURGICAL COHORT · n = 3,309
        </text>

        {/* labels for excluded regions */}
        <text x="220" y="160" className="lm-svg-body" fill="var(--text-2)">
          imaging-only
        </text>
        <text x="220" y="190" className="lm-svg-body" fill="var(--text-2)">
          diagnoses
        </text>

        <text x="220" y="240" className="lm-svg-body-small" fill="var(--text-mute)">
          small meningiomas
        </text>
        <text x="220" y="260" className="lm-svg-body-small" fill="var(--text-mute)">
          microadenomas
        </text>
        <text x="220" y="280" className="lm-svg-body-small" fill="var(--text-mute)">
          conservatively managed
        </text>

        {/* exclusion hatch pattern overlay in left crescent */}
        <defs>
          <pattern id="lm-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="var(--text-faint)" strokeWidth="0.8" />
          </pattern>
          <clipPath id="lm-crescent">
            <circle cx="380" cy="180" r="170" />
          </clipPath>
        </defs>
        <g clipPath="url(#lm-crescent)">
          {/* hatch the left portion not covered by surgical circle */}
          <rect x="210" y="10" width="200" height="340" fill="url(#lm-hatch)" opacity="0.6" />
        </g>

        {/* tag arrows */}
        <line x1="320" y1="155" x2="380" y2="170" stroke="var(--text-mute)" strokeWidth="0.8" />
        <line x1="320" y1="250" x2="380" y2="220" stroke="var(--text-mute)" strokeWidth="0.8" />

        {/* surgical region body */}
        <text x="530" y="180" className="lm-svg-body" fill="var(--accent)">
          captured here
        </text>
        <text x="530" y="208" className="lm-svg-body-small" fill="var(--accent)">
          histopath confirmed
        </text>

        {/* legend for excluded */}
        <rect x="700" y="240" width="14" height="14" fill="url(#lm-hatch)" />
        <text x="724" y="252" className="lm-svg-mono" fill="var(--text-mute)">
          EXCLUDED · NOT IN COHORT
        </text>
      </svg>
    </div>
  );
}

/* ── Molecular markers placeholder card (limitation 3) ── */
function MolecularCard() {
  return (
    <div className="lm-mol">
      <div className="lm-mono lm-mol__title">2021 WHO · MOLECULAR MARKERS</div>
      <div className="lm-mol__grid">
        <MolCell label="IDH" sub="mutation status" />
        <MolCell label="1p / 19q" sub="codeletion" />
        <MolCell label="MGMT" sub="methylation" />
      </div>
      <div className="lm-mol__caption lm-mono">
        retrospective records · predate routine capture
      </div>
    </div>
  );
}

function MolCell({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="lm-molcell">
      <div className="lm-molcell__label">{label}</div>
      <div className="lm-mono lm-molcell__sub">{sub}</div>
      <hr className="rule lm-molcell__rule" />
      <div className="lm-molcell__placeholder">
        <span className="lm-molcell__dash">—</span>
      </div>
      <div className="lm-mono lm-molcell__status">NOT CAPTURED</div>
    </div>
  );
}

/* ── interpretation card used by implications ── */
function InterpCard({
  mono,
  title,
  body,
}: {
  mono: string;
  title: string;
  body: string;
}) {
  return (
    <div className="lm-interp__card card">
      <div className="lm-mono lm-interp__mono">{mono}</div>
      <div className="lm-interp__title">{title}</div>
      <hr className="rule lm-interp__rule" />
      <div className="lm-interp__body">{body}</div>
    </div>
  );
}

/* ── growth arrow svg ── */
function GrowthArrow() {
  return (
    <svg
      className="lm-growth__svg"
      viewBox="0 0 360 120"
      width="360"
      height="120"
      aria-hidden="true"
    >
      {/* baseline */}
      <line x1="20" y1="100" x2="340" y2="100" stroke="var(--rule)" strokeWidth="1" />
      {/* growth curve */}
      <path
        d="M 30 95 L 110 88 L 190 70 L 270 50 L 330 30"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="none"
      />
      {/* arrowhead */}
      <path
        d="M 330 30 L 318 28 L 322 40 Z"
        fill="var(--accent)"
      />
      {/* tick markers */}
      {[30, 110, 190, 270, 330].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={[95, 88, 70, 50, 30][i]} r="3" fill="var(--accent)" />
          <text
            x={x}
            y="116"
            className="lm-svg-mono-tiny"
            fill="var(--text-faint)"
            textAnchor="middle"
          >
            Y{i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── stable case-mix bars ── */
function StableMix() {
  // five years × five categories, all proportions identical
  const cats = [
    { mono: "MGM", flex: 0.21, label: "meningioma" },
    { mono: "MET", flex: 0.19, label: "metastatic" },
    { mono: "PIT", flex: 0.17, label: "pituitary" },
    { mono: "GBM", flex: 0.16, label: "GBM" },
    { mono: "REST", flex: 0.27, label: "other" },
  ];
  return (
    <div className="lm-mix">
      {[0, 1, 2, 3, 4].map((y) => (
        <div className="lm-mix__row" key={y}>
          <span className="lm-mono lm-mix__year">Y{y + 1}</span>
          <div className="lm-mix__bar">
            {cats.map((c, i) => (
              <div
                key={i}
                className={`lm-mix__seg lm-mix__seg--${i}`}
                style={{ flex: c.flex }}
                title={c.label}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
