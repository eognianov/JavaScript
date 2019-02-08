function solve(input) {
    let words = {};
    for (let str of input) {
        let array = str.split(/[^\w]+/g).filter(x => x !== '');

        for (let word of array) {
            if (!words.hasOwnProperty(word)) {
                words[word] = 0;
            }
    
            words[word]++;
        } 
    }

    console.log(JSON.stringify(words));
}

solve(["Far too slow, you're far too slow."]);
solve(["JS devs use Node.js for server-side JS.-- JS for devs"]);