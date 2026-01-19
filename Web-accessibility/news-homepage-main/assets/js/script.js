const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("main-menu");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

  menuBtn.setAttribute("aria-expanded", !isOpen);
  menu.classList.toggle("open");

  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");

  overlay.classList.toggle("hidden");
});
