// Calling all elements
const body = document.querySelector("body");
const navOptions = document.querySelector(".nav-options");
const menu = document.querySelector(".menu");
const navlinks = document.querySelectorAll(".navi-links");
const listItems = document.querySelectorAll("li");
const sideBar = document.querySelector(".side-bar");
const media = document.querySelectorAll(".media");
const input = document.querySelector("input");
const selects = document.querySelectorAll("select");
const themeToggle = document.querySelector("#theme-checkbox");
const check = document.querySelector(".check");
const aboutBtn = document.querySelector(".btn");
const aboutBtnLink = document.querySelector(".btn-link");
const cards = document.querySelectorAll(".card");
const purchaseBtns = document.querySelectorAll(".purchase-btn");
const footer = document.querySelector(".footer");
const copyright = document.querySelector(".copyright");
const footLinks = document.querySelectorAll(".foot-links");

// Setting default mode
body.classList.add("light-mode");
navOptions.classList.add("light-mode");
navlinks.forEach((navLink) => {
  navLink.classList.add("light-mode");
});
sideBar.classList.add("light-mode");
input.classList.add("light-mode");
selects.forEach((select) => {
  select.classList.add("light-mode");
});
check.classList.add("light-mode");
aboutBtn.classList.add("light-mode");
aboutBtnLink.classList.add("light-mode");
cards.forEach((card) => {
  card.classList.add("light-mode");
});
purchaseBtns.forEach((purchaseBtn) => {
  purchaseBtn.classList.add("light-mode");
});
footer.classList.add("light-mode");
copyright.classList.add("light-mode");
footLinks.forEach((footLink) => {
  footLink.classList.add("light-mode");
});

// Default mode
let mode = "Light mode";

// Dark mode
const darkMode = () => {
  body.classList.add("dark-mode");
  navOptions.classList.add("dark-mode");
  navlinks.forEach((navLink) => {
    navLink.classList.add("dark-mode");
  });
  sideBar.classList.add("dark-mode");
  input.classList.add("dark-mode");
  selects.forEach((select) => {
    select.classList.add("dark-mode");
  });
  check.classList.add("dark-mode");
  aboutBtn.classList.add("dark-mode");
  aboutBtnLink.classList.add("dark-mode");
  cards.forEach((card) => {
    card.classList.add("dark-mode");
  });
  purchaseBtns.forEach((purchaseBtn) => {
    purchaseBtn.classList.add("dark-mode");
  });
  footer.classList.add("dark-mode");
  copyright.classList.add("dark-mode");
  footLinks.forEach((footLink) => {
    footLink.classList.add("dark-mode");
  });
};

// Light mode
const lightMode = () => {
  body.classList.remove("dark-mode");
  navOptions.classList.remove("dark-mode");
  navlinks.forEach((navLink) => {
    navLink.classList.remove("dark-mode");
  });
  sideBar.classList.remove("dark-mode");
  input.classList.remove("dark-mode");
  selects.forEach((select) => {
    select.classList.remove("dark-mode");
  });
  check.classList.remove("dark-mode");
  aboutBtn.classList.remove("dark-mode");
  aboutBtnLink.classList.remove("dark-mode");
  cards.forEach((card) => {
    card.classList.remove("dark-mode");
  });
  purchaseBtns.forEach((purchaseBtn) => {
    purchaseBtn.classList.remove("dark-mode");
  });
  footer.classList.remove("dark-mode");
  copyright.classList.remove("dark-mode");
  footLinks.forEach((footLink) => {
    footLink.classList.remove("dark-mode");
  });
};

// Toggle mode
const toggleMode = () => {
  if (mode === "Light mode") {
    mode = "Dark mode";
    darkMode();
  } else {
    mode = "Light mode";
    lightMode();
  }
};

// Toggle eventlistener
themeToggle.addEventListener("click", toggleMode);
