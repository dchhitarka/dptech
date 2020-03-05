// Hero Slideshow
let slideIndex = 1;
showDivs(slideIndex);
slideShow(); //Automatic SlideShow

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slide-dots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active-dot", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";
}

function slideShow(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("slide-dots");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove('active-dot');
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
    setTimeout(slideShow, 2000);
}
