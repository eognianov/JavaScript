function solve() {
  let products = {};
  let profit = 0;

  let loadButton = document.getElementsByTagName('button')[0];
  loadButton.addEventListener('click', loadClick);

  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click', buyClick);

  let endDayButton = document.getElementsByTagName('button')[2];
  endDayButton.addEventListener('click', endDayClick);

  function loadClick() {
    let log = document.getElementsByTagName('textarea')[2];
    let objects = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    for (let item of objects) {
      if (!products.hasOwnProperty(item.name)) {
        products[item.name] = {
          quantity: item.quantity,
          price: item.price
        }
      } else {
        products[item.name] = {
          quantity: products[item.name].quantity + item.quantity,
          price: item.price
        }
      }
      log.value += `Successfully added ${item.quantity} ${item.name}. Price: ${item.price}\n`;
    }
  }

  function buyClick() {
    let log = document.getElementsByTagName('textarea')[2];
    let order = JSON.parse(document.getElementsByTagName('textarea')[1].value);
    
    if (products.hasOwnProperty(order.name) && products[order.name].quantity >= order.quantity) {
      products[order.name].quantity -= order.quantity;
      let money = products[order.name].price * order.quantity;
      profit += money;
      log.value += `${order.quantity} ${order.name} sold for ${money}.\n`;
    } else {
      log.value += `Cannot complete order.\n`;
    }
  }

  function endDayClick() {
    let log = document.getElementsByTagName('textarea')[2];
    log.value += `Profit: ${profit.toFixed(2)}.\n`;

    loadButton.removeEventListener('click', loadClick);
    buyButton.removeEventListener('click', buyClick);
    endDayButton.removeEventListener('click', endDayClick);
  }
}