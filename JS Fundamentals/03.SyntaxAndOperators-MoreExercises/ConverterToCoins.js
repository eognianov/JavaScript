function main(amount, array) {
    array = array.sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < array.length; i++) {
        while (true) {
            if (amount / array[i] >= 1) {
                amount -= array[i];
                result.push(array[i]);
            }
            else{
                break;
            }
        }

    }

    console.log(`${result.join(', ')}`);
}

main(46, [10, 25, 5, 1, 2]);
main(123, [5, 50, 2, 1, 10]);