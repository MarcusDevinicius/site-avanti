import RolarCarrossel from "./modules/rolar-carrossel.js";

// initRolarCarrossel();

const rolarcarrossel1 = new RolarCarrossel('.section-1 .carrossel', '.section-1 .seta-esquerda', '.section-1 .seta-direita', '.section-1 .pontinho-carrossel');

rolarcarrossel1.init();

const rolarcarrossel2 = new RolarCarrossel('.section-5-carrossel .carrossel', '.section-5-carrossel .seta-esquerda', '.section-5-carrossel .seta-direita', '.section-5-carrossel .pontinho-carrossel');

rolarcarrossel2.init();
