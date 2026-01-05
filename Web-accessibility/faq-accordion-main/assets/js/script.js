const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    const answer = toggle
      .closest(".faq-questions")
      .querySelector(".faq-answer");

    toggle.setAttribute("aria-expanded", !isExpanded);
    toggle.classList.toggle("active", !isExpanded);
    answer.classList.toggle("hidden", isExpanded);
  });
});
