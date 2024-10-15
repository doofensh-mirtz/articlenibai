document.addEventListener('DOMContentLoaded', function() {
    // Elements
    var signupButton = document.getElementById('signupButton');
    var signupDialog = document.getElementById('signupDialog');
    var closeDialog = document.querySelector('.dialog .close');
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');

    // Show sign-up dialog
    signupButton.addEventListener('click', function(e) {
        e.preventDefault();
        signupDialog.style.display = 'flex';
    });

    // Close sign-up dialog
    closeDialog.addEventListener('click', function() {
        signupDialog.style.display = 'none';
    });

    // Close dialog if clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === signupDialog) {
            signupDialog.style.display = 'none';
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Show loading message
        const loadingMessage = document.createElement('div');
        loadingMessage.innerText = "Successfully logged in! Redirecting...";
        loadingMessage.className = "loading-message"; // Add class for styling
        document.querySelector('.container').appendChild(loadingMessage);

        // Redirect after 2 seconds
        setTimeout(function() {
            window.location.href = 'index.html'; // Redirect to the main page after 2 seconds
        }, 1000);
    });

    // Handle sign-up form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        alert('Sign up successful!'); // Replace with actual sign-up logic
        signupDialog.style.display = 'none'; // Close dialog after sign-up
    });
});
