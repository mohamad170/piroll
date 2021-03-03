const openNav = document.querySelector(".bars");
const closeNav = document.querySelector(".close");
const sideNav  = document.querySelector(".mobile-nav");


openNav.addEventListener("click", (e) =>{
    e.preventDefault();
    sideNav.style.display="block";
    // sideNav.style.marginRight="0";
});

closeNav.addEventListener("click" , (e) =>{
    e.preventDefault();
    sideNav.style.display="none";
    // sideNav.style.marginRight="-500px";
})

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("testimonials_item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
