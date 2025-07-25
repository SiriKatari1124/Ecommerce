const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

close.addEventListener("click", () => {
  menu.style.right = "-100%"; // Slide it out of view
});

open.addEventListener("click", () => {
  menu.style.right = "0"; // Slide it into view
});
