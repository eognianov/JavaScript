function solve(input) {
    let map = new Map();
    for (let item of input) {
        let words = item.toLowerCase().split(/\W+/).filter(x => x !== '');
        for (let word of words) {
            if (!map.has(word)) {
                map.set(word, 0);
            }    

            map.set(word, map.get(word) + 1);
        }        
    }

    let sortedMap = Array.from(map.keys()).sort();
    for (let word of sortedMap) {
        console.log(`'${word}' -> ${map.get(word)} times`);
    }
}

solve(["Far too slow, you're far too slow."]);
solve(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);