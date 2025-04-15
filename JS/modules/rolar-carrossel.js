export default class RolarCarrossel {
    constructor(carrossel, leftArrow, rightArrow, pontinhosNav) {
        this.carrossel = document.querySelector(carrossel);
        this.leftArrow = document.querySelector(leftArrow);
        this.rightArrow = document.querySelector(rightArrow);
        this.pontinhosNav = document.querySelectorAll(pontinhosNav);
        this.deslocamento = 0;

        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
    }
    // carrossel.style.transform = 'translate3d(-2920px, 0, 0)';

    init() {
        this.rightArrow.addEventListener('click', this.moveRight);
    }

    // let deslocamento = 0;
    // rightArrow.addEventListener('click', moveRight);

    moveRight(event) {
        this.deslocamento -= 200;
        this.carrossel.style.transform = `translate3d(${this.deslocamento}px, 0, 0)`
        if(this.deslocamento < -2400) {
            this.rightArrow.removeEventListener('click', this.moveRight);
        }
        this.leftArrow.addEventListener('click', this.moveLeft);
        this.animaPontinhos(this.deslocamento, this.pontinhosNav);
        
    }

    
    moveLeft() {
        this.deslocamento += 200;
        this.carrossel.style.transform = `translate3d(${this.deslocamento}px, 0, 0)`;
        if(this.deslocamento === 0) {
            this.leftArrow.removeEventListener('click', this.moveLeft);
        }
        this.rightArrow.addEventListener('click', this.moveRight);
        this.animaPontinhos(this.deslocamento, this.pontinhosNav);

    }

    animaPontinhos(desloc, pontosNav) {
        if(desloc > -1200) {
            pontosNav[0].classList.add('ativo');
            pontosNav[1].classList.remove('ativo');
            pontosNav[2].classList.remove('ativo');
        }

        if(desloc <= -1200 && desloc > -2400) {
            pontosNav[0].classList.remove('ativo');
            pontosNav[1].classList.add('ativo');
            pontosNav[2].classList.remove('ativo');
        }

        if(desloc === -2400) {
            pontosNav[0].classList.remove('ativo');
            pontosNav[1].classList.remove('ativo');
            pontosNav[2].classList.add('ativo');
        }
    }
} 