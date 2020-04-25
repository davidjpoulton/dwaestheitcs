let reviews1 = document.querySelector(".review-slide1")
let reviews2 = document.querySelector(".review-slide2")
let reviews3 = document.querySelector(".review-slide3")

let style1 = window.getComputedStyle(reviews1);
let style2 = window.getComputedStyle(reviews2);
let style3 = window.getComputedStyle(reviews3);


let rightArrow = document.querySelector("#arrow-right")
let leftArrow = document.querySelector("#arrow-left")

rightArrow.addEventListener(onmouseover, enlarge());


function swipeRight() {
    if (style1.opacity === "1") {
        reviews1.classList.add("hide");
        reviews1.classList.remove("show");
        reviews1.classList.add("slide-left");
        reviews2.classList.add("show");
        
    } else if (style2.opacity === "1") {
        reviews2.classList.remove("show")
        reviews1.classList.add("hide")
        reviews3.classList.add("show")
    }
}

function swipeLeft() {
    if (style3.opacity === "1") {
        reviews3.classList.remove("show");
        reviews2.classList.add("show");
    } else if (style2.opacity === "1") {
        reviews2.classList.remove("show");
        reviews1.classList.add("show");
        reviews1.classList.remove("slide-left")
    }
}

function enlarge() {

}



