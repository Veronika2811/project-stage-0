// hamburger menu start
const hamburger = document.querySelector('.header__hamburger');
const burger = document.querySelector('.header__nav'); 

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open');
    burger.classList.toggle('open'); 
};

burger.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('.nav-item')) {
        hamburger.classList.remove('open');
        burger.classList.remove('open');
    };
};

// hamburger menu end

// image start

const bgImage = document.querySelector('.bg-player');
const bgBtns = document.querySelector('.header__container');
const btn = document.querySelectorAll('.nav-item');
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play');
let isPlay = false;

bgBtns.addEventListener('click', changeImage);

function changeImage(event) {
  if(event.target.dataset.item == "forest") {
    bgImage.style.backgroundImage = "url('./assets/img/forest.jpeg')";
    audio.src = './assets/audio/forest.mp3';
    audio.currentTime = 0;
    playAudio(); 
  }
  
  else if(event.target.dataset.item == "solovey") {
    bgImage.style.backgroundImage = "url('./assets/img/solovey.jpeg')";
    audio.src = './assets/audio/solovey.mp3';
    audio.currentTime = 0;
    playAudio(); 
  }

  else if(event.target.dataset.item == "drozd") {
    bgImage.style.backgroundImage = "url('./assets/img/drozd.jpeg')";
    audio.src = './assets/audio/drozd.mp3';
    audio.currentTime = 0;
    playAudio();
  }

  else if(event.target.dataset.item == "zarynka") {
    bgImage.style.backgroundImage = "url('./assets/img/zarynka.jpeg')";
    audio.src = './assets/audio/zarynka.mp3';
    audio.currentTime = 0;
    playAudio();
  }

  else if(event.target.dataset.item == "javoronok") {
    bgImage.style.backgroundImage = "url('./assets/img/javoronok.jpeg')";
    audio.src = './assets/audio/javoronok.mp3';
    audio.currentTime = 0;
    playAudio();
  }

  else if(event.target.dataset.item == "slavka") {
    bgImage.style.backgroundImage = "url('./assets/img/slavka.jpeg')";
    audio.src = './assets/audio/slavka.mp3';
    audio.currentTime = 0;
    playAudio();
  }  
  }

  bgBtns.addEventListener('click', function changeClassActive(event) {
    if(event.target.classList.contains('nav-item')) {
      btn.forEach(btn => {
        btn.classList.remove('active')
    });
  }
    event.target.classList.add('active');
  });

  // image end

  // play start

const songs = ["forest", "solovey", "drozd", "javoronok", "zarynka", "slavka"];

let songIndex = 0;

function loadSong(song) {
  audio.src = `./assets/audio/${song}.mp3`;
};

loadSong(songs[songIndex]);

function playAudio() {
  audio.classList.add('play')
  playBtn.style.backgroundImage = "url('./assets/svg/pause.svg')";
  audio.play();
}

function pauseAudio() {
  audio.classList.remove('play')
  playBtn.style.backgroundImage = "url('./assets/svg/play.svg')";
  audio.pause();
}

playBtn.addEventListener('click', (changeAudio) => {
  const isPlaying = audio.classList.contains('play')
 if(isPlaying) {
   pauseAudio()
 } else {
   playAudio()
 }
});

// play start

function hoverBubbleBtnsEffect() {
  const bubbleButtons = document.querySelectorAll('.bubble-button');

  bubbleButtons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      e.target.classList.toggle('animate');
    });

    btn.addEventListener('mouseleave', (e) => {
      e.target.classList.toggle('animate');
    });
  });
}

// play end

// progress bar start

const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress__container');

function updateProgress(e) {
 const {duration, currentTime} = e.srcElement;
 const progressPerсent = (currentTime / duration) * 100;
 progress.style.width = `${progressPerсent}%`
 if (progressPerсent === 100) {
  pauseAudio();
  progress.style.width = 0;
}
}

audio.addEventListener('timeupdate', updateProgress);

// progress bar end

// set progress start

function setProgress(e) {
const width = this.clientWidth;
const clickX = e.offsetX;
const duration = audio.duration
audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener('click', setProgress);

// set progress end

console.log('1. Вёрстка +10\n-есть 10 интерактивных элементов, с которыми пользователи могут взаимодействовать. Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации\n-в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n2.При кликах по интерактивным элементам меняется изображение +10\n3.При кликах по интерактивным элементам меняется звук +10\n4.Активный в данный момент интерактивный элемент выделяется стилем +10\n5.Кнопка Play/Pause +20\n-есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10\n-внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10\n6.Высокое качество оформления приложения и дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10(progress-bar, photo, style button)');