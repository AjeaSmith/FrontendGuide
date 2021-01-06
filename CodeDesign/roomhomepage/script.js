const imageSlider = document.querySelector(".image_slider");
const slides = Array.from(imageSlider.children);

// Navigator buttons
const prevButton = document.querySelector(".left"),
  nextButton = document.querySelector(".right");

const slidesWidth = slides[0].clientWidth;

// arrange slides next to each other
slides.forEach((slide, index) => {
  slide.style.left = slidesWidth * index + "px";
});

// helper function to move slides back and forward
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

// handle next button clicked
nextButton.addEventListener("click", (e) => {
  const currentSlide = imageSlider.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  //   move to the next slide
  moveToSlide(imageSlider, currentSlide, nextSlide);
});

// handle prev button clicked
prevButton.addEventListener("click", (e) => {
  const currentSlide = imageSlider.querySelector(".current_slide");
  const prevSlide = currentSlide.previousElementSibling;
  //   move to the next slide
  moveToSlide(imageSlider, currentSlide, prevSlide);
});
