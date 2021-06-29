// sticky Header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(scrollY > 0){
        header.classList.add('sticky')
    }else if(scrollY == 0){
        header.classList.remove('sticky')
    }
});
