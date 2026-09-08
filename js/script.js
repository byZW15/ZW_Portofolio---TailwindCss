// Navbar Fixed
// Js carikan nama elemen tag <header>
// Scroll Smooth
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger Menu
// Js carikan nama id = #hamburger
const hamburger = document.querySelector("#hamburger");

const navMenu = document.querySelector("#nav-menu");

// hamburger mobile
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  // untuk menghilangkan menu ketika di klik
  navMenu.classList.toggle("hidden");
});

// Click diluar hamburger auto close
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
