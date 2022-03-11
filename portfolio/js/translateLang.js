import i18Obj from './translate.js';

const langBlock = document.querySelector('.lang');
const  elemTranslate =[...document.querySelectorAll('[data-i18]')]
const allLang = [...document.querySelectorAll('.lang__item')];

const toggleLang = (event) => {
  if (event.target.classList.contains('lang__item')) {
    const lang = event.target.textContent;
    elemTranslate.forEach((el) => {
      el.textContent = i18Obj[lang][el.dataset.i18]
      if (el.placeholder) {
        el.placeholder = i18Obj[lang][el.dataset.i18]
        el.textContent = '';
      }
    });
    toogleActiveLang(event);
  }
}

const toogleActiveLang = (event) => {
  allLang.forEach((el) => el.classList.remove('active'));
  event.target.classList.add('active');
}

const langSubscribe = () => {
  langBlock.addEventListener('click', toggleLang);
}

export default langSubscribe;