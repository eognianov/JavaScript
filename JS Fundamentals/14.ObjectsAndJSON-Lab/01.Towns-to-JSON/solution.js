function solve(array) {
    let towns = [];
    for (let i = 1; i < array.length; i++) {
        let parts = array[i].split('|').filter(x => x !== '');
        let obj = { Town: parts[0].trim(), Latitude: Number(parts[1].trim()), Longitude: Number(parts[2].trim()) };
        towns.push(obj);
    }

    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);
solve(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |', '| Monatevideo | 34.50 | 56.11 |']);