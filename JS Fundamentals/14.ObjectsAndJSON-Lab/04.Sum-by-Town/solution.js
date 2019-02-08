function solve(array) {
    let towns = {};
    for (let i = 0; i < array.length - 1; i += 2) {
        let town = array[i];
        let income = Number(array[i + 1]);

        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }
        towns[town] += income;
    }

    console.log(JSON.stringify(towns));
}

solve(['Sofia', 20, 'Varna', 3, 'Sofia', 5, 'Varna', 4]);
solve(['Sofia', 20, 'Varna', 3, 'sofia', 5, 'varna', 4]);
