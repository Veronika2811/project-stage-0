const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
const lang = document.querySelector('.lang');
const langAll = document.querySelectorAll('.lang__item');
let langQuotes = 'en';

async function getQuotes(quote, author, lang) {
  if (lang === 'en') {
    let res = await fetch('https://type.fit/api/quotes');
    let data = await res.json();
    const num = Math.floor(Math.random() * data.length);

    const item = data[num];
    quote.textContent = item.text;
    author.textContent = item.author;
  } else if (lang == "ru") {
    let res = await fetch('./assets/json/quotes.json');
    const dataObject = await res.json()
    let data = dataObject[Math.floor(Math.random() * dataObject.length)];

    quote.textContent = data.text;
    author.textContent = data.author;
  }
}

const quotesSubscribe = () => {
  getQuotes(quote, author, langQuotes)
  btn.addEventListener('click', function() {
    getQuotes(quote, author, langQuotes);
  });

  lang.addEventListener('click', (event) => {
    if (event.target.dataset.lang) {
      langAll.forEach(el => 
        el.classList.remove('lang__active'))
        langQuotes = event.target.dataset.lang
        event.target.classList.add('lang__active')
        getQuotes(quote, author, langQuotes)
    } 
  })
}

export default quotesSubscribe;