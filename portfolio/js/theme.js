const whiteTheme = ['body', 'header', 'logo', 'menu__link', 'lang', 'lang__item', 'lang__item-active', 'header__switch', 'burger__line', 'burger', 'menu', 'hero', 'btn', 'section__title', 'section__title span', 'name', 'btn__filter', 'bubbly-button', 'bubbly-button-active', 'btn-price', 'contacts', 'contact__title', 'contact__input', 'contact__textarea', 'contact__input-white::placeholder', 'contact__textarea-white::placeholder', 'github__item', 'rsschool__link', 'social__link-inst', 'social__link-fb', 'social__link-tw', 'social__link-pn', 'socials__link'];
const switchTheme = document.querySelector('.header__switch');

const toggleTheme = () => {
  setLocalStorageInfo();
  changeTheme();
}

export const changeTheme = () => {
  const item = [...document.querySelectorAll(`.${whiteTheme.join(',.')}`)];

  item.forEach((el) => {
    const classToChange = whiteTheme
    .filter((classes) => classes === [...el.classList]
    .find((elem) => classes === elem)
    )
    classToChange.forEach((elem) => el.classList.toggle(`${elem}-white`));
  })
}

const setLocalStorageInfo = () => {
  const actualTheme = JSON.parse(localStorage.getItem('saveSettings')).theme;
  const actualLang = JSON.parse(localStorage.getItem('saveSettings')).lang;
  
  const data = JSON.stringify({
    'lang': actualLang,
    'theme': !actualTheme ? 'white' : null,
  });
  localStorage.setItem('saveSettings', data);
}

export const themeSubscribe = () => {
  switchTheme.addEventListener('click', toggleTheme);
}


