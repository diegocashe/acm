
const $body = document.getElementById('body')
const $loaderContainer = document.getElementById('loaderContainer')
const $loader = document.getElementById('loader')

const slideLeft = {
    origin: 'left',
    distance: '50px',
    duration: 800,
    interval: 300,
    reset: true,
};

const apd = {
    duration: 800,
    interval: 300,
};

window.addEventListener('load', () => {
    setTimeout(() => {
        $loader.style.display = 'none'
        $loaderContainer.style.display = 'none'
        $loader.setAttribute('class', 'hidden')
        $loaderContainer.setAttribute('class', 'hidden')
        ScrollReveal().reveal('.scroll-reveal-slide-left', slideLeft);
        ScrollReveal().reveal('.scroll-reveal-slide-left', slideLeft);

    }, 1000)
})
