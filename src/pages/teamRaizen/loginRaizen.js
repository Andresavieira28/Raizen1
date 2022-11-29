import data from '../../data/users.js'

export default () => {
    const users = data.users;
    const container = document.createElement('div');
    const template = `
      <main class="loginRaizen">
        <div id="total">
          <img src='img/logoRaízen.png' id="logoLogin" alt="raizen">
          <form id="form">
            <input class="inputLogin" id="inputUser" type="text" placeholder="USUÁRIO"></input>
            <input class="inputLogin" id="inputPassword" type="password" placeholder="SENHA"></input>
            <button class="inputLogin" id="btn" type="button">ENTRAR</button>
            <p id="error"></p>
          </form>
        </div>
      </main>
    `;
    container.innerHTML = template;

    const inputUser = container.querySelector('#inputUser');
    const inputPassword = container.querySelector('#inputPassword');
    const btn = container.querySelector('#btn');
    const error = container.querySelector('#error');
    let auth = false;
    console.log(auth);

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