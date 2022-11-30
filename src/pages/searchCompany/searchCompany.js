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
      <input onchange= "filterDateArray()" type="text" id="startDate" type= "date" value= "2021-08-2026">
      <input onchange= "filterDateArray()" type="text" id="endDate" type= "date" value= "2021-08-30">
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

/*const startDate = document.getElementById("startDate")
const endDate = document.getElementById("endDate")

function filterDateArray(){
    const dates = [
        '2021-08-26',
        '2021-08-27',
        '2021-08-28',
        '2021-08-29',
        '2021-08-30',
    ];

    filteredDate= dates.filter(dateFilter);

    function dateFilter(){
        return datesFilter(date){
            return date >=startDate.value && startDate <= endDate.value
        }
    }
}*/
