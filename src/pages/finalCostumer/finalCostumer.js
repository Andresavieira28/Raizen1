import data from '../../data/products.js';

const products = data.products;

export default () => {
    const createScreen = document.createElement('section');
    const templateScreen = `
    <section class='screenCostumer'>
        <header class ='sectionLogo'>
            <img src='img/logoRaízen.png' class='logoCostumer' alt='Logo Raízen'>
        </header>
        <section>
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
         <section>
             <img class="product-img" src="${product.image}" alt="açúcar"></br>
             <strong>Origem:</strong> ${product.origin}</br>
             <strong>Fazenda:</strong> ${product.farm}</br>
             <strong>Rastreabilidade:</strong> ${product.traceability}</br>
             <img class="product-img" src="${product.certification}" alt="açúcar"></br>
         </section>
     `;
        return template;
    });
    return arrayProduct.join("");
}