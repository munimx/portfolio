import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TerrainScene } from "../webgl/TerrainScene";
import type { Hud } from "./hud";
import { navSections } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

interface Opts {
  terrain: TerrainScene;
  hud: Hud;
  reduced: boolean;
}

export interface Intro {
  playIntro(): void;
}

export function initAnimations({ terrain, hud, reduced }: Opts): Intro {
  // Page-wide progress → terrain camera travel + telemetry readout.
  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      terrain.setScroll(self.progress);
      hud.setProgress(self.progress);
    },
  });

  // Active-section tracking for the rail (nav sections only).
  navSections.forEach((s) => {
    const el = document.getElementById(s.id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: "top 55%",
      end: "bottom 55%",
      onEnter: () => hud.setActive(s.id),
      onEnterBack: () => hud.setActive(s.id),
    });
  });

  if (reduced) {
    gsap.set("[data-reveal]", { opacity: 1, y: 0 });
    gsap.set(".hero__title .line span", { yPercent: 0 });
    gsap.set(".arch-edge, .arch-node, .arch-elabel", { opacity: 1 });
    gsap.set(".arch-node", { y: 0 });
    hud.setProgress(0);
    return { playIntro: () => {} };
  }

  // Hero reveals are driven by the intro timeline, not the scroll batch.
  const heroReveals = gsap.utils.toArray<HTMLElement>("#hero [data-reveal]");
  heroReveals.forEach((el) => el.setAttribute("data-hero", ""));

  gsap.set("[data-reveal]", { opacity: 0, y: 22 });
  gsap.set(".hero__title .line span", { yPercent: 110 });

  // Scroll reveals — one trigger per element so deep-links and fast/instant
  // jumps still resolve every element to its visible state (batch drops
  // callbacks on large jumps). A short position-based delay keeps grouped
  // items feeling staggered without a shared timeline.
  gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-hero])").forEach((el) => {
    const d = Number(el.style.getPropertyValue("--d")) || 0;
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: Math.min(d, 6) * 0.06,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });

  setupSchematics();
  setupMagnetic();
  setupParallax();

  // Hero intro (paused; played after the preloader lifts).
  const intro = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
  intro
    .to(".hero__title .line span", { yPercent: 0, duration: 1.15, stagger: 0.12 })
    .to(
      heroReveals,
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" },
      "-=0.75"
    );

  return { playIntro: () => intro.play() };
}

function setupSchematics() {
  gsap.utils.toArray<SVGElement>(".schematic").forEach((svg) => {
    const edges = svg.querySelectorAll(".arch-edge");
    const nodes = svg.querySelectorAll(".arch-node");
    const elabels = svg.querySelectorAll(".arch-elabel");

    gsap.set(edges, { opacity: 0 });
    gsap.set(nodes, { opacity: 0, y: 8 });
    gsap.set(elabels, { opacity: 0 });

    ScrollTrigger.create({
      trigger: svg,
      start: "top 82%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(edges, { opacity: 1, duration: 0.6, stagger: 0.05, ease: "power2.out" })
          .to(nodes, { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: "power3.out" }, "-=0.4")
          .to(elabels, { opacity: 1, duration: 0.4, stagger: 0.04 }, "-=0.35");
      },
    });
  });
}

function setupMagnetic() {
  const items = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
  items.forEach((el) => {
    const strength = el.classList.contains("btn") ? 0.4 : 0.28;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: "power3.out" });
    });
    el.addEventListener("pointerleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    });
  });
}

function setupParallax() {
  const portrait = document.querySelector(".portrait img");
  if (portrait) {
    gsap.fromTo(
      portrait,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  }

  gsap.utils.toArray<HTMLElement>(".section-head__index").forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: 30 },
      {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: el.closest(".section"), start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });
}
