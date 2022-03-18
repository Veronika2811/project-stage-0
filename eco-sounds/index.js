// burger menu start
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu'); 

function toggleMenu() {
  burger.classList.toggle('open');
    menu.classList.toggle('open'); 
};

burger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('.menu__item')) {
      burger.classList.remove('open');
        menu.classList.remove('open');
    };
};

menu.addEventListener('click', closeMenu);

// burger menu end

// image start

const playerImage = document.querySelector('.player__image');
const menuList = document.querySelector('.header__container');
const menuItem = document.querySelectorAll('.menu__item');
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.btn__play');
let isPlay = false;

menuList.addEventListener('click', changeImage);

function changeImage(event) {
  if(event.target.dataset.item == "forest") {
    playerImage.style.backgroundImage = "url('./assets/img/forest.jpeg')";
    audio.src = './assets/audio/forest.mp3';
    audio.currentTime = 0;
    playAudio(); 
  }
  
  else if(event.target.dataset.item == "solovey") {
    playerImage.style.backgroundImage = "url('./assets/img/solovey.jpeg')";
    audio.src = './assets/audio/solovey.mp3';
    audio.currentTime = 0;
    playAudio(); 
  }

  else if(event.target.dataset.item == "drozd") {
    playerImage.style.backgroundImage = "url('./assets/img/drozd.jpeg')";
    audio.src = './assets/audio/drozd.mp3';
    audio.currentTime = 0;
    playAudio();
  }

  else if(event.target.dataset.item == "zarynka") {
    playerImage.style.backgroundImage = "url('./assets/img/zarynka.jpeg')";
    audio.src = './assets/audio/zarynka.mp3';
    audio.currentTime = 0;
    playAudio();
  }

  else if(event.target.dataset.item == "javoronok") {
    playerImage.style.backgroundImage = "url('./assets/img/javoronok.jpeg')";
    audio.src = './assets/audio/javoronok.mp3';
    audio.currentTime = 0;
    playAudio();
  }

  else if(event.target.dataset.item == "slavka") {
    playerImage.style.backgroundImage = "url('./assets/img/slavka.jpeg')";
    audio.src = './assets/audio/slavka.mp3';
    audio.currentTime = 0;
    playAudio();
  }  
}

menuList.addEventListener('click', function changeClassActive(event) {
  if(event.target.classList.contains('menu__item')) {
    menuItem.forEach(el => {
      el.classList.remove('active')
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