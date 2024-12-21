document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const fullnameError = document.querySelector('.fullnameError');
    const emailError = document.querySelector('.emailError');
    const usernameError = document.querySelector('.usernameError');
    const passwordError = document.querySelector('.passwordError');
    const confirmPasswordError = document.querySelector('.confirmPasswordError');

    let isValid = true;

    // Fullname validation
    if (fullname === '') {
      fullnameError.textContent = "Fullname should not be empty";
      isValid = false;
    } else {
      fullnameError.textContent = '';
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

    if (isValid) {
      alert("Registration successful!");
    }
  });