import type { HistologySlice } from "../../data/study-data";
import "./Pie.css";

/* Editorial pie palette — designed for the monochrome-print theme
   (cream surface, ink-blue accent).
   - Top 4 slices each get a distinct strong color.
   - Smaller slices step down through warm grays so they recede but
     remain legible.
   Themes can override these via tokens (--chart-1 … --chart-16). */
const PALETTE: string[] = [
  "var(--chart-1, #1a3a8c)",   // top-4 / 1 — ink-blue (theme accent)
  "var(--chart-2, #b8472a)",   // top-4 / 2 — terracotta
  "var(--chart-3, #b8893a)",   // top-4 / 3 — warm ochre
  "var(--chart-4, #6e1f30)",   // top-4 / 4 — deep crimson
  "var(--chart-5, #4a5a6c)",   // minor — slate
  "var(--chart-6, #6c7a86)",   // minor — mid slate
  "var(--chart-7, #8a7a6c)",   // minor — taupe
  "var(--chart-8, #a89580)",   // minor — sand
  "var(--chart-9, #7a8270)",   // minor — sage
  "var(--chart-10, #97a08c)",  // minor — pale sage
  "var(--chart-11, #aea098)",  // minor — warm gray
  "var(--chart-12, #b9aaa1)",  // minor — pale taupe
  "var(--chart-13, #c4baae)",  // minor — pale sand
  "var(--chart-14, #cdc4ba)",  // minor — pale stone
  "var(--chart-15, #d4cbc1)",  // minor — paler stone
  "var(--chart-16, #d8d2c8)",  // minor — palest
];

interface Props {
  data: HistologySlice[];
  size?: number;            // outer SVG size (square)
  innerRadius?: number;     // 0 = pie, >0 = donut
  /** Slice ids to highlight in current step. Others dim. */
  highlight?: string[];
  /** Title shown top-left of the chart (e.g. "3,309 SURGERIES"). */
  title?: string;
  /** Render external labels for at most N slices (by data order). */
  externalLabelsTopN?: number;
  /** Minimum slice pct to draw a label for (avoids clutter on tiny slices). */
  minLabelPct?: number;
  /** Optional className for animation hooks. */
  className?: string;
}

type LabelPos = {
  id: string;
  label: string;
  pct: number;
  anchorX: number;          // where leader line touches pie perimeter
  anchorY: number;
  textX: number;            // final placed text position
  textY: number;
  side: "left" | "right";
  isActive: boolean;
};

export function Pie({
  data,
  size = 560,
  innerRadius = 0,
  highlight,
  title,
  externalLabelsTopN = Infinity,
  minLabelPct = 1.0,
  className = "",
}: Props) {
  // give labels horizontal padding outside the SVG square
  const padX = size * 0.34;
  const padY = size * 0.04;
  const W = size + padX * 2;
  const H = size + padY * 2;
  const cx = padX + size / 2;
  const cy = padY + size / 2;
  const outerR = (size / 2) * 0.74; // leave room for label tick area
  const tickR = (size / 2) * 0.84;
  const labelR = (size / 2) * 1.12; // outside the SVG square padding zone

  const total = data.reduce((sum, d) => sum + d.pct, 0);

  // build slice + label info
  let cursorDeg = -90;
  const slices = data.map((d, i) => {
    const sweep = (d.pct / total) * 360;
    const start = cursorDeg;
    const end = cursorDeg + sweep;
    cursorDeg = end;

    const startRad = (start * Math.PI) / 180;
    const endRad = (end * Math.PI) / 180;
    const midDeg = (start + end) / 2;
    const midRad = (midDeg * Math.PI) / 180;

    const x1 = cx + outerR * Math.cos(startRad);
    const y1 = cy + outerR * Math.sin(startRad);
    const x2 = cx + outerR * Math.cos(endRad);
    const y2 = cy + outerR * Math.sin(endRad);
    const largeArc = sweep > 180 ? 1 : 0;

    let pathD: string;
    if (innerRadius > 0) {
      const ix1 = cx + innerRadius * Math.cos(startRad);
      const iy1 = cy + innerRadius * Math.sin(startRad);
      const ix2 = cx + innerRadius * Math.cos(endRad);
      const iy2 = cy + innerRadius * Math.sin(endRad);
      pathD = `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1} Z`;
    } else {
      pathD = `M ${cx} ${cy} L ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    }

    const isActive = highlight === undefined ? true : highlight.includes(d.id);
    const showLabel = i < externalLabelsTopN && d.pct >= minLabelPct;

    const anchorX = cx + tickR * Math.cos(midRad);
    const anchorY = cy + tickR * Math.sin(midRad);
    const targetX = cx + labelR * Math.cos(midRad);
    const targetY = cy + labelR * Math.sin(midRad);
    const side: "left" | "right" = targetX > cx ? "right" : "left";

    return {
      slice: d,
      index: i,
      pathD,
      color: PALETTE[i % PALETTE.length],
      isActive,
      showLabel,
      anchorX,
      anchorY,
      targetX,
      targetY,
      side,
      sweep,
    };
  });

  // collision avoidance for labels
  const labels: LabelPos[] = slices
    .filter((s) => s.showLabel)
    .map((s) => ({
      id: s.slice.id,
      label: `${s.slice.shortLabel} · ${s.slice.pct}%`,
      pct: s.slice.pct,
      anchorX: s.anchorX,
      anchorY: s.anchorY,
      textX: s.targetX,
      textY: s.targetY,
      side: s.side,
      isActive: s.isActive,
    }));

  // separate sides, sort by Y, ensure min vertical gap
  const minGap = size * 0.035;
  for (const side of ["left", "right"] as const) {
    const group = labels.filter((l) => l.side === side).sort((a, b) => a.textY - b.textY);
    for (let i = 1; i < group.length; i++) {
      const prev = group[i - 1];
      const cur = group[i];
      if (cur.textY - prev.textY < minGap) {
        cur.textY = prev.textY + minGap;
      }
    }
    // clamp to viewBox
    const minY = padY + size * 0.05;
    const maxY = padY + size * 0.95;
    for (const l of group) {
      if (l.textY < minY) l.textY = minY;
      if (l.textY > maxY) l.textY = maxY;
    }
  }

  const labelFontSize = size * 0.026;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width={W}
      height={H}
      className={`pie ${className}`.trim()}
      aria-hidden="true"
    >
      {/* title — top-left (inside the padX margin) */}
      {title && (
        <text
          x={padX * 0.4}
          y={padY + size * 0.05}
          fontFamily="var(--font-mono)"
          fontSize={size * 0.034}
          fill="var(--text)"
          letterSpacing="0.12em"
          fontWeight={500}
        >
          {title}
        </text>
      )}

      {/* slices */}
      {slices.map((s) => (
        <path
          key={s.slice.id}
          d={s.pathD}
          fill={s.color}
          stroke="var(--surface)"
          strokeWidth={1.5}
          opacity={s.isActive ? 1 : 0.35}
          className={`pie__slice ${s.isActive ? "pie__slice--active" : "pie__slice--dim"}`}
          style={{ "--slice-i": s.index } as React.CSSProperties}
        />
      ))}

      {/* labels with leader lines */}
      {labels.map((l) => {
        // bend leader line: anchor -> kink -> textX
        const kinkX = l.side === "right" ? l.textX - size * 0.04 : l.textX + size * 0.04;
        const labelTextX = l.side === "right" ? l.textX : l.textX;
        return (
          <g
            key={`label-${l.id}`}
            className={`pie__label ${l.isActive ? "pie__label--active" : "pie__label--dim"}`}
          >
            <polyline
              points={`${l.anchorX},${l.anchorY} ${kinkX},${l.textY} ${labelTextX},${l.textY}`}
              fill="none"
              stroke="var(--text-mute)"
              strokeWidth={0.8}
            />
            <text
              x={l.side === "right" ? l.textX + 4 : l.textX - 4}
              y={l.textY}
              textAnchor={l.side === "right" ? "start" : "end"}
              dominantBaseline="middle"
              fontFamily="var(--font-mono)"
              fontSize={labelFontSize}
              fill={l.isActive ? "var(--text)" : "var(--text-mute)"}
              letterSpacing="0.04em"
            >
              {l.label}
            </text>
          </g>
        );
      })}

      {/* center label (donut only) */}
      {innerRadius > 0 && title && (
        <g>
          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="var(--font-display-en)"
            fontStyle="italic"
            fontSize={size * 0.09}
            fill="var(--text)"
          >
            {title}
          </text>
        </g>
      )}
    </svg>
  );
}
