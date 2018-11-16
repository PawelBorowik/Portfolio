const hamburger = document.querySelector(".hamburger");

const iconBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const sideMenu = document.querySelector(".mainNav");
const hiddenSideMenu = document.querySelectorAll("li");


hamburger.addEventListener("click", function () {
    iconBars.classList.toggle("show");
    iconX.classList.toggle("show");
    sideMenu.classList.toggle("move");
})
hiddenSideMenu.forEach(function (item) {
    item.addEventListener("click", function () {

        sideMenu.classList.remove("move");
        iconBars.classList.toggle("show");
        iconX.classList.toggle("show");

    })
})


const nav = document.querySelector(".mainNav");
window.addEventListener("scroll", function (event) {
    let scrollPosition = this.scrollY;
    if (scrollPosition > 100) {
        nav.classList.add("nav-down")
    } else {
        nav.classList.remove("nav-down")

    }

});