const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const icon = document.getElementById("icon");
const footerLogo = document.getElementById("footer-logo");
const headerLogo = document.getElementById("header-logo");
let scrollTop = document.getElementById("scroll-top");

// dark mode toggle
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

console.log(scrollTop);

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

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
