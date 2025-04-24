import DropdownMenu from "./dropdown-menu.js";
export default function menuMobile() {
    const hamburguer = document.querySelector('.menumobile-container');
    const menuMobile = document.querySelector('.nav-options');
    const html = document.documentElement;

    hamburguer.addEventListener('click', ativaMenu);

    function ativaMenu() {
        menuMobile.classList.toggle('ativo');
        html.addEventListener('click', clickOutside);
    }

    function clickOutside(event) {
        if(!menuMobile.contains(event.target) && !hamburguer.contains(event.target)) {
            console.log('God')
            menuMobile.classList.remove('ativo')
        }
    }



    const dropdownmenu = new DropdownMenu();

}