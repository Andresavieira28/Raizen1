import finalCostumer from './pages/finalCostumer/finalCostumer.js';
import searchCompany from './pages/searchCompany/searchCompany.js';

const main = document.querySelector('#root');

const routes = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#finalCostumer':
        main.appendChild(finalCostumer());
        break;
        case '#searchCompany':
          main.appendChild(searchCompany());
          break;
      case '#teamRaizen':
        main.appendChild(teamRaizen());
        break;
    }
  });
};
window.addEventListener('load', () => {
  window.location.hash = '';
  routes();
});