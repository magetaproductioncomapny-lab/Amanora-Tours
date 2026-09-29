const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#primary-navigation");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    navLinks.classList.toggle("open", open);
  });

  navLinks.addEventListener("click", event => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}
