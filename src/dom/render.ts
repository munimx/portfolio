import {
  profile,
  stats,
  projects,
  about,
  experience,
  skills,
  contactRows,
  navSections,
  type Project,
} from "../data/content";
import { schematic } from "./schematics";

const ext = (href: string) => (href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "");

function sectionHeader(index: string, label: string, station: string) {
  return `
    <div class="section-head" data-reveal>
      <span class="section-head__index mono">${index}</span>
      <h2 class="section-head__title">${label}</h2>
      <span class="section-head__station mono">${station}</span>
    </div>`;
}

function hero() {
  const statCards = stats
    .map(
      (s, i) => `
      <div class="stat" data-reveal style="--d:${i}">
        <span class="stat__value">${s.value}</span>
        <span class="stat__label mono">${s.label}</span>
        <span class="stat__detail">${s.detail}</span>
      </div>`
    )
    .join("");

  return `
  <section id="hero" class="hero section" data-section="hero">
    <div class="hero__inner">
      <div class="hero__eyebrow mono" data-reveal>
        <span class="dot"></span> ${profile.title} · ${profile.shortLocation}
      </div>
      <h1 class="hero__title" data-hero-title>
        <span class="line"><span>Munim</span></span>
        <span class="line"><span>Ahmad</span></span>
      </h1>
      <p class="hero__tagline" data-reveal>
        Building systems that <em>reason</em>, <em>remember</em>, and <em>respond.</em>
      </p>
      <p class="hero__lead" data-reveal>${profile.lead}</p>
      <div class="hero__actions" data-reveal>
        <a href="#work" class="btn btn--primary" data-magnetic>
          <span>View Work</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <a href="#contact" class="btn btn--ghost" data-magnetic><span>Get in touch</span></a>
      </div>
      <div class="hero__stats">${statCards}</div>
    </div>
    <a href="#work" class="scroll-cue mono" aria-label="Scroll to explore">
      <span>Scroll to explore</span>
      <span class="scroll-cue__line"><span></span></span>
    </a>
  </section>`;
}

function projectArticle(p: Project) {
  const outcomes = p.outcomes.map((o) => `<li>${o}</li>`).join("");
  const stack = p.stack.map((s) => `<li class="tag mono">${s}</li>`).join("");
  const links = p.links
    .map(
      (l) => `
      <a class="project__link mono" href="${l.href}"${ext(l.href)} data-magnetic>
        ${l.label}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
      </a>`
    )
    .join("");
  const flag = p.flagship ? `<span class="project__flag mono">★ Flagship</span>` : "";

  return `
  <article class="project${p.flagship ? " project--flagship" : ""}" id="project-${p.id}" data-project="${p.id}">
    <header class="project__head" data-reveal>
      <div class="project__meta mono">
        <span class="project__num">${p.index}</span>
        <span class="project__kicker">${p.kicker}</span>
        ${flag}
      </div>
      <h3 class="project__title">${p.title}</h3>
      <p class="project__subtitle">${p.subtitle}</p>
      <div class="project__coords mono">
        <span>◎ ${p.coord}</span><span>ELEV ${p.elevation}</span>
      </div>
    </header>

    <div class="project__visual" data-reveal data-schematic="${p.id}">
      ${schematic(p.schematic, p.id)}
    </div>

    <div class="project__body">
      <div class="project__block" data-reveal>
        <span class="block-label mono">Context</span>
        <p>${p.context}</p>
      </div>
      <div class="project__block" data-reveal>
        <span class="block-label mono">Approach</span>
        <p>${p.method}</p>
      </div>
      <div class="project__block" data-reveal>
        <span class="block-label mono">Outcomes</span>
        <ul class="project__outcomes">${outcomes}</ul>
      </div>
      <ul class="project__stack" data-reveal>${stack}</ul>
      ${links ? `<div class="project__links" data-reveal>${links}</div>` : ""}
    </div>
  </article>`;
}

function work() {
  return `
  <section id="work" class="work section" data-section="work">
    ${sectionHeader("02", "Selected Work", "SECTOR · BUILD")}
    <div class="work__list">
      ${projects.map(projectArticle).join("")}
    </div>
  </section>`;
}

function aboutSection() {
  const paras = about.paragraphs.map((p) => `<p data-reveal>${p}</p>`).join("");
  const facts = about.facts
    .map(
      (f) => `
      <div class="fact" data-reveal>
        <span class="fact__label mono">${f.label}</span>
        <span class="fact__value">${f.value}</span>
      </div>`
    )
    .join("");

  return `
  <section id="about" class="about section" data-section="about">
    ${sectionHeader("03", "About", "SURVEY · OPERATOR")}
    <div class="about__grid">
      <div class="about__portrait" data-reveal>
        <div class="portrait">
          <img src="headshot.jpg" alt="Munim Ahmad" width="772" height="1200" loading="lazy" decoding="async" />
          <div class="portrait__contours" aria-hidden="true"></div>
          <span class="portrait__tag mono">FIG.01 · OPERATOR</span>
        </div>
      </div>
      <div class="about__copy">
        ${paras}
        <div class="about__facts">${facts}</div>
      </div>
    </div>
  </section>`;
}

function legend() {
  const groups = skills
    .map(
      (g, i) => `
      <div class="legend__group" data-reveal style="--d:${i}">
        <h3 class="legend__category mono">
          <span class="legend__swatch" aria-hidden="true"></span>${g.category}
        </h3>
        <ul class="legend__skills">
          ${g.skills.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </div>`
    )
    .join("");

  return `
  <section id="legend" class="legend section" data-section="legend" aria-label="Capabilities legend">
    ${sectionHeader("·", "The Legend", "CAPABILITIES")}
    <div class="legend__grid">${groups}</div>
  </section>`;
}

function experienceSection() {
  const items = experience
    .map((e, i) => {
      const org = e.orgUrl
        ? `<a href="${e.orgUrl}" target="_blank" rel="noopener noreferrer">${e.org}</a>`
        : e.org;
      const bullets = e.bullets
        ? `<ul class="xp__bullets">${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`
        : "";
      return `
      <article class="xp" data-reveal style="--d:${i}">
        <div class="xp__marker" aria-hidden="true"><span></span></div>
        <div class="xp__date mono">${e.date}</div>
        <div class="xp__body">
          <h3 class="xp__role">${e.role} <span class="xp__org">· ${org}</span></h3>
          ${e.location ? `<span class="xp__loc mono">${e.location}</span>` : ""}
          <p class="xp__desc">${e.description}</p>
          ${bullets}
        </div>
      </article>`;
    })
    .join("");

  return `
  <section id="experience" class="experience section" data-section="experience">
    ${sectionHeader("04", "Traverse", "ROUTE · 2022 — 2026")}
    <div class="experience__route">${items}</div>
  </section>`;
}

function contact() {
  const rows = contactRows
    .map(
      (r) => `
      <a class="crow" href="${r.href}"${ext(r.href)} data-reveal ${
        r.copy ? `data-copy="${r.value}"` : ""
      } data-magnetic>
        <span class="crow__id mono">${r.id}</span>
        <span class="crow__label mono">${r.label}</span>
        <span class="crow__value">${r.value}</span>
        <span class="crow__action mono">${r.copy ? "Copy" : "Open"}</span>
      </a>`
    )
    .join("");

  return `
  <section id="contact" class="contact section" data-section="contact">
    ${sectionHeader("05", "Contact", "TRANSMIT")}
    <div class="contact__inner">
      <h2 class="contact__heading" data-reveal>Let's build something <em>real.</em></h2>
      <p class="contact__copy" data-reveal>
        Formal correspondence regarding AI-engineering opportunities, infrastructure collaboration,
        or product research. Typical response window: &lt; 24h.
      </p>
      <div class="contact__rows">${rows}</div>
      <div class="contact__resume" data-reveal>
        <a class="btn btn--primary" href="${profile.resume}" target="_blank" rel="noopener noreferrer" data-magnetic>
          <span>Download CV / Résumé</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14"/></svg>
        </a>
      </div>
    </div>
  </section>`;
}

function footer() {
  return `
  <footer class="footer">
    <span class="mono">${profile.name} · ${profile.location} · 2026</span>
    <span class="mono footer__status"><span class="dot"></span> ${profile.status}</span>
  </footer>`;
}

export function renderApp(root: HTMLElement) {
  root.innerHTML = [
    hero(),
    work(),
    aboutSection(),
    legend(),
    experienceSection(),
    contact(),
    footer(),
  ].join("\n");
}

export { navSections };
