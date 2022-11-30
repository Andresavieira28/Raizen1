import loginRaizen from './pages/teamRaizen/loginRaizen.js';
import teamRaizen from './pages/teamRaizen/teamRaizen.js';
//import finalCostumer from './pages/finalCostumer/finalCostumer.js';
import initialCostumer from './pages/finalCostumer/initialCostumer.js';
import searchCompany from './pages/searchCompany/searchCompany.js';

const main = document.querySelector('#root');

const routes = () => {
  window.addEventListener('hashchange', () => {
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
    }
  });
};
window.addEventListener('load', () => {

  routes();
});