// Burger menu 

let burger = document.querySelector(".burger-menu");
let slideMenu = document.querySelector(".slide-menu");
let page = document.querySelector(".page");
let burgerDiv1 = document.querySelector(".burger-div1")
let burgerDiv2 = document.querySelector(".burger-div2")
let burgerDiv3 = document.querySelector(".burger-div3")

let menuOpacity = window.getComputedStyle(slideMenu);

let vw = window.innerWidth;

function toggleMenu() {
    if (menuOpacity.opacity === "0") {
        slideMenu.classList.add("show");
        slideMenu.classList.remove("hide");
        slideMenu.classList.add("slide-menu-right");
        page.classList.add("dark");
        burgerDiv1.style.transform = "translateY(-5px)";
        burgerDiv2.style.transform = "translate(10px)";
        burgerDiv3.style.transform = "translateY(5px)";
    } else if (menuOpacity.opacity === "1") {
        slideMenu.classList.add("hide");
        slideMenu.classList.remove("show");
        slideMenu.classList.remove("slide-menu-right");
        page.classList.remove("dark");
        burgerDiv1.style.transform = "translateY(0px)";
        burgerDiv2.style.transform = "translate(0px)";
        burgerDiv3.style.transform = "translateY(0px)";
    }
}

function burgerBackground() {
    if (document.documentElement.scrollTop === 0){
        burger.style.background = "rgb(255, 255, 255, 0)";
    } else {
        burger.style.background = "rgb(255, 255, 255)";
    }
}