export default function alterarFooter() {
    const topicos = document.querySelectorAll('.topicos');
    const tamTela = window.innerWidth;
    const gridMobile = document.querySelectorAll('.grid-mobile');
    const infoAvanti = document.querySelector('.info-avanti');
    const titulos = document.querySelectorAll('.container-titulo');

    if(tamTela <= 767) {
        topicos.forEach(topico => {
            topico.classList.add('inativo')
        });
        gridMobile.forEach(item => {
            item.style.gridTemplateRows = '50px';
            item.classList.add('inativo');
        });
        infoAvanti.classList.add('inativo');
    }


    titulos.forEach(titulo => {
        titulo.addEventListener('click', accordionList);
    });

    function accordionList(event) {
        event.currentTarget.nextElementSibling.classList.toggle('inativo');
        infoAvanti.classList.toggle('inativo');
    }
}