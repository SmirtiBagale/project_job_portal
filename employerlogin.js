document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const usernameError = document.querySelector('.usernameError');
    const passwordError = document.querySelector('.passwordError');
    const confirmPasswordError = document.querySelector('.confirmPasswordError');

    let isValid = true;

    // Username validation
    if (username === '') {
      usernameError.textContent = "Username should not be empty";
      isValid = false;
    } else {
      usernameError.textContent = '';
    }

    // Password validation
    if (password === '') {
      passwordError.textContent = "Password should not be empty";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long";
      isValid = false;
    } else {
      passwordError.textContent = '';
    }

    // Confirm Password validation
    if (confirmPassword === '') {
      confirmPasswordError.textContent = "Please confirm your password";
      isValid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match";
      isValid = false;
    } else {
      confirmPasswordError.textContent = '';
    }

    // If all validations pass
    if (isValid) {
      alert('Form submitted successfully!');
      // Optionally, submit the form or send data to a server here
    }
  });