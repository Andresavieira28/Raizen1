/* eslint-disable no-console */
import data from '../../data/users.js'

export default () => {
    const users = data.users;
    console.log(users);
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
    `;
    container.innerHTML = template;

    return container;
  };