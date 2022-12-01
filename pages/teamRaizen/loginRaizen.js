/* eslint-disable no-console */
import data from '../../data/users.js'

export default () => {
    const users = data.users;
    const container = document.createElement('div');
    const template = `
      <header class="headerDesktop">
        <a href="https://www.raizen.com.br/"><img src='img/logoRaízen.png' id="logoLogin" alt="raizen"></a>
        <nav class='navDesktop'>
          <ul class='ulNavDesktop'>
            <div class="liBoxDesktop">
              <li><a id="loadLoginRaizen" href='#loginRaizen'> EQUIPE RAÍZEN </a></li>
              <li><a href='#searchCompany'> GRANDES CLIENTES </a></li>
              <li><a href='#initialCostumer'> RASTREIE SEU PRODUTO </a></li>
            </div>
          </ul>
        </nav>
        </header>
      <main class="loginRaizen">
        <form id="form">
          <input class="inputLogin" id="inputUser" type="text" placeholder="USUÁRIO"></input>
          <input class="inputLogin" id="inputPassword" type="password" placeholder="SENHA"></input>
          <button class="inputLogin" id="btn" type="button">ENTRAR</button>
          <p id="error"></p>
        </form>
        <img id="banner" src="https://www.energiaquefalacomvoce.com.br/wp-content/uploads/2020/11/cana_de_acucar-696x441.jpg" alt="banner">
      </main>
    `;
    container.innerHTML = template;

    const inputUser = container.querySelector('#inputUser');
    const inputPassword = container.querySelector('#inputPassword');
    const btn = container.querySelector('#btn');
    const error = container.querySelector('#error');
    const loadLoginRaizen = container.querySelector('#loadLoginRaizen');
    let auth = false;

    loadLoginRaizen.addEventListener('click', ()=> {
      inputUser.value = inputPassword.value = "";
      error.innerHTML = "";
    })

    btn.addEventListener('click', ()=>{
      users.forEach(user => {
        if(inputUser.value === user.user && inputPassword.value === user.password){
          auth = true;
        }
      });
      auth ? window.location.hash = '#teamRaizen' : error.innerHTML = "Credenciais inválidas"
    });

    return container;
  };