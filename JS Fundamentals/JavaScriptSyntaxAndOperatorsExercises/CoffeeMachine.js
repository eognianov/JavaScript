function main(array) {
    let totalPrice = 0;
    for (let i = 0; i < array.length; i++) {
        let order = array[i].split(', ');

        let orderPrice = 0;
        let coins = Number(order[0]);
        
        let typeOfDrink = order[1];
        if (typeOfDrink === 'coffee') {
            let coffeeType = order[2];
            switch (coffeeType) {
                case 'caffeine': orderPrice += 0.80; break;
                case 'decaf': orderPrice += 0.90; break;
            }
            if (order[3] === 'milk') {
                let milkPrice = (orderPrice * 0.1).toFixed(1);
                orderPrice += Number(milkPrice);
                let sugar = Number(order[4]);
                if (sugar >= 1) {
                    orderPrice += 0.1;
                }
            }
            else{
                let sugar = Number(order[3]);
                if (sugar >= 1) {
                    orderPrice += 0.1;
                }
            }
        }
        else{
            orderPrice += 0.80;
            if (order[2] === 'milk') {
                let milkPrice = (orderPrice * 0.1).toFixed(1);
                orderPrice += Number(milkPrice);
                let sugar = Number(order[3]);
                if (sugar >= 1) {
                    orderPrice += 0.1;
                }
            }
            else{
                let sugar = Number(order[2]);
                if (sugar >= 1) {
                    orderPrice += 0.1;
                }
            }
        }

        if (orderPrice <= coins) {
            let change = coins - orderPrice;
            totalPrice += orderPrice;
            console.log(`You ordered ${typeOfDrink}. Price: ${orderPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`);            
        }
        else{
            let moneyNeeded = orderPrice - coins;
            console.log(`Not enough money for ${typeOfDrink}. Need ${moneyNeeded.toFixed(2)}$ more.`);            
        }
    }

    console.log(`Income Report: ${totalPrice.toFixed(2)}$`);
}

main(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
main(['8.00, coffee, decaf, 4', '1.00, tea, 2']);