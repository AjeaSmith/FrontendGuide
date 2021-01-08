const imageSlider = document.querySelector(".image_slider");
const contentSlider = document.querySelector(".content_slider");
const slides = Array.from(imageSlider.children);
const contentSlides = Array.from(contentSlider.children);
const prevButton = document.querySelector(".left"),
  nextButton = document.querySelector(".right");

const menuIcon = document.querySelector(".menu_icon");
const menuIconClose = document.querySelector(".menu_icon_open");
const menuClose = document.querySelector(".menu_close");
const menuOpen = document.querySelector(".menu_open");
const slidesWidth = slides[0].getBoundingClientRect().width;

// helper function to arrange slides next to each other
const arrangeSlides = (slides) => {
  slides.forEach((slide, index) => {
    slide.style.left = slidesWidth * index + "px";
  });
};

arrangeSlides(slides);
arrangeSlides(contentSlides);

// helper function to move slides back and forward
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

if (slidesWidth == 1600) {
  console.log("yup");
}
// handle next button clicked
nextButton.addEventListener("click", (e) => {
  const currentSlide = imageSlider.querySelector(".current_slide");
  let nextSlide = currentSlide.nextElementSibling;
  if (nextSlide == null) {
    nextSlide = slides[0];
  }
  //   move to the next slide
  moveToSlide(imageSlider, currentSlide, nextSlide);
  moveToSlide(contentSlider, currentSlide, nextSlide);
});

// handle prev button clicked
prevButton.addEventListener("click", (e) => {
  const currentSlide = imageSlider.querySelector(".current_slide");
  let prevSlide = currentSlide.previousElementSibling;

  if (prevSlide == null) {
    prevSlide = slides[slides.length - 1];
  }
  //   move to the next slide
  moveToSlide(imageSlider, currentSlide, prevSlide);
  moveToSlide(contentSlider, currentSlide, prevSlide);
});

// handle menu toggle
menuIcon.addEventListener("click", (e) => {
  menuOpen.style.display = "flex";
  menuClose.style.display = "none";
});
menuIconClose.addEventListener("click", (e) => {
  menuOpen.style.display = "none";
  menuClose.style.display = "flex";
});
