export default function initRolarCarrossel() {
    const carrossel = document.querySelector('.carrossel');
    const leftArrow = document.querySelector('.seta-esquerda')
    const rightArrow = document.querySelector('.seta-direita')
    const pontinhosNav = document.querySelectorAll('.pontinho-carrossel');
    console.log(pontinhosNav)
    // carrossel.style.transform = 'translate3d(-2920px, 0, 0)';


    let deslocamento = 0;
    rightArrow.addEventListener('click', moveRight);

    function moveRight(event) {
            deslocamento = deslocamento - 200;
            carrossel.style.transform = `translate3d(${deslocamento}px, 0, 0)`
            if(deslocamento < -2400) {
                rightArrow.removeEventListener('click', moveRight);
            }
            leftArrow.addEventListener('click', moveLeft);
            animaPontinhos(deslocamento);
        console.log(deslocamento)
    }

    
    function moveLeft() {
        deslocamento += 200;
        carrossel.style.transform = `translate3d(${deslocamento}px, 0, 0)`;
        console.log(deslocamento);
        if(deslocamento === 0) {
            leftArrow.removeEventListener('click', moveLeft);
        }
        rightArrow.addEventListener('click', moveRight);
        animaPontinhos(deslocamento);

    }

    function animaPontinhos(desloc) {
        if(desloc > -1200) {
            pontinhosNav[0].classList.add('ativo');
            pontinhosNav[1].classList.remove('ativo');
            pontinhosNav[2].classList.remove('ativo');
        }

        if(desloc <= -1200 && desloc > -2400) {
            pontinhosNav[0].classList.remove('ativo');
            pontinhosNav[1].classList.add('ativo');
            pontinhosNav[2].classList.remove('ativo');
        }

        if(desloc === -2400) {
            pontinhosNav[0].classList.remove('ativo');
            pontinhosNav[1].classList.remove('ativo');
            pontinhosNav[2].classList.add('ativo');
        }
    }
} 