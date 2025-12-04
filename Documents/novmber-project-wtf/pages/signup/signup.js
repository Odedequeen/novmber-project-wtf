// Toggle buttons
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// Open Login Page
loginBtn.addEventListener("click", () => {
    window.location.href = "../login/login.html";
});

// Open Signup Page
signupBtn.addEventListener("click", () => {
    window.location.href = "../signup/signup.html";
});


//MAKE “Next Step” OPEN DASHBOARD

document.getElementById("nextStepBtn").addEventListener("click", () => {
    // Get email if available
    const emailInput = document.querySelector("input[placeholder='hello@gmail.com']");
    const email = emailInput ? emailInput.value : "";

    // Save email to localStorage
    localStorage.setItem("userEmail", email);

    window.location.href = "../dashboard/dashboard.html";
});
