import { motion, useReducedMotion } from "framer-motion";

// A quiet, engineered abstract: a precision grid with connected nodes that
// breathe slowly. Deliberately understated — signal, not decoration.
const NODES: { x: number; y: number; r: number }[] = [
  { x: 80, y: 90, r: 3 },
  { x: 220, y: 60, r: 2.5 },
  { x: 360, y: 130, r: 4 },
  { x: 150, y: 220, r: 2.5 },
  { x: 300, y: 250, r: 3 },
  { x: 430, y: 210, r: 2.5 },
  { x: 240, y: 360, r: 3.5 },
  { x: 400, y: 350, r: 2.5 },
  { x: 110, y: 340, r: 2.5 },
];

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [4, 5],
  [2, 5],
  [3, 6],
  [4, 6],
  [6, 7],
  [5, 7],
  [3, 8],
  [6, 8],
];

export function HeroBackground() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 500 440"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="#0E1116" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
        <radialGradient id="glow" cx="60%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#0F4C5C" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#0F4C5C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="500" height="440" fill="url(#grid)" />
      <rect width="500" height="440" fill="url(#glow)" />

      {/* connecting lines */}
      {LINKS.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="#0F4C5C"
          strokeOpacity="0.28"
          strokeWidth="1"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={reduce ? undefined : { pathLength: 1, opacity: 0.28 }}
          transition={{ duration: 1.2, delay: 0.2 + i * 0.06, ease: "easeOut" }}
        />
      ))}

      {/* nodes */}
      {NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#0F4C5C"
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={
            reduce
              ? undefined
              : { scale: [0, 1, 1], opacity: [0, 1, 0.85] }
          }
          transition={{ duration: 0.9, delay: 0.3 + i * 0.08, ease: "easeOut" }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}

      {/* one slow, breathing emphasis ring */}
      {!reduce && (
        <motion.circle
          cx={360}
          cy={130}
          r={4}
          fill="none"
          stroke="#0F4C5C"
          strokeWidth="1"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 3.5], opacity: [0.5, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeOut", delay: 1.4 }}
          style={{ transformOrigin: "360px 130px" }}
        />
      )}
    </svg>
  );
}

// Full-bleed, light-on-dark version for the dark hero band.
export function HeroBackgroundDark() {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 1440 900"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <pattern id="dgrid" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M56 0H0V56" stroke="#FAFAF7" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
        <radialGradient id="dglow" cx="78%" cy="22%" r="60%">
          <stop offset="0%" stopColor="#0F4C5C" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#0F4C5C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0F4C5C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#dgrid)" />
      <rect width="1440" height="900" fill="url(#dglow)" />

      {/* node-grid weighted to the upper-right so type stays clear on the left */}
      {(() => {
        const N = [
          { x: 980, y: 140 }, { x: 1140, y: 90 }, { x: 1290, y: 200 },
          { x: 1060, y: 300 }, { x: 1230, y: 360 }, { x: 1360, y: 280 },
          { x: 900, y: 260 }, { x: 1150, y: 470 }, { x: 1330, y: 520 },
          { x: 1020, y: 500 },
        ];
        const L: [number, number][] = [
          [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5],
          [0, 6], [3, 6], [3, 9], [4, 7], [7, 8], [7, 9], [4, 8],
        ];
        return (
          <>
            {L.map(([a, b], i) => (
              <motion.line
                key={`l${i}`}
                x1={N[a].x} y1={N[a].y} x2={N[b].x} y2={N[b].y}
                stroke="#3E8FA3" strokeOpacity="0.4" strokeWidth="1"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                animate={reduce ? undefined : { pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.3, delay: 0.3 + i * 0.07, ease: "easeOut" }}
              />
            ))}
            {N.map((n, i) => (
              <motion.circle
                key={`n${i}`}
                cx={n.x} cy={n.y} r={i % 3 === 0 ? 4 : 2.6}
                fill="#5BB0C4"
                initial={reduce ? false : { scale: 0, opacity: 0 }}
                animate={reduce ? undefined : { scale: 1, opacity: 0.9 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: "easeOut" }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
              />
            ))}
            {!reduce && (
              <motion.circle
                cx={1140} cy={90} r={4} fill="none" stroke="#5BB0C4" strokeWidth="1"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: [1, 4], opacity: [0.6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut", delay: 1.6 }}
                style={{ transformOrigin: "1140px 90px" }}
              />
            )}
          </>
        );
      })()}
    </svg>
  );
}
