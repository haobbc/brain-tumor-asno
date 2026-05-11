import type { VolumeYear, ProcedureKey } from "../../data/study-data";
import { PROCEDURE_LABELS } from "../../data/study-data";
import "./StackedBar.css";

/* Editorial palette for procedure types — designed for monochrome-print
   (cream surface, ink-blue accent). Stable ordering from bottom up:
     small → medium (dominant, ink-blue) → large → transsphenoidal
     → skull base → biopsy
   Themes can override via tokens --proc-1 … --proc-6. */
const PROC_PALETTE: Record<ProcedureKey, string> = {
  resectionSmall:  "var(--proc-1, #b9aaa1)",   // pale taupe
  resectionMedium: "var(--proc-2, #1a3a8c)",   // ink-blue (theme accent, dominant)
  resectionLarge:  "var(--proc-3, #4a5a6c)",   // slate
  transsphenoidal: "var(--proc-4, #b8893a)",   // warm ochre
  skullBase:       "var(--proc-5, #6e1f30)",   // crimson
  biopsy:          "var(--proc-6, #8a7a6c)",   // taupe
};

// Stack order from bottom to top
const STACK_ORDER: ProcedureKey[] = [
  "resectionSmall",
  "resectionMedium",
  "resectionLarge",
  "transsphenoidal",
  "skullBase",
  "biopsy",
];

interface Props {
  data: VolumeYear[];
  width?: number;
  height?: number;
  /** Show value labels on top of each bar. */
  showTotals?: boolean;
  /** Optional className for animation hooks. */
  className?: string;
}

export function StackedBar({
  data,
  width = 920,
  height = 540,
  showTotals = true,
  className = "",
}: Props) {
  const padding = { top: 60, right: 30, bottom: 100, left: 70 };
  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;

  const maxTotal = Math.max(...data.map((d) => d.total)) * 1.08;
  const barWidth = plotW / data.length * 0.55;
  const colStep = plotW / data.length;

  // y-axis ticks: 0, 200, 400, 600, 800
  const yMaxRounded = Math.ceil(maxTotal / 200) * 200;
  const yTicks: number[] = [];
  for (let v = 0; v <= yMaxRounded; v += 200) yTicks.push(v);
  const yScale = (v: number) => padding.top + plotH - (v / yMaxRounded) * plotH;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={`stacked-bar ${className}`.trim()}
      aria-hidden="true"
    >
      {/* y-axis gridlines */}
      {yTicks.map((v) => (
        <g key={v}>
          <line
            x1={padding.left}
            y1={yScale(v)}
            x2={width - padding.right}
            y2={yScale(v)}
            stroke="var(--rule)"
            strokeWidth={v === 0 ? 1.2 : 0.6}
            strokeDasharray={v === 0 ? "" : "2 3"}
          />
          <text
            x={padding.left - 12}
            y={yScale(v)}
            textAnchor="end"
            dominantBaseline="middle"
            fontFamily="var(--font-mono)"
            fontSize={13}
            fill="var(--text-mute)"
          >
            {v}
          </text>
        </g>
      ))}

      {/* y-axis label */}
      <text
        x={padding.left - 50}
        y={padding.top + plotH / 2}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize={12}
        fill="var(--text-mute)"
        letterSpacing="0.18em"
        transform={`rotate(-90 ${padding.left - 50} ${padding.top + plotH / 2})`}
      >
        SURGERIES · COUNT
      </text>

      {/* bars */}
      {data.map((year, yi) => {
        const cx = padding.left + colStep * yi + colStep / 2;
        const xLeft = cx - barWidth / 2;
        let accY = padding.top + plotH; // start from baseline

        return (
          <g key={year.label} className="stacked-bar__col" style={{ "--col-i": yi } as React.CSSProperties}>
            {STACK_ORDER.map((procKey, si) => {
              const value = year.segments[procKey];
              const segH = (value / yMaxRounded) * plotH;
              const yTop = accY - segH;
              accY = yTop;
              return (
                <rect
                  key={procKey}
                  x={xLeft}
                  y={yTop}
                  width={barWidth}
                  height={segH}
                  fill={PROC_PALETTE[procKey]}
                  className="stacked-bar__seg"
                  style={{ "--seg-i": si } as React.CSSProperties}
                />
              );
            })}

            {/* x-axis year label */}
            <text
              x={cx}
              y={padding.top + plotH + 22}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={13}
              fill="var(--text)"
              letterSpacing="0.1em"
            >
              {year.label}
            </text>

            {/* total on top */}
            {showTotals && (
              <text
                x={cx}
                y={padding.top + plotH - (year.total / yMaxRounded) * plotH - 8}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize={14}
                fill="var(--text-2)"
                letterSpacing="0.04em"
                className="stacked-bar__total"
              >
                {year.total}
              </text>
            )}
          </g>
        );
      })}

      {/* legend */}
      <g transform={`translate(${padding.left} ${padding.top + plotH + 50})`}>
        {STACK_ORDER.map((procKey, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = col * (plotW / 3);
          const y = row * 18;
          return (
            <g key={procKey} transform={`translate(${x} ${y})`}>
              <rect width={12} height={12} fill={PROC_PALETTE[procKey]} />
              <text
                x={18}
                y={9}
                dominantBaseline="middle"
                fontFamily="var(--font-mono)"
                fontSize={11}
                fill="var(--text-2)"
                letterSpacing="0.06em"
              >
                {PROCEDURE_LABELS[procKey].mono}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
