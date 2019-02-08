function solve(array) {
    let towns = new Map();
    let pattern = /([A-Za-z\s]+)\s+->\s+([\w\s]+)\s+->\s+([\d\.]+)\s+:\s+([\d\.]+)/;
    for (let item of array) {
        let match = pattern.exec(item);
        let town = match[1];
        let product = match[2];
        let totalPrice = Number(match[3]) * Number(match[4]);

        if (!towns.has(town)) {
            towns.set(town, new Map());
        }

        if (!towns.get(town).has(product)) {
            towns.get(town).set(product, 0);
        }

        towns.get(town).set(product, towns.get(town).get(product) + totalPrice);
    }

    for (let [town, product] of towns) {
        console.log(`Town - ${town}`);
        for (let [product, totalPrice] of towns.get(town)) {
            console.log(`$$$${product} : ${totalPrice}`);
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']);