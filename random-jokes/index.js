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

/*
const url = 'https://type.fit/api/quotes';
const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');

btn.addEventListener('click', getData)

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

getData();

function showData(data) {
  const num = Math.floor(Math.random() * data.length);
  const item = data[num];
  const quote = item.text;
  const authorName = item.author;
  text.textContent = quote;
  author.textContent = authorName;
}
*/