function solve(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let lastElement = result[result.length - 1];
        if (lastElement === undefined) {
            result.push(array[i]);            
        }
        if (array[i] >= lastElement) {
            result.push(array[i]);
        }
    }

    console.log(result.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);