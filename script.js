// sticky Header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(scrollY > 0){
        header.classList.add('sticky')
    }else if(scrollY == 0){
        header.classList.remove('sticky')
    }
});


//Window animation
const homeText = document.querySelector('.home-txt');

window.onload = function animationLoad () {
    homeText.classList.add('show');
}
animationLoad();

