const shareBtn = document.getElementById("shareBtn");
const shareMenu = document.getElementById("shareMenu");

shareBtn.addEventListener("click", () => {
  shareMenu.classList.toggle("active");
  shareBtn.classList.toggle("active-btn");
});
