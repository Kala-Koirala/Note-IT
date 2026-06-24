
const form = document.getElementById('signupForm');

// Toggle Password visibility (Show/Hide text)
function toggleVisibility(fieldId) {
    const inputField = document.getElementById(fieldId);
    const button = inputField.nextElementSibling;
    if (inputField.type === 'password') {
        inputField.type = 'text';
        button.textContent = 'Hide';
    } else {
        inputField.type = 'password';
        button.textContent = 'Show';
    }
}

// Real-time validation helper
function validateField(inputElement, errorElement, condition, successCallback = null) {
    if (condition) {
        inputElement.classList.remove('invalid');
        errorElement.style.display = 'none';
        if (successCallback) successCallback();
        return true;
    } else {
        inputElement.classList.add('invalid');
        errorElement.style.display = 'block';
        return false;
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Regex pattern for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate all inputs
    const isFirstNameValid = validateField(firstName, document.getElementById('firstNameError'), firstName.value.trim() !== '');
    const isLastNameValid = validateField(lastName, document.getElementById('lastNameError'), lastName.value.trim() !== '');
    const isEmailValid = validateField(email, document.getElementById('emailError'), emailPattern.test(email.value));
    const isPasswordValid = validateField(password, document.getElementById('passwordError'), password.value.length >= 8);
    const isConfirmPasswordValid = validateField(confirmPassword, document.getElementById('confirmPasswordError'), confirmPassword.value === password.value && confirmPassword.value !== '');

    // Check if form is completely valid
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Account successfully created! (Form Validated)');
        // Inside a real application, you would send data to your backend API here
    }
});

// Optional: Remove error layout as user types
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function () {
        if (this.classList.contains('invalid') && this.value.trim() !== '') {
            this.classList.remove('invalid');
            const errorDiv = this.closest('.form-group').querySelector('.error-message');
            if (errorDiv) errorDiv.style.display = 'none';
        }
    });
});

const datePicker = document.querySelector(".date-picker");
const dateInput = document.querySelector("#date-input");
const cancelBtn = document.querySelector(".cancel");
const applyBtn = document.querySelector(".apply");
const dates = document.querySelector(".dates");
const days = document.querySelector(".days");

let selectedDate = new Date();
let selectedYear = selectedDate.getFullYear();
let selectedMonth = selectedDate.getMonth();

dateInput.addEventListener("click", () => {
    datePicker.hidden = false;
});

cancelBtn.addEventListener("click", () => {
    datePicker.hidden = true;
});

applyBtn.addEventListener("click", () =>{


    datePicker.hidden = true;
});


const displayDates = () => {
    dates.innerHTML = "";
};

displayDates();