import costumerFinal from './pages/finalcostumer/finalCostumer.js';
import teamRaizen from './pages/teamRaizen/teamRaizen.js';
import searchCNPJ from './pages/SearchCNPJ/search.js';

const main = document.querySelector('#root');

const routes = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#costumerFinal':
        main.appendChild(costumerFinal());
        break;
      case '#teamRaizen':
        main.appendChild(teamRaizen());
        break;
        case '#searchCNPJ':
        main.appendChild(searchCNPJ());
        break;
        default:
    }
  });
};
window.addEventListener('load', () => {
  window.location.hash = '';
  routes();
});