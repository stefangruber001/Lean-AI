/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core
        ink: "#0E1116", // near-black: primary text + dark band
        paper: "#FAFAF7", // warm off-white page background
        // Single accent — deep teal-blue, used sparingly
        accent: {
          DEFAULT: "#0F4C5C",
          600: "#0D4250",
          700: "#0A3540",
          50: "#EAF1F3",
        },
        // 3-step muted gray scale for secondary text
        gray: {
          1: "#3A3F46", // strong secondary
          2: "#6B7178", // muted
          3: "#9AA0A6", // faint
        },
        hairline: "#E5E5E0", // 1px low-contrast borders
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        content: "1200px",
      },
      fontSize: {
        // Confident responsive display sizing
        hero: ["clamp(2.6rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        display: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        header: "0 1px 0 0 #E5E5E0, 0 8px 24px -16px rgba(14,17,22,0.18)",
        card: "0 1px 2px rgba(14,17,22,0.04), 0 12px 32px -20px rgba(14,17,22,0.18)",
        cardHover: "0 2px 4px rgba(14,17,22,0.06), 0 24px 48px -24px rgba(14,17,22,0.28)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
