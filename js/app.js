gsap.registerPlugin(ScrollTrigger);

// for production only
window.onerror = function(message, url, lineNumber) {  
  return true;
};

// web accessibility
function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab);

function showHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');
  const navigationLinks = document.querySelectorAll('.navigation__link');

  const handleClick = function() {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
    })
  }

  hamburger.addEventListener('click', handleClick);
};

function changeSlide() {
  const slidesContainer = document.querySelector('.boxes');
  const slide = document.querySelector('.box');
  const prevButton = document.querySelector('.slider__btn--left');
  const nextButton = document.querySelector('.slider__btn--right');

  nextButton.addEventListener('click', function() {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener('click', function() {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
};

function showAnswer() {
  const buttons = document.querySelectorAll('.faq__btn');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      let panel = this.nextElementSibling;

      if(panel.style.display === 'block') {
        panel.style.display = 'none';
        this.setAttribute('aria-expanded', 'false');
        this.firstElementChild.src = './img/caret-down-solid.svg';
      } else {
        panel.style.display = 'block';
        this.setAttribute('aria-expanded', 'true');
        this.firstElementChild.src = './img/caret-up-solid.svg';
      }
    })
  }
};

function scrollEffect() {
  const animateItemsLeft = document.querySelectorAll('.animate-left');
  const animateItemsRight = document.querySelectorAll('.animate-right');

  for (let i = 0; i < animateItemsLeft.length; i++) {
    gsap.fromTo(animateItemsLeft[i], {x: '-10%', opacity: 0}, {x: '0', opacity: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
      trigger: animateItemsLeft[i],
      start: 'top 80%'
    }})
  }

  for (let i = 0; i < animateItemsRight.length; i++) {
    gsap.fromTo(animateItemsRight[i], {x: '10%', opacity: 0}, {x: '0', opacity: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
      trigger: animateItemsRight[i],
      start: 'top 80%'
    }})
  }
};

function showAnimations() {
  const mobile = window.matchMedia('screen and (min-width: 1200px)');

  if (mobile.matches) {
    scrollEffect();
  }

  mobile.addListener( function(mobile) {
      if (mobile.matches) {
        scrollEffect();
      }
  });
};

const init = function() {
  showHamburgerMenu();
  changeSlide();
  showAnswer();
  showAnimations();
};

document.addEventListener('DOMContentLoaded', init);