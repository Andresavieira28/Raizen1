export default () => {
    const createScreen = document.createElement('section');
    const templateScreen = `
    <section>
        <header>
            <img src='img/logoRaízen.png' class='logoCostumer' alt='Logo Raízen'>
        </header>
        <section>
            <div id=''></div>
        </section>
    </section>`;
    createScreen.innerHTML = templateScreen;
    return createScreen;
}



