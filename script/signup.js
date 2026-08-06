
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
function validateField(inputElement, errorElement, condition) {
    if (condition) {
        inputElement.classList.remove('invalid');
        errorElement.style.display = 'none';
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
    const date = document.getElementById('date-input');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Regex pattern for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate all inputs
    const isFirstNameValid = validateField(firstName, document.getElementById('firstNameError'), firstName.value.trim() !== '');
    const isLastNameValid = validateField(lastName, document.getElementById('lastNameError'), lastName.value.trim() !== '');
    const isDateValid = validateField(date, document.getElementById('dateError'), date.value.trim() !=='');
    const isEmailValid = validateField(email, document.getElementById('emailError'), emailPattern.test(email.value));
    const isPasswordValid = validateField(password, document.getElementById('passwordError'), password.value.length >= 8);
    const isConfirmPasswordValid = validateField(confirmPassword, document.getElementById('confirmPasswordError'), confirmPassword.value === password.value && confirmPassword.value !== '');

    // Check if form is completely valid
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDateValid) {
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(u => u.email === email.value.trim());

    if (exists) {
        validateField(email, document.getElementById('emailError'), false);
        document.getElementById('emailError').textContent = "This email is already registered.";
        return;
    }

    const newUser = {
        firstName: firstName.value.trim(),
        lastName:  lastName.value.trim(),
        dob:       date.value.trim(),
        email:     email.value.trim(),
        password:  password.value
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created! Please log in.");
    window.location.href = "login.html";
}
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function () {
        if (this.classList.contains('invalid') && this.value.trim() !== '') {
            this.classList.remove('invalid');
            const errorDiv = this.closest('.form-group').querySelector('.error-message');
            if (errorDiv) errorDiv.style.display = 'none';
        }
    });
});

