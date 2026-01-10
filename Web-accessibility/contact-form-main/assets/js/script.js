const contactForm = document.getElementById('contact-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const queryTypeInput = document.querySelector('.query-type');
const messageInput = document.getElementById('message');
const checkboxInput = document.querySelector('.checkbox input[type="checkbox"]');
const checkboxContainer = document.querySelector('.checkbox');
const submitBtn = document.getElementById('submit-btn');
const successMessage = document.querySelector('.success');
const errorMessages = document.querySelectorAll('.error-message');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clearErrors = () => {
    // Hide all error messages
    errorMessages.forEach(msg => {
        msg.classList.remove('show');
        msg.style.display = 'none';
    });
    
    // Remove error classes and aria-invalid attributes
    document.querySelectorAll('[aria-invalid="true"]').forEach(el => {
        el.setAttribute('aria-invalid', 'false');
        el.classList.remove('error');
    });
    
    // Remove error class from fieldset and checkbox container
    queryTypeInput.classList.remove('error');
    checkboxContainer.classList.remove('error');
};

const showError = (input, errorId) => {
    input.setAttribute('aria-invalid', 'true');
    input.classList.add('error');
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.classList.add('show');
        errorElement.style.display = 'block';
    }
};

const validateForm = () => {
    let isValid = true;
    
    // Clear all previous errors
    clearErrors();

    // Validate first name
    if (firstNameInput.value.trim() === '') {
        showError(firstNameInput, 'first-name-error');
        isValid = false;
    }

    // Validate last name 
    if (lastNameInput.value.trim() === '') {
        showError(lastNameInput, 'last-name-error');
        isValid = false;
    }

    // Validate email with regex
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        showError(emailInput, 'email-error');
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        showError(emailInput, 'email-error');
        isValid = false;
    }

    // Validate query type
    const selectedQuery = document.querySelector('input[name="query"]:checked');
    if (!selectedQuery) {
        queryTypeInput.classList.add('error');
        queryTypeInput.setAttribute('aria-invalid', 'true');
        const queryError = document.getElementById('query-type-error');
        if (queryError) {
            queryError.classList.add('show');
            queryError.style.display = 'block';
        }
        isValid = false;
    }

    // Validate message 
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'message-error');
        isValid = false;
    }

    // Validate checkbox
    if (!checkboxInput.checked) {
        checkboxContainer.classList.add('error');
        checkboxInput.setAttribute('aria-invalid', 'true');
        const checkboxError = checkboxContainer.querySelector('.error-message');
        if (checkboxError) {
            checkboxError.classList.add('show');
            checkboxError.style.display = 'block';
        }
        isValid = false;
    }

    // If all validations pass, show success message
    if (isValid) {
        clearErrors();
        contactForm.reset();
        successMessage.classList.remove('hidden');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

// Hide success message when user starts interacting with the form
const hideSuccessOnInteraction = () => {
    if (!successMessage.classList.contains('hidden')) {
        successMessage.classList.add('hidden');
    }
};

// Add event listeners to hide success message on user interaction
firstNameInput.addEventListener('input', hideSuccessOnInteraction);
lastNameInput.addEventListener('input', hideSuccessOnInteraction);
emailInput.addEventListener('input', hideSuccessOnInteraction);
messageInput.addEventListener('input', hideSuccessOnInteraction);
checkboxInput.addEventListener('change', hideSuccessOnInteraction);

// Hide on radio button selection
document.querySelectorAll('input[name="query"]').forEach(radio => {
    radio.addEventListener('change', hideSuccessOnInteraction);
});
