const player = document.querySelector('.video__player');
const video = player.querySelector('.viewer');
const playBtn = player.querySelector('.play-btn');
const playIconControls = player.querySelector('.play');
const progressBar = player.querySelector('.progress');
const volume = player.querySelector('.volume');
const volumeIcon = player.querySelector('.volume-icon');
const videoPoster = player.querySelector('.video__poster');
const buttonBack = player.querySelector('[data-back]');
const buttonForward = player.querySelector('[data-forward]');
let mousedown = false;
let timerId;

function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.classList.toggle('play-btn-big')
        playIconControls.style.backgroundImage = "url('./assets/svg/pause-video-controls.svg')";
        videoPoster.style.display = 'none';
        updateProgress();
        timerId = window.setInterval(updateProgress, 700);
    } else {
        video.pause();
        playBtn.classList.toggle('play-btn-big')
        playIconControls.style.backgroundImage = "url('./assets/svg/play-video-controls.svg')";
    }
}

function skipTenSecondsBack() { 
    video.currentTime -= parseFloat(this.dataset.back);
    playBtn.classList.add('play-btn-back')
    setTimeout(() => {
        playBtn.classList.remove('play-btn-back')
    }, 600)
}

function skipTenSecondsForward() { 
    video.currentTime += parseFloat(this.dataset.forward);
    playBtn.classList.add('play-btn-forward')
    setTimeout(() => {
        playBtn.classList.remove('play-btn-forward')
    }, 600)
}

function btnVolume() { 
    if (video.muted && video.volume > 0) {
        volumeIcon.style.backgroundImage = "url('./assets/svg/video_volume.svg')";
        video.muted = false;
    } else {
        volumeIcon.style.backgroundImage = "url('./assets/svg/volume_no.svg')";
        video.muted = true;
    }
}

function changeVolumeOnMouseMovement(i) { 
    const newVolume = (i.offsetX / volume.offsetWidth).toFixed(2);
    if (newVolume < 0){
        newVolume = 0;
    }
    video.volume = newVolume;
    if (video.volume <= 0){
        volumeIcon.style.backgroundImage = "url('./assets/svg/volume_no.svg')";
        video.muted = true;
    }
    if (video.muted == true && video.volume > 0){
        volumeIcon.style.backgroundImage = "url('./assets/svg/video_volume.svg')";
        video.muted = false;
    }
}

function changeTheSoundWithTheSlider() { 
    if (this.value > 0) {
        volumeIcon.style.backgroundImage = "url('./assets/svg/video_volume.svg')";
        video.muted = false;
    } else {
        volumeIcon.style.backgroundImage = "url('./assets/svg/volume_no.svg')";
        video.muted = true;
    }
    video[this.name] = this.value;
}

function changeBackgroundForVolume(i) { 
    const newVolume = (i.offsetX / volume.offsetWidth);
    volume.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
}

function updateProgress() { 
    const progress1 = video.currentTime / video.duration;
    progressBar.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(progress1 * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(progress1 * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
    progressBar.value = Math.floor(progress1 * 1000) / 10;
    if (progressBar.value == 100) {
        videoPoster.style.display = 'block';
        playBtn.classList.add('play-btn-big')
    }
}

function changeTheProgressVideoWithTheSlider(i) { 
    const newProgress = (i.offsetX / progressBar.offsetWidth) * video.duration;
    const newProgress2 = (i.offsetX / progressBar.offsetWidth);
    progressBar.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newProgress2 * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newProgress2 * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
    video.currentTime = newProgress;
}

function clearIntervalUpdate(){
    clearInterval(timerId);
}

function setIntervalUpdate(){
    timerId = window.setInterval(updateProgress, 700);
}

// Mobile function

function changeBackgroundForVolumeMobile(i) { 
    const newVolume = (this.value);
    volume.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) ' + Math.floor(newVolume * 1000) / 10 + '%, rgb(200, 200, 200) 100%)';
}

function changeTheProgressVideoWithTheSliderMobile(i) { 
    const newProgress = (this.value) * video.duration / 100;
    const newProgress2 = (this.value);
    progressBar.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + newProgress2 + '%, rgb(200, 200, 200) ' + newProgress + '%, rgb(200, 200, 200) 100%)';
    video.currentTime = newProgress;
}



const videoSubscribe = () => {
    playBtn.addEventListener('click', togglePlay);
    playIconControls.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    buttonBack.addEventListener('click', skipTenSecondsBack);
    buttonForward.addEventListener('click', skipTenSecondsForward);

    volumeIcon.addEventListener('click', btnVolume);

    volume.addEventListener('mousemove', (i) => mousedown && changeVolumeOnMouseMovement(i));

    volume.addEventListener('click', changeTheSoundWithTheSlider);

    volume.addEventListener('click', changeBackgroundForVolume);
    volume.addEventListener('mousemove', (i) => mousedown && changeBackgroundForVolume(i));
    volume.addEventListener('mousedown', () => mousedown = true);
    volume.addEventListener('mouseup', () => mousedown = false);

    progressBar.addEventListener('mousedown', changeTheProgressVideoWithTheSlider);
    progressBar.addEventListener('mousemove', (i) => mousedown && changeTheProgressVideoWithTheSlider(i));
  
    progressBar.addEventListener('mousedown', () => mousedown = true, clearIntervalUpdate);
    progressBar.addEventListener('mouseup', () => mousedown = false, setIntervalUpdate);

    //Mobile event
    volume.addEventListener('touchend', changeTheSoundWithTheSlider); //Mobile event
    volume.addEventListener('touchmove', changeTheSoundWithTheSlider); //Mobile event

    volume.addEventListener('touchend', changeBackgroundForVolumeMobile); //Mobile event
    volume.addEventListener('touchmove', changeBackgroundForVolumeMobile); //Mobile event*/

    progressBar.addEventListener('touchend', changeTheProgressVideoWithTheSliderMobile); //Mobile event
    progressBar.addEventListener('touchmove', changeTheProgressVideoWithTheSliderMobile); //Mobile event
}

export default videoSubscribe();