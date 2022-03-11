import burgerSubscribe from './js/burgerMenu.js'
import seasonSubscribe from './js/changeSeason.js'
import preloadSubscribe from './js/preloadImages.js'
import langSubscribe from './js/translateLang.js'
import { themeSubscribe, changeTheme } from './js/theme.js'
import videoSubscribe from './js/videoPlayer.js'

window.onload = () => {
  const data = JSON.stringify({
    'theme': null
  });

  if (!localStorage.getItem('saveSettings')) {
    localStorage.clear();
    localStorage.setItem('saveSettings', data);
  }

  const actualTheme = JSON.parse(localStorage.getItem('saveSettings')).theme;
  actualTheme ? changeTheme() : null;

  burgerSubscribe();
  seasonSubscribe();
  preloadSubscribe();
  langSubscribe();
  themeSubscribe();
}