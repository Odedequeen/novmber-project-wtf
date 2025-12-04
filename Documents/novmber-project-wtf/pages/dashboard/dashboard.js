// //SIDEBAR-TOGGLE

// var sidebarOpen = false;
// var sidebar = document.getElementById(sidebar);

// function openSidebar() {
//     if (!sidebarOpen) {
//         sidebar.classList.add("sidebar-responsive");
//         sidebarOpen = true;
//     }
// }

// function closeSidebar() {
//     if (sidebarOpen) {
//         sidebar.classList.remove("sidebar-responsive");
//         sidebarOpen = false
//     }
// }

// function toggleSidebar() {
//     const sidebar = document.querySelector(".sidebar-container");
//     sidebar.classList.toggle("sidebar-collapsed");
// }

// // Display Email Initial After Login
// function setUserEmail(email) {
//     const firstLetter = email.charAt(0).toUpperCase();
//     document.getElementById("userInitial").textContent = firstLetter;
// }

// // Example for testing:
// setUserEmail("queen@gmail.com");

// function toggleSidebar() {
//   const sidebar = document.querySelector(".sidebar-container");
//   sidebar.classList.toggle("sidebar-collapsed");
// }

// // Display Email Initial After Login
// function setUserEmail(email) {
//   const firstLetter = email.charAt(0).toUpperCase();
//   document.getElementById("userInitial").textContent = firstLetter;
// }

// // Example for testing:
// setUserEmail("queen@gmail.com");

// GET USER EMAIL
const email = localStorage.getItem("userEmail") || "User";

// SHOW INITIAL
const userInitial = email.charAt(0).toUpperCase();
document.getElementById("userInitial").innerText = userInitial;

// SHOW EMAIL
document.getElementById("proflid-name").innerText = email;

// SHOW NAME (BEFORE @)
const name = email.split("@")[0];
document.getElementById("proflid-name").innerText = name;

// SHOW TIMESTAMP
function updateTime() {
    const header = document.querySelector(".header-text");
    const now = new Date().toLocaleString();
    header.innerHTML = `Your timezone: ${now}`;
}
updateTime();
setInterval(updateTime, 1000);

// Example: Retrieved from login system
let user = JSON.parse(localStorage.getItem("userData")) || {
    name: "Queen Christopher",
    email: "queen@gmail.com"
};

// Display full name
document.getElementById("userName").textContent = user.name;

// Display email
document.getElementById("userEmail").textContent = user.email;

// Display first letter as avatar
document.getElementById("userAvatar").textContent = user.name.charAt(0).toUpperCase();

//When user logs in, you save their name + email in localStorage:


localStorage.setItem("userData", JSON.stringify({ name: userName, email: userEmail }));

//Create a small JS file (or put inside your dashboard.js):

const user = JSON.parse(localStorage.getItem("userData"));

if (user) {
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userAvatar").textContent = user.name.charAt(0).toUpperCase();
}
