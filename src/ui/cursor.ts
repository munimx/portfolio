/** Survey-reticle cursor: a precise dot + a smoothed crosshair ring that
 *  expands over interactive targets. Disabled on touch / coarse pointers. */
export function initCursor() {
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (!fine) return;

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  ring.innerHTML = `<span class="cursor-ring__cross"></span>`;
  document.body.append(ring, dot);
  document.body.classList.add("has-cursor");

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let rx = mx;
  let ry = my;
  let visible = false;

  window.addEventListener(
    "pointermove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      if (!visible) {
        visible = true;
        document.body.classList.add("cursor-visible");
      }
    },
    { passive: true }
  );

  window.addEventListener("pointerdown", () => ring.classList.add("is-down"));
  window.addEventListener("pointerup", () => ring.classList.remove("is-down"));
  document.addEventListener("mouseleave", () => {
    visible = false;
    document.body.classList.remove("cursor-visible");
  });

  const interactiveSel = "a, button, [data-magnetic], [data-copy], input, .crow";
  document.addEventListener("pointerover", (e) => {
    if ((e.target as HTMLElement).closest(interactiveSel)) ring.classList.add("is-active");
  });
  document.addEventListener("pointerout", (e) => {
    if ((e.target as HTMLElement).closest(interactiveSel)) ring.classList.remove("is-active");
  });

  const raf = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    requestAnimationFrame(raf);
  };
  raf();
}
