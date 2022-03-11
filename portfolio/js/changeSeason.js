const portfolioBtns = document.querySelector('.portfolio__btn');
const portfolioImages = [...document.querySelectorAll('.portfolio__image')];
const activBtns = document.querySelectorAll('.btn__filter');

const toggleSeason = (event) => {
  if (event.target.hasAttribute('data-season')) {
    portfolioImages.forEach((el, index) => {
      el.src = `./assets/img/seasons/${event.target.dataset.season}/${index + 1}.jpg`;
    });
    toggleActivBtn(event);
  }
}

const toggleActivBtn = (event) => {
  activBtns.forEach((el) => {
    el.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Bubbly Button start

let animateButton = function(e) {

  e.preventDefault;
  
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

let bubblyButtons = document.getElementsByClassName('bubbly-button');

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

// Bubbly Button end

const seasonSubscribe = () => {
  portfolioBtns.addEventListener('click', toggleSeason);
}

export default seasonSubscribe;