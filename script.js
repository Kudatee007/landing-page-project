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

new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

new Swiper('.client-logo-box .swiper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 5
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});