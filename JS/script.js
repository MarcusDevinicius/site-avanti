import RolarCarrossel from "./modules/rolar-carrossel.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import Pesquisa from "./modules/pesquisa.js";
import alterarFooter from "./modules/altera-footer.js";


const rolarcarrossel1 = new RolarCarrossel('.section-1 .carrossel', '.section-1 .seta-esquerda', '.section-1 .seta-direita', '.section-1 .pontinho-carrossel');

rolarcarrossel1.init();

const rolarcarrossel2 = new RolarCarrossel('.section-5-carrossel .carrossel', '.section-5-carrossel .seta-esquerda', '.section-5-carrossel .seta-direita', '.section-5-carrossel .pontinho-carrossel');

rolarcarrossel2.init();

const dropdownmenu = new DropdownMenu('[data-menu="option-1"]', '.hamburguer', '[data-menu="submenu-1"]');
dropdownmenu.init();

const dropdownmenu2 = new DropdownMenu('[data-menu="option-2"]', '.hamburguer', '[data-menu="submenu-2"]');
dropdownmenu2.init();

const pesquisa = new Pesquisa('[data-search="input"]', '[data-search="btn"]', '[data-search="result"]');
pesquisa.init();

alterarFooter();