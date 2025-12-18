// Obtener referencias a los elementos del DOM
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.getElementById('success-message');
const userEmailSpan = document.getElementById('user-email');
const dismissBtn = document.getElementById('dismiss-btn');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError() {
    emailInput.classList.add('error');
    errorMessage.classList.remove('hidden');
}

function hideError() {
    emailInput.classList.remove('error');
    errorMessage.classList.add('hidden');
}

function showSuccess(email) {
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');
    userEmailSpan.textContent = email;
}

function handleSubmit(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email || !isValidEmail(email)) {
        showError();
    } else {
        hideError();
        showSuccess(email);
    }
}

function handleDismiss() {
    successMessage.classList.add('hidden');
    form.classList.remove('hidden');
    emailInput.value = '';
    hideError();
}

form.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', handleDismiss);
emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('error')) {
        hideError();
    }
});