# Portfolio Changes — Agent Instructions

Apply all 7 changes below to the existing portfolio source. Each change has:

- **FIND** — exact string to locate in the file
- **REPLACE WITH** — exact string to substitute in
- **ADD CSS** — styles to append to the existing stylesheet

Do NOT restructure the file. Apply changes surgically.

---

## 1. Hero label — console cursor after "Full-Stack AI Engineer"

**FIND** (the hero section label text, exact):

```
Full-Stack AI Engineer building production-ready AI systems.
```

> Note: this is the `<p>` or subtitle directly under the `<h1>Munim Ahmad</h1>`
> — NOT the nav label.

**REPLACE WITH:**

```html
Building systems that <em>reason, remember, and respond.</em> Open-source
author. Based in Lahore, Pakistan.
```

---

## 2. Hero label pill — add blinking cursor to the role label

**FIND** the element that contains only the text:

```
Full-Stack AI Engineer
```

This is the small label/pill _above_ the `<h1>` in the hero (not in the nav, not
in the sidebar). It may be wrapped in a `<span>`, `<p>`, or `<div>` with a class
like `hero-label`, `role-label`, or similar.

**REPLACE** its inner content with:

```html
Full-Stack AI Engineer<span class="cursor-blink"></span>
```

**ADD CSS:**

```css
.cursor-blink {
  display: inline-block;
  width: 8px;
  height: 1em;
  background: var(--accent, #c84b2f);
  margin-left: 5px;
  vertical-align: middle;
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
```

---

## 3. Section heading italic words — accent color

Every `<h2>` on the page contains an `<em>` for the stylistic italic word (e.g.
_Projects_, _Approach_, _I've Been_, _Matrix_). Currently these render in the
default italic style. Apply accent color to all of them.

**ADD CSS** (targets all `em` inside `h2` tags globally):

```css
h2 em {
  color: var(--accent, #c84b2f);
  font-style: italic;
}
```

> If your theme uses CSS variables for accent, replace `#C84B2F` with your
> variable name (e.g. `var(--color-accent)`). Check your existing `:root` block
> for the correct variable name and use that.

---

## 4. Scroll indicator — keep vertical layout, add animated scan line

**FIND** the element containing the text:

```
Scroll to explore
```

This is at the bottom of the hero section. It may be a `<div>`, `<span>`, or
`<p>` with a class like `scroll-indicator`, `scroll-hint`, or `scroll-cta`.

**REPLACE** the entire element's inner HTML with:

```html
<span class="scroll-line-track">
  <span class="scroll-line-fill"></span>
</span>
<span class="scroll-label">Scroll to explore</span>
```

Keep the outer wrapper element and all its existing classes/attributes — only
replace what's inside it.

**ADD CSS:**

```css
/* Assumes the outer wrapper is already display:flex; flex-direction:column; align-items:center */
.scroll-line-track {
  display: block;
  width: 1px;
  height: 48px;
  background: var(--border, #d4ccc0);
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
}

.scroll-line-fill {
  display: block;
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--accent, #c84b2f);
  animation: scroll-scan 2s ease-in-out infinite;
}

@keyframes scroll-scan {
  0% {
    top: -100%;
  }
  100% {
    top: 100%;
  }
}

.scroll-label {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted, #8c8782);
}
```

---

## 5. About first paragraph — replace copy

**FIND** (exact text in the about/methodology section):

```
Full-Stack AI Engineer with expertise in building production-ready AI applications from model development to deployment. Specialized in RAG systems, LLM optimization, and scalable backend architecture.
```

**REPLACE WITH:**

```
I build AI systems that are genuinely useful — not demos. My work sits at the intersection of machine learning infrastructure and full-stack engineering, with a particular obsession for making LLMs faster, cheaper, and more reliable in production.
```

---

## 6. Experience section — role title font

The `<h3>` elements inside the experience section (e.g. "ML Engineer", "Open
Source Author", "BSc Computer Science") should use a serif display font.

**Step 1 — Add the Google Font** (inside `<head>`, after any existing font
`<link>` tags):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
  rel="stylesheet"
/>
```

> Skip if `DM Serif Display` is already loaded.

**Step 2 — ADD CSS:**

You need to scope this to the experience section only. Find the `id` or class on
the experience `<section>` — it will be something like `id="experience"` or
`class="experience-section"`. Use whichever matches.

```css
/* If the section has id="experience": */
#experience h3 {
  font-family: 'DM Serif Display', serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.02em;
}

/* If the section has a class instead, replace #experience with .your-class-name */
```

---

## 7. Footer — pulsing availability dot

**FIND** (exact text in the footer):

```
Available for work
```

**REPLACE WITH:**

```html
<span class="live-dot"></span>Available for work
```

The wrapper element around this text keeps all its existing styles — only inject
the `<span>` immediately before the text.

**ADD CSS:**

```css
.live-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent, #c84b2f);
  margin-right: 7px;
  vertical-align: middle;
  animation: live-pulse 2s ease-in-out infinite;
}

@keyframes live-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.65);
  }
}
```

---

## Where to add the CSS

All `ADD CSS` blocks go into your **main stylesheet** (likely `style.css`,
`main.css`, or `globals.css`). Append them at the **bottom of the file**, after
all existing rules. Do not modify existing rules — only append.

If your project uses CSS variables and the variable names differ from the
fallbacks used here (e.g. your accent is `--color-accent` not `--accent`), do a
find-replace on the variable names in the snippets above before applying.

---

## Verification checklist

After applying all changes, confirm:

- [ ] Hero label shows blinking block cursor after "Full-Stack AI Engineer"
- [ ] Hero subtitle reads "Building systems that _reason, remember, and
      respond._"
- [ ] All `<h2>` italic words render in the accent color (red/terracotta)
- [ ] Scroll indicator is vertical with an animated line scanning downward
- [ ] About first paragraph starts with "I build AI systems that are genuinely
      useful..."
- [ ] Experience role titles (`<h3>`) render in DM Serif Display italic
- [ ] Footer "Available for work" has a pulsing dot to its left
