function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

let animated = document.querySelectorAll(".animated");

function showScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animated.length; i++){
        let heigthAn = animated[i].offsetTop;
        console.log('heigth:' + heigthAn);
        if(heigthAn - 600 < scrollTop){
            animated[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll);

//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}