export default class Pesquisa {
    constructor(input, btnLupa, result) {
        this.input = document.querySelector(input);
        this.btnLupa = document.querySelector(btnLupa);
        this.result = document.querySelector(result);

        this.pegarValorInput = this.pegarValorInput.bind(this);
    }

    pegarValorInput() {
        const valor = this.input.value;
        this.showResult(valor);
    }

    showResult(valor) {
        this.result.innerText = `Você buscou por: '${valor}'.`;
        if(valor === '') {
            this.result.innerText = '';
        }
    }

    addEventListeners() {
        this.btnLupa.addEventListener('click', this.pegarValorInput)
    }

    init() {
        this.addEventListeners();
    }
}