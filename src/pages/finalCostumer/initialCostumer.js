/* eslint-disable no-console */
import data from '../../data/products.js';

export default () => {
    const products = data.products;
    const initialPage = document.createElement('section');
    const templateLote = `
        <header class="headerFinalCostumer">
            <img src='img/logoRaízen.png' class='logoCostumer' alt='Logo Raízen'>
            <p class='textCompromisso'>Nosso compromisso é com você!</p>
        </header>
        <div class='linha-horizontal'></div>
        <section class="info-lote">
            <input class="input-lote" id="lote-sugar" type="text" placeholder="Digite o número do Lote">
            <button id="btn-lote">PESQUISAR</button>
            <div id='printLote'></div>
        </section>`;

    initialPage.innerHTML = templateLote;


    const listLote = initialPage.querySelector('#printLote');
    const inputLote = initialPage.querySelector('#lote-sugar');
    const btnSearch = initialPage.querySelector('#btn-lote');
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
            <div class='textCard'><strong>Fazenda:</strong> ${product.farm}</div>
            <div class='textCard'><strong>Atributos de sustentabilidade:</strong> ${product.sustainability}</div>
            <p><strong>Certificações:</strong></p>
            <div><img class="certification-img" src="${product.certification}" alt="Certificado"></div>
            <div class='textCard'><strong>Rastreabilidade:</strong></div>
            <div class='textCard'><strong>Origem:</strong> ${product.origin}</div>
            <a href='${product.geolocation}' style="color:#781e77" target="blank"><span class="material-symbols-outlined" style="color:#781e77">location_on</span>Localização da origem do açucar</a>
         </section>
     `;

        return template;
    });
    return arrayProduct.join('');
}
