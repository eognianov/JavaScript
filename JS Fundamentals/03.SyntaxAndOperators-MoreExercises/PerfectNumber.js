function main(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        let sum = number;
        for (let j = 1; j < number; j++) {
            if (number % j === 0) {
                sum += j;
            }
        }

        if (sum / 2 === number) {
            result.push(number);
        }
    }

    if (result.length >= 1) {
        console.log(`${result.join(', ')}`)
    }
    else {
        console.log('No perfect number');
    }
}

main([0]);
main([1]);
main([5, 6, 28]);
main([5, 32, 82]);