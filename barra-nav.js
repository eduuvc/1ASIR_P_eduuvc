var navbar = document.getElementById("navbar");

var navbarInitialPosition = navbar.offsetTop;

function handleScroll() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > navbarInitialPosition) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
}
window.addEventListener("scroll", handleScroll);
