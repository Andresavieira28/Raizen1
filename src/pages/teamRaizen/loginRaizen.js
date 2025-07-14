/* eslint-disable no-console */
import data from '../../data/users.js';

export default () => {
  const users = data.users;
  const container = document.createElement('div');

  const template = `
    <header class="headerDesktop">
      <a href="https://www.raizen.com.br/">
        <img src="/img/logoRaízen.png" id="logoLogin" alt="Logotipo da Raízen">
      </a>
      <nav class="navDesktop">
        <ul class="ulNavDesktop">
          <li><a id="loadLoginRaizen" href="#loginRaizen">EQUIPE RAÍZEN</a></li>
          <li><a href="#searchCompany">GRANDES CLIENTES</a></li>
          <li><a href="#initialCostumer">RASTREIE SEU PRODUTO</a></li>
        </ul>
      </nav>
    </header>
    <main class="loginRaizen">
      <form id="form">
        <input class="inputLogin" id="inputUser" type="text" placeholder="USUÁRIO" autocomplete="username" />
        <input class="inputLogin" id="inputPassword" type="password" placeholder="SENHA" autocomplete="current-password" />
        <button class="inputLogin" id="btn" type="button">ENTRAR</button>
        <p id="error" style="color: red; margin-top: 8px;"></p>
      </form>
      <img id="banner" src="/img/lavoura.jpg" alt="Imagem de lavoura" />
    </main>
  `;

  container.innerHTML = template;

  const inputUser = container.querySelector('#inputUser');
  const inputPassword = container.querySelector('#inputPassword');
  const btn = container.querySelector('#btn');
  const error = container.querySelector('#error');
  const loadLoginRaizen = container.querySelector('#loadLoginRaizen');

  loadLoginRaizen.addEventListener('click', () => {
    inputUser.value = '';
    inputPassword.value = '';
    error.textContent = '';
  });

  btn.addEventListener('click', () => {
    let auth = false; // reiniciar a cada clique
    users.forEach(user => {
      if (inputUser.value === user.user && inputPassword.value === user.password) {
        auth = true;
      }
    });
    if (auth) {
      window.location.hash = '#teamRaizen';
    } else {
      error.textContent = 'Credenciais inválidas';
    }
  });

  return container;
};
