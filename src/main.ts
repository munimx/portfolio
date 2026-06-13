import "./styles/main.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { renderApp } from "./dom/render";
import { TerrainScene } from "./webgl/TerrainScene";
import { initCursor } from "./ui/cursor";
import { buildHud } from "./ui/hud";
import { runPreloader } from "./ui/preloader";
import { initScroll, initAnchors } from "./ui/scroll";
import { initAnimations } from "./ui/animations";
import { initClipboard } from "./ui/clipboard";
import { initColorCycle } from "./ui/colorCycle";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1. Content
const root = document.getElementById("content") as HTMLElement;
renderApp(root);

// 2. Chrome + cursor
const hud = buildHud();
initCursor();
initClipboard();

// 3. Topographic terrain
const canvas = document.getElementById("gl") as HTMLCanvasElement;
const terrain = new TerrainScene(canvas);
if (!terrain.supported) document.body.classList.add("no-webgl");
terrain.start();

// Loop the accent hue through the palette (terrain + UI in sync).
initColorCycle(terrain, reduced);

// 4. Smooth scroll + anchors
const lenis = initScroll(reduced);
initAnchors(lenis, reduced);

// 5. Choreography
const intro = initAnimations({ terrain, hud, reduced });

// Keep ScrollTrigger honest once fonts / images settle.
const refresh = () => ScrollTrigger.refresh();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
window.addEventListener("load", refresh);

// 6. Boot
runPreloader(reduced).then(() => {
  terrain.setReveal(1);
  intro.playIntro();
});
