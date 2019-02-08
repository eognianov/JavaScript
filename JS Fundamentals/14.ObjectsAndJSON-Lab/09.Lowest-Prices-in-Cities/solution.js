function solve(array) {
    let products = new Map();
    for (let item of array) {
        let items = item.split(' | ').filter(x => x !== '');
        let town = items[0];
        let product = items[1];
        let price = Number(items[2]);

        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let searchedTown = '';
        for (let [town, price] of towns) {
            if (price < lowestPrice) {
                lowestPrice = price;
                searchedTown = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${searchedTown})`);
    }
}

solve(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);