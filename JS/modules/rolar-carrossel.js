export default function initRolarCarrossel() {
    const carrossel = document.querySelector('.carrossel');
    const leftArrow = document.querySelector('.seta-esquerda')
    // carrossel.style.transform = 'translate3d(-200px, 0, 0)';


    let deslocamento = 0;
    leftArrow.addEventListener('click', moveLeft);

    function moveLeft(event) {
        if(event.target === leftArrow) {
            carrossel.style.transform = 'translate3d(-200px, 0, 0)'
            deslocamento = deslocamento - 200;
        }
        console.log(deslocamento)
    }
} 