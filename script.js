/* script.js — Mounica Paladugu Portfolio */

// ── Year in footer ────────────────────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── Typewriter ────────────────────────────────────────────────────────────
const ROLES = ["Backend Engineer", "Full-Stack Developer", "Technical Lead"];
const el = document.getElementById("typewriter");
let roleIdx = 0,
  charIdx = 0,
  deleting = false;

function typeWriter() {
  const word = ROLES[roleIdx];
  el.textContent = word.slice(0, charIdx);

  if (!deleting && charIdx < word.length) {
    charIdx++;
    setTimeout(typeWriter, 85);
  } else if (!deleting) {
    setTimeout(() => {
      deleting = true;
      typeWriter();
    }, 2200);
  } else if (deleting && charIdx > 0) {
    charIdx--;
    setTimeout(typeWriter, 40);
  } else {
    deleting = false;
    roleIdx = (roleIdx + 1) % ROLES.length;
    setTimeout(typeWriter, 400);
  }
}
typeWriter();

// ── Scroll reveal ──────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.1 },
);

revealEls.forEach((el) => revealObserver.observe(el));

// ── Nav: scrolled state ───────────────────────────────────────────────────
const nav = document.querySelector(".nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  },
  { passive: true },
);

// ── Nav: active link highlight ────────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      }
    });
  },
  { threshold: 0.35 },
);

sections.forEach((s) => sectionObserver.observe(s));
