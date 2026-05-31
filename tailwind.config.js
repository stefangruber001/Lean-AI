/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette (2026 award-winning direction: tinted neutrals
        // + moody dark with warm highlights — deliberately not pure white).
        ink: "#211A14", // warm espresso near-black: primary text + dark band
        "ink-2": "#2E261E", // slightly lifted espresso for layered dark panels
        paper: "#F4EFE7", // warm bone / cream page background (not white)
        "paper-2": "#EDE6DA", // a touch deeper for alternating sections
        // Single accent — burnt sienna / terracotta, used sparingly
        accent: {
          DEFAULT: "#B4541E", // burnt sienna
          600: "#9E4818",
          700: "#823A13",
          50: "#F2E3D6", // soft clay tint for fills on light
        },
        // 3-step warm taupe scale for secondary text
        gray: {
          1: "#4A4036", // strong secondary (warm)
          2: "#766B5D", // muted taupe
          3: "#A39684", // faint stone
        },
        hairline: "#DDD3C4", // 1px low-contrast warm border
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
        header: "0 1px 0 0 #DDD3C4, 0 8px 24px -16px rgba(33,26,20,0.16)",
        card: "0 1px 2px rgba(33,26,20,0.04), 0 12px 32px -20px rgba(33,26,20,0.16)",
        cardHover: "0 2px 4px rgba(33,26,20,0.06), 0 24px 48px -24px rgba(33,26,20,0.26)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
