//your JS code here. If required.
// Check if there are saved details
    window.onload = function() {
        var savedUsername = localStorage.getItem('username');
        var savedPassword = localStorage.getItem('password');

        if (savedUsername && savedPassword) {
            var existingButton = document.createElement('button');
            existingButton.id = 'existing';
            existingButton.innerText = 'Login as existing user';
            document.getElementById('loginForm').appendChild(existingButton);
        }
    };

    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert('Logged in as ' + username);
    });

    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'existing') {
            var savedUsername = localStorage.getItem('username');
            alert('Logged in as ' + savedUsername);
        }
    });