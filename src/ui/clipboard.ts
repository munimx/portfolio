/** Copy-to-clipboard for [data-copy] targets (e.g. the email row), with
 *  brief "Copied" feedback. Falls through to the href if the API is blocked. */
export function initClipboard() {
  document.querySelectorAll<HTMLElement>("[data-copy]").forEach((el) => {
    const action = el.querySelector<HTMLElement>(".crow__action");
    const original = action?.textContent ?? "Copy";
    let timer: number | undefined;

    el.addEventListener("click", async (e) => {
      const value = el.dataset.copy;
      if (!value || !navigator.clipboard) return; // let the mailto: link proceed
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(value);
        el.classList.add("is-copied");
        if (action) action.textContent = "Copied ✓";
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          el.classList.remove("is-copied");
          if (action) action.textContent = original;
        }, 1700);
      } catch {
        window.location.href = el.getAttribute("href") ?? "#";
      }
    });
  });
}
