const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

// When Signup is clicked
signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("toggle-btn-active");
    signupBtn.classList.remove("toggle-btn-inactive");

    loginBtn.classList.remove("toggle-btn-active");
    loginBtn.classList.add("toggle-btn-inactive");

    // Go to signup page
    window.location.href = "signup.html";
});

// When Login is clicked
loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("toggle-btn-active");
    loginBtn.classList.remove("toggle-btn-inactive");

    signupBtn.classList.remove("toggle-btn-active");
    signupBtn.classList.add("toggle-btn-inactive");

    // Go to login page
    window.location.href = "login.html";
});
