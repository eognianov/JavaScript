function solve() {
  let generateButton = document.getElementsByTagName('button')[0];
  generateButton.addEventListener('click', () => {
    let productsList = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    for (let product of productsList) {
      let divElement = document.createElement('div');
      divElement.classList.add('furniture');
      let pName = document.createElement('p');
      pName.textContent = `Name: ${product.name}`;
      let img = document.createElement('img');
      img.src = product.img;
      let pPrice = document.createElement('p');
      pPrice.textContent = `Price: ${product.price}`;
      let pFactor = document.createElement('p');
      pFactor.textContent = `Decoration factor: ${product.decFactor}`;
      let input = document.createElement('input')
      input.type = 'checkbox';

      divElement.appendChild(pName);
      divElement.appendChild(img);
      divElement.appendChild(pPrice);
      divElement.appendChild(pFactor);
      divElement.appendChild(input);
      let furnitureList = document.getElementById('furniture-list');
      furnitureList.appendChild(divElement);
    }
  });

  let orderProducts = [];
  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click', () => {
    let allProducts = Array.from(document.getElementById('furniture-list').children);

    for (let product of allProducts) {
      let isChecked = product.getElementsByTagName('input')[0].checked;
      if (isChecked) {
        let name = product.getElementsByTagName('p')[0].textContent.split(': ')[1];
        let price = Number(product.getElementsByTagName('p')[1].textContent.split(': ')[1]);
        let decFactor = Number(product.getElementsByTagName('p')[2].textContent.split(': ')[1]);

        orderProducts.push({ name, price, decFactor });
      }
    }

    let boughtProducts = orderProducts.map(x => x.name);
    let totalPrice = orderProducts.map(x => x.price).reduce((a, b) => a + b);
    let averageDecFactor = orderProducts.map(x => x.decFactor).reduce((a, b) => a + b) / orderProducts.length;
    let textArea = document.getElementsByTagName('textarea')[1];
    textArea.value += `Bought furniture: ${boughtProducts.join(', ')}\n`;
    textArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textArea.value += `Average decoration factor: ${averageDecFactor}`;
  });
}