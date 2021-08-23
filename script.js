// sticky Header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(scrollY > 0){
        header.classList.add('sticky')
    }else if(scrollY == 0){
        header.classList.remove('sticky')
    }
});

// Contact form validation

const submitBtn = document.querySelector('.submit-btn');

const checkInputs = () => {
    const formInputs = document.getElementsByTagName('input');
    const textArea = document.getElementById('textArea');
    const smallTxt = document.querySelector('small');

    for(let i = 0; i < formInputs.length; i++){
        formInputs[i].value === '' ? formInputs[i].classList.add('error') : true;      
    }

    textArea.value === '' ? textArea.classList.add('error') : true;
    textArea.value === '' ? smallTxt.classList.add('error') : true;
    
}

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    checkInputs();

})
