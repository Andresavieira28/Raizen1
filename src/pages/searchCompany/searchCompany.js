import data from '../../data/company.js';

const companies = data.infos;

function createCard(companies) {
    const companiesArray = companies.map((infos) => {
        const template = `
         <section>
             <strong>Localização:</strong> ${infos.localização}</br>
             <strong>Procedência:</strong> ${infos.procedência}</br>
             <strong>Lote:</strong> ${infos.lote}</br>
             <strong>Açúcar:</strong> ${infos.açúcar}</br>
             <strong>Data:</strong> ${infos.data}</br>
         </section>
     `;

        return template;
    });
    return companiesArray.join("");
}

export default () => {
    const screen = document.createElement('section');
    const templateScreen = `
    <section>
        <header>
            <img src='img/logoRaízen.png' class='logoCostumer' alt='Logo Raízen'>
        </header>
        <div id='query-template'>
        ${createCard(companies)}
    </div>
    </section>
    <input type="text" placeholder="Digite seu CNPJ" class="input-cnpj">
      <button id="btn-search" class="search-btn">Buscar por CNPJ</button>
    `;

    screen.innerHTML = templateScreen;
    return screen;
}
