const player = document.querySelector('.buttons__play');
const audio = document.querySelector('.audio');
const prevBtn = document.querySelector('.btn__prev');
const playBtn = document.querySelector('.btn__play');
const nextBtn = document.querySelector('.btn__next');
const imgSrc = document.querySelector('.img__src');

const songs = ['Skylar Grey - I Know You', 'Jessie Ware - Meet Me In The Middle', 'Vaults - One Last Night'];

// Song default
let songIndex = 0;

// Load song
function loadSong(song) {
  audio.src = `./assets/audio/${song}.mp3`;
}

// Play song
function playSong() {
  player.classList.add('play')
  imgSrc.src = './assets/svg/pause.svg'
  audio.play();
}

// Pause song
function pauseSong() {
  player.classList.remove('play')
  imgSrc.src = './assets/svg/play.svg'
  audio.pause();
}

// Next song
function nextSong() {
  songIndex ++;
  if (songIndex > songs.length -1) {
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}

//Prev song
function prevSong() {
  songIndex --;
  if (songIndex < 0) {
    songIndex = songs.length -1
  }
  loadSong(songs[songIndex])
  playSong()
}

const musicSubscribe = () => {
    playBtn.addEventListener('click', () => {
        const isPlay = player.classList.contains('play')
        if (isPlay) {
          pauseSong()
        } else {
          playSong()
        }
    })
    nextBtn.addEventListener('click', nextSong)
    prevBtn.addEventListener('click', prevSong)
}
    
export default musicSubscribe;