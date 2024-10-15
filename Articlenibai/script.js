 // Add event listener to the Log In button
 document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('loadingScreen').style.display = 'flex'; // Show the loading screen
    
    // Redirect to the login page after 1 second (1000 milliseconds)
    setTimeout(function() {
        window.location.href = 'login.html'; // Replace with your login page URL
    }, 1000);
});