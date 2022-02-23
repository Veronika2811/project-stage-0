const btn = document.querySelector('.btn');
const bgImage = document.querySelector('.body');
const lang = document.querySelector('.lang');

function imageUpload() {
    bgImage.style.backgroundImage = `url('./assets/img/${Math.floor(Math.random() * 20)}.jpeg')`;
}

const imageSubscribe = () => {
    btn.addEventListener('click', imageUpload)
    lang.addEventListener('click', imageUpload) 
}

export default imageSubscribe;