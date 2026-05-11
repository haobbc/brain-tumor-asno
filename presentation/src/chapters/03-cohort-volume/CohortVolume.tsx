import type { ChapterStepProps } from "../../registry/types";
import { StackedBar } from "../../components/charts/StackedBar";
import { VOLUME_BY_YEAR } from "../../data/study-data";
import "./CohortVolume.css";

export default function CohortVolume({ step }: ChapterStepProps) {
  if (step === 0) return <Step1Opener />;
  if (step === 1) return <Step2MeanAge />;
  if (step === 2) return <Step3AgeGenderSplit />;
  if (step === 3) return <Step4AgeRange />;
  if (step === 4) return <Step5VolumeHero />;
  if (step === 5) return <Step6Figure />;
  return <Step7Drivers />;
}

/* ── Page chrome (masthead + folio, same pattern as chapter 1) ── */
function Page() {
  return (
    <>
      <div className="cv-masthead">
        <span className="cv-mono cv-masthead__issue">ASNO 2026 · ORAL · SESSION</span>
        <span className="cv-masthead__sep">·</span>
        <span className="cv-mono cv-masthead__topic">SURGICAL BRAIN-TUMOR REGISTRY · TAIWAN</span>
      </div>
      <div className="cv-folio">CH 03 · COHORT &amp; VOLUME</div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * step 1 — section opener: "The cohort, in three numbers."
 * dominant action: serif italic title fades up + rule draws right
 * ───────────────────────────────────────────────────────────────────── */
function Step1Opener() {
  return (
    <div className="cv-scene cv-scene--opener">
      <Page />
      <div className="cv-opener">
        <div className="cv-opener__eyebrow cv-mono">SECTION III · DEMOGRAPHICS &amp; VOLUME</div>
        <h1 className="cv-opener__title">
          The cohort, in <span className="cv-accent">three</span> numbers.
        </h1>
        <hr className="rule cv-opener__rule" />
        <div className="cv-opener__sub">
          Age · gender · five-year operative volume.
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * step 2 — mean age hero
 * dominant action: hero number scales in (italic Source Serif),
 *                  small SVG bell-shape histogram draws under it
 * ───────────────────────────────────────────────────────────────────── */
function Step2MeanAge() {
  return (
    <div className="cv-scene cv-scene--mean">
      <Page />
      <div className="cv-section">
        <div className="cv-section__eyebrow cv-mono">PATIENT AGE</div>
        <div className="cv-section__title">
          A predominantly adult population.
        </div>
      </div>
      <div className="cv-mean">
        <div className="cv-mean__hero">
          <span className="hero-num cv-mean__value">54.2</span>
          <span className="cv-mean__pm">±</span>
          <span className="hero-num cv-mean__sd">16.7</span>
        </div>
        <div className="cv-mean__legend">
          <span className="cv-mono cv-mean__legend-key">MEAN</span>
          <span className="cv-mean__legend-sep">·</span>
          <span className="cv-mono cv-mean__legend-key">SD</span>
          <span className="cv-mean__legend-units">years</span>
        </div>
        <AgeBellCurve />
        <div className="cv-mean__caption cv-mono">
          n = 2,875 unique patients · median 56.8 · Q1–Q3 44.3 – 66.2
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * step 3 — age ≥ 40 bar + female 53.9% sector
 * dominant action: horizontal bar grows L→R + circular sector sweeps
 * ───────────────────────────────────────────────────────────────────── */
function Step3AgeGenderSplit() {
  return (
    <div className="cv-scene cv-scene--split">
      <Page />
      <div className="cv-section">
        <div className="cv-section__eyebrow cv-mono">AGE ≥ 40 · GENDER</div>
        <div className="cv-section__title">
          Adult-skewed · slight female predominance.
        </div>
      </div>
      <div className="cv-split">
        {/* left — 80.8% horizontal stacked bar */}
        <div className="cv-split__panel">
          <div className="cv-mono cv-split__panel-mono">SURGERIES · AGE ≥ 40</div>
          <div className="cv-bar">
            <div className="cv-bar__fill cv-bar__fill--age" />
            <div className="cv-bar__rest" />
            <div className="cv-bar__tick cv-bar__tick--main">
              <span className="hero-num cv-bar__pct">80.8%</span>
            </div>
          </div>
          <div className="cv-split__panel-foot cv-mono">
            n = 2,674 of 3,309 surgeries
          </div>
        </div>

        {/* divider */}
        <div className="cv-split__div" />

        {/* right — circular sector 53.9% female */}
        <div className="cv-split__panel">
          <div className="cv-mono cv-split__panel-mono">FEMALE · UNIQUE PATIENTS</div>
          <div className="cv-sector">
            <FemaleSector />
            <div className="cv-sector__centre">
              <span className="hero-num cv-sector__pct">53.9%</span>
              <span className="cv-mono cv-sector__sub">FEMALE</span>
            </div>
          </div>
          <div className="cv-split__panel-foot cv-mono">
            n = 1,549 of 2,875 unique patients
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * step 4 — age extremes dot plot
 * dominant action: horizontal age axis, dots stagger from young → old
 * ───────────────────────────────────────────────────────────────────── */
function Step4AgeRange() {
  return (
    <div className="cv-scene cv-scene--range">
      <Page />
      <div className="cv-section">
        <div className="cv-section__eyebrow cv-mono">MEAN AGE BY TUMOR TYPE</div>
        <div className="cv-section__title">
          Dramatic spread <span className="cv-accent">·</span> embryonal to lymphoma.
        </div>
      </div>
      <AgeRangeDots />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * step 5 — volume hero: 565 → 735, +30%
 * dominant action: italic 565 fades in, arrow draws L→R, 735 scales in
 * ───────────────────────────────────────────────────────────────────── */
function Step5VolumeHero() {
  return (
    <div className="cv-scene cv-scene--volume">
      <Page />
      <div className="cv-section">
        <div className="cv-section__eyebrow cv-mono">SURGICAL VOLUME · 5-YEAR TREND</div>
        <div className="cv-section__title">
          Five years of steady growth.
        </div>
      </div>
      <div className="cv-volume">
        <div className="cv-volume__node cv-volume__node--start">
          <div className="cv-mono cv-volume__label">YEAR 1 · 2020–2021</div>
          <div className="hero-num cv-volume__num">565</div>
          <div className="cv-mono cv-volume__cap">cases</div>
        </div>

        <ArrowRight />

        <div className="cv-volume__node cv-volume__node--end">
          <div className="cv-mono cv-volume__label">YEAR 5 · 2024–2025</div>
          <div className="hero-num cv-volume__num cv-volume__num--end">735</div>
          <div className="cv-mono cv-volume__cap">cases</div>
        </div>

        <div className="cv-volume__delta">
          <span className="hero-num cv-volume__delta-num">+30%</span>
          <span className="cv-mono cv-volume__delta-cap">across the window</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * step 6 — real figure: fig-procedures-5year.png with annotation overlay
 * dominant action: figure fades in, then arrow + label annotate growth
 * ───────────────────────────────────────────────────────────────────── */
function Step6Figure() {
  return (
    <div className="cv-scene cv-scene--figure">
      <Page />
      <div className="cv-section cv-section--compact">
        <div className="cv-section__eyebrow cv-mono">PROCEDURE BREAKDOWN · YEAR BY YEAR</div>
        <div className="cv-section__title cv-section__title--compact">
          Volume grew steadily — across every procedure category.
        </div>
      </div>
      <div className="cv-figure">
        <div className="cv-figure__chart">
          <StackedBar data={VOLUME_BY_YEAR} width={1100} height={580} />
        </div>
        <div className="cv-figure__delta cv-mono">
          <span className="cv-figure__delta-num hero-num">+30%</span>
          <span className="cv-figure__delta-cap">5-year volume growth</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * step 7 — three driver pills, staggered
 * dominant action: pills enter one after another with vertical offset
 * ───────────────────────────────────────────────────────────────────── */
function Step7Drivers() {
  return (
    <div className="cv-scene cv-scene--drivers">
      <Page />
      <div className="cv-section">
        <div className="cv-section__eyebrow cv-mono">WHAT'S DRIVING IT</div>
        <div className="cv-section__title">
          Multiple forces — likely all contribute.
        </div>
      </div>
      <div className="cv-drivers">
        <DriverPill
          mono="IMAGING"
          en="Improved access to MRI"
          example="earlier detection · smaller incidentalomas"
          delayMs={250}
        />
        <DriverPill
          mono="AWARENESS"
          en="Public awareness of neurologic symptoms"
          example="patient-initiated referral pathways"
          delayMs={650}
        />
        <DriverPill
          mono="AGING"
          en="Aging demographics in Taiwan"
          example="cancer burden shifting older · metastatic load"
          delayMs={1050}
        />
      </div>
      <div className="cv-cite cv-mono">Bondy et al · Cancer 2008</div>
    </div>
  );
}

/* ── helpers ──────────────────────────────────────────────────────── */

function AgeBellCurve() {
  // Small bell-curve indicator that draws under the hero number.
  // Vertical guides mark mean and ±1 SD.
  return (
    <svg
      className="cv-mean__curve"
      viewBox="0 0 600 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* baseline rule */}
      <line
        x1="0"
        y1="100"
        x2="600"
        y2="100"
        stroke="var(--rule)"
        strokeWidth="1"
      />
      {/* the bell — quadratic curve, drawn on enter */}
      <path
        className="cv-mean__bell"
        d="M 20 100 C 150 100, 220 18, 300 18 C 380 18, 450 100, 580 100"
        fill="var(--accent-soft)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* mean vertical */}
      <line
        x1="300"
        y1="18"
        x2="300"
        y2="100"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      {/* ±1 SD verticals */}
      <line
        x1="195"
        y1="60"
        x2="195"
        y2="100"
        stroke="var(--text-mute)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <line
        x1="405"
        y1="60"
        x2="405"
        y2="100"
        stroke="var(--text-mute)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      {/* tick labels */}
      <text
        x="300"
        y="118"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill="var(--accent)"
        letterSpacing="0.14em"
      >
        54.2
      </text>
      <text
        x="195"
        y="118"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="var(--text-mute)"
        letterSpacing="0.12em"
      >
        37.5
      </text>
      <text
        x="405"
        y="118"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="var(--text-mute)"
        letterSpacing="0.12em"
      >
        70.9
      </text>
    </svg>
  );
}

function FemaleSector() {
  // Donut chart — accent arc = 53.9% female, dim arc = remainder.
  // 53.9% of full circle = 0.539 * 2π. We draw two arcs of equal stroke.
  // strokeDasharray pattern is used to "fill" the accent portion.
  const circumference = 2 * Math.PI * 80; // r=80
  const fillLen = circumference * 0.539;
  return (
    <svg
      className="cv-sector__svg"
      viewBox="0 0 200 200"
      width="240"
      height="240"
      aria-hidden="true"
    >
      {/* background ring */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="var(--surface-3)"
        strokeWidth="22"
      />
      {/* female accent arc — starts at 12 o'clock, sweeps clockwise */}
      <circle
        className="cv-sector__arc"
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="22"
        strokeLinecap="butt"
        strokeDasharray={`${fillLen} ${circumference}`}
        transform="rotate(-90 100 100)"
      />
    </svg>
  );
}

function AgeRangeDots() {
  // Horizontal axis 0 → 80 years. Plot each tumor type as a labelled dot
  // at its mean age. Staggered entry animation.
  // young end (left, accent): embryonal 18, germ cell 19
  // old end (right, accent): metastatic 60, lymphoma 64
  // overall mean (centre, faint): 54.2
  const points: {
    age: number;
    label: string;
    cohort: string;
    side: "young" | "old" | "mean";
    delay: number;
  }[] = [
    { age: 18, label: "Embryonal", cohort: "mean 18 yr", side: "young", delay: 350 },
    { age: 19, label: "Germ cell", cohort: "mean 19 yr", side: "young", delay: 700 },
    { age: 54.2, label: "Cohort overall", cohort: "mean 54.2 yr", side: "mean", delay: 1050 },
    { age: 60, label: "Metastatic", cohort: "mean 60 yr", side: "old", delay: 1350 },
    { age: 64, label: "Lymphoma", cohort: "mean 64 yr", side: "old", delay: 1650 },
  ];
  const axisMin = 0;
  const axisMax = 80;
  const pct = (age: number) => ((age - axisMin) / (axisMax - axisMin)) * 100;
  return (
    <div className="cv-range">
      <div className="cv-range__plot">
        {/* axis line */}
        <div className="cv-range__axis" />
        {/* tick marks */}
        {[0, 20, 40, 60, 80].map((t) => (
          <div
            key={t}
            className="cv-range__tick"
            style={{ left: `${pct(t)}%` }}
          >
            <span className="cv-mono cv-range__tick-label">{t}</span>
          </div>
        ))}
        {/* dots */}
        {points.map((p, i) => (
          <div
            key={p.label}
            className={`cv-range__dot cv-range__dot--${p.side} cv-range__dot--alt${i % 2}`}
            style={{
              left: `${pct(p.age)}%`,
              animationDelay: `${p.delay}ms`,
            }}
          >
            <span className="cv-range__dot-circle" />
            <span className="cv-range__dot-label">
              <span className="cv-range__dot-name">{p.label}</span>
              <span className="cv-mono cv-range__dot-cohort">{p.cohort}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="cv-range__axis-cap cv-mono">age in years (mean)</div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      className="cv-volume__arrow"
      viewBox="0 0 280 60"
      width="280"
      height="60"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="cv-vol-arrow"
          viewBox="0 0 12 12"
          refX="10"
          refY="6"
          markerWidth="10"
          markerHeight="10"
          orient="auto"
        >
          <path d="M 0 0 L 12 6 L 0 12 z" fill="var(--accent)" />
        </marker>
      </defs>
      <line
        className="cv-volume__arrow-line"
        x1="6"
        y1="30"
        x2="250"
        y2="30"
        stroke="var(--accent)"
        strokeWidth="2"
        markerEnd="url(#cv-vol-arrow)"
      />
    </svg>
  );
}

function DriverPill({
  mono,
  en,
  example,
  delayMs,
}: {
  mono: string;
  en: string;
  example: string;
  delayMs: number;
}) {
  return (
    <div
      className="cv-driver card"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="cv-mono cv-driver__mono">{mono}</div>
      <div className="cv-driver__en">{en}</div>
      <hr className="rule cv-driver__rule" />
      <div className="cv-mono cv-driver__example">{example}</div>
    </div>
  );
}
