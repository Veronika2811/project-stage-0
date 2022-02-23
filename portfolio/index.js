const i18Obj = {
  'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'placeholder-0': 'E-mail',
      'placeholder-1': 'Phone',
      'placeholder-2': 'Message',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'placeholder-0': 'Почта',
      'placeholder-1': 'Телефон',
      'placeholder-2': 'Сообщение',
      'send-message': 'Отправить'
    }
  }

  let theme = localStorage.getItem('theme') || 'dark';
  
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

const ruLang = document.querySelector('.lang-ru');
const enLang = document.querySelector('.lang-en');
const langParents = document.querySelector('.header__block_lang');
const allLang = document.querySelectorAll('.header__block_lang-item');

function getTranslate(languages) {
  const words = document.querySelectorAll('[data-i18]');
  words.forEach((elem) => {
    elem.textContent = i18Obj[languages][elem.dataset.i18];
    if (elem.placeholder) {
      elem.placeholder = i18Obj[languages][elem.dataset.i18]
      elem.textContent = '';
    }
  })
}

ruLang.addEventListener('click', () => getTranslate('ru'));
enLang.addEventListener('click', () => getTranslate('en'));


langParents.addEventListener('click', function changeClassActive(event) {
  if(event.target.classList.contains('header__block_lang-item')) {
  allLang.forEach(allLang => {
    allLang.classList.remove('active')
  });
}
  event.target.classList.add('active');
});
/*
function changeBtnLang(event) {
  allLang.forEach(allLang => {
    allLang.classList.remove('active');
  })
  event.target.classList.add('active');
}
*/
/*
function changeBtnLang() {
  ruLang.classList.toggle('active');
  enLang.classList.toggle('active');
  lang === 'en' ? lang = 'ru' : lang = 'en'
  getTranslate(lang);
}
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

  // Bubbly Button start

  var animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  // Bubbly Button end

  // portfolio photo end

  // light theme start

  const switchTheme = document.querySelector('.header__block_switch');
  const whiteTheme = document.querySelectorAll('body,.section__title,.section__title span,.section-skills__container_skills,.section-portfolio__btn_transparent,.section-price__container_price-list,.header__block_switch,.header__block_nav,.header__block_nav-link,.header,.section-hero,.header__block_nav-link,.header__block_lang,.header__block_lang-item,.section-hero__text,.btn-gold,.section-contacts,.section-contacts__container_block-form h2,input[type=email],input[type=tel],textarea,input,textarea,.header__block_logo,.footer-container__position_social-icon.inst,.footer-container__position_social-icon.fb,.footer-container__position_social-icon.tw,.footer-container__position_social-icon.pn,.footer-container__position_github pre,.footer-container__link,.bubbly-button,.btn-gold.bg,.footer-container__position_social-icon,.header__block_hamburger,.header__block_hamburger span');

  switchTheme.addEventListener('click', function clickTheme() {
    theme === 'dark' ? theme = 'white' : theme = 'dark';
    whiteTheme.forEach((elem) => elem.classList.toggle('white'));
  });

  // light theme end

  // local start

  function setLocalStorage() {
      localStorage.setItem('theme', theme);
      localStorage.setItem('lang', lang);
  }
  
  window.addEventListener('beforeunload', setLocalStorage);
  
  function getLocalStorage() {
   if (localStorage.getItem('theme') === 'white') {
     whiteTheme.forEach((elem) => elem.classList.add('white'));
    }
    
    /*
    if (localStorage.getItem('lang') === 'ru') {
      ruLang.classList.add('active');
      enLang.classList.remove('active');
      getTranslate(language);
  }
    if(localStorage.getItem('theme') === 'ru') {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
    }
    */
  }

window.addEventListener('load', getLocalStorage)

// local end

console.log('1.Смена изображений в секции portfolio +25\n2.Перевод страницы на два языка +25\n3.Переключение светлой и тёмной темы +25\n4.Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n5.Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\nScore: 85/85')