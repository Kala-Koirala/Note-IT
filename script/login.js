
function forgotPassword(e) {
    e.preventDefault();
    var msg = document.getElementById('msg');
    msg.style.color = '#16a34a'; // Accessible emerald green
    msg.textContent = 'Reset link sent to your email!';
}

function login() {
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    const msg      = document.getElementById('msg');

    if (email === '' || password === '') {
        msg.style.color = '#dc2626';
        msg.textContent = 'Please fill in all fields.';
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user  = users.find(u => u.email === email && u.password === password);

    if (!user) {
        msg.style.color = '#dc2626';
        msg.textContent = 'Incorrect email or password.';
        return;
    }

    // Save session
    const session = { firstName: user.firstName, lastName: user.lastName, email: user.email };
    remember
        ? localStorage.setItem("session", JSON.stringify(session))
        : sessionStorage.setItem("session", JSON.stringify(session));

    msg.style.color = '#16a34a';
    msg.textContent = `Welcome back, ${user.firstName}!`;
    setTimeout(() => window.location.href = "../index.html", 1000);

    
}