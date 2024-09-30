let currentSlide = 0;
const slides = document.querySelectorAll('.imgpad');
const totalSlides = slides.length;

function changeSlide() {
  slides[currentSlide].style.transform = 'translateX(-100%)';
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.transform = 'translateX(0)';
}

function startAutomaticSlide() {
  setInterval(changeSlide, 3000); 
}

window.onload = startAutomaticSlide;

document.addEventListener('DOMContentLoaded', () => {
  const fadeSections = document.querySelectorAll('.fade-section');

  function handleScroll() {
    const windowHeight = window.innerHeight;

    fadeSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < windowHeight && sectionBottom >= 0) {
        section.classList.add('fade-in');
      } else {
        section.classList.remove('fade-in');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});

function viewprojectbtn() {
  window.location.href = "https://github.com/luckdiamond0/Login-App-"
};

function learnmore() {
  window.location.href = "https://github.com/luckdiamond0/Charmpad"
}