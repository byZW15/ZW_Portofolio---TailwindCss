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

// DarkMode Toggle
// Variabel darkToggle: Ambil Checkbox id:dark-toggle
// ketika di refresh Darkmode tetap: local.storage
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.checked = localStorage.theme === "dark";

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});
// pindahkan posisi bulatan toggle
