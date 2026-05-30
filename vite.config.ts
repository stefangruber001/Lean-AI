import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project at https://<user>.github.io/Lean-AI/
// so assets must be referenced from that base path.
export default defineConfig({
  base: "/Lean-AI/",
  plugins: [react()],
});
