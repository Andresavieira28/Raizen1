import data from '../../data/products.js';

const products = data.products;

export default () => {
    const initialPage = document.createElement('section');
    const templateLote = `
    <section class="bodyFinalCostumer">
        <header class="headerFinalCostumer">
            <img src='img/logoRaízen.png' class='logoCostumer' alt='Logo Raízen'>
            <section class='linha-horizontal'></section>
    </header>
    <form class="info-lote">
        <input class="input-lote" id="input-lote" type="text" placeholder="Digite o número do Lote">
        <input type="submit" id="btn-lote" class="btn-lote" value="Pesquisar">
    </form>
`;

initialPage.innerHTML = templateLote;
    return initialPage;
}