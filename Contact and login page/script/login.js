
function forgotPassword(e) {
    e.preventDefault();
    var msg = document.getElementById('msg');
    msg.style.color = '#16a34a'; // Accessible emerald green
    msg.textContent = 'Reset link sent to your email!';
}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var msg = document.getElementById('msg');

    if (email == '' || password == '') {
        msg.style.color = '#dc2626'; // Accessible red
        msg.textContent = 'Please fill in all fields.';
    } else {
        msg.style.color = '#16a34a';
        msg.textContent = 'Logging in...';
    }
}