// Sticky navbar
window.onscroll = function() {
    stickyNav();
    counterRun();
};
let navbar = document.getElementById("nav-menu");
let sticky = navbar.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav-sticky");;
  } else {
    navbar.classList.remove("nav-sticky");
  }
}
// Menu Toggle
let bar = document.querySelector(".nav-bars");
let navList = document.querySelector(".nav-list");
bar.addEventListener("click", ()=>{
    console.log(navList.length);
    navList.classList.toggle('nav-list-mobile');
}, false)

// Nav Item active
let navItem = document.querySelectorAll(".nav-item");
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
        let current = document.querySelector(".nav-item-active");
        current.classList.remove("nav-item-active");
        navItem[i].classList.add("nav-item-active");
  });
}
// Top Margin for hero section
let navHeight = navList.offsetHeight;
let heroSection = document.querySelector('.hero-section');

// Hero Slideshow
let slideIndex = 1;
let dots = document.getElementsByClassName("slide-dots");
let slides = document.getElementsByClassName("mySlides");

for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", ()=>{
        showDivs(i+1, dots, slides);
    }, false);
}
showDivs(slideIndex, dots, slides);
slideShow(dots, slides); //Automatic SlideShow

// Testimonial Slideshow
let testimonial_dots = document.getElementsByClassName("dots");
let testimonial_slides = document.getElementsByClassName("testimonial");

for(let i = 0; i < testimonial_dots.length; i++){
    testimonial_dots[i].addEventListener("click", ()=>{
        showDivs(i+1, testimonial_dots, testimonial_slides);
    }, false);
}
showDivs(slideIndex-1, testimonial_dots, testimonial_slides);
// slideShow(testimonial_dots, testimonial_slides); //Automatic SlideShow

function showDivs(n, dots, x) {
      slideIndex = n;
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active-dot", "");
      }
      x[slideIndex-1].style.display = "flex";
      dots[slideIndex-1].className += " active-dot";
}

function slideShow(dots, slides){
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++){
        dots[i].classList.remove('active-dot');
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
    slideIndex++;
    setTimeout(()=>{
        slideShow(dots, slides)
    }, 3000);
}

// Counter
import { CountUp } from './countUp.min.js';
window.onload = counter();
function counter() {
    let count1 = new CountUp('count-software', 5, 1);
    count1.start();
    let count2 = new CountUp('count-website', 10, 1.5);
    count2.start();
    let count3 = new CountUp('count-app', 15, 2);
    count3.start();
};
function counterRun(){
    let counterSec = document.querySelector('.sec-counter');
    if(window.pageYOffset > counterSec.offsetHeight){
        counter();
    }
}
