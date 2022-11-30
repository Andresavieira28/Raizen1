/* eslint-disable no-console */
import data from '../../data/lot.js'

export default () => {
    const lots = data.lote;
    const container = document.createElement('div');
    const template = `
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

    <main id="teamRaizen">
      <div>
        <select class="filters" id="unidade">
          <option value="todos" >UNIDADE</option>
          <option value="Maracaí" >PARQUE DE BIOENERGIA MARACAÍ</option>
          <option value="Serra" >PARQUE DE BIOENERGIA SERRA</option>
          <option value="Diamante" >PARQUE DE BIOENERGIA DIAMANTE</option>
        </select>
        <select class="filters" id="fazenda">
          <option value="todos" >FAZENDA</option>
          <option value="1254" >1254</option>
          <option value="1257" >1257</option>
          <option value="3256" >3256</option>
          <option value="3257" >3257</option>
          <option value="9257" >9257</option>
        </select>
        <select class="filters" id="certificações">
          <option value="todos" >CERTIFICAÇÕES</option>
          <option value="ELO" >ELO</option>
          <option value="Renovabio" >RENOVABIO</option>
          <option value="ISCC" >ISCC</option>
          <option value="Bonsucro" >BONSUCRO</option>
        </select>
      </div>
      <table class="table">
        <thead>
          <tr class="headTable"></tr>
        </thead>
        <tbody class="bodyTable">
        </tbody>  
      </table>
    </main>
    `;
    container.innerHTML = template;

    const headTable = container.querySelector('.headTable');
    const bodyTable = container.querySelector('.bodyTable');
    const selectUni = container.querySelector('#unidade');
    const selectFarm = container.querySelector('#fazenda');
    const selectCert = container.querySelector('#certificações');
    
 
    selectUni.addEventListener('change', ()=>{
      print(selectUni.value, selectFarm.value, selectCert.value)
    })
    selectFarm.addEventListener('change', ()=>{
      print(selectUni.value, selectFarm.value, selectCert.value)
    })
    selectCert.addEventListener('change', ()=>{
      print(selectUni.value, selectFarm.value, selectCert.value)
    })

    headTable.innerHTML = `
      <td>LOTE</td>
      <td>FAZENDA</td>
      <td>ÁREA</td>
      <td>PARQUE DE BIOENERGIA</td>
      <td>QUANT.</td>
      <td>DATA VENDA</td>
      <td>CERTIFICAÇÕES</td>
    `
    print("todos", "todos", "todos")

    function print(uni,farm,cert){
      const filterUni = uni==="todos" ? lots : lots.filter((key) => key.parque.includes(uni));
      const filterFarm = farm==="todos" ? filterUni : filterUni.filter((key) => key.fazenda.includes(farm));
      const filterCert = cert==="todos" ? filterFarm : filterFarm.filter((key) => key.certificações.includes(cert));
      
      bodyTable.innerHTML = filterCert.map((key) => `
      <tr>
        <td>${key.num}</td>
        <td>${key.fazenda}</td>
        <td>${key.area}</td>
        <td>${key.parque}</td>
        <td>${key.quant}</td>
        <td>${key.data}</td>
        <td>${key.certificações.join(", ")}</td>
      </tr>
    `).join('');
  
    }

    return container;
  };

