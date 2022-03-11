const seasonsArr = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
  for( let season of seasonsArr) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/seasons/${season}/${i}.jpg`;
    }
  }
}

const preloadSubscribe = () => {
  window.addEventListener('load', preloadImages)
}

export default preloadSubscribe;