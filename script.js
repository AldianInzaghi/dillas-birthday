const slideshow = document.getElementById("slideshow");
const slides = slideshow.querySelectorAll("img");
let currentIndex = 0;

function showSlide(index) {
  const totalSlides = slides.length;
  currentIndex = (index + totalSlides) % totalSlides;
  slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById("prev").addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

document.getElementById("next").addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // elemen harus terlihat 10% di viewport
  };

  const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-2");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});
