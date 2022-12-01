import data from '../../data/company.js';

const companies = data.infos;

export default () => {
    const screen = document.createElement('section');
    const templateScreen = `
        <section>
            <header class="headerDesktop">
                <div class="headerOut">
                    <a href="https://www.raizen.com.br/"><img src='img/logoRaízen.png' id="logoLogin" alt="raizen"></a>
                </div>
                <nav class='navDesktop'>
                    <ul class='ulNavDesktop'>
                      <div class="liBoxDesktop">
                        <li><a href='#searchCompany'> GRANDES CLIENTES </a></li>
                        <li><a href='#initialCostumer'> RASTREIE SEU PRODUTO </a></li>
                      </div>
                      <div >
                        <input type="text" placeholder="Digite seu CNPJ" id="input-cnpj"></input>
                        <input type="text" placeholder="Digite mês e ano 02/2012" id="input-data"></input>
                        <button id="btn-search" class="search-btn">Buscar por CNPJ</button>  
                      </div>
                    </ul>
            </header>
        <div id="query-template">
        </div>
    </section>
    `;
    screen.innerHTML = templateScreen;

    const inputData = screen.querySelector("#input-data");
    const btnSearch = screen.querySelector("#btn-search");
    const inputCnpj = screen.querySelector("#input-cnpj");
    const printElement = screen.querySelector('#query-template')
    btnSearch.addEventListener('click', () => {
        if (inputCnpj.value && inputData.value) {
            const filterCnpj = filterInfo(companies, inputCnpj.value)
            const filterResultData = filterData(filterCnpj, inputData.value)
            printElement.innerHTML = createCard(filterResultData);
        } else if (inputCnpj.value) {
            const filterCnpj = filterInfo(companies, inputCnpj.value)
            printElement.innerHTML = createCard(filterCnpj);
        }
    })
    return screen;
}
function createCard(filterCnpj) {
    const companiesArray = filterCnpj.map((infos) => {
        const template = `
         <section>
         <section class="table">
            <table>
            <tr>
                <td><strong>CNPJ:</strong></td>
                <td><strong>Lote:</strong></td>
                <td><strong>Localização:</strong></td>
                <td><strong>Procedência:</strong></td>
                <td><strong>Tipo de Açúcar:</strong></td>
                <td><strong>Data de Venda:</strong></td>
                </tr>
            <tr>
                <td>${infos.empresa}</td>
                <td>${infos.lote}</td>
                <td>${infos.localização}</td>
                <td>${infos.procedência}</td>
                <td>${infos.açúcar}</td>
                <td>${infos.data}</td>
            </tr>
            </table>
            </section>
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
function filterData(companies, data,) {
    const arrayData = companies.filter((infos) => infos.data === data);
    return arrayData;
}
