import type { TerrainScene } from "../webgl/TerrainScene";

/**
 * Slowly cycles the accent hue through a luminous palette (green → cyan →
 * azure → violet → …) in a continuous loop. Drives both the WebGL terrain
 * (every frame, cheap uniform writes) and the CSS `--mint` family (throttled,
 * since custom-property writes trigger style recalc). The warm `--accent`
 * signal stays constant as a fixed counterpoint.
 */
const STOPS: Array<[number, number, number]> = [
  [95, 230, 196], // mint
  [78, 206, 224], // cyan
  [106, 150, 255], // azure
  [176, 140, 255], // violet
];

const SECONDS_PER_STOP = 9; // full loop ≈ 36s

const smooth = (t: number) => t * t * (3 - 2 * t);

export function initColorCycle(terrain: TerrainScene, reduced: boolean) {
  const root = document.documentElement.style;

  const apply = (r: number, g: number, b: number) => {
    root.setProperty("--mint", `rgb(${r} ${g} ${b})`);
    root.setProperty(
      "--mint-bright",
      `rgb(${Math.min(255, r + 55)} ${Math.min(255, g + 55)} ${Math.min(255, b + 55)})`
    );
    root.setProperty(
      "--mint-dim",
      `rgb(${Math.round(r * 0.5)} ${Math.round(g * 0.5)} ${Math.round(b * 0.52)})`
    );
  };

  // Reduced motion: pick the base colour and hold it.
  if (reduced) {
    const [r, g, b] = STOPS[0];
    apply(r, g, b);
    terrain.setThemeRGB(r, g, b);
    return;
  }

  const total = STOPS.length * SECONDS_PER_STOP;
  let frame = 0;

  const tick = () => {
    const elapsed = (performance.now() / 1000) % total;
    const phase = elapsed / SECONDS_PER_STOP;
    const i = Math.floor(phase);
    const f = smooth(phase - i);
    const a = STOPS[i % STOPS.length];
    const c = STOPS[(i + 1) % STOPS.length];
    const r = Math.round(a[0] + (c[0] - a[0]) * f);
    const g = Math.round(a[1] + (c[1] - a[1]) * f);
    const b = Math.round(a[2] + (c[2] - a[2]) * f);

    terrain.setThemeRGB(r, g, b);
    if (frame % 5 === 0) apply(r, g, b); // ~12fps CSS updates
    frame++;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
