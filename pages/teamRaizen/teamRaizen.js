/* eslint-disable no-console */
import data from '../../data/batch.js';

export default () => {
  const batch = data.lote;
  const container = document.createElement('div');
  const template = `
    <header class="headerDesktop">
      <div class="headerOut">
        <img src='img/logoRaízen.png' id="logoLogin" alt="raizen">
        <a id="out" href="#loginRaizen">SAIR</a>
      </div>
      <nav class='navDesktop'>
        <ul class='ulNavDesktop'>
          <div class="liBoxDesktop">
            <li><a id="loadTeamRaizen" href='#teamRaizen'> EQUIPE RAÍZEN </a></li>
          </div>
          <div class="selects">
            <select class="filters" id="unidade">
              <option value="todos">UNIDADE</option>
              <option value="Maracaí">PARQUE DE BIOENERGIA MARACAÍ</option>
              <option value="Serra">PARQUE DE BIOENERGIA SERRA</option>
              <option value="Diamante">PARQUE DE BIOENERGIA DIAMANTE</option>
            </select>
            <select class="filters" id="fazenda">
              <option value="todos">FAZENDA</option>
              <option value="1254">1254 - RAÍZ</option>
              <option value="1257">1257 - ENERGIA</option>
              <option value="3256">3256 - BIO</option>
              <option value="3257">3257 - RENOVÁVEL</option>
              <option value="9257">9257 - VERDE</option>
              <option value="554433">554433 - BOA VISTA</option>
              <option value="778899">778899 - ALEGRE</option>
              <option value="223344">223344 - BOA ESPERANÇA</option>
              <option value="998877">998877 - VERDE</option>
            </select>
            <select class="filters" id="certificações">
              <option value="todos">CERTIFICAÇÕES</option>
              <option value="ELO">ELO</option>
              <option value="Renovabio">RENOVABIO</option>
              <option value="ISCC">ISCC</option>
              <option value="Bonsucro">BONSUCRO</option>
            </select>
          </div>
        </ul>
      </nav>
    </header>

    <main id="teamRaizen">
      <h1 id="nulo"></h1>
      <table class="table">
        <thead>
          <tr class="headTable"></tr>
        </thead>
        <tbody class="bodyTable"></tbody>
      </table>
    </main>
  `;
  container.innerHTML = template;

  const headTable = container.querySelector('.headTable');
  const bodyTable = container.querySelector('.bodyTable');
  const selectUni = container.querySelector('#unidade');
  const selectFarm = container.querySelector('#fazenda');
  const selectCert = container.querySelector('#certificações');
  const loadTeamRaizen = container.querySelector('#loadTeamRaizen');

  selectUni.addEventListener('change', () => {
    print(selectUni.value, selectFarm.value, selectCert.value);
  });
  selectFarm.addEventListener('change', () => {
    print(selectUni.value, selectFarm.value, selectCert.value);
  });
  selectCert.addEventListener('change', () => {
    print(selectUni.value, selectFarm.value, selectCert.value);
  });

  loadTeamRaizen.addEventListener('click', () => {
    selectUni.value = selectFarm.value = selectCert.value = "todos";
    print(selectUni.value, selectFarm.value, selectCert.value);
  });

  // Inicializa tabela com todos os dados
  print("todos", "todos", "todos");

  function print(uni, farm, cert) {
    const filterUni = uni === "todos" ? batch : batch.filter((key) => key.parque.includes(uni));
    const filterFarm = farm === "todos" ? filterUni : filterUni.filter((key) => key.fazenda[0] === farm);
    const filterCert = cert === "todos" ? filterFarm : filterFarm.filter((key) => key.certificações.includes(cert));

    if (filterCert.length === 0) {
      container.querySelector('#nulo').innerHTML = "NENHUM DADO CORRESPONDENTE";
      headTable.innerHTML = "";
      bodyTable.innerHTML = "";
    } else {
      container.querySelector('#nulo').innerHTML = "";
      headTable.innerHTML = `
        <td>LOTE</td>
        <td>DATA LOTE</td>
        <td>CÓDIGO FAZENDA</td>
        <td>NOME FAZENDA</td>
        <td>ÁREA</td>
        <td>PARQUE DE BIOENERGIA</td>
        <td>UNI (MIL)</td>
        <td>DATA VENDA</td>
        <td>CERTIFICAÇÕES</td>
        <td>CLIENTE</td>
      `;

      bodyTable.innerHTML = filterCert.map((key) => `
        <tr>
          <td>${key.num}</td>
          <td>${key.data[0]}</td>
          <td>${key.fazenda[0]}</td>
          <td>${key.fazenda[1]}</td>
          <td>${key.area}</td>
          <td>${key.parque}</td>
          <td>${key.quant}</td>
          <td>${key.data[1]}</td>
          <td>${key.certificações.join(", ")}</td>
          <td>${key.cliente}</td>
        </tr>
      `).join('');
    }
  }

  return container;
};
