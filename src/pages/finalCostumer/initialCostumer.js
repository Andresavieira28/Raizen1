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
    </section>
    </section>`;

    initialPage.innerHTML = templateLote;

    const inputLote = initialPage.querySelector('#lote-sugar');
    const btnSearch = initialPage.querySelector('#btn-lote');
    btnSearch.addEventListener('click', getLote(products, inputLote.value));

    return initialPage;
}

function getLote(products, lote) {
    const arrayLote = products.filter((product) => product.lote === lote);
    return arrayLote;
}

