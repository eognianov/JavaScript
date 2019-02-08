function solve() {
    let products = [];
    for (let i = 0; i < 3; i++) {
        let element = document.getElementsByClassName('product')[i];
        let name = element.children[1].textContent;
        let price = Number(element.children[2].textContent.split(' ')[1]);

        document.getElementsByTagName('button')[i].addEventListener('click', () => {
            products.push({ name, price });
            let textArea = document.getElementsByTagName('textarea')[0];
            textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    }

    let buyButton = document.getElementsByTagName('button')[3];
    buyButton.addEventListener('click', () => {
        let list = new Set(products.map(x => x.name));
        let totalPrice = products.map(x => x.price).reduce((a, b) => a + b).toFixed(2);

        let textArea = document.getElementsByTagName('textarea')[0];
        textArea.value += `You bought ${Array.from(list).join(', ')} for ${totalPrice}.\n`;
    });
}