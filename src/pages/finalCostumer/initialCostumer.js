/* eslint-disable no-console */
import data from '../../data/products.js';

export default () => {
    const products = data.products;
    const initialPage = document.createElement('section');
    const templateLote = `
    <section class="bodyFinalCostumer">
        <header class="headerFinalCostumer">
            <img src='img/logoRaízen.png' class='logoCostumer' alt='Logo Raízen'>
            <section class='linha-horizontal'></section>
        </header>
    <section>
    <section class="info-lote">
        <input class="input-lote" id="lote-sugar" type="text" placeholder="Digite o número do Lote">
        <button id="btn-lote">PESQUISAR</button>
        <p id="error"></p>
    </section>
    </section>`;

    initialPage.innerHTML = templateLote;

    const inputLote = initialPage.querySelector('#lote-sugar');
    const btnSearch = initialPage.querySelector('#btn-lote');
    //const errorLote = initialPage.querySelector('#error');
    //btnSearch.addEventListener('click', getLote(products, inputLote.value));
    btnSearch.addEventListener('click', () => {
        getLote(products, inputLote.value)
        window.location.hash = '#finalCostumer';
        let thisPage = new URL(window.location.href);
        thisPage.searchParams.append('yourKey', 'someValue');
        console.log(thisPage);
    });



    return initialPage;
}

function getLote(products, lote) {
    const arrayLote = products.filter((product) => product.lote === lote);
    return arrayLote;
}
