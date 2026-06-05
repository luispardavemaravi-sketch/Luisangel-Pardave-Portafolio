/* ═══════════════════════════════════════════
   script.js — Luisangel Pardave Portfolio
═══════════════════════════════════════════ */

// ── Typing animation ──────────────────────
(function () {
  const fullName = "Luisangel Pardave";
  const el = document.getElementById("typing-text");
  if (!el) return;

  let i = 0;
  function type() {
    if (i <= fullName.length) {
      el.textContent = fullName.slice(0, i);
      i++;
      setTimeout(type, 95);
    }
  }
  // Pequeño delay inicial para que se vea el efecto
  setTimeout(type, 500);
})();

// ── Partículas flotantes ──────────────────
(function () {
  const container = document.getElementById("particles");
  if (!container) return;

  const COUNT = 28;

  for (let p = 0; p < COUNT; p++) {
    const dot = document.createElement("div");
    dot.className = "particle";

    const size = 1.5 + Math.random() * 3;
    const left = Math.random() * 100;
    const top = 20 + Math.random() * 70; // evitar bordes
    const dur = 5 + Math.random() * 7;
    const del = Math.random() * 8;

    dot.style.cssText = `
      width:  ${size}px;
      height: ${size}px;
      left:   ${left}%;
      top:    ${top}%;
      animation-duration:  ${dur}s;
      animation-delay:     ${del}s;
      opacity: 0;
    `;

    container.appendChild(dot);
  }
})();
