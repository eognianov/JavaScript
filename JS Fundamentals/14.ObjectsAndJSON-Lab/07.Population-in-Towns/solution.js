function solve(array) {
    let towns = {};
    for (let item of array) {
        let pattern = /([A-Za-z\s]+)\s+<->\s+([\d]+)/g;
        let match = pattern.exec(item);
        let town = match[1];
        let population = Number(match[2]);

        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }

        towns[town] += population;
    }

    Object.keys(towns).forEach(x => console.log(`${x} : ${towns[x]}`));
}

solve(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);