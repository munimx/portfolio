import { gsap } from "gsap";

/**
 * Boot sequence: a survey instrument calibrating. Animates a 0→100 counter and
 * a set of status lines, then lifts away. Resolves when the exit completes so
 * the terrain can ink in and the hero can play.
 */
export function runPreloader(reduced: boolean): Promise<void> {
  const el = document.getElementById("preloader");
  const counterEl = el?.querySelector<HTMLElement>("[data-preload-count]");
  const barEl = el?.querySelector<HTMLElement>("[data-preload-bar]");
  const statusEl = el?.querySelector<HTMLElement>("[data-preload-status]");

  if (!el || !counterEl || !barEl) return Promise.resolve();

  const statuses = [
    "INITIALISING SURVEY",
    "SAMPLING ELEVATION FIELD",
    "TRACING CONTOUR ISOLINES",
    "CALIBRATING INSTRUMENTS",
    "TERRAIN LOCKED",
  ];

  if (reduced) {
    counterEl.textContent = "100";
    barEl.style.transform = "scaleX(1)";
    el.remove();
    document.documentElement.classList.remove("is-loading");
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.classList.remove("is-loading");
        resolve();
      },
    });

    tl.to(counter, {
      v: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(counter.v);
        counterEl.textContent = String(v).padStart(3, "0");
        barEl.style.transform = `scaleX(${counter.v / 100})`;
        const idx = Math.min(statuses.length - 1, Math.floor((v / 100) * statuses.length));
        if (statusEl && statusEl.textContent !== statuses[idx]) statusEl.textContent = statuses[idx];
      },
    });

    tl.to(el.querySelectorAll("[data-preload-fade]"), {
      opacity: 0,
      y: -16,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.in",
    });

    tl.to(
      el,
      {
        yPercent: -100,
        duration: 0.9,
        ease: "expo.inOut",
      },
      "-=0.1"
    );

    tl.set(el, { display: "none" });
  });
}
