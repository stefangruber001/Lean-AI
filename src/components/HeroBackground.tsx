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
