import loginRaizen from './pages/login/loginRaizen.js';
import teamRaizen from './pages/teamRaizen/teamRaizen.js';
import initialCostumer from './pages/finalCostumer/initialCostumer.js';
import searchCompany from './pages/searchCompany/searchCompany.js';

const main = document.querySelector('#root');

const renderRoute = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#initialCostumer':
      main.appendChild(initialCostumer());
      break;
    case '#searchCompany':
      main.appendChild(searchCompany());
      break;
    case '#teamRaizen':
      main.appendChild(teamRaizen());
      break;
    case '#loginRaizen':
      main.appendChild(loginRaizen());
      break;
    default:
      main.appendChild(loginRaizen());
  }
};

const routes = () => {
  window.addEventListener('hashchange', renderRoute);
};

window.addEventListener('load', () => {
  if (!window.location.hash) {
    window.location.hash = '#loginRaizen';
  }
  routes();
  renderRoute(); // <- executa a rota ao carregar a página
});
