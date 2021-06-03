
const $body = document.getElementById('body')
const $loaderContainer = document.getElementById('loaderContainer')
const $loader = document.getElementById('loader')

const slideLeft = {
    origin: 'left',
    distance: '50px',
    delay: 300,
    duration: 800,
    interval: 300,
    mobile: false,

};

const apd = {
    delay: 500,
    duration: 500,
    interval: 300,
    mobile: false,

};

const slideUp = {
    origin: 'bottom',
    distance: '50px',
    delay: 300,
    duration: 800,
    interval: 300,
    mobile: false,

}

window.addEventListener('load', () => {
    setTimeout(() => {
        $loader.style.display = 'none'
        $loaderContainer.style.display = 'none'
        $loader.setAttribute('class', 'hidden')
        $loaderContainer.setAttribute('class', 'hidden')
        ScrollReveal().reveal('.scroll-reveal-slide-left', slideLeft);
        ScrollReveal().reveal('.scroll-reveal-apd', apd);
        ScrollReveal().reveal('.scroll-reveal-bottom', slideUp);
    }, 1000)
})


document.addEventListener('DOMContentLoaded', () => {
    const $sidenav = document.querySelector('.sidenav');
    const instances = M.Sidenav.init($sidenav, {
        edge: 'right',
        draggable: true,
        preventScrolling: true,
    });
});