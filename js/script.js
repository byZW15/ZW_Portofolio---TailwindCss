// Navbar Fixed
// Js carikan nama elemen tag <header>
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};




// Hamburger Menu
// Js carikan nama id = #hamburger
const hamburger = document.querySelector("#hamburger");

const navMenu = document.querySelector("#nav-menu");

// hamburger mobile
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    // untuk menghilangkan menu ketika di klik
    navMenu.classList.toggle('hidden');
});
