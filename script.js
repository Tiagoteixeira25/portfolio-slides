const slides = [
  "slides/slide1.png",
  "slides/slide2.png",
  "slides/slide3.png",
  "slides/slide4.png",
  "slides/slide5.png",
  "slides/slide6.png",
  "slides/slide7.png",
  "slides/slide8.png",
  "slides/slide9.png"
];

let current = 0;
const img = document.getElementById("slide");
const counter = document.getElementById("counter");

function updateSlide() {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = slides[current];
    img.style.opacity = 1;
    counter.textContent = `${current + 1} / ${slides.length}`;
  }, 200);
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    current = (current + 1) % slides.length;
    updateSlide();
  } else if (e.key === "ArrowLeft") {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide();
  }
});
