import data from "../../data/company.js";

const companies = data.infos;

export default () => {
  const screen = document.createElement("section");
  const templateScreen = `
    <section>
      <header class="headerDesktop">
        <div class="headerOut">
          <a href="https://www.raizen.com.br/">
            <img src="img/logoRaízen.png" id="logoLogin" alt="raizen">
          </a>
        </div>
        <nav class="navbar-searchCompany">
          <ul class="ul-searchcompany">
            <div class="box-search">
              <li>
                <a href="#initialCostumer">RASTREIE SEU PRODUTO</a>
              </li>
            </div>
            <div>
              <input type="text" placeholder="Digite seu CNPJ" id="input-cnpj">
              <input type="text" placeholder="Digite mês/ano" id="input-data">
              <button id="btn-search" class="search-btn">Buscar por CNPJ</button>
              <button id="btn-all" class="btn-listartodos">Listar Todos os clientes</button>
            </div>
            <div class="box-search">
              <li>
                <a id="out" href="#loginRaizen">SAIR</a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <div id="query-template"></div>
    </section>
  `;
  screen.innerHTML = templateScreen;

  const inputData = screen.querySelector("#input-data");
  const inputCnpj = screen.querySelector("#input-cnpj");
  const btnSearch = screen.querySelector("#btn-search");
  const btnAll = screen.querySelector("#btn-all");
  const printElement = screen.querySelector("#query-template");

  btnAll.addEventListener("click", () => {
    printElement.innerHTML = createCard(companies);
  });

  btnSearch.addEventListener("click", () => {
    if (inputCnpj.value && inputData.value) {
      const filterCnpj = filterInfo(companies, inputCnpj.value);
      const filterResultData = filterData(filterCnpj, inputData.value);
      printElement.innerHTML = createCard(filterResultData);
    } else if (inputCnpj.value) {
      const filterCnpj = filterInfo(companies, inputCnpj.value);
      printElement.innerHTML = createCard(filterCnpj);
    }
  });

  return screen;
};

function createCard(filterCnpj) {
  const companiesArray = filterCnpj.map((infos) => {
    return `
      <section class="table">
        <table class="styled-table">
          <thead>
            <tr>
              <th>CNPJ</th>
              <th>Lote</th>
              <th>Localização</th>
              <th>Procedência</th>
              <th>Tipo de Açúcar</th>
              <th>Data de Venda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${infos.empresa}</td>
              <td>${infos.lote}</td>
              <td>${infos.localização}</td>
              <td>${infos.procedência}</td>
              <td>${infos.açúcar}</td>
              <td>${infos.data}</td>
            </tr>
          </tbody>
        </table>
      </section>
    `;
  });

  return companiesArray.join("");
}

function filterInfo(companies, cnpj) {
  return companies.filter((infos) => infos.cnpj === cnpj);
}

function filterData(companies, data) {
  return companies.filter((infos) => infos.data === data);
}
