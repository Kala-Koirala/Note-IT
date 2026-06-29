const user = JSON.parse(localStorage.getItem("session") || sessionStorage.getItem("session"));

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