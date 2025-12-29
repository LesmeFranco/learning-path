// Inputs
const billAmount = document.getElementById("bill");
const peopleAmount = document.getElementById("people");
const customTipInput = document.getElementById("custom");

// Tip Buttons
const tipButtons = document.querySelectorAll(".tip button");

// Results
const tipAmount = document.querySelector(".amount");
const totalAmount = document.querySelector(".total");

// Reset Button
const resetBtn = document.querySelector(".results button");

// Error Message
const peopleError = document.querySelector(".error");

// Default Values
let billValue = 0;
let peopleValue = 1;
let tipValue = 0;

function calculateTip() {
  if (peopleValue === 0) return;

  const tipPerPerson = (billValue * tipValue) / peopleValue;
  const totalPerPerson = billValue / peopleValue + tipPerPerson;

  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
}

// Read Bill Input
billAmount.addEventListener("input", () => {
  billValue = parseFloat(billAmount.value);
  calculateTip();
});

// Read People Input
peopleAmount.addEventListener("input", () => {
  const value = peopleAmount.value.trim();
  const parsed = parseFloat(value);

  if (value === "" || isNaN(parsed) || parsed <= 0) {
    if (parsed === 0) {
      peopleError.classList.remove("hidden");
      peopleAmount.classList.add("error-input");
    } else {
      peopleError.classList.add("hidden");
      peopleAmount.classList.remove("error-input");
    }
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  } else {
    peopleValue = parsed;
    peopleError.classList.add("hidden");
    peopleAmount.classList.remove("error-input");
    calculateTip();
  }
});

// Read Tip Buttons
tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    tipValue = parseFloat(button.textContent.replace("%", "") / 100);
    customTipInput.value = "";
    calculateTip();
  });
});

// Read Custom Tip Input
customTipInput.addEventListener("input", () => {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  tipValue = parseFloat(customTipInput.value / 100);
  calculateTip();
});

resetBtn.addEventListener("click", () => {
  billAmount.value = "";
  peopleAmount.value = "";
  customTipInput.value = "";

  billValue = 0;
  peopleValue = 1;
  tipValue = 0;

  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";

  tipButtons.forEach((btn) => btn.classList.remove("active"));
  peopleError.classList.add("hidden");
  peopleAmount.classList.remove("error-input");
});
