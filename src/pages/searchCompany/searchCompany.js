import data from '../../data/company.js';

const companies = data.infos;

export default () => {
    const screen = document.createElement('section');
    const templateScreen = `
    <section>
        <header>
            <img src='img/logoRaízen.png' class='logoCostumer' alt='Logo Raízen'>
        </header>
    </section>
    <input type="text" placeholder="Digite seu CNPJ" id="input-cnpj"></input>
      <button id="btn-search" class="search-btn">Buscar por CNPJ</button>
      <div id='query-template'> 
      </div>
    `;

    screen.innerHTML = templateScreen;

    const btnSearch = screen.querySelector("#btn-search");
    const inputCnpj = screen.querySelector("#input-cnpj");
    const printElement = screen.querySelector('#query-template')
    btnSearch.addEventListener('click', () => {
        const filterCnpj = filterInfo(companies, inputCnpj.value)
        printElement.innerHTML = createCard(filterCnpj);
    })

    return screen;
}

function createCard(filterCnpj) {
    const companiesArray = filterCnpj.map((infos) => {
        const template = `
         <section>
            <strong>CNPJ:</strong> ${infos.empresa}</br>
             <strong>Lote:</strong> ${infos.lote}</br>
             <strong>Localização:</strong> ${infos.localização}</br>
             <strong>Procedência:</strong> ${infos.procedência}</br>
             <strong>Açúcar:</strong> ${infos.açúcar}</br>
             <strong>Data de Venda:</strong> ${infos.data}</br>
         </section>
     `;

        return template;
    });
    return companiesArray.join("");
}

function filterInfo(companies, cnpj,) {
    const arrayInfo = companies.filter((infos) => infos.cnpj === cnpj);
    return arrayInfo;
}
