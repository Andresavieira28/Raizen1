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
        <div id='printLote'></div>
        <p id="error"></p>
    </section>`;

    initialPage.innerHTML = templateLote;

    const listLote = initialPage.querySelector('#printLote');

    const inputLote = initialPage.querySelector('#lote-sugar');
    console.log(inputLote);
    const btnSearch = initialPage.querySelector('#btn-lote');
    console.log(btnSearch);
    btnSearch.addEventListener('click', () => {
        const getLoteArray = getLote(products, inputLote.value)
        listLote.innerHTML = createCard(getLoteArray);
    });

    return initialPage;
}

function getLote(products, lote) {
    const arrayLote = products.filter((product) => product.lote === lote);
    return arrayLote;
}

function createCard(products) {
    const arrayProduct = products.map((product) => {
        const template = `
         <section class='sectionCard'>
            <img class="product-img" src="${product.image}" alt="açúcar">
            <div class='textCard'><strong>Lote:</strong> ${product.lote}</div>
            <div class='textCard'><strong>Origem:</strong> ${product.origin}</div>
            <div class='textCard'><strong>Atributos de sustentabilidade:</strong> ${product.sustainability}</div>
            <div class='textCard'><strong>Fazenda:</strong> ${product.farm}</div>
            <div class='textCard'><strong>Rastreabilidade:</strong> ${product.traceability}</div>
            <p><strong>Certificações:</strong></p>
            <div><img class="certification-img" src="${product.certification}" alt="Certificado"></div>
         </section>
     `;

        return template;
    });
    return arrayProduct.join('');
}
