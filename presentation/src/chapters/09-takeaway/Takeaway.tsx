import type { ChapterStepProps } from "../../registry/types";
import "./Takeaway.css";

export default function Takeaway({ step }: ChapterStepProps) {
  if (step === 0) return <StepOverview />;
  if (step === 1) return <StepCard1 />;
  if (step === 2) return <StepCard2 />;
  if (step === 3) return <StepCard3 />;
  return <StepThanks />;
}

/* ── persistent chrome (steps 1–4 only — step 5 strips it) ── */

function Page() {
  return (
    <>
      <div className="tk-masthead">
        <span className="tk-mono tk-masthead__issue">ASNO 2026 · ORAL · SESSION</span>
        <span className="tk-masthead__sep">·</span>
        <span className="tk-mono tk-masthead__topic">TAKE-HOME · CLOSING</span>
      </div>
      <div className="tk-folio">CH 09 · TAKEAWAY</div>
    </>
  );
}

/* ── Step 1 — overview: three numbered placeholders ── */

function StepOverview() {
  return (
    <div className="tk-scene tk-scene--overview">
      <Page />
      <div className="tk-section">
        <div className="tk-section__eyebrow tk-mono">TAKE-HOME · 3 messages</div>
        <div className="tk-section__title">
          What to remember from this talk
        </div>
      </div>
      <div className="tk-cards">
        <PlaceholderCard num="01" mono="ALIGNMENT" />
        <PlaceholderCard num="02" mono="VOLUME" />
        <PlaceholderCard num="03" mono="NEXT STEPS" />
      </div>
    </div>
  );
}

/* ── Step 2 — Card 01 lit: alignment vs CBTRUS ── */

function StepCard1() {
  return (
    <div className="tk-scene tk-scene--card1">
      <Page />
      <div className="tk-section tk-section--compact">
        <div className="tk-section__eyebrow tk-mono">TAKE-HOME · 01</div>
      </div>
      <div className="tk-cards">
        <ActiveCard num="01" mono="ALIGNMENT WITH CBTRUS · KEY DIVERGENCES">
          <div className="tk-c1">
            <div className="tk-c1__row tk-c1__row--align">
              <span className="tk-mono tk-c1__label">TOP-END · ALIGNED</span>
              <DotPattern matched />
              <span className="tk-c1__note">meningioma · metastatic · pituitary · GBM lead</span>
            </div>
            <hr className="rule tk-c1__rule" />
            <div className="tk-c1__row tk-c1__row--div">
              <span className="tk-mono tk-c1__label">DIVERGENCE (primary CNS denominator)</span>
              <div className="tk-c1__divs">
                <DivergencePill arrow="up" label="GBM 20.2% vs CBTRUS 14.2%" />
                <DivergencePill arrow="up" label="PITUITARY 20.3% (vs Molitch 10-22%)" />
                <DivergencePill arrow="down" label="MENINGIOMA 26.6% vs CBTRUS 39.7%" />
              </div>
            </div>
          </div>
          <div className="tk-card__concl">
            <em>Top of the distribution agrees. The shape diverges where referral pattern bites.</em>
          </div>
        </ActiveCard>
        <DimCard num="02" mono="VOLUME" />
        <DimCard num="03" mono="NEXT STEPS" />
      </div>
      <div className="tk-cite tk-mono">Ostrom et al · Neuro-Oncology 2022</div>
    </div>
  );
}

/* ── Step 3 — Card 02 lit: +30% volume growth ── */

function StepCard2() {
  return (
    <div className="tk-scene tk-scene--card2">
      <Page />
      <div className="tk-section tk-section--compact">
        <div className="tk-section__eyebrow tk-mono">TAKE-HOME · 02</div>
      </div>
      <div className="tk-cards">
        <DoneCard num="01" mono="ALIGNMENT" />
        <ActiveCard num="02" mono="VOLUME GROWING · +30% / 5 YR">
          <div className="tk-c2">
            <div className="tk-c2__hero">
              <span className="hero-num tk-c2__num">+30%</span>
              <svg
                className="tk-c2__arrow"
                viewBox="0 0 240 120"
                width="240"
                height="120"
                aria-hidden="true"
              >
                <line
                  x1="20"
                  y1="100"
                  x2="220"
                  y2="20"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
                <polyline
                  points="200,18 220,20 218,40"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
                <circle cx="20" cy="100" r="3" fill="var(--text)" />
              </svg>
            </div>
            <div className="tk-c2__range tk-mono">
              <span className="tk-c2__y">565</span>
              <span className="tk-c2__sep">→</span>
              <span className="tk-c2__y">735</span>
              <span className="tk-c2__yr">surgeries / yr · 2020 → 2025</span>
            </div>
          </div>
          <div className="tk-card__concl">
            <em>System capacity needs to keep pace.</em>
          </div>
        </ActiveCard>
        <DimCard num="03" mono="NEXT STEPS" />
      </div>
    </div>
  );
}

/* ── Step 4 — Card 03 lit: next steps ── */

function StepCard3() {
  return (
    <div className="tk-scene tk-scene--card3">
      <Page />
      <div className="tk-section tk-section--compact">
        <div className="tk-section__eyebrow tk-mono">TAKE-HOME · 03</div>
      </div>
      <div className="tk-cards">
        <DoneCard num="01" mono="ALIGNMENT" />
        <DoneCard num="02" mono="VOLUME" />
        <ActiveCard num="03" mono="NEXT STEPS · multi-center · molecular · registry">
          <div className="tk-c3">
            <NextRow
              mono="MULTI-CENTER"
              en="partner hospitals across Taiwan"
              delayMs={200}
            />
            <NextRow
              mono="MOLECULAR"
              en="IDH · 1p19q · MGMT integration"
              delayMs={500}
            />
            <NextRow
              mono="REGISTRY"
              en="Asian neuro-oncology collaboration"
              delayMs={800}
            />
          </div>
          <div className="tk-card__concl tk-card__concl--big">
            <em>Put Taiwan on the international neuro-oncology map.</em>
          </div>
        </ActiveCard>
      </div>
    </div>
  );
}

/* ── Step 5 — quiet thank you ── */

function StepThanks() {
  return (
    <div className="tk-scene tk-scene--thanks">
      <div className="tk-thanks">
        <div className="tk-thanks__hero">
          <em>Thank you.</em>
        </div>
        <hr className="rule tk-thanks__rule" />
        <div className="tk-thanks__sub">
          I'm happy to take questions.
        </div>
      </div>
      <div className="tk-thanks__foot">
        <div className="tk-thanks__author">Kuan-Hao Fu, MD</div>
        <div className="tk-thanks__aff tk-mono">
          Department of Neurosurgery · Chang Gung Memorial Hospital, Keelung
        </div>
        <div className="tk-thanks__attr tk-mono">ASNO 2026 · ORAL · TAIWAN</div>
      </div>
    </div>
  );
}

/* ── card helpers ── */

function PlaceholderCard({ num, mono }: { num: string; mono: string }) {
  return (
    <div className="tk-card tk-card--placeholder card">
      <div className="tk-card__head">
        <span className="hero-num tk-card__num">{num}</span>
        <span className="tk-mono tk-card__mono">{mono}</span>
      </div>
      <hr className="rule tk-card__rule" />
      <div className="tk-card__body tk-card__body--empty">
        <span className="tk-mono tk-card__pending">·  ·  ·</span>
      </div>
    </div>
  );
}

function DimCard({ num, mono }: { num: string; mono: string }) {
  return (
    <div className="tk-card tk-card--dim card">
      <div className="tk-card__head">
        <span className="hero-num tk-card__num">{num}</span>
        <span className="tk-mono tk-card__mono">{mono}</span>
      </div>
      <hr className="rule tk-card__rule" />
      <div className="tk-card__body tk-card__body--empty">
        <span className="tk-mono tk-card__pending">·  ·  ·</span>
      </div>
    </div>
  );
}

function DoneCard({ num, mono }: { num: string; mono: string }) {
  return (
    <div className="tk-card tk-card--done card">
      <div className="tk-card__head">
        <span className="hero-num tk-card__num">{num}</span>
        <span className="tk-mono tk-card__mono">{mono}</span>
        <span className="tk-mono tk-card__check">✓</span>
      </div>
      <hr className="rule tk-card__rule" />
      <div className="tk-card__body tk-card__body--empty">
        <span className="tk-mono tk-card__done-text">covered</span>
      </div>
    </div>
  );
}

function ActiveCard({
  num,
  mono,
  children,
}: {
  num: string;
  mono: string;
  children: React.ReactNode;
}) {
  return (
    <div className="tk-card tk-card--active card">
      <div className="tk-card__head">
        <span className="hero-num tk-card__num">{num}</span>
        <span className="tk-mono tk-card__mono">{mono}</span>
      </div>
      <hr className="rule tk-card__rule" />
      <div className="tk-card__body">{children}</div>
    </div>
  );
}

function DotPattern({ matched }: { matched: boolean }) {
  // small visual: two rows of 6 dots — both rows lined up = "aligned"
  const cols = 6;
  return (
    <svg
      className="tk-dot"
      viewBox={`0 0 ${cols * 18} 36`}
      width={cols * 18}
      height={36}
      aria-hidden="true"
    >
      {Array.from({ length: cols }).map((_, i) => (
        <g key={i}>
          <circle
            cx={9 + i * 18}
            cy={9}
            r={4}
            fill="var(--text)"
          />
          <circle
            cx={9 + i * 18}
            cy={27}
            r={4}
            fill={matched ? "var(--text)" : "var(--text-faint)"}
          />
        </g>
      ))}
    </svg>
  );
}

function DivergencePill({
  arrow,
  label,
}: {
  arrow: "up" | "down";
  label: string;
}) {
  return (
    <div className="tk-pill">
      <svg
        className="tk-pill__arrow"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        aria-hidden="true"
      >
        {arrow === "up" ? (
          <polyline
            points="3,11 8,4 13,11"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
          />
        ) : (
          <polyline
            points="3,5 8,12 13,5"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
          />
        )}
      </svg>
      <span className="tk-mono tk-pill__label">{label}</span>
    </div>
  );
}

function NextRow({
  mono,
  en,
  delayMs,
}: {
  mono: string;
  en: string;
  delayMs: number;
}) {
  return (
    <div className="tk-nx" style={{ animationDelay: `${delayMs}ms` }}>
      <span className="tk-mono tk-nx__mono">{mono}</span>
      <span className="tk-nx__sep">·</span>
      <span className="tk-nx__en">{en}</span>
    </div>
  );
}
