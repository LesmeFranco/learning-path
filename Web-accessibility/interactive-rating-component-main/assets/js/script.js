const cardSection = document.querySelector(".card");
const ratingBtn = document.querySelectorAll(".rating button");
const submitBtn = document.querySelector(".submit-button");
const ratingValue = document.querySelector(".rating-text span");
const successMessage = document.getElementById("success-message");

let selectRating = null;

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove Active Class From All Buttons
    ratingBtn.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-checked", "false");
    });

    // Add Active Class To Clicked Button
    btn.classList.add("active");
    btn.setAttribute("aria-checked", "true");

    selectRating = btn.textContent;

    // Enable Submit Button
    submitBtn.disabled = false;
  });
});

submitBtn.addEventListener("click", () => {
  if (selectRating !== null) {
    ratingValue.textContent = selectRating;
    cardSection.classList.add("hidden");
    successMessage.classList.remove("hidden");
  }
});
