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
const topBtn = document.querySelector(".top");
const topBtnLink = document.querySelector(".go-top");
const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");
const botn = document.querySelector(".botn");

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
topBtn.classList.add("light-mode");
topBtnLink.classList.add("light-mode");
menuIcon.classList.add("light-mode");
botn.classList.add("light-mode");

// Toggle mode
const toggleMode = () => {
  body.classList.toggle("dark-mode");
  navOptions.classList.toggle("dark-mode");
  navlinks.forEach((navLink) => {
    navLink.classList.toggle("dark-mode");
  });
  sideBar.classList.toggle("dark-mode");
  input.classList.toggle("dark-mode");
  selects.forEach((select) => {
    select.classList.toggle("dark-mode");
  });
  check.classList.toggle("dark-mode");
  aboutBtn.classList.toggle("dark-mode");
  aboutBtnLink.classList.toggle("dark-mode");
  cards.forEach((card) => {
    card.classList.toggle("dark-mode");
  });
  purchaseBtns.forEach((purchaseBtn) => {
    purchaseBtn.classList.toggle("dark-mode");
  });
  footer.classList.toggle("dark-mode");
  copyright.classList.toggle("dark-mode");
  footLinks.forEach((footLink) => {
    footLink.classList.toggle("dark-mode");
  });
  topBtn.classList.toggle("dark-mode");
  topBtnLink.classList.toggle("dark-mode");
menuIcon.classList.toggle("dark-mode");
botn.classList.toggle("dark-mode");
};

// Toggle eventlistener
themeToggle.addEventListener("click", toggleMode);

const mobileScreen = () => {
  sideBar.classList.toggle("hide");
  navBar.classList.toggle("hide");
  // menuIcon.classList.toggle("set");
}

menu.addEventListener("click", mobileScreen)