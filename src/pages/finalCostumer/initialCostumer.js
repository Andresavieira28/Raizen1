/* eslint-disable no-console */
import data from '../../data/products.js';

export default () => {
    const products = data.products;
    const initialPage = document.createElement('section');
    const templateLote = `
    <header class="headerDesktop">
      <div class="headerOut">
        <img src='img/logoRaízen.png' id="logoLogin" alt="raizen">
        <a id="out" href="#loginRaizen">SAIR</a>
      </div>
      <nav class='navDesktop'>
        <ul class='ulNavDesktop'>
          <li><a href='#teamRaizen'> EQUIPE RAÍZEN </a></li>
          <li><a href='#searchCompany'> GRANDES CLIENTES </a></li>
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
            <div>
                <img class="product-img" src="${product.image}" alt="açúcar">
            </div>
            <div class='infoProducts'>
                <div class='textCard'><strong>Lote:</strong> ${product.lote}</div>
                <div class='textCard'><strong>Fazenda:</strong> ${product.farm}</div>
                <div class='textCard'><strong>Fazenda:</strong> ${product.farm2}</div>
                <section class='sectionsustainability'><strong>Atributos de sustentabilidade:</strong> 
                    <div class='textCard'>${product.sustainability}</div>
                    <div class='textCard'>${product.sustainability2}</div>
                    <div class='textCard'>${product.sustainability3}</div>
                </section>
                <p><strong>Certificações:</strong></p>
                <section class='sectionCertification'>
                    <div><img class="certification-img" src="${product.certification}" alt="Certificado"></div>
                    <div><img class="certification-img" src="${product.certification2}" alt="Certificado"></div>
                </section>
                <p><strong>Rastreabilidade:</strong></p>
                <section class='sectionOrigin'>
                    <div class='textCard'><strong>Origem:</strong> ${product.origin}</div>
                    <div class='textCard'><strong>Origem:</strong> ${product.origin2}</div>
                </section>
                <section>
                    <a href='${product.geolocation}' style="color:#781e77" target="blank"><span class="material-symbols-outlined" style="color:#781e77">location_on</span>Localização da origem do açucar</a>
                    <a href='${product.geolocation2}' style="color:#781e77" target="blank"><span class="material-symbols-outlined" style="color:#781e77">location_on</span>Localização da origem do açucar</a>
                </section>

            </div>
         </section>`;

        return template;
    });
    return arrayProduct.join('');
}