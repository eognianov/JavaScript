function solve(array) {
    let number = 1;
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            result.push(number);
        } else if (array[i] == 'remove'){
            result.pop();
        }

        number++;
    }

    if (result.length === 0) {
        console.log('Empty')
    } else {
        console.log(result.join('\n'));
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);