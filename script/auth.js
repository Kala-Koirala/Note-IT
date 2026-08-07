const user = JSON.parse(localStorage.getItem("session") || sessionStorage.getItem("session"));
const profile = document.querySelector('.profile');
const menuResponsive = document.querySelector('.menu-responsive');

if(user){
    document.querySelector(".login-signup-btn").style.display = "none";
    document.querySelector(".profile").style.display = "block";
    document.getElementById("user-profile").textContent = user.firstName.toUpperCase();
    document.getElementById("profile-icon").textContent = user.firstName.charAt(0).toUpperCase();


    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("session");
        sessionStorage.removeItem("session");
        window.location.href= "../index.html";
    });
}

profile.addEventListener('click', (e) => {
    e.stopPropagation();
    profile.classList.toggle('active');
});

menuResponsive.addEventListener('click', (e) => {
    e.stopPropagation();
    menuResponsive.classList.toggle('active');
});

document.addEventListener('click', () => {
    profile.classList.remove('active');
    menuResponsive.classList.remove('active');
});