import data from '../../data/users.js'

export default () => {
    const users = data.users;
    console.log(users);
    const container = document.createElement('div');
    const template = `
      <header>
        <p>header</p>
        <a href="#loginRaizen">sair</a>
      </header>
    `;
    container.innerHTML = template;

    return container;
  };