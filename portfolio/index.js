// hamburger menu start
const hamburger = document.querySelector('.header__block_hamburger');
const burger = document.querySelector('.header__block_nav'); 

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open');
    burger.classList.toggle('open'); 
};

burger.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('.header__block_nav-link')) {
        hamburger.classList.remove('open');
        burger.classList.remove('open');
    };
};

// hamburger menu end

// lang start
/*
import i18Obj from './translate.js';


const enLang = document.querySelector('.lang-en');
const ruLang = document.querySelector('.lang-ru');
enLang.addEventListener('click', () => { getTpanslate('en')});
ruLang.addEventListener('click', () => { getTpanslate('ru')});
*/
// lang end


// portfolio photo start

const portfolioImages = document.querySelectorAll('.section-portfolio__album_photo');
const portfolioBtns = document.querySelector('.section-portfolio__btn');
const btn = document.querySelectorAll('.section-portfolio__btn_transparent');

portfolioBtns.addEventListener('click', changeImage);

function changeImage(event) {
  if(event.target.dataset.season == "winter") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
  }

  else if(event.target.dataset.season == "spring") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
  }

  else if(event.target.dataset.season == "summer") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
  }

  else if(event.target.dataset.season == "autumn") {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
  }
  }

  portfolioBtns.addEventListener('click', function changeBtn(event) {
    btn.forEach(btn => {
      btn.classList.remove('active');
    })
    event.target.classList.add('active');
  });

  // portfolio photo end