function solve(array) {
    let words = new Set();
    for (let item of array) {
        let parts = item.split(/[^\w]/g).filter(x => x !== '');
        for (let word of parts) {
            words.add(word.toLowerCase());
        }
    }

    let arr = Array.from(words);
    console.log(arr.join(', '));
}

solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.']);