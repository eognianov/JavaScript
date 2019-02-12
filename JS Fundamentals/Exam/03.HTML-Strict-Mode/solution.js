function solve(array) {
    let result = [];
    let validArray = [];
    let tagPattern = /^<[^<*\s>](.*)>$/g;
    for (let i = 0; i < array.length; i++) {
        while (match = tagPattern.exec(array[i])) {
            validArray.push(match[0]);
        }
    }

    let pattern = /<(\/?\w+)((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)\/?>/g;
    for (let i = 0; i < validArray.length; i++) {
        let tags = [];
        while (match = pattern.exec(validArray[i])) {
            tags.push(match[1]);
        }

        if (tags.length % 2 !== 0) {
            continue;
        }

        let isValidLine = true;
        for (let i = 0; i < tags.length / 2; i++) {
            if (`/${tags[i]}` !== tags[tags.length - 1 - i]) {
                isValidLine = false;
                break;
            }
        }

        if (isValidLine === false) {
            continue;
        }

        let wordPattern = /[^*\s<]>(.*?)</g;
        while (match = wordPattern.exec(validArray[i])) {
            if (match[1] !== '') {
                result.push(match[1].trim());
            }
        }
    }

    console.log(result.join(' '));
}

solve(['<h1><span>Hello World!</span></h1>', '<p>I am Peter.']);
solve(['<div><p>This</p> is</div>', '<div><a>perfectly</a></div>', '<divs><p>valid</p></divs>', '<div><p>This</div></p>', '<div><p>is not</p><div>']);
solve(['<*>F</*>', '<>F</>', '<<a>F</a>', '<a>F</a>']);