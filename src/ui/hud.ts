import { navSections, profile } from "../data/content";

export interface Hud {
  setActive(id: string): void;
  setProgress(p: number): void;
  railLinks: HTMLAnchorElement[];
}

export function buildHud(): Hud {
  // ---- top bar ----------------------------------------------------------
  const topbar = document.createElement("header");
  topbar.className = "topbar";
  topbar.innerHTML = `
    <a class="brand" href="#hero" data-magnetic aria-label="Munim Ahmad — home">
      <span class="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32"><path d="M2 22c5-1 7-9 11-9s5 8 9 7 6-9 8-9" /><path d="M2 27c5-1 7-6 11-6s5 5 9 4 6-6 8-6" /></svg>
      </span>
      <span class="brand__txt mono">MA</span>
    </a>
    <span class="topbar__center mono">${profile.title}</span>
    <a class="btn btn--nav" href="#contact" data-magnetic><span>Get in Touch</span></a>`;

  // ---- left station rail ------------------------------------------------
  const rail = document.createElement("nav");
  rail.className = "rail";
  rail.setAttribute("aria-label", "Section navigation");
  rail.innerHTML = `
    <ul class="rail__list">
      ${navSections
        .map(
          (s) => `
        <li>
          <a class="rail__item" href="#${s.id}" data-nav="${s.id}">
            <span class="rail__index mono">${s.index}</span>
            <span class="rail__label mono">${s.label}</span>
            <span class="rail__tick" aria-hidden="true"></span>
          </a>
        </li>`
        )
        .join("")}
    </ul>`;

  // ---- bottom telemetry readout ----------------------------------------
  const readout = document.createElement("div");
  readout.className = "readout";
  readout.setAttribute("aria-hidden", "true");
  readout.innerHTML = `
    <div class="readout__cell">
      <span class="readout__k mono">POS</span>
      <span class="readout__v mono" data-pos>31.5204° N · 74.3587° E</span>
    </div>
    <div class="readout__cell readout__cell--elev">
      <span class="readout__k mono">ELEV</span>
      <span class="readout__v mono" data-elev>0480 m</span>
    </div>
    <div class="readout__cell readout__cell--sector">
      <span class="readout__k mono">SECTOR</span>
      <span class="readout__v mono" data-sector>ABSTRACT</span>
    </div>
    <div class="readout__gauge">
      <span class="readout__pct mono" data-pct>00%</span>
      <span class="readout__bar"><span class="readout__fill" data-fill></span></span>
    </div>`;

  document.body.append(topbar, rail, readout);

  const railLinks = Array.from(rail.querySelectorAll<HTMLAnchorElement>(".rail__item"));
  const posEl = readout.querySelector<HTMLElement>("[data-pos]")!;
  const elevEl = readout.querySelector<HTMLElement>("[data-elev]")!;
  const sectorEl = readout.querySelector<HTMLElement>("[data-sector]")!;
  const pctEl = readout.querySelector<HTMLElement>("[data-pct]")!;
  const fillEl = readout.querySelector<HTMLElement>("[data-fill]")!;

  const labelById = new Map(navSections.map((s) => [s.id, s.label]));
  let activeId = "hero";

  return {
    railLinks,
    setActive(id: string) {
      if (id === activeId) return;
      activeId = id;
      railLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.nav === id));
      const label = labelById.get(id);
      if (label) sectorEl.textContent = label.toUpperCase();
    },
    setProgress(p: number) {
      const lat = (31.5204 + p * 0.2104).toFixed(4);
      const lon = (74.3587 + p * 0.1631).toFixed(4);
      posEl.textContent = `${lat}° N · ${lon}° E`;
      const elev = Math.round(420 + (0.5 - 0.5 * Math.cos(p * Math.PI * 2)) * 2160);
      elevEl.textContent = `${String(elev).padStart(4, "0")} m`;
      pctEl.textContent = `${String(Math.round(p * 100)).padStart(2, "0")}%`;
      fillEl.style.transform = `scaleX(${p})`;
    },
  };
}
