/* eslint-disable no-console */
import data from '../../data/products.js';

export default () => {
    const products = data.products;
    const initialPage = document.createElement('section');
    const templateLote = `
    <header class="headerDesktop">
        <a href="https://www.raizen.com.br/"><img src='img/logoRaízen.png' id="logoLogin" alt="raizen"></a>
        <nav class='navDesktop'>
        <ul class='ulNavDesktop'>
            <div class="liBoxDesktop">
            <li><a href='#searchCompany'> GRANDES CLIENTES </a></li>
            <li><a href='#initialCostumer'> RASTREIE SEU PRODUTO </a></li>
            </div>
        </ul>
        </nav>
    </header>
    <section class='imgBoasvindas'>
        <p class='textoBoasVindas'>Somos uma empresa integrada referência global em bioenergia e com amplo portfólio de produtos renováveis.</p>
        <p class='textoBoasVindas'>Descubra de onde vem o seu produto inserindo o número de lote.</p>
    </section>
    <section class="info-lote">
        <input class="input-lote" id="lote-sugar" type="text" placeholder="Digite o número do Lote">
        <button class="btn-search-lote" id="btn-lote">Pesquisar</button>
    </section>
    <section>
        <div id='printLote'></div>
    </section>`;

    initialPage.innerHTML = templateLote;


    const listLote = initialPage.querySelector('#printLote');
    const inputLote = initialPage.querySelector('#lote-sugar');
    const btnSearch = initialPage.querySelector('#btn-lote');
    btnSearch.addEventListener('click', () => {
        const getLoteArray = getLote(products, inputLote.value);
        listLote.innerHTML = createCard(getLoteArray);

        listLote.querySelectorAll('#certificationCard').forEach(card => {
            const descriptionCertification = card.querySelector('#textCertification');
            card.addEventListener('mouseenter', () => {
                descriptionCertification.style.display = "flex";
            });

            card.addEventListener('mouseleave', () => {
                descriptionCertification.style.display = "none";
            });
         });    
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
            <div class="cardImage">
                <img class="product-img" src="${product.image}" alt="açúcar">
            </div>
            <div class='infoProducts'>
                <div class='textCard'><strong>Lote:</strong> ${product.lote}</div>
                ${product.farms.map(farm => {
                    return `<div class='textCard'><strong>Fazenda: </strong>${farm}</div>`;
                }).join('')}
                <section class='sectionsustainability'><strong>Atributos de sustentabilidade:</strong> 
                    ${product.sustainability.map(element => {
                        return `<div class='textCard'>${element}</div>`;
                    }).join('')}
                </section>
                <p><strong>Certificações:</strong></p>
                <section class='sectionCertification'>
                    ${product.certifications.map(certification => {
                        return `
                        <div id="certificationCard" class="certificationCard">
                            <img id="certification-img" class="certification-img" src="${certification.image}" alt="Certificado">
                            <p id="textCertification" class="textCertification">${certification.description}</p>
                        </div>
                        `;
                    }).join('')}
                </section>
                <p><strong>Rastreabilidade:</strong></p>
                <section class='sectionOrigin'>
                    ${product.origins.map(origin => {
                        return `<div class='textCard'><strong>Origem:</strong> ${origin}</div>`;
                    }).join('')}
                </section>
                <section>
                    ${product.geolocation.map(geolocation => {
                        return `<a href='${geolocation}' style="color:#781e77" target="blank"><span class="material-symbols-outlined" style="color:#781e77">location_on</span>Localização da origem do açucar</a>`
                    }).join('')}
                </section>

            </div>
         </section>`;
        return template;
    });
    return arrayProduct.join('');
}