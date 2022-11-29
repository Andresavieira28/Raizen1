import loginRaizen from './pages/teamRaizen/loginRaizen.js';
import teamRaizen from './pages/teamRaizen/teamRaizen.js';
import finalCostumer from './pages/finalCostumer/finalCostumer.js';
// import searchCNPJ from './pages/SearchCNPJ/search.js';

const main = document.querySelector('#root');

const routes = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#finalCostumer':
        main.appendChild(finalCostumer());
        break;
      case '#teamRaizen':
        main.appendChild(teamRaizen());
        break;
      case '#searchCNPJ':
        main.appendChild(searchCNPJ());
        break;
      case '#loginRaizen':
        main.appendChild(loginRaizen());
        break;

    }
  });
};
window.addEventListener('load', () => {
  // window.location.hash = '';
  routes();
});