document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const companyName = document.getElementById('companyName').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const companyNameError = document.querySelector('.companyNameError');
    const emailError = document.querySelector('.emailError');
    const usernameError = document.querySelector('.usernameError');
    const passwordError = document.querySelector('.passwordError');
    const confirmPasswordError = document.querySelector('.confirmPasswordError');

    let isValid = true;

    // Company Name validation
    if (companyName === '') {
        companyNameError.textContent = "Company name should not be empty";
        isValid = false;
    } else {
        companyNameError.textContent = '';
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Username validation
    if (username === '') {
        usernameError.textContent = "Username should not be empty";
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Password validation
    if (password.length <= 6) {
        passwordError.textContent = "Password must be more than 6 characters";
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    // Final validation
    if (isValid) {
        alert("Registration successful!");
    }
});

    