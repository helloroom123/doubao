const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = navLinks
  .map((link) => {
    const target = link.getAttribute("href");
    if (!target || !target.startsWith("#")) {
      return null;
    }
    return document.querySelector(target);
  })
  .filter(Boolean);

const activateNav = () => {
  const scrollPosition = window.scrollY + 140;
  let activeIndex = 0;

  sections.forEach((section, index) => {
    if (section.offsetTop <= scrollPosition) {
      activeIndex = index;
    }
  });

  navLinks.forEach((link, index) => {
    link.classList.toggle("active", index === activeIndex);
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href");
    if (!target || !target.startsWith("#")) {
      return;
    }
    const section = document.querySelector(target);
    if (!section) {
      return;
    }
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.addEventListener("scroll", activateNav, { passive: true });
activateNav();
