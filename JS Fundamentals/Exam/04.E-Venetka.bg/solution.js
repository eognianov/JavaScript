function solve(input) {
    let towns = {};
    for (let i = 0; i < input.length; i++) {
        let obj = input[i];

        if (!towns.hasOwnProperty(obj.town)) {
            towns[obj.town] = {
                'price': 0,
                'count': 0
            }
        }
        towns[obj.town].price += obj.price;
        towns[obj.town].count++;
    }

    let town = Object.keys(towns).sort(function (a, b) {
        if (towns[a].price !== towns[b].price) {
            return towns[b].price - towns[a].price;
        } else if (towns[a].count !== towns[b].count) {
            return towns[b].count - towns[a].count;
        } else {
            return a.localeCompare(b);
        }
    })[0];

    let mostTown = [];
    mostTown[0] = town;
    mostTown[1] = 0;
    let models = {};

    for (let i = 0; i < input.length; i++) {
        let obj = input[i];
        if (obj.town === town) {
            mostTown[1] += obj.price;

            if (!models.hasOwnProperty(obj.model)) {
                models[obj.model] = {
                    'price': 0,
                    'count': 0
                }
                models[obj.model].price = obj.price;
                models[obj.model].count++;
            }
        }
    }

    console.log(`${mostTown[0]} is most profitable - ${mostTown[1]} BGN`);

    let model = Object.keys(models).sort(function (a, b) {
        if (models[a].count !== models[b].count) {
            return models[b].count - models[a].count;
        } else if (models[a].price !== models[b].price) {
            return models[b].price - models[a].price;
        } else {
            return a.localeCompare(b);
        }
    })[0];

    console.log(`Most driven model: ${model}`);

    let cars = {};
    for (let i = 0; i < input.length; i++) {
        let obj = input[i];

        if (obj.model === model) {
            if (!cars.hasOwnProperty(obj.town)) {
                cars[obj.town] = [];
            }

            cars[obj.town].push(obj.regNumber);
        }
    }

    Object.keys(cars).sort(function (a, b) {
        return a.localeCompare(b);
    }).forEach(x => {
        let regNumbers = cars[x].sort(function (a, b) { return a.localeCompare(b) });
        console.log(`${x}: ${regNumbers.join(', ')}`);
    });
}

solve([{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }]
);


solve([{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 9 },
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },]
);