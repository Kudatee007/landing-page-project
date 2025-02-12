const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const icon = document.getElementById("icon");
const footerLogo = document.getElementById("footer-logo");
const headerLogo = document.getElementById("header-logo");

// dark mode toggle
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};

// function to update theme
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./assets/images/sun.png";
    footerLogo.src = "./assets/images/Logo.svg";
    headerLogo.src = "./assets/images/footerLogo.svg";
    hamburgerBtn.src = "./assets/images/hambugerW.svg";
  } else {
    icon.src = "./assets/images/moon.png";
    footerLogo.src = "./assets/images/footerLogo.svg";
    headerLogo.src = "./assets/images/Logo.svg";
    hamburgerBtn.src = "./assets/images/hamburger.svg";
  }
};
