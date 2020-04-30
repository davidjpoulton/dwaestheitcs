
//This is the clickable slider on the review section of the home page

// selecting different review sections
let reviews1 = document.querySelector(".review-slide1")
let reviews2 = document.querySelector(".review-slide2")
let reviews3 = document.querySelector(".review-slide3")
// to check what the opacity is set too
let style1 = window.getComputedStyle(reviews1);
let style2 = window.getComputedStyle(reviews2);
let style3 = window.getComputedStyle(reviews3);
// selecting the ball elements
let ball1 = document.querySelector(".ball1");
let ball2 = document.querySelector(".ball2");
let ball3 = document.querySelector(".ball3");

function swipeRight() {
    // if the first review is showing (opacity: 1)
    if (style1.opacity === "1") {
        reviews1.classList.add("hide");
        reviews1.classList.remove("show");
        reviews1.classList.add("slide-left");
        reviews2.classList.add("show");
        reviews2.classList.add("slide-back");
        ball2.style.background = "#52C7C7";
        ball1.style.background = "#979797";
        
        // if the second review is showing
    } else if (style2.opacity === "1") {
        reviews2.classList.remove("show")
        reviews1.classList.remove("show")
        reviews3.classList.add("show")
        reviews3.classList.add("slide-back")
        reviews2.classList.add("slide-left")
        reviews2.classList.remove("slide-back")
        ball3.style.background = "#52C7C7";
        ball2.style.background = "#979797";
    }
}

function swipeLeft() {
    // if third review is being shown
    if (style3.opacity === "1") {
        reviews3.classList.remove("show");
        reviews2.classList.add("show");
        reviews2.classList.remove("slide-left");
        reviews2.classList.add("slide-back");
        reviews3.classList.remove("slide-back");
        ball2.style.background = "#52C7C7";
        ball3.style.background = "#979797";
    // if second review is being shown
    } else if (style2.opacity === "1") {
        reviews2.classList.remove("show");
        reviews1.classList.remove("hide");
        reviews1.classList.remove("slide-left")
        reviews2.classList.add("slide-back")
        reviews2.classList.remove("slide-back")
        ball1.style.background = "#52C7C7";
        ball2.style.background = "#979797";
    
    }
}



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
    if (document.documentElement.scrollTop === 0 && vw > 470){
        burger.style.background = "rgb(255, 255, 255, 0)";
    } else {
        burger.style.background = "rgb(255, 255, 255)";
    }
}





// Animated scroll arrow 








