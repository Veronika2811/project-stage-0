const hamburger = document.querySelector('.burger');
const burger = document.querySelector('.menu'); 
const burgerLinks = [...document.querySelectorAll('.menu__link')]

function toggleMenu() {
    hamburger.classList.toggle('open');
    burger.classList.toggle('open'); 
};

const burgerSubscribe = () => {
    hamburger.addEventListener('click', toggleMenu);
    burgerLinks.forEach(el => {
        el.addEventListener('click', toggleMenu)
    });
}

export default burgerSubscribe;