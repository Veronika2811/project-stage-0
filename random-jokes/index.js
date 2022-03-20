import digitalClock from './js/digitalClock.js'
import musicSubscribe from './js/musicPlayer.js'
import imageSubscribe from './js/backgroundQuote.js'
import quotesSubscribe from './js/randomQuotes.js'

window.onload = () => {
  digitalClock();
  musicSubscribe();
  imageSubscribe();
  quotesSubscribe();
}