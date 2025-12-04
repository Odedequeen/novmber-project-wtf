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

// LOGIN → SAVE USER DATA + GO TO DASHBOARD
document.getElementById("nextStepBtn").addEventListener("click", () => {
    
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    // Simple validation
    if (email === "" || password === "") {
        alert("Please enter your email and password");
        return;
    }

    // Create user object
    const userData = {
        name: "Queen Christopher",   // You can make this come from signup later
        email: email
    };

    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to dashboard
    window.location.href = "../dashboard/dashboard.html";
});

