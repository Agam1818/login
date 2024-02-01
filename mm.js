function checkCredentials() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the credentials are correct
    var validUsers = {
        "agam": "111222",
        "agam1": "999000"
    };

    if (validUsers[username] && validUsers[username] === password) {
        window.location.href = "welcome.html";
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}