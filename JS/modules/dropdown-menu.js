export default class DropdownMenu {
    constructor(option, burguer, submenu) {
        this.option = document.querySelector(option);
        this.burguer = document.querySelector(burguer);
        this.submenu = document.querySelector(submenu);
        this.events = ['click', 'touchstart'];
        this.html = document.documentElement;

        this.animaDrop = this.animaDrop.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    removeEventMenuMobile() {
        this.events.forEach((userEvent) => {
            this.option.removeEventListener(userEvent, this.animaDrop); 
        });
    }

    clickOutside() {
        this.html.addEventListener('click', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if(!this.submenu.contains(event.target) && !this.option.contains(event.target)) {
            this.option.classList.remove('ativo');
        }
    }

    animaDrop() {
        this.option.classList.toggle('ativo');
        this.clickOutside();
    }

    addEventListeners() {
        this.events.forEach((userEvent) => {
            this.option.addEventListener(userEvent, this.animaDrop); 
        });
    };

    init() {
        this.addEventListeners();
        this.removeEventMenuMobile();
    }
}