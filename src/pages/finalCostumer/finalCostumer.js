import data from '../../data/products.js';

const products = data.products;

export default () => {
    const createScreen = document.createElement('section');
    const templateScreen = `
    <section class="bodyFinalCostumer">
        <header class="headerFinalCostumer">
            <img src='img/logoRaízen.png' class='logoCostumer' alt='Logo Raízen'>
            <section class='linha-horizontal'></section>
        </header>
        <section class="list-Products">
            <div id='query-template'>
                ${createCard(products)}
            </div>
        </section>
    </section>`;

    createScreen.innerHTML = templateScreen;
    return createScreen;
}
function createCard(products) {
    const arrayProduct = products.map((product) => {
        const template = `
         <section class='sectionCard'>
            <img class="product-img" src="${product.image}" alt="açúcar">
            <div class='textCard'><strong>Origem:</strong> ${product.origin}</div>
            <div class='textCard'><strong>Fazenda:</strong> ${product.farm}</div>
            <div class='textCard'><strong>Rastreabilidade:</strong> ${product.traceability}</div>
            <p><strong>Certificações:</strong></p>
            <div><img class="certification-img" src="${product.certification}" alt="Certificado"></div>
         </section>
     `;

        return template;
    });
    return arrayProduct.join("");
}