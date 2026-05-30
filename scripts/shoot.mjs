import { chromium } from "playwright";

const URL = "http://localhost:4173/Lean-AI/";
const VIEWPORTS = [
  { name: "390", width: 390, height: 844 },
  { name: "768", width: 768, height: 1024 },
  { name: "1280", width: 1280, height: 900 },
  { name: "1920", width: 1920, height: 1080 },
];

const browser = await chromium.launch();
const errors = [];

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${vp.name}] console.error: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${vp.name}] pageerror: ${e.message}`));

  await page.goto(URL, { waitUntil: "networkidle" });
  // Scroll through the page so every whileInView section triggers its entrance.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.7;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });
  await page.waitForTimeout(800); // let entrance animations settle
  await page.screenshot({ path: `/tmp/shots/full-${vp.name}.png`, fullPage: true });
  // also a viewport-only hero shot for the wide sizes
  if (vp.name === "1280" || vp.name === "390") {
    await page.screenshot({ path: `/tmp/shots/hero-${vp.name}.png`, fullPage: false });
  }
  await ctx.close();
}

await browser.close();

if (errors.length) {
  console.log("CONSOLE/PAGE ERRORS:\n" + errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("No console or page errors at any breakpoint.");
}
