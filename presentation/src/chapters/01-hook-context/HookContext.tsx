import type { ChapterStepProps } from "../../registry/types";
import "./HookContext.css";

export default function HookContext({ step }: ChapterStepProps) {
  if (step === 0) return <Step1Greeting />;
  if (step === 1) return <Step2WesternDominance />;
  if (step === 2) return <Step3AsianUnder />;
  if (step === 3) return <Step4Factors />;
  if (step === 4) return <Step5Taiwan />;
  if (step === 5) return <Step6Thesis />;
  if (step === 6) return <Step7Approach />;
  if (step === 7) return <Step8Numbers />;
  return <Step9Agenda />;
}

function Page() {
  return (
    <>
      <div className="hk-masthead">
        <span className="hk-mono hk-masthead__issue">ASNO 2026 · ORAL · SESSION</span>
        <span className="hk-masthead__sep">·</span>
        <span className="hk-mono hk-masthead__topic">SURGICAL BRAIN-TUMOR REGISTRY · TAIWAN</span>
      </div>
      <div className="hk-folio">CH 01 · CONTEXT</div>
    </>
  );
}

/* ── Step 1 — greeting + author/affiliation card ── */
function Step1Greeting() {
  return (
    <div className="hk-scene hk-scene--greeting">
      <Page />
      <div className="hk-cover">
        <div className="hk-cover__eyebrow hk-mono">RETROSPECTIVE COHORT · 5 YEARS</div>
        <h1 className="hk-cover__title">
          Surgical Management of Brain Tumors in Taiwan
        </h1>
        <h2 className="hk-cover__sub">
          A Five-Year Descriptive Analysis at Chang Gung Memorial Hospital, 2020-2025
        </h2>
        <hr className="rule hk-cover__rule" />
        <div className="hk-cover__byline">
          <span className="hk-cover__author">Kuan-Hao Fu, MD</span>
          <span className="hk-cover__aff">· Department of Neurosurgery · Chang Gung Memorial Hospital, Keelung</span>
        </div>
      </div>
    </div>
  );
}

/* ── Step 2 — Western dominance composition ── */
function Step2WesternDominance() {
  return (
    <div className="hk-scene hk-scene--dominance">
      <Page />
      <div className="hk-section">
        <div className="hk-section__eyebrow hk-mono">REGISTRY · COMPOSITION</div>
        <div className="hk-section__title">
          Global neuro-oncology epidemiology leans on Western registries
        </div>
      </div>
      <RegistryDiagram weight="western" />
      <div className="hk-cite hk-mono">Ostrom et al · Neuro-Oncology 2022</div>
    </div>
  );
}

/* ── Step 3 — Asian underrepresented ── */
function Step3AsianUnder() {
  return (
    <div className="hk-scene hk-scene--asian">
      <Page />
      <div className="hk-section">
        <div className="hk-section__eyebrow hk-mono">GAP</div>
        <div className="hk-section__title">
          But CBTRUS is American population data
        </div>
        <div className="hk-section__sub">
          The Asian surgical experience is underrepresented
        </div>
      </div>
      <RegistryDiagram weight="asian-highlight" />
      <div className="hk-cite hk-mono">Jung et al · Cancer Res Treat 2019 · Chen et al · CA Cancer J Clin 2016</div>
    </div>
  );
}

/* ── Step 4 — three factor pills ── */
function Step4Factors() {
  return (
    <div className="hk-scene hk-scene--factors">
      <Page />
      <div className="hk-section">
        <div className="hk-section__eyebrow hk-mono">WHY IT MATTERS</div>
        <div className="hk-section__title">
          What arrives in the operating room is shaped by
        </div>
      </div>
      <div className="hk-factors">
        <FactorCard
          mono="GENETICS"
          en="population genetics"
          example="e.g. germ cell tumor distribution"
          delayMs={300}
        />
        <FactorCard
          mono="ENVIRONMENT"
          en="exposures & lifestyle"
          example="e.g. environmental carcinogens"
          delayMs={650}
        />
        <FactorCard
          mono="HEALTHCARE SYSTEM"
          en="access · referral patterns"
          example="e.g. NHI single-payer in Taiwan"
          delayMs={1000}
        />
      </div>
      <div className="hk-cite hk-mono">Bondy et al · Cancer 2008</div>
    </div>
  );
}

/* ── Step 5 — Taiwan context ── */
function Step5Taiwan() {
  return (
    <div className="hk-scene hk-scene--taiwan">
      <Page />
      <div className="hk-section">
        <div className="hk-section__eyebrow hk-mono">LOCAL CONTEXT</div>
        <div className="hk-section__title">
          Taiwan ·{" "}
          <span className="hk-accent">a different case mix than Western cohorts</span>
        </div>
      </div>
      <div className="hk-tw">
        <div className="hk-tw__map">
          <TaiwanMap />
        </div>
        <div className="hk-tw__badges">
          <ContextBadge mono="NHI" en="Universal national health insurance · single-payer" />
          <ContextBadge mono="AGING" en="Median age rising · cancer burden shifting older" />
          <ContextBadge mono="REFERRAL" en="Tertiary centers concentrate complex pathology" />
        </div>
      </div>
    </div>
  );
}

/* ── Step 6 — thesis hero ── */
function Step6Thesis() {
  return (
    <div className="hk-scene hk-scene--thesis">
      <Page />
      <div className="hk-thesis">
        <div className="hk-thesis__eyebrow hk-mono">CALL TO ACTION</div>
        <div className="hk-thesis__hero">
          We need <span className="hk-accent hk-thesis__hero-em">our own</span> numbers.
        </div>
        <hr className="rule hk-thesis__rule" />
        <div className="hk-thesis__sub">
          Five years of single-center surgical data — to read against CBTRUS, and beyond.
        </div>
      </div>
    </div>
  );
}

/* ── Step 7 — Approach overview ── */
function Step7Approach() {
  return (
    <div className="hk-scene hk-scene--approach">
      <Page />
      <div className="hk-section">
        <div className="hk-section__eyebrow hk-mono">APPROACH</div>
        <div className="hk-section__title">
          A major tertiary referral center in Taiwan
        </div>
      </div>
      <div className="hk-inst">
        <div className="hk-inst__card">
          <div className="hk-inst__name">Chang Gung Memorial Hospital</div>
          <div className="hk-inst__branch">Linkou Branch · Taoyuan, Taiwan</div>
          <hr className="rule hk-inst__rule" />
          <div className="hk-inst__rows">
            <InstRow mono="DESIGN" en="Retrospective descriptive analysis" />
            <InstRow mono="WINDOW" en="August 2020 — July 2025 · five years" />
            <InstRow mono="SOURCE" en="Electronic health records · operative schedule" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Step 8 — headline numbers ── */
function Step8Numbers() {
  return (
    <div className="hk-scene hk-scene--numbers">
      <Page />
      <div className="hk-section">
        <div className="hk-section__eyebrow hk-mono">COHORT</div>
        <div className="hk-section__title">Headline numbers</div>
      </div>
      <div className="hk-nums">
        <NumCard mono="SURGERIES" value="3,309" caption="brain tumor operations" delayMs={300} />
        <div className="hk-nums__sep">·</div>
        <NumCard mono="PATIENTS" value="2,875" caption="unique individuals" delayMs={800} />
        <div className="hk-nums__sep">·</div>
        <NumCard mono="WINDOW" value="5" caption="years (2020 – 2025)" delayMs={1300} />
      </div>
    </div>
  );
}

/* ── Step 9 — agenda tease ── */
function Step9Agenda() {
  return (
    <div className="hk-scene hk-scene--agenda">
      <Page />
      <div className="hk-section">
        <div className="hk-section__eyebrow hk-mono">TODAY</div>
        <div className="hk-section__title">
          What aligns with CBTRUS · what doesn't · why it matters
        </div>
      </div>
      <div className="hk-agenda">
        <AgendaItem num="01" label="Methods + cohort flow" />
        <AgendaItem num="02" label="Demographics + 5-year volume" />
        <AgendaItem num="03" label="Histopathology — the central pie" />
        <AgendaItem num="04" label="CGMH vs CBTRUS" />
        <AgendaItem num="05" label="Gender + pediatric patterns" />
        <AgendaItem num="06" label="Procedures + stable case-mix" />
        <AgendaItem num="07" label="Limitations + clinical implications" />
        <AgendaItem num="08" label="Take-home + next steps" />
      </div>
    </div>
  );
}

/* ── helpers ── */

function RegistryDiagram({ weight }: { weight: "western" | "asian-highlight" }) {
  // simple horizontal stacked bar showing dominance of CBTRUS in literature.
  // when "asian-highlight", outline the Asia segment in accent + de-emphasize others.
  const asianAccent = weight === "asian-highlight";
  return (
    <div className="hk-reg">
      <div className="hk-reg__bar">
        <div className={`hk-reg__seg hk-reg__seg--cbtrus ${asianAccent ? "hk-reg__seg--dim" : ""}`}>
          <span className="hk-mono hk-reg__seg-label">CBTRUS · US</span>
          <span className="hk-mono hk-reg__seg-pct">~52%</span>
        </div>
        <div className={`hk-reg__seg hk-reg__seg--eu ${asianAccent ? "hk-reg__seg--dim" : ""}`}>
          <span className="hk-mono hk-reg__seg-label">EU · UK</span>
          <span className="hk-mono hk-reg__seg-pct">~28%</span>
        </div>
        <div className={`hk-reg__seg hk-reg__seg--rest ${asianAccent ? "hk-reg__seg--dim" : ""}`}>
          <span className="hk-mono hk-reg__seg-label">rest</span>
        </div>
        <div className={`hk-reg__seg hk-reg__seg--asia ${asianAccent ? "hk-reg__seg--accent" : ""}`}>
          <span className="hk-mono hk-reg__seg-label">Asia · surgical</span>
          <span className="hk-mono hk-reg__seg-pct">{"<8%"}</span>
        </div>
      </div>
      <div className="hk-reg__caption hk-mono">
        share of indexed neuro-oncology epi literature · illustrative
      </div>
    </div>
  );
}

function FactorCard({
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
    <div className="hk-factor card" style={{ animationDelay: `${delayMs}ms` }}>
      <div className="hk-mono hk-factor__mono">{mono}</div>
      <div className="hk-factor__en">{en}</div>
      <hr className="rule hk-factor__rule" />
      <div className="hk-factor__example hk-mono">{example}</div>
    </div>
  );
}

function ContextBadge({ mono, en }: { mono: string; en: string }) {
  return (
    <div className="hk-ctx card">
      <div className="hk-mono hk-ctx__mono">{mono}</div>
      <div className="hk-ctx__en">{en}</div>
    </div>
  );
}

function InstRow({ mono, en }: { mono: string; en: string }) {
  return (
    <div className="hk-inst__row">
      <span className="hk-mono hk-inst__row-mono">{mono}</span>
      <span className="hk-inst__row-en">{en}</span>
    </div>
  );
}

function NumCard({
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
    <div className="hk-num" style={{ animationDelay: `${delayMs}ms` }}>
      <div className="hk-mono hk-num__mono">{mono}</div>
      <div className="hk-num__value hero-num">{value}</div>
      <div className="hk-mono hk-num__caption">{caption}</div>
    </div>
  );
}

function AgendaItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="hk-agenda__item">
      <span className="hk-mono hk-agenda__num">{num}</span>
      <span className="hk-agenda__label">{label}</span>
    </div>
  );
}

function TaiwanMap() {
  return (
    <svg viewBox="0 0 220 320" width="220" height="320" aria-hidden="true">
      {/* simplified Taiwan outline */}
      <path
        d="M 95 30 C 110 25, 130 35, 140 60 C 150 90, 158 130, 160 170 C 158 210, 150 250, 130 280 C 110 300, 90 295, 75 270 C 65 230, 60 180, 65 140 C 70 100, 80 60, 95 30 Z"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* CGMH Linkou approximate location (Taoyuan, north-west) */}
      <circle cx="100" cy="80" r="6" fill="var(--accent)" />
      <text
        x="50"
        y="60"
        fill="var(--accent)"
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="0.12em"
      >
        CGMH · Linkou
      </text>
      <line x1="65" y1="68" x2="93" y2="78" stroke="var(--accent)" strokeWidth="1" />
    </svg>
  );
}
