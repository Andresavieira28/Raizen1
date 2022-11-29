import data from '../../data/users.js'

export default () => {
    const users = data.users;
    console.log(users);
    const container = document.createElement('div');
    const template = `
      <header>
        <p>header</p>
      </header>
      <main>
        <form id="form">
          <input id="inputUser" type="text" placeholder="USER"></input>
          <input id="inputPassword" type="password" placeholder="PASSWORD"></input>
          <button id="btn" type="button">ENTRAR</button>
          <p id="error"></p>
        </form>
      </main>
    `;
    container.innerHTML = template;

    const inputUser = container.querySelector('#inputUser');
    const inputPassword = container.querySelector('#inputPassword');
    const btn = container.querySelector('#btn');
    const error = container.querySelector('#error');
    let auth = false;
    console.log(auth)
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